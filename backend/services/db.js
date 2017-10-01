const mongoose = require('mongoose');
const Member = require('../models/member');

const db = mongoose.connect('mongodb://localhost/waterloop_internal', {
  useMongoClient: true
});

let mod = module.exports = {};

function getDocuments(type) {
  let promise = new Promise((resolve, reject) => {
    type.find((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  return promise;
}

function getDocumentsByQuery(type, json, sort, limit) {
  let promise = new Promise((resolve, reject) => {
    let query = type.find(json).sort(sort).limit(limit);
    query.exec((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  return promise;
}

function createDocument(model) {
  let promise = new Promise((resolve, reject) => {
    model.save((err, model) => {
      if (err) {
        reject(err);
      } else {
        resolve(model);
      }
    });
  });
  return promise;
};

mod.getMembers = () => {
  return getDocuments(Member);
};

mod.getMemberById = (id) => {
  return getDocumentsByQuery(Member, {
    id: id
  }, null, 1);
};

mod.createMember = (member) => {
  return createDocument(member);
};

mod.reset = () => {
  Member.remove((err) => {
    console.log(err);
  });
};

db.on('error', console.error.bind(console, 'connection error:'));