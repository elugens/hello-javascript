---
title: Strings
sidebar_position: 3
---

# String Data Type

**Data Types: Strings**

<head>
  <title>String Data Type - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### In JavaScript, is there a data type for a single character?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, JavaScript represents all text as a string. There is no separate type for a single character.
</div>
  </div>
</details>

---

### What type of internal character encoding does JavaScript always use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The internal format for strings is always UTF-16, it is not tied to the page encoding.
</div>
  </div>
</details>

---

### What are the three types of quotes used to enclose strings in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Strings can be enclosed within either single quotes, double quotes or back-ticks.
</div>
  </div>
</details>

Code Example:

```js
let single = 'single-quoted';

let double = 'double-quoted';

let backticks = `backticks`;
```

---

### Can you explain the difference between single quotes, double quotes, and back-ticks?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Single and double quotes are essentially the same.</div><br />
  <div><strong>Technical Response:</strong> Single and double quotes are essentially the same. Back-ticks, however, allow us to embed any expression into the string, by wrapping it in $&#123;…&#125; . Another advantage of using back-ticks is that they allow a string to span multiple lines.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
function sum(a, b) {

    return a + b;

}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// spanning multiple lines

let guestList = `Guests:

* John

* Pete

* Mary

`;

alert(guestList); // a list of guests, multiple lines

// this will result in an error with single or double quotes

let guestList = "Guests: // Error: Unexpected token ILLEGAL

    * John";
```

---

### Is it possible to create a multiline string with single or double quotes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can create multi-line strings using the new line character for line breaks.</div><br />
  <div><strong>Technical Response:</strong> Yes, it is still possible to create multiline strings with single and double quotes by using a so-called “newline character”, written as \n, which denotes a line break.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
let guestList = 'Guests:\n * John\n * Pete\n * Mary';

alert(guestList); // a multiline list of guests

//////////////////////////////////////////////

// Example, these two lines are equal, just written differently:

let str1 = 'Hello\nWorld'; // two lines using a "newline symbol"
// two lines using a normal newline and back-ticks

let str2 = `Hello

World`;

alert(str1 == str2); // true
```

---

### What is the common characteristic of all special characters in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> All special characters start with a backslash character known as the escape character.</div><br />
  <div><strong>Technical Response:</strong> All special characters start with a backslash character \. It is also called an “escape character”. We might also use it if we wanted to insert a quote into the string.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
alert("I'm the Walrus!"); // I'm the Walrus!
// Ways to avoid the need to prepend the inner quote

alert(`I'm the Walrus!`); // I'm the Walrus!
// Example if you need to show the backslash...

alert(`The backslash: \\`); // The backslash: \
```

---

### Is length a property or a function in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> length is property that returns the length of string or an array.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, length is a property and will result in an error if you try to invoke it as a function. People with a background in some other languages sometimes mistype by calling str.length() instead of just str.length. Length is a numeric property, and it is not necessary to add the parentheses.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
alert(`Hello`.length); // 5
```

---

### When you are accessing string characters at a specific position. What is the difference between accessing it with square brackets and the charAt() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Square brackets returns undefined and charAt will return a string.</div><br />
  <div><strong>Technical Response:</strong> The square brackets are a modern way of getting a character, while charAt exists mostly for historical reasons. The only difference between them is that if no character is found, [] returns undefined, and charAt returns an empty string.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
let str = `Hello`;

alert(str[1000]); // undefined
alert(str.charAt(1000)); // '' (an empty string)
// We can also iterate over characters using for..of:

for (let char of 'Hello') {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}
```

---

### Are strings mutable or immutable in JavaScript and why?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Strings are primitive values making the immutable.</div><br />
  <div><strong>Technical Response:</strong> Strings are immutable in JavaScript and cannot be changed because they are primitive values. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value cannot be changed in the ways that objects, arrays, and functions can be altered.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
// Using a string method doesn't mutate the string

var bar = 'baz';

console.log(bar); // baz
bar.toUpperCase();

console.log(bar); // baz
// Using an array method mutates the array

var foo = [];

console.log(foo); // []
foo.push('plugh');

console.log(foo); // ["plugh"]
// Assignment gives the primitive a new (not a mutated) value

bar = bar.toUpperCase(); // BAZ
```

