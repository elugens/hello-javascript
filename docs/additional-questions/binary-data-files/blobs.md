---
title: Blob Data
description: Blob Data is a built-in object that allows you to create a Blob object. It is used in the browser to create a Blob object from an array of bytes.
sidebar_position: 3
sidebar_label: Blob Data
keywords:
  - blob data
  - javascript blobs
  - blob object
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - interview questions
  - interview answers
  - js
tags:
  - blob data
  - javascript blobs
  - blob object
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/BlobsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Blob Data | JavaScript Frontend Phone Interview Questions</title>
</head>

**Binary Data / Files: Blob Data**

<CloseAllAnswers />

---

### What is a Blob in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A Blob is a file-like object that represents a sequence of bytes (immutable raw data), used for operations involving large amounts of data like files, images, or video streams.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const blob = new Blob(data, {type: 'text/plain'});
```

  </div>
  </div>
</details>

---

### How is a Blob object created?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a Blob object can be created using the Blob constructor, which takes an array of BlobParts (like Strings, ArrayBuffer, other Blobs) and an optional options object.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const blob = new Blob(["This is a sample file content."], { type: "text/plain;charset=utf-8" });
```

  </div>
  </div>
</details>

---

### Can you explain what a Blob constructor is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A Blob constructor in JavaScript is used to create a new Blob object which represents immutable raw data, optionally specifying the data's MIME type.
    </div><br />
  <div><strong>Technical Response:</strong> The Blob() constructor returns a new Blob object. The blob's content consists of an optional string type (a MIME-type usually), plus blobParts - a sequence of other Blob objects, strings, and BufferSource. The blobParts is an array of Blob/BufferSource/String values. The options argument has two optional object parameters, including the type and endings. The Blob type, usually a MIME-type, e.g., text/html. The endings parameter is specific to how to interpret newline characters (\n) within the contents of the data is text. The default value, transparent, copies newline characters into the blob without changing them. To convert newlines to the host system's native convention, specify the value native. The arguments are similar to array.slice, negative numbers are allowed too.
    </div><br />
  <div><strong className="codeExample">Syntax:</strong> new Blob(blobParts, options);<br />

  <div></div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
var myBlobParts = ['<html><h2>This is heading</h2></html>'];
// an array consisting of a single DOMString

var myBlob = new Blob(myBlobParts, {
  type: 'text/html',
  endings: 'transparent',
}); // the blob

console.log(myBlob.size + ' bytes size');
// Output: 37 bytes size

console.log(myBlob.type + ' is the type');
// Output: text/html is the type
```

  </div>
  </div>
</details>

---

### What are common uses for Blobs?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Blobs in JavaScript are commonly used for handling large binary data like images, audio files, or video streams. They're useful in file manipulation (reading and writing), AJAX requests, and in the File API.
  </div>
  </div>
</details>

---

### How do you read data from a Blob?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To read data from a Blob in JavaScript, you can use the `FileReader` API. Create a new `FileReader` instance, use its `readAsText()` or `readAsArrayBuffer()` method, and listen for the `onload` event to access the data.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const blob = new Blob(["Hello, JavaScript!"], {type: "text/plain"});
const reader = new FileReader();
reader.readAsText(blob);
reader.onload = function() {
  const text = reader.result;
  console.log(text); // "Hello, JavaScript!"
};
```

  </div>
  </div>
</details>

---

### Can Blob data be converted to a different format?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Blob data can be converted to other formats in JavaScript. For instance, FileReader's readAsDataURL method can convert a Blob into a base64 encoded data URL.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let blob = new Blob(["Hello World"], {type: "text/plain"});

let reader = new FileReader();

reader.onload = function() {
  console.log(reader.result);  // this will output the base64 string
}

