require('dotenv').config();

const mysql = require('mysql');

const connectionDatas = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};

class MySql {
  constructor(connectionDatas) {
    this.conn = mysql.createConnection(connectionDatas);
  }

  mysqlSelectQueryInPromise(queryText) {
    console.log(2);
    return new Promise((fulfill, reject) => {
      this.conn.query(queryText, this.mysqlCallback(fulfill, reject));
    });    
  }

  mysqlCallback(fulfill, reject) {
    console.log(3);
    return function (err, response) {
      if (err) {
        return reject(err);
      } else {
        console.log(4);
        return fulfill(response);
      }
    }
  }
}

module.exports = new MySql(connectionDatas);
