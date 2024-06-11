import * as fs from 'node:fs';
import { cwd } from 'node:process';
import path from 'node:path';
import yaml from 'js-yaml';


const getFileExtension = (filename) => path.extname(filename);

const readFile = (filename) => fs.readFileSync(path.resolve(cwd(), filename));

const parseFile = (data, format = '.json') => {
 switch (format) {
   case '.json':
     return JSON.parse(data);
   case '.yml':
     return yaml.load(data);
   default:
     throw new Error(`${format} is not supported`);
 }
};

export { parseFile, readFile, getFileExtension, };
