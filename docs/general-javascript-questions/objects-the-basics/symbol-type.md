---
title: Symbol Type
sidebar_position: 7
---

# Symbol Type

**Objects the Basics: Symbol Type**

<head>
  <title>Symbol Type - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What are the two types that object property keys in JavaScript?

**Answer:** By specification, object property keys may be either of string or symbol type. Not numbers, not Booleans, only strings or symbols, these two types.

Source: <https://javascript.info/symbol>

### Explain, what is a Symbol is in JavaScript?

**Answer:** The data type symbol is a primitive data type. The Symbol() object returns a value of type symbol, it has static properties that expose several members of built-in objects, it also has static methods that expose the global symbol registry, and resembles a built-in object class. A “symbol” represents a unique identifier.

Example:

```js
let sym1 = Symbol();

let sym2 = Symbol('foo');

let sym3 = Symbol('foo');

Symbol('foo') === Symbol('foo'); // false, Symbol returns a unique
```

Source: <https://javascript.info/symbol#symbols>

### Does the Symbol function get registered in the global symbol registry?

**Answer:** No, the Symbol object does not create a global symbol that is available in your whole codebase. To create symbols available across files and even across realms (each of which has its own global scope), use the methods Symbol.for() and Symbol.keyFor() to set and retrieve symbols from the global symbol registry.

Source: <https://javascript.info/symbol#symbols>

### Can two Symbol descriptions be identical in JavaScript?

**Answer:** The description can be identical, but the value is unique and will return false if both values are compared.

Example:

```js
let id1 = Symbol('id');

let id2 = Symbol('id');

alert(id1 == id2); // false
```

Source: <https://javascript.info/symbol#symbols>

### Do Symbols auto-convert to strings in JavaScript?

**Answer:** Most values in JavaScript support implicit conversion to a string, but symbol is rare and unique. It does not auto-convert to a string. This is an intentional “language guard” against messing up, because strings and symbols are fundamentally different and should not accidentally convert one into another.

Example:

```js
let id = Symbol('id');

alert(id); // TypeError: Cannot convert a Symbol value to a string
// Solution

let id = Symbol('id');

alert(id.toString()); // Symbol(id), now it works
```

Source: <https://javascript.info/symbol#symbols>

### To explicitly convert a Symbol to a string, what built-in method should we use?

**Answer:** We should call the `toString()` method explicitly in order to convert a Symbol to a string.

Example:

```js
let id = Symbol('id');

alert(id.toString()); // Symbol(id), now it works
```

Source: <https://javascript.info/symbol#symbols>

### If, you want to show the Symbol description, what property should you use?

**Answer:** To get symbol description to show the description only. We should use the description property.

Example:

```js
let id = Symbol('id');

alert(id.description); // returns id
```

Source: <https://javascript.info/symbol#symbols>

### How can the Symbol object act as a property safeguard in objects?

**Answer:** Symbols can create hidden object properties, that cannot be overwritten or accidentally accessed. Unique properties like ids can conflict with ids or act as a hidden property that cannot be accessed by external libraries that we may want to use in our code.

Example:

```js
let user = {
  // belongs to another code

  name: 'John',
};

let id = Symbol('id');

user[id] = 1;

alert(user[id]);

// returns 1, in user[id], we can access the data using the symbol as the key
```

Source: <https://javascript.info/symbol#hidden-properties>

### What is the benefit of using Symbol("id") over a string "id"?

**Answer:** As user objects belongs to another code, and that code also works with them, we should not just add any fields to it. That is unsafe. But a symbol cannot be accessed accidentally, the third-party code probably will not even see it, so it is probably all right to do. You can really see it as property conflict resolution that ensures that both code bases do not conflict with one another.

Example:

```js
// ...

let id = Symbol('id');

user[id] = 'Their id value';
```

Example: Conflict Properties

```js
let user = { name: 'John' };

// Our script uses "id" property

user.id = 'Our id value';

// ...Another script also wants "id" for its purposes...

user.id = 'Their id value';

// Boom! overwritten by another script!
```

Source: <https://javascript.info/symbol#hidden-properties>

### Can you use a Symbol in an object literal?

**Answer:** Yes, this can be achieved by wrapping the property in square brackets. This allows the property to be a key and not a string.

Example:

```js
let id = Symbol('id');

let user = {
  name: 'John',

  [id]: 123, // not "id": 123
};
```

Source: <https://javascript.info/symbol#symbols-in-an-object-literal>

### Can you return a Symbol in a for…in loop?

**Answer:** No, you can access it directly, but for…in loop does not return the property. That is a part of the safeguarding of symbolic properties in principle. If another script or a library loops over our object, it will not unexpectedly access a symbolic property.

Example:

```js
let id = Symbol('id');

let user = {
  name: 'John',

  age: 30,

  [id]: 123,
};

for (let key in user) alert(key); // name, age (no symbols)
// the direct access by the symbol works

alert('Direct: ' + user[id]);
```

Source: <https://javascript.info/symbol#symbols-are-skipped-by-for-in>

### Symbol properties are hidden for a reason, but is there a way to copy all the properties including the symbolic ones?

**Answer:** Yes, symbolic properties can be cloned in an object by using Object.assign to copy both the string and symbol properties. This ensures that all the properties, strings, and symbols, are copied into the newly cloned object.

Example:

```js
let id = Symbol('id');

let user = {
  [id]: 123,
};
let clone = Object.assign({}, user);

alert(clone[id]); // 123
```

Source: <https://javascript.info/symbol#symbols-are-skipped-by-for-in>

### Sometimes you need to have same-named symbols to be the same entities. Is there a way to read or create a symbol from the registry?

**Answer:** Yes, we can use the `Symbol.for(key)` that checks the global registry, and then returns it if it is available. Otherwise, it creates a new symbol Symbol(key) and stores in the global registry by the given key. Symbols inside the registry are called global symbols.

Example:

```js
// read from the global registry

let id = Symbol.for('id'); // if the symbol did not exist, it is created
// read it again (maybe from another part of the code)

let idAgain = Symbol.for('id');

// the same symbol

alert(id === idAgain); // true
```

Source: <https://javascript.info/symbol#global-symbols>

### What is the difference between Symbol.for(key) and Symbol.keyFor(sym) in JavaScript?

**Answer:** Symbol.for(key) returns a symbol by name and Symbol.keyFor(sym) returns a name by a global symbol.

Example:

```js
// get symbol by name

let sym = Symbol.for('name');

let sym2 = Symbol.for('id');

// get name by symbol

alert(Symbol.keyFor(sym)); // name
alert(Symbol.keyFor(sym2)); // id
```

Source: <https://javascript.info/symbol#symbol-keyfor>

### The Symbol.keyFor internally uses the global symbol registry to look up the key for the symbol. Does it work for non-global symbols?

**Interview Answer:** No, because local or non-global symbols are not placed in the global symbol registry.

**Technical Answer:** Symbol.for(key) returns a symbol by name and Symbol.keyFor(sym) returns a name by a global symbol. If the symbol is not global, it will not be able to find it and returns undefined. Notably, we must remember that all symbols including non-global symbols can return a description.

Example:

```js
let globalSymbol = Symbol.for('name');

let localSymbol = Symbol('name');

alert(Symbol.keyFor(globalSymbol)); // name, global symbol
alert(Symbol.keyFor(localSymbol)); // undefined, not global
alert(localSymbol.description); // name
```

Source: <https://javascript.info/symbol#symbol-keyfor>
