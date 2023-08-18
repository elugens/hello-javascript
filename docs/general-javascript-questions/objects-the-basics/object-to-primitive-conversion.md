---
title: Object to Primitive Conversion
description: The object to primitive conversion is a JavaScript operator that converts an object to a primitive value. All objects are true in a Boolean context. Interview
sidebar_position: 8
sidebar_label: Object to Primitive Conversion
keywords:

- object to primitive conversion
- object to primitive
- primitives
- javascript
- interview
- questions
- answers
- response
- technical
- function
- object
- interview questions
- interview answers
- js
tags:
- object to primitive conversion
- object to primitive
- primitives
- interview answers
- interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ObjectPrimSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Object to Primitive Conversion | JavaScript Interview Questions</title>
</head>

**Objects the Basics: Object to Primitive Conversion**

---

<AdSense />

---

<CloseAllAnswers />

### What is Object to Primitive Conversion in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Object to Primitive Conversion in JavaScript is the process of converting an object to a primitive value (string, number, or boolean) when it is used in a context that expects a primitive.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const obj = {
  valueOf() {
    return 42;
  },
  toString() {
    return "Object Value";
  }
};

console.log(obj + 10); // Output: 52
console.log(String(obj)); // Output: "Object Value"
```

  </div>
  </div>
</details>

---

### What is the rule for objects in a Boolean context?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In a boolean context, all objects are considered truthy. When coerced to a boolean, they evaluate to true, regardless of their properties or content.
</div><br/>
  <div><strong>Technical Response:</strong> In JavaScript, the general rule is that when an object is converted to a boolean context (for instance, in a conditional like an `if` statement), it is considered `true`, regardless of its content. This includes empty objects `{}` and empty arrays `[]`.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = {};

if (obj) {
  console.log("The object is truthy!");
} else {
  console.log("The object is falsy!");
}
```

  </div>
  </div>
</details>

---

### What are the three variants of type conversion in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> String, Number, and Boolean conversions are the three variants of primitive type conversion in JavaScript.</div><br />
  <div><strong>Technical Response:</strong> The three variants of type conversion include string, number, and default conversions. String conversion can happen explicitly when an object expects a string, and mathematical operations use explicit number conversion on primitives. In rare circumstances where the operator is unclear about what type to anticipate, the default gets used.
  </div><br />
  <div><strong className="codeExample">JavaScript has three type conversion methods:</strong><br /><br />

  <div></div>

**String Conversion**:

```javascript
let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string
```

**Number Conversion**:

```javascript
let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123
console.log(typeof num); // number
```

**Boolean Conversion**:

```javascript
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
```

All these conversions are mostly plain and intuitive except for some peculiar cases like `null` and `undefined`, which are non-numeric, non-string (except when null and undefined are implicitly converted to string), and falsy.

  </div>
  </div>
</details>

---

### What are the three variants of Object to Primitive Conversion in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, Object to Primitive Conversion has three variants: ToPrimitive for general conversion, which calls valueOf or toString methods; ToNumber for numeric conversion, which also calls valueOf or toString methods; and ToString for string conversion, which calls toString or valueOf methods.
  </div><br />
  <div><strong>Technical Details:</strong> The process by which JavaScript tries to convert an object to a primitive value is called "object-to-primitive conversion". It's used when an object is used in a context where a primitive value is required, like in alert, mathematical operations, comparisons, etc.
  </div>
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// conversions demo:
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500
```

  </div>
  </div>
</details>

---

### What methods are called and in what order during Object to Primitive Conversion?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> During Object to Primitive Conversion, JavaScript tries to call the methods valueOf(), toString(), and Symbol.toPrimitive() in that order.
  </div><br />
  <div><strong className="codeExample">ToPrimitive Algorithm:</strong><br /><br />

  <div></div>
  
  <img src="/img/object-to-primitive-conversion-javascript.png" />

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

### Can you explain what Symbol.toPrimitive() is and what it does?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Symbol.toPrimitive() is a method that can be defined on an object to customize its conversion to a primitive value. It is called by the ToPrimitive() abstract operation.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  name: 'John',
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == 'string' ? `{name: "${this.name}"}` : this.money;
  },
};

// conversions demo:
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500
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
    console.log(`hint: ${hint}`);
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

### Both toString and valueOf come from ancient times. Are these Symbols?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, because toString and valueOf came before Symbols debuted in the JavaScript codebase. They are regular string-name methods.</div><br />
  <div><strong>Technical Response:</strong> No, toString and valueOf are not considered Symbols in JavaScript. They are standard methods that come from JavaScript's Object.prototype and have been in the language since its inception.
  </div>

---

:::note
In ECMAScript 2015 (ES6), the Symbol.toPrimitive method was introduced as a way to customize primitive value conversion in a more modern and comprehensive way.
:::

  </div>
</details>

---

### A plain object has both toString and valueOf methods. What do they return?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By default, a plain object's toString method returns "[object Object]", a string representation, and the valueOf method returns the object itself, without any conversion.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = { name: 'John' };

console.log(user); // [object Object]
console.log(user.valueOf() === user); // true
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
  <div><strong>Technical Response:</strong> For historical reasons, if toString or valueOf returns an object, there is no error, but such value is ignored (like if the method did not exist). That is because, in ancient times, there was no good "error" concept in JavaScript.
  </div>
  </div>
</details>

---

### As you pass an object as an argument, what are the stages?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The object gets converted to a primitive. If the resulting primitive is not the right type, it gets converted.</div><br />
  <div><strong>Technical Response:</strong> When passing an object as an argument, these stages occur: argument evaluation, object-to-primitive conversion if required by the function, function execution, and return value processing.
<br /><br />
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

console.log(obj * 2); // 4, object converted to primitive "2", then multiplication made it a number
```

  </div>
  </div>
</details>

---

### When passing an object as an argument, how is it passed in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, when passing an object as an argument, it's passed by reference, meaning the function receives a reference to the original object, not a copy. This means that changes to the object will persist outside of the function.
  </div>
  </div>
</details>

---
