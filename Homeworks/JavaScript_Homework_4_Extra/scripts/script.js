///////////// 1. Average of Numbers /////////////////

// let input = Number(prompt("How many numbers you want to enter?"));
// let numbers = [];

// for(let i = 0; i < input; i++) {
//     let num = Number(prompt(`Enter number ${i + 1}:`));
//     numbers.push(num);
// }

// console.log("Numbers entered:", numbers);

// function calculateAverage(numbersArray) {
//     let sum = 0;
//     for(let num of numbersArray){
//         sum += num;
//     }
//     return sum / numbersArray.length;
// }
// let average = calculateAverage(numbers);
// console.log("Average of the numbers:", average);


/////////////////// 2. Count Even Numbers /////////////////////

// let inputCount = Number(prompt("How many numbers you want to enter for even count?"));
// let numArray = [];

// for (let i = 0; i < inputCount; i++) {
//     let number = Number(prompt(`Enter number ${i + 1}:`));
//     numArray.push(number);
// }

// function countEvenNumbers(arr) {
//     let count = 0;
//     for (let num of arr) {
//         if (num % 2 === 0) {
//             count++;
//         }
//     }
//     return count;
// }

// let evenCount = countEvenNumbers(numArray);
// console.log("Numbers entered for even count:", numArray);
// console.log("Count of even numbers:", evenCount);


/////////////////// 3. Find the Smallest Number /////////////////////

// let inputSmallest = Number(prompt("How many numbers you want to enter to find the smallest?"));
// let smallNumArray = [];

// for (let i = 0; i < inputSmallest; i++) {
//     let number = Number(prompt(`Enter number ${i + 1}:`));
//     smallNumArray.push(number);
// }

// function findSmallestNumber(arr) {
//     let smallest = arr[0];
//     for (let num of arr) {
//         if (num < smallest) {
//             smallest = num;
//         }   
//     }
//     return smallest;
// }
// let smallestNumber = findSmallestNumber(smallNumArray);
// console.log("Numbers entered to find the smallest:", smallNumArray);
// console.log("Smallest number is:", smallestNumber);

/////////////////// 4. Reverse an Array /////////////////////

// let input1 = prompt("How many elements you want in the array to reverse?");
// let arrToReverse = [];

// for( let i = 0; i < input1; i++) {
//     let element = prompt(`Enter element ${i + 1}:`);
//     arrToReverse.push(element);
// }
// console.log("Original array:", arrToReverse);

// function reverseArray(arr) {
//     let reversedArr = [];

//     for(let i = arr.length - 1; i >= 0; i--) {
//         reversedArr.push(arr[i]);
//     }   
//     return reversedArr;
// }

// let reversedArray = reverseArray(arrToReverse);
// console.log("Reversed array:", reversedArray);


/////////////////// 5. Sum of Positive Numbers /////////////////////

// let input = prompt("How many elements you want in the array?");
// let array = [];

// for (let i =0; i < input; i++) {
//     let element = Number(prompt(`Enter element ${i + 1}:`));
//     array.push(element);
// }

// function sumPositiveNumbers(arr) {
//     let sum = 0;
//     for (let num of arr) {
//         if (num > 0) {
//             sum += num;
//         }
//     }
//     return sum;
// }

// let positiveSum = sumPositiveNumbers(array);
// console.log("Array entered:", array);
// console.log("Sum of positive numbers:", positiveSum);


////////////////// 6. FizzBuzz /////////////////////

// function fizzBuzz() {
//     for( let i =1; i <=100 ; i++){
//         if(i % 3 ===0 && i % 5 ===0){
//             console.log("FizzBuzz");
//         } else if(i % 3 ===0){
//             console.log("Fizz");
//         } else if(i % 5 ===0){
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         } 
//     }
// }

// fizzBuzz();

////////////////// 7. Sum Until Zero /////////////////////

// function sumUntilZero() {
//     let sum = 0;
//     let number;

//     do {
//         number = Number(prompt("Enter a number (enter 0 to stop):"));
//         sum += number;
//     } while (number !== 0);

