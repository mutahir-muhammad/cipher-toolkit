// src/keyedTransposition.js

/**
 * Encrypts a plaintext using a Keyed Transposition Cipher.
 * @param {string} plaintext - The message to encrypt.
 * @param {string} key - The key used for transposition.
 * @returns {string} The encrypted ciphertext.
 */
function encryptKeyedTransposition(plaintext, key) {
    // Remove spaces and convert to uppercase for uniformity
    plaintext = plaintext.replace(/\s+/g, '').toUpperCase();
    key = key.toUpperCase();

    // Determine the number of columns from the key length
    const numColumns = key.length;

    // Create the column matrix
    const columns = Array.from({ length: numColumns }, () => []);

    // Populate the columns row by row
    for (let i = 0; i < plaintext.length; i++) {
        columns[i % numColumns].push(plaintext[i]);
    }

    // Sort the key alphabetically and note the original column order
    const keyOrder = [...key].map((char, idx) => ({ char, idx }))
        .sort((a, b) => a.char.localeCompare(b.char));

    // Rearrange the columns based on the key order
    const rearrangedColumns = keyOrder.map(({ idx }) => columns[idx]);

    // Concatenate the columns to create the ciphertext
    return rearrangedColumns.flat().join('');
}

/**
 * Decrypts a ciphertext using a Keyed Transposition Cipher.
 * @param {string} ciphertext - The message to decrypt.
 * @param {string} key - The key used for transposition.
 * @returns {string} The decrypted plaintext.
 */
function decryptKeyedTransposition(ciphertext, key) {
    key = key.toUpperCase();

    // Determine the number of columns and rows
    const numColumns = key.length;
    const numRows = Math.ceil(ciphertext.length / numColumns);

    // Sort the key alphabetically and note the original column order
    const keyOrder = [...key].map((char, idx) => ({ char, idx }))
        .sort((a, b) => a.char.localeCompare(b.char));

    // Calculate the number of characters in each column
    const columnLengths = Array(numColumns).fill(numRows);
    const remainder = ciphertext.length % numColumns;
    for (let i = 0; i < remainder; i++) {
        columnLengths[keyOrder[i].idx]--;
    }

    // Extract the columns from the ciphertext
    const columns = [];
    let currentIdx = 0;
    for (let length of columnLengths) {
        columns.push(ciphertext.slice(currentIdx, currentIdx + length).split(''));
        currentIdx += length;
    }

    // Reconstruct the original column order
    const originalOrderColumns = keyOrder.map(({ idx }, i) => columns[i]);

    // Read the plaintext row by row
    let plaintext = '';
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numColumns; col++) {
            if (originalOrderColumns[col][row]) {
                plaintext += originalOrderColumns[col][row];
            }
        }
    }

    return plaintext;
}

module.exports = { encryptKeyedTransposition, decryptKeyedTransposition };
