---
title: String Evaluation
description: String Evaluation in JavaScript works in a similar way to how it works in Python.
sidebar_position: 2
sidebar_label: String Evaluation
---

**Miscellaneous: String Evaluation**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is the eval functions’ purpose in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> According to the MDN, the honest answer is that you should never use eval in your applications. However, the purpose of eval is to evaluate JavaScript code represented as a string value. One string parameter gets used in the built-in eval function, and it returns the completion value of the evaluated code. If the completion value is empty, undefined is returned.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let code = 'alert("Hello")';
eval(code); // alerts Hello
```

  </div>
  </div>
</details>

---

### Should you use the eval built-in JavaScript function property JavaScript? Why or why not?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We should never use eval in modern applications. Many problems include security, optimization, speed, and minification compatibility issues. The MDN does not recommend its use in modern programming.</div><br />
  <div><strong>Technical Response:</strong> In modern programming, eval gets used very sparingly. It gets often said that “eval is evil”. The reason is simple: a long, long time ago, JavaScript was a weaker language; many things could only get done with eval. But that time passed a decade ago. There is no reason to use eval because the JavaScript engine does not optimize it. If someone is using it, there is a good chance they can replace it with a modern language construct or a JavaScript Module. Evil, I mean eval has several issues, including speed and code minification compatibility issues. The fundamental problem is that it poses a security risk to the user, and the MDN does not recommend its use in modern programming.<br /><br /> Using external local variables inside eval is also considered a bad programming practice, as it makes maintaining the code more complex. If your code needs some data from the outer scope, use “new” Function and pass it as arguments.
  </div><br /><br />

:::warning
Executing JavaScript from a string is an enormous security risk. It is far too easy for a bad actor to run arbitrary code when using eval().
:::

  </div>
</details>

---

### Is there a better option or built-in JavaScript object than eval that you can use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the recommended option is to use the built-in Function() object. The benefits include increased application security and engine optimization. If your code needs some data from the outer scope, use new Function and pass it as arguments.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Converting from eval to a Function() object.<br /><br />

  <div></div>

```js
// Bad code with eval():
function looseJsonParse(obj) {
  return eval('(' + obj + ')');
}

console.log(looseJsonParse('{a:(4-1), b:function(){}, c:new Date()}'));

// Better code without eval():
function looseJsonParse(obj) {
  return Function('"use strict";return (' + obj + ')')();
}

console.log(looseJsonParse('{a:(4-1), b:function(){}, c:new Date()}'));
```

  </div>
  </div>
</details>

---
