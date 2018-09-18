var mongoose = require('mongoose');

// Users section
var Users = mongoose.model('Users', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = {Users};
