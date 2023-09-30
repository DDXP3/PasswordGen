// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberOfCharacter;
var numberCharacter;
var uppercaseCharacter;
var lowercaseCharacter;
var specialCharacter;
var groupedCharacters = [];
var randomPass = "";
var choice2 = 0;

function generatePassword(){
  var choice1 = confirm("Would you like to Generate a Password?")
  if (choice1) numberOfCharacters();
  else return;
  if (choice2 < 8){
    alert(`Sorry, but that is too small.`);
  return;
  }
  else if (choice2 > 128) {
    alert(`Sorry, but that is too big.`);
  return;
}
  else if (isNaN(choice2)) {
    alert(`Sorry, but it must be a number.`); 
    return;
  }
  choice2 = Math.floor(choice2);
  numberCharacters();
  uppercaseCharacters();
  lowercaseCharacters();
  specialCharacters();
  if (groupedCharacters.length === 0){
    alert(`I can't make a password without characters.`);
    return;
  }
  letsGenerate();
  return randomPass;
}

function numberOfCharacters(){
  choice2 = prompt("Please choose the amount of characters in your password. (it must be a number from 8 to 128");
  numberOfCharacter = choice2; 
}

function numberCharacters(){
  groupedCharacters = []
  var choice3 = confirm("Would you like the password to have numbers?");
  if (choice3){
  numberCharacter = [1,2,3,4,5,6,7,8,9,0];
  groupedCharacters = groupedCharacters.concat(numberCharacter);
  }
}

function uppercaseCharacters(){
  var choice4 = confirm("Would you like the password to have uppercase letters?");
  if (choice4){
  uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  groupedCharacters = groupedCharacters.concat(uppercaseCharacter);
  }
}

function lowercaseCharacters(){
  var choice5 = confirm("Would you like the password to have lowercase letters?");
  if (choice5){
  lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  groupedCharacters = groupedCharacters.concat(lowercaseCharacter);
  }
}

function specialCharacters(){
  var choice6 = confirm("Would you like the password to have special characters?");
  if (choice6){
  specialCharacter = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","|",";",":","'",",",".","<",">","/","?"];
  groupedCharacters = groupedCharacters.concat(specialCharacter);
  }
}

function letsGenerate(){
  randomPass = ""
  for (var i = 0; i < choice2; i++){
    var rnum = Math.floor(Math.random()*groupedCharacters.length);
    randomPass = randomPass.concat(groupedCharacters[rnum]);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
