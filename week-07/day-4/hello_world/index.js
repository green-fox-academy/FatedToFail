const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');


app.listen(PORT, () => {
  console.log('hello there');
});

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Hi there',
  });
});

app.get('/greeting', (req, res) => {
  let name = '';
  req.query.name === undefined
    ? name = 'Guest'
    : name = req.query.name;
  res.render('greetings', {
    name: name,
  });
});

app.get('/todos', (req, res) => {
  const todos = [
    'get up',
    'survive',
    'go back to bed',
  ];
  res.render('todos', {
    list: todos,
  });
});
