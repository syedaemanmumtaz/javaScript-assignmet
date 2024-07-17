                                       //CHAPTER#35-38
//Q#1
function displayCurrentDateTime() {
    let currentDateTime = new Date();

    let formattedDateTime = currentDateTime.toLocaleString();

    document.write("<p>Current Date and Time: " + formattedDateTime + "</p>");
}
displayCurrentDateTime();

//Q#2
function greetUser(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  return "Hello, " + fullName + "!";
}
var greeting = greetUser("Syeda", "Emaan");
console.log(greeting);


//Q#3
// function addNumbers(){
//   let num1 = parseInt(prompt("Enter your first name"));
//   let num2 = parseInt(prompt("Enter your last name"));
//     let sumNumber = num1 + num2;
//     console.log(sumNumber);
// }
// addNumbers();


//q#4
function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}
console.log(calculator(5, 2, '+')); 
console.log(calculator(5, 2, '-')); 
console.log(calculator(5, 2, '*')); 
console.log(calculator(5, 2, '/')); 
console.log(calculator(5, 2, '%')); 

// Q#5. 
function square(number) {
  return number * number;
}
console.log(square(5)); 


// Q#6.
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
console.log(factorial(5));


// Q#7.
function count(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}
count(1, 5);

//Q#8
function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(num) {
    return num * num;
  }
  let baseSquare = calculateSquare(base);
  let perpendicularSquare = calculateSquare(perpendicular);
  let hypotenuseSquare = baseSquare + perpendicularSquare;
  let hypotenuse = Math.sqrt(hypotenuseSquare);

  return hypotenuse;
}
console.log(calculateHypotenuse(3, 4));
console.log(calculateHypotenuse(5, 12));

// Q#9.(1)
function calculateAreaWithValue(width, height) {
  return width * height;
}
console.log(calculateAreaWithValue(5, 6)); 


// Q#9.(2)
function calculateAreaWithVariables(width, height) {
  return width * height;
}
let rectWidth = 5;
let rectHeight = 6;
console.log(calculateAreaWithVariables(rectWidth, rectHeight)); 


// Q#10.
function isPalindrome(str) {
  let reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
}
console.log(isPalindrome('madam')); 
console.log(isPalindrome('hello')); 

// Q#11.
function convertFirstLetterToUpperCase(str) {
  let words = str.toLowerCase().split(' ');
  let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}
console.log(convertFirstLetterToUpperCase('the quick brown fox')); 

// Q#12.
function findLongestWord(str) {
  let words = str.split(' ');
  let longestWord = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord('Web Development Tutorial'));

//Q#13
function countOccurrences(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}
console.log(countOccurrences('hello world', 'l')); 
console.log(countOccurrences('mississippi', 's')); 

// Q#14.
function calcCircumference(radius) {
  let circumference = 2 * Math.PI * radius;
  return `The circumference is ${circumference}`;
}
console.log(calcCircumference(5)); 

// Q#14
function calcArea(radius) {
  let area = Math.PI * radius * radius;
  return `The area is ${area}`;
}
console.log(calcArea(5));


