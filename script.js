// Assignment code here
// Click button to generate a password
// Presented with a series of prompts for password criteria
// Choose lowercase, uppercase, numeric, and/or special characters
// Select the critera to include in the password
// Choose a length of at least 8 characters and no more than 128 characters
// Generate password that matches criteria

var generatePassword = function() {
  window.prompt("How many characters would you like for your password (min = 8, max = 128")

  if
  


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();
