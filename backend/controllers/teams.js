const app = require('../app');
const service = require('../services/teamService');

const Team = require('../models/team');

let mod = module.exports = {};

app.get('/team', (req, res) => {
  //service.reset();
  /*service.createTeam(new Team({
    name: 'one team',
    description: 'cool team'
  }));*/
  service.getTeams(req.query.search, req.query.page, req.query.sort, req.query.order).then((data) => {
    sendResponse(res, data);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

app.get('/team/:id', (req, res) => {
  service.getTeamById(req.params.id).then((data) => {
    sendResponse(res, data);
  }).catch((err) => {
    res.status(500).json(err);
  });
})

app.post('/team', (req, res) => {
  service.createTeam(new Team(req.body)).then((data) => {
    sendResponse(res, data);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

app.post('/team/:id', (req, res) => {
  service.updateTeamById(req.params.id, req.body).then((data) => {
    sendResponse(res, data);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

function sendResponse(res, data) {
  res.setHeader('Content-Type', 'application/json');
  res.json(data);
}