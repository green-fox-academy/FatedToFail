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
