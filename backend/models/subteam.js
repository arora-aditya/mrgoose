const mongoose = require('mongoose');

let schema = mongoose.Schema({
  id: String,
  name: String,
  description: String,
  members: [String]
}, {
  runSettersOnQuery: true
});

let Subteam = mongoose.model('Subteam', schema);

module.exports = Subteam;