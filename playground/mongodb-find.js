//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log('Unable to connetc to mongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db("TodoApp");

    db.collection('Todos').find().count().then((count)=> {
        console.log(count);
    }, (err) =>{
        console.log(err);
    });
});