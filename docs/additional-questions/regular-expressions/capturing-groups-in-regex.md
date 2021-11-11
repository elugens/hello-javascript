---
title: Capturing Groups
sidebar_position: 11
---

# Capturing Groups

**Regular Expressions: Capturing Groups**

<head>
  <title>Capturing Groups - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is a capturing group in relation to a match in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A capturing group is a pattern enclosed in parentheses. It two affects consisting of getting part of match as a separate or isolated item in an array of items. If we add a quantifier after the parentheses, it is combined with the parentheses as a group on the string.
    </div>
  </div>
</details>

Code Example:

```js
// Example: repeating word pattern

alert('Gogogo now!'.match(/(go)+/gi)); // "Gogogo"
// Example: group of domains

let regexp = /(\w+\.)+\w+/g;

alert('site.com my.site.com'.match(regexp)); // site.com,my.site.com
// Example: email

let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g;

alert('my@mail.com @ his@site.com.uk'.match(regexp));

// my@mail.com, his@site.com.uk
```

Source: <https://javascript.info/regexp-groups>

### How does the regex engine memorize the matches in parentheses?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Parentheses are numbered from left to right. The search engine memorizes the content matched by each of them and allows to get it in the result. They are indexed in an array structure in the order the matched. The method str.match(regexp), if regexp has no flag g, looks for the first match and returns it as an array.
    </div>
  </div>
</details>

Code Example:

```js
let str = '<h1>Hello, world!</h1>';

let tag = str.match(/<(.\*?)>/);

alert(tag[0]); // <h1>
alert(tag[1]); // h1
```

Source: <https://javascript.info/regexp-groups#parentheses-contents-in-the-match>

### How nested group of parentheses work in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When parentheses are nested in regular expressions it uses an outward in and left to right behavior (algorithm). Basically, the outer bounds of the parentheses are collected and pushed into an array structure, then each parenthesis with the parent are collected and pushed to the array in order from left to right.
    </div>
  </div>
</details>

Code Example:

```js
let str = '<span class="my">';

let regexp = /<(([a-z]+)\s\*([^>]\*))>/;

let result = str.match(regexp);

alert(result[0]); // <span class="my">
alert(result[1]); // span class="my"
alert(result[2]); // span
alert(result[3]); // class="my"
```

Source: <https://javascript.info/regexp-groups#parentheses-contents-in-the-match>

### What happens when an option group does not exist in a regex match?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Even if a group is optional and does not exist in the match (e.g., has the quantifier (...)?), the corresponding result array item is present and equals undefined.
    </div>
  </div>
</details>

Code Example:

```js
let match = 'a'.match(/a(z)?(c)?/);

alert(match.length); // 3
alert(match[0]); // a (whole match)
alert(match[1]); // undefined
alert(match[2]); // undefined
/////////////////

let match = 'ac'.match(/a(z)?(c)?/);

alert(match.length); // 3
alert(match[0]); // ac (whole match)
alert(match[1]); // undefined, because there's nothing for (z)?
alert(match[2]); // c
```

Source: <https://javascript.info/regexp-groups#optional-groups>

### What is the outcome on parentheses when we use regex.matchAll()?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The outcome is a deep search for all matches within the regex pattern. The return values will include the both the inner and outer values including the capturing group. It should be noted, that the matchAll method returns an iterable object and it may require a Polyfill, because it is relatively new.
    </div>
  </div>
</details>

Code Example:

```js
// Using Array.from to create an new array

let results = '<h1> <h2>'.matchAll(/<(.\*?)>/gi);

// results - is not an array, but an iterable object

alert(results); // [object RegExp String Iterator]
alert(results[0]); // undefined (\*)
results = Array.from(results); // let's turn it into array <--
alert(results[0]); // <h1>,h1 (1st tag)
alert(results[1]); // <h2>,h2 (2nd tag)
// Using a LOOP to get our results - recommended

let results = '<h1> <h2>'.matchAll(/<(.\*?)>/gi);

for (let result of results) {
  alert(result);

  // first alert: <h1>,h1

  // second: <h2>,h2
}

// DESTRUCTURING:

let [tag1, tag2] = '<h1> <h2>'.matchAll(/<(.\*?)>/gi);

// Full destructuring example:

let results = '<h1> <h2>'.matchAll(/<(.\*?)>/gi);

let [tag1, tag2] = results;

alert(tag1[0]); // <h1>
alert(tag1[1]); // h1
alert(tag1.index); // 0
alert(tag1.input); // <h1> <h2>
```

Source: <https://javascript.info/regexp-groups#searching-for-all-matches-with-groups-matchall>

### What are named groups in capturing used for in regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Named groups is the process of capturing the text matched by “regex” into the group “name”. The name can contain letters and numbers but must start with a letter. These can be achieved by putting `?&#8249;name&#8250;` immediately after the opening parentheses. Named groups are perfect for extremely complex patterns that need to split hairs (filter) amongst a group of names.
    </div>
  </div>
</details>

**Syntax:** `let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/`

Code Example:

```js
// Basic Approach

let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
ß;

let str = '2019-04-30';

let groups = str.match(dateRegexp).groups;

alert(groups.year); // 2019
alert(groups.month); // 04
alert(groups.day); // 30
// Complex Approach

let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
ß;

let str = '2019-10-30 2020-01-01';

let results = str.matchAll(dateRegexp);

for (let result of results) {
  let { year, month, day } = result.groups;

  alert(`${day}.${month}.${year}`);

  // first alert: 30.10.2019

  // second: 01.01.2020
}
```

Source: <https://javascript.info/regexp-groups#named-groups>

### How do capturing groups work in a replacement string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Method str.replace(regexp, replacement) that replaces all matches with regexp in str allows to use parentheses contents in the replacement string. That has done using $n, where n is the group number (Example: $2 would be the second value we are targeting, kind of like index[1]).
    </div>
  </div>
</details>

Code Example:

```js
// Basic Example:

let str = 'John Bull';

let regexp = /(\w+) (\w+)/;

alert(str.replace(regexp, '$2, $1')); // Bull, John
// More Complex example using capturing groups

let regexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;

let str = '2019-10-30, 2020-01-01';

alert(str.replace(regexp, '$<day>.$<month>.$<year>'));

// 30.10.2019, 01.01.2020
```

Source: <https://javascript.info/regexp-groups#capturing-groups-in-replacement>

### How do non-capturing groups work in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Sometimes we need parentheses to correctly apply a quantifier, but we do not want their contents in results. A group may be excluded by adding ?: in the beginning. For instance, if we want to find (go)+, but don’t want the parentheses contents (go) as a separate array item, we can write: (?:go)+.
    </div>
  </div>
</details>

Code Example:

```js
let str = 'Gogogo John!';

// ?: exludes 'go' from capturing

let regexp = /(?:go)+ (\w+)/i;

let result = str.match(regexp);

alert(result[0]); // Gogogo John (full match)
alert(result[1]); // John
alert(result.length); // 2 (no more items in the array)
```

Source: <https://javascript.info/regexp-groups#non-capturing-groups-with>
