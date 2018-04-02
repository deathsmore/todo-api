//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


// MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
//     if (err) {
//         return console.log('Unable to connetc to mongoDB server');
//     }
//     console.log('Connected to MongoDB server');
//     const db = client.db("TodoApp");
//     // db.collection('Todos').insertOne({
//     //     text: "Learning new node course",
//     //     completed: false
//     // }, (err, result) => {
//     //     if(err) {
//     //         return console.log('Unable to insert todo', err);
//     //     }
//     //     console.log(JSON.stringify(result.ops, undefined, 2));
//     // });
//
//     db.collection("Users").insertOne({
//         name: "Tony",
//         age: 24,
//         location: "Ha Noi"
//     }, (err, result) => {
//         if(err) {
//             return console.log("Unable to insert user", err);
//         }
//         console.log(JSON.stringify(result.ops, undefined, 2));
//     })
//
//
//     client.close();
// });