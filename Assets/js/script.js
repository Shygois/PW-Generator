var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseChar = 'lowerCaseChar.toUpperCaseChar()';
var numericChar = '123456789';
var specialCharacter = '!@#$%^&*~()+_\[]<>?/';
var passwordLength;

var charSet;


var lengthPrompt = function() {
  // prompt for password length (8-128)
  passwordLength = prompt(
    "How many characters would you like your password to contain? It must be between 8 - 128 characters."
    );
    // validate character count
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password should be between 8 and 128 characters");
      generatePassword();
    }
    if (passwordLength === "" || passwordLength === null || isNaN(passwordLength)) {
      alert("Your entry is invalid");
      generatePassword();
    }
};

var charTypePrompt = function() {
  // confirm pop ups for password criteria
  var lowerCase = confirm("Do you want lowercase characters in your password? Select OK for YES and CANCEL for NO.");
  var upperCase = confirm("Do you want uppercase characters in your password? Select OK for YES and CANCEL for NO.");
  var numChar = confirm("Do you want numeric characters in your password? Select OK for YES and CANCEL for NO.");
  var specialChar = confirm("Do you want special characters in your password? Select OK for YES and CANCEL for NO.");

  // need to validate lowercase
  if (lowerCase) {
    charSet = lowerCaseChar;
  }

  // need to validate uppercase
  if (upperCase) {
    charSet = charSet + upperCaseChar;
  }

  // need to validate numerical characters
  if (numChar) {
    charSet = charSet + numericChar;
  }
  
  // need to validate special characters
  if (specialChar) {
    charSet = charSet + specialCharacter;
  }

// we need to make sure that at least one of the character types above is selected
  if(upperCase || lowerCase || numChar || specialChar) {
    alert("Success! Your password is being generated!"); 
  }
  else {
    alert("You need to select at least one character type.");
    charTypePrompt();
  }
};

var getRandomIndex = function(stringLength) {
  return Math.floor(Math.random() * stringLength);
}

var generatePassword = function() {
  var charIndex;
  lengthPrompt();
  charTypePrompt();
  var newPassword = ' ';

  // Using password length and character prompt we're going to retrieve a character set at random location
  for (var i = 0; i < passwordLength; i++) {
    charIndex = getRandomIndex(charSet.length);
    newPassword += charSet.charAt(charIndex); 
  }
  
  return newPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
