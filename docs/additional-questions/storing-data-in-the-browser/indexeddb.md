---
title: IndexedDB
sidebar_position: 3
---

# IndexedDB

**Storing Browser Data: IndexedDB**

<head>
  <title>IndexedDB - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> IndexedDB is a database that is built into browser that is much more powerful than localStorage. It several powerful features that enhance client-side storage. IndexedDB stores almost any kind of values by keys, multiple key types. It supports transactions for reliability and key range queries, indexes. It can also store much bigger volumes of data than localStorage and it can be used in an asynchronous fashion (async/await) using promises. That power is usually excessive for traditional client-server apps. IndexedDB is intended for offline apps, to be combined with ServiceWorkers and other technologies.
    </div>
  </div>
</details>

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

Source: <https://javascript.info/indexeddb>

### Can you briefly explain where the data is stored in the IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Technically, the data is usually stored in the visitor’s home directory, along with browser settings, extensions, etc. Different browsers and OS-level users have each their own independent storage.
    </div>
  </div>
</details>

Source: <https://javascript.info/indexeddb>

### How do you initially open an IndexedDB database?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To start working with IndexedDB, we first need to open (connect to) a database. The first step in opening a IndexedDB database using window.indexedDB in conjunction with the open method. The open method has two parameters including the database name (required, string type), and the version which is 1 by default (optional, positive integer). The call returns the declared object, we should listen to events on the opening request. The events include success, error, and upgradeneeded. Success means that the database is ready with an accessible database object. The obvious error event means that the database has failed to open. The upgradeneeded handler triggers when the database does not yet exist (technically, its version is 0), so we can perform the initialization.
    </div>
  </div>
</details>

**Syntax:** indexedDB.open(name, version)

Code Example:

```js
let openRequest = indexedDB.open('store', 1);

openRequest.onupgradeneeded = function () {
  // triggers if the client had no database
  // ...perform initialization...
};

openRequest.onerror = function () {
  console.error('Error', openRequest.error);
};

openRequest.onsuccess = function () {
  let db = openRequest.result;

  // continue working with database using db object
};
```

Source: <https://javascript.info/indexeddb#open-database>

### What are the cross-domain rules that govern IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can have many databases with different names, but all of them exist within the current origin (domain/protocol/port). Different websites cannot access each other’s databases. Some novice programmers may attempt to access the database within an &#8249;iframe&#8250;, but this is not recommended, because it is insecure.
    </div>
  </div>
</details>

Source: <https://javascript.info/indexeddb#open-database>

### How do we delete a IndexedDB database using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are two ways to delete an IndexedDB database. The manual approach is to delete the database in the application manifest pane. The programmatic approach using JavaScript requires us to use the deleteDatabase method. The deleteDatabase() method of the IDBFactory interface requests the deletion of a database. The method returns an IDBOpenDBRequest object immediately, and performs the deletion operation asynchronously. If the database is successfully deleted, then a success event is fired on the request object returned from this method, with its result set to undefined. If an error occurs while the database is being deleted, then an error event is fired on the request object that is returned from this method.
    </div>
  </div>
</details>

Code Example:

```js
let openRequest = indexedDB.open('store', 1);

openRequest.onupgradeneeded = function () {
  // triggers if the client had no database
  // ...perform initialization...
};

openRequest.onerror = function () {
  console.error('Error', openRequest.error);
};

openRequest.onsuccess = function () {
  let db = openRequest.result;

  // continue working with database using db object
};
```

Source: <https://javascript.info/indexeddb#open-database>

### What is the reason a user cannot open an IndexedDB database based on versioning?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the current user database has a higher version than in the open call, e.g. the existing DB version is 3, and we try to open(...2), then that’s an error, openRequest.onerror triggers. That’s rare, but such a thing may happen when a visitor loads outdated JavaScript code, e.g. from a proxy cache. So the code is old, but his database is new.
    </div>
  </div>
</details>

Source: <https://javascript.info/indexeddb#open-database>

### Is there a way to handle potential versioning issues with IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we should do a version check programmatically to ensure that the user has the most update version. We will have to implement a parallel upgrade to ensure the right version is loaded in the client. This can be achieved by calling onversionchange to ensure that the client is updated properly. These update collisions happen rarely, but we should at least have some handling for them, at least onblocked handler, to prevent our script from dying silently.
    </div>
  </div>
</details>

Code Example:

```js
let openRequest = indexedDB.open("store", 2);

openRequest.onupgradeneeded = ...;

openRequest.onerror = ...;

openRequest.onsuccess = function() {

    let db = openRequest.result;

    db.onversionchange = function() {

      db.close();

      alert("Database is outdated, please reload the page.")

    };

    // ...the db is ready, use it...

};

openRequest.onblocked = function() {

    // this event shouldn't trigger if we handle onversionchange correctly

    // it means that there's another open connection to same database

    // and it wasn't closed after db.onversionchange triggered for it

};
```

Source: <https://javascript.info/indexeddb#parallel-update-problem>

### What is the reason a user cannot open an IndexedDB database based on versioning?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the current user database has a higher version than in the open call, e.g. the existing DB version is 3, and we try to open(...2), then that’s an error, openRequest.onerror triggers. That is rare, but such a thing may happen when a visitor loads outdated JavaScript code, e.g., from a proxy cache. So, the code is old, but the user’s database is new.
    </div>
  </div>
</details>

Source: <https://javascript.info/indexeddb#open-database>

### What do we need to use to store data in a IndexedDB database?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To store something in IndexedDB, we need an object store. An object store is a core concept of IndexedDB. Counterparts in other databases are called “tables” or “collections”. It is where the data is stored. A database may have multiple stores: one for users, another one for goods, etc. Despite being named an “object store”, primitives can be stored too.
    </div>
  </div>
</details>

Source: <https://javascript.info/indexeddb#object-store>

### What kind of values can be store in an IndexedDB database?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can store almost any value (except objects with a circular reference), including complex objects. IndexedDB uses the standard serialization algorithm to clone-and-store an object. It is like JSON.stringify, but more powerful, capable of storing much more datatypes.
    </div>
  </div>
</details>

Source: <https://javascript.info/indexeddb#object-store>

### Can you give an example of an object that can’t be stored in IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An example of an object that cannot be stored: an object with circular references. Such objects are not serializable. JSON.stringify also fails for such objects.
    </div>
  </div>
</details>

Source: <https://javascript.info/indexeddb#object-store>

### Is there a specific type of key that we must use in IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there must be a unique key for every value in the store. A key must be either a number, date, string, binary, or array. It is a unique identifier, so we can search/remove/update values by the key index.
    </div>
  </div>
</details>

Source: <https://javascript.info/indexeddb#object-store>

### How are keys implemented in a IndexedDB when we store objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can provide a key when we add a value to the store, like localStorage. But when we store objects, IndexedDB allows setting up of an object property as the key, which is much more convenient, or we can auto-generate keys. But we need to create an object store first using the createObjectStore method.
    </div>
  </div>
</details>

**Syntax:** db.createObjectStore(name, options)

Source: <https://javascript.info/indexeddb#object-store>

### Explain the function and syntax of the createObjectStore JavaScript method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The createObjectStore() method of the IDBDatabase interface creates and returns a new object store or index. The method takes the name of the store as well as a parameter object that lets you define important optional properties. You can use the property to uniquely identify individual objects in the store. As the property is an identifier, it should be unique to every object, and every object should have that property. The options have two optional parameters including the key-path and autoincrement. The key-path is a path to an object property that IndexedDB will use as the key. The autoincrement option parameter if set to true will automatically generate a new ever-incrementing number for the key, like an id or number. If we do not supply keyOptions, then we will need to provide a key explicitly later, when storing an object.
    </div>
  </div>
</details>

**Syntax:** db.createObjectStore(name, options)

```js
Code Example:

// Create an objectStore for this database

let objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });
```

Source: <https://javascript.info/indexeddb#object-store>

### When can an object store be created or modified in IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An object store can only be created/modified while updating the DB version, in upgradeneeded handler. That is a technical limitation. Outside of the handler we will be able to add/remove/update the data, but object stores can only be created/removed/altered during a version update.
    </div>
  </div>
</details>

Source: <https://javascript.info/indexeddb#object-store>

### What are the two main approaches to performing a IndexedDB version upgrade?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To perform a database version upgrade, there are two main approaches.<br /><br />We can implement per-version upgrade functions: from 1 to 2, from 2 to 3, from 3 to 4 etc. Then, in upgradeneeded we can compare versions (e.g., old 2, now 4) and run per-version upgrades step by step, for every intermediate version (2 to 3, then 3 to 4).<br /><br />Or we can just examine the database: get a list of existing object stores as db.objectStoreNames. That object is a DOMStringList that provides contains(name) method to check for existance. And then we can do updates depending on what exists and what does not.<br /><br />For small databases, the second variant may be simpler.
    </div>
  </div>
</details>

Code Example: Second Approach

```js
let openRequest = indexedDB.open('db', 2);

// create/upgrade the database without version checks

openRequest.onupgradeneeded = function () {
  let db = openRequest.result;

  if (!db.objectStoreNames.contains('books')) {
    // if there's no "books" store

    db.createObjectStore('books', { keyPath: 'id' }); // create it
  }
};
```

