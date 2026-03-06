// #Exercises
// ## Exercise 1
// Create a Person constructor function that has:
// * firstName
// * lastName
// * age
// * getFullName - method

// Create a Student constructor function that inherits from Person and has:
// * academyName
// * studentId
// * study - method that writes in the console: The student firstName is studying in the academyName

// Create two Student objects

// ## Exercise 2
// Create a method on the Person prototype that accepts a Student of any academy and returns the academy that that student is in.

// Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.
// #### DesignStudent
// * isStudentOfTheMonth - boolean
// * attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!

// #### CodeStudent
// * hasIndividualProject - boolean
// * hasGroupProject - boolean
// * doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project

// #### NetworkStudent
// * academyPart - number
// * attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!

// **Note:** For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

// Create one of each students
// Check all students with the Student method for checking students academy

// =================================================================

// PERSON
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.getFullName = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};

Person.prototype.getStudentAcademy = function(student){
  return student.academyName;
};


// STUDENT
function Student(firstName, lastName, age, academyName, studentId) {
  Person.call(this, firstName, lastName, age);
  this.academyName = academyName;
  this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.study = function () {
  console.log(`The student ${this.firstName} is studying in ${this.academyName}`);
};


// CREATE STUDENTS
let student1 = new Student("Adriana", "Tomovska", 34, "Avenga", 1);
let student2 = new Student("Klementina", "Dimitrova", 26, "Avenga", 2);

student1.getFullName();
student1.study();

student2.getFullName();
student2.study();


// DESIGN STUDENT
function DesignStudent(firstName,lastName,age,studentId,isStudentOfTheMonth){
  Student.call(this,firstName,lastName,age,"Design Academy",studentId);
  this.isStudentOfTheMonth = isStudentOfTheMonth;
}

DesignStudent.prototype = Object.create(Student.prototype);

DesignStudent.prototype.attendAdobeExam = function(){
  console.log(`The student ${this.firstName} is doing an adobe exam!`);
};


// CODE STUDENT
function CodeStudent(firstName,lastName,age,studentId){
  Student.call(this,firstName,lastName,age,"Code Academy",studentId);
  this.hasIndividualProject = false;
  this.hasGroupProject = false;
}

CodeStudent.prototype = Object.create(Student.prototype);

CodeStudent.prototype.doProject = function(type){
  if(type === "individual"){
    this.hasIndividualProject = true;
    console.log(`${this.firstName} is working on an individual project`);
  }

  if(type === "group"){
    this.hasGroupProject = true;
    console.log(`${this.firstName} is working on a group project`);
  }
};


// NETWORK STUDENT
function NetworkStudent(firstName,lastName,age,studentId,academyPart){
  Student.call(this,firstName,lastName,age,"Network Academy",studentId);
  this.academyPart = academyPart;
}

NetworkStudent.prototype = Object.create(Student.prototype);

NetworkStudent.prototype.attendCiscoExam = function(){
  console.log(`The student ${this.firstName} is doing a cisco exam!`);
};



let designStudent = new DesignStudent("Ana","Petrova",22,101,true);
let codeStudent = new CodeStudent("Marko","Trajkov",25,102);
let networkStudent = new NetworkStudent("Elena","Stojanova",24,103,1);



designStudent.attendAdobeExam();
codeStudent.doProject("individual");
networkStudent.attendCiscoExam();

console.log(student1.getStudentAcademy(codeStudent));