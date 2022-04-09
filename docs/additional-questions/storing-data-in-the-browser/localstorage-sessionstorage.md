---
title: LocalStorage / sessionStorage
description: LocalStorage / sessionStorage in JavaScript is used to store data in the browser. It is used to store data in the browser.
sidebar_position: 2
sidebar_label: LocalStorage / sessionStorage
---

**Storing Browser Data: LocalStorage / sessionStorage**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What does localStorage and sessionStorage do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In simple terms, Web storage objects localStorage and sessionStorage allow us to save key/value pairs in the browser.
    </div>
  </div>
</details>

---

### What is the difference between localStorage and sessionStorage?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There is no difference between them except for the intended "non-persistence" of sessionStorage. The data stored in localStorage persists until explicitly deleted. Changes made are saved and available for all current and future visits to the site. For sessionStorage, changes are only available per tab. Changes made are saved and available for the current page in that tab until it is closed. Once it is closed, the stored data is deleted.
    </div>
  </div>
</details>

---

### We already have cookies. Why do we need additional storage objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Unlike cookies, web storage objects are not sent to server with each request. Because of that, we can store much more. Most browsers allow at least 2 megabytes of data (or more) and have settings to configure that. Also, unlike cookies, the server cannot manipulate storage objects via HTTP headers. Everything is done in JavaScript. The storage is bound to the origin (domain/protocol/port triplet). That is, different protocols or subdomains infer different storage objects, they cannot access data from each other.
    </div>
  </div>
</details>

---

### Can you name the six methods used in localStorage/sessionStorage?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, both storage objects (localStorage/sessionStorage) have the same methods and properties, which include setItem, getItem, removeItem, clear, key, and length. As you can see, it is like a Map collection (setItem/getItem/removeItem), but also allows access by index with key(index).
    </div>
  </div>
</details>

---

### How does the JavaScript localStorage object function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main features of localStorage are that the data can be shared between tabs. The data does not expire, and it remains after the browser restarts or the OS reboots. If, we want to add new data to the localStorage we can use the setItem method and if we want to parse it into the browser, we use the getItem method. We must be on the same origin (domain/port/protocol), but the url path can be different. The localStorage is shared between all windows with the same origin, so if we set the data in one window, the change becomes visible in another one. We can also use a plain object way of getting/setting keys.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// localStorage getter/setter
localStorage.setItem('test', 1); // set name/value
alert(localStorage.getItem('test')); // get value alert 1

// Object-like access
// set key
localStorage.test = 2;

// get key
alert(localStorage.test); // 2

// remove key
delete localStorage.test;
```

  </div>
  </div>
</details>

---

### Is it a good idea to use Object-like access on localStorage?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Technically, you can use object-like access on localStorage, but it is not recommended. If the key is user-generated, it can be anything, like length or toString, or another built-in method of localStorage. In that case getItem/setItem work fine, while object-like access fails. There is a storage event, it triggers when we modify the data. That event does not happen for object-like access.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let key = 'length';
localStorage[key] = 5; // Error, cannot assign length
```

  </div>
  </div>
</details>

---

### How should we loop over the localStorage object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There is one notable thing about localStorage objects. They are not iterable on their own. One way to look over them as an array. Local Storage objects have a length, so we can iterate over them using the key method. Another way is to use “for key in” (for in loop) localStorage loop, just as we do with regular objects. It iterates over keys, but also outputs few built-in fields that we do not need. So, we need to filter fields from the prototype with hasOwnProperty check. Or just get the “own” keys with Object.keys and then loop over them if needed. The latter works, because Object.keys only returns the keys that belong to the object, ignoring the prototype.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// loop over the object as an array
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  alert(`${key}: ${localStorage.getItem(key)}`);
}

// Loop over it using a "for in key" loop - bad try
for (let key in localStorage) {
  alert(key); // shows getItem, setItem and other built-in stuff
}

// Loop using hasOwnProperty check
for (let key in localStorage) {
  if (!localStorage.hasOwnProperty(key)) {
    continue; // skip keys like "setItem", "getItem" etc
  }
  alert(`${key}: ${localStorage.getItem(key)}`);
}

// Loop using for of loop and Object.keys ( ** recommended ** )
let keys = Object.keys(localStorage);
for (let key of keys) {
  alert(`${key}: ${localStorage.getItem(key)}`);
}
```

  </div>
  </div>
</details>

---

### What is the type of the key and value of storage objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For storage objects, both the key and value must be strings. If they were of any other type, like a number, or an object, it will get converted to string automatically. We can also use JSON to store objects. It is also it is possible to stringify the whole storage object, e.g., for debugging purposes.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Base implementation
sessionStorage.user = { name: 'John' };
alert(sessionStorage.user); // [object Object]

// Stringfy Object
sessionStorage.user = JSON.stringify({ name: 'John' });

// sometime later
let user = JSON.parse(sessionStorage.user);
alert(user.name); // John

// added formatting options to JSON.stringify to make the object look nicer
alert(JSON.stringify(localStorage, null, 2));
```

  </div>
  </div>
</details>

---

### Briefly explain how the JavaScript sessionStorage object functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The sessionStorage object is used much less often than localStorage. The Properties and methods are the same, but it is much more limited. Some of sessionStorages limitations include the fact that it only exists if the tab remains open. Once, it is closed we have no more access to the session. One notable thing about session storage, is that is can be shared between iframes in the same tab. That object data will also server a page refresh, but not the closing or reopening of the URL in a new tab. That is because sessionStorage is bound not only to the origin, but also to the browser tab. For that reason, sessionStorage is used sparingly.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Set the storage item key value
sessionStorage.setItem('test', 1);
// Refresh the page and the data still exists
alert(sessionStorage.getItem('test')); // after refresh: 1
```

  </div>
  </div>
</details>

---

### How do storage events behave when the data gets updated in localStorage and sessionsStorage?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When the data gets updated in localStorage or sessionStorage the storage event triggers. The important thing is that the event triggers on all window objects where the storage is accessible, except the one that caused it. It like a waterfall effect. Imagine, you have two windows with the same site in each. So localStorage is shared between them. If both windows are listening for window.onstorage, then each one will react on updates that happened in the other one.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// triggers on updates made to the same storage from other documents
window.onstorage = (event) => {
  // same as window.addEventListener('storage', event => {
  if (event.key != 'now') return;
  alert(event.key + ':' + event.newValue + ' at ' + event.url);
};

localStorage.setItem('now', Date.now());
```

  </div>
  </div>
</details>

---
