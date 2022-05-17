---
title: Cross-Window Communication
description: Cross-Window Communication in JavaScript is a way to communicate between different windows. - JavaScript Interview Questions & Answers
sidebar_position: 2
sidebar_label: Cross-Window Communication
keywords:
  - cross window communication
  - cors
  - same-origin policy
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - object
  - interview questions
  - interview answers
  - js
tags:
  - cross window communication
  - cors
  - same-origin policy
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/CrossWindowSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Cross-Window Communication | JavaScript Frontend Interview</title>
</head>

**Frames / Windows: Cross-Window Communication**

<CloseAllAnswers />

---

### Can you explain what is the same-origin policy?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Two URLs are said to have the “same-origin” if they have the same protocol, domain, and port. The “Same Origin” (same site) policy limits access of windows and frames to each other. The idea is that if a user has two pages open: one from john-smith.com and another one is gmail.com, then they would not want a script from john-smith.com to read our mail from gmail.com. So, the “Same Origin” policy aims to protect users from information theft.
    </div><br />
  <div><strong className="codeExample">These URLs all share the same origin:</strong><br /><br />

  <div></div>

<div>
<ul>
<li>http://site.com</li>
<li>http://site.com/</li>
<li>http://site.com/my/page.html</li>
</ul>
</div>

  </div><br />
  <div><strong className="codeExample">These ones do not:</strong><br /><br />

  <div></div>

<div>
<ul>
<li>http://www.site.com (another domain: www. matters)</li>
<li>http://site.org (another domain: .org matters)</li>
<li>https://site.com (another protocol: https)</li>
<li>http://site.com:8080 (another port: 8080)</li>
</ul>
</div>

  </div>
  </div>
</details>

---

### What are the rules for origin policy for an iframe?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The same rules that apply pop-up windows apply for iframes regarding origin policies. When we access something within the embedded window, the browser checks to see if the iframe has the base origin; if not, access gets prohibited (writing to location is an exception, it still gets permitted).
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<iframe src="https://example.com" id="iframe"></iframe>

<script>
  iframe.onload = function () {
    // we can get the reference to the inner window
    let iframeWindow = iframe.contentWindow; // OK
    try {
      // ...but not to the document inside it
      let doc = iframe.contentDocument; // ERROR
    } catch (e) {
      alert(e); // Security Error (another origin)
    }

    // also we can't READ the URL of the page in iframe
    try {
      // Can't read URL from the Location object
      let href = iframe.contentWindow.location.href; // ERROR
    } catch (e) {
      alert(e); // Security Error
    }

    // ...we can WRITE into location (and thus load something else into the iframe)!
    iframe.contentWindow.location = '/'; // OK

    iframe.onload = null; // clear the handler, not to run it after the location change
  };
</script>
```

  </div>
  </div>
</details>

---

### What is the difference between iframe.onload vs. iframe.contentWindow.onload?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The iframe.onload event (on the &#8249;iframe&#8250; element) is nearly identical to iframe.contentWindow.onload (on the embedded window object). It is triggered when the embedded window has loaded all of its resources. However, we can't access iframe.contentWindow.onload for an iframe from another origin; thus, we should use iframe.onload instead.
    </div>
  </div>
</details>

---

### How do subdomains operate in the context of the same-origin policy?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Two URLs with distinct domains must have different origins. However, suppose multiple windows share the same second-level domain, such as jane.site.com, pam.site.com, and site.com (their common 2nd level domain is site.com). In that case, we can instruct the browser to ignore the difference and treat them as coming from the "same-origin" for cross-window communication. Execute the code in each window and assign the base domain to the subdomains to make it work.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  document.domain = 'site.com';
</script>
```

  </div>
  </div>
</details>

---

### Are there any pitfalls when an iframe attempts to access its document?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there is a problem when an iframe arrives from the exact base origin, and we may access its page. It has nothing to do with cross-origin issues, but it is crucial to understand. An iframe has a document as soon as it gets created. But that document is not the same as the one that gets loaded into it! As a result, if we act on the document right away. We should not operate with the document of an unloaded iframe since it is incorrect. If we add event handlers to it, they get ignored.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<iframe src="/" id="iframe"></iframe>

