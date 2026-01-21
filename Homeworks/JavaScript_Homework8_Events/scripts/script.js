function createTable() {
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('cols').value;

    // Create table
    let table = document.createElement('table');
    table.border = "1";

  
    for (let i = 1; i <= rows; i++) {
        let tr = document.createElement('tr');


        for (let j = 1; j <= columns; j++) {
            let td = document.createElement('td');
            td.innerText = `Row-${i} Column-${j}`;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    // Display table
    let tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ""; 
    tableContainer.appendChild(table);
}
