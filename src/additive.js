// src/additive.js
function encryptAdditive(plaintext, key) {
    return plaintext
        .toUpperCase()
        .split('')
        .map(char => {
            if (char >= 'A' && char <= 'Z') {
                return String.fromCharCode(((char.charCodeAt(0) - 65 + key) % 26) + 65);
            }
            return char;
        })
        .join('');
}

function decryptAdditive(ciphertext, key) {
    return encryptAdditive(ciphertext, 26 - key);
}

module.exports = { encryptAdditive, decryptAdditive };
