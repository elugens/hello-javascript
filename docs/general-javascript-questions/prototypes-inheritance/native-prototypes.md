---
title: Native Prototypes
description: Native Prototypes in JavaScript are a property of the Object.prototype object. It is used to store the Object's properties and methods.
sidebar_position: 3
sidebar_label: Native Prototypes
---

**Prototypes / Inheritance: Native Prototypes**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you give me a high-level overview of JavaScript's native prototypes and objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The prototype property is present in all custom and built-in native objects, and it might get used to improve their usefulness by adding additional attributes and methods. Native prototypes may only be changed or new ones added to them; they cannot get erased.
</div>
  </div>
</details>

---

### What future issues can happen with native prototype extensions (custom property) in web applications?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If future browser versions implement Array.prototype.myExtension, their implementation gets overwritten by our extended method, which will not only be less efficient but may also produce a different, nonstandard result. Whether internal or external, conflicts between libraries are another issue that emerges.</div><br />
  <div><strong>Technical Response:</strong> If future browser versions implement Array.prototype.myExtension (either as part of an upgrade to the EcmaScript standard or on their initiative), their implementation gets overridden by the custom one, which will not only be less productive (we can't change browser engine internals in the service of method optimization), but may also produce a different, nonstandard result. However, there is a technique to reduce the danger by testing for the presence of the native property. This choice might result in varying results between browser versions and device platforms. Whether internal or external, conflicts between libraries are another issue that emerges.
  </div><br />

:::note
Although, there is a way to mitigate the risk by checking for the existence of native properties. This behavior could lead to different results in different browsers versions and across device platforms.
:::

  </div>
</details>

---

### What is a specific case for native prototype extensions in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You should only use a native prototype extension when you need to create a Polyfill for a method that exists in the JavaScript standard but is not yet supported by a particular JavaScript engine.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
if (!String.prototype.repeat) {
  // if there's no such method
  // add it to the prototype

  String.prototype.repeat = function (n) {
    // repeat the string n times

    // actually, the code should be a little bit more complex than that
    // (the full algorithm is in the specification)
    // but even an imperfect polyfill is often considered good enough
    return new Array(n + 1).join(this);
  };
}

alert('La'.repeat(3)); // LaLaLa
```

  </div>
  </div>
</details>

---

### Can you borrow functionality from native prototypes in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you may borrow a native prototype method if you require the same functionality. The basic concept is to copy and paste a method from one object into another, and some native prototype approaches often get copied.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Borrowing the Array Join method…<br /><br />

  <div></div>

```js
let obj = {
  0: 'Hello',
  1: 'JavaScript!',
  length: 2,
};

obj.join = Array.prototype.join;

alert(obj.join(', ')); // Hello, JavaScript!
```

  </div>
  </div>
</details>

---
