---
title: Blob Data
sidebar_position: 3
---

# Blob Data

**Binary Data / Files: Blob Data**

<head>
  <title>Blob Data - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Can you explain what a Blob constructor is in JavaScript?

**Interview Answer:** The Blob() constructor returns a new Blob object. The content of the blob consists of an optional string type (a MIME-type usually), plus blobParts - a sequence of other Blob objects, strings and BufferSource. The blobParts is an array of Blob/BufferSource/String values. The options argument has two optional object parameters including the type and endings. The Blob type, usually a MIME-type, e.g., text/html. The endings parameter is specific to how to interpret newline characters (\n) within the contents if the data is text. The default value, transparent, copies newline characters into the blob without changing them. To convert newlines to the host system's native convention, specify the value native. The arguments are similar to array.slice, negative numbers are allowed too.

**Syntax:** new Blob(blobParts, options)

Code Example:

```js
var myBlobParts = ['<html><h2>This is heading</h2></html>'];
// an array consisting of a single DOMString

var myBlob = new Blob(myBlobParts, {
  type: 'text/html',
  endings: 'transparent',
}); // the blob
console.log(myBlob.size + ' bytes size');

// Output: 37 bytes size

console.log(myBlob.type + ' is the type');

// Output: text/html is the type
```

Source: <https://javascript.info/blob>

### Is there a way to change data directly in a JavaScript Blob?

**Interview Answer:** No Blob objects are immutable, we cannot change data directly in a Blob, but we can slice parts of a Blob, create new Blob objects from them, mix them into a new Blob and so on. This behavior is like JavaScript strings: we cannot change a character in a string, but we can make a new corrected string.

**Syntax:** var newBlob = blob.slice(start, end, contentType)

Code Example:

```js
let blob = new Blob(
  ['<html><h2>This is heading</h2></html>'],

  { type: 'text/html', endings: 'transparent' }
);

let blobSlice = blob.slice(3, 25);

console.log(blobSlice.size); // returns 22
console.log(blob.type); // returns text/html
```

Source: <https://javascript.info/blob>

### Can you name a use case for a JavaScript Blob?

**Interview Answer:** A Blob can be easily used as a URL for `<a>`, `<img>` or other tags, to show its contents. Thanks to type, we can also download/upload Blob objects, and the type naturally becomes Content-Type in network requests.

Code Example:

```html
<!-- download attribute forces the browser to download instead of navigating -->

<a download="hello.txt" href="#" id="link">Download</a>

<script>
  let blob = new Blob(['Hello, world!'], { type: 'text/plain' });

  link.href = URL.createObjectURL(blob);
</script>
```

Source: <https://javascript.info/blob>

### What method is used to create an Object URL for a Blob?

**Interview Answer:** The URL.createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter. The URL lifetime is tied to the document in the window on which it was created. The new object URL represents the specified File object or Blob object. Each time you call createObjectURL(), a new object URL is created, even if you've already created one for the same object. This has the potential of taking up unnecessary resources and should be released.

Code Example:

```js
const objectURL = URL.createObjectURL(object); // Can be file or Blob object
```

Source: <https://javascript.info/blob#blob-as-url>

### Is there a way to release an Object URL when it’s no longer needed?

**Interview Answer:** Yes, we can use URL.revokeObjectURL(url) to remove the reference from the internal mapping, thus allowing the Blob to be deleted (if there are no other references), and the memory to be freed.

Code Example:

```js
let link = document.createElement('a');

link.download = 'hello.txt';

let blob = new Blob(['Hello, world!'], { type: 'text/plain' });

link.href = URL.createObjectURL(blob);

link.click();

URL.revokeObjectURL(link.href);
```

Source: <https://javascript.info/blob#blob-as-url>

### Is there an alternative approach to creating an Object URL, other than using URL.createObjectURL?

**Interview Answer:** An alternative to URL.createObjectURL is to convert a Blob into a base64-encoded string. That encoding represents binary data as a string of ultra-safe “readable” characters with ASCII-codes from 0 to 64. And what is more important – we can use this encoding in “data-urls”. A data url has the form `data:[<mediatype>][;base64]`,`<data>`. We can use such urls everywhere, on par with “regular” urls. To transform a Blob into base64, we can use the built-in FileReader object. Both ways of making a URL of a Blob are usable. But usually URL.createObjectURL(blob) is simpler and faster.

Code Example:

```js
let link = document.createElement('a');

link.download = 'hello.txt';

let blob = new Blob(['Hello, world!'], { type: 'text/plain' });

let reader = new FileReader();

reader.readAsDataURL(blob); // converts the blob to base64 and calls onload
reader.onload = function () {
  link.href = reader.result; // data url
  link.click();
};
```

Source: <https://javascript.info/blob#blob-as-url>

### What is the difference between creating an Object URL vs converting a Blob into a base64-encoded string?

**Interview Answer:** When we are creating an Object URL, we need to be aware of the memory ramifications. Using URL.createObjectURL requires use to revoke it when it is no longer needed. However, a Blob conversion does not require revocation of the invoked conversion. If we are concerned about simplicity, speed, and stability the URL.createObjectURL is recommended.

Source: <https://javascript.info/blob#blob-as-url>

### Does JavaScript provide a way to create a Blob of an image?

**Interview Answer:** Yes, we can create a Blob of an image, an image part, or even make a page screenshot. That is handy to upload it somewhere. We can use the HTML `<canvas>` element to handle image operations like drawing an image using canvas.drawImage.

Code Example:

```js
// take any image

let img = document.querySelector('img');

// make <canvas> of the same size

let canvas = document.createElement('canvas');

canvas.width = img.clientWidth;

canvas.height = img.clientHeight;

let context = canvas.getContext('2d');

// copy image to it (this method allows to cut image)

context.drawImage(img, 0, 0);

// we can context.rotate(), and do many other things on canvas

// toBlob is async opereation, callback is called when done

canvas.toBlob(function (blob) {
  // blob ready, download it

  let link = document.createElement('a');

  link.download = 'example.png';

  link.href = URL.createObjectURL(blob);

  link.click();

  // delete the internal blob reference, to let the browser clear memory from it

  URL.revokeObjectURL(link.href);
}, 'image/png');
```

Source: <https://javascript.info/blob#image-to-blob>
