const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'));
});

app.get('/api/hello', (req, res) => {
  console.log(req.query);
  const name = req.query.name || 'Guest';
  res.json({
    message: `Hello ${name}`,
  });
});

app.get('/api/mentors/:mentorId', (req, res) => {
  const mentor = mentors[req.params.mentorId - 1];

  if(mentor === undefined) {
    res.status(404);
    res.json({
      message: 'No mentors',
      lófasz: '30 cm'
    });
  } else {
    res.json(mentors[req.params.mentorId - 1]);
  }
});

const mentors = [
  { name: 'István', age: 30},
  { name: 'Bence', age: 42},
  { name: 'Balázs', age: 27}
];

const listMentors = (req, res) => {
  console.log(req);
  res.json(mentors);
};

app.get('/api/mentors', listMentors);

app.listen(PORT, () => {
  console.log(`Yaaay it's ${PORT}`);
});
