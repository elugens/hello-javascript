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

### What is Cross-Window Communication in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Cross-Window Communication is a technique allowing different browser windows or tabs, either on the same domain or different, to communicate with each other.
  </div><br />
  </div>
</details>

---

### Can JavaScript communicate between tabs in the same browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, JavaScript can communicate between browser tabs using mechanisms like localStorage events, BroadcastChannel API, SharedWorker, or postMessage API for cross-origin communication.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Sure, here's a simple code example using `localStorage` and `storage` event:

**Tab 1: Sending tab**

```javascript
// set data to localStorage
localStorage.setItem("message", "Hello from Tab 1");
```

**Tab 2: Receiving tab**

```javascript
// listen for storage events
window.addEventListener('storage', function(event) {
  if (event.key == 'message') {
    console.log('Received message: ' + event.newValue);
  }
});
```

In this example, when you set an item in `localStorage` from Tab 1, Tab 2 will receive this update through the `storage` event and log the new value.

  </div>
  </div>
</details>

---

### What is the same-origin policy in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Same-Origin Policy is a web security concept that restricts how a document or script from one origin can interact with a resource from another origin.
    </div><br />
  <div><strong>Technical Response:</strong> Two URLs are said to have the “same-origin” if they have the same protocol, domain, and port. The “Same Origin” (same site) policy limits access of windows and frames to each other. The idea is that if a user has two pages open: one from john-smith.com and another one is gmail.com, then they would not want a script from john-smith.com to read our mail from gmail.com. So, the “Same Origin” policy aims to protect users from information theft.
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
  <div><strong className="codeExample">These do not:</strong><br /><br />

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

### What are some security concerns with cross-window communication?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Security concerns include Cross-Site Scripting (XSS), where malicious scripts are injected into trusted websites, and Cross-Site Request Forgery (CSRF), tricking users into unwanted actions.
  </div><br />
  </div>
</details>

---

### How can JavaScript communicate with an iframe?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript can communicate with an iframe using the `contentWindow` property to access the iframe's window object, or `postMessage` method for cross-origin communication.
  </div><br />
  </div>
</details>

---

### What are the rules for origin policy for an iframe?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An iframe follows the same-origin policy as pop-up windows: it can freely interact with its parent document if they're of the same origin; otherwise, interactions are restricted.
    </div><br />
  <div><strong>Technical Response:</strong> The same rules that apply pop-up windows apply for iframes regarding origin policies. When we access something within the embedded window, the browser checks to see if the iframe has the base origin; if not, access gets prohibited (writing to location is an exception, its still permitted).
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
  <div><strong>Interview Response:</strong> The `iframe.onload` event fires when the iframe and all its contents are loaded. `iframe.contentWindow.onload` fires when the iframe's window, and its document, are fully loaded, excluding assets like images or stylesheets.
    </div>
  </div>
</details>

---

### How do subdomains operate in the context of the same-origin policy?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Technical Response:</strong> Subdomains are considered different origins under the same-origin policy, unless explicitly set otherwise. This means that cross-subdomain interactions are restricted by default.
    </div><br />
  <div><strong>Technical Response:</strong> Two URLs with distinct domains must have different origins. However, suppose multiple windows share the same second-level domain, such as jane.site.com, pam.site.com, and site.com (their common 2nd level domain is site.com). In that case, we can instruct the browser to ignore the difference and treat them as coming from the "same-origin" for cross-window communication. Execute the code in each window and assign the base domain to the subdomains to make it work.
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
  <div><strong>Interview Response:</strong> Yes, iframes from different origins cannot access each other's documents due to the Same-Origin Policy, leading to a "cross-origin" error.
    </div><br />
  <div><strong>Technical Response:</strong> Yes, there is a problem when an iframe arrives from the exact base origin, and we may access its page. It has nothing to do with cross-origin issues, but it is crucial to understand. An iframe has a document as soon as it gets created. But that document is not the same as the one that gets loaded into it! As a result, if we act on the document right away. We should not operate with the document of an unloaded iframe since it is incorrect. If we add event handlers to it, they get ignored.
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

