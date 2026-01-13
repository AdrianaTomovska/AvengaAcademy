let input = prompt('Enter your age:');

if (input === null || input === '') {
    console.log('Input is empty or cancelled. Please enter a valid age.');
} else {
    let age = parseInt(input);

    if (isNaN(age) || age < 0) {
        console.log('Please enter a valid age.');
    }

    else {
        if (age <= 12) {
            console.log('You are ' + age + '.' + ' ' + 'You are a child.');
        } else if (age >= 13 && age <= 17) {
            console.log('You are ' + age + '.' + ' ' + 'You are a teenager.');
        } else if (age >= 18) {
            console.log('You are ' + age + '.' + ' ' + 'You are an adult.');
        }

    }
}
