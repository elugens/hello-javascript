---
title: Destructuring Assignment
sidebar_position: 10
---

# Destructuring assignment in JavaScript

**Data Types: Destructuring Assignment**

<head>
  <title>Destructuring Assignment - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is de-structuring assignment and what are two data structures that commonly use it in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> De-structuring assignment allows us to “unpack” arrays or objects into variables, as sometimes that is more convenient. De-structuring also works great with complex functions that have a lot of parameters and default values.</div><br />
  <div><strong>Technical Response:</strong> De-structuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that is more convenient. De-structuring also works great with complex functions that have a lot of parameters, default values, and so on. Soon we will see that. De-structuring is commonly used on both objects and arrays in JavaScript. It is called “de-structuring assignment,” because it “de-structures” by copying items into variables. But the array itself is not modified.
  </div>
  </div>
</details>

Example:

```js
// we have an array with the name and surname

let arr = ['John', 'Smith'];

// destructuring assignment

// sets firstName = arr[0]

// and surname = arr[1]

let [firstName, surname] = arr;

alert(firstName); // John
alert(surname); // Smith
// Another example using the split() method

let [firstName, surname] = 'John Smith'.split(' ');

alert(firstName); // John
alert(surname); // Smith
```

Source: <https://javascript.info/destructuring-assignment#array-destructuring>

### If, you want to ignore or skip an array element to be de-structured (on the right-hand side of the assignment), what delimiter can you use when de-structuring an array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can skip unwanted elements of an array by adding an extra space and comma as a delimiting block.
</div>
  </div>
</details>

Example:

```js
// second element is not needed

let [firstName, , title] = [
  'Julius',

  'Caesar',

  'Consul',

  'of the Roman Republic',
];

console.log(title); // Consul
```

Source: <https://javascript.info/destructuring-assignment#array-destructuring>

### What kind of structures work with de-structuring in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> De-structuring works with any iterable structure including arrays, objects, sets, and strings on the right-hand side of the assignment.
</div>
  </div>
</details>

Code Example:

```js
let [a, b, c] = 'abc'; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
```

Source: <https://javascript.info/destructuring-assignment#array-destructuring>

### Is there a method you can use to destructure and loop over an object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use the Object.entries(object) method to loop over an object and a combination of [key,value] destructuring.
</div>
  </div>
</details>

Example:

```js
let user = {
  name: 'John',

  age: 30,
};

// loop over keys-and-values

for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}

// The similar code for a Map is simpler, as it’s iterable:

let user = new Map();

user.set('name', 'John');

user.set('age', '30');

// Map iterates as [key, value] pairs, very convenient for destructuring

for (let [key, value] of user) {
  alert(`${key}:${value}`); // name:John, then age:30
}
```

Source: <https://javascript.info/destructuring-assignment#array-destructuring>

### Explain, the swapping of variables using destructuring in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There is a trick for swapping, we will have to create a temporary array of the variables on the left side and then swap the variables in the right side in another array. We can swap more than two variables this way in JavaScript.
</div>
  </div>
</details>

Code Example:

```js
let guest = 'Jane';

let admin = 'Pete';

// Let's swap the values: make guest=Pete, admin=Jane

[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane (successfully swapped!)
```

Source: <https://javascript.info/destructuring-assignment#array-destructuring>

### Is there a way to handle mismatched arrays that are being destructured in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To access the extra variables on the right side, we can use the (...rest) operator to access the remaining variables.</div><br />
  <div><strong>Technical Response:</strong> Yes, if the array is longer than the list at the left, the “extra” items are omitted. To access the extra variables on the right side, you can use the (...rest) operator to access the remaining variables. We can use any other variable name in place of rest, just make sure it has three dots before it and goes last in the destructuring assignment. If the array is shorter than the list of variables at the left, there will be no errors. Absent values are considered undefined.
  </div>
  </div>
</details>

Example:

```js
let [name1, name2] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

alert(name1); // Julius
alert(name2); // Caesar
// Further items are not assigned anywhere

/// HOW TO FIX AND ACCESS REMAINING VARIABLES ///

// Rest Operator Implementation

let [name1, name2, ...rest] = [
  'Julius',
  'Caesar',
  'Consul',
  'of the Roman Republic',
];

// rest is array of items, starting from the 3rd one

alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
```

