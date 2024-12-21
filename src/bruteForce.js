// src/bruteForce.js
const { decryptAdditive } = require('./additive');

function bruteForceAdditive(ciphertext) {
    const results = [];
    for (let key = 1; key < 26; key++) {
        results.push({ key, plaintext: decryptAdditive(ciphertext, key) });
    }
    return results;
}

module.exports = { bruteForceAdditive };
