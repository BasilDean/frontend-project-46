import {parseFile, getFileExtension, readFile} from "../src/parseFile.js";
import _ from 'lodash';

const gendiff = (file1, file2) => {
  const content1 = readFile(file1);
  const content2 = readFile(file2);
  const data1 = parseFile(content1, getFileExtension(file1));
  const data2 = parseFile(content2, getFileExtension(file1));
  const keys = _.union(Object.keys(data1), Object.keys(data2)).sort();
  const result = [];
  result.push('{');
  for (const key of keys) {
    if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      if (data1[key] === data2[key]) {
        result.push(`    ${key}: ${data1[key]}`);
        continue;
      } else {
        result.push(`  - ${key}: ${data1[key]}`);
        result.push(`  + ${key}: ${data2[key]}`);
        continue;
      }
    } else if (Object.hasOwn(data1, key)) {
      result.push(`  - ${key}: ${data1[key]}`);
      continue;
    } else {
      result.push(`  + ${key}: ${data2[key]}`);
    }
    result.push('}');
  }
  return result.join('\n');
}

export default gendiff;