Source: <https://javascript.info/destructuring-assignment#array-destructuring>

### What is the rule regarding the naming convention of a rest operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In general, there is no restrictions on what you name your rest operator. In fact, you should use a relative name for rest operator such as (…title) with three preceding dots.
</div>
  </div>
</details>

Example:

```js
let [name1, name2, ...titles] = [
  'Julius',
  'Caesar',
  'Consul',
  'Roman Republic',
];

// now titles = ["Consul", " Roman Republic"]
```

Source: <https://javascript.info/destructuring-assignment#array-destructuring>

### If, you implement destructuring on empty values, what is returned?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the array is shorter than the list of variables at the left, there will be no errors. Absent values are considered undefined on return.
</div>
  </div>
</details>

Example:

```js
let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined
```

Source: <https://javascript.info/destructuring-assignment#default-values>

### What is a good destructuring technique you can use to eliminate the return of undefined array values?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The best way to handle missing values during destructuring is to set default values to potentially missing values using the assignment operator.</div><br />
  <div><strong>Technical Response:</strong> The best way to handle missing values during destructuring is to set default values to potentially missing values. This can be achieved by using the equal (=) operator to assign a new default. Default values can be more complex expressions or even function calls. They are evaluated only if the value is not provided.
  </div>
  </div>
</details>

Example:

```js
// default values

let [name = 'Guest', surname = 'Anonymous'] = ['Julius'];

alert(name); // Julius (from array)
alert(surname); // Anonymous (default used)
// runs only prompt for surname

let [name = prompt('name?'), surname = prompt('surname?')] = ['Julius'];

alert(name); // Julius (from array)
alert(surname); // whatever prompt gets
```

Source: <https://javascript.info/destructuring-assignment#default-values>

### Can you use destructing on objects in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use destructing on any iterable including objects in JavaScript.</div><br />
  <div><strong>Technical Response:</strong> We can use destructing on any iterable including objects in JavaScript. There should be an existing object at the right side of the assignment operator. The left side contains an object-like “pattern” for corresponding properties. In the simplest case, that is a list of variable names in &#123;...&#125;.
  </div>
  </div>
</details>

Example:

```js
// The basic syntax

// let {var1, var2} = {var1:…, var2:…}

let options = {
  title: 'Menu',

  width: 100,

  height: 200,
};

let { title, width, height } = options;

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
```

Source: <https://javascript.info/destructuring-assignment#object-destructuring>

### What is the difference between array and object destructuring?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Object destructuring is like array destructuring, with one exception, instead of values being pulled out of an array, object keys and values can be pulled out of an object.</div><br />
  <div><strong>Technical Response:</strong> Object destructuring is like array destructuring, with one exception, instead of values being pulled out of an array, object keys and values can be pulled out of an object. In an array, the order of the elements is relevant. It depends on your intent to handle the elements such as swapping variables. However, the rule for arrays does not apply to objects and order is not significant.
  </div>
  </div>
</details>

:::note

In an array, the order of the elements is relevant. It depends on your intent, the rule for arrays does not apply to objects and order is not significant in objects.

:::

Example:

```js
// changed the order in let {...}

let { height, width, title } = { title: 'Menu', height: 200, width: 100 };
```

Source: <https://javascript.info/destructuring-assignment#object-destructuring>

### Is there a way to assign a different name to an object variable using the destructuring process?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we want to assign a property to a variable with another name. We can set the new or shortened name by using a semi-colon in the destructing process. The colon shows what goes were and specifies the new or shortened name.
</div>
  </div>
</details>

Example:

```js
let options = {
  title: 'Menu',

  width: 100,

  height: 200,
};

// { sourceProperty: targetVariable }

let { width: w, height: h, title } = options;

// width -> w

// height -> h

// title -> title

console.log(title); // Menu
console.log(w); // 100
console.log(h); // 200
```

Source: <https://javascript.info/destructuring-assignment#object-destructuring>

