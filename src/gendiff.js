import parseFile from "../src/parseFile.js";
import _ from 'lodash';

const gendiff = (file1, file2) => {
  const json1 = parseFile(file1);
  const json2 = parseFile(file2);
  const keys = _.union(Object.keys(json1), Object.keys(json2)).sort();
  const result = [];
  result.push('{');
  for (const key of keys) {
    if (Object.hasOwn(json1, key) && Object.hasOwn(json2, key)) {
      if (json1[key] === json2[key]) {
        result.push(`    ${key}: ${json1[key]}`);
        continue;
      } else {
        result.push(`  - ${key}: ${json1[key]}`);
        result.push(`  + ${key}: ${json2[key]}`);
        continue;
      }
    } else if (Object.hasOwn(json1, key)) {
      result.push(`  - ${key}: ${json1[key]}`);
      continue;
    } else {
      result.push(`  + ${key}: ${json2[key]}`);
    }
    result.push('}');
  }
  return result.join('\n');
}

export default gendiff;
