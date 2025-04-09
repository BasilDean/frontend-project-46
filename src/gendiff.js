import {parseFile, getFileExtension, readFile} from "../src/parseFile.js";
import {formatters} from "./formatters.js";
import _ from 'lodash';

const isObject = (value) => value !== null && typeof value === 'object';

const getItemStatus = (item1, item2) => {
  if (item1 === item2) {
    return 'same';
  } else if (item1 === undefined) {
    return 'added';
  } else if (item2 === undefined) {
    return 'removed';
  } else {
    return 'changed';
  }
}

const compareObject = (obj1, obj2) => {
  const result = [];
  const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();
  for (const key of keys) {
    if (isObject(obj1[key]) && isObject(obj2[key])) {
      result.push({
        key,
        status: 'same',
        isParent: true,
        children: compareObject(obj1[key], obj2[key])
      });
    } else if (isObject(obj1[key]) && obj2[key] === undefined) {
      result.push({
        key,
        status: 'removed',
        isParent: true,
        children: compareObject(obj1[key], obj1[key])
      });
    } else if (isObject(obj2[key]) && obj1[key] === undefined) {
      result.push({
        key,
        status: 'added',
        isParent: true,
        children: compareObject(obj2[key], obj2[key])
      });
    } else if (isObject(obj1[key]) && obj2[key] !== undefined) {
      result.push({
        key,
        status: 'removed',
        isParent: true,
        children: compareObject(obj1[key], obj1[key])
      })
      result.push({
        key,
        status: 'added',
        isParent: false,
        new: obj2[key]
      })
    }  else if (obj1[key] !== undefined && isObject(obj2[key])) {
      result.push({
        key,
        status: 'removed',
        isParent: true,
        children: compareObject(obj1[key], obj1[key])
      })
      result.push({
        key,
        status: 'added',
        isParent: false,
        new: obj2[key]
      })
    } else {
      result.push({
        key,
        status: getItemStatus(obj1[key], obj2[key]),
        isParent: false,
        old: obj1[key],
        new: obj2[key]
      })
    }
  }
  return result;
}

const gendiff = (file1, file2, format = 'stylish') => {

  const content1 = readFile(file1);
  const content2 = readFile(file2);
  const data1 = parseFile(content1, getFileExtension(file1));
  const data2 = parseFile(content2, getFileExtension(file1));
  return formatters(compareObject(data1, data2), format);
}

export default gendiff;
