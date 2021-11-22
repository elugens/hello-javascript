---
title: Cross-Origin Requests
sidebar_position: 5
---

# Cross-Origin Requests

**Network Requests: Fetch: Cross-Origin Requests**

<head>
  <title>Cross-Origin Requests - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What happens when we send a fetch request to another domain without special headers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we send a fetch request to another website, the fetch request will more than likely fail. Cross-origin requests are defined as requests sent to another domain (even a subdomain) or protocol or port that require special headers from the remote side.
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

### What is CORS and why is it needed?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate the other origins (domain, scheme, or port) than its own from which a browser should permit loading of resources. CORS exists to protect the internet from evil hackers from sending fraudulent requests. It is a simple, yet powerful rule as a foundation of the internet security.
    </div>
  </div>
</details>

---

### What are the two types of cross-origin requests?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are two types of cross-origin requests including safe and unsafe requests. A request is safe if it satisfies two conditions including safe methods (GET, POST, OR HEAD) and safe headers (ACCEPT, ACCEPT-LANGUAGE, etc.). Any other request is considered “unsafe”. For instance, a request with PUT method or with an API-Key HTTP-header that does not fit the limitations. The essential difference is that a safe request can be made with a &#8249;form&#8250; or a &#8249;script&#8250;, without any special methods.
    </div>
  </div>
</details>

---

### Does the browser guarantee the location of the Origin in the header?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, if a request is cross-origin, the browser always adds the Origin header to it. There is no way to change this behavior because it is controlled by the browser. The server can inspect the Origin and, if it agrees to accept such a request, add a special header Access-Control-Allow-Origin to the response. That header should contain the allowed origin, or a star (*). Then the response is successful, otherwise it is an error, and it will fail.
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
  <div><strong>Interview Response:</strong> Yes, the browser plays the role of a trusted mediator, it ensures that the correct Origin is sent with a cross-origin request. It checks for permitting Access-Control-Allow-Origin in the response, if it exists, then JavaScript can access the response, otherwise it fails with an error.
    </div>
  </div>
</details>

---

### What entities can JavaScript access in the response header?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For cross-origin request, by default JavaScript may only access so-called “safe” response header entities like the Cache-Control and Content-Type. Accessing any other response header entity causes an error and results in failure. It should be noted, there is no Content-Length header entity in the list! This header contains the full response length. So, if we are downloading something and would like to track the percentage of progress, then an additional permission is required to access that header entity.
    </div>
  </div>
</details>

---

### What server response is necessary to access unsafe header name?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To grant JavaScript access to any other response header (unsafe header names), the server must send the Access-Control-Expose-Headers header. It contains a comma-separated list of unsafe header names that should be made accessible.
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

### Can you explain what a preflight request is in relation to cross-origin requests?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A preflight request is a small request that is sent by the browser before the actual request. It contains information like which HTTP method is used, as well as if any custom HTTP headers are present. The preflight gives the server a chance to examine what the actual request will look like before it has been made. If the server agrees to serve the requests, then it should respond with empty body, status 200 and headers. The preflight request occurs “behind the scenes”, it is invisible to JavaScript.
    </div>
  </div>
</details>

---

### Does a cross-origin request by JavaScript code bring any credentials by default?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A cross-origin request initiated by JavaScript code by default does not bring any credentials (cookies or HTTP authentication). That is uncommon for HTTP-requests. Usually, a request to http://site.com is accompanied by all cookies from that domain. Cross-origin requests made by JavaScript methods on the other hand are an exception.
    </div>
  </div>
</details>

---
