const db = require('./db');
const Member = require('../models/member');

const POPULATE_KEYS = ['teams'];

let mod = module.exports = {};

mod.getMembers = (search, page, sortBy, order) => {
  let sortQuery = {};
  order = (order == 1) ? 1 : -1;
  sortQuery[sortBy] = order;
  return db.getDocumentsByQuery(Member, (search) ? {
    $text: {
      $search: search
    }
  } : null, page, sortQuery, POPULATE_KEYS);
};

mod.getMemberById = (id) => {
  return db.getDocument(Member, {
    _id: id
  }, POPULATE_KEYS);
};

mod.updateMemberById = (id, update) => {
  return db.updateDocument(Member, {_id: id}, update);
};

mod.createMember = (member) => {
  return db.createDocument(member);
};

mod.reset = () => {
  Member.remove((err) => {
    console.log(err);
  });
};