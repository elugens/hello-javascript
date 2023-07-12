---
title: Capturing Groups
description: A capturing group is a pattern enclosed in parentheses. It two affects consisting of getting part of match as a separate or isolated item in an array of items.
sidebar_position: 11
sidebar_label: Capturing Groups
keywords:
  - capturing groups
  - capturing group
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
  - capturing groups
  - capturing group
  - regular expressions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/CapturingSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Capturing Groups | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Capturing Groups**

<CloseAllAnswers />

---

### What is a capturing group in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A capturing group in regex groups multiple characters together as a single unit, which can be reused, matched, or referenced later.
  </div>
  </div>
</details>

---

### How is a capturing group represented in regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A capturing group in regex is represented by enclosing the desired pattern within parentheses "()". The matched substring within the capturing group can be accessed separately using indices or names assigned to the group.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let re = /(abc)/;
```

In this case, `abc` is the capturing group. When a match is found for the pattern within the parentheses, that match is "captured" for future use.

Here's an example that uses a captured group:

```javascript
let str = 'abc123abc456';
let re = /(abc)\d+/g;
let match;

while ((match = re.exec(str)) !== null) {
  console.log('found ' + match[1] + ' at position ' + match.index);
}
```

In this code, we're searching for instances of 'abc' followed by one or more digits. When a match is found, 'abc' (the capturing group) is printed to the console along with the index at which it was found.

---

:::note
It's important to note that the match array will contain one item for each capturing group, in addition to one item for the entire match. The first item (index 0) is always the entire match, and the subsequent items (index 1 and above) correspond to each capturing group in the order they appear in the regular expression.
:::

  </div>
  </div>
</details>

---

### Why are capturing groups useful?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Capturing groups in regex are useful for extracting specific parts of a match, enabling pattern manipulation, data extraction, and structured parsing. They provide a way to isolate and work with specific portions of the matched text.
  </div>
  </div>
</details>

---

### What's a non-capturing group in regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A non-capturing group in regex is denoted by "(?:pattern)". It behaves like a capturing group but does not create a separate captured group. It is primarily used for grouping without the need to store or reference the matched substring.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a JavaScript code example that demonstrates the usage of a non-capturing group in a regular expression:

```javascript
const regex = /(?:ab)+c/;
const string = 'ababcabc';

const matches = string.match(regex);
console.log(matches);  // Output: [ 'ababc' ]
```

In the above example, the regular expression `/(?:ab)+c/` is used to match a sequence of "ab" repeated one or more times, followed by a "c". The non-capturing group `(?:ab)` is used to group the "ab" pattern without capturing it as a separate group. The match result `[ 'ababc' ]` indicates that the non-capturing group was matched.

  </div>
  </div>
</details>

---

### What is a capturing group relative to a match method in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A capturing group in regular expressions is a portion of the pattern enclosed in parentheses. When a match is found, the substring is 'captured' and can be accessed separately in the resulting match object. It has two effects: getting part of the match as a separate or isolated item in an array of items. When we put a quantifier after the parenthesis, it merges as a group on the string.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Example: repeating word pattern
console.log('Gogogo now!'.match(/(go)+/gi)); // "Gogogo"

// Example: group of domains
let regexp = /(\w+\.)+\w+/g;

console.log('site.com my.site.com'.match(regexp)); // site.com,my.site.com

// Example: email
let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g;

console.log('my@mail.com @ his@site.com.uk'.match(regexp));
// my@mail.com, his@site.com.uk
```

  </div>
  </div>
</details>

---

### How does the regex engine memorize the matches in parentheses?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The regex engine uses a data structure, typically called a "backreference". Each capturing group is assigned a number, starting from 1, and the matched substring is stored in the corresponding backreference.
    </div><br />
  <div><strong>Technical Details:</strong> The regular expression numbers the parentheses from left to right. The engine memorizes the content matched by each and allows it to return the result. The RegExp engine indexes them in an array structure and the order they are matched. The method str.match(regexp), if regexp has no flag g, looks for the first match and returns it as an array.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = '<h1>Hello, world!</h1>';

let tag = str.match(/<(.*?)>/);

