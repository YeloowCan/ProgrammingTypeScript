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
