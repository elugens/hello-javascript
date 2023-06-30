---
title: FormData Object
description: FormData Object is used to send data to a server. It is used to send the data in the form of key-value pairs. JavaScript Frontend Phone Interview Questions
sidebar_position: 2
sidebar_label: FormData Object
keywords:
  - formdata object
  - formdata
  - functions
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
  - function object
  - functions
  - interview answers
  - interview questions
---


<head>
  <title>FormData Object | JavaScript Frontend Interview Questions</title>
</head>

<!-- Note: Adding questions about FormData soon... -->

**Network Requests: FormData Object**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is the FormData object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The FormData object in JavaScript is a built-in API that allows creation and modification of FormData instances which hold key-value pairs, often used for form data submission.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const formData = new FormData();
formData.append("username", "JavaScript");
console.log(formData.has('username')); // true
```

  </div>
  </div>
</details>

---

### Can you use FormData with AJAX?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, FormData can be used with AJAX. It enables asynchronous transmission of form data, including text fields and files, to a server.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

HTML:

```html
<form id="myForm" name="myForm">
    <input type="text" id="name" name="name" placeholder="Your Name">
    <input type="email" id="email" name="email" placeholder="Your Email">
    <input type="submit" value="Submit">
</form>
```

JavaScript:

```javascript
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://your-url.com/submit', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('Form data submitted');
        } else {
            console.error('An error occurred');
        }
    };

    xhr.send(formData);
});
```

This script attaches an event listener to the form that prevents the form from being submitted in the traditional way (which would cause the page to refresh). Instead, it creates a `FormData` object from the form, and uses an `XMLHttpRequest` to send the data to the specified URL.

Please replace `'http://your-url.com/submit'` with the actual URL where you want to send the form data.

This is just an example, in production environment, you might need to handle errors, retries, add security measures etc.

---

:::note
Please note that newer, more modern methods of performing AJAX requests, such as the Fetch API, are generally recommended over `XMLHttpRequest`, as they provide a more powerful and flexible feature set.
:::

  </div>
  </div>
</details>

---

### Can FormData be used with Fetch API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you absolutely can use FormData with Fetch API (which is a modern alternative to AJAX).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<form id="myForm">
  <input type="text" name="username" value="JohnDoe">
  <input type="email" name="email" value="john@doe.com">
  <input type="submit">
</form>
```

You can use the `FormData` API to retrieve and package form data to send with Fetch:

```javascript
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Create new FormData instance
  var formData = new FormData(event.target);

  fetch('/api/endpoint', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => console.error('Error:', error));
});
```

In the example above, `FormData` is used to capture form data. We add an event listener to the form's submit event, prevent the default form submission behavior, and then create a new `FormData` object.

Then we use `fetch()` to send a `POST` request to `/api/endpoint`. We set the `body` of the request to our `FormData` object. Once the request is complete, we log the response to the console.

**Note:** Replace `/api/endpoint` with your actual API endpoint.

  </div>
  </div>
</details>

---

### What types of data does FormData handle?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> FormData can handle key-value pairs, where values can be Blob, File, or string types, often used for form data submission.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

HTML:

```html
<form id="myForm">
  <input type="text" name="username" value="JohnDoe">
  <input type="file" name="profilePic">
  <input type="submit">
</form>
```

JavaScript:

```javascript
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Create new FormData instance
  var formData = new FormData(event.target);

  fetch('/api/endpoint', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => console.error('Error:', error));
});
```

In this example, `FormData` is used to capture both the text data from the `username` field and the file data from the `profilePic` file input field. We attach an event listener to the form's submit event, prevent the form's default submission behavior, and then create a new `FormData` object. We use `fetch()` to send a `POST` request to `/api/endpoint` with our `FormData` object as the request body.

Once the request is complete, we log the response to the console. The `/api/endpoint` should be replaced with your actual API endpoint.

  </div>
  </div>
</details>

---

### How can you append data to a FormData instance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can append data to a `FormData` instance using its `append()` method. The `append()` method takes two arguments, a key and a value, and adds them to the `FormData` object.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// create an empty FormData instance
let formData = new FormData();

// append some key/value pairs
formData.append('username', 'JohnDoe');
formData.append('email', 'john@doe.com');

// You can also append files
let inputElement = document.querySelector('input[type="file"]');
let file = inputElement.files[0]; // get the first File object from the input element
formData.append('profilePic', file);

// now, you can send this formData with fetch
fetch('/api/endpoint', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));
```

In this example, we first create a new, empty `FormData` object. We then use the `append()` method to add a `username` and `email` field to the object. We also append a file from an input element.

Finally, we send this data to `/api/endpoint` via a POST request using the `fetch()` function. The `/api/endpoint` should be replaced with your actual API endpoint.

---

:::tip
Remember that the files are taken from a file input element in the form and you should replace the selector `'input[type="file"]'` with the actual selector for your file input element if it's different.
:::

  </div>
  </div>
</details>

---

### Can FormData be used without a form element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, `FormData` can be used without an actual form element. You can manually append fields to a `FormData` instance, and this is particularly useful for cases where you want to programmatically send data via AJAX (Fetch API).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// create an empty FormData instance
let formData = new FormData();

// append some key/value pairs
formData.append('username', 'JohnDoe');
formData.append('email', 'john@doe.com');

// fetch API to send 'POST' request
fetch('/api/endpoint', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));
```

