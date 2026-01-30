let input = $('#inputField');;
let button = $('#greetButton');
let message = $('#greetingMessage');

$('#greetingMessage').css('color', 'blue');

button.on('click', function() {
    let name = input.val().trim();  
    if(name) {
        message.text(`Hello, ${name}!`);
    } else {
        message.text('Please enter your name.');
    }
});