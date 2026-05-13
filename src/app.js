const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello CI/CD!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

module.exports = app;

app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});
