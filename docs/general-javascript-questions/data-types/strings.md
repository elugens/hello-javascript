---
title: String Data Type
description: The string data type is a primitive data type that is used to represent text.
  In JavaScript, is there a data type for a single character? Interview Answers
sidebar_position: 3
sidebar_label: Strings
keywords:
  - strings
  - string
  - data type
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - frontend
  - interview questions
  - interview answers
  - js
tags:
  - strings
  - string data type
  - interview answers
  - interview questions
lastmod: 2022-05-01T22:11:22.883Z
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/StringsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Strings | JavaScript Frontend Phone Interview Questions</title>
</head>

**Data Types: Strings**

<CloseAllAnswers />

### What is a string in JavaScript, and how is it represented in code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A string is a sequence of characters enclosed in quotes, either single quotes ('') or double quotes (" "), and is represented as a primitive data type in JavaScript.
<br /><br />
  </div>
  </div>
</details>

---

### In JavaScript, is there a data type for a single character?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, JavaScript represents all text as a string. There is no specific data type for a single character. Instead, characters are treated as strings with a length of 1.
</div>
  </div>
</details>

---

### What type of internal character encoding does JavaScript always use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript always uses Unicode, specifically the UTF-16 encoding, for internal character representation, allowing it to handle a wide range of characters and symbols.
</div>
  </div>
</details>

---

### What type of string encoding does JavaScript use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript uses the UTF-16 encoding scheme for representing strings, which means that each character is represented by one or two 16-bit code units.
</div>
  </div>
</details>

---

### What are the three types of quotes used to enclose strings in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript supports three types of quotes for enclosing strings: single quotes (' '), double quotes (" "), and backticks (` `) (template literals).
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let single = 'single-quoted';
let double = 'double-quoted';

let backticks = `backticks and ${single}`;
console.log(backticks) // logs "backticks and single-quoted"
```

  </div>
  </div>
</details>

---

### Can you explain the difference between single, double, and backticks?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Single and double quotes are essentially the same. Backticks allow us to implement string interpolation.</div><br />
  <div><strong>Technical Response:</strong> The meaning of single and double quotations is roughly the same. Backticks, on the other hand, allow us to embed any phrase inside the string by enclosing it in $&#123;…&#125;. Backticks have the additional benefit of allowing a string to span several lines.<br /><br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// spanning multiple lines

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines

// this will result in an error with single or double quotes

let guestList = "Guests: // Error: Unexpected token ILLEGAL
  * John";

```

  </div>
  </div>
</details>

---

### Can single or double quotes be used to generate a multiline string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can create multi-line strings with line breaks using the new line character. The best approach is to use backticks for ease of use.</div><br />
  <div><strong>Technical Response:</strong> Yes, it is still possible to create multiline strings with single and double quotes by using a so-called “newline character”, written as \n, which denotes a line break.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let guestList = 'Guests:\n * John\n * Pete\n * Mary';

console.log(guestList); // a multiline list of guests

//////////////////////////////////////////////

// Example, these two lines are equal, just written differently:

let str1 = 'Hello\nWorld'; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

console.log(str1 == str2); // true
```

  </div>
  </div>
</details>

---

### What is the one thing that all special characters in JavaScript have in common?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> All special characters start with a backslash character known as the escape character.</div><br />
  <div><strong>Technical Response:</strong> Every special character begins with a backslash (\) character. It is also known as an "escape character. We could also use it to insert a quotation inside the string.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log("I'm the Walrus!"); // I'm the Walrus!

// Ways to avoid the need to prepend the inner quote

console.log(`I'm the Walrus!`); // I'm the Walrus!

// Example if you need to show the backslash...

console.log(`The backslash: \\`); // The backslash: \
```

  </div>
  </div>
</details>

---

### Is the length property or a function in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, length is a property, not a function. It is used to determine the number of characters in a string or elements in an array.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, length is a property and results in an error if you try to invoke it as a function. People with a background in other languages sometimes mistype by calling str.length() instead of just str.length. Length is a numeric property, and it is not necessary to add the parentheses.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(`Hello`.length); // 5
```

  </div>
  </div>
</details>

---

### When you are accessing string characters at a specific position. What is the difference between accessing it with square brackets and the charAt() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Square brackets returns "undefined" for out-of-bounds indexes, while charAt() method returns an empty string. Both methods return the character otherwise.
</div><br />
  <div><strong>Technical Response:</strong> The square brackets are a more contemporary method of obtaining a character, whereas charAt persists mainly for historical reasons. The only difference is that [] returns undefined if no character gets discovered, whereas charAt produces an empty string.<br /><br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = `Hello`;

alert(str[1000]); // undefined
alert(str.charAt(1000)); // '' (an empty string)