### How do you handle potentially missing object properties using destructuring in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can set default values using the assignment (=) operator. Just like with arrays or function parameters, default values can be any expressions or even function calls.</div><br />
  <div><strong>Technical Response:</strong> If the object is missing object property then you can use destructuring to set a new property and value to reference the object. We can set default values using the assignment (=) operator. Just like with arrays or function parameters, default values can be any expressions or even function calls. They will be evaluated if the value is not provided.
  </div>
  </div>
</details>

Example:

```js
let options = {
  title: 'Menu',
};

let { width = 100, height = 200, title } = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200
// In the code below prompt asks for width, but not for title:

let options = {
  title: 'Menu',
};

let { width = prompt('width?'), title = prompt('title?') } = options;

alert(title); // Menu
alert(width); // (whatever the result of prompt is)
```

Source: <https://javascript.info/destructuring-assignment#object-destructuring>

### If, you want to shorten an object property and supply a value to that property, what is the process used implement this in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If, you want to shorten a property and supply a value to a property. We can combine both with a colon and assign shortened property name. The semi-colon sets the new shortened property name, and the assignment operator assigns a new value.
</div>
  </div>
</details>

Example:

```js
let options = {
  title: 'Menu',
};

let { width: w = 100, height: h = 200, title } = options;

alert(title); // Menu
alert(w); // 100
alert(h); // 200
```

Source: <https://javascript.info/destructuring-assignment#object-destructuring>

### When working with an object, is there a way to extract only the properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we have a complex object with many properties, we can extract only what we need by using destructuring to extract specific properties.
</div>
  </div>
</details>

Example:

```js
let options = {
  title: 'Menu',

  width: 100,

  height: 200,
};

// only extract title as a variable

let { title } = options;

alert(title); // Menu
```

Source: <https://javascript.info/destructuring-assignment#object-destructuring>

### What if the object has more properties than we have variables? Can we take some and then assign the “rest” somewhere?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use the rest pattern, just like we do with array destructuring. Using the rest pattern, we can assign properties and collect the rest if necessary.
</div>
  </div>
</details>

:::note
It is not supported by some older browsers (IE, use Babel to polyfill it), but works in modern ones.
:::

Example:

```js
let options = {
  title: 'Menu',

  height: 200,

  width: 100,
};

// title = property named title

// rest = object with the rest of properties

let { title, ...rest } = options;

// now title="Menu", rest={height: 200, width: 100}

alert(rest.height); // 200
alert(rest.width); // 100
```

Source: <https://javascript.info/destructuring-assignment#object-destructuring>

### What are some of the issues that you can run into with destructuring objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most significant issue is the curly brackets that encapsulate the properties. Since, objects use block scoping, an issue can arise when you separate the variable initialization from the destructuring properties themselves on a new line. The problem is that JavaScript treats &#123;...&#125; in the main code flow (not inside another expression) as a code block. To show JavaScript that it is not a code block, we can wrap the expression in parentheses (...).
</div>
  </div>
</details>

Example:

```js
let title, width, height;

// error in this line

{title, width, height} = {title: "Menu", width: 200, height: 100};

/// FIX: YOU CAN WRAP IT IN PARENTHESES ///

let title, width, height;

// okay now

({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu
```

Source: <https://javascript.info/destructuring-assignment#object-destructuring>

### If an object or an array contain other nested objects and arrays, can we use more complex left-side patterns to extract deeper portions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can build a generic object that references the original. Because JavaScript allows you to choose your properties. It is possible to build a generic object with properties that references the original object.</div><br />
  <div><strong>Technical Response:</strong> Yes, we can use more complex left-side patterns to extract deeper portions. You can build a generic object that references the original. Because JavaScript allows you to choose your properties. It is possible to build a generic object with properties that references the original object.
  </div>
  </div>
</details>

Example:

```js
let options = {
  size: {
    width: 100,

    height: 200,
  },

  items: ['Cake', 'Donut'],

  extra: true,
};

// destructuring assignment split in multiple lines for clarity

let {
  size: {
    // put size here

    width,

    height,
  },

  items: [item1, item2], // assign items here
  title = 'Menu', // not present in the object (default value is used)
} = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200
alert(item1); // Cake
alert(item2); // Donut
```

Source: <https://javascript.info/destructuring-assignment#nested-destructuring>
