// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB server:', err);
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
// db.collection('Todos').find({
//   _id: new ObjectID('5b927e10c0a5da72c0923719')
// }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
//     console.log('Unabled to fetch todos', err);
//   });

// count Todos
// db.collection('Todos').countDocuments().then((count) => {
//     console.log('Todos count', count);
//   }, (err) => {
//     console.log('Unabled to fetch todos', err);
//   });

db.collection('Users').find({name: 'Evan'}).toArray().then((docs) =>{
  console.log(JSON.stringify(docs, undefined, 2));
});

  // client.close();
});
