---
title: IndexedDB
description: IndexedDB is a database that is stored in the browser. It is used to store data in the browser. | JavaScript Frontend Phone Interview Questions
sidebar_position: 3
sidebar_label: IndexedDB
keywords:
  - indexeddb
  - indexed db
  - browser storage
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
  - indexeddb
  - indexed db
  - browser storage
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/IndexedDBSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>IndexedDB | JavaScript Frontend Phone Interview Questions</title>
</head>

**Storing Browser Data: IndexedDB**

<CloseAllAnswers />

---

### What is IndexedDB?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs, which allows for high-performance searches on this data.
    </div><br/>
    <div>
      <strong>Technical Response:</strong> IndexedDB is a database built into a browser that is much more powerful than localStorage. It has several powerful features that enhance client-side storage. IndexedDB can store practically every sort of value by key, and it supports numerous key types. It supports transactions for reliability and key range queries, and indexes. It can also store much larger volumes of data than localStorage, and it can be used in an asynchronous fashion (async/await) using promises. That power is usually excessive for traditional client-server apps. IndexedDB is mainly intended for offline apps combined with ServiceWorkers and other technologies.
    </div>
  </div>
</details>

---

### How does IndexedDB differ from LocalStorage?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Unlike LocalStorage which stores data as strings, IndexedDB stores data as JavaScript objects. Also, IndexedDB allows for more storage space and supports transactions.
  </div><br />
  </div>
</details>

---

### What are the key components of IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Key components include database, object store, index, transaction, key, value, and cursor.
  </div><br />
  </div>
</details>

---

### Can you explain the concept of "Object Stores" in IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Object Stores in IndexedDB hold records, and they can be likened to tables in a relational database. Each record comprises a key-value pair.
  </div><br />
  </div>
</details>

---

### What is the importance of "Keys" in IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Keys in IndexedDB are used to retrieve and organize data. They can be generated automatically or provided by the user.
  </div><br />
  </div>
</details>

---

### How does indexing work in IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Indexing in IndexedDB allows for efficient searching of values within an object store, by creating an index on a property of the objects.
  </div><br />
  </div>
</details>

---

### How do "Cursors" work in IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Cursors in IndexedDB are used to traverse records in a database. They provide a mechanism to iterate over multiple records with a key range.
  </div><br />
  </div>
</details>

---

### Can you perform join operations in IndexedDB like SQL?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, IndexedDB isn't a relational database and doesn't support joins like SQL, but related data can be manually fetched and combined.
  </div><br />
  </div>
</details>

---

### How do you handle errors in IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Errors in IndexedDB can be handled by listening to the "error" event on the request or transaction objects.
  </div><br />
  </div>
</details>

---

### What are the storage limits of IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> IndexedDB doesn't have a defined limit, but it's constrained by the available disk space. Browsers may also impose their own quotas.
  </div><br />
  </div>
</details>

---

### What does "versioning" mean in IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Versioning in IndexedDB allows for control over database structure modifications. Each database has a version number that increments after structural changes.
  </div><br />
  </div>
</details>

---

### Can IndexedDB be used synchronously or asynchronously?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> IndexedDB API is primarily asynchronous to prevent blocking the main thread, but it also provides a synchronous API for use in web workers.
  </div><br />
  </div>
</details>

---

### Is IndexedDB transactional? Why is it important?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, IndexedDB is transactional. It ensures data integrity and allows for error recovery in case of failures.
  </div><br />
  </div>
</details>

---

### Can IndexedDB be used across different browsers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, IndexedDB is a standard web API supported by all modern browsers. However, implementation details may vary.
  </div><br />
  </div>
</details>

---

### Can IndexedDB handle concurrent transactions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, IndexedDB can handle multiple read transactions, but it queues write transactions to maintain data integrity.
  </div><br />
  </div>
</details>

---

### Is IndexedDB secure? Can its data be encrypted?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> While IndexedDB is not encrypted by default, data can be manually encrypted before storing. It is bound by same-origin policy for security.
  </div><br />
  </div>
</details>

---

### What is the onupgradeneeded event in IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The onupgradeneeded event in IndexedDB is triggered when a database of a higher version number than the existing stored database is loaded.
  </div><br />
  </div>
</details>

---

