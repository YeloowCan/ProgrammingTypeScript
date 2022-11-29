type Cat = {
  name: string;
  purrs: boolean;
};

type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type CatOrDog = Cat | Dog;
type CatAndDog = Cat & Dog;

let mue: CatOrDog = {
  name: 'mue',
  purrs: true,
};

let wang: CatAndDog = {
  name: 'wang',
  purrs: true,
  barks: true,
  wags: true,
};

let train: [number, string, ...number[]] = [2, 'sss'];

type aa = readonly string[];

let aaa: aa = ['aaa'];

const enum Language {
  English = 0,
  Chinese = 1,
}

console.log(Language.Chinese);

let h = null;
const g = [3];
let i = [true, false];
const aaaaa = 13;
let e = {
  type: 'fss',
};