### Is there a way to detect the moment when the document loads into an iframe?

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
  <div><strong>Interview Response:</strong> You can use the `contentWindow` property of the iframe to access its window object, assuming same-origin policy allows it.
    </div><br />
  <div><strong>Technical Response:</strong> A window object for &#8249;iframe&#8250; can also be obtained from the “named” collection window.frames. There are two options: by number or by name. In terms of figures: window.frames[0] – the window object for the first frame of the document. The window object for the frame with the name="iframeName" property is known as window.frames.iframeName.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<iframe src="/" style="height:80px" name="win" id="iframe"></iframe>

<script>
  console.log(iframe.contentWindow == frames[0]); // true
  console.log(iframe.contentWindow == frames.win); // true
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
  <div><strong>Interview Response:</strong> The "sandbox" attribute enhances security and restricts the iframe's behavior, including limiting scripts, blocking form submission, or preventing top navigation.
    </div><br />
  <div><strong>Technical Response:</strong> The sandbox property enables the exclusion of particular operations within an &#8249;iframe&#8250; to prevent it from running untrusted code. It "sandboxes" the iframe by treating it as though it came from somewhere else and applying extra constraints. For &#8249;iframe sandbox src="..."&#8250;, a "default set" of limitations is imposed. However, We can loosen restrictions, though, if we specify a space-separated list of limitations that we should not enforce as an attribute value, such as this: &#8249;iframe sandbox="allow-forms allow-popups"&#8250;. In other words, an empty "sandbox" property imposes the most robust restrictions imaginable, but we may specify a space-delimited list of those we want to remove.
    </div><br />
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
  <div><strong>Interview Response:</strong> The `postMessage` interface safely enables cross-origin communication. It sends a message from the invoking window to another window or iframe, which can listen and respond.
    </div><br/>
  <div><strong>Technical Response:</strong> The postMessage interface allows windows to communicate with one another regardless of origin. So, it is a way around the “Same Origin” policy. It allows a window from john-smith.com to talk to gmail.com and exchange information, but only if they both agree and call corresponding JavaScript functions. That makes it safe for users. The interface has two parts or arguments.
    </div>
  </div>
</details>

---

### How does the postMessage method interact with an iframe?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `postMessage` method sends a message to the iframe's window object. The iframe can listen for this message with an 'onmessage' event handler.
    </div><br />
  <div><strong>Technical Response:</strong> The window that wants to send a message calls postMessage method of the receiving window. In other words, if we want to send the message to win, we should call win.postMessage(data, targetOrigin). The data argument is the data we are attempting to send. It can be any object; the data gets cloned using the “structured serialization algorithm”. IE supports only strings, so we should JSON.stringify complex objects to support that browser. The targetOrigin specifies the origin for the target window so that only a window from the given origin gets the message.
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
  <div><strong>Interview Response:</strong> To receive a message from `postMessage`, you need set up an event listener for the 'message' event using `window.addEventListener('message', callbackFunction)`.
    </div><br />
  <div><strong>Technical Response:</strong> The target window should have a handler on the message event to receive a message. It is triggered when the postMessage method gets invoked (and targetOrigin check is successful). The event object has unique properties, including the data, origin, and source properties. The data property holds the data from the postMessage, and the origin property holds the value of the originating document. The source is the reference to the sender window. We can immediately source.postMessage(...) back if we want.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
window.addEventListener('message', function (event) {
  if (event.origin != 'http://javascript.info') {
    // something from an unknown domain, let's ignore it
    return;
  }

  console.log('received: ' + event.data);

  // can message back using event.source.postMessage(...)
});
```

  </div>
  </div>
</details>

---

### How can JavaScript detect if a new tab or window is opened?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript can detect a new tab or window if it was opened by the same script using the `window.open` function, which returns a reference to the new window.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let newWindow = window.open('https://www.example.com', '_blank');

if (newWindow) {
    alert('A new window or tab has been opened');
}
```

  </div>
  </div>
</details>

---

### What does the term "origin" refer to in the context of cross-window communication?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the context of cross-window communication, "origin" refers to the combination of scheme (protocol), host (domain), and port from which a document or script originates.
  </div><br />
  </div>
</details>

---