In this example, we first create a new, empty `FormData` object. We then use the `append()` method to add a `username` and `email` field to the object. After that, we send this data to `/api/endpoint` via a POST request using the `fetch()` function. The `/api/endpoint` should be replaced with your actual API endpoint.

  </div>
  </div>
</details>

---

### How is FormData sent to the server?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> FormData is typically sent to the server using HTTP or HTTPS protocols, often through AJAX or the Fetch API, in an asynchronous manner.
  </div>
  </div>
</details>

---

### Can FormData objects be modified after creation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, `FormData` objects can be modified after they're created. You can use the `append()`, `set()`, and `delete()` methods to modify the data in the `FormData` object.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example:

```javascript
// create an empty FormData instance
let formData = new FormData();

// append some key/value pairs
formData.append('username', 'JohnDoe');
formData.append('email', 'john@doe.com');

// modify the username field
formData.set('username', 'JaneDoe');

// delete the email field
formData.delete('email');

// you can verify the modifications by looping over the formData object
for (var pair of formData.entries()) {
  console.log(pair[0] + ', ' + pair[1]); 
}

// now, you can send this formData with fetch
fetch('/api/endpoint', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));
```

  </div>
  </div>
</details>

---

### How can you retrieve a value from a FormData object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can retrieve values from a `FormData` object using the `get()` method. The `get()` method retrieves the first value associated with a given key from a `FormData` object.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// create an empty FormData instance
let formData = new FormData();

// append some key/value pairs
formData.append('username', 'JohnDoe');
formData.append('email', 'john@doe.com');

// retrieve values
let username = formData.get('username');
let email = formData.get('email');

console.log('username:', username); // outputs: username: JohnDoe
console.log('email:', email); // outputs: email: john@doe.com
```

In this example, we first create a new `FormData` object and add a `username` and `email` field. We then use the `get()` method to retrieve the values associated with the `username` and `email` keys. We log these values to the console to verify that they have been correctly retrieved.

  </div>
  </div>
</details>

---

### In JavaScript, What is the FormData has() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The has() method in FormData checks if a specified key exists within the FormData object, returning a boolean value.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const formData = new FormData();
formData.append("username", "JavaScript");
const hasUserName = formData.has('username'); // true

if(hasUserName) {
 console.log(hasUserName); // true
 console.log(`Hello, ${formData.get('username')}`); //"Hello, JavaScript"
}
```

  </div>
  </div>
</details>

---

### What is multipart/form-data in relation to FormData?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Multipart Form-Data (multipart/form-data) is the HTTP content type used by FormData when sending data that includes files, allowing for efficient binary data transmission.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

HTML:

```html
<form id="formId" enctype="multipart/form-data" action="#" method="post">
  <input id="name" type="text" />
  <input id="data" type="file" />
  <button type="submit" name="submit">Submit</button>
</form>
```

JavaScript:

```js
var form = document.getElementById('formId');

form.onsubmit = async (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const url = form.action;

  try {
      const formData = new FormData(form);
      const res = await fetch(url, {
          method: 'POST',
          body: formData
      });

      console.log(res);
  } catch (err) {
      console.error(err);
  }

}
```

  </div>
  </div>
</details>

---

### Can FormData handle multiple values for the same key?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, FormData can store multiple values for the same key, accomplished by using the append() method multiple times with the same key. The append method will create an array of items.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let formData = new FormData();

formData.append("username", "Chris");
formData.append("username", "Bob");

let getUserName = formData.get("username");
let getUserNames = formData.getAll("username");

console.log(getUserName); // "Chris"
console.log(getUserNames); // ["Chris", "Bob"]
```

  </div>
  </div>
</details>

---

### How do you remove a key-value pair from a FormData object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can remove a key-value pair from a FormData object by using the delete() method, providing the key as an argument.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// create a new FormData instance
let formData = new FormData();

// append some key/value pairs
formData.append('username', 'JohnDoe');
formData.append('email', 'john@doe.com');

// remove a key-value pair
formData.delete('username');

let hasUserName = formData.has('username');

console.log(hasUserName); // false
```

  </div>
  </div>
</details>

---

### Can FormData be used in Node.js?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, FormData can be used in Node.js, typically with the help of external libraries such as 'form-data' for handling multipart form data.
  </div>
  </div>
</details>

---

### Can you explain the purpose of the entries() method in FormData?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The entries() method in FormData returns an iterator that allows traversal through all key-value pairs contained in the FormData object.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// create a new FormData instance
let formData = new FormData();

// append some key/value pairs
formData.append('username', 'JohnDoe');
formData.append('email', 'john@doe.com');

// iterate over the entries using the entries() method
for (let pair of formData.entries()) {
  console.log(pair[0] + ': ' + pair[1]);
}
```

Output:

```html
"username: JohnDoe"
"email: john@doe.com"
```

In this example, we create a new FormData object and append two key-value pairs (username and email). Then, we use a for...of loop to iterate over the entries of the FormData object using the entries() method.

For each iteration, we log the key-value pair to the console using pair[0] to access the key and pair[1] to access the value.

The purpose of the entries() method is to provide an easy way to access and process all the key-value pairs in a FormData object, allowing you to perform operations or extract the data as needed.

---

:::note
Note: The entries() method returns an iterator, so you can also use other iterator-related functions or constructs such as Array.from() or the spread operator (...) to convert the iterator to an array if desired.
:::

  </div>
  </div>
</details>

---
