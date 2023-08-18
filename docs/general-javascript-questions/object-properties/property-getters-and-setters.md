---
title: Property Getters & Setters
description: Property Getters & Setters is a very common interview question. Property Getters & Setters is a process in which a property is defined as a getter and setter.
sidebar_position: 2
sidebar_label: Property Getters & Setters
keywords:
  - property getters
  - property setters
  - getters and setters
  - property getter
  - property setter
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - interview questions
  - interview answers
  - js
tags:
  - property getters
  - property setters
  - getters and setters
  - property getter
  - property setter
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/PropGetterSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Property Getters & Setters | Frontend Phone Interview Answer</title>
</head>

**Object Properties Configuration: Property Getters & Setters**

---

<AdSense />

---

<CloseAllAnswers />

### Can you explain what getters and setters are as it pertains to JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Accessor properties are represented by "getter" and "setter" methods. In an object literal, they are denoted by get and set in JavaScript. Getters and setters allow you to define Object Accessors (Computed Properties). There are some advantages. Getters and Setters are easier to read because of their simplistic syntax. They also allow similar syntax for properties and methods, can secure better data quality, and are particularly useful for doing things behind the scenes.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  },
};
```

  </div>
  </div>
</details>

---

### What is the difference between an accessor property and a property function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main difference between a property function and an accessor property is the simple syntax of the accessor and the way you invoke the accessor.</div><br />
  <div><strong>Technical Response:</strong> The primary difference between a property function and an accessor property is the simple syntax of the accessor and the way you invoke the accessor. The accessor (getter setter) gets invoked without the parentheses compared to the property function. There are some advantages, Getters and Setters are easier to read. They also allow similar syntax for properties and methods, can secure better data quality, and are extremely useful in doing things behind the scenes.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Function Property
let person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    // <--
    return this.firstName + ' ' + this.lastName;
  },
};

// Display data from the object using a method:
document.getElementById('demo').innerHTML = person.fullName();

// Accessor Property
let person = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    // <--
    return this.firstName + ' ' + this.lastName;
  },
};

// Display data from the object using a getter:
document.getElementById('demo').innerHTML = person.fullName;
```

  </div>
  </div>
</details>

---

### Is there a difference between an accessor property and a data property in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, descriptors for accessor properties are different from those for data properties. There are no value or writable properties for accessor properties; instead, there are get and set functions. A named data property links a name to a value. This means you use the property to get and retrieve data directly as a public field on a class. A named accessor property associates a name with one or two accessor functions. We use accessor functions to store or retrieve a value associated with the property. This behavior means that you restrict the access to a specific value behind a get or/and set accessor property.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Named Accessor Properties
let obj = {
  get prop() {
    return this._prop;
  },
  set prop(value) {
    console.log('Setter: ' + value);
    this._prop = value;
  },
};

obj.prop = '123';

// Named Data Properties
let obj = {
  prop: 123,
};

console.log(obj.prop); // 123
```

---

:::note
The first solution provides no encapsulation or control over how your data is accessed when comparing the two. The 2nd lets you specify if your value gets read 'get accessor', written 'set accessor', or both.
:::

  </div>
  </div>
</details>

---

### Can you use getters and setters as wrappers over real properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Getters/setters can be used as wrappers over "real” property values to gain more control over operations with them. One example of this is a conditional statement used to check the validity of a value.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log('Name is too short, need at least 4 characters');
      return;
    }
    this._name = value;
  },
};

user.name = 'Pete';
console.log(user.name); // Pete

user.name = ''; // Name is too short...
```

  </div>
  </div>
</details>

---
