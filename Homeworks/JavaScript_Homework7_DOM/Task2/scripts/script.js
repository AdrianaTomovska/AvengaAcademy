let numbers = [];

function addNumber(){
    let input = document.getElementById("numberInput");
    let value = Number(input.value);

    if(input.value === "" || isNaN(value)){
        alert("Please enter a valid number");
        return;
    }

    numbers.push(value);

let paragraph = document.getElementById("numberList");
paragraph.textContent = value;


}


function calculate(){
    let sum = 0;
    let equation = "";


    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];

        equation += numbers[i];

        if(i < numbers.length -1) {
            equation = equation + " + ";
        }
    }

    document.getElementById("sumResult").textContent = "Sum: " + sum;
    document.getElementById("equation").textContent = equation + " = " + sum;
}