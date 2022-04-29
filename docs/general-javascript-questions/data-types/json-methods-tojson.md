---
title: JSON Methods & JavaScript
sidebar_position: 12
sidebar_label: JSON Methods
---

**Data Types: JSON Methods**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### Explain what is JSON?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JSON or JavaScript Object Notation is a lightweight and straightforward data exchange format used across multiple language platforms, including JavaScript. JSON means JavaScript Object Notation, and it is language and platform-independent.</div><br />
  <div><strong>Technical Response:</strong> JSON is a simple and lightweight data exchange format used across multiple language platforms. JSON means JavaScript Object Notation, and it is language and platform-independent. JSON often gets used when data gets sent from a server to a web page, and it works both on the front and back end of development environments. Several built-in JavaScript methods convert JSON objects from and back to their original format.
  </div>
  </div>
</details>

---

### Explain the role of the JSON.stringfy() method in JavaScript?

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

alert(typeof json); // we've got a string!

alert(json);
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
  <div><strong>Interview Response:</strong> JSON supports the following data types: Objects, Arrays, (primitive) strings, Boolean values, numbers, and null.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// a number in JSON is just a number
alert(JSON.stringify(1)); // 1

// a string in JSON is still a string, but double-quoted
alert(JSON.stringify('test')); // "test"

alert(JSON.stringify(true)); // true

alert(JSON.stringify([1, 2, 3])); // [1,2,3]
```

  </div>
  </div>
</details>

---

### JSON is a data-only, language-independent specification. What are some JavaScript-specific object properties that JSON.stringify skips?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JSON.stringify() ignores several JavaScript-specific object properties, including function properties, Symbolic keys and values, and properties that hold a value of undefined.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  sayHi() {
    // ignored
    alert('Hello');
  },
  [Symbol('id')]: 123, // ignored
  something: undefined, // ignored
};

alert(JSON.stringify(user)); // {} (empty object)
```

  </div>
  </div>
</details>

---

### What are the known differences between JSON and JSONP?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The difference between JSON and JSONP is that JSON is a simple data format for communication between different systems, and JSONP is also known as JSON with Padding. JSONP is a methodology for using that format with cross-domain ajax requests while not being affected by same-origin policy issues. The critical thing to remember with JSONP is that it is not a protocol or data type, and it is just a way of loading a script on the fly and processing the script that gets introduced to the page. In the spirit of JSONP, this means introducing a new JavaScript object from the server into the client application/ script.
</div>
  </div>
</details>

---

### What is the third argument space used in the JSON.stringify() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The third argument of JSON.stringify(value, replacer, space) is the number of spaces to use for pretty object formatting.</div><br />
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

alert(JSON.stringify(user, null, 2)); // value: user, replacer: null, space: 2
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

### What is the extension of the JSON file?

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

### Explain, the function and syntax of the JSON.parse() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JSON.parse() method parses a string and returns a JavaScript object. The string must get written in JSON format. The JSON.parse() method can optionally transform the result with a function.</div><br />
  <div><strong>Technical Response:</strong> The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. We can use an optional reviver function to perform a transformation on the resulting object before our code returns it. JSON parse is the opposite of the stringify method, and it returns an Object, Array, string, number, a boolean, or null value corresponding to the given JSON object text. You should note that JSON.parse() does not allow trailing commas.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> JSON.parse(text[, reviver]);<br /><br />

  <div></div>

```js
// Simple Example: stringified array
let numbers = '[0, 1, 2, 3]';

numbers = JSON.parse(numbers);

alert(numbers[1]); // 1

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

:::note

We should note that JSON.parse() does not allow trailing commas.

:::

  </div>
  </div>
</details>

---
