const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

var users = [
  {
    name: 'Nen Xi',
    age: 25
  },
  {
    name: 'Effy',
    age: 25
  }
];
app.get('/users', (req, res) => {
  res.send(users);
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


module.exports.app = app;
