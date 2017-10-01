const db = require('../services/db');
const app = require('../app');

const Member = require('../models/member');

let mod = module.exports = {};

app.get('/member', function (req, res) {
  /*db.createMember(new Member({
    id: '1234',
    name: 'test',
    email: 'test@abc.ca'
  }));*/
  db.getMembers().then((data) => {
    sendResponse(res, data);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

app.get('/member/:id', function (req, res) {
  db.getMemberById(req.params.id).then((data) => {
    sendResponse(res, data);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

function sendResponse(res, data) {
  res.setHeader('Content-Type', 'application/json');
  res.json(data);
}