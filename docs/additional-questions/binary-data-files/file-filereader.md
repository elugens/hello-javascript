---
title: File / FileReader
description: JavaScript File and FileReader objects are used to read and write files. FileReader objects are used to read the contents of files.
sidebar_position: 4
sidebar_label: File / FileReader
---

**Binary Data / Files: File / FileReader**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the function and syntax of the File Object/Constructor?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A File object inherits from Blob and gets extended with filesystem-related capabilities. A File object is a specific kind of a Blob and can be used in any context that a Blob can. In particular, FileReader, URL.createObjectURL(), createImageBitmap(), and XMLHttpRequest.send() which accepts both Blobs and Files. The File() constructor creates a new File object instance. The File constructor has three arguments: fileParts(bits), filename, and optional parameters. The fileParts can include an Array of ArrayBuffer, ArrayBufferView, Blob, USVString objects, or a mix of any of such objects put inside the File. USVString objects get encoded as UTF-8. The filename is a USVString filename, and the optional options parameter is lastModified, which is the timestamp of the last modification.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> new File(fileParts, fileName, [options]);<br /><br />

  <div></div>

```js
var file = new File(['foo'], 'foo.txt', {
  type: 'text/plain',
});
```

  </div>
  </div>
</details>

---

### Can you explain how the FileReader Object functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The FileReader object allows web applications to asynchronously read the contents of files (or raw data buffers) saved on the user's machine by specifying the file or data to read with File or Blob objects. We can retrieve File objects via a FileList object returned by a user choosing files using the &#8249;input&#8250; element, from the DataTransfer object of a drag and drop operations, or through the mozGetAsFile() API on an HTMLCanvasElement. FileReader can only read the contents of files that the user has expressly selected, either through an HTML &#8249;input type="file"&#8250; element or by drag and drop. However, We cannot use it to read a file by pathname from the user's file system. We should note that OS level access is restricted in JavaScript.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> let reader = new FileReader(); // no arguments<br /><br />

  <div></div>

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

  </div>
  </div>
</details>

---
