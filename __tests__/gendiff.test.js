import gendiff from "../src/gendiff.js";


const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;


test('gendiff', () => {
  expect(gendiff('src/file1.json', 'src/file2.json')).toEqual(expected)
})
