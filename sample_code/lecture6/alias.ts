type User = {
  name: string;
  age?: number;
};

const user1: User = {
  name: "abc",
};

type Admin = User & {
  role: string;
};

type Guest = User & {
  role: "guest";
};

let admin1: Admin = {
  name: "Aaron",
  role: "admin",
  age: 99,
};

// type User = {
//     printName?: () => void;
// }
