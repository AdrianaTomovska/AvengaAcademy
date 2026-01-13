// //////////// 1 - minutesToSeconds(minutes) ------------------

let inputMinutes = prompt("Enter the minutes");
let minutes = parseInt(inputMinutes);

function minutesToSeconds(minutes) {


  if (isNaN(minutes) || minutes === "") {
    console.log("Enter a valid number");
    return null;
  }

  if (minutes < 0) {
    console.log("Enter a valid number");
    return null;
  }

  if (minutes === 0) {
    console.log("0");
    return 0;
  }



  let seconds = minutes * 60;
  console.log(`${minutes} Minutes =  ${seconds} Seconds`);
  return seconds;

}

minutesToSeconds(minutes);


// /////////////// hoursToMinutes(hours) ///////////////

// let inputHours = prompt("Enter the hours");
let hours = parseInt(inputHours);

function hoursToMinutes(hours) {

  if (isNaN(hours) || hours === "") {
    console.log("Enter a valid number");
    return null;
  }

  if (hours < 0) {
    console.log("Enter a valid number");
    return null;
  }

  if (minutes === 0) {
    console.log("0");
    return 0;
  }

  let hToMinutes = hours * 60;
  console.log(`${hours} Hours = ${hToMinutes} Minutes`);
  return minuhToMinutestes;
}

hoursToMinutes(hours);


// /////////////// hoursToSeconds(hours) ///////////////

let inputHoursForSeconds = prompt("Enter the hours");
let hoursForSeconds = parseInt(inputHoursForSeconds);

function hoursToSeconds(hoursForSeconds) {

  if (isNaN(hoursForSeconds) || hoursForSeconds === "") {
    console.log("Enter a valid number");
    return null;
  }

  if (hoursForSeconds < 0) {
    console.log("Enter a valid number");
    return null;
  }

  if (minutes === 0) {
    console.log("0");
    return 0;
  }

  let seconds = hoursForSeconds * 3600;
  console.log(`${hoursForSeconds} Hours = ${seconds} Seconds`);
  return seconds;
}

hoursToSeconds(hoursForSeconds);


// /////////////// daysToHours(days) ///////////////

let inputDays = prompt("Enter the days");
let days = parseInt(inputDays);

function daysToHours(days) {

  if (isNaN(days) || days === "") {
    console.log("Enter a valid number");
    return null;
  }

  if (days < 0) {
    //console.log("Enter a valid number");
    return null;
  }

  if (days === 0) {
    console.log("0");
    return 0;
  }

  let daysToHours = days * 24;
  console.log(`${days} Days = ${daysToHours} Hours`);
  return daysToHours;
}

daysToHours(days);


// //////////// daysToSeconds(days) ///////////////

let inputDaysForSeconds = prompt("Enter the days");
let daysForSeconds = parseInt(inputDaysForSeconds);

function daysToSeconds(daysForSeconds) {

  if (isNaN(daysForSeconds) || daysForSeconds === "") {
    console.log("Enter a valid number");
    return null;
  }

  if (daysForSeconds < 0) {
    console.log("Enter a valid number");
    return null;
  }

  if (daysForSeconds === 0) {
    console.log("0");
    return 0;
  }

  let seconds = daysForSeconds * 86400;
  console.log(`${daysForSeconds} Days = ${seconds} Seconds`);
  return seconds;
}

daysToSeconds(daysForSeconds);


/////////////// 6 - isTruthyValue(value) ///////////////



function isTruthyValue(value) {
  return Boolean(value);
}

let input = prompt("Enter the value:");

let result = isTruthyValue(input);
console.log(`The input value is ${result}`);


/////////// 7️ areBothTruthy(a, b) //////////////////

function areBothTruthy(a, b) {
  return Boolean(a && b);
}

let inputA = prompt("Entet the first value");
let inputB = prompt("Enter the second value");
let truthy = areBothTruthy(inputA, inputB);
console.log(`The result is ${truthy}`);

///////////// 8️ getStringLength(text) //////////////

function getStringLength(text) {
  if (typeof text !== "string") {
    return null;
  }
  return text.length;
}

let textInput = prompt("Enter a string:");