---

### Name the five primitive wrapper objects in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> String, Symbol, BigInt, Boolean, and Number primitive wrapper objects.</div><br />
  <div><strong>Technical Response:</strong> Except for null and undefined, all primitive values have object equivalents that wrap around the primitive values. The five wrapper objects include string, number, bigint, Boolean, and symbol primitive wrapper objects.<br /><br />
  </div>
  </div>
</details>

---

### What two methods are used to change the case of string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The toLowerCase and toUpperCase methods.</div><br />
  <div><strong>Technical Response:</strong> There are two methods commonly used to change the case of a string. They include the toLowerCase() and toUpperCase() methods.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
alert('Interface'.toUpperCase()); // INTERFACE
alert('Interface'.toLowerCase()); // interface
// Or, if we want a single character lower cased

alert('Interface'[0].toLowerCase()); // 'i'
```

---

### Explain, the function and syntax of the string indexOf() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The string indexOf() method looks for the substring within a string, starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found. The optional second parameter allows us to start searching from a given position. Otherwise, it defaults to the zero-index position.
</div>
  </div>
</details>

:::note

The indexOf() method cannot take powerful search values (regular expressions) like the search method. It should be noted, the indexOf search is case-sensitive.

:::

Code Example:

```js
let str = 'Widget with id';

alert(str.indexOf('Widget')); // 0, because 'Widget' is found at the beginning
alert(str.indexOf('widget')); // -1, not found, the search is case-sensitive
alert(str.indexOf('id')); // 1, "id" is found at position 1 (..idget with id)
// Running indexOf in a LOOP

let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it
let pos = 0;

while (true) {
  let foundPos = str.indexOf(target, pos);

  if (foundPos == -1) break;

  alert(`Found at ${foundPos}`);

  pos = foundPos + 1; // continue the search from the next position
}
```

:::note

The indexOf() method is case sensitive.

:::

---

### What is the difference between the string indexOf and lastIndexOf methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most notable difference between indexOf and lastIndexOf methods is that lastIndexOf starts at the end of the value being evaluated to the front. It lists the occurrences in reverse order.
</div>
  </div>
</details>

Code Example: lastIndexOf()

```js
const paragraph =
  'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';

console.log(
  `The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(
    searchTerm
  )}`
);

// expected output: "The index of the first "dog" from the end is 52"
```

---

### What is the difference between the string indexOf and search methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The search method cannot take a second start position argument, but it does accept regular expressions. The indexOf method does not accept regular expressions.</div><br />
  <div><strong>Technical Response:</strong> Although, indexOf and search methods are similar. They are not equal and have some notable differences. The search() method cannot take a second start position argument, but it does accept regular expressions. The indexOf() method cannot take powerful search values (regular expressions).<br /><br />
  </div>
  </div>
</details>

---

### Can you explain the potential negative outcome when using the indexOf method in an if statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Returning a zero-index value in an if statement can result in false zero value. The if statement will erroneously return false based in the index zero value.</div><br />
  <div><strong>Technical Response:</strong> The potential negative outcome is relative to returning zero as the index occurrence. The if statement will not work properly and return a false zero value. This is a bit of inconvenience and can be fixed using an extended value check on the zero value!<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
let str = 'Widget with id';

if (str.indexOf('Widget')) {
  alert('We found it'); // doesn't work!
}

// Quick Fix: Use a -1 check

let str = 'Widget with id';

if (str.indexOf('Widget') != -1) {
  alert('We found it'); // works now!
}
```

---

### What is a common trick to convert a number to a 32-bit integer?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The bitwise NOT ~ operator can be used to convert a number to a 32-bit integer, it removes the decimal part if they exist, and then reverses all bits in its binary representation.</div><br />
  <div><strong>Technical Response:</strong> One of the old tricks used here is the bitwise NOT ~ operator. It converts the number to a 32-bit integer (removes the decimal part if exists) and then reverses all bits in its binary representation. In practice, that means a simple thing: for 32-bit integers ~n equals -(n+1).<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
