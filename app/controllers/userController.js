'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('Users');

exports.authenticate = function(req,res) {
  // fetch user and test password verification
  console.log(req.body);
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) throw err;

    // Compare password
    user.comparePassword(req.body.password, function(err, isMatch) {
        if (err) throw err;
        res.json({status: isMatch});
    });
  });
};

exports.list_all_users = function(req, res) {
  User.find({}, function(err, users) {
    if (err)
      res.send(err);
    res.json(users);
  });
};

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.get_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.delete_a_user = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};

