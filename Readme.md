## Description

## How to run
1. Install Dependencies
```
npm install
```

2. Run database with seed
This will create your seed database in folder db/. Database is in Nedb 
```
npm run-script dump_db
```
After running you should have the following files inside db folder:
- ItemInfo.db
- users.db


## Things to Know

API is made using express
Database is made using mongodb
Mongoose is used to interact with mongodb instance

### Dev Tools
Nodemon is used for restarting the server with every change in 
the code
