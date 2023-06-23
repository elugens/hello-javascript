---
title: Recursion & Stack
description: Recursion & Stack is a very common interview question.
sidebar_position: 1
sidebar_label: Recursion & Stack
keywords:
  - recursion
  - stack
  - advanced
  - recursion stack
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
  - function object
  - functions
  - interview answers
  - interview questions
lastmod: 2022-05-01T17:29:02.955Z
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/RecursionSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Recursion & Stack | JS Frontend Phone Interview Responses</title>
</head>

**Advanced Functions: Recursion & Stack**

<CloseAllAnswers />

### What is recursion in JavaScript programming?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Recursion is a programming technique where a function calls itself to solve a problem by breaking it into smaller, simpler subproblems, leading to a solution through repeated self-calls</div><br />
  <div><strong>Technical Response:</strong> Recursion is a programming pattern when work needs to naturally split into several more straightforward tasks of the same type. Or when a task gets simplified into an easy action plus a simpler variant of the same task. When a function solves a task, it can call many other functions. A partial example is when a function calls itself, known as recursion.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Recursion<br /><br />

  <div></div>

```js
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1); // calling pow(x, n) again on itself
  }
}
```

  </div>
  </div>
</details>

---

### What is the difference between recursive and iterative approaches in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The recursive approach uses self-calling functions to break problems into sub-problems, while the iterative approach uses loops for repetition. Recursion relies on the call stack, while iteration relies on loop control structures.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function pow(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}

alert(pow(2, 3)); // 8
```

  </div>
  </div>
</details>

---

### What is the maximum (acceptable) number of recursive calls by JavaScript engines?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript engines vary, but most have a maximum call stack size of around 10,000 to 15,000 calls. Exceeding this limit causes a "RangeError: Maximum call stack size exceeded" error due to stack overflow.</div><br />
  <div><strong>Technical Response:</strong> The JavaScript engine limits the maximum recursion depth. We can rely on it being 10000; some engines allow more, but 100000 is likely to be beyond most of them. Automatic optimizations help alleviate this ("tail calls optimizations"), but they are not yet supported everywhere and work only in simple cases. That limits the application of recursion, but it remains very widely used. There are many tasks where the recursive way of thinking makes the code more straightforward.
  </div>
  </div>
</details>

---

### How does recursion work in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, recursion works when a function calls itself to solve a problem by dividing it into smaller sub-problems. Each call reduces complexity until a base case is reached, producing a solution.<br /><br />
  </div>
  <div><strong>Technical Response:</strong> To adequately explain how recursion works in JavaScript. First, we need to explain the execution context and its relationship to the stack. The execution context of a running function stores information about its execution process. The execution context is an internal data structure that contains information about a function's execution, such as where the control flow is currently, the current variables, the value of “this”, and a few other internal details. Each function call connects with a single execution context.<br /><br />
  <strong>The following occurs when a function makes a nested call:</strong><br /><br />
  <ul>
    <li>The current function gets paused.</li>
    <li>The execution context gets remembered in a special data structure called the execution context stack.</li>
    <li>The nested call executes.</li>
    <li>After it ends, the old execution context gets retrieved from the stack, and the outer function resumes from where it stopped.</li>
  </ul>
</div>
  </div>
</details>

---

### Can you explain what the execution context is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The execution context in JavaScript is the environment where code is executed, including variables, scopes, and the value of this. It's created each time a function is called.
  </div>
  </div>
</details>

---

### What characteristics do the three tree traversal methods have in common? (Inorder, Preorder, and Postorder)

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three tree traversal methods (pre-order, in-order, post-order) share the characteristics of visiting every node in a tree, following a specific order, and utilizing recursion or iteration for traversal.
</div>
  </div>
</details>

---

### What is the difference between Backtracking and Recursion?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Backtracking is a general algorithm for finding solutions by incrementally building candidates and abandoning them if invalid. Recursion is a technique where a function calls itself to solve sub-problems. Backtracking often employs recursion.
</div><br />
  <div><strong>Technical Response:</strong> Recursion refers to the process of repeatedly calling the same function. The typical example of a recursive function is the factorial process. It would help if you always had a condition that makes recursion stop (base case). Backtracking is when the algorithm makes an opportunistic decision*, which may be wrong. If the decision was wrong, the backtracking algorithm restores the state before the decision. It builds candidates for the solution and abandons those who cannot fulfill the conditions. A typical example of a task to solve would be the Eight Queens Puzzle. Backtracking is also commonly used within Neuronal Networks. Many times, backtracking does not get implemented recursively. If backtracking uses recursion, it is called Recursive Backtracking.
  </div>
  </div>
</details>

---

### What is the definition of a recursive data structure?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A recursive data structure is a structure that replicates itself in parts. Some examples of recursive data structures are objects, HTML, and XML.
</div><br />
  <div><strong className="codeExample">Example:</strong> Recursive Data Structure<br /><br />

  <div></div>

```js
let company = {
  // the same object, compressed for brevity
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 1600 },
  ],
  development: {
    sites: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 },
    ],
    internals: [{ name: 'Jack', salary: 1300 }],
  },
};
```

  </div>
  </div>
</details>

---

### What is the definition of a linked list?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
   <div><strong>Interview Response:</strong> A linked list is a linear data structure where each element (node) contains a value and a reference to the next node, forming a sequence. It can be easily modified and resized.
</div><br />
  <div><strong>Technical Response:</strong> A linked list is a linear data structure like an array. Unlike arrays, the elements do not get stored in a particular memory location or index. Instead, each element gets its own object with a pointer or link to the next object in the list. Each element node has two components: stored data and a link to the next node. Any appropriate data type gets used to store the information. (Diagram below.) The entry point to a linked list is called the head. The head is a reference to the first node in the linked list. The last node on the list points to null. If a list is empty, the head is a null reference.
</div><br />
  <div>

<strong>Graphic Example:</strong><br /><br />

<img src="/img/linked-list.svg" /><br /><br />

<strong>Example:</strong> Linked List<br /><br />

  <div></div>

```js
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// Alternative Implementation

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;
```

  </div>
  </div>
</details>

---

### When traversing a linked list, which approach is better, recursion or iterative?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An iterative approach is often preferred for traversing linked lists, as it avoids call stack overflow risk and provides better performance with lower memory usage. However, recursion can be more elegant and easier to understand.
</div><br />
  <div><strong>Interview Response:</strong> It varies; there are advantages to both ways that we must consider. We commonly use recursion because it is easier to build and more 'elegant' than iterative methods. Remember that anything done in recursion has an alternative iterative approach, but we should use caution with our approach because there is usually a performance penalty with recursion. However, depending on the situation at hand, that performance disadvantage may be negligible — in which case, recursion makes sense. With recursion, you also have the extra benefit of making your code more understandable to other programmers, which is always a plus.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Iterative vs. Recursive<br /><br />

  <div></div>

```js
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// Iterative Approach

