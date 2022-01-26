const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://gowrath:xeroxd33@cluster0.pt6ch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



module.exports = {
    db: 'mongodb://localhost:27017/reactdb'
  };