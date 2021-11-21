---
title: Property Flags / Descriptors
sidebar_position: 1
---

# Property Flags / Descriptors

**Object Properties Configuration: Property Flags / Descriptors**

<head>
  <title>Property Flags / Descriptors - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What are property attributes/flags in relation to Objects in JavaScript that allow special access to an object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, Objects have three special properties called attributes or flags. The object property attributes/flags include writeable, enumerable, and configurable flags. All three special attributes are Boolean in nature requiring a setting of true or false.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, Objects have three special properties called attributes or flags. The object property attributes/flags include writeable, enumerable, and configurable flags. All three special attributes are Boolean in nature requiring a setting of true or false. The writable property attribute if true, the value can be changed, otherwise it is read-only. The enumerable object attribute is true if and only if this property shows up during enumeration of the properties on the corresponding object. The configurable property flag if true, the property can be deleted and these attributes can be modified, otherwise not. All three of these special object attributes are set to false by default (According to the MDN), but when you invoke getOwnPropertyDescriptor it will return true (utterly confusing).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  name: 'John',
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(JSON.stringify(descriptor, null, 2));
```

  </div><br />
  <div><strong className="codeExample">Output:</strong><br /><br />

  <div></div>

```json
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
```

  </div>
  </div>
</details>

---

### Explain, the function and syntax of the Object.getOwnPropertyDescriptor method in JavaScript.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Object.getOwnPropertyDescriptor() method returns an object describing the configuration of a specific properties on a given object. The returned object returns all object properties and attributes. By default, property attributes include writable, enumerable, and configurable with a Boolean return value set to true.</div><br />
  <div><strong>Technical Response:</strong> The Object.getOwnPropertyDescriptor() method returns an object describing the configuration of a specific property on a given object (that is, one directly presents on an object and not in the object's prototype chain). The object returned is mutable but mutating it has no effect on the original property's configuration. The obj is the object that you are acting on and the property name is the property you are attempting to get a description of.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong className="codeExample">Syntax:</strong> Object.getOwnPropertyDescriptor(obj, propertyName);<br /><br />

  <div></div>

```js
let user = {
  name: 'John',
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert(JSON.stringify(descriptor, null, 2));
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
```

  </div>
  </div>
</details>

---

### Is there a method to define property attributes writable, enumerable, and configurable in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use the Object.defineProperty() method to change or set the property attributes.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Object.defineProperty(obj, prop, descriptor);<br /><br />

  <div></div>

```js
let user = {};

let user = {};

Object.defineProperty(user, 'name', {
  value: 'John',
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert(JSON.stringify(descriptor, null, 2));
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */
```

:::note
It should be noted that writable, enumerable, and configurable are all set to false by default on empty objects. If you do not set the property attributes, when using the defineProperty method on empty objects, then they will all return false by default.
:::

  </div>
  </div>
</details>

---

### When you are creating a method for an object. Is there a way restrict enumeration of the newly created object method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can define the property directly and set the properties enumerable attribute to false.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  name: 'John',
  toString() {
    return this.name;
  },
};

Object.defineProperty(user, 'toString', {
  enumerable: false,
});

// Now our custom toString method disappears:
for (let key in user) console.log(key); // returns name, but no toString
```

:::note
It should be noted that they are all set to false by default when you use the defineProperty method on an empty Object.
:::

  </div>
  </div>
</details>

---

### Is there a way to prevent changes of property flags and its deletion, while allowing changes to its value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use the Object.defineProperty() method and set configurable property flag to false.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  name: 'John',
};

Object.defineProperty(user, 'name', {
  configurable: false,
});

user.name = 'Pete'; // works fine
delete user.name; // Error
```

  </div>
  </div>
</details>

---

### Besides the seal() built-in JavaScript method, is there a way to seal an object property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use the Object.defineProperty() method and set configurable and writable property flags to false. This ensures that the object cannot be overwritten or re-configured. It should be noted that once making a property non-configurable is a one-way road. We cannot change it back with defineProperty.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  name: 'John',
};

Object.defineProperty(user, 'name', {
  writable: false,
  configurable: false,
});

// won't be able to change user.name or its flags
// this won't work:
user.name = 'Pete';
delete user.name;
Object.defineProperty(user, 'name', { value: 'Pete' });
```

  </div>
  </div>
</details>

---

### If you want to define many properties at once in an object. What built-in JavaScript method can you use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The correct built-in JavaScript object method that can be used to define multiple properties, is the Object.defineProperties() method.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = {};

Object.defineProperties(obj, {
  name: {
    value: 'Jane',
    writable: true,
  },
  surname: {
    value: 'Doe',
    writable: false,
  },
  // etc. etc.
});

console.log(obj.name); // returns Jane
```

  </div>
  </div>
</details>

---

### Explain, the function and syntax of the Object.preventExtension(obj) method in JavaScript.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An object is extensible if new properties can be added to it. The Object.preventExtensions method marks an object as no longer extensible, so that it will never have properties beyond the ones it had at the time it was marked as non-extensible.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax:</strong> Object.preventExtensions(obj);<br /><br />

  <div></div>

```js
const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, 'property1', {
    value: 42,
  });
} catch (e) {
  console.log(e.message);
}
// expected output: TypeError: Cannot define property property1, object is not extensible
```

:::note
It should be noted that the properties of a non-extensible object, in general, may still be deleted. Attempting to add new properties to a non-extensible object will fail, either silently or by throwing a TypeError (most commonly, but not exclusively, when in strict mode).
:::

  </div>
  </div>
</details>

---

### Explain, the function and syntax of the Object.seal(obj) method in JavaScript.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By default, objects are extensible meaning new properties can be added to them. Sealing an object prevents new properties from being added and marks all existing properties as non-configurable. This has the effect of making the set of properties on the object fixed. Making all properties non-configurable also prevents them from being converted from data properties to accessor properties and vice versa, but it does not prevent the values of data properties from being changed.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax:</strong> Object.seal(obj);<br /><br />

  <div></div>

```js
const object1 = {
  property1: 42,
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// expected output: 33

delete object1.property1; // cannot delete when sealed
console.log(object1.property1);
// expected output: 33
```

:::note
Attempting to delete or add properties to a sealed object, or to convert a data property to accessor or vice versa, will fail, either silently or by throwing a TypeError (most commonly, although not exclusively, when in strict mode code).
:::

  </div>
  </div>
</details>

---

### Explain, the function and syntax of the Object.freeze(obj) method in JavaScript.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax:</strong> Object.freeze(obj);<br /><br />

  <div></div>

```js
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42
```

  </div>
  </div>
</details>

---

### What is the difference between freeze and seal in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Both freeze and seal are used to create non extensible objects, but there are plenty of differences between them. Object.seal() allows changes to the existing properties of an object while Object.freeze() does not. Object.freeze() makes an object immune to everything even little changes cannot be made. Object.seal() prevents from deletion of existing properties but cannot prevent them from external changes.
</div>
  </div>
</details>

---

### Explain, the function and syntax of the Object.isExtensible() method in JavaScript.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it). The Object.isExtensible(obj) method returns a Boolean indicating whether the given object is extensible.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax:</strong> Object.isExtensible();<br /><br />

  <div></div>

```js
const object1 = {};

console.log(Object.isExtensible(object1));
// expected output: true

Object.preventExtensions(object1);

console.log(Object.isExtensible(object1));
// expected output: false
```

  </div>
  </div>
</details>

---

### Explain, the function and syntax of the Object.isSealed() method in JavaScript.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Object.isSealed() method determines if an object is sealed or not. The Object.isSealed(obj) method returns a Boolean indicating whether the given object is sealed.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Object.isSealed(obj);<br /><br />

  <div></div>

```js
const object1 = {
  property1: 42,
};

console.log(Object.isSealed(object1));
// expected output: false

Object.seal(object1);

console.log(Object.isSealed(object1));
// expected output: true
```

  </div>
  </div>
</details>

---

### Explain, the function and syntax of the Object.isFrozen() method in JavaScript.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Object.isFrozen() determines if an object is frozen and returns Boolean indicating whether the given object is frozen. An object is frozen if and only if it is not extensible, all its properties are non-configurable, and all its data properties (that is, properties which are not accessor properties with getter or setter components) are non-writable.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Object.isFrozen(obj);<br /><br />

  <div></div>

```js
const object1 = {
  property1: 42,
};

console.log(Object.isFrozen(object1));
// expected output: false

Object.freeze(object1);

console.log(Object.isFrozen(object1));
// expected output: true
```

  </div>
  </div>
</details>

---
