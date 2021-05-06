// Within the init.js file, use async / await to load the JSON data and return it back into the buildGrid() function.

async function getData () {
    try {
        const response = await fetch('/data/employees.json');
        const employees = await response.json();  
        return employees;         
    } catch (error) {
        console.log(error.message);
    }
}
