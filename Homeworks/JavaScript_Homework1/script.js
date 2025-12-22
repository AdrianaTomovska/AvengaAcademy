//price of one phone is $119.95
//tax rate is 5%
//calculate the price of 30 Phones

let phonePrice = 119.95;

//5% devided by 100 => 0.05
let taxRate = 0.05;
let numberOfPhones = 30;
let phonePriceWithTax = phonePrice * taxRate;
let totalPrice = phonePrice + phonePriceWithTax;

console.log(`The price of 30 phones is ${totalPrice}`);