### Can IndexedDB be used in a Service Worker?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, IndexedDB can be accessed within a Service Worker. It is the recommended storage API for managing data within Service Workers.
  </div><br />
  </div>
</details>

---

### Can you clarify where the data in the IndexedDB is stored?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> IndexedDB data is stored locally on the user's device within the web browser's storage. It persists across browser sessions and is subject to the browser's data policies.
    </div>
  </div>
</details>

---

### How do you initially open an IndexedDB database?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You open an IndexedDB database using the `indexedDB.open()` method, passing in the name of the database and optionally, the version number.
    </div><br />
  <div><strong>Technical Response:</strong> To start working with IndexedDB, we first need to open (connect to) a database. The first step in opening an IndexedDB database is using window.indexedDB in conjunction with the open method. The open method has two parameters: the database name (required, string type), and version 1 by default (optional, positive integer). The call returns the declared object; we should listen to events on the opening request. The events include success, error, and upgradeneeded. Success means that the database is ready with an accessible database object, and the apparent error event means that the database has failed to open. The upgradeneeded handler triggers when the database does not yet exist (technically, its version is 0), so we can perform the initialization.
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
      <strong>Interview Response:</strong> IndexedDB follows the same-origin policy, meaning data stored in IndexedDB is restricted to the same domain where it was created and can't be accessed cross-domain.
    </div>
    <div>
      <strong>Technical Details:</strong> We can have many databases with different names, but all exist within the current origin (domain/protocol/port). Different websites cannot access each other’s databases. Some novice programmers may attempt to access the database within an &#8249;iframe&#8250;, but this approach does not meet the recommendation, because it is insecure.
    </div>
  </div>
</details>

---

### How do we delete an IndexedDB database using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To delete an IndexedDB database in JavaScript, you use the `indexedDB.deleteDatabase(databaseName)` method, passing in the name of the database.
    </div><br />
  <div><strong>Technical Response:</strong> There are two ways to delete an IndexedDB database. The manual approach is to delete the database in the application manifest pane. The programmatic approach using JavaScript requires us to use the deleteDatabase method. The deleteDatabase() method of the IDBFactory interface requests the deletion of a database. The method returns an IDBOpenDBRequest object immediately and performs the deletion operation asynchronously. If the database successfully deletes, a success event fires on the request object returned from this method, resulting in undefined. If an error occurs while the database deletes, an error event fires on the request object returned from this method.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<div></div>

```js
// currently update
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
      <strong>Interview Response:</strong> If the version specified when opening the IndexedDB is lower than the actual database version, it will fail to open due to version conflict.
    </div><br/>
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
  <div><strong>Interview Response:</strong> Yes, use the `onupgradeneeded` event to handle version changes, allowing schema modifications and version management in IndexedDB.
    </div><br />
  <div><strong>Technical Response:</strong> Yes, we should do a version check programmatically to ensure that the user has the most updated version. We have to implement a parallel upgrade to ensure the correct version loads in the client. We achieve this by calling onversionchange to ensure that the client is updated correctly. These update collisions happen rarely, but we should at least have some handling for them, at least onblocked handler, to prevent our script from dying silently.
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
      <strong>Interview Response:</strong> To store data in IndexedDB, you need a transaction on an object store, then use the `put()` or `add()` methods to save data.
    </div>
    <div>
      <strong>Technical Details:</strong> To store something in IndexedDB, we need an object store. An object store is a core concept in IndexedDB. Counterparts in other databases are called “tables” or “collections”, where the data is stored. A database may have multiple stores: one for users, another for goods, and more. Despite being named an “object-store” IndexedDB, primitives get stored too.
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
      <strong>Interview Response:</strong> IndexedDB can store key-value pairs with values being any type including: arrays, numbers, strings, booleans, objects, dates, blobs, undefined, null, and even other IndexedDB objects.
    </div><br/>
    <div>
      <strong>Interview Response:</strong> IndexedDB can store most JavaScript types, including objects, arrays, numbers, strings, dates, and even Blob/ArrayBuffer for file data. It can't store functions though. We can store almost any value (except objects with a circular reference and functions), including complex objects. IndexedDB uses the standard serialization algorithm to clone-and-store an object. It is like JSON.stringify, but it is more powerful and can store much more data.
    </div>
  </div>
</details>

---

### Can you give an example of an Object that can’t be stored in IndexedDB?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> An object with circular references, such as a JavaScript object that refers to itself, cannot be stored directly in IndexedDB because it cannot be serialized.
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
      <strong>Interview Response:</strong> IndexedDB keys can be strings, dates, floating-point numbers, or arrays. They must be unique within an object store if it uses in-line keys.
    </div>
  </div>
</details>

---

### How are keys implemented in an IndexedDB when we store objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Keys in IndexedDB can be auto-generated, defined as a property in stored objects (keyPath), or explicitly provided during the `add()` or `put()` operations (key).
    </div><br />

<strong>Syntax: </strong> db.createObjectStore(name, options);
<br />
<br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example showing different ways of using keys in IndexedDB:

```javascript
// Open a database
let request = indexedDB.open("myDB", 1);
request.onupgradeneeded = function(e) {
    let db = e.target.result;
  
    // Using autoIncrement for keys
    let autoIncrementStore = db.createObjectStore("AutoIncrementStore", { autoIncrement : true });

    // Using keyPath for keys
    let keyPathStore = db.createObjectStore("KeyPathStore", { keyPath: "id" });

    // No keyPath specified, so keys will be provided manually during add/put operations
    let manualKeyStore = db.createObjectStore("ManualKeyStore");
};

