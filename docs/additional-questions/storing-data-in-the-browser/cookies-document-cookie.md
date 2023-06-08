---
title: Cookies - document.cookie
description: Cookies - document.cookie - JavaScript Interview Questions and Answers Cookies are tiny data strings saved directly in the browser. Frontend Developer Questions
sidebar_position: 1
sidebar_label: Cookies - document.cookie
keywords:
  - cookies document cookie
  - cookies
  - document cookie
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
  - cookies document cookie
  - cookies
  - document cookie
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/CookiesSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Cookies - document.cookie | JavaScript Interview Questions</title>
</head>

**Storing Browser Data: Cookies - document.cookie**

<CloseAllAnswers />

---

### What is an HTTP cookie?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An HTTP cookie is a small piece of data stored on a user's device by the web browser while browsing a website, often used to remember stateful information
    </div><br/>
  <div><strong>Technical Response:</strong> Cookies are tiny data strings saved directly in the browser. They are a component of the HTTP protocol, as described by RFC 6265. Cookies are often set by a web server using the Set-Cookie HTTP-header response. Then, using the Cookie HTTP-header, the browser automatically adds them to (nearly) every request to the same website domain.
    </div>
  </div>
</details>

---

### What is an everyday use case of the HTTP cookie?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An everyday use case of HTTP cookies is remembering user login information, allowing for automatic login to websites, and personalization of the user experience.
    </div>
  </div>
</details>

---

### Can you explain the process of HTTP cookie authentication?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In HTTP cookie authentication, after initial login, the server sends a cookie to the client. The client sends back this cookie in subsequent requests for user identification.
    </div><br/>
  <div><strong>Technical Response:</strong> Yes, once a user visits a page that requires authentication. The user signs in and the server uses the Set-Cookie HTTP-header in response to set a cookie with a unique “session identifier”. Next time when the request transfers to the same domain, the browser sends the cookie over the net using the Cookie HTTP-header. So, the server knows who made the request. We can also access cookies from the browser using document.cookie property.
    </div>
  </div>
</details>

---

### How are cookies set or stored using set-cookie?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Cookies are set or stored using the Set-Cookie HTTP response header. The header specifies the name and value of the cookie, as well as other attributes such as the expiration date and the domain to which it applies. The browser then stores the cookie on the user's computer and sends it back to the server with each subsequent request.
    </div><br />
  <div><strong>Technical Details:</strong> The value of document.cookie comprises name=value pairs separated by a semicolon ';'. Each one is a different cookie. To find a specific cookie, we may divide document.cookie with a ';' semicolon and then look for the correct name. To do this, we may utilize either regular expressions or array functions. We can use the write operation to document.cookie. However, it is not a data property; rather, it is an accessor (getter/setter). An assignment to it receives particular consideration. A write operation executes to write to document.cookie. Cookie updates just the cookies specified and do not affect other cookies. We may create a new cookie by just calling the setter on the document. "name=value" cookie This instructs the server supplying the headers to instruct the client to save a pair of cookies.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
document.cookie = 'user=John'; // update only cookie named 'user'
alert(document.cookie); // show all cookies, not just user
```

  </div>
  </div>
</details>

---

### When a space or special character appears in the name or value of a cookie. Is there a method to verify that the name-value pair correctly parses?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, special characters in cookie names/values must be URL encoded to ensure correct parsing. JavaScript's encodeURIComponent function can be used for this purpose.
    </div><br />
  <div><strong>Technical Details:</strong> Technically, name and value can have any characters, and we should escape the characters using a built-in encodeURIComponent function to keep the proper formatting. We should note, there are a few limitations to using the encodeURIComponent function. The name=value pair, after encodeURIComponent, should not exceed 4KB. So, we cannot store anything huge in a cookie. The number of cookies per domain is limited to around 20+; the exact limit depends on the browser.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// special characters (spaces), need encoding
let name = 'my name';
let value = 'John Smith';

// encodes the cookie as my%20name=John%20Smith
document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

alert(document.cookie); // ...; my%20name=John%20Smith
```

  </div>
  </div>
</details>

---

