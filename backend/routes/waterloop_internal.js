var express = require('express');
var router = express.Router();

var url = "mongodb://Waterloop123:Waterloop123@goose-shard-00-00-osqmv.mongodb.net:27017,goose-shard-00-01-osqmv.mongodb.net:27017,goose-shard-00-02-osqmv.mongodb.net:27017/test?ssl=true&replicaSet=Goose-shard-0&authSource=admin";
var MongoClient = require('mongodb').MongoClient;

/* GET database listing. */

  MongoClient.connect(url, function(err, db) {
    //db.collection("users");
    //db.collection("team");

  });


module.exports = router;
