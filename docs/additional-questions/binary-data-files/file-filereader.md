---
title: File / FileReader
sidebar_position: 4
---

# File / FileReader

**Binary Data / Files: File / FileReader**

<head>
  <title>File / FileReader - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Explain the function and syntax of the File Object/Constructor.

**Interview Answer:** A File object inherits from Blob and is extended with filesystem-related capabilities. A File object is a specific kind of a Blob and can be used in any context that a Blob can. In particular, FileReader, URL.createObjectURL(), createImageBitmap(), and XMLHttpRequest.send() which accepts both Blobs and Files. The File() constructor creates a new File object instance. The File constructor has three arguments including the fileParts (bits), filename, and options optional parameters. The fileParts can include an Array of ArrayBuffer, ArrayBufferView, Blob, USVString objects, or a mix of any of such objects, that will be put inside the File. USVString objects are encoded as UTF-8. The filename is a USVString filename, and the options optional parameter is lastModified which is the timestamp of the last modification.

**Syntax:** new File(fileParts, fileName, [options])

Code Example:

```js
var file = new File(['foo'], 'foo.txt', {
  type: 'text/plain',
});
```

Source: <https://javascript.info/file>

### Can you explain how the FileReader Object functions?

**Answer:** The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read. File objects may be obtained from a FileList object returned as a result of a user selecting files using the `<input>` element, from a drag and drop operation's DataTransfer object, or from the mozGetAsFile() API on an HTMLCanvasElement. FileReader can only access the contents of files that the user has explicitly selected, either using an HTML `<input type="file">` element or by drag and drop. It cannot be used to read a file by pathname from the user's file system.

**Syntax:** let reader = new FileReader(); // no arguments

Code Example:

```html
<input type="file" onchange="readFile(this)" />

<script>
  function readFile(input) {
    let file = input.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
      console.log(reader.result);
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  }
</script>
```

Source: <https://javascript.info/file#filereader>