### Are there any additional attributes besides name-value we can use to set cookies?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, additional attributes include 'Domain', 'Path', 'Expires', 'Max-Age', 'Secure', 'HttpOnly', and 'SameSite' to specify cookie behavior and security.
    </div><br />
  <div><strong>Technical Response:</strong> In addition to the name-value attributes, we have access to the expires, domain, path, and secure attributes. The expires attribute represents the date the cookie plans to expire. The cookie plans to expire when the visitor quits the browser. The domain refers to the domain of your site. This action also covers sub-domains if necessary. The path parameter specifies the location of the directory or web page that sets the cookie. Leave this box blank if you want to retrieve the cookie from any directory or page. If the security property includes the term "secure," the cookie may only be received from a secure server. If this attribute is empty, there is no such limitation. Also, an additional attribute replaces expires, which is max-age. The max-age attribute is the modern cookie expiration that uses milliseconds instead of a date.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Standard name/value implementation
document.cookie = 'username=John Doe';

// Detailed cookie with expires and path
document.cookie =
  'username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/';
```

  </div>
  </div>
</details>

---

### What is the difference between expires and max-age cookie attributes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> 'Expires' sets a specific date/time for cookie deletion. 'Max-Age' sets the duration in seconds until deletion. 'Max-Age' has precedence if both are set.
    </div><br/>
  <div><strong>Technical Response:</strong> The simple answer is that it expires and sets an expiring date when the cookie gets deleted from the document. Max-age sets the time in seconds when a browser cookie gets deleted from the document. Although Max-age is the modern implementation, We should note that Max-Age is not supported in Internet Explorer versions 6 through 8. Max-age is the recommended implementation in modern web development.
    </div>
  </div>
</details>

---

### Is it possible to ensure that a cookie stays after a browser has been closed?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, by setting an 'Expires' or 'Max-Age' attribute, you can create a persistent cookie that remains after the browser closes.
    </div><br />
  <div><strong>Technical Response:</strong> To let cookies survive a browser closure, we can set either the expires or max-age option. If a cookie does not have one of these options, it disappears when the browser is closed. We call these cookies “session cookies”. The cookie expiration date defines the time when the browser automatically deletes it. The date must be precisely in this format, in the GMT timezone. We can use date.toUTCString to extract it. If we set expires to a date in the past, the cookie gets deleted. Max-age is an alternative to expires and specifies the cookie’s expiration in seconds from the current moment. If set to zero or a negative value, the cookie gets deleted.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// ** Using Expires, +1 day from now
let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = 'user=John; expires=' + date;

// ** Using Max-age, cookie will die in +1 hour from now
document.cookie = 'user=John; max-age=3600';

// delete cookie (let it expire right now)
document.cookie = 'user=John; max-age=0';
```

  </div>
  </div>
</details>

---

### How do we ensure that a cookie is transferred or set securely?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By setting the 'Secure' attribute of a cookie, you ensure that it is only sent over secure HTTPS connections, protecting the data from interception.
    </div><br />
  <div><strong>Technical Response:</strong> We must do several things to ensure that a cookie is transferred and set securely. First, we must use the HTTPS protocol to secure our documents. By default, if we set a cookie at http://site.com, it also appears at https://site.com and vice versa. Cookies are domain-based; they do not distinguish between the protocols. We must take the additional step to implement the secure attribute when setting the cookie. With this option, if https://site.com sets a cookie, then it does not appear when the same site is accessed by HTTP, as http://site.com. So, if a cookie has sensitive content that we should not transfer over un-encrypted HTTP, the secure flag is the right thing.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// assuming we are on https:// now
