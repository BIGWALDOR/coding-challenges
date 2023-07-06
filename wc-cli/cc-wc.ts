/* 
Coding Challenge #1: Word Count
Build a command line tool that takes a file as an argument and counts the total number of words in the file.
https://codingchallenges.substack.com/p/coding-challenge-1
*/

import * as fs from 'fs';

/**
 * @param {string} options - The option to be used.
 */
const options: string = process.argv[2];

/**
 * @param {string} file - The file to be read.
 */
const file: string = process.argv[3];

/**
 * @description Reads the content of a file.
 *
 * @param {string} file - The file to be read.
 *
 * @returns {string} - The content of the file.
 */
const readFile = (file: string): string => {
  if (!file) {
    console.log('Please provide a file name');
    process.exit(1);
  }

  return fs.readFileSync(file, 'utf-8');
};

/**
 * @description Counts the number of bytes in a file.
 *
 * @param {string} file - The file to be read.
 *
 * @returns {number} - The number of bytes in the file.
 */
const countBytes = (file: string): number => {
  const fileContent: string = readFile(file);

  return Buffer.byteLength(fileContent, 'utf8');
};

/**
 * @description Counts the number of words in a file.
 *
 * @param {string} file - The file to be read.
 *
 * @returns {number} - The number of words in the file.
 */
const countWords = (file: string): number => {
  const fileContent: string = readFile(file);

  // Split the file content by whitespace and count the number of words.
  return fileContent.split(/\s+/).length;
};

/**
 * @description Counts the number of lines in a file.
 *
 * @param {string} file - The file to be read.
 *
 * @returns {number} - The number of lines in the file.
 */
const countLines = (file: string): number => {
  const fileContent: string = readFile(file);

  return fileContent.split('\n').length;
};

/**
 * @description Counts the number of characters in a file.
 *
 * @param {string} file - The file to be read.
 *
 * @returns {number} - The number of characters in the file.
 */
const countChars = (file: string): number => {
  const fileContent: string = readFile(file);

  return fileContent.length;
};

/**
 * @description Counts the number of bytes, words, lines and characters in a file.
 *
 * @param {string} options - The file to be read.
 * @param {string} file - The option to be used.
 *
 * @returns {void} - The number of bytes, words, lines and characters in the file. If no option is provided, all the counts are returned.
 */
const count = (options: string, file: string): void => {
  switch (options) {
    case '-c':
      return console.log(`Bytes: ${countBytes(file)}`);
    case '-w':
      return console.log(`Words: ${countWords(file)}`);
    case '-l':
      return console.log(`Lines: ${countLines(file)}`);
    case '-m':
      return console.log(`Chars: ${countChars(file)}`);
    default:
      return console.log(`
    Bytes: ${countBytes(file)}\n
    Words: ${countWords(file)}\n
    Lines: ${countLines(file)}\n
    Chars: ${countChars(file)}
    `);
  }
};

count(options, file);
