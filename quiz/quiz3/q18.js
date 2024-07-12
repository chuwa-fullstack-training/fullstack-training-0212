/* When do you use a return type of never and how does it differ from void? [Typescript]
printName(name: string): void { console.log(name); }

const printer = printName('Will'); console.log(printer); // logs "undefined"

const error = (): never => { throw new Error(""); }; */

In summary:

Use void when a function does not return a value but completes normally.
Use never when a function does not complete normally (e.g., always throws an error or loops indefinitely).

/*In TypeScript, `void` and `never` are both return types, but they are used in different contexts and convey different meanings about the behavior of functions.

### `void` Return Type

The `void` type is used when a function does not return a value. It indicates that the function's purpose is to perform some operation rather than to produce a value.

### Example:
```typescript
function printName(name: string): void {
  console.log(name);
}

const printer = printName('Will');
console.log(printer); // logs "undefined"
```

- `printName` is a function that takes a `name` parameter of type `string` and has a return type of `void`.
- Inside the function, it logs the `name` to the console.
- When `printName` is called with the argument `'Will'`, it logs `'Will'` to the console.
- The `printer` variable is assigned the result of `printName('Will')`. Since `printName` returns `void`, `printer` is `undefined`.
- Logging `printer` outputs `undefined`.

### `never` Return Type

The `never` type is used to indicate that a function never successfully completes or returns. This typically happens in functions that always throw an error or enter an infinite loop.

### Example:
```typescript
const error = (): never => {
  throw new Error("An error occurred");
};
```

- `error` is a function with a return type of `never`.
- Inside the function, an error is thrown using `throw new Error("")`.
- Because the function always throws an error and never reaches the end of the function or returns a value, its return type is `never`.

### Differences Between `void` and `never`

1. **Return Behavior:**
   - `void` means the function does not return a value (i.e., returns `undefined`).
   - `never` means the function never successfully returns (i.e., it always throws an error or runs indefinitely).

2. **Use Cases:**
   - Use `void` for functions that perform an action without returning a value.
   - Use `never` for functions that either always throw an error or never terminate (infinite loops).

### Example to Illustrate the Differences:

```typescript
function logMessage(message: string): void {
  console.log(message);
}

function throwError(): never {
  throw new Error("This function never returns");
}

logMessage("Hello, TypeScript!"); // Logs "Hello, TypeScript!"

// This line would cause an error, so it should be commented out or handled
// throwError(); // Uncaught Error: This function never returns

const msgPrinter = logMessage("This will print and return undefined");
console.log(msgPrinter); // Logs "undefined"

// const err = throwError(); // Uncommenting this will cause an uncaught error and terminate the program
```

In summary:
- Use `void` when a function does not return a value but completes normally.
- Use `never` when a function does not complete normally (e.g., always throws an error or loops indefinitely).*/ 