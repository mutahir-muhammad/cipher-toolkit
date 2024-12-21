// src/affine.js
const { encryptAdditive, decryptAdditive } = require('./additive');
const { encryptMultiplicative, decryptMultiplicative } = require('./multiplicative');

function encryptAffine(plaintext, keyA, keyB) {
    const multiplicativePart = encryptMultiplicative(plaintext, keyA);
    return encryptAdditive(multiplicativePart, keyB);
}

function decryptAffine(ciphertext, keyA, keyB) {
    const additivePart = decryptAdditive(ciphertext, keyB);
    return decryptMultiplicative(additivePart, keyA);
}

module.exports = { encryptAffine, decryptAffine };
