let inputNumber1 = prompt("Enter the first number:");
let number1 = parseInt(inputNumber1);

let inputNumber2 = prompt("Enter the second number:");
let number2 = parseInt(inputNumber2);

let operation = prompt("Enter the operation (+, -, *, /):");

let result;

if (isNaN(number1) || isNaN(number2)) {
    console.log("Error: Invalid number input.");
}

else if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") {
    console.log("Error: Invalid operation.");
}

else if (operation === "+") {
    result = number1 + number2;
}
else if (operation === "-") {
    result = number1 - number2;
}
else if (operation === "*") {
    result = number1 * number2;
}

else if (operation === "/" && number2 === 0) {
    console.log("Error: Division by zero is not allowed.");

} else if (operation === "/") {
    result = number1 / number2;
}

if (result !== undefined) {
    console.log(`The result of ${number1} ${operation} ${number2} is: ${result}`);
}


