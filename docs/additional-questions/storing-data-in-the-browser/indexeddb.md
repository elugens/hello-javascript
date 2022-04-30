---
title: IndexedDB
description: IndexedDB is a database that is stored in the browser. It is used to store data in the browser.
sidebar_position: 3
sidebar_label: IndexedDB
---

**Storing Browser Data: IndexedDB**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is IndexedDB?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> IndexedDB is a database built into a
      browser that is much more powerful than localStorage. It has several
      powerful features that enhance client-side storage. IndexedDB can store
      practically every sort of value by key, and it supports numerous key
      types. It supports transactions for reliability and key range queries, and
      indexes. It can also store much larger volumes of data than localStorage,
      and it can be used in an asynchronous fashion (async/await) using
      promises. That power is usually excessive for traditional client-server
      apps. IndexedDB is mainly intended for offline apps combined with
      ServiceWorkers and other technologies.
    </div>
  </div>
</details>

---

### Could you perhaps clarify quickly where the data in the IndexedDB is stored?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Technically, the data often saves in the visitor's home directory, with browser preferences, addons, and others. Different browsers and OS-level users have their storage.
    </div>
  </div>
</details>

---

### How do you initially open an IndexedDB database?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To start working with IndexedDB, we first need to open (connect to) a database. The first step in opening an IndexedDB database is using window.indexedDB in conjunction with the open method. The open method has two parameters: the database name (required, string type), and version 1 by default (optional, positive integer). The call returns the declared object; we should listen to events on the opening request. The events include success, error, and upgradeneeded. Success means that the database is ready with an accessible database object, and the apparent error event means that the database has failed to open. The upgradeneeded handler triggers when the database does not yet exist (technically, its version is 0), so we can perform the initialization.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> indexedDB.open(name, version);
<br />
<br />

<div></div>

```js
let openRequest = indexedDB.open('store', 1);

openRequest.onupgradeneeded = function () {
  // triggers if the client had no database
  // ...perform initialization...
};

openRequest.onerror = function () {
  console.error('Error', openRequest.error);
};

openRequest.onsuccess = function () {
  let db = openRequest.result;
  // continue working with database using db object
};
```

  </div>
  </div>
</details>

---

### What are the cross-domain rules that govern IndexedDB?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> We can have many databases with
      different names, but all exist within the current origin
      (domain/protocol/port). Different websites cannot access each other’s
      databases. Some novice programmers may attempt to access the database
      within an &#8249;iframe&#8250;, but this approach does not meet the
      recommendation, because it is insecure.
    </div>
  </div>
</details>

---

### How do we delete an IndexedDB database using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are two ways to delete an IndexedDB database. The manual approach is to delete the database in the application manifest pane. The programmatic approach using JavaScript requires us to use the deleteDatabase method. The deleteDatabase() method of the IDBFactory interface requests the deletion of a database. The method returns an IDBOpenDBRequest object immediately and performs the deletion operation asynchronously. If the database successfully deletes, a success event fires on the request object returned from this method, resulting in undefined. If an error occurs while the database deletes, an error event fires on the request object returned from this method.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<div></div>

```js
let openRequest = indexedDB.open('store', 1);

openRequest.onupgradeneeded = function () {
  // triggers if the client had no database
  // ...perform initialization...
};

openRequest.onerror = function () {
  console.error('Error', openRequest.error);
};

openRequest.onsuccess = function () {
  let db = openRequest.result;
  // continue working with database using db object
};
```

  </div>
  </div>
</details>

---

### What is the reason a user cannot open an IndexedDB database based on versioning?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> If the current user database has a higher version than the one specified in the open call, for example, if the present DB version is 3 and we try to open(...2), an error generates, and openRequest.onerror is called. That's unusual, but it can happen if a visitor loads outdated JavaScript code through a proxy cache. So, while the code is ancient, his database is brand new.
    </div>
  </div>
</details>

---

### Is there a way to handle potential versioning issues with IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we should do a version check programmatically to ensure that the user has the most updated version. We have to implement a parallel upgrade to ensure the correct version loads in the client. We achieve this by calling onversionchange to ensure that the client is updated correctly. These update collisions happen rarely, but we should at least have some handling for them, at least onblocked handler, to prevent our script from dying silently.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<div></div>

