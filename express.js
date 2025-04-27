const express = require('express');
const Mock = require('mockjs');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Mock GET /api/users
app.get('/api/users', (req, res) => {
  const data = Mock.mock({
    'users|5-10': [{
      'id|+1': 1,
      'name': '@name',
      'email': '@email'
    }]
  });
  res.json(data);
});

// Mock POST /api/users
app.post('/api/users', (req, res) => {
  const data = Mock.mock({
    id: '@id',
    name: req.body.name,
    email: req.body.email,
    created: '@datetime'
  });
  res.json(data);
});

// Mock dynamic route /api/users/:id
app.get('/api/users/:id', (req, res) => {
  const data = Mock.mock({
    id: req.params.id,
    name: '@name',
    email: '@email'
  });
  res.json(data);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mock server running on http://localhost:${PORT}`);
});