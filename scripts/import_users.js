// Import Data into Database
// 1. Require module
var Datastore = require('nedb');

// 2. Confuration
var itemDb = new Datastore({ filename: 'db/users.db', autoload: true });

// 3. Index
itemDb.ensureIndex({ fieldName: 'id', unique: true });

// 4. Read from CSV
const csvFilePath="scripts/seed/seed_users.csv"
const csv=require('csvtojson')
csv().fromFile(csvFilePath).on('json',(jsonObj)=>{
  console.log(jsonObj);
  insertItem(jsonObj);
}).on('done',(error)=>{
	console.log('Finished Importing Users seed')
})

var insertItem = function(new_element){
  itemDb.insert(new_element, function(err, doc) {
    if (err === null) {
      console.log(doc);
    }
  });
}
