---
title: Lookahead / Lookbehind
description: The lookahead approach involves in catching a match based on a proceeding character or digit.
sidebar_position: 14
sidebar_label: Lookahead / Lookbehind
keywords:
  - lookahead
  - lookbehind
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
  - lookahead
  - lookbehind
  - regular expressions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/LookaheadSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Lookahead / Lookbehind | Regular Expressions</title>
</head>

**Regular Expressions: Lookahead / Lookbehind**

<CloseAllAnswers />

---

### What is Lookahead in JavaScript regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Lookahead assertions are a type of zero-width assertion in JavaScript's regular expression (regex) syntax that "look ahead" from the current position in the string to see if the upcoming characters match a certain pattern. They do not consume characters in the string, but only assert whether a match is possible or not.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

There are two types of lookahead assertions: positive and negative. A positive lookahead `(?=...)` asserts that the given sub-pattern can be matched ahead, while a negative lookahead `(?!...)` asserts that the given sub-pattern cannot be matched ahead.

Here is an example of using positive and negative lookaheads in JavaScript:

```javascript
let password = "password1234";

// Positive Lookahead: Ensure the password has at least one digit
let regex1 = /(?=\d)/;
console.log(regex1.test(password)); // Returns true

// Negative Lookahead: Ensure the password does not contain the word "password"
let regex2 = /(?!password)/;
console.log(regex2.test(password)); // Returns false
```

In the first regex, the positive lookahead `(?=\d)` checks if there's at least one digit in the password. It returns `true` because "password1234" does indeed contain digits.

In the second regex, the negative lookahead `(?!password)` checks if the string does not contain the word "password". It returns `false` because "password1234" does contain the word "password".

Do note that in many practical uses, lookaheads are used in conjunction with other parts of the pattern. For example, if you want to ensure a password is at least 8 characters long, contains a number, a lowercase and an uppercase letter, you would use lookaheads like so:

```javascript
let password = "Password123";
let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
console.log(regex.test(password)); // Returns true
```

This regular expression can be broken down as follows:

`(?=.*[a-z])`: There is at least one lowercase letter

`(?=.*[A-Z])`: There is at least one uppercase letter

`(?=.*\d)`: There is at least one digit

`[a-zA-Z\d]{8,}`: The string is at least 8 characters long

  </div>
  </div>

</details>

---

### Can you explain positive lookahead?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Positive lookahead in JavaScript Regex allows you to specify a condition that a certain pattern ahead must match for a match to be successful without including that pattern in the overall matched text.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a basic example:

```javascript
let str = "hello123";

// Positive lookahead to see if '123' comes after 'hello'
let regex = /hello(?=123)/;

console.log(regex.test(str)); // Outputs: true
```

In this example, `/hello(?=123)/` will match 'hello' only if 'hello' is followed by '123'. However, '123' is not part of the overall regex match.

You can use positive lookaheads for more complex requirements. For example, let's use it to check if a password string contains at least one digit, one lowercase letter, one uppercase letter, and one special character:

```javascript
let password = "Hello$123";

// Use positive lookaheads to check password requirements
let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

console.log(regex.test(password)); // Outputs: true
```

In this regex:

- `(?=.*[0-9])` checks for at least one digit
- `(?=.*[a-z])` checks for at least one lowercase letter
- `(?=.*[A-Z])` checks for at least one uppercase letter
- `(?=.*[@$!%*?&])` checks for at least one special character
- `[A-Za-z\d@$!%*?&]{8,}` ensures the password is at least 8 characters long

This password passes all checks, so `regex.test(password)` returns `true`. If you change the password so it doesn't meet all requirements, it would return `false`.

  </div>
  </div>
</details>

---

### What's a negative lookahead?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Negative lookahead in JavaScript regular expressions is a pattern that matches only if the following characters do not match a given pattern. It's written as `(?!...)`, where `...` is the pattern that you do not want to appear next in the string.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>
  
Here's an example:

