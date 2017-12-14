// Import Data into Database

var _ItemDb = require('./ItemDb2.json');

module.exports = ItemDb;

function User() {
  this.id = '';
  this.name = '';
  this.email = '';
  this.created_tp = '';
  this.updated_tp = '';
};

User.prototype.find = function(){

}
