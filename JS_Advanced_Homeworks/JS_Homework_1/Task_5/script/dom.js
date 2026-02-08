function Student( firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getAge = function() {
        return new Date().getFullYear() - this.birthYear;
    }

    this.getInfo = function() {
        return `This is student ${this.firstName} ${this.lastName} from the ${this.academy} academy!`;
    }

    this.getGradesAverage = function() {

         let sum = 0; 
        for (let grade of this.grades) {
            sum += grade; 
        }
        return `The average of the grades is ${sum / this.grades.length}`; 
    }
}

let student1 = new Student(
    "John",
    "Doe",
    2000,
    "Web Development",
    [8, 9, 10, 7]
);

let student2 = new Student(
    "Anna",
    "Smith",
    1999,
    "Data Science",
    [9, 10, 8, 9]
);

let student3 = new Student(
    "Michael",
    "Brown",
    2001,
    "Web Development",
    [7, 8, 6, 9]
);



console.log(student3.getAge());
console.log(student3.getInfo());
console.log(student3.getGradesAverage());