// Q1
// let cityName = prompt("Enter the city name:");
// if (cityName.toLowerCase() === "karachi") {
//     alert("Welcome to the city of lights");
// } else {
//     alert("Welcome!");
// }

// // Q2
// let gender = prompt("Enter your gender");
// if (gender.toLowerCase() === "Male") {
//     alert('Good Morning Sir')
// }else{
//     alert('Good Morning Maam')
// }


// //Q3
// let trafficSignal =prompt("Enter color of road traffic signal");
// if (trafficSignal=="red"){
//     alert(" must stop");
// }
// else if (trafficSignal == "yellow"){
//     alert("should get ready to move");
// }
// else if(trafficSignal == "green"){
//     alert("can move now")
// }
// else{
//     alert("pagal....color of road traffic signal")
// }



// //Q4
// let Fuel = prompt("Enter the remaining fuel in your car (in litres):");
// if (Fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("You have enough fuel.");
// }


//Q5
// // (a)
// let a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// // b. 
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// // c. 
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// // d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// // e.
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// // f.
// if("car" < "cat"){
// alert("car is smaller than cat");
// }


//Q6
let userInput = prompt ("Enter marks obtained");
let userInput2 = prompt("Enter total marks.");
let totalMarks = userInput/userInput2*100;
if (totalMarks>=80){
    document.write(`<h1>Masks Sheet</h1> <br>`)
    document.write(totalMarks + "  " + "A-one  Excellent <br>");
    document.write(`<p> Grade : A </p>`)
}
else if (totalMarks>=70) {
    document.write(`<h1>Masks Sheet</h1> <br>`)
        document.write(totalMarks + "  " + "A Good <br>");
        document.write(`<p> Grade : B </p>`)
}
else if (totalMarks>=60) {
    document.write(`<h1>Masks Sheet</h1> <br>`)
        document.write(totalMarks + "  " + "You need to improve <br>");
        document.write(`<p> Grade : C </p>`)
}
else if (totalMarks<50) {
    document.write(`<h1>Masks Sheet</h1> <br>`)
        document.write(totalMarks + "  " + "Last Chance <br>");
        document.write(`<p> Grade : D </p>`)
}
else{
    document.write(`<h1>Masks Sheet</h1> <br>`)
    document.write("SORRY .... Fail");
}


//Q7
// var secretNo = 4 ;
// var guess = prompt("guess the secret number.");
// if (guess == secretNo){
//     alert("“Bingo! Correct answer”.")
// }
// else if (guess == +1){
//     alert("“Close enough to the correct answer”.")
// }
// else {
//     alert(" Sorry Your a loser");
// }

// //Q8
// var userInput = parseInt(prompt("Enter a number:"));
// if (userInput % 3 === 0) {
//         alert(userInput + " is divisible by 3. 🎉");
// } else {
//         alert(userInput + " is not divisible by 3. 😔");
// }

// //Q9
// var no = prompt("checks whether the given number even number or an odd number.");
// if (no % 2 == 0){
//     alert("Even");
// }
// else{
//     alert("Odd");
// }

// // Q 10
// var temp = prompt("Write temperature");
// if (temp >= 40){
//     alert("“It is too hot outside.”");
// }
// else if (temp >= 30){
//     alert("“The Weather today is Normal.”");
// }
// else if (temp >= 20){
//     alert("“Today’s Weather is cool.”");
// }
// else if (temp >= 10){
//     alert("“OMG! Today’s weather is so Cool.”");
// }
// else{
//     alert("Write temperature");
// }


// Q 11
// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));
// let operation = prompt("Enter the operation (+, -, *, /, %):");
// let result = calculator(num1, num2, operation);{
//     if (operation === '+') {
//         return num1 + num2;
//     } else if (operation === '-') {
//         return num1 - num2;
//     } else if (operation === '*') {
//         return num1 * num2;
//     } else if (operation === '/') {
//         if (num2 !== 0) {
//             return num1 / num2;
//         } else {
//             return "Error: Division by zero is not allowed.";
//         }
//     } else if (operation === '%') {
//         if (num2 !== 0) {
//             return num1 % num2;
//         } else {
//             return "Error: Modulus by zero is not allowed.";
//         }
//     } else {
//         return "Error: Invalid operation.";
//     }
//     console.log(`The result of ${num1} ${operation} ${num2} is: ${result}`);
// }