//     console.log("Total sum of entered numbers:", sum);
// }

// sumUntilZero();


////////////////// 8. Multiplication Table /////////////////////

// function multiplicationTable() {
//     let number = Number(prompt("Enter a number to generate its multiplication table:"));
//     console.log(`${number}:`);

//     for (let i = 1; i <= 10; i++) {
//         console.log(`${number} x ${i} = ${number * i}`);
//     }
// }

// multiplicationTable();

////////////////// 9. Count Digits /////////////////////

// function countDigits(number) {
//   return Math.abs(number).toString().length;
// }
// console.log(countDigits(56789145))


////////////  10. Find Longest String ///////////////////// 


// let inputCount = Number(prompt("How many strings you want to enter?"));
// let stringArray = [];

// for (let i = 0; i < inputCount; i++) {
//     let str = prompt(`Enter string ${i + 1}:`);
//     stringArray.push(str);
// }
// let longestString = findLongestString(stringArray);
// console.log("Strings entered:", stringArray);
// console.log("Longest string is:", longestString);

// function findLongestString(arr) {
//     let longest = "";
//     for (let str of arr) {
//         if (str.length > longest.length) {
//             longest = str;
//         }   
//     }
//     return longest;
// }


////////////////// 11. Reverse a Number /////////////////////

 function reverseNumber(num) {
        let reversed = 0;
        while (num !== 0) {
            let digit = num % 10;
            reversed = reversed * 10 + digit;
            num = Math.floor(num / 10);
        }
        return reversed;
    }   
//     console.log(reverseNumber(12345));  

////////////////// 12. Check Prime Number /////////////////////

// function isPrime(number) {
//   if (number <= 1) {
//     return "Not Prime";
//   }

//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return "Not Prime";
//     }
//   }

//   return "Prime";
// }
// console.log(isPrime(9));



////////////////// 13. Remove Duplicates /////////////////////

// function removeDuplicates(arr) {
//     let uniqueArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (uniqueArr.indexOf(arr[i]) === -1) {
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }

// let inputArr = prompt("Enter how many elements you want in the array):");
// let elements = [];

// for (let i = 0; i < inputArr; i++) {
//     let element = prompt(`Enter element ${i + 1}:`);
//     elements.push(element);
// }   
// let result = removeDuplicates(elements);
// console.log("Array entered:", elements);
// console.log("Array after removing duplicates:", result);

////////////////// 14. Sum of Digits /////////////////////

function sumOfDigits(num) {
    let sum = 0;
    while (num !== 0) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    return sum;
}   
console.log(sumOfDigits(12345));

////////////////// 15. Palindrome Number Check /////////////////////

// function isPalindrome(num) {
//   let reversed = reverseNumber(num);

//   if (num === reversed) {
//     return "Palindrome";
//   } else {
//     return "Not Palindrome";
//   }
// }
// console.log(isPalindrome(121));

////////////// 16. Armstrong Number Check /////////////////////

// function isArmstrongNumber(num) {
//     let sum = 0;
//     let temp = num;
//     let digits = num.toString().length;
//     while (temp !== 0) {
//         let digit = temp % 10;
//         sum += Math.pow(digit, digits);
//         temp = Math.floor(temp / 10);
//     }   
//     if (sum === num) {
//         return "Armstrong Number";
//     }
//     else {
//         return "Not Armstrong Number";
//     }
// }
// console.log(isArmstrongNumber(153));


///////////// 17. Calculator with History /////////////////////

function calculatorWithHistory(calculations) {
  let results = [];

  for (let [num1, operator, num2] of calculations) {
    if (operator === "+"){
        results.push(num1 + num2);
    }
    else if (operator === "-") {
        results.push(num1 - num2);
    }
    else if (operator === "*") {
        results.push(num1 * num2);
    }
    else if (operator === "/") {
        results.push(num1 / num2);
    }
    else {
        results.push("Invalid operator");
    }
  }

  return results;
}


console.log(
  calculatorWithHistory([
    [2, "+", 3],
    [4, "*", 5]
  ])
);