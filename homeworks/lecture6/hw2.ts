interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    name: "Aaron",
    age: 99,
    occupation: "TypeScript Developer",
  },
  {
    name: "Alex",
    age: 98,
    role: "System Administrator",
  },
];

// fix the error showing in the following code:
function logPerson(person: Person) {
  let additionalInformation: string;
  if ((person as Admin).role) {
    additionalInformation = (person as Admin).role;
  } else {
    additionalInformation = (person as Admin).role;
  }
  console.log(` - ${(person as Admin).name}, ${(person as Admin).age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
