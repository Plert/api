//Load database
var Datastore = require('nedb');
var usersdb = new Datastore('Users/eduardosalazar/Documents/lab/plert/api/db/groups.db')

//Constructor
function User(){
  this.name = '';
  this.email = '';
  this.friends = [];
  this.groups = [];
}

// Adding new group
User.prototype.addGroup = function(group){

};

User.prototype.toJson = function(){
  return {
    'name': this.name,
    'email': this.email,
    'friends': this.friends,
    'groups': this.groups
  }
};

User.prototype.save = function(){
  usersdb.insert(this.toJson, function(err, doc) {
    if (err === null) {
      console.log(doc);
    }
  });
}



user = new User();
user.name = 'Eduardo';
user.email = 'esalazar922@gmail.com';
user.save();
