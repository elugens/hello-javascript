---
title: LocalStorage / sessionStorage
sidebar_position: 2
---

# LocalStorage / sessionStorage

**Storing Browser Data: LocalStorage / sessionStorage**

<head>
  <title>LocalStorage / sessionStorage - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What does localStorage and sessionStorage do?

**Interview Answer:** In simple terms, Web storage objects localStorage and sessionStorage allow us to save key/value pairs in the browser.

Source: <https://javascript.info/localstorage>

### What is the difference between localStorage and sessionStorage?

**Interview Answer:** There is no difference between them except for the intended "non-persistence" of sessionStorage. The data stored in localStorage persists until explicitly deleted. Changes made are saved and available for all current and future visits to the site. For sessionStorage, changes are only available per tab. Changes made are saved and available for the current page in that tab until it is closed. Once it is closed, the stored data is deleted.

Source: <https://javascript.info/localstorage>

### We already have cookies. Why do we need additional storage objects?

**Interview Answer:** Unlike cookies, web storage objects are not sent to server with each request. Because of that, we can store much more. Most browsers allow at least 2 megabytes of data (or more) and have settings to configure that. Also, unlike cookies, the server cannot manipulate storage objects via HTTP headers. Everything is done in JavaScript. The storage is bound to the origin (domain/protocol/port triplet). That is, different protocols or subdomains infer different storage objects, they cannot access data from each other.

Source: <https://javascript.info/localstorage>

### Can you name the six methods used in localStorage/sessionStorage?

**Interview Answer:** Yes, both storage objects (localStorage/sessionStorage) have the same methods and properties, which include setItem, getItem, removeItem, clear, key, and length. As you can see, it is like a Map collection (setItem/getItem/removeItem), but also allows access by index with key(index).

Source: <https://javascript.info/localstorage>

### How does the JavaScript localStorage object function?

**Interview Answer:** The main features of localStorage are that the data can be shared between tabs. The data does not expire, and it remains after the browser restarts or the OS reboots. If, we want to add new data to the localStorage we can use the setItem method and if we want to parse it into the browser, we use the getItem method. We must be on the same origin (domain/port/protocol), but the url path can be different. The localStorage is shared between all windows with the same origin, so if we set the data in one window, the change becomes visible in another one. We can also use a plain object way of getting/setting keys.

Code Example:

```js
// localStorage getter/setter

localStorage.setItem('test', 1); // set name/value
alert(localStorage.getItem('test')); // get value alert 1
// Object-like access

// set key

localStorage.test = 2;

// get key

alert(localStorage.test); // 2
// remove key

delete localStorage.test;
```

Source: <https://javascript.info/localstorage#localstorage-demo>

### Is it a good idea to use Object-like access on localStorage?

**Interview Answer:** Technically, you can use object-like access on localStorage, but it is not recommended. If the key is user-generated, it can be anything, like length or toString, or another built-in method of localStorage. In that case getItem/setItem work fine, while object-like access fails. There is a storage event, it triggers when we modify the data. That event does not happen for object-like access.

Code Example:

```js
let key = 'length';

localStorage[key] = 5; // Error, cannot assign length
```

Source: <https://javascript.info/localstorage#object-like-access>

### How should we loop over the localStorage object?

**Interview Answer:** There is one notable thing about localStorage objects. They are not iterable on their own. One way to look over them as an array. Local Storage objects have a length, so we can iterate over them using the key method. Another way is to use “for key in” (for in loop) localStorage loop, just as we do with regular objects. It iterates over keys, but also outputs few built-in fields that we do not need. So, we need to filter fields from the prototype with hasOwnProperty check. Or just get the “own” keys with Object.keys and then loop over them if needed. The latter works, because Object.keys only returns the keys that belong to the object, ignoring the prototype.

Code Example:

```js
// loop over the object as an array

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);

  alert(`${key}: ${localStorage.getItem(key)}`);
}

// Loop over it using a "for in key" loop - bad try

for (let key in localStorage) {
  alert(key); // shows getItem, setItem and other built-in stuff
}

// Loop using hasOwnProperty check

for (let key in localStorage) {
  if (!localStorage.hasOwnProperty(key)) {
    continue; // skip keys like "setItem", "getItem" etc
  }

  alert(`${key}: ${localStorage.getItem(key)}`);
}

// Loop using for of loop and Object.keys ( *** recommended ***)

let keys = Object.keys(localStorage);

for (let key of keys) {
  alert(`${key}: ${localStorage.getItem(key)}`);
}
```

Source: <https://javascript.info/localstorage#looping-over-keys>

### What is the type of the key and value of storage objects?

**Interview Answer:** For storage objects, both the key and value must be strings. If they were of any other type, like a number, or an object, it will get converted to string automatically. We can also use JSON to store objects. It is also it is possible to stringify the whole storage object, e.g., for debugging purposes.

Code Example:

```js
// Base implementation

sessionStorage.user = { name: 'John' };

alert(sessionStorage.user); // [object Object]
// Stringfy Object

sessionStorage.user = JSON.stringify({ name: 'John' });

// sometime later

let user = JSON.parse(sessionStorage.user);

alert(user.name); // John
// added formatting options to JSON.stringify to make the object look nicer

alert(JSON.stringify(localStorage, null, 2));
```

Source: <https://javascript.info/localstorage#strings-only>

### Briefly explain how the JavaScript sessionStorage object functions?

**Interview Answer:** The sessionStorage object is used much less often than localStorage. The Properties and methods are the same, but it is much more limited. Some of sessionStorages limitations include the fact that it only exists if the tab remains open. Once, it is closed we have no more access to the session. One notable thing about session storage, is that is can be shared between iframes in the same tab. That object data will also server a page refresh, but not the closing or reopening of the URL in a new tab. That is because sessionStorage is bound not only to the origin, but also to the browser tab. For that reason, sessionStorage is used sparingly.

Code Example:

```js
// Set the storage item key value

sessionStorage.setItem('test', 1);

// Refresh the page and the data still exists

alert(sessionStorage.getItem('test')); // after refresh: 1
```

Source: <https://javascript.info/localstorage#sessionstorage>

### How do storage events behave when the data gets updated in localStorage and sessionsStorage?

**Interview Answer:** When the data gets updated in localStorage or sessionStorage the storage event triggers. The important thing is that the event triggers on all window objects where the storage is accessible, except the one that caused it. It like a waterfall effect. Imagine, you have two windows with the same site in each. So localStorage is shared between them. If both windows are listening for window.onstorage, then each one will react on updates that happened in the other one.

Code Example:

```js
// triggers on updates made to the same storage from other documents

window.onstorage = (event) => {
  // same as window.addEventListener('storage', event => {

  if (event.key != 'now') return;

  alert(event.key + ':' + event.newValue + ' at ' + event.url);
};

localStorage.setItem('now', Date.now());
```

Source: <https://javascript.info/localstorage#storage-event>