reader.readAsDataURL(blob);
```

In this code, `reader.result` will contain a base64 encoded data URL representing the text "Hello World".

  </div>
  </div>
</details>

---

### Can Blob objects be sent to a server?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Blob objects can be sent to a server using HTTP protocols like POST or PUT, typically using JavaScript's `fetch` or `XMLHttpRequest` APIs.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width" />

    <title>Fetch Request example</title>
  </head>

  <body>
    <h1>Fetch Request example</h1>
    <img src="" />
  </body>
  <script>
    const myImage = document.querySelector("img");
    const myRequest = new Request("flowers.jpg");

    fetch(myRequest)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error, status = ${response.status}`);
        }
        return response.blob();
      })
      .then((myBlob) => {
        const objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
      })
      .catch((error) => {
        const p = document.createElement("p");
        p.appendChild(document.createTextNode(`Error: ${error.message}`));
        document.body.insertBefore(p, myImage);
      });
  </script>
</html>
```

  </div>
  </div>
</details>

---

### How can you slice a part of a Blob?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To slice a part of a Blob in JavaScript, you can use the Blob.slice() method. Specify the start and end offsets (optional) to create a new Blob containing the desired portion of data.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Assuming you have a Blob object named 'originalBlob'

// Define the start and end offsets for the slice
const startOffset = 10; // Starting offset in bytes
const endOffset = 50; // Ending offset in bytes (optional)

// Create a new Blob slice using the slice() method
const slicedBlob = originalBlob.slice(startOffset, endOffset);

// Use the slicedBlob as desired (e.g., upload or process it)
console.log('Sliced Blob:', slicedBlob);
```

  </div>
  </div>
</details>

---

### How do you create a URL for a Blob?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can create a URL for a Blob using the `URL.createObjectURL()` method of the `URL` interface in JavaScript. It returns a string representing the Blob's URL.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Assuming you have a Blob object named 'blobData'

// Create a URL for the Blob
const blobURL = URL.createObjectURL(blobData);

// Use the blobURL as desired (e.g., set it as the source of an image or a download link)
console.log('Blob URL:', blobURL);
```

  </div>
  </div>
</details>

---

### What's the difference between Blob and ArrayBuffer?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, Blob is used for handling large binary data as immutable objects. ArrayBuffer is a low-level interface used for reading/writing raw binary data, and unlike Blob, its content can be manipulated.
  </div>
  </div>
</details>

---

### Can Blobs be stored in IndexedDB?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> IndexedDB can store Blob objects, which are often used for storing large amounts of binary data, like images or files, directly in the database.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Open a database
var openDB = indexedDB.open('blobDB', 1);

openDB.onupgradeneeded = function() {
  var db = openDB.result;
  var store = db.createObjectStore('blobs', { autoIncrement: true });
};

openDB.onsuccess = function() {
  var db = openDB.result;
  var tx = db.transaction('blobs', 'readwrite');
  var store = tx.objectStore('blobs');
  
  // Create a new blob
  var blob = new Blob(["Hello, world!"], {type: "text/plain"});
  
  // Add the blob to IndexedDB
  store.put(blob, 'hello.txt');
  
  tx.oncomplete = function() {
    db.close();
  };
};
```

In this example, we're storing a simple text Blob in an IndexedDB store. The 'readwrite' parameter in db.transaction is used because we're writing data to the store. The blob is stored with the key 'hello.txt'.

  </div>
  </div>
</details>

---

### What's the maximum size for a Blob?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The maximum size of a Blob object is determined by the available memory of the user's device. There isn't a fixed limit defined in the Blob API specification.
  </div>
  </div>
</details>

---

### What is a Blob URL?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A Blob URL in JavaScript is a URL representing data generated programmatically, often binary large objects (Blobs). It's created using URL.createObjectURL() and can be used to display images or download files.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Create a Blob from a string
var blob = new Blob(["Hello, world!"], {type: "text/plain"});

// Create a Blob URL for the Blob
var blobURL = URL.createObjectURL(blob);

console.log(blobURL);
// This will log a Blob URL like: blob:http://your-site.com/12345678-1234-1234-1234567890ab

