function generatePassword() {
// prompt for password length 8 -128
var lengthPrompt = prompt("How many characters would you like your password to contain? It must 8 - 128 characters");

  if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert(" Password should be between 8 - 128 characters");
    return generatePassword();
  }
 
  if (lengthPrompt === "" || lengthPrompt === null || isNaN(lengthPrompt)) {
    alert("Your entry is invalid");
    return generatePassword();
  }
 
// Confirm password length
 //return lengthPrompt;
console.log("password length " + lengthPrompt);

// prompt for uppercase letters
var upperCase = confirm("Do you want uppercase characters in your password?");
// confirm use of uppcase letters
console.log( "upper case " + upperCase);

// prompt for lowercase letters
var lowerCase = confirm("Do you want lowercase characters in your password?");
// confirm use of lowercase letters
console.log( "lower case " + lowerCase);

// prompt for numeric characters
var numChar = confirm("Do you want numeric characters in your password?");
// confirm use of numeric charcters 
console.log( "numChar " + lowerCase);

// prompt for special characters 
var specChar = confirm("Do you want special characaters in your password?");
// confirm use of special characters 
console.log( " specChar " + specChar)
};



// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page Mock-Up




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

