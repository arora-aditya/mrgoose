const mongoose = require('mongoose');

let schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  assignedTo: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member'
  }]
});

schema.index({
  name: 'text',
  description: 'text'
});

let Issue = mongoose.model('Issue', schema);

module.exports = Issue;