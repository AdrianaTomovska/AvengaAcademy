let database = [];

let form = document.getElementById('studentForm');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let age = document.getElementById('age');
let email = document.getElementById('email');


function Student(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}


function createStudent(firstName, lastName, age, email) {
    let student = new Student(firstName.value, lastName.value, age.value, email.value)
    database.push(student)
    console.log(database)
    form.reset();
}



form.addEventListener('submit', function (e) {
    e.preventDefault();
    createStudent(firstName, lastName, age, email)

})