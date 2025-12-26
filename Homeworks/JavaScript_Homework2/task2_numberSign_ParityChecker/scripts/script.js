let number = prompt("Please enter a number:");
let number1 = parseInt(number);

if (isNaN(number1) || !number) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    if (number1 < 0) {
        console.log("The number" + " " + number1 + " " + "is negative.");
    } else if (number1 > 0) {
        console.log("The number" + " " + number1 + " " + "is positive.");
    } else {
        console.log("The number is zero.");
    }


    if (number1 % 2 === 0) {
        console.log("The number" + " " + number1 + " " + "is even.");
    } else {
        console.log("The number" + " " + number1 + " " + "is odd.");
    }


}