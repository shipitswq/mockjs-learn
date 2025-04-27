const Mock = require('mockjs');

module.exports = Mock.mock({
  'users|5-10': [{
    'id|+1': 1,
    'name': '@name',
    'email': '@email'
  }],
  'products|3-7': [{
    'id|+1': 1,
    'title': '@title',
    'price|10-100.2': 0
  }]
});