// We can also iterate over characters using for..of:

for (let char of 'Hello') {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}
```

  </div>
  </div>
</details>

---

### Are strings mutable or immutable in JavaScript, and why?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Strings are immutable in JavaScript because once created, their individual characters cannot be changed directly. Instead, a new string must be created for modifications to ensure data integrity.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Using a string method doesn't mutate the string
var bar = 'baz';
console.log(bar); // baz
bar.toUpperCase();
console.log(bar); // baz

// Using an array method mutates the array
var foo = [];
console.log(foo); // []
foo.push('plugh');
console.log(foo); // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase(); // BAZ
```

  </div>
  </div>
</details>

---

### What two methods should we use to change the case of a string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, you can use the toUpperCase() and toLowerCase() methods to change the case of a string to uppercase or lowercase, respectively.
<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('Interface'.toUpperCase()); // INTERFACE
alert('Interface'.toLowerCase()); // interface

// Or, if we want a single character lower cased

alert('Interface'[0].toLowerCase()); // 'i'
```

  </div>
  </div>
</details>

---

### Can you explain the function of the string indexOf() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The indexOf() method returns the first occurrence index of a specified value within a string, or -1 if not found.
</div><br />
  <div><strong>Interview Response:</strong> The string indexOf() method looks for the substring within a string, starting from the given position pos, and returns the position where the match resides or returns -1 otherwise. The optional second parameter allows us to start searching from a given position; otherwise, it defaults to the zero-index position.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'Widget with id';

alert(str.indexOf('Widget')); // 0, because 'Widget' is found at the beginning
alert(str.indexOf('widget')); // -1, not found, the search is case-sensitive

alert(str.indexOf('id')); // 1, "id" is found at position 1 (..idget with id)

// Running indexOf in a LOOP

let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert(`Found at ${foundPos}`);
  pos = foundPos + 1; // continue the search from the next position
}
```

:::note

The indexOf() method cannot take powerful search values (regular expressions) as the search method. We should note that the indexOf search is case-sensitive.

:::

  </div>
  </div>
</details>

---

### What is the difference between the string indexOf and lastIndexOf methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The difference between indexOf() and lastIndexOf() is their search direction: indexOf() searches from the beginning to the end, while lastIndexOf() searches from the end to the beginning. It lists the occurrences in reverse order.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> lastIndexOf()<br /><br />

  <div></div>

```js
const paragraph =
  'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';

console.log(
  `The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(
    searchTerm
  )}`
);
// expected output: "The index of the first "dog" from the end is 52"
```

  </div>
  </div>
</details>

---

### What is the difference between the string indexOf and search methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The search method cannot take a second start position argument, but it does accept regular expressions. The indexOf method does not accept regular expressions.</div><br />
  <div><strong>Technical Response:</strong> Although indexOf and search methods are similar. They are not equal and have some notable differences. The search() method cannot take a second start position argument, but it does accept regular expressions. The indexOf() method cannot take powerful search values (regular expressions).<br /><br />
  </div>
  </div>
</details>

---

### Can you explain the potential negative outcome when using the indexOf() method in an ` if ` statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A zero-index value in an if statement can result in a false zero value. The if statement erroneously returns false based on the index zero value.</div><br />
  <div><strong>Technical Response:</strong> The potential negative outcome is relative to returning zero as the index occurrence. The if statement does not work correctly and return a false zero value. This behavior is inconvenient and gets fixed using an extended value check on the zero value.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'Widget with id';

if (str.indexOf('Widget')) {
  alert('We found it'); // doesn't work!
}

// Quick Fix: Use a -1 check

let str = 'Widget with id';

if (str.indexOf('Widget') != -1) {
  alert('We found it'); // works now!
}
```

  </div>
  </div>
</details>

---

### What is a common trick to convert a number to a 32-bit integer?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The bitwise NOT ~ operator can be used to convert a number to a 32-bit integer; it removes the decimal part if they exist and then reverses all bits in its binary representation.</div><br />
  <div><strong>Technical Response:</strong> The bitwise NOT operator is a well-known trick. It converts the digit to a 32-bit integer (removing any decimal parts) then reverses all of the bits in its binary representation. In practice, that means simple: for 32-bit integers, ~n equals -(n+1).<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(~2); // -3, the same as -(2+1)
alert(~1); // -2, the same as -(1+1)
alert(~0); // -1, the same as -(0+1)
alert(~-1); // 0, the same as -(-1+1)
```

  </div>
  </div>
</details>

---

### Can you use the Bitwise (~) Not to ensure that a call on the indexOf method acts in the intended fashion in an if statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the bitwise not operator ensures that any occurrence at the zero-index returns true if that is the intended result because of a result of zero in an if statement returns false, and the if statement does not work.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'Widget';

