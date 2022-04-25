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
      <strong>Interview Response:</strong> The Iterator Pattern allows you to progressively access and explores elements of an aggregate object (collection) without exposing its underlying representation. This technique enables JavaScript writers to create significantly more versatile and sophisticated looping constructs. Iterators and Generators got introduced in ES6, which aids in implementing the Iteration pattern.
<br/>
    </div>    
    <div>
</div><br />
  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

<img src="/img/javascript-iterator.jpg
" /><br /><br />

**The objects participating in this pattern are:**

**Client** -- In example code: _the run() function_

- references and invokes Iterator with a collection of objects

**Iterator** -- In example code: _Iterator_

- implements Iterator interface with methods first(), next(), etc
- keeps track of the current position when traversing the collection

**Items** -- In example code: _Items_

- individual objects of the collection getting traversed

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

### The Iterator pattern belongs to which pattern category?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Iterator pattern is a type of behavioral design pattern.
    </div>
  </div>
</details>

---

### When should you utilize JavaScript's Iterator Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> This pattern helps deal with iteration-related challenges, constructing flexible looping constructs, and retrieving items from a complex collection without knowing the underlying representation. It can get used in creating a generic iterator that efficiently explores any collection regardless of its type.
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

- Singular Responsibility Principle By separating cumbersome traversal algorithms into different classes, you may clean up the client code and collections.
- The Open/Closed Principle -- You can add new types of collections and iterators to existing code without affecting anything.
- Because each iterator object maintains its iteration state, you can concurrently iterate over the same collection.
- For the same reason, you can postpone an iteration and resume it later.

<br />
  </div>
</details>

---

### What are some of the Iterator pattern's drawbacks?

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

- Using the pattern may be overkill if your software works with simple collections.
- Using an iterator may be less productive than going over elements of specific specialized collections directly.

<br />
  </div>
</details>

---
