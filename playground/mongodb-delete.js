//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log('Unable to connetc to mongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db("TodoApp");

    //delete many
    // db.collection("Todos").deleteMany({text: "Ear lunch"}).then((result) => {
    //     console.log(result);
    // });

    //delete one
    // db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });
    //findoneanddelete
    // db.collection("Todos").findOneAndDelete({text:"Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    // db.collection("Users").deleteMany({name: "mike"}).then((result) => {
    //     console.log(result);
    // });

    db.collection("Users").findOneAndDelete({_id: new ObjectID("5ac08619120e3c0c80f3b9ee")}).then((result) => {
        console.log(result);
    });
});