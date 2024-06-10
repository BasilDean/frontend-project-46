import * as fs from 'node:fs';
import { cwd } from 'node:process';
import path from 'node:path';

/**
 * @param {string | Buffer | URL | number} file
 */
const parseFile = (file) => {
  // return path.resolve(cwd(), file)
 const result = fs.readFileSync(path.resolve(cwd(), file));
 if (file.endsWith('.json')) {
   return JSON.parse(result);
 }
};

export default parseFile;
