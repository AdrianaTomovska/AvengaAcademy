let input = prompt('Enter your age:');
let age = parseInt(input);

if (!input || isNaN(age) || age < 0) {
    alert('Please enter a valid age.');
} else if (age <= 12) {
    console.log('You are ' + age + '.' + ' ' + 'You are a child.');
} else if (age >= 13 && age <= 17) {
    console.log('You are ' + age + '.' + ' ' + 'You are a teenager.');
} else if (age >= 18) {
    console.log('You are ' + age + '.' + ' ' + 'You are an adult.');
}