---
title: Symbol Type
description: The symbol type in JavaScript is a primitive type that is used to create unique identifiers for objects.
sidebar_position: 7
sidebar_label: Symbol Type
---

**Objects the Basics: Symbol Type**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What are the two types of object property keys in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By specification, object property keys may be a string or symbol type. These two types are not numbers, not Booleans, only strings or symbols.
</div>
  </div>
</details>

---

### Explain what a Symbol is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The data type symbol is a primitive data type. The Symbol() object returns a value of type symbol, and it has static properties that expose several members of built-in objects. It also has static methods that expose the global symbol registry and resembles a built-in object class. A "symbol" represents a unique identifier.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

Symbol('foo') === Symbol('foo'); // false, Symbol returns a unique
```

  </div>
  </div>
</details>

---

### Does the Symbol function get registered in the global symbol registry?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, the Symbol object does not create a global symbol available in your whole codebase. To create symbols available across files and even across realms (each of which has its global scope), use the methods Symbol.for() and Symbol.keyFor() to set and retrieve symbols from the global symbol registry.
</div>
  </div>
</details>

---

### Can two Symbol descriptions be identical in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The description can be identical, but the value is unique and returns false if both values get compared.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let id1 = Symbol('id');
let id2 = Symbol('id');

alert(id1 == id2); // false
```

  </div>
  </div>
</details>

---

### Do Symbols auto-convert to strings in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Most values in JavaScript support implicit conversion to a string, but a symbol is rare and unique, and it does not auto-convert to a string. This behavior is an intentional "language guard" against messing up because strings and symbols are fundamentally different and should not accidentally convert one into another.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let id = Symbol('id');
alert(id); // TypeError: Cannot convert a Symbol value to a string

// Solution
let id = Symbol('id');
alert(id.toString()); // Symbol(id), now it works
```

  </div>
  </div>
</details>

---

### To explicitly convert a Symbol to a string, what built-in method should we use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We should explicitly call the toString() method to convert a Symbol to a string.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let id = Symbol('id');
alert(id.toString()); // Symbol(id), now it works
```

  </div>
  </div>
</details>

---

### If you want to show the Symbol description, what property should you use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To get a symbol description to show the description only, we should use the description property.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let id = Symbol('id');
alert(id.description); // returns id
```

  </div>
  </div>
</details>

---

### How can the Symbol object act as a property safeguard in objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Symbols can create hidden object properties that cannot be overwritten or accidentally accessed. Unique properties like ids can conflict with ids or act as a hidden property that cannot get accessed by external libraries that we may want to use in our code.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  // belongs to another code
  name: 'John',
};

let id = Symbol('id');

user[id] = 1;

alert(user[id]);
// returns 1, in user[id], we can access the data using the symbol as the key
```

  </div>
  </div>
</details>

---

### What is the benefit of using Symbol("id") over a string "id"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> As user objects belong to other codes, and that code also works with them, we should not just add any fields to it. That is unsafe. But a symbol cannot be accessed accidentally, the third-party code probably will not even see it, so it is probably all right. You can see it as a property conflict resolution that ensures that both code bases do not conflict.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// ...
let id = Symbol('id');

user[id] = 'Their id value';
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Conflicting Properties<br /><br />

  <div></div>

```js
let user = { name: 'John' };

// Our script uses "id" property
user.id = 'Our id value';

// ...Another script also wants "id" for its purposes...

user.id = 'Their id value';
// Boom! overwritten by another script!
```

  </div>
  </div>
</details>

---

### Can you use a Symbol in an object literal?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, this gets achieved by wrapping the property in square brackets. This approach allows the property to be a key and not a string.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let id = Symbol('id');

let user = {
  name: 'John',
  [id]: 123, // not "id": 123
};
```

  </div>
  </div>
</details>

---

### Can you return a Symbol in a for…in loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, you can access it directly, but for…in loop does not return the property. That is a part of the safeguarding of symbolic properties in principle. If another script or a library loops over our object, it will not unexpectedly access a symbolic property.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let id = Symbol('id');
let user = {
  name: 'John',
  age: 30,
  [id]: 123,
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert('Direct: ' + user[id]);
```

  </div>
  </div>
</details>

---

### Symbol properties get hidden for a reason, but is there a way to copy all the properties, including the symbolic ones?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, symbolic properties can be cloned in an object by using object.assign to copy both the string and symbol properties. This behavior ensures that all the properties, strings, and symbols, are copied into the newly cloned object.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let id = Symbol('id');
let user = {
  [id]: 123,
};

let clone = Object.assign({}, user);

alert(clone[id]); // 123
```

  </div>
  </div>
</details>

---

### Sometimes, you need to have the same-named symbols to be the same entities. Is there a way to read or create a symbol from the registry?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use the Symbol.for(key) to check the global registry and return it if available. Otherwise, it creates a new symbol Symbol(key) and stores it in the global registry by the given key. Symbols inside the registry are called global symbols.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// read from the global registry
let id = Symbol.for('id'); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for('id');

// the same symbol
alert(id === idAgain); // true
```

  </div>
  </div>
</details>

---

### What is the difference between Symbol.for(key) and Symbol.keyFor(sym) in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Symbol.for(key) returns a symbol by name, and Symbol.keyFor(sym) returns a name by a global symbol.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// get symbol by name
let sym = Symbol.for('name');
let sym2 = Symbol.for('id');

// get name by symbol
alert(Symbol.keyFor(sym)); // name
alert(Symbol.keyFor(sym2)); // id
```

  </div>
  </div>
</details>

---

### The Symbol.keyFor internally uses the global symbol registry to look up the key for the symbol. Does it work for non-global symbols?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, local or non-global symbols do not get placed in the global symbol registry.</div><br />
  <div><strong>Technical Response:</strong> Symbol.for(key) returns a symbol by name, and Symbol.keyFor(sym) returns a name by a global symbol. If the symbol is not global, it does not find it and returns undefined. Notably, we must remember that all symbols, including non-global symbols, can return a description.<br /><br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let globalSymbol = Symbol.for('name');
let localSymbol = Symbol('name');

alert(Symbol.keyFor(globalSymbol)); // name, global symbol
alert(Symbol.keyFor(localSymbol)); // undefined, not global

alert(localSymbol.description); // name
```

  </div>
  </div>
</details>

---
