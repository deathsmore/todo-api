const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, client) => {
    if(err) {
        console.log("Unable to connect to the mongo db");
    }
    console.log("Connect to MongoDB server");

    const db = client.db("TodoApp");
    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5ac02ee0af94da1004ef92ba")
    }, {
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

})