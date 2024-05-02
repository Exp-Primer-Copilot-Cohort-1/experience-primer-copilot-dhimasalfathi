// Create web server
// Express is a web application framework for Node.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// Get comments
app.get('/api/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

// Add comment
app.post('/api/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const comments = JSON.parse(data);
    const newComment = {
      id: Date.now()}
    }
})