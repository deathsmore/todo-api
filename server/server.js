var express = require('express');
var bosyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');
var {ObjectID} = require('mongodb');

const port = process.env.PORT || 3000;
var app = new express();
app.use(bosyParser.json());

app.post("/todos", (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    });
});

//get all todos

app.get("/todos", (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    },  (err)=> {
        res.statusCode(400).send(err);
    });
});

app.get("/todos/:id", (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(id).then((todo)=> {
        if(todo) {
            res.send({todo});
        } else {
            res.status(404).send();
        }
    }, (err)=> {
        res.status(400).send();
    });
});
app.listen(port, ()=> {
    console.log(`Listening at port ${port}`);
});