### How does Broadcast Channel API assist in cross-tab communication?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Broadcast Channel API allows communication between different browser contexts (like tabs, windows, iframes) in the same origin by broadcasting messages to all active channels with the same name.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple example of how to use the Broadcast Channel API:

```javascript
// Create a broadcast channel
let bc = new BroadcastChannel('test_channel');

// Send a message over the broadcast channel
bc.postMessage('Hello from current tab!');

// Listen for messages on the broadcast channel
bc.onmessage = function (event) {
  console.log('Received message: ' + event.data);
};
```

In this code, a new BroadcastChannel object is created named 'test_channel'. The `postMessage` method sends a message to all tabs listening to 'test_channel'. The `onmessage` handler logs any message received from the channel. Any tab that wants to communicate over this channel would use the same channel name 'test_channel'.

  </div>
  </div>
</details>

---

### What is the role of event listeners in cross-window communication?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Event listeners enable receiving side in cross-window communication to react to events such as messages from `postMessage`, `storage` events for localStorage changes, or messages from a `BroadcastChannel`.
  </div><br />
  </div>
</details>

---

### What is a MessageEvent in the context of 'postMessage'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the context of `postMessage`, a MessageEvent is an event fired when a message is received, containing data sent from the other window, its origin, and a reference to the source.
  </div><br />
  </div>
</details>

---

### How can we prevent data leakage in cross-window communication?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Data leakage can be prevented by using the Same Origin Policy, validating message origin and data in `postMessage`, employing secure contexts (HTTPS), and mitigating against XSS and CSRF attacks.
  </div><br />
  </div>
</details>

---

### What is 'window.opener' in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, `window.opener` is a reference to the window that opened the current window or tab, typically via the `window.open` method. It's `null` for windows not opened by script.
  </div><br />
  </div>
</details>

---

### How does SharedWorker aid in cross-window communication?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> SharedWorker allows multiple browser contexts (like tabs, windows, iframes) to share the same worker context and communicate with it, enabling data sharing and computation offloading.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Sure, here's a simple example of using a SharedWorker:

**SharedWorker script (mySharedWorker.js):**

```javascript
self.onconnect = function(e) {
  const port = e.ports[0];
  port.onmessage = function(e) {
    console.log("Message received from main script: " + e.data);
    port.postMessage("Hello back from SharedWorker");
  }
}
```

**Main script (in your HTML file):**

```javascript
if (window.SharedWorker) {
  let myWorker = new SharedWorker('mySharedWorker.js');

  myWorker.port.start();

  myWorker.port.postMessage("Hello from main script");
  myWorker.port.onmessage = function(e) {
    console.log("Message received from SharedWorker: " + e.data);
  }
}
```

In this code, the SharedWorker script listens for connection events and messages. The main script creates the SharedWorker, sends a message to it, and listens for messages back from it.

  </div>
  </div>
</details>

---

### What does 'browsing context' mean in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a 'browsing context' is an environment in which documents are presented to the user. It includes windows, tabs, iframes, or other embedded documents in a webpage.
  </div><br/>
  </div>
</details>

---

### Can we use WebSocket for cross-window communication?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, WebSocket can be used for cross-window communication. All tabs can connect to the same WebSocket server and exchange real-time messages, even with different origins.
  </div><br/>
  </div>
</details>

---

### What is Cross-Document Messaging?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Cross-Document Messaging is a mechanism that allows documents to communicate with each other regardless of their source domain, using the `postMessage` method for safe cross-origin communication.
  </div><br/>
  </div>
</details>

---

### What are the potential issues with using 'localStorage' for cross-window communication?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Potential issues include: lack of real-time updates without `storage` event listeners, size limitations, synchronous API can block main thread, potential for data conflicts, and not secure for sensitive data.
  </div><br/>
  </div>
</details>

---

### Can Service Workers be used for cross-window communication?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Service Workers can be used for cross-window communication. They can respond to messages sent from pages under their control, send messages to them, and broadcast them to multiple pages.
  </div><br/>
  </div>
</details>

---

### What is the Channel Messaging API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Channel Messaging API enables direct communication between different browsing contexts (like different tabs, windows, or iframes) or workers via two-way communication channels called MessageChannels.
  </div><br/>
  </div>
</details>

---
