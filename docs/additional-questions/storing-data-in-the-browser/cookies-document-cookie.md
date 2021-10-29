---
title: Cookies - document.cookie
sidebar_position: 1
---

# Cookies - document.cookie

**Questions and Answers: Storing data in the browser**

**Storing data in the browser: Cookies, document.cookie**

**Question:** **What is a HTTP cookie?**

**Interview Answer:** Cookies are small strings of data that are stored directly in the browser. They are a part of the HTTP protocol, defined by the RFC 6265 specification. Cookies are usually set by a web-server using the response Set-Cookie HTTP-header. Then, the browser automatically adds them to (almost) every request to the same domain using the Cookie HTTP-header.

Source: <https://javascript.info/cookie>

**Question:** **What is a common use case of the HTTP cookie?**

**Interview Answer:** One of the most widespread use cases for HTTP cookies is authentication.

Source: <https://javascript.info/cookie>

**Question:** **Can you explain the process of HTTP cookie authentication?**

**Interview Answer:** Yes, once a user visits a page that requires authentication. The user signs in and the server uses the Set-Cookie HTTP-header in the response to set a cookie with a unique “session identifier”. Next time when the request is sent to the same domain, the browser sends the cookie over the net using the Cookie HTTP-header. So, the server knows who made the request. We can also access cookies from the browser, using document.cookie property.

Source: <https://javascript.info/cookie>

**Question:** **How are cookies set or stored using set-cookie?**

**Interview Answer:** The value of document.cookie consists of name=value pairs, delimited by ;. Each one is a separate cookie. To find a particular cookie, we can split document.cookie by ;, and then find the right name. We can use either a regular expression or array functions to do that. We can write to document.cookie. But it is not a data property, it is an accessor (getter/setter). An assignment to it is treated specially. A write operation to document.cookie updates only cookies mentioned in it, but doesn’t touch other cookies.. We can write a new cookie by using the setter directly on document.cookie = “name=value”. This tells the server sending headers to tell the client to store a pair of cookies.

Code Example:

```js
document.cookie = 'user=John'; // update only cookie named 'user'
alert(document.cookie); // show all cookies, not just user
```

Source: <https://javascript.info/cookie#writing-to-document-cookie>

**Question:** **When the name or value of a cookie has a space or special character. Is there way to ensure the proper parsing of the name value pair?**

**Interview Answer:** Technically, name and value can have any characters. To keep the valid formatting, they should be escaped using a built-in encodeURIComponent function. It should be noted, there are few limitations to using the encodeURIComponent function. The name=value pair, after encodeURIComponent, should not exceed 4KB. So, we cannot store anything huge in a cookie. The total number of cookies per domain is limited to around 20+, the exact limit depends on the browser.

Code Example:

```js
// special characters (spaces), need encoding

let name = 'my name';

let value = 'John Smith';

// encodes the cookie as my%20name=John%20Smith

document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

alert(document.cookie); // ...; my%20name=John%20Smith
```

Source: <https://javascript.info/cookie#writing-to-document-cookie>

**Question:** **Are there any additional attributes we can use to set cookies?**

**Interview Answer:** In addition to the name value attributes, we have access to the expires, domain, path, and secure attributes. Expires represents the date the cookie will expire. If this is blank, the cookie will expire when the visitor quits the browser. The domain refers to the domain of your site. This also covers sub-domains if necessary. The path attribute is the path to the directory or web page that set the cookie. This may be blank if you want to retrieve the cookie from any directory or page. If secure attribute contains the word "secure", then the cookie may only be retrieved with a secure server. If this attribute is blank, no such restriction exists. Also, there is an additional attribute that replaces expires, which is max-age. The max-age attribute is the modern cookie expiration that uses milliseconds instead of a date.

Code Example:

```js
// Standard name/value implementation

document.cookie = 'username=John Doe';

// Detailed cookie with expires and path

document.cookie =
  'username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/';
```

Source: <https://javascript.info/cookie#expires-max-age>

**Question:** **What is the difference between expires and max-age cookie attributes?**

**Interview Answer:** The simple answer is that expires sets an expiring date of when the cookie will be deleted from the document. Max-age sets the time in seconds for when a cookie will be deleted from the document. Although Max-age is the modern implementation, it should be noted that it is not supported in Internet Explorer versions 6 through 8. Max-age is the recommended implementation in modern web development.

Source: <https://javascript.info/cookie#expires-max-age>

**Question:** **Is there a way to ensure that a cookie remains after a browser is closed?**

**Interview Answer:** To let cookies survive a browser closure, we can set either the expires or max-age option. By default, if a cookie does not have one of these options, it disappears when the browser is closed. Such cookies are called “session cookies”. The cookie expiration date defines the time when the browser will automatically delete it. For expires, the date must be exactly in this format, in the GMT timezone. We can use date.toUTCString to get it. If we set expires to a date in the past, the cookie is deleted. Max-age is an alternative to expires and specifies the cookie’s expiration in seconds from the current moment. If set to zero or a negative value, the cookie is deleted.

Code Example:

```js
// ** Using Expires, +1 day from now

let date = new Date(Date.now() + 86400e3);

date = date.toUTCString();

document.cookie = 'user=John; expires=' + date;

// ** Using Max-age, cookie will die in +1 hour from now

document.cookie = 'user=John; max-age=3600';

// delete cookie (let it expire right now)

document.cookie = 'user=John; max-age=0';
```

