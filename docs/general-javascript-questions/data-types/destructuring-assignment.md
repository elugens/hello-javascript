---
title: Destructuring assignment in JavaScript
description: Destructuring assignment is a JavaScript expression that allows us to extract
  data from arrays, or object properties, and assign them to variables.
  Interviewer
sidebar_position: 10
sidebar_label: Destructuring assignment
keywords:
  - destructuring assignment
  - destructuring
  - arrays
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - variables
  - object properties
  - interview questions
  - interview answers
  - js
tags:
  - destructuring assignment
  - destructuring
  - interview answers
  - interview questions
lastmod: 2022-05-01T21:12:11.306Z
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/DestructuringSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Destructuring Assignment | JavaScript Frontend Phone Interview</title>
</head>

**Data Types: Destructuring Assignment**

<CloseAllAnswers />

### What is a de-structuring assignment, and what are two data structures commonly use it in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Destructuring assignment allows us to “unpack” arrays or objects into variables, which is sometimes more convenient. Destructuring also works great with complex functions with many parameters and default values.</div><br />
  <div><strong>Technical Response:</strong> De-structuring assignment is a special syntax that allows us to “unpack” arrays or objects into many variables, which is sometimes more convenient. De-structuring also works great with complex functions with many parameters, default values, and more. We can use destructuring on both objects and arrays in JavaScript. It is a “destructuring assignment” because it “destructures” by copying items into variables. But the array itself is not modified.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// we have an array with the name and surname
let arr = ['John', 'Smith'];

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname); // Smith

// Another example using the split() method

let [firstName, surname] = 'John Smith'.split(' ');
alert(firstName); // John
alert(surname); // Smith

/////////////////////////////////////////////

// DESTRUCTURING OBJECTS

const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne',
};

const { name, realName } = hero;
name; // => 'Batman',
realName; // => 'Bruce Wayne'
```

  </div>
  </div>
</details>

---

### If you want to ignore or skip an array element to be destructured (on the right-hand side of the assignment), what delimiter can you use when destructuring an array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can skip unwanted elements of an array by adding extra space and a comma as a delimiting block.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// second element is not needed
let [firstName, , title] = [
  'Julius',
  'Caesar',
  'Consul',
  'of the Roman Republic',
];

console.log(title); // Consul
```

  </div>
  </div>
</details>

---

### What kind of structures work with destructuring in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Destructuring works with any iterable structure, including arrays, objects, Sets, and strings on the right-hand side of the assignment.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let [a, b, c] = 'abc'; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
```

  </div>
  </div>
</details>

---

### Is there a method you can use to destructure and loop over an object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use the Object.entries(object) method to loop over an object and a combination of [key, value] destructuring.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  name: 'John',
  age: 30,
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}

// The similar code for a Map is simpler, as it’s iterable:
let user = new Map();
user.set('name', 'John');
user.set('age', '30');

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of user) {
  alert(`${key}:${value}`); // name:John, then age:30
}
```

  </div>
  </div>
</details>

---

### Can you explain the swapping of variables using destructuring in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There is a trick for swapping. We have to create a temporary array of the variables on the left side and then swap the variables on the right side in another array. We can swap more than two variables this way in JavaScript.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let guest = 'Jane';
let admin = 'Pete';

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane (successfully swapped!)
```

  </div>
  </div>
</details>

---

### Is there a way to handle mismatched arrays that we need to destructure in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To access the extra variables on the right side, we can use the (...rest) operator to access the remaining variables.</div><br />
  <div><strong>Technical Response:</strong> Yes, if the array is longer than the list at the left, the “extra” items are omitted. To access the extra variables on the right side, you can use the (...rest) operator to access the remaining variables. We can use any other variable name in place of the rest. Just make sure it has three dots before it and goes last in the destructuring assignment. If the array is shorter than the list of variables at the left, there are no errors, and missing values are considered undefined.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let [name1, name2] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

alert(name1); // Julius
alert(name2); // Caesar
// Further items are not assigned anywhere

/// HOW TO FIX AND ACCESS REMAINING VARIABLES ///

// Rest Operator Implementation
let [name1, name2, ...rest] = [
  'Julius',
  'Caesar',
  'Consul',
  'of the Roman Republic',
];

// rest is array of items, starting from the 3rd one
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
```

  </div>
  </div>
</details>

---

### What is the rule regarding the naming convention of a rest operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are no restrictions on what you name your rest operator in general. You should use a relative name for the rest operator, such as (…title) with three preceding dots.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let [name1, name2, ...titles] = [
  'Julius',
  'Caesar',
  'Consul',
  'Roman Republic',
];
// now titles = ["Consul", " Roman Republic"]
```

  </div>
  </div>
</details>

---

### If you implement destructuring on empty values, what gets returned?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are no errors if the array is shorter than the list of variables at the left. Missing values are considered undefined on return.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined
```

  </div>
  </div>
</details>

---

### What is an excellent destructuring technique you can use to eliminate the return of undefined array values?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The best way to handle missing values during destructuring is to set default values to potentially missing values using the assignment operator.</div><br />
  <div><strong>Technical Response:</strong> Setting default values to possibly missing values is the best technique to manage missing values during destructuring. This approach gets accomplished by assigning a new default using the equal (=) operator. More sophisticated phrases or function calls are used as default values, and they only get evaluated if the value is not supplied.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// default values
let [name = 'Guest', surname = 'Anonymous'] = ['Julius'];

alert(name); // Julius (from array)
alert(surname); // Anonymous (default used)

// runs only prompt for surname
let [name = prompt('name?'), surname = prompt('surname?')] = ['Julius'];

