---
title: Object References & Copying
sidebar_position: 2
sidebar_label: References/Copying
keywords:
  - object references
  - object copying
  - primitive value copying
  - object cloning
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
  - object references
  - object copying
  - primitive value copying
  - object cloning
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ObjectRefSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Object References and Copying | JavaScript Frontend Phone Interview</title>
</head>

**Objects the Basics: References/Copying**

---

<AdSense />

---

<CloseAllAnswers />

### Can you explain the difference between an object and primitive value copying?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Primitive value copying duplicates the exact value. Object copying creates a reference to the original object; changes in either affect both.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Here we put a copy of the message into the phrase:
let message = 'Hello!';
let phrase = message;

console.log(phrase); // returns 'Hello!'

phrase = 'Goodbye!';
console.log(phrase);
// returns 'Goodbye!', you can't do that with objects

// Copying a reference, but the object itself not duplicated

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

console.log(user.name); // 'Pete', changes are seen from the "user" reference

// Two objects are equal only if they are the same object.

let a = {};
let b = a; // copy the reference

console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true
```

  </div>
  </div>
</details>

---

### Are two objects always equal in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, two objects are not always equal in JavaScript. They are only equal if they refer to the same object in memory.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Both are equal objects reference the same object literal
let a = {};
let b = a; // copy the reference

console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

////////////////////////////

// two independent objects

let a = {};
let b = {};

console.log(a == b); // false
```

  </div>
  </div>
</details>

---

### Is there a way to create a shallow clone of an object and its properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can create a shallow clone in JavaScript using Object.assign(&#123;&#125;, yourObject) or using the spread syntax &#123;...yourObject&#125;. Both methods duplicate only the top-level properties.
</div><br />
  <div><strong className="codeExample">Code Example:</strong>Using Object.assign():<br /><br />

  <div></div>

```js
let user = {
  name: 'John',
  age: 30,
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = 'Pete'; // changed the data in it

console.log(user.name); // still John in the original object

////////////////////////////

// We also can use Object.assign to replace for..in loop for simple cloning:

let user = {
  name: 'John',
  age: 30,
};

let clone = Object.assign({}, user);

// Using the spread syntax:
const originalObject = { name: 'John', age: 25 };
const clonedObject = { ...originalObject };

console.log(clonedObject); // { name: 'John', age: 25 }
```

  </div>
  </div>
</details>

---

### Can properties reference another property in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, properties can reference another property in JavaScript through object property referencing or using computed property names. This also occurs when a property holds an object as its value and has individual properties. In such cases, the parent property references the nested properties.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let user = {
  name: 'John',
  // The sizes property references the height and width properties
  sizes: {
    height: 182,
    width: 50,
  },
};

console.log(user.sizes.height); // 182
```

---

:::note
Notably, this means that values of properties are not necessarily primitive.
:::

  </div>
  </div>
</details>

---

### Can objects assigned to a constant (const) be modified?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, objects assigned to a constant (const) can be modified, but the variable cannot be reassigned to a different object.
</div><br />
  <div><strong>Technical Response:</strong> The object can be modified, but the declared variable cannot. The reason behind this is that the variable is constant, it must always reference the same object, but the properties of that object are free to change.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const user = {
  name: 'John',
};

user.name = 'Pete'; // (*)

console.log(user.name); // Pete
```

  </div>
  </div>
</details>

---

### What is the difference between a shallow clone and a deep copy of an object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A shallow clone copies an object and its direct properties, but not nested objects. A deep copy duplicates an object and all nested objects, creating independent copies.
  </div>
  </div>
</details>

---

### Can you modify an object that was passed as a function argument?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, if an object is passed as a function argument, modifications inside the function will affect the original Object because objects in JavaScript are passed by reference.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = { name: 'Original' };

function modifyObject(inputObj) {
    inputObj.name = 'Modified';
}

