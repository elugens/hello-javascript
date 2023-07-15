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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/FetchCrossSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Cross-Origin Requests | JavaScript Frontend Phone Interview</title>
</head>

**Network Requests: Fetch: Cross-Origin Requests**

<CloseAllAnswers />

---

### What is CORS, and why is it needed?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> CORS, Cross-Origin Resource Sharing, is a mechanism allowing resources (e.g., fonts, JavaScript) on a webpage to be requested from a different domain, circumventing the same-origin policy for safer cross-origin interactions.
    </div><br/>
  <div><strong>Technical Response:</strong> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate the other origins (domain, scheme, or port) than its own from which a browser should permit loading of resources. CORS exists to protect the internet from evil hackers from sending fraudulent requests, and it is a simple yet powerful rule as a foundation of internet security.
    </div>
  </div>
</details>

---

### What is the 'same-origin policy'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Same-origin policy is a security concept in web application development that restricts how a document or script loaded from one origin can interact with a resource from another origin.
  </div><br />
  <div><strong>Technical Details:</strong> The Same-Origin Policy is a critical aspect of web security. It prevents documents or scripts loaded from one origin from getting or setting properties of a document from a different origin. The policy is used as a means to prevent some of the malicious attacks, including CSRF or Cross-Site Request Forgery. The origins are the combination of protocol, port (if specified), and host. If any of these differ between two pages, they are considered to have different origins.
  </div><br />
  <div><strong className="codeExample">Here's an example of how this policy works:</strong><br /><br />

  <div></div>

Suppose you have JavaScript code running on a webpage at `https://example.com`.

```javascript
const req = new XMLHttpRequest();
req.open('GET', 'https://different-example.com');
req.send();
```

In this code, a new `XMLHttpRequest` is created to send a GET request to `https://different-example.com`. If the Same-Origin Policy was not in place, this would allow `https://example.com` to make a request to `https://different-example.com`, potentially revealing sensitive information.

However, due to the Same-Origin Policy, this request will be blocked by the browser because it's being made from `https://example.com` to `https://different-example.com`, which are different origins.

If `https://different-example.com` wants to allow cross-origin requests from `https://example.com`, it needs to send back the appropriate CORS (Cross-Origin Resource Sharing) headers, like `Access-Control-Allow-Origin: https://example.com`.

---

:::note
Note: The example above uses `XMLHttpRequest`, but the Same-Origin Policy applies to all web APIs that make requests, including `fetch`.
:::

`XMLHttpRequest` is not a recommended way to make HTTP requests. The newer Fetch API is recommended instead. Always ensure to check for compatibility and consider using polyfills for unsupported features.

  </div>
  </div>
</details>

---

### How does CORS help with the same-origin policy?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> CORS allows servers to specify who can access its resources, providing a way to safely relax the Same-Origin Policy by including appropriate headers in the response.
  </div>
  </div>
</details>

---

### What are 'simple requests' in CORS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> 'Simple requests' in CORS are HTTP GET, HEAD, or POST requests that meet certain criteria like specific content-types, which don't trigger a preflight check for cross-origin safety.
  </div><br />
  <div><strong className="codeExample">Here's an example of a simple request using the Fetch API:</strong><br /><br />

  <div></div>

