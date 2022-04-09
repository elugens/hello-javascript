---
title: Fetch API
description: Fetch API is used to make network requests. It is used to make GET, POST, PUT, DELETE, and PATCH network requests.
sidebar_position: 6
sidebar_label: Fetch API
---

**Network Requests: Fetch API**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Why is fetch the preferred way to send a network request via the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Beyond the Fetch being built on the Promise Object. Fetch is easy to implement compared other methods used to send a network request, like Ajax. It should be noted, if you also want to interact (bi-directional) with the server, the WebSocket object is also more appropriate than fetch. In other cases, fetch offers a great simplicity to load content in a page. Fetch also has a large of fetch set of options including referrer, referrerPolicy, mode, and so on.
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
  <div><strong>Interview Response:</strong> The referrer and referrerPolicy options govern how fetch sets the HTTP Referrer header. Usually that header is set automatically and contains the URL of the page that made the request. In most scenarios, it is not important at all, sometimes, for security purposes, it makes sense to remove or shorten it. Basically, the referrer option allows us to set any Referrer (within the current origin) or remove it and the referrerPolicy option sets general rules for Referrer.
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

### Is the referrerPolicy fetch option limited to use with Fetch?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, the referrer policy, described in the specification, is not just for fetch, but more global. It is possible to set the default policy for the whole page using the Referrer-Policy HTTP header, or per-link, with &#8249;a rel="noreferrer"&#8250;.
    </div>
  </div>
</details>

---

### Can you explain, what is the purpose of the fetch mode option?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The mode option is a safe-guard that prevents occasional cross-origin requests. It has three parameters including cors, same-origin, and no-cors. The cors parameter is the the default state which allows cross-origin requests. The same-origin parameter only allows requests from the origin. When same-origin is set all cross-origin requests are forbidden. The no-cors parameter is only allows safe cross-origin requests. The mode option may be useful when the URL for fetch comes from a 3rd-party, and we want a “power off switch” to limit cross-origin capabilities.
    </div>
  </div>
</details>

---

### What does the Fetch credential option do during a network request?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The credentials option specifies whether fetch should send cookies and HTTP-Authorization headers with the request. It has three parameters including same-origin, include, and omit. The same-origin parameter is the default setting used to only send user credentials if the URL is on the same origin as the calling script. The include parameter is used if we always want to send user credentials even for cross-origin calls. (It should be noted, that include requires Accept-Control-Allow-Credentials from cross-origin server for JavaScript to access the response.). The omit parameter is used when we do not want to send or receive cookies. This is like XHR’s withCredentials flag, but with three available values instead of two.
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

### What does the fetch cache option do in relation to HTTP-caching?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By default, fetch requests make use of standard HTTP-caching. That is, it respects the Expires and Cache-Control headers, sends If-Modified-Since and so on. Just like the behavior of a regular HTTP-request. The cache option allows us to ignore HTTP-cache or fine-tune its usage.
    </div>
  </div>
</details>

---

### How can we change the default behavior a HTTP-redirect using fetch?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Normally, fetch transparently follows HTTP-redirects, like 301, 302 etc. The fetch redirect option allows us to change or modify the behavior of the HTTP-redirect. It has three parameters for redirect modification including follow, error, and manual. The follow parameter is the default value, it transparently follows HTTP-redirects. The error parameter returns an error in the case of the HTTP-redirect. The manual parameter allows us to process HTTP-redirects manually. In case of redirect, we’ll get a special response object, with response.type="opaqueredirect" and zeroed/empty status and most other properties.
    </div>
  </div>
</details>

---

### How does the fetch integrity option work or behave?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The integrity option allows to check if the response matches the known-ahead checksum. As described in the specification, supported hash-functions are SHA-256, SHA-384, and SHA-512, there might be others depending on the browser. For example, we are downloading a file, and we know that it is SHA-256 checksum is “abcdef” (a real checksum is longer, of course). Fetch will calculate SHA-256 on its own and compare it with our string. In case of a mismatch, an error is triggered.
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
