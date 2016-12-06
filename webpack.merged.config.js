'use strict';

var config = require('./webpack.config.js');

config.entries = {
  'chunk': [
    './chunk3.js',
    './chunk2.js',
    './chunk1.js',
  ]
};

module.exports = config;
