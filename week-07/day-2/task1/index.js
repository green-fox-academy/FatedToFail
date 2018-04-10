const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const bodyParser = require('body-parser');

app.use('/assets', express.static('assets'));
app.use(bodyParser.json());

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
        });
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

function sum(num) {
  if(num === 1) {
    return 1;
  }
  return num + sum(num - 1);
}

function factor(num) {
  if(num === 1) {
    return 1;
  }
  return num * factor(num - 1);
}

app.post('/dountil/:multiplication', (req, res) => {
  if(req.params.multiplication === 'sum') {
    res.json({
      result: sum(req.body.until)
    });
  } else if(req.params.multiplication === 'factor') {
    res.json({
      result: factor(req.body.until)
    });   
  }
});

app.post('/arrays', (req, res) => {
  const what = req.body.what;
  const funcArray = {
    sum: (num) => {
      return num.reduce((a, b) => a + b);
    },
    multiply: (num) => {
      return num.reduce((a = 1, b) => a * b);
    },
    double: (num) => {
      return num.map(e => e * 2);
    }
  }
  if(what === undefined) {
    res.json({
      error: 'Please provide what to do with the numbers!'
    });
  } else {
    res.json({
      result: funcArray[what](req.body.numbers)
    })
  }
});

let yoda = (text) => {
  const rngText = ['Arrgh. Uhmm.', 'Err..err.err.', 'Uhh... pada... wannn.', 'Young one... the phorce...'];
  let tempText = '';
  return text
    .split('. ')
    .map((e, i, a) => 
      i < a.length - 1
        ? e.
          split(' ')
          .map((e, i, a) => {
            if(i === 0) {
              tempText = e;
              return a[i + 1].split('').map((e, i) => i === 0 ? e.toUpperCase() : e).join('');
            } else if(i % 2 === 1) {
              return tempText.toLowerCase()
            } else if(a[i + 1] ===  undefined) {
              return e;
            } else {
              tempText = e;
              return a[i + 1];
            }
          }).join(' ')
        : e
    ).join(`. ${rngText[Math.floor(Math.random() * 4)]} `);
}

app.post('/sith', (req, res) => {
  console.log(req.body.text);
  if(req.body.text === undefined) {
    res.json({error: 'Feed me some text you have to, padawan young you are. Hmmm.'});
  } else {
    res.json({sith_text: yoda(req.body.text)});
  }
});

