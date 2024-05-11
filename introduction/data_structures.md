# Data Structures in JavaScript

## Overview of Data Structures
Data structures are ways to organize and store data in a format that enables efficient access and modification. JavaScript offers several built-in structures like arrays, objects, and more.

## Arrays
Arrays store sequences of values that are accessed with an index. JavaScript arrays are flexible, allowing any type of data to be stored and dynamically resized.

> "Think of an array as an extendable row of slots." - Marijn Haverbeke, *Eloquent JavaScript*

## Objects
Objects are collections of properties, where each property has a name and a value. They are one of the most important data structures in JavaScript.

```javascript
let person = {
    name: "Chris",
    age: 30,
    city: "New York"
};
console.log(person.name); // "Chris"