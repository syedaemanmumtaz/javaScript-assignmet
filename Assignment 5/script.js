// q1
// let futureStudentNames =[];
// futureStudentNames.push ("emaan");
// futureStudentNames.push ("maryam");
// console.log("futureStudentNames",futureStudentNames);

// //q2
// let futureStudentNames = {}; 
// futureStudentNames["student1"] = "John";
// futureStudentNames["student2"] = "Alice";
// futureStudentNames["student3"] = "Bob";
// console.log("futureStudentNames",futureStudentNames);

// //q3
// let fruits = ["apple", "orange", "banana", "grape"];
// console.log(fruits[]);

// //q4
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers[4]);

// //q5
// let booleanValues = [true, false, true, true, false];
// console.log(booleanValues[1]);

// //q6
// let mixedArray = [1, "apple", true, 3.14, false];
// console.log(mixedArray[0]);

// //q7
// let programmingLanguages = ["JavaScript", "Python", "Java", "C++"];
// console.log(programmingLanguages[3]);

// //q8
// let mobileNetworks = ["Mobilink", "Telenor", "Zong", "Ufone", "Warid"];
// console.log(mobileNetworks);

// // q9
// let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h2>Education Qualifications in Pakistan:</h2>");
// document.write("<ul>");
// for (let i = 0; i < educationQualifications.length; i++) {
//     document.write("<li>" + educationQualifications[i] + "</li>");
// }
// document.write("</ul>");

// // q10
// let studentNames = ["John", "Alice", "Bob"];
// let studentScores = [420, 480, 350];
// for (let i = 0; i < studentNames.length; i++) {
//   let percentage = (studentScores [i] / 500) * 100;
// console.log(`${studentNames[i]} scored ${studentScores[i]} out of 500, with a percentage of ${percentage.toFixed(2)}%`);
// }

// // q12(a)
// let newColorBeginning = prompt("Enter a color to add to the beginning:");
// colorNames.unshift(newColorBeginning);
// document.write("<p>After adding color to the beginning: " + colorNames.join(", ") + "</p>");
// // q12(b)
// let newColorEnd = prompt("Enter a color to add to the end:");
// colorNames.push(newColorEnd);
// document.write("<p>After adding color to the end: " + colorNames.join(", ") + "</p>");
// // q12(c)
// colorNames.unshift("Purple", "Yellow");
// document.write("<p>After adding two more colors to the beginning: " + colorNames.join(", ") + "</p>");
// // q12(d)
// colorNames.shift();
// document.write("<p>After deleting the first color: " + colorNames.join(", ") + "</p>");
// // q12(e)
// colorNames.pop();
// document.write("<p>After deleting the last color: " + colorNames.join(", ") + "</p>");
// // q12(f)
// let indexToAdd = parseInt(prompt("Enter the index to add a color:"));
// let colorToAdd = prompt("Enter the color to add:");
// colorNames.splice(indexToAdd, 0, colorToAdd);
// document.write("<p>After adding color at a specific index: " + colorNames.join(", ") + "</p>");
// // q12(g). 
// let indexToDelete = parseInt(prompt("Enter the index to delete colors:"));
// let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colorNames.splice(indexToDelete, numberOfColorsToDelete);
// document.write("<p>After deleting colors at a specific index: " + colorNames.join(", ") + "</p>");

// //q13
// var studentScores = [85, 92, 78, 95, 88];
// console.log("Original scores array:", studentScores);
// studentScores.sort(function(a, b) {
//     return a - b;
// });
// console.log("Sorted scores array in ascending order:", studentScores);


// // q14
// var cities = ["karachi", "Lahore", "islamabad", "peshawer", "multan"];
// console.log("Original cities array:", cities);
// var selectedCities = [];
// selectedCities = cities.slice(1, 4);
// document.write("Selected cities array:", selectedCities);

//q#15
var arr = ["This", "is", "my", "cat"];
var resultString = arr.join(' ');
document.write(resultString);

<br></br>
//Q#16
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");

//q#17
let fifoQueue = [];
fifoQueue.push(1);
fifoQueue.push(2);
fifoQueue.push(3);
let firstIn = fifoQueue.shift(); 
let secondIn = fifoQueue.shift();
let thirdIn = fifoQueue.shift(); 
document.write(firstIn, secondIn, thirdIn);