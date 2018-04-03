const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use('/assets', express.static('assets'));

app.listen(PORT, () => {});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'));
});

app.get('/doubling/', (req, res) => {
  if(req.query.input === undefined) {
    res.json({
      error: 'Please provide an input!'
    });
  } else {
    res.json({
      received: req.query.input,
      result: `${req.query.input * 2}`
    });
  }
});

app.get('/greeter', (req, res) => {
  if(req.query.name === undefined || req.query.title === undefined) {
    req.query.name === undefined
      ? res.json({
          error: 'Please provide a name!'
        })
      : res.json({
          error: 'Please provide a title!'
        })
  } else {
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    });
  }
});

app.get('/appenda/:string', (req, res) => {
  res.json({
    appended: req.params.string + 'a'
  });
});
