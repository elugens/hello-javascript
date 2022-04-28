---
title: Object to Primitive Conversion
description: The object to primitive conversion is a JavaScript operator that converts an object to a primitive value.
sidebar_position: 8
sidebar_label: Object to Primitive Conversion
---

**Objects the Basics: Object to Primitive Conversion**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

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
  <div><strong>Technical Response:</strong> The three variants of type conversion include string, number, and default conversions. String conversion can happen explicitly when an object expects a string, and mathematical operations use explicit number conversion on primitives. In rare circumstances where the operator is unclear what type to anticipate, the default gets used.<br /><br />
  </div>
  </div>
</details>

---

### To implement conversions, what are the three object methods JavaScript tries to find and call?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three object methods include Symbol.toPrimtive (system symbol) if it exists. Otherwise, if the hint is a string, it will try Obj.toString() or Obj.valueOf(). Finally, if the hint is a number or default it will try Obj.valueOf() and Obj.toString().</div><br />
  <div><strong>Simplified:</strong> The three object methods include Symbol.toPrimitive, Obj.toString(), and/or Obj.valueOf().<br /><br />
  </div>
  </div>
</details>

---

### Explain what Symbol.toPrimitive() is and what it does?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Symbol.toPrimitive is a symbol that specifies a function valued property called to convert an object to a corresponding primitive value.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  name: 'John',
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == 'string' ? `{name: "${this.name}"}` : this.money;
  },
};

// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
```

  </div>
  </div>
</details>

---

### What is the outcome when you try to use a for…loop to expose the properties of an object using Symbol.toPrimitive()?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The result returns all properties except for the Symbol.toPrimitive because JavaScript does not expose Symbols in the global symbol registry in this fashion.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  name: 'John',
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == 'string' ? `{name: "${this.name}"}` : this.money;
  },
};

for (let prop in user) {
  console.log(prop); // returns name, money but no Symbol
}
```

  </div>
  </div>
</details>

---

### Methods toString and valueOf come from ancient times. Are these two methods considered Symbols?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, because toString and valueOf came before Symbols debuted in the JavaScript codebase. They are regular string-name methods.</div><br />
  <div><strong>Technical Response:</strong>No, because toString and valueOf came before Symbols debuted in the JavaScript codebase. They are regular string-name methods. If there is no Symbol.toPrimitive, JavaScript tries to find them.<br /><br />
  </div>
  </div>
</details>

---

### By default, a plain object has the following toString and valueOf methods. What does each of these object methods return?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The toString method returns a string "[object Object]", and the valueOf method returns the object itself.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = { name: 'John' };

alert(user); // [object Object]
alert(user.valueOf() === user); // true
```

  </div>
  </div>
</details>

---

### What happens if toString or valueOf returns an object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There is no error, but such value gets ignored.</div><br />
  <div><strong>Technical Response:</strong> For historical reasons, if toString or valueOf returns an object, there is no error, but such value is ignored (like if the method did not exist). That is because, in ancient times, there was no good "error" concept in JavaScript.<br /><br />
  </div>
  </div>
</details>

---

### As you pass an object as an argument, what are the stages?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The object gets converted to a primitive. If the resulting primitive is not the right type, it gets converted.</div><br />
  <div><strong>Technical Response:</strong> If we pass an object as an argument, there are two stages.<br /><br />
    <ol>
        <li>The object gets converted into a primitive.</li>
        <li>If the resulting primitive is not of the right type, it gets converted.</li>
    </ol>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = {
  // toString handles all conversions in the absence of other methods
  toString() {
    return '2';
  },
};

alert(obj * 2); // 4, object converted to primitive "2", then multiplication made it a number
```

  </div>
  </div>
</details>

---
