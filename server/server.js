const express = require('express');
const boDyParser = require('body-parser');

var {mongoose} =require('./db/mongoose.js');

var {Todo} = require('./models/todo.js');
var {User} = require('./models/users.js');

var app = express();

app.use(boDyParser.json());
app.post('/todos',(req, res) =>{
    var todo = new Todo({
        text: req.body.text
    })
  todo.save().then((doc) =>{
    res.send(doc)
  }, ).catch((e) =>{
    res.status(400).send(e);
  })
});




app.listen(3000, () =>{
    console.log("Started on port 3000");
})