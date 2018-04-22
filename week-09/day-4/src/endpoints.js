const express = require('express');
const controller = require('./controller/getGame');

const app = express();


app.use('/static', express.static(__dirname + '/static'));
app.use(express.json());

app.get('/', controller.getARandomQuestionWithAnswers);

module.exports = app;
