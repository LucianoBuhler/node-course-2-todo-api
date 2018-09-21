const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ba17ebd556fcd3da0d26691l';
//
// if (!ObjectId.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by ID', todo);
}).catch((e) => console.log(e));

// var user_id = '5b97c5ee4b5693246f6b2a9c';
//
// User.findById(user_id).then((user) => {
//   if (!user) return console.log('Unable to find the user');
//
//   console.log(JSON.stringify(user, undefined, 2));
// }, (e) => console.log(e));
