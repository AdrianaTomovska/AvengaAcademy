///////// HOMEWORK Part 1 //////////////

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

for(let i = 0; i <paragraphs.length; i++) {
    paragraphs[i].textContent = "Hello form paragraphs";
}

let headers = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
console.log(headers);

for (var j = 0; j < headers.length; j++) {
    headers[j].textContent = "Hello from header";
}



