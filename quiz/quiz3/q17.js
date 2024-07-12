/* Explain following code: [TS]
const addNumbers = (x: number, y: number): number => { return x + y; };

// what's the keyword - number */

/* In the provided TypeScript code, the keyword `number` is used to specify the data types of the function parameters and the return value. Here is the code for reference:

```typescript
const addNumbers = (x: number, y: number): number => { return x + y; };
```

### Explanation:

1. **Function Definition:**
   ```typescript
   const addNumbers = (x: number, y: number): number => { return x + y; };
   ```
   - This is a TypeScript function named `addNumbers` that takes two parameters, `x` and `y`.

2. **Parameter Types:**
   ```typescript
   x: number, y: number
   ```
   - The parameters `x` and `y` are annotated with the type `number`, which means that `x` and `y` must both be numbers. If you try to pass arguments of a different type, TypeScript will generate a compile-time error.

3. **Return Type:**
   ```typescript
   (x: number, y: number): number
   ```
   - The `: number` after the parameter list indicates the return type of the function. It specifies that the function will return a value of type `number`.
   - If the function tries to return a value that is not a number, TypeScript will generate a compile-time error.

4. **Function Body:**
   ```typescript
   { return x + y; }
   ```
   - The function body returns the sum of `x` and `y`, which will be a number since both `x` and `y` are numbers.

### Summary:
The keyword `number` in this context is used to enforce type checking in TypeScript. It ensures that the parameters `x` and `y` are numbers and that the function returns a number. This helps in catching type-related errors during development, leading to more robust and maintainable code.

### Example Usage:
```typescript
console.log(addNumbers(2, 3)); // Outputs: 5
// console.log(addNumbers(2, '3')); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

In the above example, calling `addNumbers` with two numbers works as expected. If you try to call it with a non-number argument, TypeScript will throw an error. */