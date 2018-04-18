const express = require('express');
const mysql = require('mysql');
const PORT = 8080;
let app = express();

app.use('/static', express.static(__dirname + '/static'));

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '6278pRn!',
  database: 'exam'
});



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/planets', (req, res) => {
  conn.query('SELECT * FROM planet', (err, response) => {
    if (err) {
      res.status(400).json({
        error: 'Wrong request',
      });
    } else {
      res.json(response); 
    }
  })
});

app.get('/ship', (req, res) => {
  conn.query('SELECT * FROM spaceship', (err, response) => {
    if (err) {
      res.status(400).json({
        error: 'Wrong request',
      });
    } else {
      res.json(response); 
    }
  })
});

app.post('/movehere/:planet_id', (req, res) => {
  conn.query(`SELECT name FROM planet WHERE planet.id = ${req.params.planet_id}`, (err, response) => {
    if (err) {
      res.status(400).json({result: "error"});
    } else {
      conn.query(`UPDATE spaceship SET planet = '${response[0].name}'`, (err, response) => {
        if (err) {
          res.status(400).json({result: "error"});
        } else {
          res.json({result: "success"});
        }
      });
    }
  });
});

app.post('/toship/:planet_id', (req, res) => {
  conn.query(`SELECT population, utilization FROM planet, spaceship WHERE planet.id = ${req.params.planet_id}`, (err, result) => {
    if (err) {
      res.status(400).json('Wrong request');
    } else {
      let freeSpaces = 60 - result[0].utilization;
      let onPlanet = result[0].population;
      if (freeSpaces >= onPlanet) {
        freeSpaces -= onPlanet;
        onPlanet = 0;
      } else {
        onPlanet -= freeSpaces;
        freeSpaces = 0;
      }
      conn.query(`UPDATE planet SET population = ${onPlanet} WHERE planet.id = ${req.params.planet_id}`, (err) => {
        if(err) {
          res.status(400).json('Wrong request');
        }
      });
      conn.query(`UPDATE spaceship SET utilization = ${60 - freeSpaces}`, (err) => {
        if (err) {
          res.status(400).json('Wrong request');
        }
      });
      res.json('OOHH YEAAAH');
    }
  });
});

app.post('/toplanet/:planet_id', (req, res) => {
  conn.query(`SELECT population, utilization FROM planet, spaceship WHERE planet.id = ${req.params.planet_id}`, (err, result) => {
    if (err) {
      res.status(400).json('Wrong request');
    } else {
      let onShip = result[0].utilization;
      let onPlanet = result[0].population;
      conn.query(`UPDATE planet SET population = ${onPlanet + onShip} WHERE planet.id = ${req.params.planet_id}`, (err) => {
        if(err) {
          res.status(400).json('Wrong request');
        }
      });
      conn.query(`UPDATE spaceship SET utilization = ${0}`, (err) => {
        if (err) {
          res.status(400).json('Wrong request');
        }
      });
      res.json('OOHH YEAAAH');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);  
});
