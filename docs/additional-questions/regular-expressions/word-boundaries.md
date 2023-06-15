---
title: Word Boundary
description: A word boundary \b is a test, just like ^ and $. When the regexp engine comes across \b, it checks that the position in the string is a word boundary.
sidebar_position: 6
sidebar_label: Word Boundary
keywords:
  - word boundary
  - word boundaries
  - regexp word boundary
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
  - word boundary
  - word boundaries
  - regexp word boundary
  - regular expressions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/WordBoundarySchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Word Boundary | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Word Boundary**

<CloseAllAnswers />

---

### What does a word boundary in regex denote in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It represents a position where a word character is not followed or preceded by another word character.
  </div><br />
  </div>
</details>

---

### How is a word boundary represented in JavaScript's regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In Regex, Word boundaries are represented by the '\b' meta-character.
  </div><br />
  </div>
</details>

---

### What is the opposite of a word boundary in regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In Regex, The '\B' meta-character matches a non-word boundary position.
  </div><br />
  </div>
</details>

---

### What characters does JavaScript consider as word characters for the '\b' meta-character?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript considers alphanumeric characters (A-Z, a-z, 0-9) and the underscore (_) as word characters.
  </div><br />
  </div>
</details>

---

### Can you explain why 'at' doesn't match 'cat' when using '\bat' in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The '\bat' specifies a word boundary before 'at', but 'c' before 'at' in 'cat' forms a word, violating the boundary.
  </div><br />
  </div>
</details>

---

### How does '\b' behave differently at the start and end of a string in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> At the start, '\b' matches if the first character is a word character. At the end, it matches if the last character is a word character.
  </div><br />
  </div>
</details>

---

### Can a word boundary match a position between two non-word characters in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, it matches between a word character and a non-word character or at the start or end of a string.
  </div><br />
  </div>
</details>

---

### Why do we use word boundaries in JavaScript regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Word boundaries are used to perform whole-word matches, preventing partial matches within larger words.
  </div><br />
  </div>
</details>

---

### What will '\b' match in the string "#apple#" in JavaScript regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The '\b' matches positions before 'a' and after 'e' because these are boundaries between word and non-word characters.
  </div><br />
  </div>
</details>

---

### Can Regex word boundaries consume characters in a string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, word boundaries do not consume characters, they match positions in a string.
  </div><br />
  </div>
</details>

---

### How would a word boundary handle punctuation in JavaScript regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Punctuations are treated as a non-word character. A word boundary can match the position before the word or after, near punctuation.
  </div><br />
  </div>
</details>

---

### What happens if you apply a global search with '\b' in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It will find all matches that are preceded or followed by a non-word character or are at the start or end of a string.
  </div><br />
  </div>
</details>

---

### How does the word boundary regex behave in the case of consecutive word characters in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It doesn't match positions between consecutive word characters because they don't form a word boundary.
  </div><br />
  </div>
</details>

---

### Can you use a word boundary to match a space character in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, word boundaries don't match space characters. They match positions between word and non-word characters.
  </div><br />
  </div>
</details>

---

### How can you combine word boundaries with other regex elements in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can combine word boundaries with character sets, quantifiers, and other regex elements to define more complex patterns.
  </div><br />
  </div>
</details>

---

### How would you use a word boundary to match 'end' but not 'ending' in a JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By using '\bend\b', it matches 'end' as a whole word, not as part of another word like 'ending'.
  </div><br />
  </div>
</details>

---

### How can word boundaries help in validating user input in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Word boundaries can help to ensure that user input matches exact patterns or words, improving data validation.
  </div><br />
  </div>
</details>

---

### Does '\b' meta-character match the beginning or end of a line in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, '\b' doesn't match line boundaries. It matches word boundaries at the start or end of a string.
  </div><br />
  </div>
</details>

---

### Can you use word boundaries to replace specific words in a string in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, word boundaries can be used with the replace method to replace specific whole words in a string.
  </div><br />
  </div>
</details>

---

### Can you use word boundaries in a character set in JavaScript regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, word boundaries are not valid within a character set. They match positions, not actual characters.
  </div><br />
  </div>
</details>

---

### What is a word boundary \b in regular expressions (regexp)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A word boundary '\b' in regex represents the position where a word character is not followed or preceded by another word character.
    </div><br />
  <div><strong>Technical Response:</strong> A word boundary \b is a test, just like ^ and $. When the regexp engine (program module that implements searching for RegExp) comes across \b, it checks that the position in the string is a word boundary. Three different positions qualify as word boundaries in regular expressions. For instance, if the first string character is a word character \w. Also, between two characters in the string, where one is a word character \w, and the other is not, and at the string end if the last string character is a word character \w. We can use \b not only with words but also with digits.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log('Hello, Java!'.match(/\bJava\b/)); // Java
console.log('Hello, JavaScript!'.match(/\bJava\b/)); // null

// More Examples

console.log('Hello, Java!'.match(/\bHello\b/)); // Hello
console.log('Hello, Java!'.match(/\bJava\b/)); // Java
console.log('Hello, Java!'.match(/\bHell\b/)); // null (no match)
console.log('Hello, Java!'.match(/\bJava!\b/)); // null (no match)

// Digit Boundaries
console.log('1 23 456 78'.match(/\b\d\d\b/g)); // returns 23,78
console.log('12,34,56'.match(/\b\d\d\b/g)); // returns 12,34,56
```

  </div>
  </div>
</details>

---

### Does a word boundary work on Non-Latin alphabets?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Word boundaries may not function as expected with Non-Latin alphabets as they're designed to work with alphanumeric characters and underscores.
    </div><br/>
  <div><strong>Technical Details:</strong> The word boundary test \b checks that there should be \w on the one side from the position and "not \w" – on the other side. But \w means a Latin letter a-z (or a digit or an underscore), so the test does not work for other characters, e.g., Cyrillic letters or Hieroglyphs.
    </div>
  </div>
</details>

---
