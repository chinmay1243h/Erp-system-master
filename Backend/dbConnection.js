
const mongoose = require('mongoose');
const uri='mongodb+srv://2203051240022:Chinmay12345@chinmay.ohkrv.mongodb.net/?retryWrites=true&w=majority&appName=Chinmay'



 function connection() {
  mongoose.connect(uri);
  console.log("Connected to MongoDb")
}

module.exports=connection