---
title: Type Conversion
sidebar_position: 7
---

# Type Conversion in JavaScript - Q&A

## JavaScript Fundamentals: TYPE CONVERSION

### What are the two types of type conversion in JavaScript?

**Interview Answer:** Explicit and Implicit type conversion.

**Technical Answer:** There are two types of type conversion including automatic (implicit) and explicit type conversion.

Source: <https://javascript.info/type-conversions>

### What is the difference between explicit and automatic (implicit) JavaScript type conversion?

**Interview Answer:** Implicit type conversion is manual conversion of type and explicit is automatic.

**Technical Answer:** JavaScript automatically converts one data type to another (to the right type). This is known as implicit or automatic type conversion. The type of conversion that you do manually is known as explicit type conversion.

Source: <https://javascript.info/type-conversions>

### How is explicit type conversion implemented in JavaScript?

**Interview Answer:** Explicit type conversions are achieved using built-in methods and objects.

Source: <https://javascript.info/type-conversions>

### Name one method that automatically converts a value to a string?

**Answer:** The alert method returns a string value; this is automatic type conversion.

Source: <https://javascript.info/type-conversions#string-conversion>

### What built-in object is used to explicitly convert values to a string?

**Interview Answer:** The string object is used to explicitly convert values to a string.

**Technical Answer:** The String(value) object is used to explicitly convert values to a string. The conversion to string is usually obvious for primitive values.

Code Example:

```js
let value = true;

alert(typeof value); // boolean
value = String(value); // now value is a string "true"
alert(typeof value); // string
```

Source: <https://javascript.info/type-conversions#string-conversion>

### When do numeric conversions happen in JavaScript?

**Interview Answer:** Numeric conversion happens in mathematical functions and expressions automatically.

Source: <https://javascript.info/type-conversions#numeric-conversion>

### What Object is used to explicitly convert values to a Number?

**Interview Answer:** The number object is used to explicitly convert values to a number.

Code Example:

```js
let str = '123';

alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number
```

Source: <https://javascript.info/type-conversions#numeric-conversion>

### What is the result when there is an explicit attempt to convert a non-number to a number?

**Interview Answer:** If the string is not a valid number the return value is NaN.

Code Example:

```js
let age = Number('an arbitrary string instead of a number');

alert(age); // NaN, conversion failed
```

Source: <https://javascript.info/type-conversions#numeric-conversion>

### If, there is an attempt to convert an undefined value. What is the return result?

**Interview Answer:** Numeric conversions on undefined values returns NaN (Not-a-Number).

Example:

```js
let thisNumber;

let result = Number(thisNumber);

alert(result); // returns NaN, conversion failed
```

Source: <https://javascript.info/type-conversions#numeric-conversion>

### If, there is an attempt to convert a NULL value to a number. What is the return result?

**Interview Answer:** Numeric conversions on Null values returns zero (0).

Example:

```js
let thisNumber = null;

let result = Number(thisNumber);

alert(result); // returns 0
```

Source: <https://javascript.info/type-conversions#numeric-conversion>

### What is returned on a numeric conversion of true and false in JavaScript?

**Interview Answer:** True returns 1 and False returns 0.

Source: <https://javascript.info/type-conversions#numeric-conversion>

### Give a brief description of the potential outcomes when converting a string to a number?

**Interview Answer:** Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. If there is an error it will return NaN.

Example:

```js
let myString = '';

let outcome = Number(myString);

alert(outcome); // returns 0
```

Source: <https://javascript.info/type-conversions#numeric-conversion>

### Do Boolean conversions happen implicitly, explicitly, or both?

**Interview Answer:** Both, it happens in logical operations automatically, but can also be performed explicitly.

Source: <https://javascript.info/type-conversions#boolean-conversion>

### Is there an object that can be used for explicit Boolean conversions?

**Interview Answer:** The Boolean object converts strings and numerical values to Boolean true or false.

Example:

```js
alert(Boolean(1)); // true
alert(Boolean(0)); // false
alert(Boolean('hello')); // true
alert(Boolean('')); // false
```

Source: <https://javascript.info/type-conversions#boolean-conversion>

### What are the two basic Boolean conversion rules in JavaScript?

**Interview Answer:** Values that are intuitively empty are false, all other values are true.

**Technical Answer:** Conversion Rules

1. Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
1. Other values become true.

Source: <https://javascript.info/type-conversions#boolean-conversion>

### In JavaScript, what is the Boolean return value for the string “0”?

**Interview Answer:** In JavaScript, a non-empty string is always true. Zero is considered empty and returns false.

Code Example

```js
let numZero = Boolean(0);

let stringZero = Boolean('0');

console.log(numZero); // returns false
console.log(stringZero); // returns true
```

Source: <https://javascript.info/type-conversions#boolean-conversion>

### What are the three widely used type conversions in JavaScript?

**Interview Answer:** String, number, and Boolean conversions.

Source: <https://javascript.info/type-conversions#boolean-conversion>
