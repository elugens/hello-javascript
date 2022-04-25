---
title: External Scripts
description: Learn how to use External Scripts in JavaScript.
sidebar_position: 3
sidebar_label: External Scripts
---

**JavaScript Fundamentals: EXTERNAL SCRIPTS**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### How do you access external script files in JavaScript development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Script files are attached to HTML with the src attribute, including the JS file's absolute path.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />
  
  <div></div>

```html
<script src="/path/to/script.js"></script>
<!-- Example of Multiple script Paths… -->
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
```

  </div>
  </div>
</details>

---

### How do you access external script URLs in JavaScript development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can access external scripts by using the script-src attribute. Both secure and non-secure domains are permissible.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/ "></script>
```

  </div>
  </div>
</details>

---

### What is the rule for putting scripts into HTML?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> As a rule, only the most straightforward scripts go into HTML pages. Complex scripts reside in separate files.</div>
  </div>
</details>

---

### What is the benefit of using a separate script file in the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The benefit of a separate file is that the browser downloads it and stores it in its cache. Instead of downloading it, other pages referencing the same script take it from the cache. That reduces traffic and makes pages faster.</div>
  </div>
</details>

---

### What limitations exist in script tags using a source file?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A single script tag cannot have both the source attribute and code inside.</div><br />
  <div><strong className="codeExample">Code Example:</strong>This is not allowed<br /><br />

  <div></div>

```html
<script src="file.js">
  alert(1); // the content is ignored, because src is set
</script>
```

The example above can be split into two scripts to work:<br />

  <div></div>

```html
<script src="file.js"></script>

<script>
  alert('Now it works!');
</script>
```

  </div>  
  </div>
</details>

---