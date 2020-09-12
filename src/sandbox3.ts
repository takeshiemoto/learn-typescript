interface ArgsType {
  id: number;
  name: string;
}

const myFunc = ({ id, name }: ArgsType): (number | string)[] => {
  return [id, name];
};

console.log(myFunc({ id: 1, name: 'Hello world' }));
