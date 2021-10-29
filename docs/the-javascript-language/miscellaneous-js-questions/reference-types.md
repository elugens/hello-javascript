---
title: Reference Type
sidebar_position: 4
---

# Reference Type - Q&A

**Miscellaneous: Reference Type**

Please Read more about reference types here: <https://javascript.info/reference-type>

Code Example: Reference Type error and solution

```js
// Problem: Losing this // reference type error

let user = {
  name: 'John',

  hi() {
    console.log(this.name);
  },

  bye() {
    console.log('Bye');
  },
};

user.hi(); // works
// now let's call user.hi or user.bye depending on the name

(user.name == 'John' ? user.hi : user.bye)(); // Error!
////////////////////////////////////////

// Solution: Losing this

let user = {
  name: 'John',

  hi() {
    console.log('Hi, ' + this.name);
  },

  bye() {
    console.log('Bye');
  },
};

let f = user.hi.bind(user)(
  // now let's call user.hi or user.bye depending on the name

  user.name == 'John' ? user.hi : f.bye
); // returns Hi, John
```
