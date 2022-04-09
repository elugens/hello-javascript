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
      <strong>Interview Response:</strong> Interpreters offer a scripting language that allows end users (developers) to customize their solutions.<br/>
    </div>
    <div>
      <strong>Technical Response:</strong> The interpreter pattern is an interesting pattern as it allows for the creation of your own language. This might sound like a crazy idea: we're already writing JavaScript, why would we want to create a new language? Since the publication of the GoF book, domain specific languages (DSLs) have had something of a renaissance. There are situations where it is quite useful to create a language that is specific to one requirement. For instance, Structured Query Language (SQL) is very good at describing the querying of relational databases. Equally, regular expressions have proven themselves to be highly effective for the parsing and manipulation of text.<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong> ES5 Implementation<br /><br />

<img src="/img/javascript-interpreter.jpg" /><br /><br />

**The objects participating in this pattern are:**

**Client** -- In example code: _the run() program._

- builds (or is given) a syntax tree representing the grammar
- establishes the initial context
- invokes the interpret operations

**Context** -- In example code: _Context_

- contains state information to the interpreter

**TerminalExpression** -- In example code: _Expression_

- implements an interpret operation associated with terminal symbols in the grammar
- one instance for each terminal expression in the sentence

**NonTerminalExpression** -- In example code: _not used_

- implements an interpret operation associated for non-terminal symbols in the grammar

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

### In what pattern category does the Interpreter pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Interpreter pattern belongs to the Behavioral design pattern category.
    </div>
  </div>
</details>

---

### What are some of the benefits of using the Interpreter pattern?

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

- Tested, proven and reusable solution that is already used in many applications.

**Extendable and easy to change**

- It's easy to change and extend the grammar, because the pattern uses classes to represent grammar rules, you can use inheritance to change or extend the grammar.
- Existing expressions can be modified incrementally, and new expressions can be defined as variations on old ones.

**Easy to implement**

- Implementing the grammar is easy, too. Classes defining nodes in the abstract syntax tree have similar implementations.
- These classes are easy to write, and often their generation can be automated with a compiler or parser generator.

<br />
  </div>
</details>

---

### What are some of the drawbacks of using the Proxy pattern?

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

- The Interpreter pattern defines at least one class for every rule in the grammar, reason grammars containing many rules can be hard to manage and maintain.
- Other design patterns can be applied to mitigate the problem, but when the grammar is very complex, other techniques such as parser or compiler generators are more appropriate.

<br />
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
