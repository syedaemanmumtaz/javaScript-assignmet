                                                    //CHAPTER #31-34
//Q#1
let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currentDayIndex = new Date().getDay();
let currentDayAbbreviation = dayNames[currentDayIndex];
alert("Current Day: " + currentDayAbbreviation);

//q#2
var today = new Date();
var dayOfWeek = today.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6) {
    console.log("It's Fun day");
} else {
    console.log("It's not Fun day");
}

//q#3
var today = new Date();
var dayOfMonth = today.getDate();
if (dayOfMonth < 16) {
    console.log("First fifteen days of the month");
} else {
    console.log("Last days of the month");
}

//q#4
var currentDate = new Date();
var millisecondsSinceEpoch = currentDate.getTime();
var minutesSinceEpoch = millisecondsSinceEpoch / (1000 * 60);
console.log("Minutes since midnight, Jan. 1, 1970:", minutesSinceEpoch);

//q#5
var currentTime = new Date();
var currentHour = currentTime.getHours();
if (currentHour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

//q#6
var date2021 = new Date(2021, 0, 1);
var lastDayOfLastMonth = new Date(date2021 - 1);
var laterDate = lastDayOfLastMonth;
console.log("Last day of the last month of 2020:", laterDate);

//q#7
var ramadanStartDate = new Date(2015, 5, 18);
var currentDate = new Date();
var timeDifference = currentDate - ramadanStartDate;
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
alert("Number of days past since 1st Ramadan: " + daysPassed);


//q#8
var referenceDate = new Date(1970, 0, 1);
var beginningOf2015 = new Date(2015, 0, 1);
var timeDifference = beginningOf2015 - referenceDate;
var secondsElapsed = Math.floor(timeDifference / 1000);
document.write("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed + " seconds");

//q#9
var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write("Original Date: " + currentDate);

//q#10
var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert("Date reset to 100 years back: " + currentDate);

//q#11
var userAge = prompt("Please enter your age:");
userAge = parseInt(userAge);
var currentYear = new Date().getFullYear();
var birthYear = currentYear - userAge;
document.write('your age: ' + userAge);
document.write("Your birth year is: " + birthYear);


//Q#12
let currentDateTime = new Date();
let formattedDateTime = currentDateTime.toLocaleString();
document.write("<p>Current Date and Time: " + formattedDateTime + "</p>");

//Q#13
function calculateNetAmount(units, chargesPerUnit) {
    return units * chargesPerUnit;
}
function calculateLatePaymentSurcharge(netAmount, percentage) {
    return (netAmount * percentage) / 100;
}
var customerName = "Abdul hadi";
var currentMonth = "june";
var numberOfUnits = 120;
var chargesPerUnit = 15.5;
var netAmountPayableWithinDueDate = calculateNetAmount(numberOfUnits, chargesPerUnit);
var latePaymentSurchargePercentage = 5;
var latePaymentSurcharge = calculateLatePaymentSurcharge(netAmountPayableWithinDueDate, latePaymentSurchargePercentage);
var grossAmountPayableAfterDueDate = netAmountPayableWithinDueDate + latePaymentSurcharge;
document.write("<h2>K-Electric Bill</h2>");
document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
document.write("<p><strong>Number of Units:</strong> " + numberOfUnits + "</p>");
document.write("<p><strong>Charges per Unit:</strong> $" + chargesPerUnit.toFixed(2) + "</p>");
document.write("<p><strong>Net Amount Payable (within Due Date):</strong> $" + netAmountPayableWithinDueDate.toFixed(2) + "</p>");
document.write("<p><strong>Late Payment Surcharge (%):</strong> " + latePaymentSurchargePercentage + "%</p>");
document.write("<p><strong>Late Payment Surcharge:</strong> $" + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> $" + grossAmountPayableAfterDueDate.toFixed(2) + "</p>");



