---
title: Recursion & Stack
sidebar_position: 1
---

# Recursion & Stack

**Advanced Functions: Recursion & Stack**

<head>
  <title>Recursion & Stack - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is recursion in JavaScript programming?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Recursion is a process in which a function calls itself as a subroutine.</div><br />
  <div><strong>Technical Response:</strong> Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task. When a function solves a task, in the process it can call many other functions. A partial case of this is when a function calls itself. That is called recursion.
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

### What is the difference between recursion and iterative in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The difference between recursion and iteration is that recursion is simply a function call in which the function is being called by itself until a certain condition is met, while iteration is when a loop is repeatedly executed until a certain condition is met. A recursive solution is usually shorter than an iterative one.
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
  <div><strong>Interview Response:</strong> The maximum recursive depth is reliably around 10000, some engines allow more, but 100000 is probably out of limit for most of them.</div><br />
  <div><strong>Technical Response:</strong> The maximal recursion depth is limited by JavaScript engine. We can rely on it being 10000, some engines allow more, but 100000 is probably out of limit for most of them. There are automatic optimizations that help alleviate this (“tail calls optimizations”), but they are not yet supported everywhere and work only in simple cases. That limits the application of recursion, but it remains very widely used. There are many tasks where recursive way of thinking gives simpler code, easier to maintain.
  </div>
  </div>
</details>

---

### How does recursion work in the JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To properly explain how recursion works in JavaScript. You must first define the execution context and its relation to the stack itself. The information about the process of execution of a running function is stored in its execution context. The execution context is an internal data structure that contains details about the execution of a function: where the control flow is now, the current variables, the value of this and few other internal details. One function call has exactly one execution context associated with it.<br /><br />
  <strong>When a function makes a nested call, the following happens:</strong><br /><br />
  <ul>
    <li>The current function is paused.</li>
    <li>The execution context associated with it is remembered in a special data structure called execution context stack.</li>
    <li>The nested call executes.</li>
    <li>After it ends, the old execution context is retrieved from the stack, and the outer function is resumed from where it stopped.</li>
  </ul>
</div>
  </div>
</details>

---

### What is common in the three different types of tree traversals (Inorder, Preorder and Postorder)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Left subtree is always visited before right subtree.
</div>
  </div>
</details>

---

### What is the difference between Backtracking and Recursion?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Recursion describes the calling of the same function that you are in. Backtracking is when the algorithm makes an opportunistic decision, which may come up to be wrong. If the decision was wrong, then the backtracking algorithm restores the state before the decision. It builds candidates for the solution and abandons those which cannot fulfill the conditions.</div><br />
  <div><strong>Technical Response:</strong> Recursion describes the calling of the same function that you are in. The typical example of a recursive function is the factorial process. You always need a condition that makes recursion stop (base case). Backtracking is when the algorithm makes an opportunistic decision\*, which may come up to be wrong. If the decision was wrong, then the backtracking algorithm restores the state before the decision. It builds candidates for the solution and abandons those which cannot fulfill the conditions. A typical example for a task to solve would be the Eight Queens Puzzle. Backtracking is also commonly used within Neuronal Networks. Many times, backtracking is not implemented recursively. If backtracking uses recursion it called Recursive Backtracking.
  </div>
  </div>
</details>

---

### What is the definition of a recursive data structure?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A recursive data structure is a structure that replicates itself in parts. Some examples of recursive data structures are objects, html, and xml.
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

### What is a linked list in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A linked list is a linear data structure like an array. Unlike arrays the elements are not stored in a particular memory location or index. Rather each element is a separate object that contains a pointer or a link to the next object in that list. Each element node contains two items, the data stored and a link to the next node. The data can be any valid data type. You can see this illustrated in the diagram below. The entry point to a linked list is called the head. The head is a reference to the first node in the linked list. The last node on the list points to null. If a list is empty, the head is a null reference.
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

### When traversing a linked list, which approach is better recursion or iterative?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It depends, there are benefits to that you must account for in JavaScript when it comes to both approaches. Recursion is generally used because it is simpler to implement, and it is usually more ‘elegant’ than iterative solutions. Remember that anything that is done in recursion can also be done iteratively, but with recursion there is generally a performance drawback. But, depending on the problem that you are trying to solve, that performance drawback can be very insignificant – in which case it makes sense to use recursion. With recursion, you also get the added benefit that other programmers can more easily understand your code – which is always a good thing to have.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Iterative VS Recursive<br /><br />

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
