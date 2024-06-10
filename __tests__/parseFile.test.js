import parseFile from "../src/parseFile.js";

const expected =  {"follow": false, "host": "hexlet.io", "proxy": "123.234.53.22", "timeout": 50};
;
test('parseFile', () => {
  expect(parseFile('__fixtures__/file1.json')).toEqual(expected);
});
