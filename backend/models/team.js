const mongoose = require('mongoose');
const Member = require('./member');

let schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member'
  }]
});

schema.index({
  name: 'text',
  description: 'text'
});

let Team = mongoose.model('Team', schema);

module.exports = Team;