```javascript
let str = "hello123";

// Negative lookahead to see if '123' does not come after 'hello'
let regex = /hello(?!123)/;

console.log(regex.test(str)); // Outputs: false
```

In this example, `/hello(?!123)/` will match 'hello' only if 'hello' is not followed by '123'. However, '123' is not part of the overall regex match.

Here's a more complex example: Let's say we want to validate that a password string is at least 8 characters long and does not contain the word "password":

```javascript
let password = "StrongPass$1";

// Use negative lookahead to check password requirements
let regex = /^(?!.*password)[A-Za-z\d@$!%*?&]{8,}$/;

console.log(regex.test(password)); // Outputs: true
```

In this regex:

- `(?!.*password)` checks that the string does not contain the word "password"
- `[A-Za-z\d@$!%*?&]{8,}` ensures the password is at least 8 characters long

Because this password doesn't contain the word "password" and it's at least 8 characters long, `regex.test(password)` returns `true`. If you change the password to contain the word "password" or make it shorter than 8 characters, it would return `false`.

  </div>
  </div>
</details>

---

### How is Lookbehind useful in regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Lookbehind in JavaScript regex allows checking if some pattern precedes the current portion of the string without including it in the match, useful for context-specific pattern matching.
  </div>
  </div>
</details>

---

### Can you explain the Lookahead approach in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Sometimes, we need to find only those matches for a pattern that are followed or preceded by another pattern. The lookahead approach involves catching a match based on a proceeding character or digit. For example, the syntax is: X(?=Y), which means "look for X, but match only if followed by Y". There may be any pattern instead of X and Y. Notably, the lookahead is merely a test. The contents of the parentheses do not get included in the result.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = '1 turkey costs 30€';

console.log(str.match(/\d+(?=€)/));
// 30, the number 1 is ignored, as it is not followed by €

// EXAMPLE: Negative Lookahead
let str = '2 turkeys cost 60€';

