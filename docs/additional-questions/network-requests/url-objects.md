---
title: URL Objects
description: URL Objects are used to parse and create URLs in JavaScript. Proper implementation of URL Objects is important for security and performance reasons.
sidebar_position: 7
sidebar_label: URL Objects
keywords:
  - url objects
  - network requests
  - built-in url objects
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
  - url objects
  - network requests
  - built-in url objects
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/UrlObjectsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>URL Objects | JavaScript Frontend Phone Interview Questions</title>
</head>

**Network Requests: URL Objects**

---

<AdSense />

---

<CloseAllAnswers />

### What is a URL object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A URL object in JavaScript is a built-in object that provides methods and properties to manipulate and parse URLs.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
new URL(url)
new URL(url, base)

// Mozilla Example

let B = new URL(baseUrl);
// => 'https://developer.mozilla.org/'

new URL("en-US/docs", B);
// => 'https://developer.mozilla.org/en-US/docs'
```

  </div>
  </div>
</details>

---

### What does the 'href' property do in a URL object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `href` property of a URL object in JavaScript provides the entire URL as a string, including the protocol, hostname, port, path, query string, and fragment identifier.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

- **Creating a new URL object**

```javascript
let url = new URL("https://www.example.com/path?query=example#fragment");

console.log(url.href);
// Output: "https://www.example.com/path?query=example#fragment"
```

- **Modifying an existing URL**

```javascript
let url = new URL("https://www.example.com");

url.href = "https://www.newexample.com/newpath?newquery=newexample#newfragment";

console.log(url.href);
// Output: "https://www.newexample.com/newpath?newquery=newexample#newfragment"
```

As you can see, the `href` property can be used to both read the full URL, and set a new URL. Note that when you modify the `href` of a URL object, all the other properties (like `protocol`, `host`, `pathname`, `search`, and `hash`) get updated as well.

  </div>
  </div>
</details>

---

### What does the protocol property in a URL object represent?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The protocol property represents the protocol scheme of the URL, like http, https, etc.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let url = new URL("https://www.example.com/path?query=example#fragment");

url.host = "www.newexample.com:9090";

console.log(url.protocol);
// Output: "https:"

console.log(url.href);
// Output: "https://www.newexample.com:9090/path?query=example#fragment"
```

  </div>
  </div>
</details>

---

### What is the host property in a URL object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The <strong>"host"</strong> property contains the full host portion of the URL, including the port if specified.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let url = new URL("https://www.example.com/path?query=example#fragment");

url.host = "www.newexample.com:9090";

console.log(url.host);
// Output: "www.newexample.com:9090"

console.log(url.href);
// Output: "https://www.newexample.com:9090/path?query=example#fragment"
```

  </div>
  </div>
</details>

---

### What is the pathname property in a URL object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The pathname is the path section of the URL that comes after the host and before the query, including the initial slash.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let url = new URL("https://www.example.com/path?query=example#fragment");

url.host = "www.newexample.com:9090";

console.log(url.pathname);
// Output: "/path"

console.log(url.href);
// Output: "https://www.newexample.com:9090/path?query=example#fragment"
```

  </div>
  </div>
</details>

---

### What does the search property do in a URL object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `search` property in a URL object retrieves or sets the query string parameters of a URL.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let url = new URL("https://www.example.com/path?query=example#fragment");

url.host = "www.newexample.com:9090";

console.log(url.search);
// Output: "?query=example"

console.log(url.href);
// Output: "https://www.newexample.com:9090/path?query=example#fragment"
```

  </div>
  </div>
</details>

---

### What does the hash property represent in a URL object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `hash` property in a URL object represents the fragment identifier (the part of a URL after the '#'), typically used for linking to specific sections within a webpage.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

- **Creating a new URL object and accessing the hash**

```js
let url = new URL("https://www.example.com/path?query=example#fragment");

console.log(url.hash);
// Output: "#fragment"
```

- **Modifying the hash of an existing URL**

```js
let url = new URL("https://www.example.com/path?query=example");

url.hash = "newfragment";

console.log(url.hash);
// Output: "#newfragment"

console.log(url.href);
// Output: "https://www.example.com/path?query=example#newfragment"
```

Note that when you modify the hash of a URL object, the href property is updated to reflect the new URL.

  </div>
  </div>
</details>

---

### What does the port property represent in a URL object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `port` property in a URL object represents the port number specified in the URL, indicating the communication endpoint for the requested resource.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

- **Creating a new URL object and accessing the port**

```js
let url = new URL("https://www.example.com:8080/path?query=example#fragment");

console.log(url.port);
// Output: "8080"
```

- **Modifying the port of an existing URL**

```js
let url = new URL("https://www.example.com/path?query=example");

