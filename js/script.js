
// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees');
let empCount    = document.querySelector('#empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex;
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex);
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    getData()
    .then ( data => {
        // console.log(employees);
        empTable.lastElementChild.remove();
        // REBUILD THE TBODY FROM SCRATCH
        let tbody = document.createElement('tbody');
        // LOOP THROUGH THE ARRAY OF EMPLOYEES
        // REBUILDING THE ROW STRUCTURE
        for (let employee of data.employees) {
            tbody.innerHTML += 
            `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.title}</td>
                <td>${employee.ext}</td>
                <td>${employee.email}</td>
                <td>${employee.depart}</td>
                <td><button class="btn btn-sm btn-danger delete">X</button></td>
            </tr>
            `
          // BIND THE TBODY TO THE EMPLOYEE TABLE
        empTable.appendChild(tbody);
        // UPDATE EMPLOYEE COUNT
        empCount.value = `(${data.employees.length})`;
        }
    })
}