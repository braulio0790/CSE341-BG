//import dot enviroment packages
const dotenv = require("dotenv");
dotenv.config();
//import mongo db package
const mongodb = require("mongodb").mongodb;


//which data base we want to connect and username/password in the other parameter
//The code below is how we can actually work with the db
mongodb.connect(process.env.CONNECTIONSTRING, { useUnifiedTopology: true}, async function(err,client){
   //this is going to call the especific db or collection
   const db = client.db();
   //Wit this we can call all the data, or using the find method call something especific
   const results = await db.collection("pets").find().toArray();
   console.log(results);
   client.close();
});