---
title: Resource Loading
sidebar_position: 3
---

# Resource Loading

**Document / Resource Loading: Resource Loading**

<head>
  <title>Resource Loading - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What two events are used to track the loading of external resources?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The browser allows us to track the loading of external resources – scripts, iframes, pictures and so on. There are two events used to track the loading of external resources, onload and onerror. The onload event occurs when an object has been loaded. The onerror event is triggered if an error occurs while loading an external file (e.g., a document or an image).
    </div>
  </div>
</details>

---

### Is there a way to load a function that is declared inside of an external script?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use the script.onload event to handle the invocation of the function. It triggers after the script is completely loaded and executed. So, in onload we can use script variables, run functions etc.
    </div>
  </div>
</details>

Code Example:

```js
let script = document.createElement('script');

// can load any script, from any domain

script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js';

document.head.append(script);

script.onload = function () {
  // the script creates a variable "\_"

  alert(_.VERSION); // shows library version
};
```

---

### How are errors that occur during the loading of a script tracked?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Errors that occur during the loading of the script can be tracked in an error event using the script.onerror property. In the case of HTTP errors, we do not know if it was an error 404 or 500 or something else. Just that the loading has failed.
    </div>
  </div>
</details>

Code Example:

```js
let script = document.createElement('script');

script.src = 'https://example.com/404.js'; // no such script
document.head.append(script);

script.onerror = function () {
  alert('Error loading ' + this.src); // Error loading https://example.com/404.js
};
```

---

### Are there any limitations to the onload/onerror event properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, events onload/onerror are limited to tracking only the load outcome. Errors that may occur during script processing and execution are out of scope for these events.
    </div>
  </div>
</details>

:::note
If a script loaded successfully, then onload triggers, even if it has programming errors in it. To track script errors, one can use window.onerror global handler.
:::

---

### Are the load and error events limited to external scripts or do they work with other external resources?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The load and error events also work for other resources, basically for any resource that has an external src. There are some limitations in functionality based on the type of source being loaded. Most resources start loading when they are added to the document. But &#8249;img&#8250; is an exception. It starts loading when it gets a src (*). For &#8249;iframe&#8250;, the iframe.onload event triggers when the iframe loading finished, both for successful load and in case of an error. That is for historical purposes.
    </div>
  </div>
</details>

Code Example:

```js
let img = document.createElement('img');

img.src = 'https://js.cx/clipart/train.gif'; // (\*)
img.onload = function () {
  alert(`Image loaded, size ${img.width}x${img.height}`);
};

img.onerror = function () {
  alert('Error occurred while loading image');
};
```

---

### Can you explain what a cross-origin policy is in front-end development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There is a rule: scripts from one site cannot access contents of the other site. So, a script at https://facebook.com cannot read the user’s mailbox at https://gmail.com. Or to be more precise, one origin (domain/port/protocol triplet) cannot access the content from another one. So even if we have a subdomain, or just another port, these are different origins with no access to each other.
    </div>
  </div>
</details>

---

### Are there any limitations in cross-origin error handling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, details may vary depending on the browser, but the idea is the same: any information about the internals of a script, including error stack traces, is hidden. Specifically, because it is from another domain or sub-domain.
    </div>
  </div>
</details>

---

### Why do we need error details?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are many services (and we can build our own) that listen for global errors using window.onerror, save errors and provide an interface to access and analyze them. That is great, as we can see real errors, triggered by our users. But if a script comes from another origin, then there is not much information about errors in it, as we’ve just seen.
    </div>
  </div>
</details>

---

### What are the three levels of cross-origin access?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are three levels of cross-origin access including no crossorigin attribute, crossorigin = "anonymous", and crossorigin = "use-credentials". The first level no cross origin attribute does not allow or strictly prohibits cross origin access. The second level is access allowed if the server responds with the header Access-Control-Allow-Origin with * or our origin. Browser does not send authorization information and cookies to remote server. The last level cross origin use credentials is where access allowed if the server sends back the header Access-Control-Allow-Origin with our origin and Access-Control-Allow-Credentials: true. Browser sends authorization information and cookies to remote server.
    </div>
  </div>
</details>

Code Example: crossorigin = "anonymous"

```html
<script>
  window.onerror = function (message, url, line, col, errorObj) {
    alert(`${message}\n${url}, ${line}:${col}`);
  };
</script>

<script
  crossorigin="anonymous"
  src="https://cors.javascript.info/article/onload-onerror/crossorigin/error.js"
></script>
```

---