// Adding data to the stores
request.onsuccess = function(e) {
    let db = e.target.result;
    let tx = db.transaction(["AutoIncrementStore", "KeyPathStore", "ManualKeyStore"], "readwrite");
    
    // Adding to autoIncrementStore, key will be auto-generated
    tx.objectStore("AutoIncrementStore").add({name: "Alice"});

    // Adding to keyPathStore, key is included in the object
    tx.objectStore("KeyPathStore").add({id: 1, name: "Bob"});

    // Adding to manualKeyStore, key is provided manually
    tx.objectStore("ManualKeyStore").add({name: "Charlie"}, 1);
};
```

In this example, keys for "AutoIncrementStore" are automatically generated, keys for "KeyPathStore" are specified in the objects themselves (using "id" field), and for "ManualKeyStore" keys are provided manually during `add` operation.

  </div>
  </div>
</details>

---

### Can you explain the function of the createObjectStore JavaScript method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `createObjectStore` is a method used in IndexedDB to create a new object store (akin to a table) within a database. It takes the store's name and optional parameters for key configuration.
    </div><br />
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

### When can Object stores be created or modified in IndexedDB?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Object stores in IndexedDB can be created or modified only during the upgrade transaction, which is triggered by `onupgradeneeded` event when opening a database with a higher version number.
    </div><br/>
    <div>
      <strong>Technical Response:</strong> We can only create/modify an object store while updating the upgraded handler's DB version in the 'upgradeneeded' handler. That is a technical limitation. Outside of the handler, we need to be able to add/remove/update the data, but we can only create/remove/alter object stores during a version update.
    </div>
  </div>
</details>

---

### What are the two basic methods for upgrading an IndexedDB version?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The two basic methods for upgrading an IndexedDB version are using the onupgradeneeded event, which is triggered when a database of a higher version is opened, or by calling IDBDatabase.setVersion().
    </div><br />
  <div><strong>Technical Response:</strong> There are two main approaches to perform a database version upgrade.<br /><br />We can implement per-version upgrade functions: from 1 to 2, from 2 to 3, from 3 to 4, and onwards. Then, in upgradeneeded we can compare versions (e.g., old 2, now 4) and run per-version upgrades step by step, for every intermediate version (2 to 3, then 3 to 4).<br /><br />Or we can examine the database: retrieve a list of existing object stores as db.objectStoreNames. The object is a DOMStringList that provides contains(name) method to check for the existence of the objects, and then we execute updates depending on what exists and what does not.<br /><br />For small databases, the second variant may be simpler.
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

### What is a transaction in IndexedDB?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> A transaction represents an atomic and durable set of data-access and data-modification operations on a database. In IndexedDB, a transaction is a wrapper around an operation, or group of operations, ensuring that all actions are performed successfully and completely or not at all, maintaining data integrity.
    </div>
  </div>
</details>

---

### Can you explain the function and syntax of the transaction method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `transaction` method in IndexedDB starts a transaction on specified object stores. Syntax: `IDBDatabase.transaction(storeNames, mode)`, where `mode` can be 'readonly' or 'readwrite'.
    </div><br />
  <div><strong>Technical Response:</strong> The transaction method of the IDBDatabase interface immediately returns a transaction object (IDBTransaction) containing the IDBTransaction.objectStore method, which you can use to access your object-store. We must make all data operations within a transaction in IndexedDB. The transaction method has three available arguments: store, mode/type, and options. The store/storeNames refer to the names of the object stores in the scope of the new transaction, declared as an array of strings. Specify only the object stores that you need to access. If you need to access only one object store, you can specify its name as a string. The mode or type relates to the types of access performed in the transaction. IndexedDB transactions open in one of three modes: readonly, readwrite and readwriteflush (non-standard, Firefox-only.) We should specify the object-store versionchange mode here. If you do not provide the parameter, the default access mode is readonly. Please do not open a readwrite transaction unless you need to write it into the database to avoid slowing things down. The options argument is a dictionary of option durability parameters including "default", "strict", or "relaxed". The default is "default". Using "relaxed" provides better performance but with fewer guarantees. Web applications are encouraged to use "relaxed" for transient data such as caches or quickly changing records and "strict" in cases where reducing the risk of data loss outweighs the impact on performance and power. We should note that the mode/type and options are optional arguments.
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

### What are the different types of IndexedDB transactions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> IndexedDB provides 'readonly' and 'readwrite' transactions to optimize concurrency. 'Readonly' allows multiple simultaneous reads, improving performance, while 'readwrite' ensures data integrity during writes.
  </div><br />
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
      <strong>Interview Response:</strong> The two methods for storing data in an IndexedDB object store are `put()` and `add()`. Both store key-value pairs, but behave differently on key conflict.
    </div>
    <br />
    <div>
      <strong>Interview Response:</strong> Object stores support two methods: the put() and add() methods that store values. The put(value, &#91;key&#93;) adds values to the store. The object store supplies the key only if the object store does not have keyPath or autoIncrement option. If there is already a value with the same key, it gets replaced. The add(value, &#91;key&#93;) function is the same as the put method, except if a value with the same key already exists, the request fails, and an error with the name "ConstraintError" gets created.
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
      <strong>Interview Response:</strong> There is no way to mark an IndexedDB transaction as finished (this is not the same as oncomplete) in version 2.0. In IndexedDB, a transaction automatically finishes when there are no more pending requests or when the commit() method is called. You don't need to manually mark it as finished.
    </div>
  </div>
</details>

---

### What is one of the side-effects of the transaction auto-commit principle?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> One side effect of the auto-commit principle is that if you asynchronously attempt to add more requests after current ones have completed, those new requests may fail as the transaction could have auto-committed.
    </div><br />
  <div><strong>Technical Response:</strong> The auto-commit principle of transactions has an interesting side effect. During a transaction, we cannot introduce an async operation like fetch or setTimeout. IndexedDB does not hold the transaction until these reach completion. This process is especially noticeable when using fetch and setTimeout combined with an IndexedDB transaction. The IndexedDB spec's authors feel that transactions should be short-lived. Primarily for reasons of performance. Readwrite transactions, in particular, "lock" the stores for writing. So, if one part of the program initiates readwrite on the books object store, another portion of the application that wishes to do the same must wait: the new transaction "hangs" until the previous one reaches completion. If transactions take a long time, this might cause unusual delays.
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
  <div><strong>Interview Response:</strong> No, it's not necessary to have onerror/onsuccess for every request. You can handle errors and successes at the transaction level, which will catch events from all requests within the transaction.
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

### What are the two main types of searches in an Object store?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The two main types of searches in an IndexedDB object store are "get" and "cursor" operations. "Get" retrieves an item by its key, while a "cursor" iterates over multiple items.
    </div>
    <div>
      <strong>Technical Details:</strong> There are two ways of searching in an object store: searching by key-value or key range or another object field. This process requires an additional data structure named “index”.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of both types of searches:

```javascript
let request = indexedDB.open("myDB");
request.onsuccess = function(e) {
    let db = e.target.result;
    let tx = db.transaction("ObjectStore");
    let store = tx.objectStore("ObjectStore");
  
    // Get operation
    let getRequest = store.get(1);
    getRequest.onsuccess = function() {
        console.log("Get operation:", getRequest.result);
    };

    // Cursor operation
    let cursorRequest = store.openCursor();
    cursorRequest.onsuccess = function() {
        let cursor = cursorRequest.result;
        if (cursor) {
            console.log("Cursor operation:", cursor.value);
            cursor.continue();
        }
    };
};
```

In this example, the "get" operation retrieves the object with key 1, and the "cursor" operation iterates over all the objects in the store.

  </div>
  </div>
</details>

---

### Can you describe how a key range or value search works?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A key range in IndexedDB allows searching within a specific range of keys. It's created using IDBKeyRange methods (like lowerBound, upperBound, bound, only), and used in cursor operations or getAll methods.
    </div><br />
  <div><strong>Technical Response:</strong> To search an IndexedDB database by key range or value, we must implement the IDBKeyrange object and call on the lowerbound and upperbound methods. lowerBound() generates a new key range with only a lower bound. It is closed by default and includes the lower endpoint value. The upperBound() function generates a new upper-bound key range, and it is closed by default and includes the upper endpoint value. The following methods include store get, getAll, getKey, getAllKeys, or count to perform the actual search. They accept a query argument that can be either an exact key or a key range.
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

<!-- _Author Note: You might want to add an additional question about query object fields._ -->

---

### By default, how does Object store sort values?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> By default, an IndexedDB object store sorts values by their keys in ascending order. This ordering is followed during cursor-based traversal or when getting multiple records using key ranges.
    </div>
  </div>
</details>

---

### How do you delete values in an IndexedDB Object store?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Values in an IndexedDB object store can be deleted using the `delete` method, which takes a key or key range as argument, or by calling `clear` to remove all records from the store. The call format is similar to the getAll() method. If we want to delete everything, we can use the clear method to clear the entire storage.
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

### Can you explain what a cursor is and its relation to the IndexedDB database?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A cursor in IndexedDB is an object that iterates over records in a store or index, in key order. It's used to retrieve, update, or delete records, offering fine-grained access to data.
    </div><br />
  <div><strong>Technical Response:</strong> A cursor is a pointer that iterates across all the documents in each data store or index, exposing the data for the page that the cursor is presently "pointing" at on each iteration.<br /><br />It also contains a few pieces of additional metadata and a couple of methods, like continue or primaryKey. As an object store is sorted internally by key, a cursor walks the store in key order (ascending by default). The cursor also has two optional arguments, including the range and direction. The range query is a key or a key range, same as for getAll. The direction sets the order to use and includes two parameters prev, and nextunique or prevunique. The prev parameter is the reverse order: down from the record with the biggest key. The nextunique and prevunique are similar, but the skip records with the same key (only for cursors over indexes, e.g., for multiple books with price=5 only the first one returns). The main difference of the cursor is that request.onsuccess triggers multiple times: once for each result.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<div></div>

Here's an example demonstrating the usage of a cursor in IndexedDB:

```javascript
let request = indexedDB.open("myDB");
request.onsuccess = function(e) {
    let db = e.target.result;
    let tx = db.transaction("ObjectStore");
    let store = tx.objectStore("ObjectStore");
  
    let cursorRequest = store.openCursor();
    cursorRequest.onsuccess = function() {
        let cursor = cursorRequest.result;
        if (cursor) {
            // Access the current record using cursor.value
            console.log("Cursor value:", cursor.value);

            // Update the record
            cursor.value.updatedField = "New value";
            let updateRequest = cursor.update(cursor.value);
            updateRequest.onsuccess = function() {
                console.log("Record updated successfully");
            };

            // Delete the record
            let deleteRequest = cursor.delete();
            deleteRequest.onsuccess = function() {
                console.log("Record deleted successfully");
            };

            cursor.continue(); // Move to the next record
        } else {
            console.log("Cursor iteration complete");
        }
    };
};
```

In this example, the cursor iterates over all records in the "ObjectStore". It accesses the current record using `cursor.value`, updates the record using `cursor.update()`, and deletes the record using `cursor.delete()`. The cursor moves to the next record using `cursor.continue()`.

  </div>
  </div>
</details>

---