alert(name); // Julius (from array)
alert(surname); // whatever prompt gets
```

  </div>
  </div>
</details>

---

### Can you use destructing on objects in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use destructing on any iterable, including objects in JavaScript.</div><br />
  <div><strong>Technical Response:</strong> We can use destructing on any iterable, including objects in JavaScript. There should be an existing object on the right side of the assignment operator, and the left side contains an object-like “pattern” for corresponding properties. In the simplest case, that is a list of variable names in &#123;...&#125;.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// The basic syntax
// let {var1, var2} = {var1:…, var2:…}
let options = {
  title: 'Menu',
  width: 100,
  height: 200,
};

let { title, width, height } = options;

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
```

  </div>
  </div>
</details>

---

### What is the distinction between array destructuring and object destructuring?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Object destructuring is like array destructuring, with one exception, instead of values getting pulled out of an array, object keys and values get pulled out of an object.</div><br />
  <div><strong>Technical Response:</strong> Object destructuring is like array destructuring, with one exception, instead of values getting pulled out of an array, object keys and values get pulled out of an object. In an array, the order of the elements is relevant, and it depends on your intent to handle the elements, such as swapping variables. However, the rule for arrays does not apply to objects, and order is insignificant.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// changed the order in let {...}
let { height, width, title } = { title: 'Menu', height: 200, width: 100 };
```

:::note

In an array, the order of the elements is relevant. It depends on your intent, the rule for arrays does not apply to objects, and order is insignificant.

:::

  </div>
  </div>
</details>

---

### Is it feasible to use the destructuring procedure to modify the name of an object variable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we want to assign a property to a variable with another name. We can set the new or shortened name by implementing a semi-colon in the destructing process. The colon shows what goes where and specifies the new or shortened name.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let options = {
  title: 'Menu',
  width: 100,
  height: 200,
};

// { sourceProperty: targetVariable }
let { width: w, height: h, title } = options;

// width -> w
// height -> h
// title -> title

console.log(title); // Menu
console.log(w); // 100
console.log(h); // 200
```

  </div>
  </div>
</details>

---

### How do you handle potentially missing object properties using destructuring in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can set default values using the assignment (=) operator. Like with arrays or function parameters, default values can be any expressions or function calls.</div><br />
  <div><strong>Technical Response:</strong> If the object is missing object property, you can use destructuring to set a new property and value to reference the object. We can set default values using the assignment (=) operator. Default values, like arrays or function parameters, can be any expressions or function calls, and they get evaluated if no value is specified.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let options = {
  title: 'Menu',
};

let { width = 100, height = 200, title } = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200

// In the code below prompt asks for width, but not for title:
let options = {
  title: 'Menu',
};

let { width = prompt('width?'), title = prompt('title?') } = options;

alert(title); // Menu
alert(width); // (whatever the result of prompt is)
```

  </div>
  </div>
</details>

---

### If you want to shorten an object property and supply a value to that property, what is the process used to implement this in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If you want to shorten a property and supply a value to a property, we can combine both with a colon and assign a shortened property name. The semi-colon sets the new shortened property name, and the assignment operator assigns a new value.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let options = {
  title: 'Menu',
};

let { width: w = 100, height: h = 200, title } = options;

alert(title); // Menu
alert(w); // 100
alert(h); // 200
```

  </div>
  </div>
</details>

---

### When working with an object, is there a way to extract only the properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we have a complex object with many properties, we can extract what we need by using destructuring to extract specific properties.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let options = {
  title: 'Menu',
  width: 100,
  height: 200,
};

// only extract title as a variable
let { title } = options;

alert(title); // Menu
```

  </div>
  </div>
</details>

---

### What if the object has more properties than we have variables? Can we take some and then assign the “rest” somewhere?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use the rest pattern, just like we do with array destructuring. Using the rest pattern, we can assign properties and collect the rest if necessary.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let options = {
  title: 'Menu',
  height: 200,
  width: 100,
};

// title = property named title
// rest = object with the rest of properties
let { title, ...rest } = options;

// now title="Menu", rest={height: 200, width: 100}
alert(rest.height); // 200
alert(rest.width); // 100
```

:::note

Some older browsers do not support it (IE, use Babel to polyfill it), but it works in modern ones.

:::

  </div>
  </div>
</details>

---

### What are some of the issues you can run into with destructuring objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most significant issue is the curly brackets that encapsulate the properties. Since objects use block scoping, an issue can arise when you separate the variable initialization from the destructuring properties on a new line. The problem is that JavaScript treats &#123;...&#125; in the main code flow (not inside another expression) as a code block. We can wrap the expression in parentheses to show JavaScript that it is not a code block (...).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let title, width, height;

// error in this line
{title, width, height} = {title: "Menu", width: 200, height: 100};

/// FIX: YOU CAN WRAP IT IN PARENTHESES ///

let title, width, height;

// okay now
({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu

```

  </div>
  </div>
</details>

---

### Can we use more complex left-side patterns to extract deeper portions if an object or an array contains other nested objects and arrays?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can build a generic object that references the original. Because JavaScript allows you to choose your properties, it is possible to build a generic object with properties referencing the original object.</div><br />
  <div><strong>Technical Response:</strong> We can use more complex left-side patterns to extract deeper portions. You can build a generic object that references the original. Because JavaScript allows you to choose your properties, it is possible to build a generic object with properties referencing the original object.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ['Cake', 'Donut'],
  extra: true,
};

// destructuring assignment split in multiple lines for clarity
let {
  size: {
    // put size here
    width,
    height,
  },
  items: [item1, item2], // assign items here
  title = 'Menu', // not present in the object (default value is used)
} = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200
alert(item1); // Cake
alert(item2); // Donut
```

  </div>
  </div>
</details>

---
