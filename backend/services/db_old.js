const mongo = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://localhost:27017/waterloop_internal';

let mod = module.exports = {};

function insertObj(obj, collection) {
  mongo.connect(MONGO_URL, function (err, db) {
    if (!err) {
      console.log("Connected correctly to db");
      db.collection(collection).insertOne(obj, function (err, res) {
        if (err) throw err;
        console.log("Inserted 1 object to " + collection);
      });
      db.close();
    }
  });
}

function getAll(collection) {
  let promise = new Promise((resolve, reject) => {
    mongo.connect(MONGO_URL, function (err, db) {
      if (!err) {
        console.log("Connected correctly to db");
        db.collection(collection).find({}).toArray(function (err, result) {
          if (err) throw err;
          resolve(toObject(result));
        });
        db.close();
      }
    });
  });
  return promise;
}

function getObjById(query, collection) {
  let promise = new Promise((resolve, reject) => {
    mongo.connect(MONGO_URL, function (err, db) {
      if (!err) {
        console.log("Connected correctly to db");
      }
      db.collection(collection).find({}).toArray(function (err, result) {
        if (err) throw err;
        res = toObject(result);

        for (var i = 0; i < res.length; i++) {
          if (res[i]["_id"] == parseInt(query)) {
            resolve(res[i]);
          }
        }
      });
      db.close();
    });
  });
  return promise;
}

module.createUser = (user) => {
  insertObj(user, "users");
}

module.createSubteam = (team) => {
  insertObj(team, "team");
}

module.getUsers = () => {
  return getAll("users");
}

module.getUserById = (id) => {
  return getObjById(id, "users");
}

module.getSubteams = () => {
  return getAll("teams");
}

module.getSubteamById = (id) => {
  return getObjById(id, "teams");
}