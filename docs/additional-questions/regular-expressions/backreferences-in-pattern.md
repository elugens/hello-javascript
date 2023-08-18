---
title: Backreference Pattern
description: A backreference in a regular expression identifies a previously matched group and looks for the same text again. Regular Expressions Interview Questions
sidebar_position: 12
sidebar_label: Backreferences
keywords:
  - backreferences in patterns
  - regexp backreferences
  - backreference in a regular expressions
  - regular expressions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - interview questions
  - interview answers
  - js
tags:
  - backrefernces in patterns
  - regexp backreferences
  - backreference in a regular expressions
  - regular expressions
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/BackReferenceSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Backreference Pattern | Regular Expressions Questions</title>
</head>

**Regular Expressions: Backreference Pattern**

---

<AdSense />

---

<CloseAllAnswers />

### What is backreferencing in regular JavaScript expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Backreferencing in JavaScript regular expressions involves using a backslash followed by a digit (e.g., \1) to refer to the contents matched by a capturing group.
    </div><br />
  <div><strong>Technical Response:</strong> When matching string patterns using regular expressions, we might wish to match the same piece of text more than once. When the pattern used to perform the first match includes non-literal elements, we can look for the repeated text using a backreference. A backreference in a regular expression identifies a previously matched group and looks for the exact text again.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Backreference by number: \N
let str = `He said: "She's the one!" "She's the one!".`;

