---
title: URL Objects
description: URL Objects are used to parse and create URLs in JavaScript. Proper implementation of URL Objects is important for security and performance reasons.
sidebar_position: 7
sidebar_label: URL Objects
---

**Network Requests: URL Objects**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is the purpose of the built-in URL class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The built-in URL class offers a simple interface for constructing and interpreting URLs. There are no networking functions that need a specific URL object; strings suffice. So, theoretically, we don't need to utilize URLs. However, it might be helpful when constructing URLs dynamically. The URL() constructor provides a freshly generated URL object that represents the URL specified by the arguments, of which there are two: URL and base. A USVString or any other object with a stringifier indicating a relative URL, like an &#8249;a&#8250; element, represents the URL. If the URL is relative, the base must be specified and used as the base URL. If the URL is absolute, the base does not matter. The base is a string that represents the base URL to utilize when the URL is relative, and it defaults to undefined if not given.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> new URL(url, [base]);<br /><br />

  <div></div>

```js
// These two URLs are same:
let url1 = new URL('https://javascript.info/profile/admin');
let url2 = new URL('/profile/admin', 'https://javascript.info');

alert(url1); // https://javascript.info/profile/admin
alert(url2); // https://javascript.info/profile/admin

// We can easily create a new URL based on
// the path relative to an existing URL:
let url = new URL('https://javascript.info/profile/admin');
let newUrl = new URL('tester', url);

alert(newUrl); // https://javascript.info/profile/tester

// The URL object immediately allows us to access its components
let url = new URL('https://javascript.info/url');

alert(url.protocol); // https:
alert(url.host); // javascript.info
alert(url.pathname); // /url
```

  </div>
  </div>
</details>

---

### Can we pass URL objects to networking and other methods instead of a string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use a URL object in fetch or XMLHttpRequest, pretty much everywhere a URL string is needed. In general, a URL object may be supplied to any method instead of a string since most methods execute string conversions that convert a URL object into a string with the whole URL.
    </div>
  </div>
</details>

---

### Is there a way to parse data inside a URL string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> YYes, we can access the parameters via the searchParams URL property. A property formatted URL string should include encoding to ensure proper parsing. URL string parameters should be encoded if they contain spaces, Non-Latin letters. URL.searchParams returns a URLSearchParams object that we can use to access the string data. For instance, if the URL of your page is https://example.com/?name=Jonathan%20Smith&age=18, you could parse out the name and age parameters using URL.searchParams.
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

### Explain the function and syntax of the URLSearchParams.get() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The get() method of the URLSearchParams interface returns the first value (string) associated with the given search parameter. If the parameter is non-existent, the parameter returns null; otherwise, a string value.
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
  <div><strong>Interview Response:</strong> The RFC3986 standard defines which characters are allowed in URLs and which are not.</div><br />
  <div><strong>Technical Response:</strong> The RFC3986 standard determines which characters are allowed and not allowed in URLs. Non-Latin characters and spaces, for example, must be encoded and substituted with their UTF-8 codes, preceded by a percent sign, such as %20  (space can be encoded by + for historical reasons, but this is an exception). The good news is that URL objects take care of everything automatically. We input all arguments in their unencoded form and then transform the URL into a string.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// using some cyrillic characters for this example

let url = new URL('https://ru.wikipedia.org/wiki/Тест');

url.searchParams.set('key', 'ъ');
alert(url); //https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D1%82?key=%D1%8A
```

  </div>
  </div>
</details>

---

### What is the difference between encodeURIComponent and encodeURI?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main difference between encodeURIComponent and encodeURI is that encodeURI encodes only characters that encoder restricts in a URL. The encodeURIComponent encodes same characters, and, in addition to them, characters #, $, &, +, ,, /, :, ;, =, ? and @. We should note that encoding can be a bit touchy, and you should pay attention to any characters that encodeURI can misinterpret.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// For URL parameters we should use encodeURIComponent instead
let music = encodeURIComponent('Rock&Roll');

let url = `https://google.com/search?q=${music}`;
alert(url); // https://google.com/search?q=Rock%26Roll

// Compare it with encodeURI
let music = encodeURI('Rock&Roll');

let url = `https://google.com/search?q=${music}`;
alert(url); // https://google.com/search?q=Rock&Roll
```

  </div>
  </div>
</details>

---

### Is there a difference between URL transformation and the encoding functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, The URI specification controls the definition of Classes URL and URLSearchParams: RFC3986, while (encode*) functions are defined based on the obsolete version RFC2396. There are a few differences concerning IPv6 addresses, which are encoded differently, and this difference is because IPv6 URLs did not exist in RFC2396 (August 1998). Such cases are rare, (encode*) functions work well most of the time, but we should be aware of it.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// valid url with IPv6 address
let url = 'http://[2607:f8b0:4005:802::1007]/';

alert(encodeURI(url)); // http://%5B2607:f8b0:4005:802::1007%5D/
alert(new URL(url)); // http://[2607:f8b0:4005:802::1007]/
```

  </div>
  </div>
</details>

---
