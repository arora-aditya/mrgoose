const mongo = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://localhost:27017/waterloop_internal';

let mod = module.exports = {};

//mod.createUser();

function insertObj = (obj, collection){
  mongo.connect(MONGO_URL, function (err, db) {
      if (!err) {
          console.log("Connected correctly to db");
      }
      db.collection(collection).insertOne(obj, function(err, res) {
         if (err) throw err;
         console.log("Inserted 1 object to " + collection);
      });
      db.close();
  });
}

module.createUser = (user) => {
  insertObj(user, "users");
}

module.createSubteam = (team) => {
  insertObj(team, "team");
}