```js
let openRequest = indexedDB.open("store", 2);

openRequest.onupgradeneeded = ...;
openRequest.onerror = ...;

openRequest.onsuccess = function() {
  let db = openRequest.result;

  db.onversionchange = function() {
    db.close();
    alert("Database is outdated, please reload the page.")
  };

  // ...the db is ready, use it...
};

openRequest.onblocked = function() {
  // this event shouldn't trigger if we handle onversionchange correctly

  // it means that there's another open connection to same database
  // and it wasn't closed after db.onversionchange triggered for it
};
```

  </div>
  </div>
</details>

---

### What do we need to use to store data in an IndexedDB database?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> To store something in IndexedDB, we need an object store. An object store is a core concept in IndexedDB. Counterparts in other databases are called “tables” or “collections”, where the data is stored. A database may have multiple stores: one for users, another for goods, and more. Despite being named an “object-store” IndexedDB, primitives get stored too.
    </div>
  </div>
</details>

---

### What types of values can an IndexedDB database store?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> We can store almost any value (except
      objects with a circular reference), including complex objects. IndexedDB
      uses the standard serialization algorithm to clone-and-store an object. It
      is like JSON.stringify, but it is more powerful and can store much more
      data.
    </div>
  </div>
</details>

---

### Could you kindly give an example of a non-IndexedDB object?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> An example of an object that cannot
      be stored: an object with circular references. Such objects are not
      serializable, and JSON.stringify also fails for such objects.
    </div>
  </div>
</details>

---

### Is there a specific type of key that we must use in IndexedDB?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Yes, there must be a unique key for
      every value in the store. A key must be a number, date, string, binary, or
      array. It is a unique identifier, so we can search/remove/update values by
      the key index.
    </div>
  </div>
</details>

---

### How are keys implemented in an IndexedDB when we store objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When we add a value to the store, such as localStorage, we may provide a key. However, when storing objects, IndexedDB enables us to use an object attribute as the key, which is much more handier, or we may auto-generate keys. However, we must first establish an object store with the createObjectStore function.
    </div><br />

<strong>Syntax: </strong> db.createObjectStore(name, options);
<br />
<br />

  </div>
</details>

---

### Explain the function and syntax of the createObjectStore JavaScript method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The createObjectStore() method of the IDBDatabase interface creates and returns a new object store or index. The method takes the store's name and a parameter object that lets you define optional properties. You can use the property to identify individual objects in the store uniquely. As the property is an identifier, it should be unique to every object, and every object should have that property. The options have two optional parameters including the key-path and auto-increment. The key path is a path to an object property that IndexedDB uses as the key. If set to true, the auto-increment option parameter automatically generates a new auto-incrementing number for the key, like an id or number. If we do not supply keyOptions, we need to provide a key when storing an object explicitly.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> db.createObjectStore(name, options);
<br />
<br />

<div></div>

```js
// Create an objectStore for this database
let objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });
```

  </div>
  </div>
</details>

---

### When can an object store be created or modified in IndexedDB?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> We can only create/modify an object store while updating the upgraded handler's DB version in the upgradeneeded handler. That is a technical limitation. Outside of the handler, we need to be able to add/remove/update the data, but we can only create/remove/alter object stores during a version update.
    </div>
  </div>
</details>

---

### What are the two basic methods for upgrading an IndexedDB version?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are two main approaches to perform a database version upgrade.<br /><br />We can implement per-version upgrade functions: from 1 to 2, from 2 to 3, from 3 to 4, and onwards. Then, in upgradeneeded we can compare versions (e.g., old 2, now 4) and run per-version upgrades step by step, for every intermediate version (2 to 3, then 3 to 4).<br /><br />Or we can examine the database: retrieve a list of existing object stores as db.objectStoreNames. The object is a DOMStringList that provides contains(name) method to check for the existence of the objects, and then we execute updates depending on what exists and what does not.<br /><br />For small databases, the second variant may be simpler.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong> Second Approach<br /><br />

<div></div>

```js
let openRequest = indexedDB.open('db', 2);

// create/upgrade the database without version checks
openRequest.onupgradeneeded = function () {
  let db = openRequest.result;
  if (!db.objectStoreNames.contains('books')) {
    // if there's no "books" store
    db.createObjectStore('books', { keyPath: 'id' }); // create it
  }
};
```

  </div>
  </div>
