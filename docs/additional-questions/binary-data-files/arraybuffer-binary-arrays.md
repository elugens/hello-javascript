---
title: ArrayBuffer, Binary Arrays
description: ArrayBuffer, Binary Arrays are used to store binary data. They are used in the browser to store images, videos, sounds, etc. They are also used in the browser to store binary data.
sidebar_position: 1
sidebar_label: ArrayBuffer, Binary Arrays
keywords:
  - arraybuffer
  - binary arrays
  - binary data
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
  - arraybuffer
  - binary arrays
  - binary data
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ArrayBufferSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>ArrayBuffer, Binary Arrays | JavaScript Frontend Interview</title>
</head>

**Binary Data / Files: ArrayBuffer, Binary Arrays**

<CloseAllAnswers />

---

### What are some of the situations when we would encounter binary data?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When working with files in web development, we frequently encounter binary data (create, upload, download). Image processing is another everyday use, and all of this is achievable with JavaScript. Binary operations are fast and easy to implement.
    </div>
  </div>
</details>

---

### Can you name a few of the binary classes used in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, several binary classes exist, including ArrayBuffer, Uint8Array, DataView, Blob, and File.
    </div>
  </div>
</details>

---

### What is contiguous memory?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Consecutive blocks of memory allocated to user processes are called contiguous memory. For example, if a user process needs some x bytes of contiguous memory, then all the x bytes reside in one place in the memory that gets defined by a range of memory addresses: 0x0000 to 0x00FF.
    </div>
  </div>
</details>

---

### Can you explain the function of the ArrayBuffer object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The primary binary object is ArrayBuffer, a fixed-length contiguous memory area (blocks of memory). It is an array of bytes, often referred to as a "byte array" in other languages. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object representing the buffer in a specific format and use that to read and write the contents of the buffer. The ArrayBuffer() constructor creates a new ArrayBuffer of the given length in bytes. You can also process array buffer with pre-filled data. ArrayBuffer is the main object, the root of everything.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let buffer = new ArrayBuffer(16); // create a buffer of length 16
console.log(buffer.byteLength); // console.logs 16
```

  </div>
  </div>
</details>

---

### Does ArrayBuffer have anything in common with a regular Array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> ArrayBuffer has nothing in common with a regular JavaScript Array. It has a fixed length; we cannot increase or decrease it. It takes precisely that much space in the memory. Another “view” object is needed, not buffer[index]. ArrayBuffer is a memory area to access individual bytes. What gets stored in it? It has no clue—just a raw sequence of bytes.
    </div>
  </div>
</details>

---

### What steps are necessary to manipulate an ArrayBuffer?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To manipulate an ArrayBuffer, we need to use a view object. A view object does not store anything on its own. The "view object" interprets the bytes stored in the ArrayBuffer. For example. Uint8Array treats each byte in ArrayBuffer as a separate number, with possible values from 0 to 255 (a byte is 8-bit so it can hold only that much). Such value is called an “8-bit unsigned integer”. So, the binary data in an ArrayBuffer of 16 bytes can interpret as 16 “tiny numbers”, or 8 larger (2 bytes each), or 4 even bigger (4 bytes each), or 2 floating-point values with high precision (8 bytes each). ArrayBuffer is the primary object, the root of everything, the raw binary data.
    </div><br />
  <div><strong className="codeExample">Diagram Example:</strong><br /><br />

  <div></div>

<img src="/img/array-buffer.svg" />

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let buffer = new ArrayBuffer(16); // create a buffer of length 16

let view = new Uint32Array(buffer); // treat buffer as a sequence of 32-bit integers

console.log(Uint32Array.BYTES_PER_ELEMENT); // 4 bytes per integer

console.log(view.length); // 4, it stores that many integers
console.log(view.byteLength); // 16, the size in bytes

// let's write a value
view[0] = 123456;

// iterate over values
for (let num of view) {
  console.log(num); // 123456, then 0, 0, 0 (4 values total)
}
```

  </div>
  </div>
</details>

---

### What does Uint stand for in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Uint stands for unsigned integer in JavaScript.
    </div>
  </div>
</details>

---

### What is a common term used for Uint16Array or Int8Array views?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The common term for all these views (Uint8Array, Uint32Array) is TypedArray. They share the same set of methods and properties. We should note that there is no constructor called TypedArray, and it’s just a standard “umbrella” term to represent one of the views over ArrayBuffer: Int8Array, Uint8Array, and others.
    </div>
  </div>
</details>

---

### What is the definition of a TypedArray in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A TypedArray object describes an array-like view of an underlying binary data buffer. There is no global property named TypedArray, nor is there a directly visible TypedArray constructor. Instead, there are several global properties whose values are typed array constructors for specific element types.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// create a TypedArray with a size in bytes
const typedArray1 = new Int8Array(8);
typedArray1[0] = 32;

const typedArray2 = new Int8Array(typedArray1);
typedArray2[1] = 42;

console.log(typedArray1);
// expected output: Int8Array [32, 0, 0, 0, 0, 0, 0, 0]

