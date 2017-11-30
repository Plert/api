// Import Data into Database

var Datastore = require('nedb');
var itemDb = new Datastore({ filename: 'db/ItemInfo.db', autoload: true });

itemDb.ensureIndex({ fieldName: 'id', unique: true });

// Read from CSV
const csvFilePath="scripts/ItemInfo-104065422.csv"
const csv=require('csvtojson')
csv().fromFile(csvFilePath).on('json',(jsonObj)=>{
  insertItem(jsonObj)
}).on('done',(error)=>{
	console.log('Finished Importing database')
})

var insertItem = function(new_element){
  itemDb.insert(new_element, function(err, doc) {
    if (err === null) {
      console.log(doc);
    }
  });
}

itemDb.find({ itemPrice: { $gt: 100 }}, function(err, docs) {
    docs.forEach(function(doc) {
        console.log(doc._id, doc.itemName);
    });
});
