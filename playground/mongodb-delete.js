//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db =client.db('TodoApp');

//   db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) =>{
//       console.log(result);
//   })
// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) =>{
//     console.log(result);
// })

// db.collection('Todos').deleteOne({comleted:false}).then((result) =>{
//     console.log(result);
// })
  db.collection('Users').deleteMany({name:"Artem"});
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5c1de58c213ddf1b54ef9259")}).then((result) =>{
      console.log(result);
  })

  client.close();
 });


 //5c1de58c213ddf1b54ef9259
