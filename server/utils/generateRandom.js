// utils/generateRandom.js

const generatedCodes = new Set();

export default function generateUniqueCode() {
    let code;
    do {
        code = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
    } while (generatedCodes.has(code)); // Ensures the code is unique

    generatedCodes.add(code); // Add the unique code to the set
    return code;
}
