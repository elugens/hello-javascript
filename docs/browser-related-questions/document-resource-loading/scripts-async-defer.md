---
title: Scripts - Async/Defer
description: Scripts - Async/Defer in JavaScript is a way to load JavaScript files asynchronously. - JavaScript Interview Questions & Answers
sidebar_position: 2
sidebar_label: Scripts - Async/Defer
---

**Document / Resource Loading: Scripts - Async/Defer**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### How do scripts load in an HTML document?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When the browser loads HTML and comes across a &#8249;script&#8250;...&#8249;/script&#8250; tag, it cannot continue building the DOM. It must execute the script straight away. The same happens for external scripts &#8249;script src="..."&#8250;&#8249;/script&#8250;: the browser must wait for the script to download, execute the downloaded script, and only then can it process the rest of the page.
    </div>
  </div>
</details>

---

### Since HTML documents have to wait for scripts to run once they get reached. Can you name two issues that can lead to adverse outcomes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there are two common issues related to script loading. Scripts cannot see DOM elements below them, so they cannot add handlers. If there is a bulky script at the top of the page, it “blocks the page”. Users cannot see the page content till it downloads and runs. There are some workarounds to that. For instance, we can put a script at the bottom of the page. Then it can see elements above it, and it doesn’t block the page content from showing.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<p>...content before script...</p>

<script src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- This isn't visible until the script loads -->
<p>...content after script...</p>
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> workaround<br /><br />

  <div></div>

```html
<body>
  ...all content is above the script...

  <script src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>
</body>
```

  </div>
  </div>
</details>

---

### What are the two script attributes used to manage script loading?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use two script attributes to manage script loading in HTML documents. They include the defer and async attributes.
    </div>
  </div>
</details>

---

### How does the defer attribute affect the loading of a script?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The defer attribute tells the browser not to wait for the script. Instead, the browser does not continue to process the HTML and build DOM. The script loads “in the background”, and then runs when the DOM fully builds.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<p>...content before script...</p>

<script
  defer
  src="https://javascript.info/article/script-async-defer/long.js?speed=1"
></script>

<!-- visible immediately -->
<p>...content after script...</p>
```

  </div>
  </div>
</details>

---

### What are the benefits of using the script defer attribute?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> TThere are two significant benefits of using the script defer attribute. The scripts with defer never block the page and consistently execute when the DOM is ready (but before DOMContentLoaded event).
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<p>...content before scripts...</p>

<script>
  document.addEventListener('DOMContentLoaded', () =>
    alert('DOM ready after defer!')
  );
</script>

<script
  defer
  src="https://javascript.info/article/script-async-defer/long.js?speed=1"
></script>

<p>...content after scripts...</p>
```

  </div>
  </div>
</details>

---

### Do deferred scripts keep their relative order, like regular scripts?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, deferred scripts keep their relative order, just like regular scripts. Browsers scan the page for scripts and download them in parallel, to improve performance. But the defer attribute, besides telling the browser “not to block” the document, it ensures that the relative order of the deferred script is maintained. That may be important for cases when we need to load a JavaScript library and then a script that depends on it.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script
  defer
  src="https://javascript.info/article/script-async-defer/long.js"
></script>
<script
  defer
  src="https://javascript.info/article/script-async-defer/small.js"
></script>
```

  </div>
  </div>
</details>

---

### How does the async attribute affect the loading of a script?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The async attribute is somewhat like defer. It also makes the script non-blocking. But it has significant differences in the behavior. The async attribute means that a script is entirely independent. In other words, async scripts load in the background and run when ready. The DOM and other scripts do not wait for them, and they do not wait for anything. A fully independent script that runs when loaded.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<p>...content before scripts...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert('DOM ready!'));
</script>

<script
  async
  src="https://javascript.info/article/script-async-defer/long.js"
></script>
<script
  async
  src="https://javascript.info/article/script-async-defer/small.js"
></script>

<p>...content after scripts...</p>
```

  </div>
  </div>
</details>

---

### Is it possible to use JavaScript to load a script dynamically?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can create a script and append it to the document dynamically using JavaScript. The script starts loading as soon as it appends to the document.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  let script = document.createElement('script');
  script.src = '/article/script-async-defer/long.js';
  document.body.append(script); // (*)
</script>
```

  </div>
  </div>
</details>

---

### How do dynamic scripts behave asynchronously, deferred, or like a regular script?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By default, dynamic scripts operate asynchronously. They don't have to wait for anything; nothing has to wait for them. The script that loads first (in "load-first" sequence) executes first. Developers can alter this behavior by specifying “script.async=false”.  The Scripts would then run in the document's sequence, much like defer.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.append(script);
}

// long.js runs first because of async=false
loadScript('/article/script-async-defer/long.js');
loadScript('/article/script-async-defer/small.js');
```

  </div>
  </div>
</details>

---