// set the cookie to be secure (only accessible over HTTPS)
document.cookie = 'user=John; secure';
```

  </div>
  </div>
</details>

---

### Can you explain how the SameSite attribute works?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> SameSite attribute in cookies restricts their sending to first-party contexts, mitigating CSRF attacks and limiting user tracking by blocking access under certain cross-site scenarios.
    </div><br />
  <div><strong>Interview Response:</strong> The SameSite property allows you to declare if your cookie should get restricted to a first-party or same-site context. The SameSite attribute accepts three values, including lax, strict, and none. Cookies are not transmitted on regular cross-site sub-requests in the SameSite lax mode but transfer when a user navigates within the original site. If we do not set the SameSite property explicitly in recent browser versions the default sets (lax replaced none as the default value). In strict mode, cookies only transfer in a first-party context and do not transmit along with requests initiated by third-party websites (no cross-site implementations allowed). The none attribute value enables cookies to transmit in all contexts. We set SameSite=none, and the cookie secure attribute must also be set (or the cookie gets blocked).
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple example of setting a cookie with the SameSite attribute in a HTTP response:

```http
Set-Cookie: key=value; SameSite=Strict
```

In JavaScript, you can set a cookie with the SameSite attribute as follows:

```javascript
document.cookie = "key=value; SameSite=Strict";
```

```js
res.cookie('3pcookie', 'value', { sameSite: 'none', secure: true });
```

  </div>
  </div>
</details>

---

### Is there any disadvantage to utilizing the SameSite attribute?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, SameSite attribute may break legitimate cross-site requests (like third-party logins), and older browsers may not support it, potentially causing compatibility issues.
    </div>
  </div>
</details>

---

### Can you briefly discuss the HttpOnly cookie?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> HttpOnly is a flag for cookies that makes them inaccessible via JavaScript, preventing cross-site scripting (XSS) attacks by limiting cookie exposure to server-side scripts.
    </div><br />
  <div><strong>Technical Response:</strong> HttpOnly cookies were first implemented in 2002 by Microsoft Internet Explorer developers for Internet Explorer 6 SP1. According to the Microsoft Developer Network, HttpOnly is an additional flag included in a Set-Cookie HTTP response header. When generating a cookie, using the HttpOnly flag helps mitigate the risk of client-side script accessing the protected cookie (if the browser supports it). The web-server uses the Set-Cookie header to set a cookie, and also, it may set the httpOnly option. JavaScript cannot access the values of cookies that the server response tagged with HttpOnly, and it cannot write new values to them either.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```csharp
C# Example: HttpCookie.HttpOnly Property

public bool HttpOnly { get; set; }
```

  </div>
  </div>
</details>

---

### What is a third-party cookie?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Third-party cookies are set by domains other than the one being visited directly by the user, often for tracking and online-advertising purposes.
    </div>
  <div><strong>Technical Response:</strong> A cookie is referred to as "third-party" if it gets placed by a domain not visited by the user. Because of their nature, Developers commonly use third-party cookies for tracking and advertising services. Because of coupling tied to the original domain, ads.com may monitor the same person across other sites if they all visit it. Because some individuals dislike third-party monitoring, browsers allow you to disable such cookies.
    </div>
  </div>
</details>

---

### Can you brief explain the European GDPR governs?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The GDPR (General Data Protection Regulation) governs data privacy in the EU, protecting individuals' rights over personal data, requiring consent for data processing, and imposing strict penalties for non-compliance.
    </div>
  <div><strong>Detailed Response:</strong> There is legislation in Europe called GDPR, that enforces a set of rules for websites to respect the users’ privacy. One of these rules is to require explicit permission for tracking cookies from the user. Please note that this is only about tracking / identifying / authorizing cookies. So, if we set a cookie that saves some information but neither tracks nor identifies the user, we are free to do it. But if we are going to set a cookie with an authentication session or a tracking id, then a user must allow that.
    </div>
  </div>
</details>

---

### What does the acronym GDPR stand for?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The GDPR is the acronym for General Data Protection Regulation 2016/679, a regulation in EU law on data protection and privacy in the European Union and the European Economic Area. It also addresses the transfer of personal data outside the EU and EEA areas.
    </div>
  </div>
</details>

---

### Can you name two common variants of websites following the GDPR?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Sure, two common ways websites comply with the General Data Protection Regulation (GDPR) include displaying cookie consent banners that ask users for explicit permission to use cookies, and providing mechanisms for users to request the deletion of their personal data, thus respecting their right to be forgotten.
    </div><br/>
  <div><strong>Interview Response:</strong> Websites generally have two variants of following GDPR.<br /><br />(1) If a website wants to set tracking cookies only for authenticated users. The registration form should have a checkbox like “accept the privacy policy” (that describes how cookies get used), the user must check it, and then the website is free to set auth cookies.<br /><br />(2) If a website wants to place tracking cookies for everyone. A website shows a modal “splash screen” for newcomers and requires them to agree to the cookies. Then the website can set them and let people see the content. However, this might be upsetting for first-time visitors. Nobody likes seeing such "must-click" modal splash displays instead of the content. However, GDPR necessitates an express agreement between the user and the website owner.
    </div>
  </div>
</details>

---
