const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use('/assets', express.static('assets'));

app.listen(PORT, () => {});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'));
});


