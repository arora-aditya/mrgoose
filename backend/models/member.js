const mongoose = require('mongoose');

let schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  },
  joinDate: {
    type: Date,
    default: new Date()
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  bio: String,
  teams: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  }]
}, {
  runSettersOnQuery: true
});

schema.index({
  '$**': 'text'
});

let Member = mongoose.model('Member', schema);

module.exports = Member;