</details>

---

### Can you define what a transaction is concerning a database?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> A transaction is a group operation;
      they should either succeed or fail. For example, when a person buys
      something, we need to do a group of operations related to their
      activities, such as removing money from their account or adding an item to
      their shopping list.
    </div>
  </div>
</details>

---

### Can you explain the function and syntax of the transaction method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>The transaction method of the IDBDatabase interface immediately returns a transaction object (IDBTransaction) containing the IDBTransaction.objectStore method, which you can use to access your object-store. We must make all data operations within a transaction in IndexedDB. The transaction method has three available arguments: store, mode/type, and options. The store/storeNames refer to the names of the object stores in the scope of the new transaction, declared as an array of strings. Specify only the object stores that you need to access. If you need to access only one object store, you can specify its name as a string. The mode or type relates to the types of access performed in the transaction. IndexedDB transactions open in one of three modes: readonly, readwrite and readwriteflush (non-standard, Firefox-only.) We should specify the object-store versionchange mode here. If you do not provide the parameter, the default access mode is readonly. Please do not open a readwrite transaction unless you need to write it into the database to avoid slowing things down. The options argument is a dictionary of option durability parameters including "default", "strict", or "relaxed". The default is "default". Using "relaxed" provides better performance but with fewer guarantees. Web applications are encouraged to use "relaxed" for transient data such as caches or quickly changing records and "strict" in cases where reducing the risk of data loss outweighs the impact on performance and power. We should note that the mode/type and options are optional arguments.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> IDBDatabase.transaction(storeNames, mode, options);
<br />
<br />

<div></div>

```js
let transaction = db.transaction('books', 'readwrite'); // (1)

// get an object store to operate on it
let books = transaction.objectStore('books'); // (2)

let book = {
  id: 'js',
  price: 10,
  created: new Date(),
};

let request = books.add(book); // (3)

request.onsuccess = function () {
  // (4)
  console.log('Book added to the store', request.result);
};

request.onerror = function () {
  console.log('Error', request.error);
};
```

  </div>
  </div>
</details>

---

### Why are there different types of IndexedDB transactions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Performance is why transactions need to be labeled either readonly or readwrite. Many readonly transactions can access the same store concurrently, but readwrite transactions cannot. A readwrite transaction “locks” the store for writing. The following transaction must wait before the previous one finishes before accessing the same store.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<div></div>

```js
let transaction = db.transaction('books', 'readwrite'); // (1)
```

  </div>
  </div>
</details>

---

### What are the two methods used for data storage in an Object Store?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Object stores support two methods: the put() and add() methods that store values. The put(value, [key]) adds values to the store. The object store supplies the key only if the object store does not have keyPath or autoIncrement option. If there is already a value with the same key, it gets replaced. The add(value, [key]) function is the same as the put method, except if a value with the same key already exists, the request fails, and an error with the name "ConstraintError" gets created.
    </div>
    <br />
    <strong>Syntax: </strong> let request = books.add(book);
    <br />
    <br />
  </div>
</details>

---

### How do we mark an IndexedDB transaction as finished, with no more requests to come?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> There is no way to mark an IndexedDB transaction as finished (this is not the same as oncomplete) in version 2.0. When all transaction requests end and the microtasks queue is empty, it commits automatically. Usually, we can assume that a transaction commits when all its requests are complete and the current code finishes.
    </div>
  </div>
</details>

---

### What is one of the side-effects of the transaction auto-commit principle?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The auto-commit principle of transactions has an interesting side effect. During a transaction, we cannot introduce an async operation like fetch or setTimeout. IndexedDB does not hold the transaction until these reach completion. This process is especially noticeable when using fetch and setTimeout combined with an IndexedDB transaction. The IndexedDB spec's authors feel that transactions should be short-lived. Primarily for reasons of performance. Readwrite transactions, in particular, "lock" the stores for writing. So, if one part of the program initiates readwrite on the books object store, another portion of the application that wishes to do the same must wait: the new transaction "hangs" until the previous one reaches completion. If transactions take a long time, this might cause unusual delays.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<div></div>

