# Cipher Toolkit

Cipher Toolkit is a comprehensive JavaScript library that provides implementations of various classical cryptographic ciphers. Ideal for educational purposes, cryptography enthusiasts, and research, this package offers encryption and decryption methods for popular ciphers.

---

## Features

The toolkit currently supports the following ciphers:

1. **Additive Cipher**  
   A simple substitution cipher where each character in the plaintext is shifted by a fixed number.

2. **Affine Cipher**  
   A combination of additive and multiplicative ciphers for encryption and decryption.

3. **Brute Force Attack**  
   A utility to perform brute force decryption by trying all possible keys for supported ciphers.

4. **Keyed Transposition Cipher**  
   A columnar transposition cipher that uses a key to determine the arrangement of characters.

5. **Multiplicative Cipher**  
   A substitution cipher that uses multiplication as the transformation.

---

## Installation

Install the package using npm:

```bash
npm install cipher-toolkit


Usage
Importing Functions
You can import individual ciphers or all of them at once from the package:

javascript
Copy code
const {
  encryptAdditive,
  decryptAdditive,
  encryptAffine,
  decryptAffine,
  bruteForceAdditive,
  encryptKeyedTransposition,
  decryptKeyedTransposition,
  encryptMultiplicative,
  decryptMultiplicative,
} = require('cipher-toolkit');

const { encryptAdditive, decryptAdditive } = require('cipher-toolkit');

const plaintext = "HELLO";
const key = 5;

const encrypted = encryptAdditive(plaintext, key);
console.log(`Encrypted: ${encrypted}`); // Output: MJQQT

const decrypted = decryptAdditive(encrypted, key);
console.log(`Decrypted: ${decrypted}`); // Output: HELLO


```

## API Reference
Additive Cipher
encryptAdditive(plaintext, key): Encrypts a plaintext using the additive cipher.
decryptAdditive(ciphertext, key): Decrypts a ciphertext using the additive cipher.
Affine Cipher
encryptAffine(plaintext, key1, key2): Encrypts a plaintext using the affine cipher.
decryptAffine(ciphertext, key1, key2): Decrypts a ciphertext using the affine cipher.
Brute Force Attack
bruteForceAdditive(ciphertext): Tries all possible keys to decrypt an additive cipher ciphertext.
Keyed Transposition Cipher
encryptKeyedTransposition(plaintext, key): Encrypts a plaintext using the keyed transposition cipher.
decryptKeyedTransposition(ciphertext, key): Decrypts a ciphertext using the keyed transposition cipher.
Multiplicative Cipher
encryptMultiplicative(plaintext, key): Encrypts a plaintext using the multiplicative cipher.
decryptMultiplicative(ciphertext, key): Decrypts a ciphertext using the multiplicative cipher.