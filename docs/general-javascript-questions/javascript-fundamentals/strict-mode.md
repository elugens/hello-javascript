---
title: Understanding Strict Mode
description: Learn how to use strict mode in JavaScript.
sidebar_position: 5
sidebar_label: Strict Mode
---

**JavaScript Fundamentals: Strict Mode**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### When was ECMAScript 5 (ES5) released for use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> 2009</div>
  </div>
</details>

---

### How do you explicitly enable ES5 features and modifications?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You need to enable them with a special directive explicitly: "use strict".</div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />
  
  <div></div>

```javascript
"use strict";

// this code works the modern way
...
```

  </div>
</details>

---

### Explain how you should implement strict mode in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Strict mode is enabled by placing “use strict” at the top of your script.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />
  
  <div></div>

```javascript
alert('this is not strict');
// "use strict" below is ignored
// -it must be at the top of the script

('use strict');

// strict mode is not activated
```

  </div>
  </div>
</details>

---

### Can you cancel strict mode later in your code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, there is no directive like "no use strict" that reverts the engine to the old behavior. Once we enter strict mode, there is no going back.</div>
  </div>
</details>

---

### Does the browser developer console implement strict mode by default?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, we must place it at the first console line for it to work.</div>
  </div>
</details>

---

### How do you implement strict mode in the browser console?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We must place it at the first console line for it to work, then add the rest of our code.</div><br />
  <div><strong>Technical Response:</strong> First, you can try to press Shift+Enter to input multiple lines and put “use-strict” on top. In Older browsers, you have to put it in a wrapper.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> works in most browsers, namely Firefox and Chrome.<br /><br />
  
  <div></div>

```javascript
'use strict';
// <Shift+Enter for a newline>

//  ...your code

// <Enter to run>
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> In Older browsers, you have to put it in a wrapper.<br /><br />

  <div></div>

```javascript
(function () {
  'use strict';

  // ...your code here...
})();
```

  </div>
  </div>
</details>

---

### Should we implement ‘use strict’ in modern applications?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The implementation of “use strict” remains recommended, in most cases.</div><br />
  <div><strong>Technical Response:</strong> Yes, it remains recommended to use strict mode in all modern applications. Although it may not be essential in some cases, we should provide the strict-mode functionality.
  </div>
  </div>
</details>

---

### Are there any language structures that implement strict mode by default?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, JavaScript <em>classes</em> and <em>modules</em> implement strict mode by default.</div>
  </div>
</details>

---
