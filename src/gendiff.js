import parseFile from "../src/parseFile.js";
import _ from 'lodash';

const gendiff = (file1, file2) => {
  const json1 = parseFile(file1);
  const file1Keys = _.keys(json1)
  const json2 = parseFile(file2);
  const file2Keys = _.keys(json2)
  const keys = _.union(file1Keys, file2Keys).sort();
  let result = '{\n';
  for (const key of keys) {
    if (json1.hasOwnProperty(key) && json2.hasOwnProperty(key)) {
      if (json1[key] === json2[key]) {
        result += `    ${key}: ${json1[key]}\n`;
        continue;
      } else {
        result += `  - ${key}: ${json1[key]}\n  + ${key}: ${json2[key]}\n`;
        continue;
      }
    } else if (json1.hasOwnProperty(key)) {
      result += `  - ${key}: ${json1[key]}\n`;
      continue;
    } else {
      result += `  + ${key}: ${json2[key]}\n`;
    }
    result += '}';
  }
  return result;
}

export default gendiff;
