---
title: Scripts - Async/Defer
sidebar_position: 2
---

# Scripts: Async, Defer

**Document and resource loading: Scripts: async, defer**

**Question:** **How do scripts load in an HTML document?**

**Interview Answer:** When the browser loads HTML and comes across a `<script>`...`</script>` tag, it cannot continue building the DOM. It must execute the script right now. The same happens for external scripts `<script src="..."></script>`: the browser must wait for the script to download, execute the downloaded script, and only then can it process the rest of the page.

Source: <https://javascript.info/script-async-defer>

**Question:** **Since, HTML document have to wait for scripts to run once they are reached. Can you name two issues that can lead to negative outcomes?**

**Interview Answer:** Yes, there are two common issues related to script loading. Scripts cannot see DOM elements below them, so they cannot add handlers etc. If there is a bulky script at the top of the page, it “blocks the page”. Users cannot see the page content till it downloads and runs. There are some workarounds to that. For instance, we can put a script at the bottom of the page. Then it can see elements above it, and it doesn’t block the page content from showing.

Code Example:

```html
<p>...content before script...</p>

<script src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- This isn't visible until the script loads -->

<p>...content after script...</p>

Code Example: workaround

<body>
  ...all content is above the script...

  <script src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>
</body>
```

Source: <https://javascript.info/script-async-defer>

**Question:** **What are the two script attributes used to manage script loading?**

**Interview Answer:** The are two script attributes used to manage script loading in HTML documents. They include the defer and async attributes.

Source: <https://javascript.info/script-async-defer>

**Question:** **How does the defer attribute affect the loading of a script?**

**Interview Answer:** The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.

Code Example:

```html
<p>...content before script...</p>

<script
  defer
  src="https://javascript.info/article/script-async-defer/long.js?speed=1"
></script>

<!-- visible immediately -->

<p>...content after script...</p>
```

Source: <https://javascript.info/script-async-defer#defer>

**Question:** **What are the benefits of using the script defer attribute?**

**Interview Answer:** There are two major benefits of using the script defer attribute. The scripts with defer never block the page and always execute when the DOM is ready (but before DOMContentLoaded event).

Code Example:

```html
<p>...content before scripts...</p>

<script>
  document.addEventListener('DOMContentLoaded', () =>
    alert('DOM ready after defer!')
  );
</script>

<script
  defer
  src="https://javascript.info/article/script-async-defer/long.js?speed=1"
></script>

<p>...content after scripts...</p>
```

Source: <https://javascript.info/script-async-defer#defer>

**Question:** **Do deferred scripts keep their relative order, like regular scripts?**

**Interview Answer:** Yes, deferred scripts keep their relative order, just like regular scripts. Browsers scan the page for scripts and download them in parallel, to improve performance. But the defer attribute, besides telling the browser “not to block”, ensures that the relative order is kept. That may be important for cases when we need to load a JavaScript library and then a script that depends on it.

Code Example:

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

Source: <https://javascript.info/script-async-defer#defer>

**Question:** **How does the async attribute affect the loading of a script?**

**Interview Answer:** The async attribute is somewhat like defer. It also makes the script non-blocking. But it has important differences in the behavior. The async attribute means that a script is completely independent. In other words, async scripts load in the background and run when ready. The DOM and other scripts do not wait for them, and they do not wait for anything. A fully independent script that runs when loaded.

Code Example:

```html
<p>...content before scripts...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert('DOM ready!'));
</script>

<script
  async
  src="https://javascript.info/article/script-async-defer/long.js"
></script>

<script
  async
  src="https://javascript.info/article/script-async-defer/small.js"
></script>

<p>...content after scripts...</p>
```

Source: <https://javascript.info/script-async-defer#async>

**Question:** **Is there a way to load a script dynamically using JavaScript?**

**Interview Answer:** Yes, we can create a script and append it to the document dynamically using JavaScript. The script starts loading as soon as it is appended to the document.

Code Example:

```html
<script>
  let script = document.createElement('script');

  script.src = '/article/script-async-defer/long.js';

  document.body.append(script); // (\*)
</script>
```

Source: <https://javascript.info/script-async-defer#dynamic-scripts>

**Question:** **How do dynamic scripts behave, asynchronously, deffered, or like a regular script?**

**Interview Answer:** Dynamic scripts behave in an asynchronous fashion by default. They do not wait for anything; nothing waits for them. The script that loads first – runs first (“load-first” order). This can be changed if we explicitly set script.async = false. Then scripts will be executed in the document order, just like defer.

Code Example:

```js
function loadScript(src) {
  let script = document.createElement('script');

  script.src = src;

  script.async = false;

  document.body.append(script);
}

// long.js runs first because of async=false

loadScript('/article/script-async-defer/long.js');

loadScript('/article/script-async-defer/small.js');
```

Source: <https://javascript.info/script-async-defer#dynamic-scripts>
