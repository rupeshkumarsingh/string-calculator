# String Calculator TDD

## **Overview**

This is a **TypeScript-based String Calculator** implemented using **Test-Driven Development (TDD)** principles.  
It takes a string of numbers separated by **commas (`,`)** or **newlines (`\n`)** and returns their sum.  
It also supports **custom delimiters** and **throws an exception for negative numbers**.

## **Features**

- ✅ Handles an **empty string (`""`)** and returns `0`.
- ✅ Supports single and multiple numbers (e.g., `"1,2,3"` → `6`).
- ✅ Accepts newline `\n` as a separator (e.g., `"1\n2,3"` → `6`).
- ✅ Supports **custom delimiters** via `"//[delimiter]\n[numbers]"` syntax (e.g., `"//;\n1;2"` → `3`).
- ✅ Throws an **exception for negative numbers** (e.g., `"1,-2,-3"` → `"negative numbers not allowed -2,-3"`).

## **Installation**

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/string-calculator.git
   cd string-calculator
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## **Usage**

```bash
import { StringCalculator } from "./src/StringCalculator";

const calculator = new StringCalculator();
console.log(calculator.add("1,2,3")); // Output: 6
console.log(calculator.add("")); // Output: 0
console.log(calculator.add("//;\n1;2")); // Output: 3
```

## **Testing**

Run the Jest test suite:

```sh
  npm test
```

Run the Jest test suite:

```sh
  npm test:cov
```

## **Project Structure**

```bash
string-calculator/
│── src/
│   ├── StringCalculator.ts    # String Calculator Implementation
│── tests/
│   ├── StringCalculator.test.ts  # Unit Tests
│── package.json
│── jest.config.js              # Jest Configuration
│── tsconfig.json               # TypeScript Config
│── README.md
```
