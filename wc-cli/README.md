# Word Count

## Description

This is a simple word count CLI tool just like the `wc` command in Unix. It counts the number of words, lines, and characters in a file.

It takes two arguments:

- `options`: `-c` for bytes, `-w` for words, `-l` for lines, and `-m` for characters. If no option is provided, it prints all values.
- `file`: The file to be read.

## Example

The following command:

```
$ ts-node cc-wc.ts -c example.txt
```

Will print:

```
Bytes: 334694
```

## Getting Started

```
$ git clone git@github.com:BIGWALDOR/coding-challenges.git
$ cd coding-challenges/wc-cli
$ npm install
$ ts-node cc-wc.ts <file> <options>
```
