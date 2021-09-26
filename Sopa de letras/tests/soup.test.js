const fs = require("fs");
const { main } = require("../index");

const initMock = (lettersSoup, word, columns, rows) => {
  jest.spyOn(fs, "readFileSync").mockImplementation(
    () => (JSON.stringify({
        lettersSoup,
        word,
        columns,
        rows
      }))
  );


}

describe("Alphabet Soup test", () => {
  test("should return 4 matches", () => {
    const lettersSoup = [
      "A", "B", "C", 
      "B", "I", "B",
      "C", "B", "A",
      "E", "I", "O",
      "O", "I", "E"
    ];

    initMock(lettersSoup, 'ABC', 3, 5);

    expect(main()).toBe(4);
  });

  test("should return 0 matches", () => {

    const lettersSoup = [
      "A", "B", "C", 
      "B", "I", "B",
      "C", "B", "A",
      "E", "I", "O",
      "O", "I", "E"
    ];

    initMock(lettersSoup, 'XYP', 3, 5);

    expect(main()).toBe(0);
  });

  test("should return an error", () => {
    const lettersSoup = [
      "A", "B", "C", 
      "B", "I", "B",
      "C", "B", "A",
      "E", "I", "O",
      "O", "I", "E"
    ]; 

    initMock(lettersSoup, 'ABC', 5, 5);

    try{
      main();
    }catch(e){
      expect(e.message).toBe('Check your data');
    }
  });
});
