const Manager = require("../lib/Manager");
const makeHtmlTemplate = require("../src/template");

describe("Manager", function () {
  test('getRole returns the string "Manager" while the other functions return the input strings.', function () {
    const manager = new Manager("Steve", "12345", "Steve@gmail.com", "54321");
    expect(manager.getRole()).toEqual("Manager");
    expect(manager.getName()).toEqual("Steve");
    expect(manager.getId()).toEqual("12345");
    expect(manager.getEmail()).toEqual("Steve@gmail.com");
    expect(manager.getOfficeNumber()).toEqual("54321");
  });
});
