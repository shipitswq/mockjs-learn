const fs = require('fs');
const data = require('./data.js');
fs.writeFileSync('db.json', JSON.stringify(data, null, 2));