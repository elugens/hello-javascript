---
title: JSON Methods & JavaScript
description: Explain what is JSON? What are the methods available in JSON? What are the
  differences between JSON and JavaScript? How can we use JSON methods in
  JavaScript?
sidebar_position: 12
sidebar_label: JSON Methods
keywords:
  - json
  - json methods
  - functions
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
  - json methods
  - json
  - interview answers
  - interview questions
lastmod: 2022-05-01T21:25:38.596Z
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/JSONMethodsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>JSON Methods | JavaScript Frontend Phone Interview Answers</title>
</head>

**Data Types: JSON Methods**

<CloseAllAnswers />

### What is JSON?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>JSON stands for JavaScript Object Notation, a lightweight data interchange format widely used for web APIs.
</div><br />
  <div><strong>Technical Response:</strong> JSON is a simple and lightweight data exchange format used across multiple language platforms. JSON means JavaScript Object Notation, and it is language and platform-independent. JSON often gets used when data gets sent from a server to a web page, and it works both on the front and back end of development environments. Several built-in JavaScript methods convert JSON objects from and back to their original format.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```json
{
  "name": "John",
  "age": 30,
  "isStudent": false
}
```

  </div>
  </div>
</details>

---

### How is JSON related to JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JSON syntax is derived from JavaScript, making it easy to use with JavaScript. JSON data can be parsed and converted into JavaScript objects.
  </div><br/>
  <div><strong>Technical Response:</strong> JSON is closely related to JavaScript because it is based on a subset of the JavaScript programming language syntax. JSON was inspired by JavaScript's object and array literal syntax and adopted it as the foundation for its data representation format. JavaScript provides built-in methods to parse and stringify JSON data, making it convenient for working with JSON in JavaScript applications.
  </div>
  </div>
</details>

---

### Can you explain the role of the JSON.stringify() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.<br /><br />
  <strong>Syntax:</strong> JSON.stringify(value[, replacer[, space]])<br /><br />
  <ul>
    <li>The <strong>value</strong> to convert to a JSON string.</li>
    <li>• The (optional) <strong>replacer</strong> is a function or array used to change the behavior of the stringification process.</li>
    <li>• The (optional) <strong>space</strong> consists of a String or Number object that gets used to introduce white space into the output JSON string to improve readability. If this is a number, it denotes the number of white space characters to use, and the number is limited and defaults to 10 spaces.</li>
  </ul>
</div><br />
  <div><strong className="codeExample">Simple Example:</strong><br /><br />

  <div></div>

```js
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null,
};

let json = JSON.stringify(student);

console.log(typeof json); // we've got a string!

console.log(json);
```

  </div><br />
  <div><strong className="codeExample">JSON Output:</strong><br /><br />

  <div></div>

```json
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
```

  </div>
  </div>
</details>

---

### What data types does JSON support in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JSON supports six data types including string, number, object, array, boolean, and null types. The string and object data types must be enclosed in quotes.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// a number in JSON is just a number
console.log(JSON.stringify(1)); // 1

// a string in JSON is still a string, but double-quoted
console.log(JSON.stringify('test')); // "test"

console.log(JSON.stringify(true)); // true

console.log(JSON.stringify([1, 2, 3])); // [1,2,3]
```

  </div>
  </div>
</details>

---

### JSON is a language-neutral, data-only format. What JavaScript object properties are excluded by JSON.stringify()?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `JSON.stringify()` excludes functions, `undefined`, and symbol-typed properties. It also omits non-enumerable properties and properties from the prototype chain.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  sayHi() {
    // ignored
    console.log('Hello');
  },
  [Symbol('id')]: 123, // ignored
  something: undefined, // ignored
};

console.log(JSON.stringify(user)); // {} (empty object)
```

  </div>
  </div>
</details>

---

### What are the known differences between JSON and JSONP?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JSON is a data format for exchanging data between systems, while JSONP (JSON with Padding) is a technique that allows JavaScript code to make cross-domain requests, bypassing the Same-Origin Policy.
</div><br/>
  <div><strong>Technical Response:</strong> The difference between JSON and JSONP is that JSON is a simple data format for communication between different systems, and JSONP is also known as JSON with Padding. JSONP is a methodology for using that format with cross-domain ajax requests while not being affected by same-origin policy issues. The critical thing to remember with JSONP is that it is not a protocol or data type, and it is just a way of loading a script on the fly and processing the script that gets introduced to the page. In the spirit of JSONP, this means introducing a new JavaScript object from the server into the client application/ script.
</div>
  </div>
</details>

---

### What is the third argument space used in the JSON.stringify() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The optional third argument, "space," in JSON.stringify() adds indentation and white space to the outputted JSON string.</div><br />
  <div><strong>Technical Response:</strong> The third argument of JSON.stringify(value, replacer, space) is the number of spaces to use for pretty formatting. Previously, all stringified objects had no indents and extra spaces. That is fine if we want to send an object over a network. The space argument is used exclusively for nice formatting. Remember that if you do not use the replacer, we should set it to null.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  name: 'John',
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
};

