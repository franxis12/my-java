
const employees = [
    {id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000, specilazation: "JavaScript"},
    {id: 2, name: "Jane Smith", age: 25, department: "Finance", salary: 45000, specilazation: "HRM"},
    {id: 3, name: "Sam Brown", age: 35, department: "HR", salary: 60000, specilazation: "Accounting"},
    
];
displayEmployees();

function displayEmployees(){
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;  
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}

function findEmployeeBySpecialization(){
    const specilazationJS = employees.find(employee => employee.specilazation === "JavaScript");
    if (specilazationJS) {
        document.getElementById('employeesDetails').innerHTML = `<p>${specilazationJS.id}: ${specilazationJS.name} - ${specilazationJS.department} - ${specilazationJS.specilazation}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this specialization';

    }

}