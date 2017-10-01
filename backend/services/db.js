const mongoose = require('mongoose');
const Member = require('../models/member');

const db = mongoose.connect('mongodb://localhost/waterloop_internal', {
  useMongoClient: true
});

const PAGE_SIZE = 10;

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

function getDocument(type, json) {
  let promise = new Promise((resolve, reject) => {
    let query = type.findOne(json);
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

function getDocumentsByQuery(type, json, page, sort) {
  let skip = (Math.max(1, page) * PAGE_SIZE) - PAGE_SIZE;
  let promise = new Promise((resolve, reject) => {
    let query = type.find(json).sort(sort).skip(skip).limit(PAGE_SIZE);
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

function updateDocument(type, json, update) {
  let promise = new Promise((resolve, reject) => {
    getDocument(type, json).then((document) => {
      document.set(update);
      document.save((err, updated) => {
        if (err) reject(err);
        resolve(updated);
      });
    }).catch((err) => {
      reject(err);
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

mod.getMembers = (search, page, sortBy, order) => {
  let sortQuery = {};
  order = (order == 1) ? 1 : -1;
  sortQuery[sortBy] = order;
  return getDocumentsByQuery(Member, (search) ? {
    $text: {
      $search: search
    }
  } : null, page, sortQuery);
};

mod.getMemberById = (id) => {
  return getDocument(Member, {
    id: id
  });
};

mod.updateMemberById = (id, update) => {
  return updateDocument(Member, {id: id}, update);
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