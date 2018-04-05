const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

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

app.get('/alcohol', (req, res) => {
  const cocktails = [
    { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
    { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
    { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
    { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
    { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
    { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
    { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
    { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
  ];
  let lessCocktail = req.query.alcohol === undefined
    ? cocktails
    : cocktails.filter(e => e.contains.indexOf(req.query.alcohol) !== -1);
  const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];
  res.render('alcohol', {
    list: alcoholList,
    obj: lessCocktail,
  });
});


