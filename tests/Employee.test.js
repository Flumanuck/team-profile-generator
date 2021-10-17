const Employee = require("../lib/Employee");

describe("Employee", function () {
  test('getRole returns the string "Employee" while the other functions return the input strings.', function () {
    const employee = new Employee("Steve", "12345", "Steve@gmail.com");
    expect(employee.getRole()).toEqual("Employee");
    expect(employee.getName()).toEqual("Steve");
    expect(employee.getId()).toEqual("12345");
    expect(employee.getEmail()).toEqual("Steve@gmail.com");
  });
});
