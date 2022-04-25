---
title: Resource Loading
description: Resource Loading in JavaScript is a way to load external resources asynchronously. - JavaScript Interview Questions & Answers
sidebar_position: 3
sidebar_label: Resource Loading
---

**Document / Resource Loading: Resource Loading**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What two events get used to track the loading of external resources?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The browser allows us to track the loading of external resources – scripts, iframes, pictures, and much more. Two events get used to track external resources' loading, onload and onerror. The onload event occurs when an object loads and the onerror event is triggered if an error occurs while loading an external file (e.g., a document or an image).
    </div>
  </div>
</details>

---

### Is it possible to load a function specified within an external script?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use the script.onload event, to handle the invocation of the function. It triggers after the script is completely loaded and executed. So, in onload we can use script variables, run functions, and other implementations.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let script = document.createElement('script');

// can load any script, from any domain
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js';
document.head.append(script);

script.onload = function () {
  // the script creates a variable "_"
  alert(_.VERSION); // shows library version
};
```

  </div>
  </div>
</details>

---

### How are errors that occur during a script's loading tracked?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Errors that occur during the loading of the script can be tracked in an error event using the script.onerror property. In the case of HTTP errors, we do not know if it was an error 404 or 500 or something else, just that the loading has failed.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let script = document.createElement('script');
script.src = 'https://example.com/404.js'; // no such script
document.head.append(script);

script.onerror = function () {
  alert('Error loading ' + this.src); // Error loading https://example.com/404.js
};
```

  </div>
  </div>
</details>

---

### Are there any limitations to the onload/onerror event properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, events onload/onerror is limited to tracking only the load outcome. Errors that may occur during script processing and execution are out of scope for these events.
    </div><br />

:::note
The onload event gets triggered if a script is successfully loaded, even with programming mistakes. The window.onerror global handler gets used in tracking script problems.
:::

  </div>
</details>

---

### Are the load and error events limited to external scripts, or do they work with other external resources?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The load and error events also work for other resources, basically for any resource that has an external src. There are some limitations in functionality based on the type of source getting loaded. Most resources start loading when they get added to the document. But &#8249;img&#8250; is an exception. It starts loading when it gets an src (*). For &#8249;iframe&#8250;, the iframe.onload event triggers when the iframe loading finishes, both for successful load and in case of an error. That is for historical purposes.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let img = document.createElement('img');
img.src = 'https://js.cx/clipart/train.gif'; // (*)

img.onload = function () {
  alert(`Image loaded, size ${img.width}x${img.height}`);
};

img.onerror = function () {
  alert('Error occurred while loading image');
};
```

  </div>
  </div>
</details>

---

### Can you explain what a cross-origin policy is in front-end development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There is a rule: scripts from one site cannot access the other site's contents. So, a script at https://facebook.com cannot read the user’s mailbox at https://gmail.com. Or, to be more precise, one origin (domain/port/protocol triplet) cannot access the content from another one. So even if we have a subdomain or just another port, these are different origins with no access to each other.
    </div>
  </div>
</details>

---

### Are there any limitations in cross-origin error handling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the details differ depending on the browser, but the concept is the same: all information about a script's internals, including error stack traces, is concealed because it comes from a different domain or sub-domain.
    </div>
  </div>
</details>

---

### Why do we need error details?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are many services (and we can build our own) that listen for global errors using window.onerror, save errors, and provide an interface to access and analyze them. That is great, as we can see actual errors triggered by our users. But if a script comes from another origin, then there is not much information about its errors, as we’ve just seen.
    </div>
  </div>
</details>

---

### What are the three levels of cross-origin access?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are three levels of cross-origin access including no cross-origin attribute, crossorigin = "anonymous", and crossorigin = "use-credentials". In the first level, no cross-origin attribute does not allow or strictly prohibits cross-origin access. The second level is access allowed if the server responds with the header Access-Control-Allow-Origin with * or our origin. The browser does not send authorization information and cookies to the remote server. The last level of cross-origin use credentials that allow access if the server returns the headers Access-Control-Allow-Origin with our origin and Access-Control-Allow-Credentials: true. The browser communicates with the remote server by sending authorization information and cookies.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong> crossorigin = "anonymous"<br /><br />

  <div></div>

```html
<script>
  window.onerror = function (message, url, line, col, errorObj) {
    alert(`${message}\n${url}, ${line}:${col}`);
  };
</script>
<script
  crossorigin="anonymous"
  src="https://cors.javascript.info/article/onload-onerror/crossorigin/error.js"
></script>
```

  </div>
  </div>
</details>

---
