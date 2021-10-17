const Intern = require("../lib/Intern");

describe("Intern", function () {
  test('getRole returns the string "Intern" while the other functions return the input strings.', function () {
    const intern = new Intern(
      "Steve",
      "12345",
      "Steve@gmail.com",
      "St. Steve's School For Growing Young Steves"
    );
    expect(intern.getRole()).toEqual("Intern");
    expect(intern.getName()).toEqual("Steve");
    expect(intern.getId()).toEqual("12345");
    expect(intern.getEmail()).toEqual("Steve@gmail.com");
    expect(intern.getSchool()).toEqual(
      "St. Steve's School For Growing Young Steves"
    );
  });
});