url.port = "9090";

console.log(url.port);
// Output: "9090"

console.log(url.href);
// Output: "https://www.example.com:9090/path?query=example"
```

Note that when you modify the hash of a URL object, the href property is updated to reflect the new URL.

  </div>
  </div>
</details>

---

### What is the purpose of the username and password properties in a URL object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `username` and `password` properties in a URL object are used to store the credentials (login information) for authentication when accessing protected resources through the URL.
  </div><br />
  <div><strong>Technical Response:</strong> In JavaScript, the `username` and `password` properties of a URL object are used to represent the username and password in a URL, respectively. They're part of the user information subcomponent in a URI, and can be used to authenticate the user with the server. Note that usage of passwords directly in URLs is generally not recommended due to security reasons.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

- **Creating a new URL object and accessing the username and password**

```javascript
let url = new URL("https://username:password@example.com/path?query=example#fragment");

console.log(url.username); // Output: "username"
console.log(url.password); // Output: "password"
```

- **Modifying the username and password of an existing URL**

```javascript
let url = new URL("https://example.com/path?query=example");

url.username = "newusername";
url.password = "newpassword";

console.log(url.username); // Output: "newusername"
console.log(url.password); // Output: "newpassword"

console.log(url.href); 
// Output: "https://newusername:newpassword@example.com/path?query=example"
```

---

:::warning
Note that usage of passwords directly in URLs is generally not recommended due to security reasons.
:::

  </div>
  </div>
</details>

---

### What is the origin property in a URL object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `origin` property in a URL object represents the combination of the scheme, host, and port, providing the unique identifier for a web origin or the base URL of a resource. It's read-only, so you can't modify it directly like you can with other properties.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

- **Creating a new URL object and accessing the origin**

```javascript
let url = new URL("https://www.example.com:8080/path?query=example#fragment");

console.log(url.origin);
// Output: "https://www.example.com:8080"
```

---

:::note
Note that `origin` property is read-only. You cannot modify the `origin` directly; instead, you can modify the `protocol`, `hostname`, or `port` properties individually, and the `origin` will update accordingly.
:::

  </div>
  </div>
</details>

---

### What is the purpose of the URLSearchParams interface?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `URLSearchParams` interface provides utility methods to manipulate and interact with the query string parameters of a URL, allowing easy parsing, modification, and creation of query strings.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

- **Creating a new URL object and accessing the search parameters**

```javascript
let url = new URL("https://www.example.com/path?query1=example1&query2=example2#fragment");

let params = new URLSearchParams(url.search);

console.log(params.get('query1')); // Output: "example1"
console.log(params.get('query2')); // Output: "example2"
```

- **Modifying the search parameters of an existing URL**

```javascript
let url = new URL("https://www.example.com/path?query=example");

let params = new URLSearchParams(url.search);
params.set('query', 'newexample');
params.append('newquery', 'example');

url.search = params.toString();

console.log(url.href); 
// Output: "https://www.example.com/path?query=newexample&newquery=example"
```

The `URLSearchParams` interface is very useful for manipulating the query string of a URL without having to deal with string parsing and serialization yourself.

  </div>
  </div>
</details>

---

### What is the purpose of the built-in URL class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The built-in URL class in JavaScript is used for parsing, constructing, normalizing, and encoding URLs. It provides properties and methods to manipulate URL components.
    </div><br />
  <div><strong>Technical Response:</strong> The built-in URL class offers a simple interface for constructing and interpreting URLs. There are no networking functions that need a specific URL object; strings suffice. So, theoretically, we don't need to utilize URLs. However, it might be helpful when constructing URLs dynamically. The URL() constructor provides a freshly generated URL object that represents the URL specified by the arguments, of which there are two: URL and base. A USVString or any other object with a stringifier indicating a relative URL, like an &#8249;a&#8250; element, represents the URL. If the URL is relative, the base must be specified and used as the base URL. If the URL is absolute, the base does not matter. The base is a string that represents the base URL to utilize when the URL is relative, and it defaults to undefined if not given.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> new URL(url, [base]);<br /><br />

  <div></div>

```js
// These two URLs are same:
let url1 = new URL('https://javascript.info/profile/admin');
let url2 = new URL('/profile/admin', 'https://javascript.info');

console.log(url1); // https://javascript.info/profile/admin
console.log(url2); // https://javascript.info/profile/admin

// We can easily create a new URL based on
// the path relative to an existing URL:
let url = new URL('https://javascript.info/profile/admin');
let newUrl = new URL('tester', url);

console.log(newUrl); // https://javascript.info/profile/tester

// The URL object immediately allows us to access its components
let url = new URL('https://javascript.info/url');

