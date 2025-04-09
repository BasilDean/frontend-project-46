#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from "../src/gendiff.js";
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format (e.g., stylish, plain, json)', 'stylish') // Default to 'stylish'
  .argument('<filepath1>')
  .argument('<filepath2>')
  .helpOption('-h, --help', 'output usage information')
  .action((filepath1, filepath2, options) => {

      const { format } = options;
    console.log(gendiff(filepath1, filepath2, format))
  });

program.parse();



