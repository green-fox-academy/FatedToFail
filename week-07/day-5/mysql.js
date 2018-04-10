const mysql = require('mysql');

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: '6278pRn!',
  database: 'reddit'
});

module.exports = {
  getPosts: (req, res) => {
    conn.query('SELECT * FROM posts', (err, posts) => {
      if(err !== null) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.json({
          posts: posts,
        });
      }
    });
  },

  postPosts: (req, res) => {
    conn.query(`INSERT INTO posts VALUES(NULL, '${req.body.title}', '${req.body.url}', now(), 0)`, (err, post) => {
      if(err !== null) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  },

  upVotePost: (req, res) => {
    const id = parseInt(req.params.id);
    conn.query(`SELECT score FROM posts WHERE post_id = ${id}`, (err, result) => {
      if(err !== null) {
        console.error(err);
        res.sendStatus(500);
      } else {
        conn.query(`UPDATE posts SET score=${result[0].score + 1} WHERE post_id = ${id}`, (err, update) => {
          if(err !== null) {
            console.error(err);
            res.sendStatus(500);
          } else {
            res.sendStatus(200);
          }
        });
      }
    })
  },

  downVotePost: (req, res) => {
    const id = parseInt(req.params.id);
    conn.query(`SELECT score FROM posts WHERE post_id = ${id}`, (err, result) => {
      if(err !== null) {
        console.error(err);
        res.sendStatus(500);
      } else {
        conn.query(`UPDATE posts SET score=${result[0].score - 1} WHERE post_id = ${id}`, (err, update) => {
          if(err !== null) {
            console.error(err);
            res.sendStatus(500);
          } else {
            res.sendStatus(200);
          }
        });
      }
    })
  }
}