let regexp = /(['"])(.*?)\1/g;

console.log(str.match(regexp)); // "She's the one!"

// Backreference by name: \k<name>
let str = `He said: "She's the one!".`;

let regexp = /(?<quote>['"])(.*?)\k<quote>/g;

console.log(str.match(regexp)); // "She's the one!"
```

  </div>
  </div>
</details>

---

### How many backreferences can a single regular expression have?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A single JavaScript regular expression can have unlimited backreferences, constrained only by the system's resources and performance considerations.
  </div><br />
  <div><strong>Technical Response:</strong> A single regular expression in JavaScript can have as many backreferences as there are capturing groups. A capturing group is created by enclosing part of the regular expression in parentheses `()`. A backreference to this group can be used later in the regular expression with `\1`, `\2`, etc., where the number corresponds to the group number. The maximum number of backreferences is theoretically unlimited, as long as the system resources permit.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple JavaScript example with three backreferences...

```javascript
let str = "The fat cat sat on the hat.";
let regex = /(\b\w{3}\b).*?(\b\w{3}\b).*?(\b\w{3}\b)/;
let match = regex.exec(str);

if (match != null) {
    console.log(`Entire match: ${match[0]}`); // The fat cat sat
    console.log(`Match 1: ${match[1]}`); // fat
    console.log(`Match 2: ${match[2]}`); // cat
    console.log(`Match 3: ${match[3]}`); // sat
}
```

In this code, the regex `(\b\w{3}\b).*?(\b\w{3}\b).*?(\b\w{3}\b)` contains three capturing groups, each capturing a 3-letter word in the string. The `match` array will contain the entire match at index 0 and each group match at subsequent indices.

Remember, the backreference within the same regular expression should be in the form of `\1`, `\2`, `\3`, etc. But when used in the replacement string of the `String.prototype.replace()` function, you should use `$1`, `$2`, `$3`, etc., instead.

```javascript
let str = "abc123def456";
let regex = /(\d+)/g;
let newStr = str.replace(regex, '$1$1'); // "abc123123def456456"

console.log(newStr);
```

In this code, the regex `(\d+)` captures one or more digits as a group, and the `replace()` function uses `$1$1` to replace each match with the match followed by itself. So `"abc123def456"` becomes `"abc123123def456456"`.

---

:::note
Note that the actual number of backreferences supported may vary depending on the JavaScript engine you are using.
:::

  </div>
  </div>
</details>

---

### What is the use of backreferences in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, backreferences in regular expressions are used to refer back to previously captured groups, enabling pattern reuse, complex matching, and sophisticated string replacement operations.
  </div>
  </div>
</details>

---

### Can we backreference within the same regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, in JavaScript, we can use backreferences within the same regular expression to refer back to previously captured groups, enabling us to match repeated or patterned content.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "Hello hello";
let regex = /(\b\w+\b)\s+\1/;
let match = regex.exec(str);

if (match != null) {
    console.log(`Matched repeated word: ${match[0]}`); // Hello hello
}
```

In this example, `(\b\w+\b)` is a capturing group that matches a word. `\1` is a backreference that matches the exact same content as in the first group. So the regex matches a word followed by one or more spaces followed by the same word, hence it detects repeated words.

  </div>
  </div>
</details>

---

### How are backreferences numbered in a regex pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Backreferences are numbered based on the order of opening parentheses of capture groups, starting from 1.
  </div>
  </div>
</details>

---

### Can we use backreferences in the replacement part of a regex replace operation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, in JavaScript, you can use backreferences in the replacement part of a regex replace operation. The backreferences are denoted by `$1`, `$2`, etc., where the number corresponds to the group number.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example:

```javascript
let str = "abc 123";
let regex = /(\w+)\s+(\d+)/;
let newStr = str.replace(regex, '$2 $1');

console.log(newStr); // "123 abc"
```

In this code, `(\w+)` and `(\d+)` are capturing groups that match a word and a number, respectively. In the `replace()` function, `$2` and `$1` are backreferences that refer to the second and first group, respectively. So the function swaps the word and the number in the string.

  </div>
  </div>
</details>

---

### How does the performance of a regular expression change when using backreferences?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The use of backreferences can slow down regex execution due to additional matching complexity.
  </div>
  </div>
</details>

---

### How does regex treat unmatched backreferences?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An unmatched backreference is usually treated as a failed match in regular expressions.
  </div>
  </div>
</details>

---

### Can nested capture groups be backreferenced in a regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, in JavaScript, nested capturing groups can be backreferenced in a regular expression. The groups are numbered from left to right based on the position of their opening parentheses, and backreferences can use those numbers.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "abc abc cba";
let regex = /((\b\w{3}\b)\s+\2)\s+\1/;
let match = regex.exec(str);

if (match != null) {
    console.log(`Matched string: ${match[0]}`); // abc abc abc abc
}
```

In this example, `(\b\w{3}\b)` is a capturing group (group 2) that matches a 3-letter word. The outer group `((\b\w{3}\b)\s+\2)` (group 1) matches a 3-letter word followed by a space and the same word again. The backreference `\1` refers to the entire group 1, so the regex matches the same two words four times in a row.

  </div>
  </div>
</details>

---

### Are backreferences always supported in all regex flavors?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, not all regex flavors support backreferences. It's important to refer to the documentation of the specific tool or language.
  </div><br />
  <div><strong>Technical Details:</strong> Backreferences are common in many popular regex implementations, including those in JavaScript, Python, Perl, and Java, there are others that do not support them.
  </div><br />
  <div><strong className="codeExample">Backreference Support:</strong><br /><br />

  <div></div>

Here is a simple comparison table of backreference support in various regular expression engines.

| Regex Engine/Flavor | Backreference Support |
| --- | --- |
| JavaScript | Yes |
| Python | Yes |
| Perl | Yes |
| Java | Yes |
| .NET | Yes |
| PHP (PCRE) | Yes |
| Ruby | Yes |
| POSIX ERE | No |
| RE2 (Google) | No |
| Go (standard library) | No |

Again, some engines may support backreferences but with certain limitations or variations, so always check the documentation specific to your use case.

---

:::note
Please note that this information is accurate as of March 2021. For the most accurate and up-to-date information, refer to the official documentation for each engine.
:::
  </div>
  </div>
</details>

---

### Can a backreference pattern match more than one string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a backreference pattern can match more than one string depending on the input. However, within a single match operation, a backreference refers to exactly what was captured by the group in that operation.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "cat bat cat bat";
let regex = /(\b\w{3}\b)\s+\1/g;
let match;

while ((match = regex.exec(str)) != null) {
    console.log(`Matched pair: ${match[0]}`); 
}
```

In this case, the `(\b\w{3}\b)` capturing group matches a 3-letter word, and `\1` backreference matches the same word again. So the regex matches repeated words.

In the string "cat bat cat bat", it will first match "cat cat", and in the next iteration, it will match "bat bat". So while the backreference matched different strings ("cat" and "bat") in different match operations, within each operation it matched the same string.

  </div>
  </div>
</details>

---

### How does the backreference pattern help in data validation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Backreference patterns can ensure consistency within a match, useful for tasks like validating mirrored strings or repeated patterns.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let dateStr = "01-01-2023";
let regex = /^(\d{2})-\1-\d{4}$/;
let isValid = regex.test(dateStr);
console.log(isValid); // true
```

Here, `(\d{2})` is a capturing group that matches two digits. The backreference `\1` ensures that the day part of the date is the same as the month part. The `test()` method returns `true` if the string matches the regular expression.

This is just one of many possible examples. In general, backreferences can help validate a wide range of patterned data, such as repeated words, mirrored strings, certain structured data formats, and more.

  </div>
  </div>
</details>

---

### How does the regex engine handle multiple backreference patterns in the same expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The regex engine handles them sequentially, according to their numerical order starting from the first capture group.
  </div>
  </div>
</details>

---

### Can a backreference pattern be used to match repeating words or characters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, backreferences in regular expressions are commonly used to match repeating words or characters in a string. They refer to the captured groups within the same regular expression and help identify repeated or patterned substrings.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is an example that uses a backreference to match a word that appears twice in a row.

```javascript
let str = "cat cat are cute";
let regex = /(\b\w+\b)\s+\1/;
let match = regex.exec(str);

if (match != null) {
    console.log(`Matched repeated word: ${match[0]}`); // cat cat
}
```

In this example, `(\b\w+\b)` is a capturing group that matches a word, and `\1` is a backreference that matches the same word again. Thus, the regular expression matches any word followed by one or more spaces and the same word, which detects repeated words.

Similarly, you can match repeated characters:

```javascript
let str = "Helloo World!";
let regex = /(\w)\1/;
let match = regex.exec(str);

if (match != null) {
    console.log(`Matched repeated character: ${match[0]}`); // oo
}
```

In this example, `(\w)` is a capturing group that matches a word character, and `\1` is a backreference that matches the same character again. Thus, the regular expression matches any character followed by the same character, which detects repeated characters.

  </div>
  </div>
</details>

---

### How is a backreference pattern affected if the group it refers to does not participate in the match?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the referred group doesn't participate in the match, the backreference fails to match anything.
  </div>
  </div>
</details>

---

### Is it possible to use a backreference pattern within a character class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, backreferences within a character class are generally not supported, as it would lead to ambiguity in matching.
  </div><br />
  <div><strong>Technical Response:</strong> No, backreferences cannot be used inside a character class in JavaScript's regular expression engine, or most other engines for that matter. In a regular expression, a character class `[]` matches any one character enclosed within the brackets. If you attempt to include a backreference within a character class, it will not be interpreted as a backreference. Instead, the engine will interpret it as an attempt to match the literal characters.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

In the following example, the `\1` within the character class is not treated as a backreference:

```javascript
let str = "aa";
let regex = /(a)[\1]/;  // This does not work as intended
let match = regex.exec(str);

if (match != null) {
    console.log(`Match: ${match[0]}`); // Does not print 'aa'
} else {
    console.log('No match'); // Prints 'No match'
}
```

In this case, the regular expression does not match 'aa' because `[\1]` is interpreted as attempting to match the characters '\' or '1', not as a backreference to the first capturing group.

  </div>
  </div>
</details>

---

### Can a backreference pattern be used in a lookahead or lookbehind assertion?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, backreferences can be used in lookahead and lookbehind assertions, referencing a group earlier in the pattern.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "123abc123";
let regex = /(\d+)(?=\D+\1)/;
let match = regex.exec(str);

if (match != null) {
    console.log(`Match: ${match[0]}`); // 123
}
```

In this example, `(\d+)` is a capturing group that matches one or more digits, and `(?=\D+\1)` is a positive lookahead that asserts that these digits must be followed by one or more non-digit characters and then the same digits again.

Backreferences can be used in lookbehinds as well, but as of March 2021, lookbehinds are not fully supported across all browsers. Here's an example:

```javascript
let str = "abc123abc123";
let regex = /(?<=\D+(\d+))\D+\1/;
let match = regex.exec(str);

if (match != null) {
    console.log(`Match: ${match[0]}`); // abc123
}
```

In this example, `(?<=\D+(\d+))` is a positive lookbehind that asserts that the match must be preceded by one or more non-digit characters and one or more digits, and `\D+\1` matches one or more non-digit characters followed by the same digits. So the entire regex matches a string where a number is repeated with non-digit characters in between.

  </div>
  </div>
</details>

---

### How does a regex engine treat a backreference pattern if the referred capture group matches an empty string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the referred capturing group in a backreference matches an empty string, the regex engine treats the backreference as a match for an empty string as well.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "abc";
let regex = /(b?)(a)\1c/;
let match = regex.exec(str);

if (match != null) {
    console.log(`Match: ${match[0]}`); // abc
}
```

In this regular expression, `(b?)` is a capturing group that matches zero or one 'b'. The 'b' is optional due to the question mark `?`, so it could match an empty string. In the string "abc", `(a)\1` matches 'a' followed by an empty string, because the backreference `\1` refers to the first capturing group which matches an empty string (since there's no 'b' before 'a' in "abc"). Thus, the entire regular expression matches "abc".

  </div>
  </div>
</details>

---

### What is a conditional backreference pattern in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A conditional backreference is a pattern that matches one thing if the backreference is valid (if the group it references has participated in the match), and another thing if it isn't. This feature is common in some regular expression flavors like Perl, Python, and .NET. However, as of March 2021, <strong>JavaScript does not natively support conditional backreferences</strong> in regular expressions.
  </div><br />
  <div><strong className="codeExample">Additional Details:</strong><br /><br />

  <div></div>

Even though JavaScript does not directly support conditional backreferences, you can often achieve similar functionality by using multiple regular expressions and controlling the logic with JavaScript code.

For up-to-date information, always refer to the official JavaScript or ECMAScript documentation or reliable sources that keep track of the evolving JavaScript language specifications.

  </div>
  <div><strong className="codeExample">Here's an example of using JavaScript code to conditionally handle regex matches.</strong><br /><br />

  <div></div>

Suppose we want to match strings of the format "abc" or "a(bc)", and we want to capture the "bc" part only if it's in parentheses. This is essentially a conditional backreference behavior.

We can achieve this by using two separate regular expressions and controlling the logic using JavaScript:

```javascript
let str1 = "abc";
let str2 = "a(bc)";

let regex1 = /^a(bc)$/;
let regex2 = /^abc$/;

if (regex1.test(str1)) {
    let match = regex1.exec(str1);
    console.log(`Group: ${match[1]}`); // Does not print anything as there's no match
} else if (regex2.test(str1)) {
    console.log(`Matched: ${str1}, but no group`); // Matched: abc, but no group
}

if (regex1.test(str2)) {
    let match = regex1.exec(str2);
    console.log(`Group: ${match[1]}`); // Group: bc
} else if (regex2.test(str2)) {
    console.log(`Matched: ${str2}, but no group`); // Does not print anything as there's no match
}
```

In this example, we use two regular expressions: `regex1` captures "bc" if it's within parentheses, and `regex2` matches "abc" but doesn't capture anything. We first check `regex1`, and if there's no match, we check `regex2`. This way, we essentially conditionally capture the "bc" part.

  </div>
  </div>
</details>

---
