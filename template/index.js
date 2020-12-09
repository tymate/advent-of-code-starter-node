import { run } from '../utils/index';

export const formatInput = input => input.split('\n');

export const partOne = input => {
  return input;
};

export const partTwo = input => {};

run({ pathToInput: '{{DAY}}/input.txt', partOne, partTwo, formatInput });