Source: <https://javascript.info/indexeddb#object-store>

### Can you define what a transaction is in relation to a database?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In simple terms, a transaction is a group operation, they should either succeed or all fail. For example, when a person buys something, we need to do a group of operations related to their activities such as remove money from their account or adding an item to their shopping list.
    </div>
  </div>
</details>

Source: <https://javascript.info/indexeddb#transactions>

### Example the function and syntax of the transaction method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The transaction method of the IDBDatabase interface immediately returns a transaction object (IDBTransaction) containing the IDBTransaction.objectStore method, which you can use to access your object store. All data operations must be made within a transaction in IndexedDB. The transaction method has three available arguments including the store, mode/type, and options. The store/storeNames refer to the names of the object stores that are in the scope of the new transaction, declared as an array of strings. Specify only the object stores that you need to access. If you need to access only one object store, you can specify its name as a string. The mode or type relates to the types of access that can be performed in the transaction. Transactions are opened in one of three modes: readonly, readwrite and readwriteflush (non-standard, Firefox-only.) The versionchange mode cannot be specified here. If you do not provide the parameter, the default access mode is readonly. To avoid slowing things down, do not open a readwrite transaction unless you need to write into the database. The options argument is a dictionary of option durability parameters including "default", "strict", or "relaxed". The default is "default". Using "relaxed" provides better performance, but with fewer guarantees. Web applications are encouraged to use "relaxed" for ephemeral data such as caches or quickly changing records, and "strict" in cases where reducing the risk of data loss outweighs the impact to performance and power. It should be noted that the mode/type and options are optional arguments.
    </div>
  </div>
</details>

**Syntax:** IDBDatabase.transaction(storeNames, mode, options)

Code Example:

```js
let transaction = db.transaction('books', 'readwrite'); // (1)
// get an object store to operate on it

let books = transaction.objectStore('books'); // (2)
let book = {
  id: 'js',

  price: 10,

  created: new Date(),
};

let request = books.add(book); // (3)
request.onsuccess = function () {
  // (4)

  console.log('Book added to the store', request.result);
};

request.onerror = function () {
  console.log('Error', request.error);
};
```

Source: <https://javascript.info/indexeddb#transactions>

### Why are there different types of IndexedDB transactions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Performance is the reason why transactions need to be labeled either readonly or readwrite. Many readonly transactions can access the same store concurrently, but readwrite transactions cannot. A readwrite transaction “locks” the store for writing. The next transaction must wait before the previous one finishes before accessing the same store.
    </div>
  </div>
</details>

Code Example:

```js
let transaction = db.transaction('books', 'readwrite'); // (1)
```

Source: <https://javascript.info/indexeddb#transactions>

### What the two methods used to store a value in an Object Store?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There Object stores support two methods including the put() and add() methods to store values. The put(value, [key]) adds the value to the store. The key is supplied only if the object store did not have keyPath or autoIncrement option. If there is already a value with the same key, it will be replaced. The add(value, [key]) is the same as the put method, but if there’s already a value with the same key, then the request fails, and an error with the name "ConstraintError" is generated.
    </div>
  </div>
</details>

**Syntax:** let request = books.add(book)

Source: <https://javascript.info/indexeddb#transactions>

### How do we mark a IndexedDB transaction as finished, with no more requests to come?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There is no way to mark an IndexedDB transaction as finished (this is not the same as oncomplete) in the current version 2.0. When all transaction requests are finished, and the microtasks queue is empty, it is committed automatically. Usually, we can assume that a transaction commits when all its requests are complete, and the current code finishes.
    </div>
  </div>
</details>

Source: <https://javascript.info/indexeddb#transactions-autocommit>

### What is one of the side-effects of the transaction auto-commit principle?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Transaction’s auto-commit principle has an important side effect. We cannot insert an async operation like fetch, setTimeout in the middle of transaction. IndexedDB will not keep the transaction waiting till these are done. This is notable when you use fetch of setTimeout in conjunction with a IndexedDB transaction. The Authors of IndexedDB spec believe that transactions should be short-lived. Mostly for performance reasons. Notably, readwrite transactions “lock” the stores for writing. So, if one part of application initiated readwrite on books object store, then another part that wants to do the same has to wait: the new transaction “hangs” till the first one is done. That can lead to strange delays if transactions take a long time.
    </div>
  </div>
</details>

Code Example:

```js
let request1 = books.add(book);

request1.onsuccess = function () {
  fetch('/').then((response) => {
    let request2 = books.add(anotherBook); // (\*)
    request2.onerror = function () {
      console.log(request2.error.name); // TransactionInactiveError
    };
  });
};
```

