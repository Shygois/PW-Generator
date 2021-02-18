var passwordLength = function() {
  // prompt for password length (8-128)
  var lengthPrompt = prompt(
    "How many characters would you like your password to contain? It must be between 8 - 128 characters."
    );
    // validate character count
    if (lengthPrompt < 8 || lengthPrompt > 128) {
      alert("Password should be between 8 and 128 characters");
      return generatePassword();
    }
    if (lengthPrompt === "" || lengthPrompt === null || isNaN(lengthPrompt)) {
      alert("Your entry is invalid");
      return generatePassword();
    }
// return "Your password will be " + lengthPrompt + " characters long.";
    console.log("Password length: " + lengthPrompt);
}

var charTypePrompt = function() {
  // confirm pop up for uppercase
  var upperCase = confirm("Do you want uppercase characters in your password? Select OK for YES and CANCEL for NO.");
  // need to validate
  console.log("Uppercase: " + upperCase);
  // confirm pop up for lowercase
  var lowerCase = confirm("Do you want lowercase characters in your password? Select OK for YES and CANCEL for NO.");
  // need to validate
  console.log("Lowercase: " + lowerCase);
  // confirm pop up for numeric
  var numChar = confirm("Do you want numeric characters in your password? Select OK for YES and CANCEL for NO.");
  // need to validate
  console.log("Num Characters: " + numChar);
  // confirm pop up for special characters
  var specialChar = confirm("Do you want special characters in your password? Select OK for YES and CANCEL for NO.");
  // need to validate
  console.log("Special Characters: " + specialChar);
// we need to make sure that at least one of the character types above is selected
  if(upperCase === true || lowerCase === true || numChar === true || specialChar === true) {
    alert("Success! Your password is being generated!"); 
  }
  else {
    alert("You need to select at least one character type.");
    charTypePrompt();
  }
}
var generatePassword = function() {
  passwordLength();
  charTypePrompt();
};
// generate password
// display password
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








