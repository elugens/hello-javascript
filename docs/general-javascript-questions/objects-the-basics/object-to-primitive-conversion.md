---
title: Object to Primitive Conversion
sidebar_position: 8
---

# Object to Primitive Conversion

**Objects the Basics: Object to Primitive Conversion**

<head>
  <title>Object to Primitive Conversion - Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is the rule for objects in a Boolean context?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> All objects are true in a Boolean context.
</div>
  </div>
</details>

---

### What are the three variants of type conversion in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> String, number, and default conversions.</div><br />
  <div><strong>Technical Response:</strong> The three variants of type conversion include string, number, and default conversions. String conversion can happen in an explicit fashion when an object expects a string. Mathematical operations use explicit number conversion on primitives. Default occurs in rare cases when the operator is not sure what type to expect.<br /><br />
  </div>
  </div>
</details>

---

### To implement conversions, what are the three object methods that JavaScript tries to find and call?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three object methods include Symbol.toPrimitive (system symbol) if it exists. Otherwise, if the hint is a string, it will try Obj.toString() or Obj.valueOf(). Finally, if the hint is a number or default it will try Obj.valueOf() and Obj.toString().</div><br />
  <div><strong>Simplified:</strong> The three object methods include Symbol.toPrimitive, Obj.toString(), and/or Obj.valueOf().<br /><br />
  </div>
  </div>
</details>

---

### Explain, what Symbol.toPrimitive() is and what it does?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Symbol.toPrimitive is a symbol that specifies a function valued property that is called to convert an object to a corresponding primitive value.
</div>
  </div>
</details>

Code Example:

```js
let user = {
  name: 'John',

  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);

    return hint == 'string' ? `{name: "${this.name}"}` : this.money;
  },
};

// conversions demo:

alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
```

---

### What is the outcome when you try to use a for…loop to expose the properties of an object using Symbol.toPrimitive()?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The result will be a return of all properties except for the Symbol.toPrimitive because Symbol cannot be seen in the global symbol registry.
</div>
  </div>
</details>

Code Example:

```js
let user = {
  name: 'John',

  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);

    return hint == 'string' ? `{name: "${this.name}"}` : this.money;
  },
};

for (let prop in user) {
  console.log(prop); // returns name, money but no Symbol
}
```

---

### Methods toString and valueOf come from ancient times. Are they considered Symbols?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No because they were created before Symbols were implemented into JavaScript. They are regular string-name methods.</div><br />
  <div><strong>Technical Response:</strong> No because they were created before Symbols were implemented into JavaScript. They are regular string-name methods. If there is no Symbol.toPrimitive then JavaScript tries to find them.<br /><br />
  </div>
  </div>
</details>

---

### By default, a plain object has following toString and valueOf methods. What do each of these object methods return?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The toString method returns a string "[object Object]" and the valueOf method returns the object itself.
</div>
  </div>
</details>

Code Example:

```js
let user = { name: 'John' };

alert(user); // [object Object]
alert(user.valueOf() === user); // true
```

---

### What happens if toString or valueOf returns an object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There is no error, but such value is ignored.</div><br />
  <div><strong>Technical Response:</strong> For historical reasons, if toString or valueOf returns an object, there is no error, but such value is ignored (like if the method did not exist). That is because in ancient times there was no good “error” concept in JavaScript.<br /><br />
  </div>
  </div>
</details>

---

### As you pass an object as an argument, what are the stages that take place?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The object is converted to a primitive. If the resulting primitive is not the right type, it is converted.</div><br />
  <div><strong>Technical Response:</strong> If we pass an object as an argument, then there are two stages.<br /><br />
    <ol>
        <li>The object is converted to a primitive.</li>
        <li>If the resulting primitive is not the right type, it is converted.</li>
    </ol>
  </div>
  </div>
</details>

Code Example:

```js
let obj = {
  // toString handles all conversions in the absence of other methods

  toString() {
    return '2';
  },
};

alert(obj * 2); // 4, object converted to primitive "2", then multiplication made it a number
```

---
