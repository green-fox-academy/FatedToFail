const express = require('express');
const ejs = require('ejs');
const connection = require('./mysql');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`You are listening on ${PORT}`);
});

app.get('/posts', connection.getPosts);
app.post('/posts', connection.postPosts);
app.put('/posts/:id/upvote', connection.upVotePost);
app.put('/posts/:id/downvote', connection.downVotePost);
