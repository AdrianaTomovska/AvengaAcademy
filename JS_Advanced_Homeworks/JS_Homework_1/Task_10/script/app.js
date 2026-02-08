let reminders = [];

let titleInput = document.getElementById('title');
let priorityInput = document.getElementById('priority');
let colorInput = document.getElementById('color');
let descriptionInput = document.getElementById('description');

let addBtn = document.getElementById('addReminder');
let showBtn = document.getElementById('showReminders');

let tableContainer = document.getElementById('tableContainer');

function Reminder(title, priority, color, description) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;
}

function createItem(title, priority, color, description) {
    let newItem = new Reminder(title.value, priority.value, color.value, description.value);
    reminders.push(newItem);

    // Clear inputs
    title.value = '';
    priority.value = '';
    color.value = '#000000';
    description.value = '';

    console.log(reminders);
}

function showReminders() {
    tableContainer.innerHTML = '';

    if(reminders.length === 0) {
        tableContainer.innerHTML = "No reminders added yet.";
        return;
    }

    let table = document.createElement('table');
    table.border = '1';
    table.style.borderCollapse = 'collapse';
    table.style.width = '80%';

    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    let headers = ['Title', 'Priority', 'Description'];

    for (let i = 0; i < headers.length; i++) {
        let th = document.createElement('th');
        th.innerText = headers[i];
        th.style.padding = '8px';
        tr.appendChild(th);  
    }

    thead.appendChild(tr);
    table.appendChild(thead);

    let tbody = document.createElement('tbody');

    for(let reminder of reminders) {
        const tr = document.createElement('tr');

        const tdTitle = document.createElement('td');
        tdTitle.innerText = reminder.title;
        tdTitle.style.color = reminder.color;
        tdTitle.style.padding = '8px';

        const tdPriority = document.createElement('td');
        tdPriority.innerText = reminder.priority;
        tdPriority.style.padding = '8px';

        const tdDescription = document.createElement('td');
        tdDescription.innerText = reminder.description;
        tdDescription.style.padding = '8px';

        tr.appendChild(tdTitle);
        tr.appendChild(tdPriority);
        tr.appendChild(tdDescription);

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

addBtn.addEventListener('click', function () {
    createItem(titleInput, priorityInput, colorInput, descriptionInput);
});

showBtn.addEventListener('click', showReminders);