```js
fetch('https://api.example.com/data', {
  method: 'POST', // or 'GET', 'HEAD'
  headers: {
    'Content-Type': 'text/plain', // or 'application/x-www-form-urlencoded', 'multipart/form-data'
    'Accept': 'application/json',
    'Content-Language': 'en-US',
  },
  body: 'Hello, world!'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

  </div>
  </div>
</details>

---

### What is a 'preflight request' in CORS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A preflight request in CORS (Cross-Origin Resource Sharing) is an automatic HTTP OPTIONS request sent by the browser before a non-simple request, to check if the server allows such a request based on its CORS policy.
  </div><br />
  <div><strong>Technical Response:</strong> Preflight requests are made before the actual request, to check the server's CORS policy, typically using the OPTIONS HTTP method. This is done to prevent cross-site scripting attacks. CORS stands for Cross-Origin Resource Sharing. It is a security mechanism that allows web pages to request resources from other domains. The OPTIONS method is a HTTP method that is used to test the capabilities of a web server. It is typically used to check if a server supports a particular feature or not. In the case of CORS, the OPTIONS method is used to check if the server allows cross-origin requests. If the server does not allow cross-origin requests, the browser will not make the actual request.
  </div><br />
  <div><strong className="codeExample">Here's an example of how you might trigger a preflight request using the Fetch API:</strong><br /><br />

  <div></div>

```javascript
fetch('https://api.example.com/data', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'value',
  },
  body: JSON.stringify({ key: 'value' }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

In this code:

- The request method is 'PUT', which is a non-simple method that triggers a preflight request.
- The 'Content-Type' header is 'application/json', which is a non-simple content type that triggers a preflight request.
- An additional custom header 'X-Custom-Header' is included, which also triggers a preflight request.
- The body of the request is a JSON string, which doesn't influence whether a preflight request is made or not.

Before this request is made, the browser automatically sends a preflight request to the server at '<https://api.example.com>'. The preflight request uses the OPTIONS method and includes headers like `Access-Control-Request-Method` and `Access-Control-Request-Headers` that tell the server what the actual request will look like.

  </div>
  </div>
</details>

---

### What are some HTTP headers relevant to CORS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Headers like Origin, Access-Control-Allow-Origin, and Access-Control-Allow-Methods play key roles in CORS. These headers are used to control which origins, headers, and methods are allowed to be used in cross-origin requests.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a brief example of how some of these headers could be set in a server response using Node.js and the Express.js framework.

```js
const express = require('express');
const app = express();

app.use((req, res, next) => {
  // Allow cross-origin requests from example.com
  res.header('Access-Control-Allow-Origin', 'https://example.com');

  // Allow methods for preflight request
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  // Allow headers for preflight request
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Custom-Header');

  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```

---

:::warning
This is a basic example. The actual CORS policy for your server should be carefully considered based on your specific needs and security considerations.
:::

  </div>
  </div>
</details>

---

### What does Access-Control-Allow-Origin do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'Access-Control-Allow-Origin' header is used to control which origins are allowed to access a resource. The header can be used to allow all origins, specific origins, or no origins. If the header is not present, then the browser will not allow the request to be made.
  </div>
  </div>
</details>

---

### What is the function of Access-Control-Allow-Methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Access-Control-Allow-Methods header is used to control which HTTP methods are allowed to be used in cross-origin requests. The header can be used to allow all methods, specific methods, or no methods. If the header is not present, then the browser will only allow the GET method to be used.
  </div>
  </div>
</details>

---

### What's the role of the Access-Control-Allow-Headers header?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Access-Control-Allow-Headers header is used to control which HTTP headers are allowed to be used in cross-origin requests. The header can be used to allow all headers, specific headers, or no headers. If the header is not present, then the browser will only allow the Origin, Accept, and Content-Type headers to be used.
  </div>
  </div>
</details>

---

### What are the risks if CORS is improperly implemented?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If CORS is not properly implemented, it can allow unauthorized access to resources, which can lead to information leakage. Additionally, if CORS is not properly configured, it can allow attackers to modify data or even deny service to users.
  </div>
  </div>
</details>

---

### What's the role of the Access-Control-Expose-Headers header?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Access-Control-Expose-Headers header tells the browser which response headers can be exposed to JavaScript from a cross-origin request.
  </div>
  </div>
</details>

---

### How does Access-Control-Allow-Credentials work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> This header tells browsers whether to expose the response to frontend JavaScript when the request's credentials mode is 'include'.
  </div>
  </div>
</details>

---

### What's the function of Access-Control-Max-Age?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It defines how long the results of a preflight request can be cached.
  </div>
  </div>
</details>

---

### How does CORS affect cookies?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By default, cross-origin requests do not include cookies. For cookies to be included in CORS, the Access-Control-Allow-Credentials header must be set to true and cookies should be set with credentials.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
fetch('https://api.example.com/data', {
  method: 'GET',
  credentials: 'include', // Include cookies in this request
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

Here's an example server response using Node.js and the Express.js framework:

```js
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://example.com');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

---

:::note
Note that CORS and credentials have implications for security and privacy, so they should be used judiciously.
:::

  </div>
  </div>
</details>

---

### What does the HTTP Origin header do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Origin header indicates where a fetch originates from. It doesn't include any path information, but it does include the server and protocol.
  </div><br />
  <div><strong>Technical Response:</strong> The HTTP `Origin` header is used by the browser in CORS (Cross-Origin Resource Sharing) to indicate the origin of a request. This helps the server decide whether to allow or reject the request based on its CORS policy. The `Origin` header is included automatically by the browser in cross-origin requests. It's also included in same-origin requests made using the Fetch or XMLHttpRequest APIs, but it's not included in same-origin requests made using the form or script element.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of a fetch request that includes an `Origin` header.

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('There has been a problem with your fetch operation: ', error));
```

In this example, if the code is running on `https://example.com`, the browser automatically includes an `Origin` header in the request like this: `Origin: https://example.com`.

On the server side, the server can check the `Origin` header to decide whether to allow the request. Here's a simple example using Node.js and Express:

```javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
  // Check the Origin header
  if (req.headers.origin === 'https://example.com') {
    // If the Origin is https://example.com, allow the request
    res.header('Access-Control-Allow-Origin', 'https://example.com');
  }
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In this server-side code, the server checks the `Origin` header of each request. If the `Origin` is `https://example.com`, the server sends an `Access-Control-Allow-Origin: https://example.com` response header, allowing the request.

---

:::note
Note: The `Origin` header can't be altered through JavaScript on the client side; it's controlled by the browser. As of March 2020, fetch and CORS are not supported in all browsers, always ensure to check for compatibility and consider using polyfills for unsupported features.
:::

  </div>
  </div>
</details>

---

### Why is CORS a security feature?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> CORS is a security feature because it prevents requests to and from unauthorized domains, protecting against malicious interactions.
  </div>
  </div>
</details>

---

### What is the 'wildcard' in CORS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The wildcard (*) in CORS is used in headers to indicate 'all' or 'any'. However, it can't be used with credentials.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a simple server-side code example using Node.js and Express.js.

```js
const express = require('express');
const app = express();

app.use((req, res, next) => {
  // Allow any origin to access this resource
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

  </div>
  </div>
</details>

---

### What's a potential issue with setting Access-Control-Allow-Origin to a open wildcard '*'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Setting this header to a open wildcard (*) allows any domain access, which could potentially expose sensitive data or actions to malicious sites.
  </div>
  </div>
</details>

---

### What's the use of the preflight request in CORS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Preflight requests ensure that the server supports the HTTP method and headers used by the actual request, avoiding unnecessary processing.
  </div>
  </div>
</details>

---

### What does CORS mean by 'credentials'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In CORS, 'credentials' refer to HTTP cookies, HTTP authentication headers, or client-side SSL certificates that are sent on cross-origin requests.
  </div>
  </div>
</details>

---

### Is there a way to improve the performance of a preflight test in CORS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, using the Access-Control-Max-Age header, responses from preflight requests can be cached to improve performance by avoiding repetitive preflight checks for the same request.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Node.js and the Express.js framework.<br /><br />

  <div></div>

```js
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://example.com');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Max-Age', 86400); // Cache preflight request for 24 hours
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```

  </div>
  </div>
</details>

---

### What happens when we send a fetch request to another domain without special headers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we send a fetch request to another website, the fetch request will more than likely fail. Cross-origin requests are requests sent to another domain (even a subdomain) or protocol or port requiring special headers from the remote side.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a basic JavaScript example of a Fetch request:

```javascript
fetch('https://example.com/data', {
  method: 'GET',
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

---

:::note
Note: If the target server at "<https://example.com/data>" doesn't have CORS headers set to accept requests from your domain, the browser will block the request.
:::

  </div>
  </div>
</details>

---

### What are the two types of cross-origin requests?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The two types of cross-origin requests are 'simple requests' which are sent directly, and 'preflighted requests' which are preceded by a preflight request for validation.
    </div><br/>
  <div><strong>Technical Response:</strong> There are two types of cross-origin requests, including safe and unsafe requests. A request is safe if it satisfies two conditions: safe methods (GET, POST, OR HEAD) and safe headers (ACCEPT, ACCEPT-LANGUAGE). Any other request is considered “unsafe”—for example, a PUT request or an API-Key HTTP-header that does not adhere to the restrictions. The essential difference is that you can make a safe request with a &#8249;form&#8250; or a &#8249;script&#8250; without any unique methods.
    </div>
  </div>
</details>

---

### What are the two types of cross-origin requests in relation to web security?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In terms of web security, the two types of cross-origin requests are "same-origin" requests, which are permitted by default, and "cross-origin" requests, which require CORS to allow them.
  </div>
  </div>
</details>

---

### Does the browser guarantee the location of the origin in the header?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, the browser does not guarantee the origin's location in the header. Origin information is controlled by the server, and the server decides whether to allow cross-origin requests based on its CORS policy.
    </div><br />
  <div><strong>Technical Response:</strong> Yes, if a request is cross-origin, the browser always adds the Origin header. There is no way to change this behavior because the browser controls it. The server can inspect the origin and if it agrees to accept such a request, add a special header Access-Control-Allow-Origin to the response. That header should contain the allowed origin or a star *. Then the response is successful. Otherwise, it is an error, and it fails.
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
  <div><strong>Interview Response:</strong> Yes, the browser acts as a mediator, executing JavaScript, sending HTTP requests, enforcing same-origin policy, and implementing CORS policies before exposing data to JavaScript.
    </div><br/>
  <div><strong>Technical Response:</strong> Yes, the browser plays the role of a trusted mediator. It ensures that the correct origin transmits with a cross-origin request. It checks for permitting Access-Control-Allow-Origin in the response, and if it exists, then JavaScript can access the response. Otherwise, it fails with an error.
    </div>
  </div>
</details>

---

### What entities can JavaScript access in the response header?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript can access certain whitelisted headers like Cache-Control, Content-Language, Content-Type, Expires, Last-Modified, and Pragma. Others can be exposed via Access-Control-Expose-Headers.
    </div>
  <div><strong>Technical Response:</strong> JavaScript may only access so-called “safe” response header entities like the Cache-Control and Content-Type for cross-origin requests. Accessing any other response header entity causes an error and results in failure. We should note that there is no Content-Length header entity in the list! This header contains the complete response length. So, if we are downloading something and would like to track the progress percentage, then additional permission is required to access that header entity.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

By default, JavaScript can access only a few response headers when using the Fetch or XMLHttpRequest APIs.

Fetch Example:

```js
fetch('https://api.example.com/data')
.then(response => {
  // Access default allowed headers
  console.log(response.headers.get('Content-Type'));
  console.log(response.headers.get('Last-Modified'));
})
.catch(error => console.error('Error:', error));
```

Node.js and Express.js Example:

```js
fetch('https://api.example.com/data')
.then(response => {
  // Access default allowed headers
  console.log(response.headers.get('Content-Type'));
  console.log(response.headers.get('Last-Modified'));
})
.catch(error => console.error('Error:', error));
```

  </div>
  </div>
</details>

---

### What server response is necessary to access unsafe header names?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To access unsafe header names, the server must include these header names in the Access-Control-Expose-Headers header in its response.
    </div><br />
  <div><strong>Technical Response:</strong> The server must send the Access-Control-Expose-Headers header to enable JavaScript access to any other response header (unsafe header names). It provides a list of dangerous header names separated by commas that should be made available.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
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
  <div><strong>Interview Response:</strong> A preflight request is a CORS mechanism where the browser sends an initial HTTP OPTIONS request to the server to check if the actual request is safe and allowed.
    </div><br/>
  <div><strong>Technical Response:</strong> A preflight request is a small request sent by the browser before the actual submission. It contains information like which HTTP method we used and if any custom HTTP headers are present. The preflight gives the server a chance to examine what the actual request looks like before it transmits. If the server agrees to serve the requests, it should respond with an empty body, status 200, and headers. The preflight request occurs “behind the scenes” and is invisible to JavaScript.
    </div>
  </div>
</details>

---

### Does a cross-origin request by JavaScript code bring any credentials by default?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Technical Response:</strong> By default, cross-origin requests do not include credentials (cookies, HTTP authentication, client-side certificates). The 'credentials' option must be set to 'include'.
    </div><br/>
  <div><strong>Technical Response:</strong> A default cross-origin request initiated by JavaScript code does not bring any credentials (cookies or HTTP authentication). That is uncommon for HTTP requests. Usually, a request to http://site.com gets accompanied by all cookies from that domain. Cross-origin requests made by JavaScript methods, on the other hand, are an exception.
    </div>
  </div>
</details>

---
