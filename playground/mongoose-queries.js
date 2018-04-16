const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
var id = "5acc7a817df4852abkcfb8e14";

if(!ObjectID.isValid(id)) {
    console.log('ID is not found');
}
Todo.find(
    {
        _id: id
    }
).then((todos) =>{
    console.log("Find: ", todos);
});

Todo.findOne(
    {
        _id: id
    }
).then((todo) =>{
    console.log("Find one: ", todo);
});

Todo.findById({
    _id: id
}).then((todo) =>{
    console.log("Find by id: ", todo);
});