---
title: The "new" Function Syntax
description: The "new" Function Syntax is a very common interview question.
sidebar_position: 7
sidebar_label: The "new" Function Syntax
---

**Advanced Functions: The "new" Function Syntax**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### Explain the new Function constructor syntax in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A new Function object gets created using the Function constructor. Calling the constructor can directly build functions dynamically, but it has similar security and performance drawbacks (though significantly less severe) than eval. In contrast to eval, the Function constructor builds functions that only execute in the global scope. We should note that the new Function syntax does not require a function body to function. The main distinction between this method and others is that the function gets physically built from a string given at run-time. We can get a string externally and utilize it in a function constructor. In complicated web applications, it gets employed in particular instances, such as when we receive code from a server or dynamically assemble a function from a template.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> new Function([arg1 [, arg2 [, ...argN]] ,] functionBody);<br /><br />

  <div></div>

```js
let sum = new Function('a', 'b', 'return a + b');

console.log(sum(1, 2)); // 3

// new Function without a function body

let sayHi = new Function('alert("Hello, JavaScript")');

sayHi(); // Hello, JavaScript
```

  </div>
  </div>
</details>

---

### Explain what occurs when using the new Function constructor to create a function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When a function gets created using the new Function constructor, its [[Environment]] gets set to global rather than the current one. As a result, such a function only has access to global variables and not outer variables. This unusual property of the "new" operator in a Function constructor appears to be very beneficial in practice. As a result, they cannot use external variables. But this is a positive thing since it protects us from mistakes. Passing parameters explicitly is a far superior architectural solution that produces no issues with minifiers.
</div>
  </div>
</details>

---