console.log(str.match(/\d+\b(?!€)/g));
// 2 (the price is not matched)
```

  </div>
  </div>
</details>

---

### What is the difference between regex Lookahead and Lookbehind?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Lookahead allows us to add a condition for “what follows”. Lookbehind is similar, but it looks behind to find the target.
    </div><br />
  <div><strong>Detailed Response:</strong> Lookahead and lookbehind are collectively known as "lookaround" and are zero-width assertions just like the start and end of line, and word boundaries. They are used to assert whether a particular pattern can be matched before (lookbehind) or after (lookahead) the current location, without including it in the match.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Lookahead comes in two flavors: positive lookahead `(?=...)` and negative lookahead `(?!...)`.

Positive lookahead: `(?=...)`

- It asserts that what immediately follows the current position in the string matches `...`.
- For example, `\d(?=px)` matches a digit only if it's followed by 'px'.

```javascript
let str = "3px 4px 5pt 6pc";
let regex = /\d(?=px)/g;
console.log(str.match(regex)); // output: [ '3', '4' ]
```

This code will find all digits followed by 'px'.

Negative lookahead: `(?!...)`

- It asserts that what immediately follows the current position in the string doesn't match `...`.
- For example, `\d(?!px)` matches a digit only if it's not followed by 'px'.

```javascript
let str = "3px 4px 5pt 6pc";
let regex = /\d(?!px)/g;
console.log(str.match(regex)); // output: [ '5', '6' ]
```

This code will find all digits not followed by 'px'.

Lookbehind also comes in two flavors: positive lookbehind `(?<=...)` and negative lookbehind `(?<!...)`.

Positive lookbehind: `(?<=...)`

- It asserts that what immediately precedes the current position in the string matches `...`.
- For example, `(?<=\d)px` matches 'px' only if it's preceded by a digit.

```javascript
let str = "3px 4px 5pt 6pc";
let regex = /(?<=\d)px/g;
console.log(str.match(regex)); // output: [ 'px', 'px' ]
```

This code will find 'px' that is preceded by a digit.

Negative lookbehind: `(?<!...)`

- It asserts that what immediately precedes the current position in the string doesn't match `...`.
- For example, `(?<!\d)px` matches 'px' only if it's not preceded by a digit.

```javascript
let str = "3px 4px 5pt 6pc";
let regex = /(?<!\d)px/g;
console.log(str.match(regex)); // output: []
```

This code will find 'px' that is not preceded by a digit. In our example, there's no such occurrence.

---

:::warning
Please note that lookbehinds were not supported in JavaScript until ECMAScript 2018 (ES9), and they may not work in all browsers. For example, they do not work in Internet Explorer at all and only in Firefox versions 78 and above.
:::

  </div>
  </div>
</details>

---

### Can you explain the Lookbehind approach in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Lookbehind is like the lookahead approach. The difference is that they are the opposite, where lookahead value matches a value that proceeds it. While the lookbehind value matches the value proceeds it. It allows us to match a pattern only if the target value is before it. We can also use the negative lookbehind approach. The negative lookbehind approach allows us to set a test where the target should not be behind the pattern value. You should note that the contents inside lookbehind parentheses do not become a part of the result.
    </div><br />
  <div><strong>Detailed Response:</strong> Lookbehind in regular expressions, just like lookahead, is a type of zero-width assertion. This means that it doesn't consume characters in the string, but only asserts whether a match is possible or not. Lookbehind comes in two flavors: positive lookbehind and negative lookbehind.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Let's take a deeper look at lookbehind in JavaScript Regular Expressions.

**Positive Lookbehind: `(?<=...)`**
This asserts that what immediately precedes the current position in the string is `...`. If the `...` part does match, the rest of the pattern can match, otherwise the regex match fails.

For example, let's say we want to match a price, but only if it's preceded by a dollar sign:

```javascript
let str = "It costs $20.";
let regex = /(?<=\$)\d+/;
let match = str.match(regex);
console.log(match[0]); // output: "20"
```

Here, we're looking for one or more digits (`\d+`), but only if they're preceded by a dollar sign (`$`). The `(?<=\$)` part is the positive lookbehind.

**Negative Lookbehind: `(?<!...)`**
This asserts that what immediately precedes the current position in the string is NOT `...`. If the `...` part does not match, the rest of the pattern can match, otherwise the regex match fails.

For example, let's say we want to match a price, but only if it's not preceded by a dollar sign:

```javascript
let str = "It costs 20 dollars, not $20.";
let regex = /(?<!\$)\d+/;
let match = str.match(regex);
console.log(match[0]); // output: "20"
```

Here, we're looking for one or more digits (`\d+`), but only if they're not preceded by a dollar sign (`$`). The `(?<!\$)` part is the negative lookbehind.

---

:::warning
Remember that lookbehind was not supported in JavaScript until ECMAScript 2018 (ES9), so it may not work in all browsers, particularly older ones. Be sure to check compatibility before using it in production code.
:::

  </div>
  </div>
</details>

---

### Can you apply a capturing group to a lookaround in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, this is possible for both the lookahead and lookbehind (They are lookarounds) to apply the lookaround approach. The lookaround is zero-length making it Atomic. As soon as the lookaround condition is satisfied, the regex engine forgets about everything inside the lookaround, and it does not backtrack inside the lookaround to try different permutations.<br /><br />The only situation in which this makes any difference is when you use capturing groups inside the lookaround. Since the regex engine does not backtrack into the lookaround, it does not try different permutations of the capturing groups.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = '1 turkey costs 30€';
let regexp = /\d+(?=(€|kr))/; // extra parentheses around €|kr

console.log(str.match(regexp)); // 30, €
```

  </div>
  </div>
</details>

---

### What is a positive lookbehind?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Positive lookbehind in JavaScript regex allows you to specify a condition that the pattern immediately preceding the current pattern must match for a match to be successful.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>
  
Here's an example:

```javascript
let str = "500USD";

// Positive lookbehind to see if 'USD' is preceded by '500'
let regex = /(?<=500)USD/;

console.log(regex.test(str)); // Outputs: true
```

