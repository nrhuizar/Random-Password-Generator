// Assignment code here
// Click button to generate a password
// Presented with a series of prompts for password criteria
// Choose lowercase, uppercase, numeric, and/or special characters
// Select the critera to include in the password
// Choose a length of at least 8 characters and no more than 128 characters
// Generate password that matches criteria

var generatePassword = function() {
  confirm('Would you like to create a password?');

  if (true) {
    var numChar = prompt("How many character would you like (min-8, max-128)?") 
  } 

  if (numChar < 8) {
    alert("You must select more than 7")        
  } else if (numChar > 128) {
    alert("You must select less than 129")
  }

  var lowerUpper = confirm("Would you like Uppercase characters?")
  
  if (lowerUpper === true) {
    alert("you have chosen yes")
  } else {
    alert("you have chosen no")
  }

  var numReq = confirm("Do you require numbers")

  if (numReq = true) {
    alert("you require numbers")
  } else {
    alert("you don't require numbers")
  }

  var specReq = confirm("Do you require Special Characters")

  if (specReq = true) {
    alert("you require special characters")
  } else {
    alert("you don't require characters")
  }

};

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
