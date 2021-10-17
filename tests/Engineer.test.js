const Engineer = require("../lib/Engineer");

describe("Engineer", function () {
  test('getRole returns the string "Engineer" while the other functions return the input strings.', function () {
    const engineer = new Engineer("Steve", "12345", "Steve@gmail.com");
    expect(engineer.getRole()).toEqual("Engineer");
    expect(engineer.getName()).toEqual("Steve");
    expect(engineer.getId()).toEqual("12345");
    expect(engineer.getEmail()).toEqual("Steve@gmail.com");
  });
});
