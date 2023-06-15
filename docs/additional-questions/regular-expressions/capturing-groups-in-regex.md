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
alert('Gogogo now!'.match(/(go)+/gi)); // "Gogogo"

// Example: group of domains
let regexp = /(\w+\.)+\w+/g;

alert('site.com my.site.com'.match(regexp)); // site.com,my.site.com

// Example: email
let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g;

alert('my@mail.com @ his@site.com.uk'.match(regexp));
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

alert(tag[0]); // <h1>
alert(tag[1]); // h1
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
alert(result[0]); // <span class="my">
alert(result[1]); // span class="my"
alert(result[2]); // span
alert(result[3]); // class="my"
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

alert(match.length); // 3
alert(match[0]); // a (whole match)
alert(match[1]); // undefined
alert(match[2]); // undefined

/////////////////

let match = 'ac'.match(/a(z)?(c)?/);

alert(match.length); // 3
alert(match[0]); // ac (whole match)
alert(match[1]); // undefined, because there's nothing for (z)?
alert(match[2]); // c
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
alert(results); // [object RegExp String Iterator]

alert(results[0]); // undefined (*)

results = Array.from(results); // let's turn it into array <--

alert(results[0]); // <h1>,h1 (1st tag)
alert(results[1]); // <h2>,h2 (2nd tag)

// Using a LOOP to get our results - recommended
let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

for (let result of results) {
  alert(result);
  // first alert: <h1>,h1
  // second: <h2>,h2
}

// DESTRUCTURING:
let [tag1, tag2] = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

// Full destructuring example:
let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

let [tag1, tag2] = results;

alert(tag1[0]); // <h1>
alert(tag1[1]); // h1
alert(tag1.index); // 0
alert(tag1.input); // <h1> <h2>
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

alert(groups.year); // 2019
alert(groups.month); // 04
alert(groups.day); // 30

// Complex Approach
let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g; 

let str = "2019-10-30 2020-01-01";

let results = str.matchAll(dateRegexp);

for(let result of results) {
  let {year, month, day} = result.groups;

  alert(`${day}.${month}.${year}`);
  // first alert: 30.10.2019
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

alert(str.replace(regexp, '$2, $1')); // Bull, John

// More Complex example using capturing groups
let regexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;

let str = '2019-10-30, 2020-01-01';

alert(str.replace(regexp, '$<day>.$<month>.$<year>'));
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

alert(result[0]); // Gogogo John (full match)
alert(result[1]); // John
alert(result.length); // 2 (no more items in the array)
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
  </div>
  </div>
</details>

---

### How do we refer back to a capturing group within the same regex pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can refer back to a capturing group within the same regex pattern using a backreference. To do this, use \1, \2, etc., where the number corresponds to the capturing group's index. For example, (a)\1 matches "aa".
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
  </div>
  </div>
</details>

---

### How can you refer to a named capturing group?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You refer to it with the syntax \k&#60;name&#62; within the regex, or by its name in the match result.

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
  </div>
  </div>
</details>

---

### Can we nest capturing groups?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, capturing groups can be nested. The group matched first will be \1, the second \2, and so on.
  </div>
  </div>
</details>

---

### What are branch reset groups in regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> They allow us to use the same group number across different alternatives in a pattern, defined using (?|...).
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

### Can we use conditionals combined with capturing-groups in regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, conditionals can be used to perform different matches based on whether a capturing group matched.
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