console.log(obj); // Outputs: { name: 'Original' }
modifyObject(obj);
console.log(obj); // Outputs: { name: 'Modified' }
```

  </div>
  </div>
</details>

---

### How can you check if two objects are equal in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, you can use JSON.stringify(obj1) === JSON.stringify(obj2) to check if two objects are equal. However, this method only works with objects without methods or circular references.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj1 = { name: 'Alice', age: 30 };
let obj2 = { name: 'Alice', age: 30 };

if(JSON.stringify(obj1) === JSON.stringify(obj2)) {
    console.log("Objects are equal");
} else {
    console.log("Objects are not equal");
}
```

  </div>
  </div>
</details>

---

### How can you clone an object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can create a shallow clone using Object.assign({}, obj) and a deep clone using JSON.parse(JSON.stringify(obj)). However, the latter doesn't handle functions or circular references.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = { name: 'Alice', age: 30 };

// Shallow clone
let shallowClone = Object.assign({}, obj);
console.log(shallowClone); // Outputs: { name: 'Alice', age: 30 }

// Deep clone
let deepClone = JSON.parse(JSON.stringify(obj));
console.log(deepClone); // Outputs: { name: 'Alice', age: 30 }
```

<p>In this example, Object.assign({}, obj) creates a new object and copies over the properties of obj to the new object. The JSON.parse(JSON.stringify(obj)) line first converts obj into a string, and then parses it back into a new object, effectively creating a deep clone.</p>

  </div>
  </div>
</details>

---

### Can an object have multiple prototypes in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, an object in JavaScript can only have one prototype, defined by its internal [[Prototype]] property. However, prototypes themselves can have their own prototypes, creating a prototype chain.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// create a prototype object
let animal = {
  kind: 'mammal',
  sound: function() {
    return 'generic animal sound';
  }
};

// create an object with animal as its prototype
let dog = Object.create(animal);
dog.bark = function() {
  return 'woof';
};

console.log(dog.kind); // prints "mammal"
console.log(dog.sound()); // prints "generic animal sound"
console.log(dog.bark()); // prints "woof"
```

<p>In this example, dog object has animal as its prototype.</p>

  </div>
  </div>
</details>

---

### Can properties be added or deleted from an object that has been frozen?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, once an object is frozen using Object.freeze(), you cannot add, change, or delete properties. Any attempt to do so will fail silently or throw an error.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = { name: 'John' };

// freeze the object
Object.freeze(obj);

// attempt to add, modify, or delete properties
obj.age = 30; // will fail silently or throw an error in strict mode
obj.name = 'Jane'; // will fail silently or throw an error in strict mode
delete obj.name; // will fail silently or throw an error in strict mode

console.log(obj); // { name: 'John' }
```

<p>In this example, all attempts to modify the object after it has been frozen are unsuccessful.</p>

  </div>
  </div>
</details>

---

### How can you remove a property from an object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can remove a property from an object in JavaScript using the `delete` operator. For example: `delete object.propertyName;` or `delete object['propertyName'];`.
  </div>
  </div>
</details>

---

### What is object destructuring in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Object destructuring is a way to extract individual properties from an object and assign them to variables with the same name. This can make code more concise and readable.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let person = { name: 'John', age: 30 };
let { name, age } = person;
console.log(name, age); // "John" 30
```

  </div>
  </div>
</details>

---

### How can you check if an object has a particular property in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the hasOwnProperty method or the in keyword. For example: object.hasOwnProperty('propertyName') or 'propertyName' in object.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const object = { name: 'John', age: 30 };

// Using hasOwnProperty method
console.log(object.hasOwnProperty('name')); // true
console.log(object.hasOwnProperty('address')); // false

// Using in operator
console.log('name' in object); // true
console.log('address' in object); // false
```

  </div>
  </div>
</details>

---

### How can you iterate over the properties of an object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use a for...in loop to iterate over the properties of an object. The loop will execute once for each property of the object, and you can access each property using its name within the loop.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
for (let key in object) {
  console.log(key, object[key]);
}
```

  </div>
  </div>
</details>

---
