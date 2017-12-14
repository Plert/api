'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LocationSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter your name'
  },
  long: {
    type: Number,
    required: 'Please enter your'
  },
  lat:{
    type: Number,
    required: 'Latitude of the place'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Users', UserSchema);