console.log(typedArray2);
// expected output: Int8Array [32, 42, 0, 0, 0, 0, 0, 0]
```

  </div>
  </div>
</details>

---

### Does a TypedArray have anything in common with a regular Array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, typed arrays behave like regular arrays. They also have indexes that are iterable.
    </div>
  </div>
</details>

---

### How do typed array constructors behave or function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A typed array constructor (be it Int8Array or Float64Array, it does not matter) behaves differently depending on argument types. There are five argument variants that we can use to manipulate typed arrays, and they include a buffer, object, typedArray, length, or an empty argument. If there is no argument, then it creates a zero-length typed array.
    </div>
  </div>
</details>

---

### Can we create a TypedArray directly, without mentioning ArrayBuffer?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can create a TypedArray directly, without mentioning ArrayBuffer. But a view cannot exist without an underlying ArrayBuffer, so JavaScript creates it automatically regardless of the argument type. Properties like buffer and byteLength get used for accessing the ArrayBuffer. The array.buffer property references ArrayBuffer, and the array.length property is the length of the ArrayBuffer. So, we can always move from one view to another.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let arr8 = new Uint8Array([0, 1, 2, 3]);

// another view on the same data
let arr16 = new Uint16Array(arr8.buffer);
```

  </div>
  </div>
</details>

---

### What if we attempt to write an out-of-bounds value into a typed array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we attempt to write an out-of-bounds value into a typed array. The error does not exist. But extra bits are cut-off. For example, if we try to put 256 into Uint8Array. In binary form, 256 is 100000000 (9 bits), but Uint8Array only provides 8 bits per value, which makes the available range from 0 to 255. Only the rightmost (less significant) 8 bits get stored for bigger numbers, and the rest cut off. So, it results in zero. For 257, the binary form is 100000001 (9 bits), and the rightmost 8 get stored so that we get 1 in the array. Uint8ClampedArray is unique in this aspect, and its behavior is different. It saves 255 for any number greater than 255 and 0 for any negative number. That behavior is helpful for image processing.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let uint8array = new Uint8Array(16);

let num = 256;
console.log(num.toString(2)); // 100000000 (binary representation)

uint8array[0] = 256;
uint8array[1] = 257;

console.log(uint8array[0]); // 0
console.log(uint8array[1]); // 1
```

  </div>
  </div>
</details>

---

### Do typed arrays have methods like regular Arrays?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> With a few significant exceptions, TypedArray provides standard Array methods. We can iterate, map, slice, find, and reduce, among other things. There are certain restrictions, such as the lack of splice and concat procedures. We can't "delete" a value and merely assign a zero since typed arrays are views on a buffer that get fixed, contiguous blocks of memory.
    </div>
  </div>
</details>

---

### How does the TypedArray subarray method function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The subarray() method returns a new TypedArray on the same ArrayBuffer store and with the same element types as for this TypedArray object. The “begin offset” is inclusive, and the end offset is exclusive. We may use these methods to duplicate typed arrays, mix them, construct new arrays from existing ones, and execute other actions on them.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

console.log(uint8.subarray(1, 3));
// expected output: Uint8Array [20, 30]

console.log(uint8.subarray(1));
// expected output: Uint8Array [20, 30, 40, 50]
```

  </div>
  </div>
</details>

---

### What is the definition of a DataView?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A DataView is a unique super-flexible “untyped” view over ArrayBuffer. It allows access to the data on any offset in any format.<br /><br />For typed arrays, the constructor dictates what the format is. The whole array is supposed to be uniform. The i-th number is arr[i]. With DataView we access the data with methods like .getUint8(i) or .getUint16(i). We choose the format at method call time instead of the construction time. DataView is great when we store mixed-format data in the same buffer. For example, when we store a sequence of pairs (16-bit integer, 32-bit float), DataView allows us to access them easily.
    </div><br />
  <div><strong className="codeExample">Syntax:</strong> new DataView(buffer, [byteOffset], [byteLength]);<br /><br />

  <ul>
    <li>buffer - the ArrayBuffer underlying. DataView, unlike typed arrays, does not generate a buffer on its own. We must have it ready.</li>
    <li>byteOffset – the view's initial byte location (by default 0).</li>
    <li>byteLength – the view's byte length (by default till the end of buffer).</li>
  </ul>

  <div></div>

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// binary array of 4 bytes, all have the maximal value 255
let buffer = new Uint8Array([255, 255, 255, 255]).buffer;

let dataView = new DataView(buffer);

// get 8-bit number at offset 0
console.log(dataView.getUint8(0)); // 255

// now get 16-bit number at offset 0, it consists of 2 bytes, together interpreted as 65535
console.log(dataView.getUint16(0)); // 65535 (biggest 16-bit unsigned int)

// get 32-bit number at offset 0
console.log(dataView.getUint32(0)); // 4294967295 (biggest 32-bit unsigned int)

dataView.setUint32(0, 0); // set 4-byte number to zero, thus setting all bytes to 0
```

  </div>
  </div>
</details>

---
