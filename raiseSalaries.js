function raiseSalaries(employees, percentageIncrease) {
    return employees.map(employee => {
        const increasedAmount = employee.salary * (percentageIncrease / 100);
        const increasedSalary = employee.salary + increasedAmount;
       
        let finalSalary;
        if (increasedSalary % 1 > 0) {  
            finalSalary = Math.ceil(increasedSalary);
        } else {
            finalSalary = increasedSalary;
        }

        return {
            ...employee, 
            salary: finalSalary
        };
    });
}


module.exports = raiseSalaries;

