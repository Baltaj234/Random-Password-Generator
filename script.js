// Getting DOM elements from the HTML
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

// The character sets available for each type
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "1234567890";
const symbolChars = "!@#$%^&*()_+=<>?/[]{}";

// Helper function to get a random character from a string
function getRandomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
}

// Main function that builds the password
function generatePassword() {
    let length = +lengthEl.value;
    let charset = "";

    if (uppercaseEl.checked) charset += upperChars;
    if (lowercaseEl.checked) charset += lowerChars;
    if (numbersEl.checked) charset += numberChars;
    if (symbolsEl.checked) charset += symbolChars;

    if (charset.length === 0) {
        resultEl.textContent = "Please select at least one option!";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += getRandomChar(charset);
    }

    resultEl.textContent = password;
}

// Event listener to generate password
generateBtn.addEventListener("click", generatePassword);

// Event listener to copy password
copyBtn.addEventListener("click", () => {
    const password = resultEl.textContent;

    if (password && password !== "Your password will appear here") {
        navigator.clipboard.writeText(password).then(() => {
            copyBtn.textContent = "Copied!";
            setTimeout(() => {
                copyBtn.textContent = "Copy";
            }, 1500);
        });
    }
});
