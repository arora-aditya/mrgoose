const db = require('./db');
const Issue = require('../models/issue');

let mod = module.exports = {};

mod.getIssues = (search, page, sortBy, order) => {
  let sortQuery = {};
  order = (order == 1) ? 1 : -1;
  sortQuery[sortBy] = order;
  return db.getDocumentsByQuery(Issue, (search) ? {
    $text: {
      $search: search
    }
  } : null, page, sortQuery);
};

mod.getIssueById = (id) => {
  return db.getDocument(Issue, {
    _id: id
  });
};

mod.updateIssueById = (id, update) => {
  return db.updateDocument(Issue, {_id: id}, update);
};

mod.createIssue = (issue) => {
  return db.createDocument(issue);
};