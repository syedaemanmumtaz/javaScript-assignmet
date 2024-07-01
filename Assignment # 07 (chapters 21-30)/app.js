                                       //CHAPTER #21 tO 25  

                                            // // q1

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "! Welcome!");
// document.write("<h1>Hello, " + fullName + "! Welcome!</h1>");

                                            // // q2

// var favoriteMobileModel = prompt("What is your favorite mobile phone model?");
// var inputLength = favoriteMobileModel.length;
// document.write("<p>The length of your favorite mobile phone model is: " + inputLength + " characters.</p>");

                                            // q3
var word = "Pakistani";
var indexOfN = word.indexOf("n");
document.write("<p>The index of the letter 'n' in the word 'Pakistani' is: " + indexOfN + "</p>");

                                             // q4
var word = "Hello World";
var lastIndexOfL = word.lastIndexOf("l");
document.write("<p>The last index of the letter 'l' in the word 'Hello World' is: " + lastIndexOfL + "</p>");

                                                // q5
var word = "Pakistani";
var charAtIndex3 = word.charAt(3);
document.write("The character at the 3rd index in the word 'Pakistani' is: " + charAtIndex3);

                                                  // q6
var firstName = "Syeda";
var lastName = "Eman";
var fullName = firstName.concat(" ", lastName);
console.log("Full Name:" + fullName);

                                            // q7
var originalWord = "Hyderabad";
var replacedWord = originalWord.replace("Hyder", "Islam");
document.write("Original Word: " + originalWord + "<br>");
document.write("After Replacement: " + replacedWord);

                                            // q8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var modifiedMessage = message.replace(/and/, "&");
document.write("Original Message: " + message + "<br>");
document.write("After Replacement: " + modifiedMessage);

                                             // q9
let stringNumber = "472"
let convertedNumber = Number(stringNumber);
document.write("<p>Original String: " + stringNumber + " (Type: " + typeof stringNumber + ")</p>");
document.write("<p>Converted Number: " + convertedNumber + " (Type: " + typeof convertedNumber + ")</p>");

                                               // // q11
// const userInput = prompt("Enter text:");
// const uppercaseText = userInput.toUpperCase();
// document.write("<p>Original Text: " + userInput + "</p>");
// document.write("<p>Uppercase Text: " + uppercaseText + "</p>");

//                                                 // q12
// let userInput = prompt("Enter text:");
// const lowercaseText = userInput.toLowerCase();
// document.write("<p> Original Text: " + userInput + "</p>");
// document.write("<p >Lowercase Text: " + lowercaseText + "</p>");

                                              // q14
var num = 35.36;
var numAsString = num.toString().replace(".", "");
document.write("<p> Original Number: " + num + "</p>");
document.write("<p> Converted String: " + numAsString + "</p>");

//                                                 // q15

 
//  let username = prompt("Enter your username: ");
//  if (username.includes('@') || username.includes('.') || username.includes(',') || username.includes('!')){
//      alert("Invalid username! Please enter a valid username.");
//      username = prompt("Enter your username: ");
//  }
//  console.log("Username stored successfully: " + username);

                                             //q#16

//  let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Enter an item to search: ");
// let found = false;
// for (let i = 0; i < A.length; i++) 
//     if (A[i].toLowerCase() === userInput.toLowerCase()) {
//         found = true;
//         break;
//     }

// if (found) {
//     alert("Item found in the list.");
// } else {
//     alert("Item not found in the list.");
// }

//                                     //q#17

// let password = prompt("Enter a password: ");
// if(!(password.match(/[a-z A-Z]/) && password.match(/[0-9]/) && !password.match(/^[0-9]/) && password.length >= 6)) {
//     alert("Invalid password! Please enter a valid password.");
//     password = prompt("Enter a password: ");
// }
// console.log("Valid password entered:", password);

                                  //Q#18

var university = "University of Karachi";
for(var i=0; i<university.length; i++){
     console.log(university.charAt(i));
}

                               //Q#19
// var userInput = prompt("Enter anyThink ???");
// var lastIndexOfuserInput = userInput.lastIndexOf(" ");
// console.log(lastIndexOfuserInput);


                                           // CHAPTER #25 tO 30
                                          //---------------------


                                           //q#1(a,b,c,d):
// let userInput = prompt("Enter a positive integer:");
// let number = Number(userInput);
// let roundOff = Math.round(number);
// let floorValue = Math.floor(number);
// let ceilValue = Math.ceil(number);    

// if (userInput === null || isNaN(userInput) || userInput <= 0) {
// alert("Invalid input. Please enter a positive integer.");
// }
// document.write("<p> Number: " + number + "</p>");
// document.write("<p> Round off value: " + roundOff + "</p>");
// document.write("<p> Floor value: " + floorValue + "</p>");
// document.write("<p> Ceil value: " + ceilValue + "</p>");


//                                           //Q#2(a,b,c,d):
// let userInput = prompt("Enter a negative integer:");
// let number = Number(userInput);      
// let roundOff = Math.round(number);
// let floorValue = Math.floor(number);
// let ceilValue = Math.ceil(number);
// if (userInput === null || isNaN(userInput) || userInput >= 0) {
//      alert("Invalid input. Please enter a negative integer.");
// }   
// document.write("<p> Number: " + number + "</p>");
// document.write("<p> Round off value: " + roundOff + "</p>");
// document.write("<p> Floor value: " + floorValue + "</p>");
// document.write("<p> Ceil value: " + ceilValue + "</p>");


                                             //q#3
//  let userInput = prompt("Enter a number:"); 
//  let number = parseFloat(userInput);
//  let absoluteValue = Math.abs(number);
//  if (userInput === null || isNaN(userInput)) {
//      alert("Invalid input. Please enter a valid number.");
//  }
//  document.write("<p>The absolute value of " + number + " is " + absoluteValue + "</p>");

                                            //Q#4
let diceValue = Math.floor(Math.random() * 6) + 1;
document.write("<p>The dice shows: " + diceValue + "</p>");

                                            //Q#5
let coinResult = Math.floor(Math.random() * 2);
let resultMessage = (coinResult === 0) ? "Heads" : "Tails";
document.write("<p>The coin shows: " + resultMessage + "</p>");


                                           //Q#6
let randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("<p>Random number between 1 and 100: " + randomNumber + "</p>");

                                           //Q#7





                                       