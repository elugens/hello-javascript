---
title: Cookies - document.cookie
description: Cookies - document.cookie - JavaScript Interview Questions and Answers
sidebar_position: 1
sidebar_label: Cookies - document.cookie
---

**Storing Browser Data: Cookies - document.cookie**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is an HTTP cookie?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Cookies are tiny data strings saved directly in the browser. They are a component of the HTTP protocol, as described by RFC 6265. Cookies are often set by a web server using the Set-Cookie HTTP-header response. Then, using the Cookie HTTP-header, the browser automatically adds them to (nearly) every request to the same website domain.
    </div>
  </div>
</details>

---

### What is an everyday use case of the HTTP cookie?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> One of the most widespread use cases for HTTP cookies is authentication.
    </div>
  </div>
</details>

---

### Can you explain the process of HTTP cookie authentication?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, once a user visits a page that requires authentication. The user signs in and the server uses the Set-Cookie HTTP-header in response to set a cookie with a unique “session identifier”. Next time when the request transfers to the same domain, the browser sends the cookie over the net using the Cookie HTTP-header. So, the server knows who made the request. We can also access cookies from the browser using document.cookie property.
    </div>
  </div>
</details>

---

### How are cookies set or stored using set-cookie?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The value of document.cookie comprises name=value pairs separated by a semicolon ';'. Each one is a different cookie. To find a specific cookie, we may divide document.cookie with a ';' semicolon and then look for the correct name. To do this, we may utilize either regular expressions or array functions. We can use the write operation to document.cookie. However, it is not a data property; rather, it is an accessor (getter/setter). An assignment to it receives particular consideration. A write operation executes to write to document.cookie. Cookie updates just the cookies specified and do not affect other cookies. We may create a new cookie by just calling the setter on the document. "name=value" cookie This instructs the server supplying the headers to instruct the client to save a pair of cookies.
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
  <div><strong>Interview Response:</strong> Technically, name and value can have any characters, and we should escape the characters using a built-in encodeURIComponent function to keep the proper formatting. We should note, there are a few limitations to using the encodeURIComponent function. The name=value pair, after encodeURIComponent, should not exceed 4KB. So, we cannot store anything huge in a cookie. The number of cookies per domain is limited to around 20+; the exact limit depends on the browser.
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

### Are there any additional attributes we can use to set cookies?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In addition to the name-value attributes, we have access to the expires, domain, path, and secure attributes. The expires attribute represents the date the cookie plans to expire. The cookie plans to expire when the visitor quits the browser. The domain refers to the domain of your site. This action also covers sub-domains if necessary. The path parameter specifies the location of the directory or web page that sets the cookie. Leave this box blank if you want to retrieve the cookie from any directory or page. If the security property includes the term "secure," the cookie may only be received from a secure server. If this attribute is empty, there is no such limitation. Also, an additional attribute replaces expires, which is max-age. The max-age attribute is the modern cookie expiration that uses milliseconds instead of a date.
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
  <div><strong>Interview Response:</strong> The simple answer is that it expires and sets an expiring date when the cookie gets deleted from the document. Max-age sets the time in seconds when a browser cookie gets deleted from the document. Although Max-age is the modern implementation, We should note that Max-Age is not supported in Internet Explorer versions 6 through 8. Max-age is the recommended implementation in modern web development.
    </div>
  </div>
</details>

---

