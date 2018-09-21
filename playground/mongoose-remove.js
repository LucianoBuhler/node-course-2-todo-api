const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove().then((remove) => {
// })

Todo.findOneAndRemove({_id: '5ba3d2415fa50025cfad6d07'}).then((todo) => {
  console.log(todo);
})

Todo.findByIdAndRemove('5ba3d2415fa50025cfad6d07').then((todo) => {
  console.log(todo);
})
