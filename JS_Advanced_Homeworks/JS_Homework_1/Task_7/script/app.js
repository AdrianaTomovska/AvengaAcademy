//// List generator dynamically from inputs ////


let items = document.getElementById('items');
let fontSize = document.getElementById('font-size');
let color = document.getElementById('color');
let btn = document.getElementById('btn');
let divUl = document.getElementById('divUl');

function generateList(divUl, items, fontSize, color) {
    
    let ul = document.createElement('ul');
    let spplitedItems = items.value.split(',');

   
    for (let i of spplitedItems) {
        let li = document.createElement('li');
        li.innerText = i.trim();               
        li.style.color = color.value;         
        li.style.fontSize = fontSize.value + 'px'; 
        ul.appendChild(li);                    
    }

    
    divUl.appendChild(ul);

  
    items.value = '';
    fontSize.value = '';
};

btn.addEventListener('click', function() {
    generateList(divUl, items, fontSize, color)
});