Source: <https://javascript.info/cookie#expires-max-age>

**Question:** **How do we ensure that a cookie is transferred or set securely?**

**Interview Answer:** There are several things that we must do to ensure that a cookie is transferred and set securely. First, we must use the HTTPS protocol to secure our document. By default, if we set a cookie at http://site.com, then it also appears at https://site.com and vice versa. That is, cookies are domain-based, they do not distinguish between the protocols. We must take the additional step to implement the secure attribute when we set the cookie. With this option, if a cookie is set by https://site.com, then it does not appear when the same site is accessed by HTTP, as http://site.com. So, if a cookie has sensitive content that should never be sent over unencrypted HTTP, the secure flag is the right thing.

Code Example:

```js
// assuming we are on https:// now

// set the cookie to be secure (only accessible over HTTPS)

document.cookie = 'user=John; secure';
```

Source: <https://javascript.info/cookie#secure>

**Question:** **Can you explain how the samesite attribute works?**

**Interview Answer:** The SameSite attribute allows you to declare if your cookie should be restricted to a first-party or same-site context. The samesite attribute accepts three values including lax, strict, and none. In the samesite lax mode cookies are not sent on normal cross-site sub-requests but are sent when a user is navigating within the originating site. This is the default cookie value if SameSite has not been explicitly specified in recent browser versions (Lax replaced None as the default value). In strict mode cookies will only be sent in a first-party context and not be sent along with requests initiated by third party websites (no cross-site implementations allowed). The none attribute value allows cookies to be sent in all contexts. SameSite=None is set, the cookie Secure attribute must also be set (or the cookie will be blocked).

Code Example:

```js
res.cookie('3pcookie', 'value', { sameSite: 'none', secure: true });
```

Source: <https://javascript.info/cookie#samesite>

**Question:** **Are there any drawbacks to using the samesite attribute?**

**Interview Answer:** Yes, samesite is ignored by browsers older than 2016-2017. So, if we solely rely on samesite to provide protection, then old browsers will be vulnerable. But we surely can use samesite together with other protection measures, like xsrf tokens, to add an additional layer of defence and then, in the future, when old browsers die out, we will probably be able to drop xsrf tokens.

Source: <https://javascript.info/cookie#samesite>

**Question:** **Can you briefly discuss the HttpOnly cookie?**

**Interview Answer:** HttpOnly cookies were first implemented in 2002 by Microsoft Internet Explorer developers for Internet Explorer 6 SP1. According to the Microsoft Developer Network, HttpOnly is an additional flag included in a Set-Cookie HTTP response header. Using the HttpOnly flag when generating a cookie helps mitigate the risk of client side script accessing the protected cookie (if the browser supports it). The web-server uses the Set-Cookie header to set a cookie. Also, it may set the httpOnly option. JavaScript cannot access the values of cookies that the server response tagged with HttpOnly, and it cannot write new values to them either.

```csharp
C# Example: HttpCookie.HttpOnly Property

public bool HttpOnly { get; set; }

```

Source: <https://javascript.info/cookie#httponly>

**Question:** **What is a third-party cookie?**

**Interview Answer:** A cookie is called “third-party” if it is placed by a domain other than the page the user is visiting. Third-party cookies are traditionally used for tracking and ads services, due to their nature. They are bound to the originating domain, so ads.com can track the same user between different sites, if they all access it. Naturally, some people do not like being tracked, so browsers allow to disable such cookies.

Source: <https://javascript.info/cookie#appendix-third-party-cookies>

**Question:** **Can you brief explain the European GDPR governs?**

**Interview Answer:** There is a legislation in Europe called GDPR, that enforces a set of rules for websites to respect the users’ privacy. One of these rules is to require an explicit permission for tracking cookies from the user. Please note, that is only about tracking/identifying/authorizing cookies. So, if we set a cookie that just saves some information, but neither tracks nor identifies the user, then we are free to do it. But if we are going to set a cookie with an authentication session or a tracking id, then a user must allow that.

Source: <https://javascript.info/cookie#appendix-gdpr>

**Question:** **What does the acronym GDPR stand for?**

**Interview Answer:** The GDPR is the acronym for General Data Protection Regulation 2016/679, which is a regulation in EU law on data protection and privacy in the European Union and the European Economic Area. It also addresses the transfer of personal data outside the EU and EEA areas.

Source: <https://javascript.info/cookie#appendix-gdpr>

**Question:** **Can you name two common variants of websites following the GDPR?**

**Interview Answer:** Websites generally have two variants of following GDPR.

(1) If a website wants to set tracking cookies only for authenticated users. To do so, the registration form should have a checkbox like “accept the privacy policy” (that describes how cookies are used), the user must check it, and then the website is free to set auth cookies.

(2) If a website wants to set tracking cookies for everyone. To do so legally, a website shows a modal “splash screen” for newcomers and requires them to agree to the cookies. Then the website can set them and let people see the content. That can be disturbing for new visitors though. No one likes to see such “must-click” modal splash screens instead of the content. But GDPR requires an explicit agreement.

Source: <https://javascript.info/cookie#appendix-gdpr>
