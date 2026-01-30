let inputText = $('#inputText');
let inputColor = $('#inputColor');
let header = $('#generatedH1');
let generateButton = $('#btn');
let h3 = $('#messages');

generateButton.on('click', function() {
    let text = inputText.val().trim();
    let color = inputColor.val().trim();
    h3.text('');

    if (text === '') {  
        h3.text('Error: Text input cannot be empty.');
        header.text('');
        return;
    }
    if (color === '') {  
        h3.text('Error: Color input cannot be empty.');
        header.text('');
        return;
    }
    header.text(text);
    header.css('color', color);
    h3.text('Success: Header generated!');
});