alert(~2); // -3, the same as -(2+1)
alert(~1); // -2, the same as -(1+1)
alert(~0); // -1, the same as -(0+1)
alert(~-1); // 0, the same as -(-1+1)
```

---

### Can you use the Bitwise (~) Not to ensure that a call on the indexOf method acts in the intend fashion in an if statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the bitwise not operator ensures that any occurrence at the zero-index returns true if that is the intended result, because a result of zero in an if statement returns false and the if statement will not work.
</div>
  </div>
</details>

```js
let str = 'Widget';

if (~str.indexOf('Widget')) {
  alert('Found it!'); // works
}
```

---

### Explain, the function and syntax of the string “includes” method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The string “includes” method tests for a match of given value within a string. If a match is found it returns true, otherwise it returns false. The syntax provides an additional argument that specifies an index position where the search will start.
</div>
  </div>
</details>

Code Example:

```js
alert('Widget with id'.includes('Widget')); // true
alert('Hello'.includes('Bye')); // false
// The optional second argument:

alert('Widget'.includes('id')); // true
alert('Widget'.includes('id', 3)); // false, from position 3 there is no "id"
```

:::note

The includes() method is case sensitive.

:::

---

### Explain, the function and syntax of the both string startsWith() and endsWith() methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The methods str.startsWith and str.endsWith do exactly what they say.<br /><br />
  The startsWith() method determines whether a string begins with the characters of a specified string. This method returns true if the string begins with the characters, and false if not. The startsWith() method accepts two arguments search value and start position. By default the start position is set to zero (0).<br /><br />
  The endsWith() method determines whether a string ends with the characters of a specified string. This method returns true if the string ends with the characters, and false if not. The endsWith() method accepts two arguments search value and length. If omitted, the default value is the length of the string.
  <br /><br />
</div>
  </div>
</details>

Code Example:

```js
// startsWith() Method

var str1 = 'Hello world, welcome to the universe.';

var n = str1.startsWith('world', 6);

console.log(n); // returns true
// endsWith() Method

var str2 = 'Hello world, welcome to the universe.';

var o = str2.endsWith('world', 11);

console.log(o); // returns true
```

:::note

Both the startsWith() and endsWith() methods are case sensitive.

:::

---

### What are the three methods used to get a substring?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> - substring, substr and slice methods.</div><br />
  <div><strong>Technical Response:</strong> There are 3 methods in JavaScript to get a substring including the substring, substr and slice methods.<br /><br />
  </div>
  </div>
</details>

---

### Explain, the function and syntax of string slice() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The string slice() method returns part of string from the starting point to (but not including) the end. It accepts two arguments including the start (required) and end points. If there is no second argument, then slice goes till the end of the string. You can use a negative number to select from the end of the string.
</div>
  </div>
</details>

Code Example:

```js
let str = 'stringify';

