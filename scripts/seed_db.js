var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/Plertdb', function() {

 // Load Mongoose models
 seeder.loadModels([
   'app/models/userModel.js'
 ]);

 // Clear specified collections
 seeder.clearModels(['Users'], function() {

   // Callback to populate DB once collections have been cleared
   seeder.populateModels(data, function() {
     seeder.disconnect();
   });

 });
});

// Data array containing seed data - documents organized by Model
var data = [
   {
       'model': 'Users',
       'documents': [
           {
               'name': 'Eduardo',
               'email': 'eduardo@eduardo.com',
               'password': '12345'
           },
           {
               'name': 'Mike',
               'email': 'mike@mike.com',
               'password': '12345'
           },
           {
               'name': 'Melody',
               'email': 'melody@melody.com',
               'password': '12345'
           }
       ]
   }
];
