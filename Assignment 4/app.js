                                            //CHAPTER # 12-13

//Q#1
// let char = prompt("Enter a character:");
// if (char.length === 1) {
//     let asciiCode = char.charCodeAt(0);
//     if (asciiCode >= 48 && asciiCode <= 57) {
//         console.log("The character is a number.");
//     } else if (asciiCode >= 65 && asciiCode <= 90) {
//         console.log("The character is an uppercase letter.");
//     } else if (asciiCode >= 97 && asciiCode <= 122) {
//         console.log("The character is a lowercase letter.");
//     } else {
//         console.log("The character is not a number, uppercase letter, or lowercase letter.");
//     }
// } else {
//     console.log("Please enter a single character.");
// }

// //Q#2
// let num1 = +(prompt("Enter the first integer:"));
// let num2 = +(prompt("Enter the second integer:"));

// if (num1 > num2) {
//     console.log("The larger number is: " + num1);
// } else if (num2 > num1) {
//     console.log("The larger number is: " + num2);
// } else {
//     console.log("Both numbers are equal.");
// }

// //Q#3
// let number = +(prompt("Enter a number:"));
// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }

// //Q#4
// let char = prompt("Enter a character:");

// if (char.length === 1) {
//     let isVowel = char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
//                   char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U';

//     console.log(isVowel);
// }
// else {
//     console.log("Please enter a single character.");
// }

// //Q#5
// let correctPassword = "emanPassword123";
// let userPassword = prompt("Enter your password:");
// if (userPassword === "") {
//     console.log("Please enter your password");
// } else {
//     if (userPassword === correctPassword) {
//         console.log("Correct! The password you entered matches the original password");
//     } else {
//         console.log("Incorrect password");
//     }
// }

//Q#6 ( // var hour = 13;
            // if (hour < 18) {
            //     greeting = "Good day";
           //     else
             //     greeting = "Good evening";
            //     }  )

// let hour = prompt('enter the hour')   
// let greeting ;         
// if (hour < 18) {
// greeting = "Good day";
// console.log(greeting)
// }
// else{
// greeting = "Good evening" 
// console.log(greeting)
// }

// let time = prompt("Enter time in 24-hour clock format (e.g., 1900 for 7 PM):");

// // Ensure the input is a number and is within the valid range
// if (!isNaN(time) && time.length === 4) {
//     let hours = parseInt(time.substring(0, 2));
//     let minutes = time.substring(2, 4);
    
//     if (hours >= 0 && hours < 24 && minutes >= "00" && minutes <= "59") {
//         let period = "AM";
        
//         if (hours === 0) {
//             hours = 12;
//         } else if (hours === 12) {
//             period = "PM";
//         } else if (hours > 12) {
//             hours -= 12;
//             period = "PM";
//         }
        
//         console.log("The time is " + hours + ":" + minutes + " " + period);
//     } else {
//         console.log("Invalid time format. Please enter a valid time.");
//     }
// } else {
//     console.log("Invalid input. Please enter time in 24-hour clock format (e.g., 1900 for 7 PM).");
// }

//Q#7
let time = +prompt("Enter time in 24-hour clock format (e.g., 1900 for 7 PM):")
if(time >= 0 && time < 1200){
  console.log("Good Morning ...!")
}else if(time >= 1200 && time < 1700){
  console.log("Good AfterNoon!!")
}else if(time >= 1700 && time < 2100){
  console.log("Good Evening !")
}else if(time >= 2100 && time < 2400){
  console.log("Good Nigth *!*")
}else{
  console.log('Or Kuch Nhi Hota Time')
}