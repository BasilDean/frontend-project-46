#!/usr/bin/env node
import { Command } from 'commander';
import parseFile from "../src/parseFile.js";
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .helpOption('-h, --help', 'output usage information')
  .action((filepath1, filepath2) => {
    console.log('filepath1:', parseFile(filepath1));
    console.log('filepath2:', parseFile(filepath2));
  });

program.parse();



