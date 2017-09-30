const mongo = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://localhost:27017/waterloop_internal';

let mod = module.exports = {};

//mod.createUser();

mongo.connect(MONGO_URL, function (err, db) {
    if (!err) {
        console.log("Connected correctly to server");
    }
    db.close();
});