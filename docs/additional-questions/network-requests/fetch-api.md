---
title: Fetch API
description: Fetch API is used to make network requests. It is used to make GET, POST, PUT, DELETE, and PATCH network requests. JavaScript Frontend Phone Interview Questions
sidebar_position: 6
sidebar_label: Fetch API
keywords:
  - fetch api
  - network requests
  - functions
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
  - fetch api
  - network requests
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/FetchAPISchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Fetch API | JavaScript Frontend Phone Interview Questions</title>
</head>

**Network Requests: Fetch API**

<CloseAllAnswers />

---

### What is the Fetch API in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Fetch API is a modern interface that provides a powerful and flexible feature to fetch resources asynchronously over the network, like XMLHttpRequest, but with a more powerful and flexible feature set.
  </div><br />
  </div>
</details>

---

### Can Fetch API requests be cancelled?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, using the AbortController API. You signal a fetch request to cancel by calling the abort() method.
  </div><br />
  </div>
</details>

---

### How does Fetch handle JSON responses?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Fetch API provides the `.json()` method on the Response object to handle JSON responses. This method returns a Promise that resolves to the JSON object once it is parsed.
  </div><br />
  </div>
</details>

---

### How does Fetch API handle error statuses?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Fetch API treats HTTP error statuses (400-599) as successful promises, returning a Response object. To handle these errors, manually check Response.ok or status codes in your .then() chain.
  </div><br />
  </div>
</details>

---

### How does Fetch API differ from Axios?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Axios automatically transforms JSON data, handles error statuses as rejected promises, and supports request and response interceptors. Fetch requires manual handling for these tasks, but is a built-in browser API.</div><br />
  <div><strong className="codeExample">Here is a table that summarizes the key differences between Fetch API and Axios:</strong><br /><br />

  <div></div>

| Feature | Fetch API | Axios |
|---|---|---|
| Native or third-party library | Native JavaScript API | Third-party library |
| Ease of use | Simpler to use | More complex to use |
| Features | Fewer features | More features and flexibility |

  </div>
  </div>
</details>

---

### How would you send a POST request using the Fetch API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By using the Fetch API's fetch function with the URL, and an options object specifying method: 'POST' and body: JSON.stringify(data), where data is your payload.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple example of sending a POST request with Fetch API.

```javascript
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    key1: 'value1',
    key2: 'value2'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));
```

This script sends a JSON payload to the specified URL and logs the response or any error that occurs.

  </div>
  </div>
</details>

---

### What is a Promise in the context of Fetch API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A Promise is an object representing the eventual completion or failure of an asynchronous operation. Fetch returns a Promise.
  </div><br />
  </div>
</details>

---

### Can Fetch API work with cookies?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Fetch API can work with cookies. To include cookies in requests, use the `credentials` option set to `include` or `same-origin`, depending on the cross-origin policy.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a basic example of how to use the Fetch API with cookies:

```javascript
fetch('https://example.com', {
  method: 'GET',
  credentials: 'include'  // for cross-origin requests
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Error:', error));
```

In this example, `'include'` is used so that cookies will be included on the request even when doing a cross-origin request. If you're only making same-origin requests, you can use `'same-origin'`.

  </div>
  </div>
</details>

---

### How do you handle a Fetch API response?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To handle a Fetch API response, chain .then() to parse the response, typically with .json(), then another .then() to process the data. Use .catch() to handle errors.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
fetch('url')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Error:', error));

```

  </div>
  </div>
</details>

---

### How is Fetch API used for cross-origin requests?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Fetch API makes cross-origin requests by default, but the server must allow it using CORS headers. To include cookies in cross-origin requests, set `credentials: 'include'` in options.
  </div><br />
  </div>
</details>

---

### Can Fetch API be used with async/await?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, since fetch returns a promise, it can be used with async/await for more readable asynchronous code.
  </div><br />
  </div>
</details>

---

### How is error handling done in Fetch API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In Fetch API, you can use .catch() for network errors. For HTTP errors, manually check Response.ok or Response.status in .then(), because Fetch treats these as successful promises.
  </div><br />
  </div>
</details>

---

### What are Headers in the Fetch API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Headers interface allows you to perform various actions on HTTP request and response headers. It's used in fetch to set request metadata.
  </div><br />
  </div>
</details>

---

### How is the Fetch API different from jQuery.ajax() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Fetch is built into the JavaScript language, whereas jQuery.ajax() is a part of the jQuery library. Fetch returns Promises, while jQuery uses callbacks.
  </div><br />
  </div>
</details>

---

### Can you send a file using Fetch API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can send a file using Fetch API. This is typically done using FormData to append the file to the request body, and setting the method to 'POST'.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of sending a file using Fetch API:

```javascript
let formData = new FormData();
formData.append('file', document.querySelector('input[type=file]').files[0]);

