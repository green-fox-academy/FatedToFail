const mysql = require('../modell/mysql');

class MyController {
  
  constructor () {
    this.questionsAlreadySent = [];
    this.currentResponse = {};
  }

  errorHandle () {
    return res.status(500).json({Error: 'Please try again later'})
  };

  responseWithJson (res) {
    console.log(5);
    return (data) => {return res.json(data)};
  };

  getARandomQuestionWithAnswers (req, res) {  
    const queryForRandomQuestion = 'SELECT * FROM questions ORDER BY RAND()';
    const queryForItsAnswers = 'SELECT * FROM answers WHERE ';
    mysql.mysqlSelectQueryInPromise(queryForRandomQuestion)
      .then(this.responseWithJson(res))
      .catch(this.errorHandle);
  };
}

module.exports = new MyController();
