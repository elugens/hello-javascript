---
title: Interpreter Design Pattern
description: Interpreters offer a scripting language that allows end users (developers) to customize their solutions.
sidebar_position: 1
sidebar_label: Interpreter
---

**Structural: Interpreter Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the Interpreter design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Interpreter pattern includes a scripting language that enables end-users to modify their solution.<br/>
    </div>
    <div>
      <strong>Technical Response:</strong> The interpreter approach is appealing because it allows you to create a custom language. This implementation may sound like an absurd idea, yet we're already making custom languages in JavaScript. Why should we create a new language? Domain-specific languages (DSLs) have had a rebirth since the publication of the GoF book. When developing a language tailored to a specific demand is beneficial. For example, structured Query Language (SQL) is exceptionally good at defining the querying of relational databases. On the other hand, regular expressions have shown to be highly successful at parsing and altering the text.<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<img src="/img/javascript-interpreter.jpg" /><br /><br />

**The objects participating in this pattern are:**

**Client** -- Example code: _the run() program._

- creates (or is provided) a syntax tree that represents the grammar
- establishes the starting point context for the interpreter
- makes use of the interpret operations

**Context** -- Example code: _Context_

- It provides the interpreter with state information

**TerminalExpression** -- Example code: _Expression_

- performs an interpret operation in conjunction with grammar terminal symbols
- one instance for each phrase's terminal expression

**NonTerminalExpression** -- In example code: _not used_

- implements an interpret operation in the grammar for non-terminal symbols

<br/>

```js
let Context = function (input) {
  this.input = input;
  this.output = 0;
};

Context.prototype = {
  startsWith: function (str) {
    return this.input.substr(0, str.length) === str;
  },
};

let Expression = function (name, one, four, five, nine, multiplier) {
  this.name = name;
  this.one = one;
  this.four = four;
  this.five = five;
  this.nine = nine;
  this.multiplier = multiplier;
};

Expression.prototype = {
  interpret: function (context) {
    if (context.input.length == 0) {
      return;
    } else if (context.startsWith(this.nine)) {
      context.output += 9 * this.multiplier;
      context.input = context.input.substr(2);
    } else if (context.startsWith(this.four)) {
      context.output += 4 * this.multiplier;
      context.input = context.input.substr(2);
    } else if (context.startsWith(this.five)) {
      context.output += 5 * this.multiplier;
      context.input = context.input.substr(1);
    }
    while (context.startsWith(this.one)) {
      context.output += 1 * this.multiplier;
      context.input = context.input.substr(1);
    }
  },
};

function run() {
  let roman = 'MCMXXVIII';
  let context = new Context(roman);
  let tree = [];

  tree.push(new Expression('thousand', 'M', ' ', ' ', ' ', 1000));
  tree.push(new Expression('hundred', 'C', 'CD', 'D', 'CM', 100));
  tree.push(new Expression('ten', 'X', 'XL', 'L', 'XC', 10));
  tree.push(new Expression('one', 'I', 'IV', 'V', 'IX', 1));

  for (let i = 0, len = tree.length; i < len; i++) {
    tree[i].interpret(context);
  }

  console.log(roman + ' = ' + context.output);
}

run();

/*

OUTPUT:

MCMXXVIII = 1928

*/
```

</div>
 </div>

</details>

---

### In what pattern category does the Interpreter pattern belong?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Interpreter pattern is a type of behavioral design pattern.
    </div>
  </div>
</details>

---

### What are some of the advantages of employing the Interpreter pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits of the Interpreter Pattern.
    </div>
    <br />
    <div></div>

**Tested and used solution**

- It's a tried-and-true, reusable solution used in several different applications.
- Because the pattern uses classes to describe grammatical rules, updating and extending the grammar is simple.

**Extendable and straightforward to modify**

- Because the pattern describes grammatical rules using classes, updating and extending the grammar is trivial. Using inheritance, you can edit or expand the grammar.
- Existing expressions can be changed progressively, and new expressions get defined as variants of existing ones.

**Simple to implement**

- Putting the grammar into practice is similarly straightforward. Classes that define nodes in the abstract syntax tree have comparable implementations.
- These classes are simple to write, and they are typically generated automatically by a compiler or parser generator.

<br />
  </div>
</details>

---

### What are some of the disadvantages of employing the Interpreter pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Drawbacks of the Interpreter Pattern.
    </div>
    <br />
    <div></div>

- Because grammar with many rules can be challenging to manage and maintain, the Interpreter pattern creates at least one class for each rule in the grammar.
- Other design patterns can be used to mitigate the problem, however when the language is complex, other approaches such as parser or compiler generators are more suited.

<br />
  </div>
</details>

---
