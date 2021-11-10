---
title: JSON Methods
sidebar_position: 12
---

# JSON Methods & JavaScript

**Data Types: JSON Methods**

<head>
  <title>JSON Methods - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Explain, what is JSON in relation to the JavaScript development environment?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JSON or JavaScript Object Notation is a simple and lightweight data exchange format used across multiple language platforms including JavaScript. JSON means JavaScript Object Notation and it is language and platform independent.</div><br />
  <div><strong>Technical Response:</strong> JSON is a simple and lightweight data exchange format used across multiple language platforms. JSON means JavaScript Object Notation and it is language and platform independent. JSON is often used when data is sent from a server to a web page. It works both on the front and back end of development environments. There are several built-in JavaScript methods used to convert JSON objects from and back to its original format.
  </div>
  </div>
</details>

Source: <https://javascript.info/json>

### Explain, what is the role of the JSON.stringfy() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.<br /><br />
  <strong>Syntax:</strong> JSON.stringify(value[, replacer[, space]])<br /><br />
  <ul>
    <li>The **value** to convert to a JSON string.</li>
    <li>The (optional) **replacer** is a function or array used to change the behavior of the stringification process.</li>
    <li>The (optional) **space** involves a String or Number object that's used to insert white space into the output JSON string for readability purposes. If this is a Number, it indicates the number of space characters to use as white space. The number is limited and defaults to 10 spaces.</li>
  </ul>
</div>
  </div>
</details>

Simple Example:

```js
let student = {

    name: 'John',

    age: 30,

    isAdmin: false,

    courses: ['html', 'css', 'js'],

    wife: null

};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);

// Example: JSON-encoded object

{

     "name": "John",

     "age": 30,

     "isAdmin": false,

     "courses": ["html", "css", "js"],

     "wife": null

}

```

Source: <https://javascript.info/json#json-stringify>

### What data types does JSON support in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JSON supports the following data types including Objects, Arrays, (primitive) strings, Boolean values, numbers, and null.
</div>
  </div>
</details>

Code Example:

```js
// a number in JSON is just a number

alert(JSON.stringify(1)); // 1
// a string in JSON is still a string, but double-quoted

alert(JSON.stringify('test')); // "test"
alert(JSON.stringify(true)); // true
alert(JSON.stringify([1, 2, 3])); // [1,2,3]
```

Source: <https://javascript.info/json#json-stringify>

### JSON is data-only language-independent specification, what are some JavaScript-specific object properties that are skipped by JSON.stringify?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are several JavaScript-specific object properties that are ignored by JSON.stringify() including function properties, Symbolic keys and values, and properties that hold a value of undefined.
</div>
  </div>
</details>

Example:

```js
let user = {
  sayHi() {
    // ignored

    alert('Hello');
  },

  [Symbol('id')]: 123, // ignored
  something: undefined, // ignored
};

alert(JSON.stringify(user)); // {} (empty object)
```

Source: <https://javascript.info/json#json-stringify>

### What is the difference between JSON and JSONP in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The difference between JSON and JSONP is that JSON is a simple data format for communication between different systems. JSONP is also known as JSON with Padding. JSONP is a methodology for using that format with cross domain ajax requests while not being affected by same origin policy issues. The important thing to remember with JSONP is that it is not actually a protocol or data type. It is just a way of loading a script on the fly and processing the script that is introduced to the page. In the spirit of JSONP, this means introducing a new JavaScript object from the server into the client application / script.
</div>
  </div>
</details>

Source: <https://javascript.info/json#json-stringify>

### What is the third argument space used for in the JSON.stringify() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The third argument of JSON.stringify(value, replacer, space) is the number of spaces to use for pretty object formatting.</div><br />
  <div><strong>Technical Response:</strong> The third argument of JSON.stringify(value, replacer, space) is the number of spaces to use for pretty formatting. Previously, all stringified objects had no indents and extra spaces. That is fine if we want to send an object over a network. The space argument is used exclusively for a nice formatting. You should remember if you do not use the replacer, it should be set to null.
  </div>
  </div>
</details>

Example:

```js
let user = {

    name: "John",

    age: 25,

    roles: {

    isAdmin: false,

    isEditor: true

    }

};

alert(JSON.stringify(user, null, 2)); // value: user, replacer: null, space: 2

// two-space indents:

{

    "name": "John",

    "age": 25,

    "roles": {

    "isAdmin": false,

    "isEditor": true

    }

}

// EXAMPLE

// for JSON.stringify(user, null, 4) the result would be more indented:

{

    "name": "John",

    "age": 25,

    "roles": {

    "isAdmin": false,

    "isEditor": true

    }

}

```

Source: <https://javascript.info/json#formatting-space>

### Who is known as the father of JSON?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Douglas Crockford is known as the father of JSON. Douglas Crockford was the person who originally defined the JSON format back in 2000.
</div>
  </div>
</details>

Source: <https://www.softwaretestinghelp.com/top-json-interview-questions/>

### What is the extension of the JSON file?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A JSON file has an extension of “.json”. Being in a text-based format, a JSON file can be viewed or edited using any text editor like notepad or notepad++.
</div>
  </div>
</details>

Source: <https://www.softwaretestinghelp.com/top-json-interview-questions/>

### Can a comment be added inside a JSON file?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JSON does not support any comments. Although, a Key or data object can be used to hold your comments. We need to just make sure that during the processing of the JSON, our application ignores the given data element.
</div>
  </div>
</details>

Example: Commenting in JSON (Technically it can be done, but is not supported in the syntax.)

```json
{
  "_comment1": "this is my comment", // <- comment not supported

  "sport": "basketball",

  "coach": "Joe Smith",

  "wins": 15,

  "losses": 5
}
```

Source: <https://www.softwaretestinghelp.com/top-json-interview-questions/>

### Explain, the function and syntax of the JSON.parse() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JSON.parse() method parses a string and returns a JavaScript object. The string must be written in JSON format. The JSON.parse() method can optionally transform the result with a function.</div><br />
  <div><strong>Technical Response:</strong> The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned. JSON parse is the opposite of the stringify method. It returns an Object, Array, string, number, boolean, or null value corresponding to the given JSON object text. It should be noted that JSON.parse() does not allow trailing commas.
  </div>
  </div>
</details>

:::note
It should be noted that JSON.parse() does not allow trailing commas.
:::

**Syntax:** JSON.parse(text[, reviver])

Example:

```js
// Simple Example: stringified array

let numbers = '[0, 1, 2, 3]';

numbers = JSON.parse(numbers);

alert(numbers[1]); // 1
// Example: Using the option second argument reviver

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key); // log the current property name, the last is "".
  return value; // return the unchanged property value.
});

// 1

// 2

// 4

// 6

// 5

// 3

// ""
```

Source: <https://javascript.info/json#custom-tojson>
