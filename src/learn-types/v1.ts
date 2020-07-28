interface User {
  name: string;
  age: number;
}

type UserKey = keyof User; // name | age
/*

const userKey1: UserKey = 'name' // OK
const userKey2: UserKey = 'age' // OK
const userKey3: UserKey = 'address'// NG

*/