```js
let request1 = books.add(book);

request1.onsuccess = function () {
  fetch('/').then((response) => {
    let request2 = books.add(anotherBook); // (*)
    request2.onerror = function () {
      console.log(request2.error.name); // TransactionInactiveError
    };
  });
};
```

  </div>
  </div>
</details>

---

### Do we need onerror/onsuccess for every request?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Not every time. We can use event delegation instead. All events are DOM events, with capturing and bubbling, but we usually, only use the bubbling stage for event delegation. We can catch all errors using db.onerror handler for reporting or other purposes. If an error get handled, we do not want to report it. We can stop the bubbling and use db.onerror by using event.stopPropagation() in request.onerror.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<div></div>

```js
request.onerror = function (event) {
  if (request.error.name == 'ConstraintError') {
    console.log('Book with such id already exists'); // handle the error
    event.preventDefault(); // don't abort the transaction
    event.stopPropagation(); // don't bubble error up, "chew" it
  } else {
    // do nothing
    // transaction will be aborted
    // we can take care of error in transaction.onabort
  }
};
```

  </div>
  </div>
</details>

---

### What are the two main types of searches in an object store?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> There are two main types of search in an object store: searching by key-value or key range or another object field. This process requires an additional data structure named “index”.
    </div>
  </div>
</details>

---

### Can you describe how a key range or value search works?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To search an IndexedDB database by key range or value, we must implement the IDBKeyrange object and call on the lowerbound and upperbound methods. lowerBound() generates a new key range with only a lower bound. It is closed by default and includes the lower endpoint value. The upperBound() function generates a new upper-bound key range, and it is closed by default and includes the upper endpoint value. The following methods include store get, getAll, getKey, getAllKeys, or count to perform the actual search. They accept a query argument that can be either an exact key or a key range.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<div></div>

```js
// get one book
books.get('js');

// get books with 'css' <= id <= 'html'
books.getAll(IDBKeyRange.bound('css', 'html'));

// get books with id < 'html'
books.getAll(IDBKeyRange.upperBound('html', true));

// get all books
books.getAll();

// get all keys, where id > 'js'
books.getAllKeys(IDBKeyRange.lowerBound('js', true));
```

  </div>
  </div>
</details>

_Author Note: You might want to add an additional question about query object fields._

---

### By default, how does Object store sort values?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Internally, an object storage arranges values by key by default. As a result, requests for return values are returned in key order.
    </div>
  </div>
</details>

---

### How do you delete values in an IndexedDB Object store?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In simple terms, the delete method looks up values to delete by a query. The call format is similar to the getAll() method. If we want to delete everything, we can use the clear method to clear the entire storage.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<div></div>

```js
// find the key where price = 5
let request = priceIndex.getKey(5);

request.onsuccess = function () {
  let id = request.result;
  let deleteRequest = books.delete(id);
};

books.clear(); // clear the storage.
```

  </div>
  </div>
</details>

---

### Can you briefly explain what a cursor is and its relation to the IndexedDB database?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> : A cursor is a pointer that iterates across all the documents in each data store or index, exposing the data for the page that the cursor is presently "pointing" at on each iteration.<br /><br />It also contains a few pieces of additional metadata and a couple of methods, like continue or primaryKey. As an object store is sorted internally by key, a cursor walks the store in key order (ascending by default). The cursor also has two optional arguments, including the range and direction. The range query is a key or a key range, same as for getAll. The direction sets the order to use and includes two parameters prev, and nextunique or prevunique. The prev parameter is the reverse order: down from the record with the biggest key. The nextunique and prevunique are similar, but the skip records with the same key (only for cursors over indexes, e.g., for multiple books with price=5 only the first one returns). The main difference of the cursor is that request.onsuccess triggers multiple times: once for each result.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<div></div>

```js
const request = window.indexedDB.open('database', 1);
request.onsuccess = () => {
  const db = request.result;
  const transaction = db.transaction(['invoices'], 'readonly');
  const invoiceStore = transaction.objectStore('invoices');
  const getCursorRequest = invoiceStore.openCursor();
  getCursorRequest.onsuccess = (e) => {
    // Cursor logic here
  };
};
```

  </div>
  </div>
</details>

---
