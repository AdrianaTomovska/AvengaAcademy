// # Exercises

// ## Exercise 1

// There is a JSON file with students. Make a call to the file and get the following data from it:

// * All students with an average grade higher than 3
// * All female student names with an average grade of 5
// * All male student full names who live in Skopje and are over 18 years old
// * The average grades of all female students over the age of 24
// * All male students with a name starting with B and average grade over 2

// New requirements HOMEWORK
// * All students who are older than 30 (return full name + age)
// * All students from a city that starts with B (return full name + city)
// * All student emails (just an array of emails)
// * All students with average grade exactly 3 (return full name)
// * Count how many students are Female and how many are Male


// Use higher order functions to find the answers
// **Link:** https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json



let url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

let getData = (url) => {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let averageGrade = averageGrade3(data);
            console.log(averageGrade);

            let femaleAvg = femaleAverage5(data);
            console.log(femaleAvg);

            let maleStudentOver = maleStudent(data);
            console.log(maleStudentOver);

            let femaleStudentOver24 = femaleAverageGradeOver24(data);
            console.log(femaleStudentOver24);

            let nameWithB = maleNameWithB(data);
            console.log(nameWithB);

            let allNameAge30 = olderThen30(data);
            console.log(allNameAge30);

            let cityName = cityNameStartWithB(data);
            console.log(cityName);

            let mail = studentMail(data);
            console.log(mail);

            let avgExactly3 = studentAvgExactly3(data);
            console.log(avgExactly3);

            let countMaleFemale = countOfFemaleAndMale(data);
            console.log(countMaleFemale);
        })
        .catch(function (error) {
            console.log(error);


        })
}

getData(url);

function averageGrade3(data) {
    let students = data.filter(student => student.averageGrade > 3)
    return students;
}

function femaleAverage5(data) {
    let femaleAvg5 = data.filter(student => student.averageGrade === 5 && student.gender === "Female")
        .map(femaleName => femaleName.firstName)

    return femaleAvg5;

}


function maleStudent(data) {
    let maleStudentOver18 = data.filter(student => student.gender === "Male" && student.city === "Skopje" && student.age >= 18)
        .map(maleStudent => maleStudent.firstName + " " + maleStudent.lastName)
    return maleStudentOver18;
}


function femaleAverageGradeOver24(data) {
    let avgFemale24 = data.filter(student => student.gender === "Female" && student.age > 24)
        .map(femaleStudent => femaleStudent.averageGrade)
    return avgFemale24;
}


function maleNameWithB(data) {
    let maleB = data.filter(student => student.averageGrade > 2 && student.firstName.startsWith("B") && student.gender === "Male")
    return maleB;
}


function olderThen30(data) {
    let older30 = data.filter(student => student.age > 30).map(nameAge => nameAge.firstName + " " + nameAge.lastName + " - " + nameAge.age)
    return older30;
}

function cityNameStartWithB(data) {
    let cityName = data.filter(city => city.city.startsWith("B")).map(student => student.firstName + " " + student.lastName + " - " + student.city)
    return cityName;
}

function studentMail(data) {
    let email = data.filter(studen => studen.email).map(email => email.email);
    return email;
}

function studentAvgExactly3(data) {
    let avgExactly3 = data.filter(student => student.averageGrade === 3).map(student => student.firstName + " " + student.lastName);
    return avgExactly3;
}

function countOfFemaleAndMale(data) {
    let female = data.filter(student => student.gender === "Female");
    let male = data.filter(student => student.gender === "Male");

    let numberMale = male.reduce((sum, male) => sum += 1, 0);
    let numberFemale = female.reduce((sum, female) => sum += 1, 0);

    return `${numberMale} - Male Students \n ${numberFemale} - Female Students`;
}