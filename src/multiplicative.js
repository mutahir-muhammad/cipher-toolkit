// src/multiplicative.js
function modInverse(a, m) {
    for (let x = 1; x < m; x++) {
        if ((a * x) % m === 1) return x;
    }
    throw new Error('No modular inverse exists');
}

function encryptMultiplicative(plaintext, key) {
    return plaintext
        .toUpperCase()
        .split('')
        .map(char => {
            if (char >= 'A' && char <= 'Z') {
                return String.fromCharCode(((char.charCodeAt(0) - 65) * key % 26) + 65);
            }
            return char;
        })
        .join('');
}

function decryptMultiplicative(ciphertext, key) {
    const inverseKey = modInverse(key, 26);
    return encryptMultiplicative(ciphertext, inverseKey);
}

module.exports = { encryptMultiplicative, decryptMultiplicative };
