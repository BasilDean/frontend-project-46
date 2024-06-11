import {getFileExtension, parseFile, readFile} from "../src/parseFile.js";

const expected1 =  {"follow": false, "host": "hexlet.io", "proxy": "123.234.53.22", "timeout": 50};
const expected2 =  {"host": "hexlet.io", "timeout": 50, "proxy": "123.234.53.22", "follow": false};
const file1 = '__fixtures__/file1.json';
const file2 = '__fixtures__/file1.yml';
const file3 = '__fixtures__/file1.lol';

test('parseFile', () => {
  expect(parseFile(readFile(file1), getFileExtension(file1))).toEqual(expected1);
  expect(parseFile(readFile(file2), getFileExtension(file2))).toEqual(expected2);
  expect(() => {parseFile(readFile(file3), getFileExtension(file3))}).toThrow('lol is not supported');
});