### Is it possible to ensure that a cookie stays after a browser has been closed?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To let cookies survive a browser closure, we can set either the expires or max-age option. If a cookie does not have one of these options, it disappears when the browser is closed. We call these cookies “session cookies”. The cookie expiration date defines the time when the browser automatically deletes it. The date must be precisely in this format, in the GMT timezone. We can use date.toUTCString to extract it. If we set expires to a date in the past, the cookie gets deleted. Max-age is an alternative to expires and specifies the cookie’s expiration in seconds from the current moment. If set to zero or a negative value, the cookie gets deleted.
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
  <div><strong>Interview Response:</strong> We must do several things to ensure that a cookie is transferred and set securely. First, we must use the HTTPS protocol to secure our documents. By default, if we set a cookie at http://site.com, it also appears at https://site.com and vice versa. Cookies are domain-based; they do not distinguish between the protocols. We must take the additional step to implement the secure attribute when setting the cookie. With this option, if https://site.com sets a cookie, then it does not appear when the same site is accessed by HTTP, as http://site.com. So, if a cookie has sensitive content that we should not transfer over un-encrypted HTTP, the secure flag is the right thing.
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

### Can you explain how the samesite attribute works?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The samesite property allows you to declare if your cookie should get restricted to a first-party or same-site context. The samesite attribute accepts three values, including lax, strict, and none. Cookies are not transmitted on regular cross-site sub-requests in the samesite lax mode but transfer when a user navigates within the original site. If we do not set the samesite property explicitly in recent browser versions the default sets (lax replaced none as the default value). In strict mode, cookies only transfer in a first-party context and do not transmit along with requests initiated by third-party websites (no cross-site implementations allowed). The none attribute value enables cookies to transmit in all contexts. We set samesite=none, and the cookie secure attribute must also be set (or the cookie gets blocked).
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
res.cookie('3pcookie', 'value', { sameSite: 'none', secure: true });
```

  </div>
  </div>
</details>

---

### Is there any disadvantage to utilizing the samesite attribute?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, samesite gets ignored by browsers older than 2016-2017. So, if we rely solely on samesite to provide protection, old browsers are vulnerable. But we can use samesite together with other protection measures, like xsrf tokens, to add a layer of defense, and then, in the future, when the old browsers die out, we can drop xsrf tokens.
    </div>
  </div>
</details>

---

### Can you briefly discuss the HttpOnly cookie?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> HttpOnly cookies were first implemented in 2002 by Microsoft Internet Explorer developers for Internet Explorer 6 SP1. According to the Microsoft Developer Network, HttpOnly is an additional flag included in a Set-Cookie HTTP response header. When generating a cookie, using the HttpOnly flag helps mitigate the risk of client-side script accessing the protected cookie (if the browser supports it). The web-server uses the Set-Cookie header to set a cookie, and also, it may set the httpOnly option. JavaScript cannot access the values of cookies that the server response tagged with HttpOnly, and it cannot write new values to them either.
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
  <div><strong>Interview Response:</strong> A cookie is referred to as "third-party" if it gets placed by a domain not visited by the user. Because of their nature, Developers commonly use third-party cookies for tracking and advertising services. Because of coupling tied to the original domain, ads.com may monitor the same person across other sites if they all visit it. Because some individuals dislike third-party monitoring, browsers allow you to disable such cookies.
    </div>
  </div>
</details>

---

### Can you brief explain the European GDPR governs?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There is legislation in Europe called GDPR, that enforces a set of rules for websites to respect the users’ privacy. One of these rules is to require explicit permission for tracking cookies from the user. Please note that this is only about tracking / identifying / authorizing cookies. So, if we set a cookie that saves some information but neither tracks nor identifies the user, we are free to do it. But if we are going to set a cookie with an authentication session or a tracking id, then a user must allow that.
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
  <div><strong>Interview Response:</strong> Websites generally have two variants of following GDPR.<br /><br />(1) If a website wants to set tracking cookies only for authenticated users. The registration form should have a checkbox like “accept the privacy policy” (that describes how cookies get used), the user must check it, and then the website is free to set auth cookies.<br /><br />(2) If a website wants to place tracking cookies for everyone. A website shows a modal “splash screen” for newcomers and requires them to agree to the cookies. Then the website can set them and let people see the content. However, this might be upsetting for first-time visitors. Nobody likes seeing such "must-click" modal splash displays instead of the content. However, GDPR necessitates an express agreement between the user and the website owner.
    </div>
  </div>
</details>

---
