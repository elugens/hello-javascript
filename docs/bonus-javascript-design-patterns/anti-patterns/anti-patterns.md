---
title: Understanding Anti-Patterns
description: An anti-pattern is a bad solution to a particular problem that resulted in a bad result.
sidebar_position: 5
sidebar_label: Anti-Patterns
---

**Anti-Patterns: Understanding Anti-Patterns**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What exactly is an anti-pattern in application development?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> An anti-pattern is an imperfect solution to a particular problem that results in an unintended result. To summarize, an anti-pattern is a lousy design worthy of documenting.
    </div>
  </div>
</details>

---

### Can you describe an anti-pattern in JavaScript?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Nine Anti-Patterns you should know.<br/>
    </div><br />

1. Excessive variable definition in a global context pollutes the global namespace.

2. Passing strings rather than functions to setTimeout or setInterval causes the internal usage of eval().

3. Playing with native methods in the Object class prototype (this is a particularly bad anti-pattern).

4. Using JavaScript inline because it is inflexible.

5. The usage of document.write when native DOM alternatives, such as document.createElement, are preferable. Over the years, document.write gets misapplied. Drawbacks include that it can overwrite the page we're on after the page loads, whereas document.createElement does not. It also doesn't work with XHTML, so using more DOM-friendly techniques like document.createElement is preferable.

6. Incorrect Use of True and False Evaluation

7. Naming Customs (Ninja Code)

8. Changing the DOM in a loop

9. New Array.prototype.reduce Object

<br/>

 </div>

</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
