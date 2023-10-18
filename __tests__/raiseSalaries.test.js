const raiseSalaries = require('../raiseSalaries.js');

describe('raiseSalaries', () => {

  test('increases salaries by the given percentage', () => {
    const employees = [
      { name: "Alice", salary: 3000 },
      { name: "Bob", salary: 2000 },
      { name: "Vel", salary: 4500 }
    ];
    const result = raiseSalaries(employees, 10);
    expect(result).toEqual([
      { name: "Alice", salary: 3300 },
      { name: "Bob", salary: 2200 },
      { name: "Vel", salary: 4950 }
    ]);
  });

  test('rounds up the increased salaries to the nearest integer', () => {
    const employees = [{ name: "John", salary: 1001.5 }];
    const result = raiseSalaries(employees, 10);
    expect(result).toEqual([{ name: "John", salary: 1102 }]);
  });

  test('does not modify the original employees array', () => {
    const employees = [
      { name: "Alice", salary: 3000 },
      { name: "Bob", salary: 2000 }
    ];
    raiseSalaries(employees, 10);
    expect(employees).toEqual([
      { name: "Alice", salary: 3000 },
      { name: "Bob", salary: 2000 }
    ]);
  });

  test('returns same salaries when percentage increase is zero', () => {
    const employees = [{ name: "Eve", salary: 2500 }];
    const result = raiseSalaries(employees, 0);
    expect(result).toEqual([{ name: "Eve", salary: 2500 }]);
  });

});

