const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));


app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/experience', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Experience.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html.html'));
});


app.get('/internship', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'internship.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});