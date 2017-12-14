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
               'email': 'eduardo@eduardo.com'
           },
           {
               'name': 'Mike',
               'email': 'mike@mike.com'
           },
           {
               'name': 'Melody',
               'email': 'melody@melody.com'
           }
       ]
   }
];
