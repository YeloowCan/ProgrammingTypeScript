import { type } from 'os';

type add = (a: number, b: number) => number;

const addFun: add = (a, b) => {
  return a + b;
};

addFun(4, 3);

type Reserve = {
  (from: Date, to: Date, destination: string): string;
  (from: Date, destination: string): string;
};

let reserve: Reserve = (from, to: Date | string, destination?: string) => {
  return '';
};

type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};

let filter: Filter = (array, f) => {
  return array;
};

filter([1, 2, 3], (a) => a < 2);

function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    res[i] = f(element);
  }
  return res;
}
