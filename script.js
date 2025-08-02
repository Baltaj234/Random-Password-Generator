// Getting DOM elements from the HTML
const resultE1 = document.getElementById("Result");
const lengthE1 = document.getElementById("length");
const uppercaseE1 = document.getElementById("uppercase");
const lowercaseE1 = document.getElementById("lowercase");
const numbersE1 = document.getElementById("numbers");
const symbolsE1 = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

// The character sets available for each type
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "123456789";
const symbolChars = "!@#$%^&*()_+=<>?/[]{}";

// Helper function to get a random character from a string
function getRandomChar(str){
    // choose a random index in the string and return the character at that index
    return str[Math.floor(Math.random() * str.length)];
}

// Main function that builds the password
function generatePassword(){
    // get the desired length of input and convert it to a number
    let length = +lengthEl.value;

    // Initialize the string to hold all selected character types
    let charset = "";

// Check which boxes are selected and add corresponding characters to the charset
  if (uppercaseEl.checked) charset += upperChars;
  if (lowercaseEl.checked) charset += lowerChars;
  if (numbersEl.checked) charset += numberChars;
  if (symbolsEl.checked) charset += symbolChars;

// If no character types are selected, warn the user and stop the function
  if (charset.length === 0) {
    resultEl.textContent = "Please select at least one option!";
    return;


}


// Making an empty string for the final password
let password = "";

// Looping to pick a random character each time
for(let i = 0; i < length; i++){
    password += getRandomChar(charset);
}

// Display the generated password in the result element
  resultEl.textContent = password;
}

// Add an event listener to the Generate button
generateBtn.addEventListener("click", generatePassword);

// Add event listener to the Copy button
copyBtn.addEventListener("click", () => {
  const password = resultEl.textContent;

  // Only copy if password is not empty and not the placeholder message
  if (password && password !== "Your password will appear here") {
    // Use Clipboard API to write password to clipboard
    navigator.clipboard.writeText(password).then(() => {
      // Show feedback to user by temporarily changing button text
      copyBtn.textContent = "Copied!";
      
      // Revert button text after 1.5 seconds
      setTimeout(() => {
        copyBtn.textContent = "Copy";
      }, 1500);
    });
  }
});