if (~str.indexOf('Widget')) {
  alert('Found it!'); // works
}
```

  </div>
  </div>
</details>

---

### Can you explain the function of the string “includes” method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The includes() method in JavaScript checks if a string contains a specified substring and returns a Boolean value.
</div><br />
  <div><strong>Technical Response:</strong> The string “includes” method tests for a match of a given value within a string. If a match gets found, it returns true. Otherwise, it returns false. The syntax provides an additional argument that specifies an index position where the search starts.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('Widget with id'.includes('Widget')); // true

alert('Hello'.includes('Bye')); // false

// The optional second argument:

alert('Widget'.includes('id')); // true
alert('Widget'.includes('id', 3)); // false, from position 3 there is no "id"
```

:::note

The includes() method is case sensitive.

:::

  </div>
  </div>
</details>

---

### Can you explain the function of both string startsWith() and endsWith() methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "startsWith()" method checks if a string starts with a specified substring and returns a Boolean value. The "endsWith()" method checks if a string ends with a specified substring and returns a Boolean value.
  <br />
</div><br />
  <div><strong>Technical Response:</strong> The methods str.startsWith and str.endsWith do what they say.<br /><br />
  The startsWith() method determines whether a string begins with the characters of a specified string. This method returns true if the string begins with the characters and false if not. The startsWith() method accepts two arguments search value and start position, and by default, the start position gets set to zero (0).<br /><br />The endsWith() method determines whether a string ends with the characters of a specified string. This method returns true if the string ends with the characters and false if not. The endsWith() method accepts two arguments search value and length. If omitted, the default value is the length of the string.
  <br />
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// startsWith() Method
var str1 = 'Hello world, welcome to the universe.';
var n = str1.startsWith('world', 6);
console.log(n); // returns true

// endsWith() Method
var str2 = 'Hello world, welcome to the universe.';
var o = str2.endsWith('world', 11);
console.log(o); // returns true
```

:::note

Both the startsWith() and endsWith() methods are case sensitive.

:::

  </div>
  </div>
</details>

---

### What are the three substring methods in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three substring methods in JavaScript are "substring", "substr", and "slice".
<br /><br />
  </div>
  </div>
</details>

---

### Can you explain the function of the string slice() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "slice" method extracts a portion of a string and returns it as a new string without altering the original. It takes start and end positions as arguments. If there is no second argument, then the slice goes to the end of the string.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'stringify';
console.log(str.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
console.log(str.slice(0, 1)); // 's', from 0 to 1, but not including 1, so only character at 0

let str = 'stringify';

// start at the 4th position from the right, end at the 1st from the right
console.log(str.slice(-4, -1)); // 'gif'

let str = 'Hello world!';
console.log(str.slice(-5)); // returns world!
```

  </div>
  </div>
</details>

---

### Can you describe the purpose of the substring() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, the "substring" method returns a new string consisting of characters extracted from the original string. It takes start and end positions as arguments and does not modify the original string.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> str.substring(start, end)<br /><br />

  <div></div>

```js
let str = 'stringify';

// these are same for substring
console.log(str.substring(2, 6)); // "ring"
console.log(str.substring(6, 2)); // "ring"

// ...but not for slice:
console.log(str.slice(2, 6)); // "ring" (the same)
console.log(str.slice(6, 2)); // "" (an empty string)
```

  </div>
  </div>
</details>

---

### Can you describe the purpose of the substr() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The substr() method in JavaScript is used to extract a substring from a string by specifying the starting index and the length of the substring. To extract characters from the end of the string, use a negative start number (This does not work in IE 8 and earlier).
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'stringify';
console.log(str.substr(2, 4)); // 'ring', from the 2nd position get 4 characters

// The first argument may be negative, to count from the end:

let str = 'stringify';
alert(str.substr(-4, 2)); // 'gi', from the 4th position get 2 characters
```

:::note

The `substr()` method does not change the original string.

:::

  </div>
  </div>
</details>

---

### What is the minor drawback to using the string substr() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The substr() method may not work in some non-browser environments. It is described not in the core JavaScript specification but in Annex B, which covers browser-only features mainly for historical reasons.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'stringify';
alert(str.substr(2, 4)); // 'ring', from the 2nd position get 4 characters

// The first argument may be negative, to count from the end:

let str = 'stringify';
alert(str.substr(-4, 2)); // 'gi', from the 4th position get 2 characters
```

:::note

The substr() method does not change the original string.

:::

  </div>
  </div>
</details>

---

### Which one is the most flexible choice of the three, substring, slice, and substring methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Of the three variants, the slice method is slightly more flexible. It allows negative arguments and seems to be shorter to write. So, it is enough to remember a slice of these three methods solely.
</div>
  </div>
</details>

---

