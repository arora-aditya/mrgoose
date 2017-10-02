const mongodb = require('mongodb');
const mongo = mongodb.MongoClient;

const MONGO_URL = "mongodb://Waterloop123:Waterloop123@goose-shard-00-00-osqmv.mongodb.net:27017,goose-shard-00-01-osqmv.mongodb.net:27017,goose-shard-00-02-osqmv.mongodb.net:27017/test?ssl=true&replicaSet=Goose-shard-0&authSource=admin";

let mod = module.exports = {};

function insertObj(obj, collection){
  mongo.connect(MONGO_URL, function (err, db) {
      if (!err) {
        console.log("Connected correctly to db");
        db.collection(collection).insertOne(obj, function(err, res) {
          if (err) throw err;
          console.log("Inserted 1 object to " + collection);
        });
        db.close();
      } else {

        console.log(err);
      }
  });
}

function getAll(collection){
  let promise = new Promise((resolve, reject) => {
    mongo.connect(MONGO_URL, function (err, db) {
        if (!err) {
          console.log("Connected correctly to db");
          db.collection(collection).find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            resolve(result);
          });
          db.close();
        }
    });
  });
  return promise;
}

function getObjById(id, collection){
  let promise = new Promise((resolve, reject) => {
    mongo.connect(MONGO_URL, function (err, db) {
        if (!err) {
            console.log("Connected correctly to db");
        }
       let  mongoId = new mongodb.ObjectID(id);
        db.collection(collection).find({
             _id: mongoId 
        }).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            resolve(result);
        });

        db.close();
    });
  });
  return promise;
}

mod.createUser = (user) => {
  insertObj(user, "users");
}

mod.createSubteam = (team) => {
  insertObj(team, "teams");
}

mod.getUsers = () => {
  return getAll("users");
}

mod.getUserById = (id) => {
  return getObjById(id, "users");
}

mod.getSubteams = () => {
  return getAll("teams");
}

mod.getSubteamById = (id) => {
  return getObjById(id, "teams");
}

