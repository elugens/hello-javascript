---
title: Code Structure
description: Define what a statement is in JavaScript code structure? Can semi-colons be omitted in JavaScript? | Frontend Developer Interview Questions & Answers
sidebar_position: 4
sidebar_label: Code Structure
keywords:
  - code structure
  - code design
  - coding
  - programming architecture
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - architecture
  - object
  - interview questions
  - interview answers
  - js
tags:
  - code structure
  - code design
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/CodeStructureSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Code Structure | JavaScript Frontend Phone Interview Answers</title>
</head>

**JavaScript Fundamentals: Code Structure**

<CloseAllAnswers />

### Can you define what a statement is in JavaScript code structure?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Statements are syntax constructs and commands that perform actions. Usually, statements are written on separate lines to make the code more readable.
  </div><br />
  <div><strong>Technical Response:</strong> Statements are used in JavaScript to control the flow of the program. In contrast to properties, methods, and events fundamentally tied to the object that owns them, statements behave independently of any JavaScript object.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />
  
 <div></div>

```javascript
// This is a single statement
alert('Hello');

// This is a set of statements
alert('Hello');
alert('World');

// Set of statements on separate lines (recommended)
alert('Hello');

alert('World');
```

  </div>
  </div>
</details>

---

### How are statements separated in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, we separate statements with a semi-colon. Although semi-colons are implicit in JavaScript, we should always explicitly add them to reduce the possibility of bugs in our code.</div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />
  
  <div></div>

```javascript
alert('Hello');
alert('JavaScript');
```

  </div>
</details>

---

### Can semi-colons be omitted in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, but it is not recommended.</div><br />
  <div><strong>Technical Response:</strong> Yes, but it is not considered good code etiquette and should not be done. JavaScript interprets the line break as an “implicit” semi-colon, and this behavior is called an automatic semi-colon insertion.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />
  
  <div></div>

```javascript
// Missing semi-colon (;) (note the missing semi-colon)

// alert('Hello') <--

// correct implementation
alert('JavaScript');
```

  </div>
  </div>
</details>

---

### Does JavaScript always interpret line breaks as the end of a statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are cases when a newline does not mean a semi-colon and may result in an error.</div><br />
  <div><strong>Technical Response:</strong> : There are cases when a newline does not mean a semi-colon and may result in an error. The recommendation is to put semi-colons between statements even if newlines separate them. The JavaScript community widely adopts this rule.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />
  
  <div></div>

```javascript
// This will work…
alert(3 + 1 + 2);

// This will result in an error…
alert('There will be an error') // No semi-colon
  [(1, 2)].forEach(alert); // results in an error

// But everything is fine again if we add a semicolon after alert:
alert('All fine now'); // uses a semi-colon alerts All fine now

[1, 2].forEach(alert); // alerts 1 and then 2
```

  </div>
  </div>
</details>

---

### How are single-line comments created in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Single-line comments start with two forward slash characters <strong>//</strong>.</div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// This comment occupies a line of its own.
alert('Hello');

alert('JavaScript'); // This comment follows the statement
```

  </div>
</details>

---

### How are multi-line comments created in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Multiline comments start with a forward slash and an asterisk <strong>/*</strong> and end with an asterisk and a forward slash <strong>*/</strong>.</div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />
  
  <div></div>

```javascript
/* An example with two messages.
This is a multiline comment.
*/
alert('Hello');
alert('JavaScript');
```

  </div>
</details>

---

### Are nested comments supported in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, nested comments are not supported. It results in a syntax error.</div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />
  
  <div></div>

```javascript
/*
  /* nested comment ?!? */
  This is a comment continued <- returns a syntax error
*/ error
alert( 'Oh no, Mr. Bill...' );
```

  </div>
</details>

---
