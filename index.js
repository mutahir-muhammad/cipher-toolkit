// index.js
const additive = require('./src/additive');
const bruteForce = require('./src/bruteForce');
const multiplicative = require('./src/multiplicative');
const affine = require('./src/affine');
const keyedTransposition = require('./src/keyedTransposition');

module.exports = {
    additive,
    bruteForce,
    multiplicative,
    affine,
    keyedTransposition
};
