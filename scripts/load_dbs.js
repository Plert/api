module.exports = {
    load_dbs: function(){
        // Of course you can create multiple datastores if you need several
        // collections. In this case it's usually a good idea to use autoload for all collections.
        db = {};
        db.users = new Datastore('db/users.db');
        db.items = new Datastore('db/ItemInfo.db');

        // You need to load each database (here we do it asynchronously)
        db.users.loadDatabase();
        console.log('Database user loaded')
        db.items.loadDatabase();
        console.log('Database items loaded')
    }
}
