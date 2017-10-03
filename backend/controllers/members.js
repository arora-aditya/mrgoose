const app = require('../app');
const service = require('../services/memberService');

const Member = require('../models/member');

let mod = module.exports = {};

app.get('/member', function (req, res) {
  //service.reset();
  /*service.createMember(new Member({
    username: '1234',
    fullName: 'Test User',
    email: 'test1@abc.ca',
    bio: 'WOW',
  }));*/
  service.getMembers(req.query.search, req.query.page, req.query.sort, req.query.order).then((data) => {
    sendResponse(res, data);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

app.get('/member/:id', function (req, res) {
  service.getMemberById(req.params.id).then((data) => {
    sendResponse(res, data);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

app.post('/member', function (req, res) {
  service.createMember(new Member(req.body)).then((data) => {
    sendResponse(res, data);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

app.post('/member/:id', function (req, res) {
  service.updateMemberById(req.params.id, req.body).then((data) => {
    sendResponse(res, data);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

function sendResponse(res, data) {
  res.setHeader('Content-Type', 'application/json');
  res.json(data);
}