console.log(JSON.stringify(user, null, 2)); // value: user, replacer: null, space: 2
```

  </div><br />
  <div><strong className="codeExample">JSON Indented 2 spaces:</strong><br /><br />

  <div></div>

```json
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
```

  </div><br />
  <div><strong className="codeExample">JSON Indented 4 spaces:</strong><br /><br />

  <div></div>

```json
// {
//     "name": "John",
//     "age": 25,
//     "roles": {
//         "isAdmin": false,
//         "isEditor": true
//     }
// }

```

  </div>
  </div>
</details>

---

### Who is known as the father and creator of JSON?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Douglas Crockford is widely regarded as the "Father of JSON." Douglas Crockford designed the JSON format for the first time in 2000.
</div>
  </div>
</details>

---

### What is the extension that we use for JSON files?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The extension of a JSON file is ".json." Because JSON files are text-based, we can change or view the file content using any text editor, such as notepad or notepad++.
</div>
  </div>
</details>

---

### Can a comment be added inside a JSON file?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JSON does not support any comments. However, we can store comments in a Key or data object. We need to make sure that our application ignores the given data element during the processing of the JSON.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Commenting in JSON (Technically, it can be done but is not supported)<br /><br />

  <div></div>

```json
{
   "_comment1": "this is my comment", // <-- comment (not supported)
   "sport": "basketball",
   "coach": "Joe Smith",
   "wins": 15,
   "losses": 5
}
```

  </div>
  </div>
</details>

---

### Can you explain the function of the JSON.parse() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JSON.parse() method in JavaScript parses a JSON string and converts it into a JavaScript object, making it easy to work with JSON data in JavaScript.</div><br />
  <div><strong>Technical Response:</strong> The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. We can use an optional reviver function to perform a transformation on the resulting object before our code returns it. JSON parse is the opposite of the stringify method, and it returns an Object, Array, string, number, a boolean, or null value corresponding to the given JSON object text. You should note that JSON.parse() does not allow trailing commas.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> JSON.parse(text[, reviver]);<br /><br />

  <div></div>

```js
// Simple Example: stringified array
let numbers = '[0, 1, 2, 3]';

numbers = JSON.parse(numbers);

console.log(numbers[1]); // 1

// Example: Using the option second argument reviver
JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key); // log the current property name, the last is "".
  return value; // return the unchanged property value.
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

---

:::note
We should note that JSON.parse() does not allow trailing commas.
:::

  </div>
  </div>
</details>

---

### What is the difference between JSON.stringify() and JSON.parse()?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JSON.stringify() converts a JavaScript object to a JSON string, while JSON.parse() converts a JSON string to a JavaScript object.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = {name: "John", age: 30};

let jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"John","age":30}'

let parsedObj = JSON.parse(jsonString);
console.log(parsedObj); // {name: 'John', age: 30}
```

  </div>
  </div>
</details>

---

### What is a JSON Schema?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JSON Schema is a specification for validating the structure and content of JSON data, allowing for standardized data validation and interchange.
  </div>
  <div><strong>Technical Response:</strong> A JSON Schema is a declarative specification that defines the structure, content, and validation rules for JSON data. It provides a way to describe the expected format and properties of JSON objects, enabling validation, documentation, and interoperability between systems.<br/><br/>A JSON Schema is itself represented as a JSON object and follows a specific schema defined by the JSON Schema specification. It describes the constraints and expectations for the JSON data it validates. A JSON Schema can define properties, data types, required fields, minimum and maximum values, regular expressions, and more.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "number",
      "minimum": 0
    },
    "isStudent": {
      "type": "boolean"
    }
  },
  "required": ["name", "age"]
}
```

  </div>
  </div>
</details>

---

### How is the JSON Schema used?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JSON Schema is used to validate the structure and data of JSON documents, ensuring consistency and interoperability between systems.
  </div>
  </div>
</details>

---

### What are some common use cases for JSON in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JSON is often used in JavaScript for data exchange between a client and a server, for storing data in a file or a database, or for sending and receiving data through APIs.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// JSON data representing a person
var jsonStr = '{"name":"John","age":30,"isStudent":false}';

// Parsing JSON string into a JavaScript object
var obj = JSON.parse(jsonStr);

// Accessing properties of the JavaScript object
console.log(obj.name);  // Output: John
console.log(obj.age);   // Output: 30
console.log(obj.isStudent);  // Output: false

// Modifying the JavaScript object
obj.age = 31;
obj.isStudent = true;

// Converting the JavaScript object back to a JSON string
var updatedJsonStr = JSON.stringify(obj);

console.log(updatedJsonStr);
// Output: {"name":"John","age":31,"isStudent":true}
```

This code illustrates the basic operations of parsing JSON, accessing object properties, modifying data, and converting JavaScript objects to JSON strings.

  </div>
  </div>
</details>

---
