//// List generator from an array ////

let names = ['John', 'Nick', 'Anna', 'Jane', 'Kate'];

let listName = document.getElementById('listName');
let btn = document.getElementById('btn');


btn.addEventListener('click', function() {

    listName.innerHTML = '';

    for(let name of names){
        let li = document.createElement('li');
        li.innerHTML = name;
        listName.appendChild(li);
    }

  
});







