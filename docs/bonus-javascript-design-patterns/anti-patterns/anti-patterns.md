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

### What is the definition of an anti-pattern in application development?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> An anti-pattern is a flawed solution to a particular problem that produces unintended results. Anti-patterns are bad designs that should be documented.
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

1. Defining a large number of variables in a global context and causing global namespace pollution.

2. Using or passing strings instead of functions for setTimeout or setInterval, as this triggers the use of eval() internally.

3. Modifying the Object class prototype (this is an anti-pattern that should be avoided).

4. Using JavaScript in an inline form as this is inflexible.

5. The use of document.write instead of native DOM alternatives, such as document.createElement. Document.write has been grossly misused over the years and has a number of disadvantages, including that if it's executed after a page has loaded, it can actually overwrite the page we're on, whereas document.createElement doesn't. It's also not compatible with XHTML, so it's better to use DOM-friendly methods like document.createElement instead.

6. Using truthy and false evaluations in an inappropriate way in JavaScript.

7. Abstract naming conventions for variables, classes, and functions. (Ninja Code)

8. Modifying the DOM in a loop

9. New Object in Array.prototype.reduce

<br/>

 </div>

</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
