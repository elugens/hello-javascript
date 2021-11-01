---
title: Data Types
sidebar_position: 5
---

# JavaScript Data Types - Q&A

### How many data types are there in JavaScript?

**Answer:** There are eight basic data types in JavaScript including Number, String, Boolean, BigInt, Null, Undefined, Object, and Symbol. All are primitive data types except for the Object data type. All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

Source: <https://javascript.info/types>

### What operator do you use to find the type of a specific value or argument?

**Interview Answer:** The typeof operator.

**Technical Answer:** The typeof operator returns the type of the value or argument.

JavaScript supports two forms of syntax:

1. As an operator: typeof x.
1. As a function: typeof(x).

Source: <https://javascript.info/types#type-typeof>

### What type of numbers does the number type represent?

**Interview Answer:** The number type represents both integers and floating-point numbers.

Source: <https://javascript.info/types#number>

### What is the limitation of the number type?

**Interview Answer:** A number cannot represent integers larger than (253-1) or less than -(253-1) for negatives.

**Technical Answer:** The “number” type cannot represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives. It is a technical limitation caused by their internal representation. Anything beyond these values is considered a BigInt.

Source: <https://javascript.info/types#bigint>

### How should you create BigInt in JavaScript?

**Interview Answer:** A BigInt value is created by appending n to the end of an integer or using the BigInt object constructor.

Source: <https://javascript.info/types#bigint>

### What are the three types of quotes that can be used to create a string representation of a value?

**Interview Answer:** Double, single, and backticks.

**Technical Answer:** In JavaScript, there are three types of quotes used to represent a string including double, single, and backtick quotes.

Example:

1. Double quotes: "Hello".
1. Single quotes: 'Hello'.
1. Backticks: `Hello`.

Source: <https://javascript.info/types#string>

### What is the difference between double, single, and backtick quotes?

**Interview Answer:** Backticks allow us to embed variables and expressions into a string by wrapping them in ${…}. There is no notable difference between single and double quotes.

**Technical Answer:** Double and single quotes are “simple” quotes. There is practically no difference between them in JavaScript. Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

```js
let name = 'John';

// embed a variable

alert(`Hello, ${name}!`); // Hello, John!
// embed an expression

alert(`the result is ${1 + 2}`); // the result is 3
```

Please note that this can only be done in backticks. Other quotes do not have this embedding functionality!

Source: <https://javascript.info/types#string>

### What two values does the Boolean logical type have?

**Interview Answer:** true and false

**Technical Answer:** true or false - This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”. It can also be used for comparisons or more specifically used for greater or less than values.

Code Examples:

```js
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
// Greater or Less Than:

let isGreater = 4 > 1;

alert(isGreater); // true (the comparison result is "yes")
```

Source: <https://javascript.info/types#boolean-logical-type>

### What does the NULL data type represent in JavaScript?

**Interview Answer:** nothingness or empty, but not equal undefined

**Technical Answer:** It is a special value that represents “nothing”, “empty” or “value unknown”. It is not a representation of a value that has not to be defined, non-existing, or a null pointer like other programming languages.

Source: <https://javascript.info/types#the-null-value>

### What does the undefined data type represent in JavaScript?

**Interview Answer:** Undefined means a value has not been defined or assigned to a variable.

**Technical Answer:** In JavaScript, undefined means a value has not been defined or assigned. If a variable is declared, but not assigned, then its value is undefined.

Example:

```js
let age;

alert(age); // shows "undefined"
// Technically, it is possible to explicitly assign undefined

//to a variable, but it is not recommended.

let age = 100;

// change the value to undefined

age = undefined;

alert(age); // "undefined"
```

Source: <https://javascript.info/types#the-undefined-value>

### What is the difference between typeof x and typeof(x) with parentheses?

**Interview Answer:** typeof x acts as an operator and typeof(x) is a function, but they work with parentheses or without them. The result is the same.

Source: <https://javascript.info/types#type-typeof>

### What does the typeof operator return?

**Interview Answer:** The typeof operator returns a string with the name of the type.

**Technical Answer:** The typeof operator returns a string with the name of the type, like "number" if it is a number or “function” if it’s a function.

Source: <https://javascript.info/types#type-typeof>
