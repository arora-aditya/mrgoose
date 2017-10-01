const db = require('../services/db');
const app = require('../app');

const Member = require('../models/member');

let mod = module.exports = {};

app.get('/member', function (req, res) {
  //db.reset();
  /*db.createMember(new Member({
    id: '4321',
    name: 'test2',
    email: 'test2@abc.ca',
    joinDate: new Date()
  }));*/
  db.getMembers(req.query.search, req.query.page, req.query.sort, req.query.order).then((data) => {
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

app.post('/member', function (req, res) {
  db.createMember(new Member(req.body)).then((data) => {
    sendResponse(res, data);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

app.post('/member/:id', function (req, res) {
  db.updateMemberById(req.params.id, req.body).then((data) => {
    sendResponse(res, data);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

function sendResponse(res, data) {
  res.setHeader('Content-Type', 'application/json');
  res.json(data);
}