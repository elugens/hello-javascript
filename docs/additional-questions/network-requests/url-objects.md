---
title: URL Objects
sidebar_position: 7
---

# URL Objects

**Network requests: URL objects**

**Question:** **What is the purpose of the built-in URL class?**

**Interview Answer:** The built-in URL class provides a convenient interface for creating and parsing URLs. There are no networking methods that require exactly a URL object, strings are good enough. So technically we do not have to use URL. But sometimes it can be helpful in dynamically creating URLs. The URL() constructor returns a newly created URL object representing the URL defined by the parameters, in which it has two, URL and base. The URL is a USVString or any other object with a stringifier — including, for example, an `<a>` or `<area>` element — that represents an absolute or relative URL. If url is a relative URL, base is required, and will be used as the base URL. If url is an absolute URL, a given base will be ignored. The base is the string representing the base URL to use in cases where url is a relative URL. If not specified, it defaults to undefined.

**Syntax:** new URL(url, [base])

Code Example:

```js
// These two URLs are same:

let url1 = new URL('https://javascript.info/profile/admin');

let url2 = new URL('/profile/admin', 'https://javascript.info');

alert(url1); // https://javascript.info/profile/admin
alert(url2); // https://javascript.info/profile/admin
// We can easily create a new URL based on

// the path relative to an existing URL:

let url = new URL('https://javascript.info/profile/admin');

let newUrl = new URL('tester', url);

alert(newUrl); // https://javascript.info/profile/tester
// The URL object immediately allows us to access its components

let url = new URL('https://javascript.info/url');

alert(url.protocol); // https:
alert(url.host); // javascript.info
alert(url.pathname); // /url
```

Source: <https://javascript.info/url#creating-a-url>

**Question:** **Can we pass URL objects to networking and other methods instead of a string?**

**Interview Answer:** Yes, we can use a URL object in fetch or XMLHttpRequest, almost everywhere where a URL-string is expected. Generally, the URL object can be passed to any method instead of a string, as most methods will perform the string conversion, that turns a URL object into a string with full URL.

Source: <https://javascript.info/url#creating-a-url>

**Question:** **Is there a way to parse data inside of a URL string?**

**Interview Answer:** Yes, we can access the parameters via the searchParams URL property. A property formatted URL string should include encoding to ensure proper parsing. URL string parameters should be encoded if they contain spaces, non-latin letters, etc. URL.searchParams returns a URLSearchParams object that we can use to access the string data. For instance, if the URL of your page is https://example.com/?name=Jonathan%20Smith&age=18 you could parse out the name and age parameters using URL.searchParams.

Code Example:

```js
let params = new URL(document.location).searchParams;

let name = params.get('name'); // is the string "Jonathan Smith".
let age = parseInt(params.get('age')); // is the number 18
```

Source: <https://javascript.info/url#searchparams>

**Question:** **Explain the function and syntax of the URLSearchParams.get() method?**

**Interview Answer:** The get() method of the URLSearchParams interface returns the first value (string) associated to the given search parameter. If, the parameter is non-existent then the parameter will return null, otherwise a string value.

**Syntax:** URLSearchParams.get(name)

Code Example:

```js
let params = new URL(document.location).searchParams;

let name = params.get('name'); // is the string "Jonathan Smith".
let age = parseInt(params.get('age')); // is the number 18
```

Source: <https://javascript.info/url#searchparams>

**Question:** **Which standard is used to define which characters are allowed in URLs?**

**Interview Answer:** The RFC3986 standard is used to define which characters are allowed in URLs and which are not.

**Technical Answer:** The RFC3986 standard is used to define which characters are allowed in URLs and which are not. Those that are not allowed, must be encoded, for instance Non-Latin letters and spaces – replaced with their UTF-8 codes, prefixed by %, such as %20 (a space can be encoded by +, for historical reasons, but that is an exception). The good news is that URL objects handle all that automatically. We just supply all parameters unencoded, and then convert the URL to string.

Code Example:

```js
// using some cyrillic characters for this example

let url = new URL('https://ru.wikipedia.org/wiki/Тест');

url.searchParams.set('key', 'ъ');

alert(url); //https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D1%82?key=%D1%8A
```

Source: <https://javascript.info/url#encoding>

**Question:** **What is the difference between encodeURIComponent and encodeURI?**

**Interview Answer:** The main difference between encodeURIComponent and encodeURI is that encodeURI encodes only characters that are restricted in a URL. The encodeURIComponent encodes same characters, and, in addition to them, characters #, $, &, +, ,, /, :, ;, =, ? and @. It should be noted, encoding can be bit touchy, and you should make sure that pay attention to any characters that can be misinterpreted by encodeURI.

Code Example:

```js
// For URL parameters we should use encodeURIComponent instead

let music = encodeURIComponent('Rock&Roll');

let url = `https://google.com/search?q=${music}`;

alert(url); // https://google.com/search?q=Rock%26Roll
// Compare it with encodeURI

let music = encodeURI('Rock&Roll');

let url = `https://google.com/search?q=${music}`;

alert(url); // https://google.com/search?q=Rock&Roll
```

Source: <https://javascript.info/url#encoding-strings>

**Question:** **Is there a difference between URL transformation and the encoding functions?**

**Interview Answer:** Yes, Classes URL and URLSearchParams are based on the latest URI specification: RFC3986, while encode* functions are based on the obsolete version RFC2396. There are a few differences in relation IPv6 addresses, which are encoded differently. The reason behind this is that IPv6 URLs did not exist at the time of RFC2396 (August 1998). Such cases are rare, encode* functions work well most of the time, but we should be aware of it.

Code Example:

```js
// valid url with IPv6 address

let url = 'http://[2607:f8b0:4005:802::1007]/';

alert(encodeURI(url)); // http://%5B2607:f8b0:4005:802::1007%5D/
alert(new URL(url)); // http://[2607:f8b0:4005:802::1007]/
```

Source: <https://javascript.info/url#encoding-strings>
