---
title: Iterator Pattern
description: Iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).
sidebar_position: 5
sidebar_label: Iterator
---

**Structural: Iterator Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the iterator design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Iterator Pattern lets you access and traverses through elements of an aggregate object (collection) sequentially without exposing its underlying representation. This pattern allows JavaScript developers to design looping constructs that are far more flexible and sophisticated. In ES6, Iterator and Generators are introduced, which further aids in the Iteration pattern implementation.
<br/>
    </div>    
    <div>
</div><br />
  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

<img src="/img/javascript-iterator.jpg
" /><br /><br />

**The objects participating in this pattern are:**

**Client** -- In example code: _the run() function_

- references and invokes Iterator with collection of objects

**Iterator** -- In example code: _Iterator_

- implements iterator interface with methods first(), next(), etc
- keeps track of current position when traversing collection

**Items** -- In example code: _Items_

- individual objects of the collection being traversed

<br/>

```js
let Iterator = function (items) {
  this.index = 0;
  this.items = items;
};

Iterator.prototype = {
  first: function () {
    this.reset();
    return this.next();
  },
  next: function () {
    return this.items[this.index++];
  },
  hasNext: function () {
    return this.index <= this.items.length;
  },
  reset: function () {
    this.index = 0;
  },
  each: function (callback) {
    for (let item = this.first(); this.hasNext(); item = this.next()) {
      callback(item);
    }
  },
};

function run() {
  let items = ['one', 2, 'circle', true, 'Applepie'];
  let iter = new Iterator(items);

  // using for loop

  for (let item = iter.first(); iter.hasNext(); item = iter.next()) {
    console.log(item);
  }
  console.log('');

  // using Iterator's each method

  iter.each(function (item) {
    console.log(item);
  });
}

run();

/*

OUTPUT:

one
2
circle
true
Applepie

one
2
circle
true
Applepie

*/
```

<strong className="codeExample">Code Example #2:</strong><br /><br />

```js
const items = [1, 'hello', false, 99.8];

function Iterator(items) {
  this.items = items;
  this.index = 0; // to start from beginning position of array
}

Iterator.prototype = {
  // returns true if a next element is available
  hasNext: function () {
    return this.index < this.items.length;
  },
  //returns next element
  next: function () {
    return this.items[this.index++];
  },
};

//Instantiate object for Iterator
const iterator = new Iterator(items);

while (iterator.hasNext()) {
  console.log(iterator.next());
}
/*
OUTPUT
 
1
hello
false
99.8
 
*/
```

</div>
 </div>

</details>

---

### In what pattern category does the Iterator pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Iterator pattern belongs to the Behavioral design pattern category.
    </div>
  </div>
</details>

---

### When should you use the Iterator Pattern in JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> This pattern can be used when dealing with problems explicitly related to iteration, for designing flexible looping constructs and accessing elements from a complex collection without knowing the underlying representation. You can use it to implement a generic iterator that traverses any collection independent of its type efficiently.
    </div>

<br />
  </div>
</details>

---

### What are some of the benefits of using the Iterator pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits of the Iterator Pattern
    </div>
    <br />
    <div></div>

- Single Responsibility Principle. You can clean up the client code and the collections by extracting bulky traversal algorithms into separate classes.
- Open/Closed Principle. You can implement new types of collections and iterators and pass them to existing code without breaking anything.
- You can iterate over the same collection in parallel because each iterator object contains its own iteration state.
- For the same reason, you can delay an iteration and continue it when needed.

<br />
  </div>
</details>

---

### What are some of the drawbacks of the Iterator pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Drawbacks of the Iterator Pattern.
    </div>
    <br />
    <div></div>

- Applying the pattern can be an overkill if your app only works with simple collections.
- Using an iterator may be less efficient than going through elements of some specialized collections directly.

<br />
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