console.log(url.protocol); // https:
console.log(url.host); // javascript.info
console.log(url.pathname); // /url
```

  </div>
  </div>
</details>

---

### Can we pass URL objects to APIs and other methods instead of a string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can pass URL objects to APIs or methods, provided the API or method supports it. If not, you can convert the URL object to a string first.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a Node.js example using the `http` module and the `URL` object:

```javascript
const http = require('http');
const url = new URL('http://example.com');

http.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(data);
  });

}).on('error', (err) => {
  console.log("Error: " + err.message);
});
```

In this code, the `http.get` method accepts a `URL` object (`url`) as its first argument. Note that support for `URL` objects in APIs depends on the language and library.

  </div>
  </div>
</details>

---

### Is there a way to parse data inside a URL string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use the `URL` constructor in JavaScript to parse a URL string and access its properties, like `protocol`, `hostname`, `pathname`, `searchParams`, etc.
    </div><br />
  <div><strong>Interview Response:</strong> Yes, we can access the parameters via the searchParams URL property. A property formatted URL string should include encoding to ensure proper parsing. URL string parameters should be encoded if they contain spaces, Non-Latin letters. URL.searchParams returns a URLSearchParams object that we can use to access the string data. For instance, if the URL of your page is https://example.com/?name=Jonathan%20Smith&age=18, you could parse out the name and age parameters using URL.searchParams.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let params = new URL(document.location).searchParams;
let name = params.get('name'); // is the string "Jonathan Smith".
let age = parseInt(params.get('age')); // is the number 18
```

  </div>
  </div>
</details>

---

### Can you explain the function of the URLSearchParams.get() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The URLSearchParams.get() method is used to return the first value associated with a given search parameter from a query string in a URL.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let params = new URL(document.location).searchParams;
let name = params.get('name'); // is the string "Jonathan Smith".
let age = parseInt(params.get('age')); // is the number 18
```

  </div>
  </div>
</details>

---

### Which standard defines which characters are allowed in URLs?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The characters allowed in URLs are defined by the Uniform Resource Identifier (URI) syntax, specified in RFC 3986.
  </div><br />
  <div><strong>Technical Response:</strong> The RFC3986 standard determines which characters are allowed and not allowed in URLs. Non-Latin characters and spaces, for example, must be encoded and substituted with their UTF-8 codes, preceded by a percent sign, such as %20  (space can be encoded by + for historical reasons, but this is an exception). The good news is that URL objects take care of everything automatically. We input all arguments in their unencoded form and then transform the URL into a string.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// using some cyrillic characters for this example

let url = new URL('https://ru.wikipedia.org/wiki/Тест');

url.searchParams.set('key', 'ъ');
console.log(url); //https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D1%82?key=%D1%8A
```

  </div>
  </div>
</details>

---

### What is the difference between encodeURIComponent and encodeURI?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `encodeURI` encodes special characters except those used in typical URLs (like `:`, `/`, `;`, `?`). `encodeURIComponent` encodes all special characters, making it safe for use in URL components like query strings and path segments.
    </div>
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// For URL parameters we should use encodeURIComponent instead
let music = encodeURIComponent('Rock&Roll');

let url = `https://google.com/search?q=${music}`;
console.log(url); // https://google.com/search?q=Rock%26Roll

// Compare it with encodeURI
let music = encodeURI('Rock&Roll');

let url = `https://google.com/search?q=${music}`;
console.log(url); // https://google.com/search?q=Rock&Roll
```

---

:::note
We should note that encoding can be a bit touchy, and you should pay attention to any characters that encodeURI can misinterpret.
:::

  </div>
  </div>
</details>

---

### Is there a difference between URL transformation and the 'encoding' functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes. URL transformation refers to altering URL structure or parameters, while encoding (like `encodeURIComponent`, `encodeURI`) ensures special characters are correctly represented in URL strings, preventing misinterpretation.
    </div><br />
  <div><strong>Technical Details:</strong> Yes, The URI specification controls the definition of Classes URL and URLSearchParams: RFC3986, while (encode*) functions are defined based on the obsolete version RFC2396. There are a few differences concerning IPv6 addresses, which are encoded differently, and this difference is because IPv6 URLs did not exist in RFC2396 (August 1998). Such cases are rare, (encode*) functions work well most of the time, but we should be aware of it.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// valid url with IPv6 address
let url = 'http://[2607:f8b0:4005:802::1007]/';

console.log(encodeURI(url)); // http://%5B2607:f8b0:4005:802::1007%5D/
console.log(new URL(url)); // http://[2607:f8b0:4005:802::1007]/
```

  </div>
  </div>
</details>

---
