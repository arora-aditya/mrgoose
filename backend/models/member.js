const mongoose = require('mongoose');

let schema = mongoose.Schema({
  id: String,
  name: String,
  email: {
    type: String,
    lowercase: true
  }
}, {
  runSettersOnQuery: true
});

let Member = mongoose.model('Member', schema);

module.exports = Member;