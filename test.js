const Mock = require('mockjs');

// Define a data template
const data = Mock.mock({
  'list|1-10': [{  // Generate a list with 1-10 items
    'id|+1': 1,    // Auto-incrementing ID starting from 1
    'name': '@name', // Random name
    'email': '@email', // Random email
    'price|1-100.2': 0 // Random price between 1-100 with 2 decimal places
  }]
});

// Output the generated data
console.log(JSON.stringify(data, null, 2));