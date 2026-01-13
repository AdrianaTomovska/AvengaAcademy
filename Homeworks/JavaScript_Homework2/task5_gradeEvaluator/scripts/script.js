let inputScore = prompt("Enter the grade (0-100):");

if (inputScore === null || inputScore === "") {
    console.log("No grade entered.");
} else {
    let score = parseInt(inputScore);

    if (isNaN(score)) {
        console.log("Invalid input. Please enter a numeric value.");
    } else if (score < 0 || score > 100) {
        console.log("Please enter a valid score between 0 and 100.");
    } else {

        let grade = "";

        if (score >= 90 && score <= 100) {
            grade = "A";
            console.log("Your score is " + score + " " + "and your grade is " + grade);
        }
        else if (score >= 80 && score <= 89) {
            grade = "B";
            console.log("Your score is " + score + " " + "and your grade is " + grade);
        }
        else if (score >= 70 && score <= 79) {
            grade = "C";
            console.log("Your score is " + score + " " + "and your grade is " + grade);
        }
        else if (score >= 60 && score <= 69) {
            grade = "D";
            console.log("Your score is " + score + " " + "and your grade is " + grade);
        }
        else if (score >= 0 && score <= 59) {
            grade = "F";
            console.log("Your score is " + score + " " + "and your grade is " + grade);
        }
        else {
            console.log("Error.");
        }

    }
}