In this example, `/(?<=500)USD/` will match 'USD' only if 'USD' is preceded by '500'. However, '500' is not part of the overall regex match.

  </div>
  </div>
</details>

---

### Can you describe negative lookbehind?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Negative lookbehind in JavaScript regex allows you to specify a condition that a certain pattern preceding the current pattern must not match for a match to be successful.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>
  
Here's an example:

```javascript
let str = "500EUR";

// Negative lookbehind to check if 'EUR' is not preceded by '500'
let regex = /(?<!500)EUR/;

console.log(regex.test(str)); // Outputs: false
```

In this example, `/(?<!500)EUR/` will match 'EUR' only if 'EUR' is not preceded by '500'. However, '500' is not part of the overall regex match. As 'EUR' in this case is preceded by '500', the regex test returns `false`.

  </div>
  </div>
</details>

---

### How is the lookahead/lookbehind capacity beneficial?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Lookahead and lookbehind assertions in JavaScript regular expressions are useful when we need to match a pattern based on what lies ahead or behind it, without including those patterns in the actual match. It allows complex pattern matching without consuming characters, enabling more powerful and flexible search conditions.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example with a password requirement: it should be at least 8 characters long, contain a number, a lowercase and uppercase letter, and not include the word "password":

```javascript
let password = "GoodPass1";

let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*password).{8,}$/;

console.log(regex.test(password)); // Outputs: true
```

Here, lookahead checks for the presence of a digit, lowercase and uppercase letters (positive lookahead), and absence of "password" (negative lookahead), while lookbehind isn't used (but could be used in similar ways).

  </div>
  </div>
</details>

---

### Why are lookaheads and lookbehinds called zero-width assertions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Lookaheads and lookbehinds are called "zero-width assertions" because they don't consume characters in the string, but only assert whether a match is possible.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>
  
Here's an example:

```javascript
let str = "apple123";

// Positive lookahead
let regex = /apple(?=123)/;
console.log(str.match(regex)); // Outputs: ["apple"]

// Positive lookbehind
regex = /(?<=apple)123/;
console.log(str.match(regex)); // Outputs: ["123"]
```

In both examples, even though the lookahead and lookbehind are part of the regex, they're not part of the match returned by `str.match(regex)`. They don't consume characters, hence "zero-width".

  </div>
  </div>
</details>

---

### Is lookbehind supported in all browsers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> As of March 2021, JavaScript lookbehind is not supported in all browsers. Internet Explorer and some versions of Safari, for example, do not. You should always verify the current browser compatibility.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's how you can test for lookbehind support:

```javascript
function isLookbehindSupported() {
    try {
        new RegExp('(?<=)');
        return true;
    } catch (e) {
        return false;
    }
}

console.log(isLookbehindSupported()); // Outputs: true or false based on browser support
```

If your browser supports lookbehind assertions, the function will return `true`. If not, it will return `false`. Always check compatibility and potentially offer fallbacks for older or less feature-rich browsers when using newer JavaScript features.

  </div>
  </div>
</details>

---

### How does lookaround differ from traditional regex searching?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Traditional regex searching in JavaScript consumes characters in the string as it matches, while lookaround (lookahead/lookbehind) does not consume characters - it only checks if the condition is met.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example:

```javascript
let str = "apple123";

// Traditional regex match
let regex = /apple123/;
console.log(str.match(regex)); // Outputs: ["apple123"]

// Using lookahead
regex = /apple(?=123)/;
console.log(str.match(regex)); // Outputs: ["apple"], '123' is checked but not included

// Using lookbehind
regex = /(?<=apple)123/;
console.log(str.match(regex)); // Outputs: ["123"], 'apple' is checked but not included
```

In the lookahead and lookbehind examples, the match does not include the characters that are being checked by the lookahead or lookbehind.

---

:::warning
Please note that lookbehinds were not supported in JavaScript until ECMAScript 2018 (ES9), and they may not work in all browsers. For example, they do not work in Internet Explorer at all and only in Firefox versions 78 and above.
:::

  </div>
  </div>
</details>

---