function printIteratively(list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }
}

printIteratively(list);

// Recursive Approach

function printRecursively(list) {
  alert(list.value); // output the current item

  if (list.next) {
    printRecursively(list.next); // do the same for the rest of the list
  }
}

printRecursively(list);
```

  </div>
  </div>
</details>

---

### What is a stack in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle, meaning the last element added to the stack is the first to be removed.
  </div>
  </div>
</details>

---

### How can a stack be implemented in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A stack can be implemented in JavaScript using a class, where push() and pop() methods add or remove elements from the top.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Stack {
  constructor() {
    this.items = [];
  }

  // Push element to the stack
  push(element) {
    this.items.push(element);
  }

  // Pop element from the stack
  pop() {
    if (this.items.length === 0) {
      return 'Underflow';
    }
    return this.items.pop();
  }

  // Get the top element of the stack
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }
}

const stack = new Stack();
```

  </div>
  </div>
</details>

---

### What are the main operations in a stack?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main operations in a stack are push to add an element to the top, pop to remove the top element, peek to view the top element, and isEmpty to check if the stack is empty.
  </div>
  </div>
</details>

---

### What is a call stack in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A call stack is a stack data structure that manages the execution context of function calls in JavaScript, tracking the sequence of functions being called and their local variables.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is how it works:

1. When a script calls a function, the JavaScript engine pushes that function call onto the call stack and then starts carrying out the function.

2. If that function calls another function, that function is pushed onto the top of the call stack, and the JavaScript engine starts executing that function.

3. If a function finishes executing, the JavaScript engine pops it off the call stack and resumes execution where it left off in the last code listing.

4. If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.

The call stack is crucial for understanding how JavaScript works, especially its single-threaded, synchronous execution model. It's also vital for understanding more complex concepts like closures, callbacks, and promises.

Here's a simple example:

```javascript
function functionOne() {
    functionTwo();
}

function functionTwo() {
    functionThree();
}

function functionThree() {
    console.log('Hello, World!');
}

functionOne();
```

In this example, when `functionOne` is called, it is pushed onto the call stack. Inside `functionOne`, `functionTwo` is called, and it gets pushed onto the call stack. This process continues until `functionThree` is pushed onto the call stack.

Once `functionThree` finishes execution (it logs "Hello, World!" to the console), it gets popped off the call stack. Then, `functionTwo` gets popped, and finally `functionOne` is popped from the stack, at which point the stack is empty, and the program ends.

  </div>
  </div>
</details>

---

### What is a stack overflow?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A stack overflow occurs when the call stack exceeds its maximum size due to excessive function calls, often due to infinite recursion or deeply nested calls, causing a RangeError.
  </div>
  </div>
</details>

---
