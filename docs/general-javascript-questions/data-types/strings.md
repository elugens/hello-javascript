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

<head>
  <title>Strings | JavaScript Frontend Phone Interview Questions</title>
</head>

**Data Types: Strings**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### In JavaScript, is there a data type for a single character?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, JavaScript represents all text as a string. There is no particular type for a single character.
</div>
  </div>
</details>

---

### What type of internal character encoding does JavaScript always use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The internal format for strings is always UTF-16, but it does not get tied to the page encoding.
</div>
  </div>
</details>

---

### What are the three types of quotes used to enclose strings in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Strings get enclosed within either single quotes, double quotes, or backticks.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let single = 'single-quoted';
let double = 'double-quoted';

let backticks = `backticks`;
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

alert(guestList); // a multiline list of guests

//////////////////////////////////////////////

// Example, these two lines are equal, just written differently:

let str1 = 'Hello\nWorld'; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

alert(str1 == str2); // true
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
  <div><strong>Technical Response:</strong> Every special character begins with a backslash (\) character. It is also known as an "escape character." We could also use it to insert a quotation inside the string.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert("I'm the Walrus!"); // I'm the Walrus!

// Ways to avoid the need to prepend the inner quote

alert(`I'm the Walrus!`); // I'm the Walrus!

// Example if you need to show the backslash...

alert(`The backslash: \\`); // The backslash: \
```

  </div>
  </div>
</details>

---

### Is the length property or a function in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> length is a property that returns the length of a string or an array.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, length is a property and results in an error if you try to invoke it as a function. People with a background in other languages sometimes mistype by calling str.length() instead of just str.length. Length is a numeric property, and it is not necessary to add the parentheses.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(`Hello`.length); // 5
```

  </div>
  </div>
</details>

---

### When you are accessing string characters at a specific position. What is the difference between accessing it with square brackets and the charAt() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Square brackets return undefined if the value does not exist, and charAt returns a string if the index value does not exist.</div><br />
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
  <div><strong>Interview Response:</strong> Strings are primitive values making them immutable.</div><br />
  <div><strong>Technical Response:</strong> Strings are immutable in JavaScript and cannot be changed because they are primitive values. It is important not to confuse a primitive with a variable assigned a primitive value. The variable may get reassigned to a new value, but the current value cannot be changed in the ways that objects, arrays, and functions can get altered.<br />
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

### Name the five primitive wrapper objects in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> String, Symbol, BigInt, Boolean, and Number primitive wrapper objects.</div><br />
  <div><strong>Technical Response:</strong> Except for null and undefined, all primitive values have object equivalents that wrap around the primitive values. The five wrapper objects include string, number, BigInt, Boolean, and symbol primitive wrapper objects.<br /><br />
  </div>
  </div>
</details>

---

### What two methods should we use to change the case of a string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The toLowerCase and toUpperCase methods.</div><br />
  <div><strong>Technical Response:</strong> There are two methods commonly used to change the case of a string. They include the toLowerCase() and toUpperCase() methods.<br />
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

### Explain the function and syntax of the string indexOf() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
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
  <div><strong>Interview Response:</strong> The most notable difference between indexOf and lastIndexOf methods is lastIndexOf starts at the end of the value getting evaluated to the front. It lists the occurrences in reverse order.
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

### Can you explain the potential negative outcome when using the indexOf method in an if statement?

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

### Explain the function and syntax of the string “includes” method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The string “includes” method tests for a match of a given value within a string. If a match gets found, it returns true. Otherwise, it returns false. The syntax provides an additional argument that specifies an index position where the search starts.
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

### Explain, the function and syntax of both string startsWith() and endsWith() methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The methods str.startsWith and str.endsWith do what they say.<br /><br />
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

### What are the three methods used to get a substring?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> - substring, substr, and slice methods.</div><br />
  <div><strong>Technical Response:</strong> There are 3 methods in JavaScript to get a substring, including the substring, substr, and slice methods.<br /><br />
  </div>
  </div>
</details>

---

### Explain the function and syntax of the string slice() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The string slice() method returns part of the string from the starting point to (but not including) the end. It accepts two arguments, including the start (required) and end points. If there is no second argument, then the slice goes to the end of the string. You can use a negative number to select from the end of the string.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'stringify';
alert(str.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
alert(str.slice(0, 1)); // 's', from 0 to 1, but not including 1, so only character at 0

let str = 'stringify';

// start at the 4th position from the right, end at the 1st from the right
alert(str.slice(-4, -1)); // 'gif'

let str = 'Hello world!';
alert(str.slice(-5)); // returns world!
```

  </div>
  </div>
</details>

---

### Explain the function and syntax of the string substring() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The string substring() method returns the part of the string between start and end. It accepts two arguments, including the start (required) and end points. This process is almost the same as slice, but it allows the start to be greater than the end. If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1, 4) == str.substring(4, 1). The substring() method (unlike slice) does not support negative arguments. They get treated as 0. The start position is required, and the end point, if omitted, it extracts the rest of the string.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> str.substring(start, end)<br /><br />

  <div></div>

```js
let str = 'stringify';

// these are same for substring
alert(str.substring(2, 6)); // "ring"
alert(str.substring(6, 2)); // "ring"

// ...but not for slice:
alert(str.slice(2, 6)); // "ring" (the same)
alert(str.slice(6, 2)); // "" (an empty string)
```

  </div>
  </div>
</details>

---

### Explain the function and syntax of the string substr() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters or length. To extract characters from the end of the string, use a negative start number (This does not work in IE 8 and earlier).
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

### Which one is the most flexible choice of the three substring methods (slice / substring / substr) in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Of the three variants, the slice is slightly more flexible. It allows negative arguments and seems to be shorter to write. So, it is enough to remember a slice of these three methods solely.
</div>
  </div>
</details>

---

### How are strings compared in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript strings are compared character-by-character in alphabetical order. JavaScript also compares each character by their UTF-16 numeric code, resulting in some odd outcomes.
</div>
  </div>
</details>

---

### Are lowercase letters greater than uppercase letters in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Lowercase letters are greater than uppercase letters in JavaScript because their UTF-16 numeric code compares them.
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
  <div><strong>Interview Response:</strong> We can use the charCodeAt and codePointAt methods to retrieve the UTF-16 numeric codes.</div><br />
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

### Is there a built-in method to compare diacritical characters in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the localeCompare method can get used to compare string values using diacritical characters.</div><br />
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
  <div><strong>Interview Response:</strong> Surrogate pairs because they have two 2-byte characters.</div><br />
  <div><strong>Technical Response:</strong> They are surrogate pairs because they have two 2-byte characters versus a normal or frequently used character that has a single 2-byte character. Since JavaScript's initial development pre-dates surrogate pairs, it was necessary to extend/encode rare symbols in two 2-byte forms. The length of such rare symbols is 2.<br />
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
  <div><strong>Interview Response:</strong> The fromCodePoint and codePointAt methods can retrieve and display the numeric code of surrogate pairs.
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