console.log(tag[0]); // <h1>
console.log(tag[1]); // h1
```

  </div>
  </div>
</details>

---

### How does a nested group of parentheses work in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In regular expressions, nested groups are numbered in the order they are opened. This allows each group, regardless of nesting level, to have a unique index for backreferencing, enabling extraction, or manipulation.
    </div><br />
  <div><strong>Technical Details:</strong> When parentheses are nested in regular expressions, it uses an outward in and left to right behavior (algorithm). The outer bounds of the parentheses are collected and pushed into an array structure. Then each parenthesis with the parent is collected and pushed to the array in order from left to right.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = '<span class="my">';

let regexp = /<(([a-z]+)\s*([^>]*))>/;

let result = str.match(regexp);
console.log(result[0]); // <span class="my">
console.log(result[1]); // span class="my"
console.log(result[2]); // span
console.log(result[3]); // class="my"
```

  </div>
  </div>
</details>

---

### What happens when an option group does not exist in a regex match?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If an optional group in a regex (typically denoted by '?') doesn't match in the input, it's treated as not existing in the match. This results in a null or undefined group in the match object.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let match = 'a'.match(/a(z)?(c)?/);

console.log(match.length); // 3
console.log(match[0]); // a (whole match)
console.log(match[1]); // undefined
console.log(match[2]); // undefined

/////////////////

let match = 'ac'.match(/a(z)?(c)?/);

console.log(match.length); // 3
console.log(match[0]); // ac (whole match)
console.log(match[1]); // undefined, because there's nothing for (z)?
console.log(match[2]); // c
```

  </div>
  </div>
</details>

---

### What is the outcome on parentheses when we use regex.matchAll()?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The matchAll() method in regex returns an iterator of all matches, including capturing groups. Each match is an array, where index 0 holds the full match, and subsequent indices hold captured group matches. We should note that the matchAll method returns an iterable object, and it may require a Polyfill because it is relatively new.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Using Array.from to create an new array
let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

// results - is not an array, but an iterable object
console.log(results); // [object RegExp String Iterator]

console.log(results[0]); // undefined (*)

results = Array.from(results); // let's turn it into array <--

console.log(results[0]); // <h1>,h1 (1st tag)
console.log(results[1]); // <h2>,h2 (2nd tag)

// Using a LOOP to get our results - recommended
let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

for (let result of results) {
  console.log(result);
  // first console.log: <h1>,h1
  // second: <h2>,h2
}

// DESTRUCTURING:
let [tag1, tag2] = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

// Full destructuring example:
let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

let [tag1, tag2] = results;

console.log(tag1[0]); // <h1>
console.log(tag1[1]); // h1
console.log(tag1.index); // 0
console.log(tag1.input); // <h1> <h2>
```

  </div>
  </div>
</details>

---

