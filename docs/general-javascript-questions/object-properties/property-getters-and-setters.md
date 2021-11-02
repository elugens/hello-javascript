---
title: Property Getters & Setters
sidebar_position: 2
---

# Property Getters & Setters

**Object Properties Configuration: Property Getters & Setters**

<head>
  <title>Property Getters & Setters - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Explain, what getters and setters are, as it pertains to JavaScript.\*\*

**Interview Answer:** Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set in JavaScript. Getters and setters allow you to define Object Accessors (Computed Properties). There are some advantages, Getters and Setters are easier to read because of their simplistic syntax. The also allow equal syntax for properties and methods, can secure better data quality, and are particularly useful for doing things behind the scenes.

Code Example:

```js
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  },
};
```

Source: <https://javascript.info/property-accessors#getters-and-setters>

### What is the difference between accessor property and a property function?

**Interview Answer:** The main difference between a property function and an accessor property is the simple syntax of the accessor and the way you invoke the accessor.

**Technical Answer:** The main difference between a property function and an accessor property is the simple syntax of the accessor and the way you invoke the accessor. The accessor (getter setter) is invoked without the parentheses compared to the property function that does. There are some advantages, Getters and Setters are easier to read. The also allow equal syntax for properties and methods, can secure better data quality, and are extremely useful in doing things behind the scenes.

Example:

```js
// Function Property

let person = {
  firstName: 'John',

  lastName: 'Doe',

  fullName: function () {
    // <--

    return this.firstName + ' ' + this.lastName;
  },
};

// Display data from the object using a method:

document.getElementById('demo').innerHTML = person.fullName();

// Accessor Property

let person = {
  firstName: 'John',

  lastName: 'Doe',

  get fullName() {
    // <--

    return this.firstName + ' ' + this.lastName;
  },
};

// Display data from the object using a getter:

document.getElementById('demo').innerHTML = person.fullName;
```

Source: <https://javascript.info/property-accessors#getters-and-setters>

### Is the difference between accessor property and a data property in JavaScript?

**Interview Answer:** Yes, descriptors for accessor properties are different from those for data properties. For accessor properties, there is no value or writable, but instead there are get and set functions. A named data property associates a name with a value. Which means you use the property to get and retrieve data directly, like a public field on a class. A named accessor property associates a name with one or two accessor functions. The accessor functions are used to store or retrieve a value that is associated with the property. Which means that you restrict the access to a certain value behind a get or/and set accessor property.

**Note:** Comparing both, the 1st option gives you no encapsulation or kind of control, on how your value is accessed. The 2nd lets you specify if your value can be read 'get accessor', written 'set accessor' or both.

Example:

```js
// Named Accessor Properties

let obj = {

    get prop() {

      return this.\_prop;

    },

    set prop(value) {

      console.log('Setter: ' + value);

      this.\_prop = value;

    },

};

obj.prop = '123';

// Named Data Properties

let obj = {

    prop: 123,

};

console.log(obj.prop); // 123
```

Source: <https://javascript.info/property-accessors#accessor-descriptors>

### Can you use getters and setters as wrappers over real properties?

**Interview Answer:** Yes, Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them. One example of this is a conditional statement used to check a values validity.

Example:

```js
let user = {

    get name() {

      return this.\_name;

    },

    set name(value) {

      if (value.length < 4) {

          console.log('Name is too short, need at least 4 characters');

          return;

      }

      this.\_name = value;

    },

};

user.name = 'Pete';

console.log(user.name); // Pete

user.name = ''; // Name is too short...
```

Source: <https://javascript.info/property-accessors#smarter-getters-setters>