// If input is a number (invalid)
if (!isNaN(textInput) && textInput !== "") {
  console.log(null);
} else {
  let result = getStringLength(textInput);
  console.log(result);
}


//////////////// 9️ getFirstAndLastChar(text) ///////////////////

function getFirstAndLastChar(text) {
  if (typeof text !== "string") {
    return null;
  }

  if (text.length < 2) {
    return null;
  }

  return text[0] + text[text.length - 1];


}

let userInput = prompt("Enter a string:");


if (!isNaN(userInput) && userInput !== "") {
  console.log(null);
} else {
  let result = getFirstAndLastChar(userInput);
  console.log(result);
}


//////////////// 10 capitalizeIfLong(text) ////////////////

function capitalizeIfLong(text) {
  if (typeof text !== "string") {
    return null;
  }

  if (text.length < 5) {
    return text;
  }

  return text[0].toUpperCase() + text.slice(1);
}

let inputText = prompt("Enter a text:");

if (!isNaN(inputText) && inputText !== "") {
  console.log(null);
} else {
  let result = capitalizeIfLong(inputText);
  console.log(result);
}


////////////// 1️1 isVowel(char) /////////////

function isVowel(char) {
  if ((typeof char !== "string" || char.length !== 1) || (typeof char !== "string" && char.length !== 1)) {
    return false;
  }

  // if (char.length !== 1) {
  //     return false;
  // }

  char = char.toLowerCase();


  return char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u";
}

let charInput = prompt("Enter a single character:");


if (!isNaN(charInput) && charInput !== "") {
  console.log(false);
} else {
  let result = isVowel(charInput);
  console.log(result);
}


//////////////////// 1️2️ getLargerNumber(a, b)  //////////////////////////

function getLargerNumber(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    return null;
  }

  if (a > b) {
    console.log(`The number ${a} is larger then ${b}`);
    return a;
  } else if (a === b) {
    console.log(`The number ${a} and number ${b} is equal`);
    return a;
  } {
    console.log(`The number ${b} is larger then ${a}`);
    return b;
  }
}

let input1 = prompt("Enter the number:");
let input2 = prompt("Enter the number:");
getLargerNumber(input1, input2);


///////////////// 1️3️ getMiddleNumber(a, b, c) ///////////////////

function getMiddleNumber() {

  let x = prompt("Enter first number (x):");
  let b1 = prompt("Enter second number (b):");
  let c1 = prompt("Enter third number (c):");


  if (isNaN(x) || isNaN(b1) || isNaN(c1)) {
    console.log("Enter the number");
    return null;
  }

  if (x === b1 || b1 === c1 || x === c1) {
    console.log("All values must be diferent!");
    return null;
  }

  if ((x > b1 && x < c1) || (x > c1 && x < b1)) {
    console.log(`The middle number is ${x}`);
    return x;
  } else if ((b1 > x && b1 < c1) || (b1 > c1 && b1 > c1 && b1 < x)) {
    console.log(`The middle number is ${b1}`);
    return b1;
  } else {
    console.log(`The middle number is ${c1}`);
    return c1;
  }
}

getMiddleNumber();


///////////////// 14  formatFullName(firstName,lastName) //////////////

function formatFullName() {

  let firstName = prompt("Enter your first name:");
  let lastName = prompt("Enter your last name:");


  if (!firstName || !lastName) {
    console.log("Invalid input: both names are required");
    return null;
  }


  if (typeof firstName !== "string" || typeof lastName !== "string") {
    console.log("Invalid input: names must be strings");
    return null;
  }


  let fullName = `${lastName}, ${firstName}`;

  console.log("Formatted name: " + fullName);
  return fullName;
}

formatFullName();


///////////////////// 1️5️ isValidUsername(username) ////////////////////////

function isValidUsername() {

  let username = prompt("Enter your username:");


  if (!username) {
    console.log("Invalid input: username is required");
    return false;
  }


  if (typeof username !== "string") {
    console.log("Invalid input: username must be a string");
    return false;
  }


  if (username.length < 5 || username.length > 12) {
    console.lo("Invalid username: length must be between 5 and 12 characters");
    return false;
  }


  if (!isNaN(username[0])) {
    console.log("Invalid username: must not start with a number");
    return false;
  }

  console.log("Valid username!");
  return true;
}


isValidUsername();
