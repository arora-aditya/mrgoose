const db = require('./db');
const Team = require('../models/team');

const POPULATE_KEYS = ['members'];

let mod = module.exports = {};

mod.getTeams = (search, page, sortBy, order) => {
  let sortQuery = {};
  order = (order == 1) ? 1 : -1;
  sortQuery[sortBy] = order;
  return db.getDocumentsByQuery(Team, (search) ? {
    $text: {
      $search: search
    }
  } : null, page, sortQuery, POPULATE_KEYS);
};

mod.getTeamById = (id) => {
  return db.getDocument(Team, {
    _id: id
  }, POPULATE_KEYS);
};

mod.updateTeamById = (id, update) => {
  return db.updateDocument(Team, {_id: id}, update);
};

mod.createTeam = (properties) => {
  return db.createDocument(Member, properties);
};

mod.reset = () => {
  Team.remove((err) => {
    console.log(err);
  });
};