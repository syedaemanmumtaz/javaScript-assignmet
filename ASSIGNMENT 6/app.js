//Q#1
// var multidimensionalArray = new Array(3);
// for (var i = 0; i < multidimensionalArray.length; i++) {
//   multidimensionalArray[i] = new Array(4);
// }
// console.log(multidimensionalArray);


//Q#2
// var emptyMultiArray = [];
// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(matrix);


// //Q#3
// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }
// //Q#4
// let tableNum = prompt('Enter a Number to Show its Multiplication Table');
// let tableLength = prompt('Enter length Multiplication Table');
// console.log("Multiplication Table for tableNumber (up to to tableLength terms)");
// for (let i = 1; i <= tableLength; i++) {
//     console.log(`${tableNum} = ${i} * ${tableNum * i}`);
// }


// // q5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// q7 a. Counting: 
document.write("<h3>a. Counting: </h3> ");
for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}
document.write("<br>");

 //q7 b. Reverse counting:
document.write("<h3>b. Reverse counting</h3>: ");
for (var j = 10; j >= 1; j--) {
    document.write(j + ", ");
}
document.write("<br>");

 //q7 c. Even:
document.write(" <h3>c. Even:</h3> ");
for (var k = 0; k <= 20; k += 2) {
  document.write(k + ", ");
}
document.write("<br>");

 //q7 d. Odd:
document.write("<h3>d. Odd:</h3> ");
for (var l = 1; l <= 19; l += 2) {
    document.write(l + ", ");
}
document.write("<br>");

 //q7 e.
document.write("<h3>e. Series: </h3>");
for (var m = 2; m <= 20; m += 2) {
    document.write(m + "k, ");
}

// q8
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");
// var isFound = false;
// for (var i = 0; i < A.length; i++) {
//     var currentItem = A[i];
//     if (currentItem === userInput) {
//         isFound = true;
//         break; 
//     }
// }
// if (isFound) {
//     alert("Yes, '" + userInput + "' is found in the list.");
// } else {
//     alert("No, '" + userInput + "' is not found in the list.");
// }



// // q9
// var A = [24, 53, 78, 91, 12];
// var largestNumber = A[0];
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largestNumber) {
//         largestNumber = A[i];
//     }
// }
// console.log("The largest number in the array is: " + largestNumber);

// q10
var A = [24, 53, 78, 91, 12];
var smallestNumber = A[0];
for (var i = 1; i < A.length; i++) {
    if (A[i] < smallestNumber) {
        smallestNumber = A[i];
    }
}
console.log("The smallest number in the array is: " + smallestNumber);


//q11
for (var i = 1; i <= 20; i++) {
  var multipleOf5 = i * 5;
  console.log(multipleOf5);
  
}