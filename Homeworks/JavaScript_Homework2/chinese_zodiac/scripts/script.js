let input = prompt("Enter your birth year:");


if (!input) {
    console.log('Enter a valid year');
} else {
    let yearOfBirth = parseInt(input);

    if (Number.isNaN(yearOfBirth)) {
        console.log('Year is not a valid number');
    } else {

        let zodiacIndex = (yearOfBirth - 4) % 12;

        if (zodiacIndex === 0) {
            console.log('Your Chinese Zodiac sign is Rat');

        } else if (zodiacIndex === 1) {
            console.log('Your Chinese Zodiac sign is Ox');
        } else if (zodiacIndex === 2) {
            console.log('Your Chinese Zodiac sign is Tiger');
        } else if (zodiacIndex === 3) {
            console.log('Your Chinese Zodiac sign is Rabbit');
        } else if (zodiacIndex === 4) {
            console.log('Your Chinese Zodiac sign is Dragon');
        } else if (zodiacIndex === 5) {
            console.log('Your Chinese Zodiac sign is Snake');
        } else if (zodiacIndex === 6) {
            console.log('Your Chinese Zodiac sign is Horse');
        } else if (zodiacIndex === 7) {
            console.log('Your Chinese Zodiac sign is Goat');
        } else if (zodiacIndex === 8) {
            console.log('Your Chinese Zodiac sign is Monkey');
        } else if (zodiacIndex === 9) {
            console.log('Your Chinese Zodiac sign is Rooster');
        } else if (zodiacIndex === 10) {
            console.log('Your Chinese Zodiac sign is Dog');
        } else if (zodiacIndex === 11) {
            console.log('Your Chinese Zodiac sign is Pig');
        }
        else {
            console.log('Error calculating zodiac sign');
    }

}
}