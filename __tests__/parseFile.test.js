import {getFileExtension, parseFile, readFile} from "../src/parseFile.js";

const expected1 =  {"common":{"setting1":"Value 1","setting2":200,"setting3":true,"setting6":{"key":"value","doge":{"wow":""}}},"group1":{"baz":"bas","foo":"bar","nest":{"key":"value"}},"group2":{"abc":12345,"deep":{"id":45}}};
const expected2 =  {"common":{"follow":false,"setting1":"Value 1","setting3":null,"setting4":"blah blah","setting5":{"key5":"value5"},"setting6":{"key":"value","ops":"vops","doge":{"wow":"so much"}}},"group1":{"foo":"bar","baz":"bars","nest":"str"},"group3":{"deep":{"id":{"number":45}},"fee":100500}};
const file1 = '__fixtures__/file1.json';
const file2 = '__fixtures__/file2.yml';
const file3 = '__fixtures__/file1.lol';

test('parseFile', () => {
  expect(parseFile(readFile(file1), getFileExtension(file1))).toEqual(expected1);
  expect(parseFile(readFile(file2), getFileExtension(file2))).toEqual(expected2);
  expect(() => {parseFile(readFile(file3), getFileExtension(file3))}).toThrow('lol is not supported');
});
