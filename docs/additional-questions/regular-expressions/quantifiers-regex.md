---
title: Quantifiers
description: A quantifier is used to find the exact count in a sequence of digits. JavasScript Interview Questions and Answers
sidebar_position: 9
sidebar_label: Quantifiers
keywords:
  - quantifiers
  - regex quantifiers
  - regular expressions
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
  - quantifiers
  - regex quantifiers
  - regular expressions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/QuantifiersSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Quantifiers | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Quantifiers**

<CloseAllAnswers />

---

### What is a quantifier in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use a quantifier to find the exact count in a sequence of digits. For example, if we are looking for a sequence of numbers like 123-456. We can used \d&#123;3&#125; which will return 123,456.
    </div><br />
  <div><strong>Technical Response:</strong> In JavaScript Regex, a quantifier is a symbol or character that specifies how many times a certain element or group of elements in a pattern should be matched. Examples of quantifiers include the asterisk (*), which matches zero or more occurrences of the preceding element, and the plus sign (+), which matches one or more occurrences of the preceding element. Other quantifiers include the question mark (?), which matches zero or one occurrence of the preceding element, and the curly braces (&#123; &#125;), which can be used to specify a specific range of occurrences.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Sequence of digits
console.log("I'm 12345 years old".match(/\d{5}/)); //  "12345"

// Range of digits
console.log("I'm not 12, but 1234 years old".match(/\d{3,5}/)); // "1234"

// Omitting the upper range with \d{3,}
console.log("I'm not 12, but 345678 years old".match(/\d{3,}/)); // "345678"

// Implementation on a range and omitting the upper range
let str = '+7(903)-123-45-67';

let numbers = str.match(/\d{1,}/g);

console.log(numbers); // 7,903,123,45,67
```

  </div>
  </div>
</details>

---

### What does the '*' quantifier mean in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In regular expressions, the symbol (*) is known as the quantifier for "zero or more of the preceding character." To illustrate, the regular expression pattern /a*b/ can match any string that starts with "a" and ends with "b," regardless of the number of "a" characters present between them.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const regex = /ab*c/;

const strings = ['ac', 'bc', 'abc', 'abbbc', 'adc'];

for (const str of strings) {
  if (regex.test(str)) {
    console.log(`Match found: ${str}`);
  } else {
    console.log(`No match found: ${str}`);
  }
}
```

**Output:**

```bash
"Match found: ac"
"No match found: bc"
"Match found: abc"
"Match found: abbbc"
"No match found: adc"
```

  </div>
  </div>
</details>

---

### What does the '+' quantifier do in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript regex, the '+' quantifier is used to match one or more occurrences of the preceding element.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
const regex = /ab+c/;

const strings = ['ac', 'abc', 'abbbc', 'adc'];

for (const str of strings) {
  if (regex.test(str)) {
    console.log(`Match found: ${str}`);
  } else {
    console.log(`No match found: ${str}`);
  }
}
```

**Output:**

```
"No match found: ac"
"Match found: abc"
"Match found: abbbc"
"No match found: adc"
```

This demonstrates how the '+' quantifier behaves in JavaScript regex.

  </div>
  </div>
</details>

---

### What does the '?' quantifier mean in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Regex uses the question mark (?) quantifier to represent "zero or one of the preceding characters." For instance, the pattern /a?b/ matches any string that starts with "a" and ends with "b," with either no or one "a" in between.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

**JavaScript**

```js
const regex = /ab?c/;

const strings = ['ac', 'abc', 'abbc', 'adc'];

for (const str of strings) {
  if (regex.test(str)) {
    console.log(`Match found: ${str}`);
  } else {
    console.log(`No match found: ${str}`);
  }
}
```

When you run this code, you will see the following output:

```html
Match found: ac
Match found: abc
No match found: abbc
No match found: adc
```

  </div>
  </div>
</details>

---

### What does the &#123;n,&#125; quantifier mean in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The &#123;n,&#125; quantifier means 'n' or more occurrences of the preceding element. You can specify a specific number of occurrences in regex by using the curly braces (&#123; and &#125;) quantifier. For example, the regex pattern /a&#123;3&#125;b/ will match any string that begins with the letter "a" and ends with the letter "b," with exactly three letters "a" in between.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

**JavaScript:**

```js
const regex = /a{2,}b/;

const strings = ['ab', 'aab', 'aaab', 'aaaaab', 'ac'];

for (const str of strings) {
  if (regex.test(str)) {
    console.log(`Match found: ${str}`);
  } else {
    console.log(`No match found: ${str}`);
  }
}
```

When you run this code, you will see the following output:

```html
No match found: ab
Match found: aab
Match found: aaab
Match found: aaaaab
No match found: ac
```

  </div>
  </div>
</details>

---

### What does the &#123;n,m&#125; quantifier mean in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The &#123;n,m&#125; quantifier means between 'n' and 'm' occurrences (inclusive) of the preceding element.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

**JavaScript:**

```javascript
const regex = /a{2,4}b/;

const strings = ['ab', 'aab', 'aaab', 'aaaab', 'aaaaab', 'ac'];

for (const str of strings) {
  if (regex.test(str)) {
    console.log(`Match found: ${str}`);
  } else {
    console.log(`No match found: ${str}`);
  }
}
```

When you run this code, you will see the following output:

```html
No match found: ab
Match found: aab
Match found: aaab
Match found: aaaab
No match found: aaaaab
No match found: ac
```

This demonstrates how the `{n,m}` quantifier behaves in JavaScript regex by specifying a range for the number of occurrences of the preceding element.

  </div>
  </div>
</details>

---

### Can quantifiers be used with groups in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, quantifiers can be applied to groups, specifying the number of group occurrences to match.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let regex = /(abc)+/;
let string1 = 'abcabc';
let string2 = 'abca';

console.log(regex.test(string1)); // Outputs: true
console.log(regex.test(string2)); // Outputs: false
```

---

:::note
Remember that when you use quantifiers on groups, the entire group is affected, not just the last element in the group.
:::

  </div>
  </div>
</details>

---

### What is the difference between greedy and lazy quantifiers in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Quantifiers in regular expressions can be greedy or lazy (also known as reluctant). Greedy quantifiers match as many occurrences as possible, while lazy quantifiers match as few as possible.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let greedyRegex = /a.*b/;
let lazyRegex = /a.*?b/;

let string = 'acbdb';

console.log(string.match(greedyRegex)[0]); // Outputs: 'acbdb'
console.log(string.match(lazyRegex)[0]); // Outputs: 'acb'
```

In this example, the first regular expression `a.*b` is greedy. When it is used to match the string `'acbdb'`, it matches the entire string because the `.*` quantifier consumes as many characters as possible.

The second regular expression `a.*?b` is lazy because of the `?` after `.*`. When this regex is used to match the string `'acbdb'`, it matches the shortest possible string that starts with `'a'` and ends with `'b'`, which is `'acb'`.

  </div>
  </div>
</details>

---

### What is the difference between '+' and '* ' quantifiers in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In regular expressions (regex), the '+' quantifier matches the preceding element one or more times, while the '*' quantifier matches it zero or more times.
  </div><br />
  <div><strong className="codeExample">Consider the following code examples:</strong><br /><br />

  <div></div>

```javascript
let regexPlus = /a+/;
console.log(regexPlus.test('bbbb')); // Outputs: false
console.log(regexPlus.test('baaab')); // Outputs: true

let regexStar = /a*/;
console.log(regexStar.test('bbbb')); // Outputs: true, as * matches zero occurrences as well
console.log(regexStar.test('baaab')); // Outputs: true
```

In the example above, `a+` does not match 'bbbb' as there is no 'a' in it, while `a*` matches 'bbbb' as zero 'a' is also considered a match. Both `a+` and `a*` match 'baaab' because it contains one or more 'a'.

  </div>
  </div>
</details>

---

### Can we use quantifiers with character classes in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, quantifiers can be used with character classes in regex. They allow you to specify how many times a character or set of characters within the character class should be matched.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let regex = /[a-z]+/; // This will match one or more lowercase letters
let testString = "Hello World 123";
console.log(testString.match(regex)); // Outputs: ["ello"]

let regexDigits = /\d{2,4}/; // This will match between 2 and 4 digits
let testDigits = "1234 5678 90";
console.log(testDigits.match(regexDigits)); // Outputs: ["1234"]
```

In the first example, `[a-z]+` matches one or more lowercase letters in a row. In the test string "Hello World 123", it matches "ello", which is the first sequence of one or more lowercase letters.

In the second example, `\d{2,4}` matches between 2 and 4 digits in a row. In the test string "1234 5678 90", it matches "1234", which is the first sequence of between 2 and 4 digits.

  </div>
  </div>
</details>

---

### How do you represent 'n' or more occurrences in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To represent 'n' or more occurrences in regex, you can use the '&#123;n,&#125;' quantifier. It matches the preceding element 'n' or more times.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is an example where we want to match 2 or more occurrences of the character 'a'.

```javascript
let regex = /a{2,}/;

console.log(regex.test('a'));  // Outputs: false
console.log(regex.test('aa')); // Outputs: true
console.log(regex.test('aaa')); // Outputs: true
```

In the example above, 'a' is not a match because there is only one 'a'. However, 'aa' and 'aaa' are matches because they contain at least two 'a' characters.

You can also apply this to groups:

```javascript
let regex = /(abc){2,}/;

console.log(regex.test('abc'));  // Outputs: false
console.log(regex.test('abcabc')); // Outputs: true
console.log(regex.test('abcabcabc')); // Outputs: true
```

In this case, 'abc' is not a match because it appears only once. However, 'abcabc' and 'abcabcabc' are matches because they contain at least two occurrences of 'abc'.

  </div>
  </div>
</details>

---

### How does a non-greedy quantifier work in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A non-greedy quantifier in regex, denoted by adding a '?' after the quantifier, matches the shortest possible match instead of the default greedy behavior. It stops as soon as the next element in the pattern can be matched.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let greedyRegex = /a.*b/;
let lazyRegex = /a.*?b/;
let str = 'acbcb';

console.log(str.match(greedyRegex)[0]); // Outputs: 'acbcb'
console.log(str.match(lazyRegex)[0]); // Outputs: 'acb'
```

In this example:

- The greedy regular expression `a.*b` matches as many characters as possible between 'a' and 'b', so it matches the entire string 'acbcb'.
- The lazy regular expression `a.*?b` matches as few characters as possible between 'a' and 'b', so it only matches 'acb'. After finding the first 'b', it stops matching, even though there's another 'b' later in the string.

So, a non-greedy quantifier tries to find the smallest match. This can be very useful when you want to find multiple separate matches in a string, rather than a single combined match.

  </div>
  </div>
</details>

---

### How do you match exactly 'n' times of a certain character?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To match exactly n times of a certain character, you can use the &#123;n&#125; quantifier in regex. For example, the regex pattern /a&#123;3&#125;/ will match any string that contains exactly three a characters.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let regex = /a{3}/;

console.log(regex.test('aa'));  // Outputs: false
console.log(regex.test('aaa')); // Outputs: true
console.log(regex.test('aaaa')); // Outputs: true
```

In the example above, 'aa' is not a match because there are only two 'a' characters. However, 'aaa' and 'aaaa' are matches because they contain at least three 'a' characters. Note that in 'aaaa', it matches the first three 'a' characters and the fourth 'a' is not considered in the match.

You can also apply this to groups:

```javascript
let regex = /(abc){3}/;

console.log(regex.test('abcabc'));  // Outputs: false
console.log(regex.test('abcabcabc')); // Outputs: true
console.log(regex.test('abcabcabcabc')); // Outputs: true
```

In this case, 'abcabc' is not a match because 'abc' appears only twice. However, 'abcabcabc' and 'abcabcabcabc' are matches because they contain at least three occurrences of 'abc'. Note that in 'abcabcabcabc', it matches the first three 'abc' sequences and the fourth 'abc' is not considered in the match.

  </div>
  </div>
</details>

---

### Can you match a certain range of repetitions with Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To match exactly n times of a certain character, you can use the &#123;n&#125; quantifier in regex. For example, the regex pattern /a&#123;3&#125;/ will match any string that contains exactly three a characters.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a JavaScript code example demonstrating the use of regex with the '{min,max}' quantifier to match a certain range of repetitions:

```javascript
const regex = /a{2,4}/;
const testString = "aa, aaa, aaaa, aaaaa";

const matches = testString.match(regex);
console.log(matches); // Output: ["aa", "aaa", "aaaa"]
```

In this example, the regex pattern `/a{2,4}/` will match the letter 'a' repeated between 2 to 4 times. The `match()` method is used to find all matches in the `testString` and return them as an array. The resulting matches are then printed to the console.

  </div>
  </div>
</details>

---

### Is it possible to use quantifiers with special characters in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, quantifiers can be used with special characters, indicating how many times the special character should occur.
  </div><br />
  <div><strong>Technical Response:</strong> You can use quantifiers with special characters in JavaScript regular expressions. Special characters, when used in a regular expression, have special meanings. For instance, `\d` matches any digit, `.` matches any character except newline, `\s` matches any whitespace character, and so on.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here are some examples:

1. Match one or more digits:

   ```javascript
   let regex = /\d+/;
   console.log(regex.test('123')); // Outputs: true
   console.log(regex.test('abc')); // Outputs: false
   ```

2. Match zero or more whitespace characters:

   ```javascript
   let regex = /\s*/;
   console.log(regex.test('   ')); // Outputs: true
   console.log(regex.test('abc')); // Outputs: true
   ```

3. Match exactly 3 word characters (letters, digits, or underscores):

   ```javascript
   let regex = /\w{3}/;
   console.log(regex.test('abc')); // Outputs: true
   console.log(regex.test('ab')); // Outputs: false
   ```

Remember that if you want to use a character that is usually a special character in regex (like ., \, +, *, ?, ^, $, (, ), [, ], {, }, |, /) as a normal character to match in the string, you have to escape it using a backslash `\`.

For example, to match exactly three dollar signs, you would use `/\$\$\$/`.

  </div>
  </div>
</details>

---

### How can you make a character optional in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By using the '?' quantifier, you can make a character optional, meaning it could appear zero or one time.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let regex = /ab?c/;

console.log(regex.test('ac'));  // Outputs: true
console.log(regex.test('abc')); // Outputs: true
console.log(regex.test('abbc')); // Outputs: false
```

In the example above, the 'b' character is optional. The regular expression `ab?c` will match either 'ac' or 'abc', but not 'abbc' because it has two 'b' characters.

You can also make groups optional by placing the `?` after the group. For example:

```javascript
let regex = /(abc)?def/;

console.log(regex.test('def'));    // Outputs: true
console.log(regex.test('abcdef')); // Outputs: true
console.log(regex.test('abcabc')); // Outputs: false
```

In this example, the group 'abc' is optional. The regular expression `(abc)?def` will match either 'def' or 'abcdef', but not 'abcabc' because it doesn't contain 'def'.

  </div>
  </div>
</details>

---

### How do you make a quantifier lazy in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By adding a '?' after the quantifier, you can make it lazy. This makes it match as few occurrences as possible.
  </div><br />
  <div><strong>Technical Response:</strong> In JavaScript regular expressions, you can make a quantifier lazy (or non-greedy) by following it with a question mark `?`. This changes the matching behavior of the quantifier to match as few characters as possible, as opposed to a greedy quantifier which matches as many characters as possible.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example using the lazy `*?` quantifier...

```javascript
let regex = /a.*?b/;

console.log(regex.exec('acbdb')); // Outputs: ["acb"]
```

In the example above, `a.*?b` matches as few characters as possible between 'a' and 'b'. So it matches 'acb' in the string 'acbdb'.

You can also use `+?`, `??`, or `{n,m}?` to create lazy versions of the `+`, `?`, and `{n,m}` quantifiers, respectively. For example:

```javascript
let regex = /a.+?b/;

console.log(regex.exec('acbdb')); // Outputs: ["acb"]
```

In this example, `a.+?b` matches one or more characters as few as possible between 'a' and 'b'. So it matches 'acb' in the string 'acbdb'.

  </div>
  </div>
</details>

---

### Are there any shorthand alias quantifiers in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there are shorthand alias quantifiers: '*' for zero or more, '+' for one or more, and '?' for zero or one.
    </div><br />
  <div><strong>Technical Response:</strong> There are shorthands for most used quantifiers, like \d+ which looks for numbers and is a shorthand way for \d&#123;1,&#125;,. Quantifiers are often employed, and they are the fundamental "building block" of sophisticated regular expressions. Using shorthand aliases can help reduce the code necessary to implement an expression.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = '+7(903)-123-45-67';
console.log(str.match(/\d+/g)); // 7,903,123,45,67

let str = 'Should I write color or colour?';
console.log(str.match(/colou?r/g)); // color, colour

console.log('100 10 1'.match(/\d0*/g)); // 100, 10, 1

console.log('100 10 1'.match(/\d0+/g)); // 100, 10
// 1 not matched, as 0+ requires at least one zero
```

  </div>
  </div>
</details>

---