alert(str.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
alert(str.slice(0, 1)); // 's', from 0 to 1, but not including 1, so only character at 0
let str = 'stringify';

// start at the 4th position from the right, end at the 1st from the right

alert(str.slice(-4, -1)); // 'gif'
let str = 'Hello world!';
alert(str.slice(-5)); // returns world!
```

---

### Explain, the function and syntax of string substring() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The string substring() method returns the part of the string between start and end. It accepts two arguments including the start (required) and end points. This is almost the same as slice, but it allows start to be greater than end. If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1, 4) == str.substring(4, 1). Negative arguments are (unlike slice) not supported, they are treated as 0. The start position is required and the end point if omitted, it extracts the rest of the string.
</div>
  </div>
</details>

**Syntax:** str.substring(start, end)

Code Example:

```js
let str = 'stringify';

// these are same for substring

alert(str.substring(2, 6)); // "ring"
alert(str.substring(6, 2)); // "ring"
// ...but not for slice:

alert(str.slice(2, 6)); // "ring" (the same)
alert(str.slice(6, 2)); // "" (an empty string)
```

---

### Explain, the function and syntax of string substr() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters or length. To extract characters from the end of the string, use a negative start number (This does not work in IE 8 and earlier).
</div>
  </div>
</details>

Code Example:

```js
let str = 'stringify';

alert(str.substr(2, 4)); // 'ring', from the 2nd position get 4 characters
// The first argument may be negative, to count from the end:

let str = 'stringify';

alert(str.substr(-4, 2)); // 'gi', from the 4th position get 2 characters
```

:::note

The substr() method does not change the original string.

:::

---

### What is the minor drawback to using the string substr() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The substr() method may not work in some non-browser environments. It is described not in the core JavaScript specification, but in Annex B, which covers browser-only features that exist mainly for historical reasons.
</div>
  </div>
</details>

Code Example:

```js
let str = 'stringify';

alert(str.substr(2, 4)); // 'ring', from the 2nd position get 4 characters
// The first argument may be negative, to count from the end:

let str = 'stringify';

alert(str.substr(-4, 2)); // 'gi', from the 4th position get 2 characters
```

:::note

The substr() method does not change the original string.

:::

---

### Of the three substring methods (slice / substring / substr) in JavaScript, which one is the most flexible choice?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Of the three variants, slice is a little bit more flexible, it allows negative arguments and seems to be shorter to write. So, it is enough to remember solely slice of these three methods.
</div>
  </div>
</details>

---

### How are strings compared in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript strings are compared character-by-character in alphabetical order. JavaScript also compares each character by their UTF-16 numeric code which can result in some odd outcomes.
</div>
  </div>
</details>

---

### Are lowercase letters greater than uppercase letters in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Lowercase letters are greater than uppercase letters in JavaScript because they are compared by their UTF-16 numeric code.
</div>
  </div>
</details>

```js
alert('a' > 'Z'); // true a = 97, Z = 90, so 97 is greater than 90
```

---

### Are there any special methods that can get the UTF-16 number code of a character in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use the charCodeAt and codePointAt methods to retrieve the UTF-16 numeric codes.</div><br />
  <div><strong>Technical Response:</strong> Yes, there are several special methods that can get the numeric code of a specific character. They include the charCodeAt and codePointAt methods. Notably, the codePointAt method may require a polyfill in older browsers.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
// different case letters have different codes

alert('z'.codePointAt(0)); // numeric code: 122
alert('Z'.charCodeAt(0)); // numeric code: 90
```

---

### Is there a built-in method that is used to compare diacritical characters in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the localeCompare method can be used to compare string values using diacritical characters.</div><br />
  <div><strong>Technical Response:</strong> Yes, the localeCompare method can be used to compare string values using diacritical characters. The outcome is proper sorting and filtering of string values. The call localeCompare returns an integer indicating whether a string is less, equal, or greater than comparative string according to the language rules. localCompare returns a negative number if the string is less than comparative string, returns a positive number if string is greater than comparative string, or returns 0 if they are equivalent.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
alert('Österreich'.localeCompare('Zealand')); // -1
```

---

### What are rare symbols encoded with a pair of 2-byte characters called?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Surrogate pairs because they have two 2-byte characters.</div><br />
  <div><strong>Technical Response:</strong> They are called surrogate pairs because they have two 2-byte characters versus a normal or frequently used character that has a single 2-byte character. Since JavaScript was created prior to the creation of surrogate pairs it was necessary to extend/encode rare symbols in two 2-byte form. The length of such rare symbols is 2.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
alert('𝒳'.length); // 2, MATHEMATICAL SCRIPT CAPITAL X
alert('😂'.length); // 2, FACE WITH TEARS OF JOY
alert('𩷶'.length); // 2, a rare Chinese hieroglyph
```

---

### What is the modern method that can return the numeric code of surrogate pairs?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The fromCodePoint and codePointAt methods that can retrieve and display the numeric code of surrogate pairs.
</div>
  </div>
</details>

Code Example:

```js
let str = '𝒳';

let surgPair = str.codePointAt(0);

console.log(surgPair); // returns 119987
```

---
