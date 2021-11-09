---
title: Ninja Code
sidebar_position: 4
---

# JavaScript Coding Ninja

**Code Quality: Ninja Code**

<head>
  <title>Coding Ninja - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Are one-letter variables a good idea to use in programming?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, they can cause confusion, in a team environment, and make it harder to debug your code.
</div>
  </div>
</details>

Source: <https://javascript.info/ninja-code#one-letter-variables>

### Is it a good idea to abbreviate variable and function names?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, they can cause confusion, in a team environment, and make it harder to debug your code.
</div>
  </div>
</details>

Source: <https://javascript.info/ninja-code#use-abbreviations>

### Is it a good idea to overlap variables in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, they can cause confusion, in a team environment, and make it harder to debug your code. Overlapping is not a good idea because it can cause errors further into the layers of your code.
</div>
  </div>
</details>

Code Example: You should never do this.

```js
let user = authenticateUser(); // Global declaration of the user

    function render() {

    let user = anotherValue(); // Overlapping declaration of the user

    ...

    ...many lines...

    ...

    ... // <-- a programmer wants to work with user here and...

    ...

}
```

Source: <https://javascript.info/ninja-code#overlap-outer-variables>
