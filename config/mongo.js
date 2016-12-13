var mongojs = require('mongojs');

// connecting to db
module.exports = mongojs('mongodb://localhost:27017/test');
