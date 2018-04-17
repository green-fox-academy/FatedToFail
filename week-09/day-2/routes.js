const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  if (req.query.message === undefined) {
    res.status('400').json({
      error: 'I am Groot!',
    });

  } else {
    res.json({
      recieved: req.query.message,
      translated: 'I am Groot!',
    });
  }
});

app.get('/yondu', (req, res) => {
  let time = req.query.time === undefined ? 'a' : parseInt(req.query.time);
  let distance = req.query.distance === undefined ? 'a' : parseInt(req.query.distance);
  if (Number.isInteger(time + distance)) {
    if (time === 0) {
      res.status(409).json({
        error: 'Jesus bro, did you ever learned Math??!?'
      });
    } else {
      res.json({
        distance: distance,
        time: time,
        speed: distance / time,
      });
    }
  } else {
    res.status(400).json({
      error: 'You dumbass',
    });
  }
});

let cargo = {
  "caliber25": 0,
  "caliber30": 0,
  "caliber50": 0
}

app.get('/rocket', (req, res) => {

});

module.exports = app;
