//import dot enviroment packages
const dotenv = require('dotenv');
dotenv.config();
//import mongo db package
const mongodb = require('mongodb');


//which data base we want to connect and username/password in the other parameter
//The code below is how we can actually work with the db
mongodb.connect(process.env.CONNECTIONSTRING, function(err,client){
});

//an example I did to connect to DB
const connectDB = async () => {
   await mongoose.connect(process.env.CONNECTIONSTRING)
   console.log('db connected...!');
}
//
module.exports = connectDB;

