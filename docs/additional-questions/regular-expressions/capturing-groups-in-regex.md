---
title: Capturing Groups
description: A capturing group is a pattern enclosed in parentheses. It two affects consisting of getting part of match as a separate or isolated item in an array of items.
sidebar_position: 11
sidebar_label: Capturing Groups
---

**Regular Expressions: Capturing Groups**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is a capturing group relative to a match method in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A capturing group is a pattern enclosed in parentheses. It has two effects: getting part of the match as a separate or isolated item in an array of items. When we put a quantifier after the parenthesis, it merges as a group on the string.
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
  <div><strong>Interview Response:</strong> Parentheses get numbered from left to right. The search engine memorizes the content matched by each of them and allows to get it in the result. They get indexed in an array structure in the order they matched. The method str.match(regexp), if regexp has no flag g, looks for the first match and returns it as an array.
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
  <div><strong>Interview Response:</strong> When parentheses are nested in regular expressions, it uses an outward in and left to right behavior (algorithm). The outer bounds of the parentheses are collected and pushed into an array structure. Then each parenthesis with the parent is collected and pushed to the array in order from left to right.
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
  <div><strong>Interview Response:</strong> Even if a group is optional and does not exist in the match (e.g., has the quantifier (...)?), the corresponding result array item is present and equals undefined.
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
  <div><strong>Interview Response:</strong> The outcome is a deep search for all matches within the regex pattern. The return values include both the inner and outer values, including the capturing group. We should note that the matchAll method returns an iterable object, and it may require a Polyfill because it is relatively new.
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
  <div><strong>Interview Response:</strong> Named groups are the process of capturing the text matched by “regex” into the group “name”. The name can contain letters and numbers but must start with a letter, and these get achieved by putting `?&#8249;name&#8250;` immediately after the opening parentheses. Named groups are perfect for highly complex patterns that need to split hairs (filter) amongst a group of names.
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
  <div><strong>Interview Response:</strong> Method str.replace(regexp, replacement) that replaces all matches with regexp in str allows using parentheses contents in the replacement string. That gets done using $n, where n is the group number (Example: $2 would be the second value we are targeting, like index[1]).
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
  <div><strong>Interview Response:</strong> We may require parentheses to apply a quantifier appropriately, but we don't want the contents of those parentheses to appear in the results. By commencing with ( ?: ), a group can get omitted. For example, if we want to locate (go)+ but don't want the contents of the parenthesis (go) as a specific array item, we may use: (?:go)+.
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
