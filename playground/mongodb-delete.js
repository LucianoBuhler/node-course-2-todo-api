// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB server:', err);
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Have dinner'}).then((result) => {
  //   console.log(result);
  // })

  // findOneandDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  // deleteMany
  // db.collection('Users').deleteMany({name: 'Bernard' }).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b9282bf246845746901229f')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });


  // client.close();
});
