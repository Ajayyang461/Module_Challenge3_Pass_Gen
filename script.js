// Get references to the #generate element.
var generateBtn = document.querySelector("#generate");

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Declared variable that holds an array of values lowercase.
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Declared variable that holds an array of values special characters.
var spChar = ["!", "#", "$", "%", "&", "*", "+", "<", "=", ">", "?", "@"];

var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
  var passSelector = "";
  var passResulst = "";

  //prompt for 8 to 128 character long.
  var lengthSelector = prompt(
    "Your password needs to be at 8 to 128 charachter long."
  );
  // if you dont enter a number you will be prompt that it is required.
  if (Number.isNaN(lengthSelector)) {
    alert("It is required to input a number for the password length");
    return passResulst;
  }
  //if the number is less than 8 you will propmpt an error message.
  if (lengthSelector < 8 || lengthSelector > 128) {
    alert("Your password cannot be less than 8 character long");
    return passResulst;
  }
  // if the number is more than 128 you will be prompt an error message.
  if (lengthSelector > 128) {
    alert("Your password cannont be more than 128 characther long");
    return passResulst;
  }
  //prompt for uppercase letters.
  var needUpCase = confirm(
    "Click ok to inlcude an uppercase letter to your password."
  );
  //prompt for lowercase letters.
  var needLowCase = confirm(
    "Click ok to inlude an lowercase letter to your password."
  );
  //prompt for special character letters.
  var needSpChar = confirm(
    "Click ok to include an special character to your password."
  );
  //prompt for numeric numbers.
  var needNumChar = confirm(
    "Click ok to inlude an numeric number to your password"
  );
  //checking the variable to see if it is false.
  if (needLowCase === false) {
    alert("Must select at least one character type");
  }
  if (needUpCase === false) {
    alert("Must select at least one character type");
  }
  if (needSpChar === false) {
    alert("Must select at least one character type");
  }
  if (needNumChar === false) {
    alert("Must select at least one character type");
  }
  if (needLowCase) {
    passSelector = passSelector.concat(lowerCase);
  }
  if (needUpCase) {
    passSelector = passSelector.concat(upperCase);
  }
  if (needSpChar) {
    passSelector = passSelector.concat(spChar);
  }
  if (needNumChar) {
    passSelector = passSelector.concat(numChar);
  }
  for (var i = 0; i < lengthSelector; ++i) {
    var randomSelector = passSelector.charAt(
      Math.floor(Math.random() * passSelector.length)
    );
    passResulst = passResulst.concat(randomSelector);
  }

  return passResulst;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // once click it will generate
