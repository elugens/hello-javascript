---
title: References/Copying
sidebar_position: 2
---

# Object References & Copying - Q&A

**Objects the Basics: OBJECT REFERENCE AND COPYING**

**Question:** **What is the difference between an object and a primitive?**

**Interview Answer:** Objects are stored and copied by reference while primitive values are always copied as whole values.

Example:

```js
// Here we put a copy of message into phrase:

let message = 'Hello!';

let phrase = message;

console.log(phrase); // returns 'Hello!'
phrase = 'Goodbye!';

console.log(phrase);

// returns 'Goodbye!', you can't do that with objects

// Copying a reference, but the object itself not duplicated

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference
alert(user.name); // 'Pete', changes are seen from the "user" reference
// Two objects are equal only if they are the same object.

let a = {};

let b = a; // copy the reference
alert(a == b); // true, both variables reference the same object
alert(a === b); // true
```

Source: <https://javascript.info/object-copy>

**Question:** **Are two objects always equal in JavaScript?**

**Interview Answer:** Two objects are only equal if they are the same object. This can be achieved through object referencing.

Example:

```js
// Both are equal objects reference the same object literal

let a = {};

let b = a; // copy the reference
alert(a == b); // true, both variables reference the same object
alert(a === b); // true
////////////////////////////

// two independent objects

let a = {};

let b = {};

alert(a == b); // false
```

Source: <https://javascript.info/object-copy#comparison-by-reference>

**Question:** **What if we need to duplicate an object? Is there a way to clone an object and its properties at the primitive level?**

**Interview Answer:** It’s a bit of a process, you need to create a new object and replicate the structure of the existing one by iterating over its properties and copying them at the primitive level. We also can use Object.assign to replace for..in loop for simple cloning.

Example:

```js
let user = {
  name: 'John',

  age: 30,
};

let clone = {}; // the new empty object
// let's copy all user properties into it

for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content

clone.name = 'Pete'; // changed the data in it
alert(user.name); // still John in the original object
////////////////////////////

// We also can use Object.assign to replace for..in loop for simple cloning:

let user = {
  name: 'John',

  age: 30,
};

let clone = Object.assign({}, user);
```

Source: <https://javascript.info/object-copy#cloning-and-merging-object-assign>

**Question:** **Can properties reference another property in JavaScript?**

**Interview Answer:** Yes, this happens when a property has an object as a value and that object has individual properties. The nested properties are referenced by the parent property.

**Note:** Notably, this means that values of properties are not necessarily primitive.

Example:

```js
let user = {
  name: 'John',

  // The sizes property references the height and width properties

  sizes: {
    height: 182,

    width: 50,
  },
};

alert(user.sizes.height); // 182
```

Source: <https://javascript.info/object-copy#nested-cloning>

**Question:** **Can objects assigned to a constant (const) be modified?**

**Interview Answer:** The object itself can be modified, but the declared variable cannot. The reason behind this is the variable is constant, it must always reference the same object, but properties of that object are free to change.

Example:

```js
const user = {
  name: 'John',
};

user.name = 'Pete'; // (*)
alert(user.name); // Pete
```

Source: <https://javascript.info/object-copy#nested-cloning>
