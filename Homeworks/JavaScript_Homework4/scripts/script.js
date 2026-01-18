/////////// HOMEWORK #1 /////////////

// function tellStory(array) {
//     let name = array[0];
//     let mood = array[1];
//     let activity = array[2];

//     return `This is ${name}. ${name} is a nice person. Today they are ${mood}, They are ${activity} all day. The end.`;
// }

// let story = tellStory(["Maria", "happy", "swimming"]);
// console.log(story);


////////// HOMEWORK #2 ///////////


// function validateNumber(value) {
//   return value !== "" && !isNaN(value);
// }


// function sumArray(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum;
// }


// let numbers = [];
// let hasError = false;

// for (let i = 0; i < 5; i++) {
//   let input = prompt(`Enter number ${i + 1}:`);

//   if (!validateNumber(input)) {
//     console.log("Error: One of the inputs is not a valid number.");
//     hasError = true;
//     break;
//   }

//   numbers.push(Number(input));
// }

// if (!hasError) {
//   let result = sumArray(numbers);
//   console.log("The sum is: " + result);
// }


////////////// HOMEWORK #3 //////////////

// function createBigString(array) {
//     let result = "";

//     for(let i = 0; i < array.length; i++) {
//         result += array[i];

//         if (i < array.length - 1) {
//             result += " ";
//         }
//     }

//     return result;

// }

// let array = ["Hello", "there", "students", "of", "SEDC", "!"];
// let bigString = createBigString(array);
// console.log(bigString);


////////// Homework #4 /////////

// function loopingStructure() {
//     let print = "";

//     for(let i = 1; i <= 20; i++) {
//         if (i%2 === 0 ) {
//            print += i + "\n";
//         } else {
//             print += i +  " " ;
//         }
//     }

//     console.log(print);
//     return print;

// }

// loopingStructure();


///////// Homework #5 ////////

// function maxMinArr(array) {
//     if (Array.length === 0) {
//         console.log("The array is empty");
//     }

//     let max = array[0];
//     let min = array[0];


//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }

//     let sum = max + min;

//     return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
// }

// let arr = [3, 5, 6, 8, 11];
// console.log(maxMinArr(arr));


///////// Homework #6 ////////

function fullName(firstName, lastName) {



    if (firstName.length !== lastName.length) {
        console.log("The arrays must have the same length");
    }

    let resultFullName = [];

    for (let i = 0; i < firstName.length; i++) {
        resultFullName.push(`${i + 1}. ${firstName[i]} ${lastName[i]}`);
    }

    return resultFullName;

}

let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];

let full = fullName(first, last);
console.log(full);