fetch('https://example.com', {
  method: 'POST',
  body: formData
})
.then(response => console.log('Success:', response))
.catch(error => console.error('Error:', error));
```

In this example, an input element with type 'file' is expected in your HTML. The selected file is appended to the `formData` object, which is then sent in the body of the POST request.

  </div>
  </div>
</details>

---

### What are some limitations of Fetch API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Fetch API doesn't send or receive cookies by default and doesn't reject the promise on HTTP error status. Also, it's not supported in Internet Explorer.
  </div><br />
  </div>
</details>

---

### Can the Fetch API make a request to another domain?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Fetch can make cross-origin requests but requires the server to opt-in using CORS headers due to the same-origin policy.
  </div><br />
  </div>
</details>

---

### What is the use of the .clone() method in Fetch API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `.clone()` method in Fetch API allows you to create a duplicate of a `Response` or `Request` object. This is useful because these objects are streams and can only be read once.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of using `.clone()` method in Fetch API:

```javascript
fetch('https://example.com')
.then(response => {
  const clonedResponse = response.clone();
  
  // use original response for JSON parsing
  response.json()
  .then(data => console.log(data));
  
  // use cloned response for text parsing
  clonedResponse.text()
  .then(text => console.log(text));
})
.catch(error => console.log('Error:', error));
```

In this example, we make a fetch request and then clone the response. The original response is used to parse JSON data, and the cloned response is used to parse the response as text.

  </div>
  </div>
</details>

---

### What does the option 'no-cors' mean in Fetch API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The option 'no-cors' is used for requests to a different domain where you don’t have control over the server and it doesn’t support CORS.
  </div><br />
  </div>
</details>

---

### Why is fetch the preferred way to send a network request via the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Fetch is preferred due to its flexibility, promise-based nature, streamlined error handling, and the fact that it's built into modern browsers, making it readily available without external libraries.
    </div><br />
  <div><strong>Technical Response:</strong> Beyond the Fetch getting built on the Promise Object. Fetch is easy to implement compared to other methods used to send a network request, like Ajax. The WebSocket object is more appropriate than fetch if you also want to interact (bi-directional) with the server. Fetch offers a great simplicity to load content on a page in other cases. Fetch also has many fetch options, including referrer, referrerPolicy, mode, and other options.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let promise = fetch(url, {
  method: "GET", // POST, PUT, DELETE, etc.
  headers: {
    // the content type header value is usually auto-set
    // depending on the request body
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined // string, FormData, Blob, BufferSource, or URLSearchParams
  referrer: "about:client", // or "" to send no Referer header,
  // or an url from the current origin
  referrerPolicy: "no-referrer-when-downgrade", // no-referrer, origin, same-origin...
  mode: "cors", // same-origin, no-cors
  credentials: "same-origin", // omit, include
  cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
  redirect: "follow", // manual, error
  integrity: "", // a hash, like "sha256-abcdef1234567890"
  keepalive: false, // true
  signal: undefined, // AbortController to abort request
  window: window // null
});
```

  </div>
  </div>
</details>

---

### What do the referrer and referrerPolicy fetch options do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `referrer` option sets the HTTP referer header and the `referrerPolicy` determines how the referer URL is shared when fetching a request, impacting privacy and security.
    </div><br />
  <div><strong>Technical Response:</strong> The referrer and referrerPolicy options govern how the fetch options object sets the HTTP Referrer header. Usually, that header is set automatically and contains the URL of the page that made the request. In most scenarios, it is not essential; sometimes, it makes sense to remove or shorten it for security purposes. The referrer option allows us to set any Referrer (within the current origin) or remove it and the referrerPolicy option sets general rules for the referrer.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// To send no referer, set an empty string:
fetch('/page', {
  referrer: '', // no Referer header
});

