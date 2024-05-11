# Control Structures in JavaScript

## Introduction to Control Structures
Control structures are fundamental elements in programming that allow you to dictate the flow of your program's execution based on conditions and loops.

## Conditional Execution
JavaScript provides several ways to perform conditional execution:

- **if/else statements**: Allow executing one block of code among two depending on the condition.
- **switch statements**: Select one of many code blocks to be executed.

> "Conditional execution is created with the `if` keyword in JavaScript." - Marijn Haverbeke, *Eloquent JavaScript*

## Loops
To perform repetitive tasks, JavaScript offers several types of loops:

- **while loops**: Execute a statement as long as a condition is true.
- **do-while loops**: Like while loops, but they execute at least once.
- **for loops**: Concisely manage an index variable's lifecycle.

> "Loops are a way to repeatedly run a block of code." - Marijn Haverbeke, *Eloquent JavaScript*

## Example Code
Here is a simple loop example in JavaScript:

```javascript
for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}
