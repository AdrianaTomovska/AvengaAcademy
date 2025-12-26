let username = "AdrianaT";
let password = "password1!";

let inputUsername = prompt("Enter your username:");
let inputPassword = prompt("Enter your password:");

if (!inputUsername || !inputPassword) {
    console.log("Username and password cannot be empty.");
} else if (inputUsername === username && inputPassword === password) {
    console.log("Login successful.");
} else {
    console.log("Invalid username or password.");
}