// To set another url within the current origin:
fetch('/page', {
  // assuming we're on https://javascript.info
  // we can set any Referer header, but only within the current origin
  referrer: 'https://javascript.info/anotherpage',
});
```

  </div>
  </div>
</details>

---

### Is the referrerPolicy option limited to use with Fetch?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>No, `referrerPolicy` is not limited to Fetch. It's a general policy used in HTML and APIs like Fetch and XMLHttpRequest for controlling the referrer header.
    </div><br/>
  <div><strong>Interview Response:</strong> No, the referrer-policy described in the specification is not just for fetch, but more global. It is possible to set the default policy for the whole page using the Referrer-Policy HTTP header, or per-link, with &#8249;a rel="noreferrer"&#8250;.
    </div>
  </div>
</details>

---

### Could you please clarify the fetch 'mode' option?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `mode` option in Fetch defines the type of request, which can be `cors`, `no-cors`, `same-origin`, or `navigate`, affecting CORS behavior and request/response visibility.
    </div><br/>
  <div><strong>Technical Response:</strong> The mode option is a safeguard that prevents occasional cross-origin requests. It has three parameters, including cors, same-origin, and no-cors. The cors parameter is the default state which allows cross-origin requests. The same-origin parameter only allows requests from the origin. When the same-origin sets, all cross-origin requests are forbidden. The no-cors parameter only allows safe cross-origin requests. The mode option may be helpful when the URL for fetch comes from a 3rd-party, and we want a “power off switch” to limit cross-origin capabilities.
    </div>
  </div>
</details>

---

### What does the Fetch credential option do during a network request?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The credentials option in Fetch determines if cookies are included with requests, with options being 'omit', 'same-origin', or 'include' to handle cross-origin requests.
    </div><br />
  <div><strong>Technical Response:</strong> The credentials option specifies whether fetch should send cookies and HTTP-Authorization headers with the request. It has three parameters, including same-origin, include, and omit. The same-origin parameter is the default setting used only to send user credentials if the URL is on the same origin as the calling script. The include parameter gets used if we always want to send user credentials, even for cross-origin calls. (We should note that include requires Accept-Control-Allow-Credentials from the cross-origin server for JavaScript to access the response.). The omit parameter gets used when we do not want to send or receive cookies. This behavior is like XHR’s withCredentials flag, but with three available values instead of two.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
var myRequest = new Request('flowers.jpg');
var myCred = myRequest.credentials; // returns "same-origin" by default
```

  </div>
  </div>
</details>

---

### What is the fetch cache option's role in HTTP-caching?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `cache` option in Fetch influences how the request interacts with the HTTP cache. It can enforce specific cache behavior, like bypassing cache or only using cache.
    </div><br/>
  <div><strong>Technical Response:</strong> By default, fetch requests make use of standard HTTP-caching. It respects the Expires and Cache-Control headers, sends If-Modified-Since, and other options. Just like the behavior of a regular HTTP-request. The cache option allows us to ignore HTTP-cache or fine-tune its usage.
    </div>
  </div>
</details>

---

### How can we change the default behavior a HTTP-redirect using fetch?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By using the redirect option in Fetch, you can change the default HTTP-redirect behavior. The options include 'follow', 'error', or 'manual' to handle or reject redirects.
    </div>
  <div><strong>Technical Response:</strong> Normally, fetch transparently follows HTTP-redirects such as 301, 302, but there are more in the specification. The fetch redirect option allows us to tweak or modify the HTTP-behavior. Redirect's contains three redirect modification parameters: follow, error, and manual. The default value for the “follow” option transparently follows HTTP-redirects. In the case of an HTTP-redirect, the error argument returns an error, and the manual argument allows us to process HTTP-redirects manually. In the event of a redirect, we receive a specific response object containing the response. type="opaqueredirect" and zeroed/empty status and most other properties.
    </div>
  </div>
</details>

---

### How does the fetch integrity option work or behave?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `integrity` option in Fetch allows for sub-resource integrity checks. It expects a cryptographic hash of the resource to ensure data hasn't been tampered with.
    </div><br />
  <div><strong>Technical Response:</strong> The integrity option allows to check if the response matches the known-ahead checksum. The specification's supported hash functions are SHA-256, SHA-384, and SHA-512. There might be others, depending on the browser. For example, we are downloading a file, and we know that is SHA-256 checksum is “abcdef” (an actual checksum is more extended, of course). Fetch calculates SHA-256 on its own and compares it with our string. In case of a mismatch, an error triggers.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
fetch('http://site.com/file', {
  integrity: 'sha256-abcdef',
});
```

  </div>
  </div>
</details>

---

### Is the Fetch API supported in all browsers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Fetch is supported in most modern browsers, but not in Internet Explorer. You can use polyfills to support older browsers.
  </div><br />
  </div>
</details>

---