<script>
  let oldDoc = iframe.contentDocument;
  iframe.onload = function () {
    let newDoc = iframe.contentDocument;
    // the loaded document is not the same as initial!
    alert(oldDoc == newDoc); // false
  };
</script>
```

  </div>
  </div>
</details>

---

### Is there a way to detect the moment when the document gets loaded into an iframe?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, when iframe.onload triggers. But it only triggers when the whole iframe with all resources is loaded. We can try to catch the moment earlier using checks in a setInterval method.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<iframe src="/" id="iframe"></iframe>

<script>
  let oldDoc = iframe.contentDocument;

  // every 100 ms check if the document is the new one
  let timer = setInterval(() => {
    let newDoc = iframe.contentDocument;
    if (newDoc == oldDoc) return;

    alert('New document is here!');

    clearInterval(timer); // cancel setInterval, don't need it any more
  }, 100);
</script>
```

  </div>
  </div>
</details>

---

### What approach should you use to access the window object for an iframe?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A window object for &#8249;iframe&#8250; can also be obtained from the “named” collection window.frames. There are two options: by number or by name. In terms of figures: window.frames[0] – the window object for the first frame of the document. The window object for the frame with the name="iframeName" property is known as window.frames.iframeName.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<iframe src="/" style="height:80px" name="win" id="iframe"></iframe>

<script>
  alert(iframe.contentWindow == frames[0]); // true
  alert(iframe.contentWindow == frames.win); // true
</script>
```

  </div>
  </div>
</details>

---

### What is the purpose of the “sandbox” iframe attribute?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The sandbox property enables the exclusion of particular operations within an &#8249;iframe&#8250; to prevent it from running untrusted code. It "sandboxes" the iframe by treating it as though it came from somewhere else and applying extra constraints. For &#8249;iframe sandbox src="..."&#8250;, a "default set" of limitations is imposed. However, We can loosen restrictions, though, if we specify a space-separated list of limitations that we should not enforce as an attribute value, such as this: &#8249;iframe sandbox="allow-forms allow-popups"&#8250;. In other words, an empty "sandbox" property imposes the most robust restrictions imaginable, but we may specify a space-delimited list of those we want to remove.
    </div>br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  <iframe src='demo_iframe_sandbox.htm' sandbox />; // STRICT SANDBOX LEVEL
</script>
```

  </div>
  </div>
</details>

---

### Can you explain what the postMessage interface message does?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The postMessage interface allows windows to communicate with one another regardless of origin. So, it is a way around the “Same Origin” policy. It allows a window from john-smith.com to talk to gmail.com and exchange information, but only if they both agree and call corresponding JavaScript functions. That makes it safe for users. The interface has two parts or arguments.
    </div>
  </div>
</details>

---

### How does the postMessage method interact with an iframe?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The window that wants to send a message calls postMessage method of the receiving window. In other words, if we want to send the message to win, we should call win.postMessage(data, targetOrigin). The data argument is the data we are attempting to send. It can be any object; the data gets cloned using the “structured serialization algorithm”. IE supports only strings, so we should JSON.stringify complex objects to support that browser. The targetOrigin specifies the origin for the target window so that only a window from the given origin gets the message.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<iframe src="http://example.com" name="example">
  <script>
    let win = window.frames.example;

    win.postMessage('message', 'http://example.com');
  </script>
</iframe>
```

  </div>
  </div>
</details>

---

### How would you receive a message from a postMessage?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The target window should have a handler on the message event to receive a message. It is triggered when the postMessage method gets invoked (and targetOrigin check is successful). The event object has unique properties, including the data, origin, and source properties. The data property holds the data from the postMessage, and the origin property holds the value of the originating document. The source is the reference to the sender window. We can immediately source.postMessage(...) back if we want.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
window.addEventListener('message', function (event) {
  if (event.origin != 'http://javascript.info') {
    // something from an unknown domain, let's ignore it
    return;
  }

  alert('received: ' + event.data);

  // can message back using event.source.postMessage(...)
});
```

  </div>
  </div>
</details>

---