### What does the acronym U.T.F. stand for in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, The acronym UTF stands for Unicode Transformation Format, which is a character encoding standard used in JavaScript and many other programming languages.<br /><br />
  </div>
  </div>
</details>

---

### How are strings compared in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript compares strings character by character based on their Unicode code points. If characters are equal, the next characters are compared until a difference is found. JavaScript also compares each character by their UTF-16 numeric code, resulting in some odd outcomes.
</div>
  </div>
</details>

---

### Are lowercase letters greater than uppercase letters in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, uppercase letters have lower Unicode values than lowercase letters, so they are considered "smaller" and come before lowercase letters.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('a' > 'Z'); // true a = 97, Z = 90, so 97 is greater than 90
```

  </div>
  </div>
</details>

---

### Are there any special methods we can use to get the UTF-16 number code of a character?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, in JavaScript, we can use the charCodeAt() method to get the UTF-16 code of a character at a specified index in a string.</div><br />
  <div><strong>Technical Response:</strong> Yes, several special methods can get the numeric code of a specific character. They include the charCodeAt and codePointAt methods. Notably, the codePointAt method may require a polyfill in older browsers.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// different case letters have different codes
alert('z'.codePointAt(0)); // numeric code: 122
alert('Z'.charCodeAt(0)); // numeric code: 90
```

  </div>
  </div>
</details>

---

### What is the main difference between charCodeAt() and codePointAt()?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main difference is that charCodeAt() returns the UTF-16 code unit of a character (16-bit), while codePointAt() returns the full Unicode code point (21-bit), allowing for handling of characters outside the BMP (Basic Multilingual Plane).<br /><br />
  </div>
  </div>
</details>

---

### Is there a built-in method to compare diacritical characters in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, in JavaScript, the localeCompare() method can be used to compare strings that contain diacritical characters.</div><br />
  <div><strong>Technical Response:</strong> Yes, the localeCompare method gets used to compare string values using diacritical characters, and the outcome is proper sorting and filtering of string values. According to the language rules, the call localeCompare returns an integer indicating whether a string is less, equal, or greater than the comparative string. localCompare returns a negative number if the string is less than the comparative string. If the string is greater than the comparative string, it produces a positive number; otherwise, it returns 0.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('Österreich'.localeCompare('Zealand')); // -1
```

  </div>
  </div>
</details>

---

### What are the rare symbols encoded with a pair of 2-byte characters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> SIn JavaScript, the rare symbols that are encoded with a pair of 2-byte characters are called surrogate pairs. They are used to represent characters outside the Basic Multilingual Plane (BMP) of Unicode, which require more than 16 bits to encode.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('𝒳'.length); // 2, MATHEMATICAL SCRIPT CAPITAL X
alert('😂'.length); // 2, FACE WITH TEARS OF JOY
alert('𩷶'.length); // 2, a rare Chinese hieroglyph
```

  </div>
  </div>
</details>

---

### What modern method can return the numeric code of surrogate pairs?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The modern method in JavaScript that can return the numeric code of surrogate pairs is codePointAt(), which can handle characters outside the BMP and return their full Unicode code points.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = '𝒳';

let surgPair = str.codePointAt(0);

console.log(surgPair); // returns 119987
```

  </div>
  </div>
</details>

---

### What is the difference between accessing string characters with square brackets and using the charAt() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Both access string characters, but square brackets return undefined for out-of-bounds indices while charAt() returns an empty string.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "Hello";

// Using square brackets
console.log(str[1]); // 'e'
console.log(str[5]); // undefined

// Using charAt()
console.log(str.charAt(1)); // 'e'
console.log(str.charAt(5)); // ''
```

  </div>
  </div>
</details>

---

### What is the difference between UTF-16 and UTF-8 in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> UTF-16 uses 2 bytes per character, while UTF-8 uses 1 to 4 bytes per character, making UTF-8 more space-efficient for ASCII characters.</div><br />
  <div><strong className="codeExample">Code Example:</strong> Here's an example of encoding and decoding a string with UTF-8 using TextEncoder and TextDecoder in JavaScript.<br /><br />

  <div></div>

```js
let encoder = new TextEncoder(); // Default is 'utf-8'
let decoder = new TextDecoder('utf-8');

let str = "Hello UTF-8";

let encoded = encoder.encode(str);
console.log(encoded);  // Uint8Array(10) [72, 101, 108, 108, 111, 32, 85, 84, 70, 45, 56]

let decoded = decoder.decode(encoded);
console.log(decoded);  // "Hello UTF-8"
```

:::note

It's important to note that JavaScript strings are sequences of UTF-16 code units, so converting to and from UTF-8 is necessary when interacting with systems that use UTF-8.

:::

  </div>
  </div>
</details>

---
