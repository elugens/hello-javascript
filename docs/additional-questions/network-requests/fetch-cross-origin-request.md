---
title: Cross-Origin Requests
description: Cross-Origin Requests uses the CORS (Cross-Origin Resource Sharing) protocol to allow web applications to access resources from other domains.
sidebar_position: 5
sidebar_label: Cross-Origin Requests
keywords:
  - cross-origin requests
  - cors
  - cross origin resource sharing
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
  - cross-origin requests
  - cors
  - cross origin resource sharing
  - interview answers
  - interview questions
---

<head>
  <title>Cross-Origin Requests | JavaScript Frontend Phone Interview</title>
</head>

**Network Requests: Fetch: Cross-Origin Requests**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What happens when we send a fetch request to another domain without special headers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we send a fetch request to another website, the fetch request will more than likely fail. Cross-origin requests are requests sent to another domain (even a subdomain) or protocol or port requiring special headers from the remote side.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
try {
  await fetch('http://example.com');
} catch (err) {
  alert(err); // Failed to fetch
}
```

  </div>
  </div>
</details>

---

### What is CORS, and why is it needed?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate the other origins (domain, scheme, or port) than its own from which a browser should permit loading of resources. CORS exists to protect the internet from evil hackers from sending fraudulent requests, and it is a simple yet powerful rule as a foundation of internet security.
    </div>
  </div>
</details>

---

### What are the two types of cross-origin requests?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are two types of cross-origin requests, including safe and unsafe requests. A request is safe if it satisfies two conditions: safe methods (GET, POST, OR HEAD) and safe headers (ACCEPT, ACCEPT-LANGUAGE). Any other request is considered “unsafe”—for example, a PUT request or an API-Key HTTP-header that does not adhere to the restrictions. The essential difference is that you can make a safe request with a &#8249;form&#8250; or a &#8249;script&#8250; without any unique methods.
    </div>
  </div>
</details>

---

### Does the browser guarantee the location of the origin in the header?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, if a request is cross-origin, the browser always adds the Origin header. There is no way to change this behavior because the browser controls it. The server can inspect the origin and if it agrees to accept such a request, add a special header Access-Control-Allow-Origin to the response. That header should contain the allowed origin or a star *. Then the response is successful. Otherwise, it is an error, and it fails.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
GET / request
Host: anywhere.com
Origin: https://javascript.help
...
```

  </div>
  </div>
</details>

---

### Does the browser act as a mediator between the server and JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the browser plays the role of a trusted mediator. It ensures that the correct origin transmits with a cross-origin request. It checks for permitting Access-Control-Allow-Origin in the response, and if it exists, then JavaScript can access the response. Otherwise, it fails with an error.
    </div>
  </div>
</details>

---

### What entities can JavaScript access in the response header?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript may only access so-called “safe” response header entities like the Cache-Control and Content-Type for cross-origin requests. Accessing any other response header entity causes an error and results in failure. We should note that there is no Content-Length header entity in the list! This header contains the complete response length. So, if we are downloading something and would like to track the progress percentage, then additional permission is required to access that header entity.
    </div>
  </div>
</details>

---

### What server response is necessary to access unsafe header names?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The server must send the Access-Control-Expose-Headers header to enable JavaScript access to any other response header (unsafe header names). It provides a list of dangerous header names separated by commas that should be made available.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
200 OK
Content-Type:text/html; charset=UTF-8
Content-Length: 12345
API-Key: 2c9de507f2c54aa1
Access-Control-Allow-Origin: https://javascript.info
Access-Control-Expose-Headers: Content-Length, API-Key // <--
```

  </div>
  </div>
</details>

---

### Could you please define a preflight request regarding cross-origin requests?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A preflight request is a small request sent by the browser before the actual submission. It contains information like which HTTP method we used and if any custom HTTP headers are present. The preflight gives the server a chance to examine what the actual request looks like before it transmits. If the server agrees to serve the requests, it should respond with an empty body, status 200, and headers. The preflight request occurs “behind the scenes” and is invisible to JavaScript.
    </div>
  </div>
</details>

---

### Does a cross-origin request by JavaScript code bring any credentials by default?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A default cross-origin request initiated by JavaScript code does not bring any credentials (cookies or HTTP authentication). That is uncommon for HTTP requests. Usually, a request to http://site.com gets accompanied by all cookies from that domain. Cross-origin requests made by JavaScript methods, on the other hand, are an exception.
    </div>
  </div>
</details>

---