Source: <https://javascript.info/indexeddb#transactions-autocommit>

### Do we need onerror/onsuccess for every request?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Not every time. We can use event delegation instead. All events are DOM events, with capturing and bubbling, but usually only bubbling stage is used for event delegation. We can catch all errors using db.onerror handler, for reporting or other purposes that we choose. If an error is fully handled, then we do not want to report it. We can stop the bubbling and use db.onerror by using event.stopPropagation() in request.onerror.
    </div>
  </div>
</details>

Code Example:

```js
request.onerror = function (event) {
  if (request.error.name == 'ConstraintError') {
    console.log('Book with such id already exists'); // handle the error
    event.preventDefault(); // don't abort the transaction
    event.stopPropagation(); // don't bubble error up, "chew" it
  } else {
    // do nothing
    // transaction will be aborted
    // we can take care of error in transaction.onabort
  }
};
```

Source: <https://javascript.info/indexeddb#event-delegation>

### What are the two main types of searches in an object store?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are two main types of search in an object store that include searching by key value or key range, or by another object field. This required an additional data structure, named “index”.
    </div>
  </div>
</details>

Source: <https://javascript.info/indexeddb#searching>

### Can you explain how a search by key range or value is performed?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To search a IndexedDB database by key range or value we must implement the IDBKeyrange object and call on the lowerbound and/or upperbound methods. The lowerBound() method creates a new key range with only a lower bound. By default, it includes the lower endpoint value and is closed. The upperBound() method creates a new upper-bound key range. By default, it includes the upper endpoint value and is closed. To perform the actual search, there are following methods including store get, getAll, getKey, getAllKeys, or count. They accept a query argument that can be either an exact key or a key range.
    </div>
  </div>
</details>

_Author Note: You might want to add an additional question about query object fields._

Code Example:

```js
// get one book

books.get('js');

// get books with 'css' <= id <= 'html'

books.getAll(IDBKeyRange.bound('css', 'html'));

// get books with id < 'html'

books.getAll(IDBKeyRange.upperBound('html', true));

// get all books

books.getAll();

// get all keys, where id > 'js'

books.getAllKeys(IDBKeyRange.lowerBound('js', true));
```

Source: <https://javascript.info/indexeddb#searching>

### By default, how does Object store sort values?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By default, an object store sorts values by key internally. So, requests that return many values always return them in sorted by key order.
    </div>
  </div>
</details>

Source: <https://javascript.info/indexeddb#searching>

### How do you delete values in a IndexedDB Object store?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In simple terms, the delete method looks up values to delete by a query, the call format is similar to the getAll() method. If we want to delete everything, we can use the clear method to clear the entire storage.
    </div>
  </div>
</details>

Code Example:

```js
// find the key where price = 5

let request = priceIndex.getKey(5);

request.onsuccess = function () {
  let id = request.result;

  let deleteRequest = books.delete(id);
};

books.clear(); // clear the storage.
```

Source: <https://javascript.info/indexeddb#searching>

### Briefly explain what a cursor is in relation to the IndexedDB database.\*\*

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A cursor, simply put, is a pointer that iterates over all the documents in each data store or index, and on each iteration, it exposes the data for the document that the cursor is currently being “pointed” at.<br /><br />It also contains a few pieces of additional metadata as well as a couple methods, like continue or primaryKey. As an object store is sorted internally by key, a cursor walks the store in key order (ascending by default). The cursor also has two optional arguments including the range and direction. The range query is a key or a key range, same as for getAll. The direction sets the order to use and includes two parameters prev, and nextunique or prevunique. The prev parameter is the reverse order: down from the record with the biggest key. The nextunique and prevunique are similar as prev, but the skip records with the same key (only for cursors over indexes, e.g., for multiple books with price=5 only the first one will be returned). The main difference of the cursor is that request.onsuccess triggers multiple times: once for each result.
    </div>
  </div>
</details>

Code Example:

```js
const request = window.indexedDB.open('database', 1);

request.onsuccess = () => {
  const db = request.result;

  const transaction = db.transaction(['invoices'], 'readonly');

  const invoiceStore = transaction.objectStore('invoices');

  const getCursorRequest = invoiceStore.openCursor();

  getCursorRequest.onsuccess = (e) => {
    // Cursor logic here
  };
};
```

Source: <https://itnext.io/searching-in-your-indexeddb-database-d7cbf202a17>

**Author Note: Incomplete at Promise Wrapper**

**Source:** <https://javascript.info/indexeddb#promise-wrapper>
