// //////////// HOMEWORK Part 1 //////////////

// let animal = {
//     name:"Dog",
//     kind:"Mammals",

//     speak: function(message){
//         console.log(this.name + " says: " + message + "'" );
//     }
// };

// animal.speak("Hey bro!!!");


/////// HOMEWORK Part 1 - BONUS ////////

// let animal1 = {
//   name: prompt("Enter animal name:"),
//   kind: prompt("Enter animal kind:"),

//   speak: function(message) {
//     //console.log(this.name + " says: '" + message + "'");
//     console.log(`${this.name} says '${message}'`);
//   }
// };

// let userMessage = prompt("What should the animal say?");
// animal1.speak(userMessage);


// function makeAnimalSpeak() {
//   let animal1 = {
//     name: document.getElementById("name").value,
//     kind: document.getElementById("kind").value,

//     speak: function(message) {
//       //console.log(this.name + " says: '" + message + "'");
//       console.log(`${this.name} says '${message}'`);
//     }
//   };

//   const message = document.getElementById("message").value;
//   animal1.speak(message);
// }

// //////////// HOMEWORK Part 2 //////////////


// const books = [
//   {
//     title: "The Robots of Dawn",
//     author: "Isaac Asimov",
//     readingStatus: true,
//     getReadingInfo: function () {
//       return `Already read '${this.title}' by ${this.author}.`;
//     }
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     readingStatus: false,
//     getReadingInfo: function () {
//       return `You still need to read '${this.title}' by ${this.author}.`;
//     }
//   }
// ];


// books.forEach(book => {
//   console.log(book.getReadingInfo());
// });


// console.log(book.getReadingInfo());





//////////////////////////////////////////////////////
// let books = [];

// let title1 = prompt("Enter book title:");
// let author1 = prompt("Enter book author:");
// let readingStatusInput1 = prompt("Have you read the book? (yes/no)");

// let book1 = {
//   title: title1,
//   author: author1,
//   readingStatus: readingStatusInput1.toLocaleLowerCase()==="yes",

//   getReadingStatus: function() {
//       if(this.readingStatus) {
//         return `Already read '${this.title}' by ${this.author}.`;
//     } else {
//       return `You still need to read '${this.title}' by ${this.author}.`;
//     }
//   }
// };

// books.push(book1);

// let title2 = prompt("Enter book title:");
// let author2 = prompt("Enter book author:");
// let readingStatusInput2 = prompt("Have you read the book? (yes/no)");

// let book2 = {
//   title: title2,
//   author: author2,
//   readingStatus: readingStatusInput2.toLocaleLowerCase()==="yes",

//   getReadingStatus: function() {
//       if(this.readingStatus) {
//         return `Already read '${this.title}' by ${this.author}.`;
//     } else {
//       return `You still need to read '${this.title}' by ${this.author}.`;
//     }
//   }
// };

// books.push(book2);

// let message = "";

// for(let i =0; i < books.length; i++){
//   message += books[i].getReadingStatus() + "\n";
// }

// alert(message);


////////////////////////////////////////////////////////////


let books = [];

function checkBook() {
  let book = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    readingStatus: document.getElementById("status").value === "true",

    getReadingInfo: function () {
      if (this.readingStatus) {
        return `Already read '${this.title}' by ${this.author}.`;
      } else {
        return `You still need to read '${this.title}' by ${this.author}.`;
      }
    }
  };

  // Add book to array
  books.push(book);

  // Display all books
  let result = "";
  for (let i = 0; i < books.length; i++) {
    result += books[i].getReadingInfo() + "\n";
  }

  document.getElementById("outputStatus").innerText = result;



}