### What are named groups in capturing used for in regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Named groups in regex provide a way to identify captured content by a descriptive name, not just by a numerical index.
    </div><br />
  <div><strong>Technical Response:</strong> Named groups are the process of capturing the text matched by “regex” into the group “name”. The name can contain letters and numbers but must start with a letter, and these get achieved by putting `?&#8249;name&#8250;` immediately after the opening parentheses. Named groups are perfect for highly complex patterns that need to split hairs (filter) amongst a group of names.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> let dateRegexp = /(?&#8249;year&#8250;[0-9]&#123;4&#125;)-(?&#8249;month&#8250;[0-9]&#123;2&#125;)-(?&#8249;day&#8250;[0-9]&#123;2&#125;)/<br /><br />

  <div></div>

```js
// Basic Approach
let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/; 
let str = "2019-04-30";

let groups = str.match(dateRegexp).groups;

console.log(groups.year); // 2019
console.log(groups.month); // 04
console.log(groups.day); // 30

// Complex Approach
let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g; 

let str = "2019-10-30 2020-01-01";

let results = str.matchAll(dateRegexp);

for(let result of results) {
  let {year, month, day} = result.groups;

  console.log(`${day}.${month}.${year}`);
  // first console.log: 30.10.2019
  // second: 01.01.2020
}
```

  </div>
  </div>
</details>

---

### How do capturing groups work in a replacement string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In replacement strings, capturing groups are referenced by $1, $2, etc., replacing these placeholders with matched groups.
    </div><br />
  <div><strong>Technical Response:</strong> Method str.replace(regexp, replacement) that replaces all matches with regexp in str allows using parentheses contents in the replacement string. We can do this by using $n, where n is the group number (Example: $2 would be the second value we are targeting, like index[1]).
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Basic Example:
let str = 'John Bull';
let regexp = /(\w+) (\w+)/;

console.log(str.replace(regexp, '$2, $1')); // Bull, John

// More Complex example using capturing groups
let regexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;

let str = '2019-10-30, 2020-01-01';

console.log(str.replace(regexp, '$<day>.$<month>.$<year>'));
// 30.10.2019, 01.01.2020
```

  </div>
  </div>
</details>

---

### How do non-capturing groups work in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Non-capturing groups match parts of an expression but do not store the match, useful for applying operators without saving the result.
    </div><br />
  <div><strong>Technical Response:</strong> We may require parentheses to apply a quantifier appropriately, but we don't want the contents of those parentheses to appear in the results. By commencing with ( ?: ), we cannot omit the group. For example, if we want to locate (go)+ but don't want the contents of the parenthesis (go) as a specific array item, we may use: (?:go)+.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'Gogogo John!';

// ?: exludes 'go' from capturing
let regexp = /(?:go)+ (\w+)/i;

let result = str.match(regexp);

console.log(result[0]); // Gogogo John (full match)
console.log(result[1]); // John
console.log(result.length); // 2 (no more items in the array)
```

  </div>
  </div>
</details>

---

### How do you create a non-capturing group?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By using the syntax (?:…), where the characters in place of '…' represent the group.
  </div><br />
  <div><strong>Technical Response:</strong> In JavaScript regular expressions, a non-capturing group is created using the syntax `(?:...)`. A non-capturing group allows you to define a part of a regular expression pattern that should be grouped together but not captured as a separate element in the resulting array of matches.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let re = /(?:abc)\d+/;
```

In this case, `(?:abc)` is a non-capturing group. This will match the characters 'abc' followed by one or more digits, but 'abc' will not be a separate item in the resulting matches.

If you use this in a `exec` call, you will see that only the entire match is captured:

```javascript
let str = 'abc123abc456';
let re = /(?:abc)\d+/g;
let match;

while ((match = re.exec(str)) !== null) {
  console.log('found ' + match[0] + ' at position ' + match.index);
}
```

In this code, we're searching for instances of 'abc' followed by one or more digits. The non-capturing group `(?:abc)` means that only the entire match is captured and printed to the console.

  </div>
  </div>
</details>

---

### How do we refer back to a capturing group within the same regex pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In a JavaScript regular expression, you can refer back to a capturing group within the same pattern by using a backreference. This is done by using a backslash (\) followed by the number of the group you want to refer to.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let re = /(\b\w+\b)\s+\1/;
```

In this pattern, `(\b\w+\b)` is a capturing group that matches a word, and `\1` is a backreference that refers to the contents of the first (and in this case, only) capturing group. The `\s+` matches one or more space characters.

Here's an example of using this pattern:

```javascript
let str = 'Hello hello, how are you?';
let re = /(\b\w+\b)\s+\1/gi; // the 'i' flag makes it case-insensitive
let match;

while ((match = re.exec(str)) !== null) {
  console.log('found repeated word ' + match[1] + ' at position ' + match.index);
}
```

In this code, we're searching for repeated words in the string. The capturing group `(\b\w+\b)` matches a word, and `\1` refers to that word. If the same word is found again immediately after one or more space characters, it's a match. The matched word and the position of the match are then printed to the console.

  </div>
  </div>
</details>

---

### Can we name capturing groups in regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, capturing groups in regular expressions can be named. This is done by using (?&#60;name&#62;...) syntax. For example:
(?&#60;first_name&#62;\w+) (?&#60;last_name&#62;\w+)
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Yes, JavaScript regular expressions support named capturing groups. You can give a capturing group a name by using the syntax `(?<name>...)`.

Here's an example:

```javascript
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
```

In this case, `(?<year>\d{4})`, `(?<month>\d{2})`, and `(?<day>\d{2})` are named capturing groups. They will match four digits for the year, two digits for the month, and two digits for the day, respectively.

You can then refer to these groups by name when examining the match results:

```javascript
let str = 'Today is 2023-06-30';
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
let match = re.exec(str);

if (match !== null) {
  let {year, month, day} = match.groups;
  console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);
}
```

In this code, we're searching for a date in the format 'yyyy-mm-dd'. The named capturing groups `(?<year>\d{4})`, `(?<month>\d{2})`, and `(?<day>\d{2})` match the year, month, and day, respectively. If a match is found, the year, month, and day are printed to the console.

---

:::note
Named capturing groups are a relatively recent addition to JavaScript and may not be supported in all environments. As of my knowledge cutoff in September 2021, they are supported in Node.js 10 and later, and in recent versions of most major browsers.
:::

  </div>
  </div>
</details>

---

### How can you refer to a named capturing group?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can refer to a named capturing group within the same regular expression pattern using the `\k&#60;name&#62;` syntax, where `name` is the name of the capturing group. This is called a backreference.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let re = /(?<word>\b\w+\b)\s+\k<word>/;
```

In this pattern, `(?<word>\b\w+\b)` is a named capturing group that matches a word, and `\k<word>` is a backreference that refers to the contents of the named capturing group. The `\s+` matches one or more space characters.

Here's an example of using this pattern:

```javascript
let str = 'Hello hello, how are you?';
let re = /(?<word>\b\w+\b)\s+\k<word>/gi; // the 'i' flag makes it case-insensitive
let match;

while ((match = re.exec(str)) !== null) {
  console.log('found repeated word ' + match.groups.word + ' at position ' + match.index);
}
```

In this code, we're searching for repeated words in the string. The named capturing group `(?<word>\b\w+\b)` matches a word, and `\k<word>` refers to that word. If the same word is found again immediately after one or more space characters, it's a match. The matched word and the position of the match are then printed to the console.

To refer to named capturing groups in the replacement part of a `replace` call, you can use the `$<name>` syntax, like so:

```javascript
let str = 'Hello hello, how are you?';
let re = /(?<word>\b\w+\b)\s+\k<word>/gi;
let newStr = str.replace(re, '$<word>');
console.log(newStr);
```

In this code, we're replacing each instance of a repeated word with a single instance of that word. The `$<word>` syntax refers to the named capturing group.

  </div>
  </div>
</details>

---

### What is the 'balancing group definition' in regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It's a feature in .NET regex to match balanced constructs, using named capturing groups with subtractive notation.
  </div>
  </div>
</details>

---

### How do you use capturing groups in lookaheads and lookbehinds?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Just like regular expressions, you place them inside parentheses. However, remember that most regex flavors don't allow variable-length lookbehinds.
  </div><br/>
  <div><strong>Technical Response:</strong> In JavaScript regular expressions, you can use capturing groups in lookahead and lookbehind assertions just like you would in any other part of the pattern. A lookahead assertion is written as `(?=...)` for a positive lookahead (asserts that what follows matches the pattern inside the parentheses) or `(?!...)` for a negative lookahead (asserts that what follows does not match the pattern).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of a capturing group inside a lookahead...

```javascript
let re = /(\d+)(?=\sUSD)/;
let str = 'The price is 100 USD';
let match = re.exec(str);
if (match) {
  console.log('Amount:', match[1]); // Amount: 100
}
```

In this case, the pattern matches one or more digits (`\d+`) only if they're followed by a space and 'USD'. The lookahead assertion does not consume any characters, so the match for it is not included in the match result.

You can also use capturing groups in lookbehind assertions, written as `(?<=...)` for positive lookbehind (asserts that what precedes matches the pattern inside the parentheses) or `(?<!...)` for negative lookbehind (asserts that what precedes does not match the pattern).

Here's an example of a capturing group inside a lookbehind:

```javascript
let re = /(?<=USD\s)(\d+)/;
let str = 'The price is USD 100';
let match = re.exec(str);
if (match) {
  console.log('Amount:', match[1]); // Amount: 100
}
```

In this case, the pattern matches one or more digits only if they're preceded by 'USD' and a space. Again, the lookbehind assertion does not consume any characters, so the match for it is not included in the match result.

---

:::note
As of March 2021, lookbehind assertions are a relatively recent addition to JavaScript and are not supported in all environments. They are supported in Node.js 10 and later, and in recent versions of most major browsers.
:::

  </div>
  </div>
</details>

---

### Can we nest capturing groups?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, JavaScript Regex allows nesting of capturing groups. A capturing group within another will also be accessible in the array of matches. This helps to capture multiple layers of information in nested structures.
  </div><br/>
  <div><strong>Technical Response:</strong> Yes, you can nest capturing groups in JavaScript regular expressions. Nesting capturing groups means that one capturing group is located inside another in the regular expression. The results of nested capturing groups are still accessible in the resulting array of matches.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of a nested capturing group...

```javascript
let re = /(a(b)c)/;
```

In this case, `(a(b)c)` is a capturing group that contains another capturing group `(b)`.

Here's how you might use this regular expression:

```javascript
let str = 'abc';
let re = /(a(b)c)/;
let match = re.exec(str);

if (match !== null) {
  console.log('Match 0: ' + match[0]); // Match 0: abc
  console.log('Match 1: ' + match[1]); // Match 1: abc
  console.log('Match 2: ' + match[2]); // Match 2: b
}
```

In this code, we're searching for the pattern `(a(b)c)`. When a match is found, the match results are printed to the console.

Note that `match[0]` contains the entire match, `match[1]` contains the first (outer) capturing group, and `match[2]` contains the second (inner) capturing group. The outer group includes the characters matched by the inner group, and the inner group includes only the characters it directly matches.

  </div>
  </div>
</details>

---

### What are branch reset groups in regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> They allow us to use the same group number across different alternatives in a pattern, defined using (?|...). JavaScript's implementation of regular expressions does not support branch reset groups, which are denoted with (?|...) in some regular expression engines like Perl and PHP.
  </div>
  </div>
</details>

---

### What are the common use cases for capturing groups?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Common use cases include data extraction, reordering components of a string, and replacing text.
  </div>
  </div>
</details>

---

### Can capturing groups impact regex performance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, complex or excessive capturing groups can slow down regex performance due to additional memory requirements.
  </div>
  </div>
</details>

---

### How can you reference capturing groups in replacement text?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You reference them using $1, $2, etc., corresponding to the group number in most regex flavors.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = 'Hello, world!';
let re = /(Hello), (world)/;
let newStr = str.replace(re, '$2, $1!');
console.log(newStr); // "world, Hello!"
```

In this example, we're swapping the words 'Hello' and 'world'. The regular expression `(Hello), (world)` contains two capturing groups, and the replacement string `'$2, $1!'` references those groups in reverse order.

If your regular expression includes named capturing groups, you can reference them by name in the replacement string using the `$<name>` syntax:

```javascript
let str = 'Hello, world!';
let re = /(?<greeting>Hello), (?<object>world)/;
let newStr = str.replace(re, '$<object>, $<greeting>!');
console.log(newStr); // "world, Hello!"
```

In this code, the regular expression `(?<greeting>Hello), (?<object>world)` contains two named capturing groups. The replacement string `'$<object>, $<greeting>!'` references those groups by name in reverse order.

  </div>
  </div>
</details>

---

### How does the regex engine handle unmatched capturing groups?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If a capturing group doesn't match, it doesn't capture anything, and the corresponding backreference is undefined.
  </div>
  </div>
</details>

---

### What is 'greediness' in the context of capturing groups?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Greediness refers to the regex engine's behavior of capturing the longest possible match.
  </div>
  </div>
</details>

---

### How does a 'lazy' capturing group operate?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A 'lazy' capturing group, with a following '?', tries to capture the smallest possible match.
  </div>
  </div>
</details>

---

### Can we use conditionals combined with capturing-groups in JavaScript regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, JavaScript's regular expression engine does not support conditional expressions based on whether a particular capturing group participated in the match.
  </div>
  </div>
</details>

---

### How can we distinguish between capturing groups and character classes in regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Capturing groups use parentheses (), while character classes use square brackets [].
  </div>
  </div>
</details>

---
