---
title: Coding Style
sidebar_position: 2
---

# Coding Style Interview Questions

**Code Quality: Coding Style**

<head>
  <title>Coding Style - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is the goal when it comes to coding style in relation to programming?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The goal is to take a complex task and code it in a way that is both correct and human-readable.
</div>
  </div>
</details>

:::note

There are several styling guides that help programmers reach this goal.

:::

Source: <https://javascript.info/coding-style>

### Should you always use curly braces with conditional if statements?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it is a best practice and makes code more readable.
</div>
  </div>
</details>

Code Example:

```JS
// conditional if statement

if (n < 0) {

   alert(`Power ${n} is not supported`);

}
```

Source: <https://javascript.info/coding-style#curly-braces>

### Is it okay to use long horizontal lines of code or to split them into separate lines? Give a reason why you choose your answer.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Professional JavaScript developers prefer separate lines because they are more readable.
</div>
  </div>
</details>

:::note

A great example would be long paragraphs that are longer than 120 characters. We can use backticks to handle lines longer than 120 characters.

:::

Code Example: Proper Implementation

```js
// backtick quotes ` allow to split the string into multiple lines

let str = `

   ECMA International's TC39 is a group of JavaScript developers,

   implementers, academics, and more, collaborating with the community

   to maintain and evolve the definition of JavaScript.

`;

// Conditional If statement variable conditions split in multiple lines

if (id === 123 && moonPhase === 'Waning Gibbous' && zodiacSign === 'Libra') {
  letTheSorceryBegin();
}
```

Source: <https://javascript.info/coding-style#line-length>

### What is the maximum length typically agreed upon by development teams?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The maximum length typically agreed upon by dev teams is between 80 to 120 characters.
</div>
  </div>
</details>

Code Example: Proper Implementation

```js
// backtick quotes ` allow to split the string into multiple lines

let str = `

ECMA International's TC39 is a group of JavaScript developers,

implementers, academics, and more, collaborating with the community

to maintain and evolve the definition of JavaScript.

`;

// Conditional If statement variable conditions split in multiple lines

if (id === 123 && moonPhase === 'Waning Gibbous' && zodiacSign === 'Libra') {
  letTheSorceryBegin();
}
```

Source: <https://javascript.info/coding-style#line-length>

### What is a best practice for vertical space of code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A best practice is to divide each code action by a line space to keep your code readable.
</div>
  </div>
</details>

Code Example:

```js
function pow(x, n) {
  let result = 1;

  //              <--

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  //              <--

  return result;
}
```

Source: <https://javascript.info/coding-style#indents>

### What is one way to reduce nesting levels in your code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A great way to reduce nesting levels is handling minimum conditions early. The goal is to reduce nested code blocks that isolate variable access. The benefits of writing code in this fashion are increased readability and faster code because of early conditional error checks. If, the code fails early then it is handled without continuity.<br /><br />
  <strong>Here are some rules of thumb for reducing nesting in your code:</strong><br /><br />
  <ol>
    <li>Keep conditional blocks short. It increases readability by keeping things local.</li>
    <li>Consider refactoring when your loops and branches that are more than 2 levels deep.</li>
    <li>Think about moving nested logic into separate functions. For example, if you need to loop through a list of objects that each contain a list (such as a protocol buffer with repeated fields), you can define a function to process each object instead of using a double nested loop.</li>
  </ol>
</div>
  </div>
</details>

**The two constructs below are identical:**

```js
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
  } else {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }
}
```

**This is proper way to avoid nesting:**

```js
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");

    return;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
```

Source: <https://testing.googleblog.com/2017/06/code-health-reduce-nesting-reduce.html>

### What is a Linter and why should you use it?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Linters are tools that can automatically check the style of your code and make improving suggestions. The great thing about them is that style-checking can also find some bugs, like typos in variable or function names. Because of this feature, using a linter is recommended even if you do not want to stick to one particular “code style”.
</div>
  </div>
</details>

Source: <https://javascript.info/coding-style#automated-linters>
