// Assignment code here
var generateBtn = document.getElementById("#generate");

var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
var numeric = ["1","2","3","4","5","6","7","8","9","0"]
var special = [" ","!","@","#","$","%","^","&","*","(",")","-","_","+","+","`","~","{","[","}","]",":",";","|","'","<",",",".","/",">","?"]

var generateOptions = function() {
  // Choose a length of at least 8 characters and no more than 128 characters
  var numChar = prompt("How many characters would you like your password to be (min-8, max-128)?");  

  if (numChar < 8) {
    alert("You must select more than 7!");
    return numChar;   
  } else if (numChar > 128) {
    alert("You must select less than 129!");
    return numChar;
  }

  // Choose lowercase, uppercase, numeric, and/or special characters
  var lowerCase = confirm("Would you like lowercase characters?")
  
  if (lowerCase === true) {
    alert("Your password will include lowercase characters.")
  } else {
    alert("Your password will NOT include lowercase characters.")
  }

  var upperCase = confirm("Would you like UPPERCASE characters?")
  
  if (upperCase === true) {
    alert("Your password will include UPPERCASE characters.")
  } else {
    alert("Your password will NOT include UPPERCASE characters.")
  }

  var numReq = confirm("Do you require numbers?")

  if (numReq === true) {
    alert("Your password will include numbers.")
  } else {
    alert("Your password will not include numbers.")
  }

  var specChar = confirm("Do you require Special Characters?")

  if (specChar === true) {
    alert("Yor password will include Special Characters.")
  } else {
    alert("Yor password will not include Special Characters.")
  }

  if (!lowerCase && !upperCase && !numReq && !specChar) {
    alert("You password must include an uppercase, lowercase, number, or special character.");
    return numChar;
  }

  var questionOptions = {
    length: numChar,
    lowerCase: lowerCase,
    upperCase: upperCase,
    numeric: numReq,
    specialCharacters: specChar
  }

  return questionOptions;
};

// Generate password that matches criteria
var generatePassword = function() {
  var options = generateOptions();

  // Select the critera to include in the password
  var passwordPool = [];

  if (options.lowerCase) {
    for (i = 0; i < lower.length; i++) {
      passwordPool.push(lower[i]);
    }
  }
  if (options.upperCase) {
    for (i = 0; i < upper.length; i++) {
      passwordPool.push(upper[i]);
    }
  }
  if (options.numeric) {
    for (i = 0; i < numeric.length; i++) {
      passwordPool.push(numeric[i]);
    }
  }
  if (options.specialCharacters) {
    for (i = 0; i < special.length; i++) {
      passwordPool.push(special[i]);
    }
  }

  var selectedPass = [];

  for (i = 0; i < options.length; i++) {
    var randomPicker = Math.floor(Math.random() * Math.floor(passwordPool.length));
    selectedPass.push(passwordPool[randomPicker])
  }

  var finalPassword = selectedPass.join("");
  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var finalPassword = document.querySelector("#password");

  finalPassword.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