// Remember to revoke the Blob URL when you're done with it
URL.revokeObjectURL(blobURL);
```

In this example, `blobURL` will be a Blob URL that you can use as a source in a `<img>`, `<audio>`, `<video>`, `<link>`, or `<script>` tag, or you can open it in a new window or tab. It's important to revoke the Blob URL when you're done with it to free up memory.

  </div>
  </div>
</details>

---

### What happens to Blob URLs when the page unloads?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Blob URLs are not automatically revoked when the page unloads. They persist until the document is fully de-referenced or the URLs are explicitly revoked with URL.revokeObjectURL().
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Create a Blob from a string
var blob = new Blob(["Hello, world!"], {type: "text/plain"});

// Create a Blob URL for the Blob
var blobURL = URL.createObjectURL(blob);

window.addEventListener('unload', function() {
  // Revoke the Blob URL when the page unloads
  URL.revokeObjectURL(blobURL);
});
```

In this example, the Blob URL `blobURL` will be automatically revoked when the page unloads, freeing up memory. Note that Blob URLs should also be revoked as soon as they are no longer needed, even if the page is not unloading.

  </div>
  </div>
</details>

---

### How can you manually release a Blob URL?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can manually release a Blob URL using the `URL.revokeObjectURL()` method in JavaScript, which frees up the memory associated with the Blob.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
URL.revokeObjectURL(blobURL);
```

  </div>
  </div>
</details>

---

### What's the use of the Blob's 'type' property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Blob 'type' property returns the MIME type of the data contained within the Blob. It's useful when we want to specify how the Blob should be interpreted.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Create a Blob from a string with 'text/plain' MIME type
var textBlob = new Blob(["Hello, world!"], {type: "text/plain"});
console.log(textBlob.type); // Outputs: text/plain

// Create a Blob for a .png image with 'image/png' MIME type
var binaryData = []; // Add your binary image data here
var imageBlob = new Blob(binaryData, {type: "image/png"});
console.log(imageBlob.type); // Outputs: image/png
```

In this code, the 'type' property is used to define the content type of the data stored in the Blob object. This can be useful when serving the Blob data, as the receiving end can know how to handle the data based on its MIME type.

  </div>
  </div>
</details>

---

### Is there a way to change data directly in a JavaScript Blob?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, Blobs in JavaScript are immutable. To modify Blob data, you'd have to create a new Blob with the updated data.
    </div><br />
  <div><strong>Technical Response:</strong> No Blob objects are immutable, we cannot change data directly in a Blob, but we can slice parts of a Blob, create new Blob objects from them, mix them into a new Blob, and so on. This behavior is like JavaScript strings: we cannot change a character in a string, but we can make a new corrected string.
    </div><br />
  <div><strong className="codeExample">Syntax:</strong> var newBlob = blob.slice(start, end, contentType);<br /><br />

  <div></div>

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let blob = new Blob(['<html><h2>This is heading</h2></html>'], {
  type: 'text/html',
  endings: 'transparent',
});

let blobSlice = blob.slice(3, 25);

console.log(blobSlice.size); // returns 22
console.log(blob.type); // returns text/html
```

  </div>
  </div>
</details>

---

### Can you name a use case for a JavaScript Blob?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A use case for JavaScript Blob is processing large files, like uploading images or streaming videos to a web server.
    </div><br />
  <div><strong>Technical Response:</strong> To display its contents, a Blob gets used as a URL for &#8249;a&#8250;, &#8249;img&#8250; or other tags. Thanks to type, we can also download/upload Blob objects, and the type naturally becomes Content-Type in network requests.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!-- download attribute forces the browser to download instead of navigating -->
<a download="hello.txt" href="#" id="link">Download</a>

<script>
  let blob = new Blob(['Hello, world!'], { type: 'text/plain' });

  link.href = URL.createObjectURL(blob);
</script>
```

  </div>
  </div>
</details>

---

### What method is used to create an Object URL for a Blob?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The URL.createObjectURL() method is used to create an Object URL for a Blob.
    </div><br />
  <div><strong>Technical Response:</strong> The URL.createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter. The URL lifetime gets tied to the document in the window on which it gets created. The new object URL represents the specified File object or Blob object. Each time you call createObjectURL(), a new object URL gets created, even if you've already created one for the same object. This behavior has the potential of taking up unnecessary resources and should be released.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const objectURL = URL.createObjectURL(object); // Can be file or Blob object
