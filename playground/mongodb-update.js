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

//   db.collection('Todos').findOneAndUpdate({
//       _id: new ObjectID('5c1e0dd79b161a81f29caa15')
//   }, {$set:{
//       completed: true
//   }
// },{
//     returnOriginal:false
// }).then((result) => {console.log(result)})

db.collection('Users').findOneAndUpdate({_id: new ObjectID('5c1de46ae8cc3428e008f452')}
, {$set:{
    name:"Irina"
}, $inc:{
    age:1
}
},{returnOriginal:false}).then((result) =>{
    console.log(result);
})


  client.close();
 });


