const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/waterloop_internal', {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

const PAGE_SIZE = 10;

let mod = module.exports = {};

function populateKeys(query, keys) {
  if (keys) {
    for (let i = 0; i < keys.length; i++) {
      query = query.populate(keys[i]);
    }
  }
} 

mod.getDocument = (type, json, populate) => {
  let promise = new Promise((resolve, reject) => {
    let query = type.findOne(json);
    populateKeys(query, populate);
    query.exec().then(resolve).catch(reject);
  });
  return promise;
};

mod.getDocumentsByQuery = (type, json, page, sort, populate) => {
  let skip = (Math.max(1, page) * PAGE_SIZE) - PAGE_SIZE;
  let promise = new Promise((resolve, reject) => {
    let query = type.find(json).sort(sort).skip(skip).limit(PAGE_SIZE);
    populateKeys(query, populate);
    query.exec().then(resolve).catch(reject);
  });
  return promise;
};

mod.updateDocument = (type, json, update) => {
  let promise = new Promise((resolve, reject) => {
    getDocument(type, json).then((document) => {
      document.set(update);
      document.save().then(resolve).catch(reject);
    }).catch(reject);
  });
  return promise;
};

mod.createDocument = (model) => {
  let promise = new Promise((resolve, reject) => {
    model.save().then(resolve).catch(reject);
  });
  return promise;
};

db.on('error', console.error.bind(console, 'connection error:'));