```

  </div>
  </div>
</details>

---

### Is it possible to release an Object URL when it is no longer required?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use URL.revokeObjectURL(URL) to remove the reference from the internal mapping, thus allowing the Blob to be deleted (if there are no other references), and the memory freed.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let link = document.createElement('a');
link.download = 'hello.txt';

let blob = new Blob(['Hello, world!'], { type: 'text/plain' });

link.href = URL.createObjectURL(blob);

link.click();

URL.revokeObjectURL(link.href);
```

  </div>
  </div>
</details>

---

### What is an alternative to URL.createObjectURL for creating an Object URL from a Blob, and what advantages does it offer?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An alternative is to convert the Blob into a base64-encoded string. This can be used in "data-urls", offering versatility, but URL.createObjectURL is usually simpler and faster.
    </div><br />
  <div><strong>Techncial Response:</strong> An alternative to URL.createObjectURL is to convert a Blob into a base64-encoded string. That encoding represents binary data as a string of ultra-safe “readable” characters with ASCII-codes from 0 to 64. And what is more important – we can use this encoding in “data-urls”. A data URL has the form data:[&#8249;mediatype&#8250;][;base64], &#8249;data&#8250;. We can use such URLs everywhere, on par with “regular” URLs. To transform a Blob into base64, we can use the built-in FileReader object. Both ways of making a URL of a Blob are usable. But usually URL.createObjectURL(blob) is simpler and faster.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let link = document.createElement('a');
link.download = 'hello.txt';

let blob = new Blob(['Hello, world!'], { type: 'text/plain' });

let reader = new FileReader();
reader.readAsDataURL(blob); // converts the blob to base64 and calls onload

reader.onload = function () {
  link.href = reader.result; // data url
  link.click();
};
```

  </div>
  </div>
</details>

---

### What is the difference between creating an Object URL vs. converting a Blob into a base64-encoded string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When creating an Object URL, we need to know the memory ramifications. Using URL.createObjectURL requires us use to revoke it when it is no longer needed. However, a Blob conversion does not require revocation of the invoked conversion. If we are concerned about simplicity, speed, and stability, the URL.createObjectURL is recommended.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Create a Blob
var blob = new Blob(["Hello, world!"], {type: "text/plain"});

// Convert Blob to base64
var reader = new FileReader();
reader.onloadend = function() {
  var base64data = reader.result;                
  console.log(base64data); // "data:text/plain;base64,SGVsbG8sIHdvcmxkIQ=="
}
reader.readAsDataURL(blob);

// Create Blob URL
var blobURL = URL.createObjectURL(blob);
console.log(blobURL); // blob:http://your-site.com/12345678-1234-1234-1234567890ab
```

In this code, **FileReader.readAsDataURL()** is used to read the Blob as a base64-encoded string (data URL), while **URL.createObjectURL()** is used to create a Blob URL. These two methods can be used in different scenarios depending on the requirements of your application.

---

:::note
Creating a Blob URL is more memory-efficient and faster for large files. Converting to base64 increases size by about 33% but is necessary when data needs to be embedded or stored as text.
:::

  </div>
  </div>
</details>

---

### Does JavaScript provide a way to create a Blob of an image?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, JavaScript can create a Blob of an image using the fetch API to retrieve the image, then calling response.blob().
    </div><br />
  <div><strong>Technical Response:</strong> Yes, we can create a Blob of an image, an image part, or even make a page screenshot. That is handy to upload it somewhere. We can use the HTML &#8249;canvas&#8250; element to handle image operations like drawing an image using canvas.drawImage.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// take any image
let img = document.querySelector('img');

// make <canvas> of the same size
let canvas = document.createElement('canvas');
canvas.width = img.clientWidth;
canvas.height = img.clientHeight;

let context = canvas.getContext('2d');

// copy image to it (this method allows to cut image)
context.drawImage(img, 0, 0);
// we can context.rotate(), and do many other things on canvas

// toBlob is async opereation, callback is called when done
canvas.toBlob(function (blob) {
  // blob ready, download it
  let link = document.createElement('a');
  link.download = 'example.png';

  link.href = URL.createObjectURL(blob);
  link.click();

  // delete the internal blob reference, to let the browser clear memory from it
  URL.revokeObjectURL(link.href);
}, 'image/png');
```

  </div>
  </div>
</details>

---
