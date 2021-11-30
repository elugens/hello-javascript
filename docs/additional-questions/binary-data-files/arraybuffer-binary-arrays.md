---
title: ArrayBuffer, Binary Arrays
sidebar_position: 1
---

# ArrayBuffer, Binary Arrays

**Binary Data / Files: ArrayBuffer, Binary Arrays**

<head>
  <title>ArrayBuffer, Binary Arrays - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What are some of the situations when we would encounter binary data?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In web-development we meet binary data mostly while dealing with files (create, upload, download). Another typical use case is image processing. That’s all possible in JavaScript, and binary operations are high-performant.
    </div>
  </div>
</details>

---

### Can you name a few of the binary classes used in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there are several binary classes including ArrayBuffer, Uint8Array, DataView, Blob, and File.
    </div>
  </div>
</details>

---

### What is contiguous memory?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Consecutive blocks of memory allocated to user processes are called contiguous memory. For example, if a user process needs some x bytes of contiguous memory, then all the x bytes will reside in one place in the memory that is defined by a range of memory addresses: 0x0000 to 0x00FF.
    </div>
  </div>
</details>

---

### Explain the function of the ArrayBuffer object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The basic binary object is ArrayBuffer which is a reference to a fixed-length contiguous memory area (blocks of memory). It is an array of bytes, often referred to in other languages as a "byte array". You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer. The ArrayBuffer() constructor creates a new ArrayBuffer of the given length in bytes. You can also get an array buffer from existing data.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let buffer = new ArrayBuffer(16); // create a buffer of length 16
alert(buffer.byteLength); // alerts 16
```

  </div>
  </div>
</details>

---

### Does ArrayBuffer have anything in common with a regular Array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> ArrayBuffer has nothing in common with a regular JavaScript Array. It has a fixed length; we cannot increase or decrease it. It takes exactly that much space in the memory. To access individual bytes, another “view” object is needed, not buffer[index]. ArrayBuffer is a memory area. What is stored in it? It has no clue. Just a raw sequence of bytes.
    </div>
  </div>
</details>

---

### What steps are necessary to manipulate an ArrayBuffer?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To manipulate an ArrayBuffer, we need to use a view object. A view object does not store anything on its own. It is the “eyeglasses” that give an interpretation of the bytes stored in the ArrayBuffer. For example. Uint8Array treats each byte in ArrayBuffer as a separate number, with possible values from 0 to 255 (a byte is 8-bit, so it can hold only that much). Such value is called a “8-bit unsigned integer”. So, the binary data in an ArrayBuffer of 16 bytes can be interpreted as 16 “tiny numbers”, or 8 bigger numbers (2 bytes each), or 4 even bigger (4 bytes each), or 2 floating-point values with high precision (8 bytes each). ArrayBuffer is the core object, the root of everything, the raw binary data.
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

alert(Uint32Array.BYTES_PER_ELEMENT); // 4 bytes per integer

alert(view.length); // 4, it stores that many integers
alert(view.byteLength); // 16, the size in bytes

// let's write a value
view[0] = 123456;

// iterate over values
for (let num of view) {
  alert(num); // 123456, then 0, 0, 0 (4 values total)
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
  <div><strong>Interview Response:</strong> The common term for all these views (Uint8Array, Uint32Array, etc) is TypedArray. They share the same set of methods and properities. It should be noted, there is no constructor called TypedArray, it’s just a common “umbrella” term to represent one of views over ArrayBuffer: Int8Array, Uint8Array and so on.
    </div>
  </div>
</details>

---

### What is the definition of a TypedArray in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A TypedArray object describes an array-like view of an underlying binary data buffer. There is no global property named TypedArray, nor is there a directly visible TypedArray constructor. Instead, there are several different global properties, whose values are typed array constructors for specific element types.
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
  <div><strong>Interview Response:</strong> Yes, typed arrays behave like regular arrays. They also have indexes and are iterable.
    </div>
  </div>
</details>

---

### How do typed array constructors behave or function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A typed array constructor (be it Int8Array or Float64Array, does not matter) behaves differently depending on argument types. There are five argument variants that we can use to manipulate typed arrays. They include a buffer, object, typedArray, length or an empty argument. If there is no argument, then it creates a zero length typed array.
    </div>
  </div>
</details>

---

### Can we create a TypedArray directly, without mentioning ArrayBuffer?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can create a TypedArray directly, without mentioning ArrayBuffer. But a view cannot exist without an underlying ArrayBuffer, so it gets created automatically regardless of the argument type. To access the ArrayBuffer, there are properties like buffer and byteLength. The array.buffer property references ArrayBuffer, and the array.length property is the length of the ArrayBuffer. So, we can always move from one view to another.
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
  <div><strong>Interview Response:</strong> If we attempt to write an out-of-bounds value into a typed array. There will be no error. But extra bits are cut-off. For example, if we try to put 256 into Uint8Array. In binary form, 256 is 100000000 (9 bits), but Uint8Array only provides 8 bits per value, that makes the available range from 0 to 255. For bigger numbers, only the rightmost (less significant) 8 bits are stored, and the rest is cut off. So, the result will be zero. For 257, the binary form is 100000001 (9 bits), the rightmost 8 get stored, so we will have 1 in the array. Uint8ClampedArray is special in this aspect, its behavior is different. It saves 255 for any number that is greater than 255, and 0 for any negative number. That behavior is useful for image processing.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let uint8array = new Uint8Array(16);

let num = 256;
alert(num.toString(2)); // 100000000 (binary representation)

uint8array[0] = 256;
uint8array[1] = 257;

alert(uint8array[0]); // 0
alert(uint8array[1]); // 1
```

  </div>
  </div>
</details>

---

### Do typed arrays have methods like regular Arrays?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> TypedArray has regular Array methods, with notable exceptions. We can iterate, map, slice, find, reduce etc. There are few things we cannot do though like there is no splice and concat methods. We cannot “delete” a value because typed arrays are views on a buffer, and these are fixed, contiguous areas of memory. All we can do is to assign a zero.
    </div>
  </div>
</details>

---

### How does the TypedArray subarray method function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The subarray() method returns a new TypedArray on the same ArrayBuffer store and with the same element types as for this TypedArray object. The begin offset is inclusive and the end offset is exclusive. This methods allow us to copy typed arrays, mix them, create new arrays from existing ones, and so on.
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
  <div><strong>Interview Response:</strong> A DataView is a special super-flexible “untyped” view over ArrayBuffer. It allows to access the data on any offset in any format.<br /><br />For typed arrays, the constructor dictates what the format is. The whole array is supposed to be uniform. The i-th number is arr[i]. With DataView we access the data with methods like .getUint8(i) or .getUint16(i). We choose the format at method call time instead of the construction time. DataView is great when we store mixed-format data in the same buffer. For example, when we store a sequence of pairs (16-bit integer, 32-bit float), DataView allows to access them easily.
    </div><br />
  <div><strong className="codeExample">Syntax:</strong> new DataView(buffer, [byteOffset], [byteLength]);<br /><br />

  <ul>
    <li>buffer – the underlying ArrayBuffer. Unlike typed arrays, DataView doesn’t create a buffer on its own. We need to have it ready.</li>
    <li>byteOffset – the starting byte position of the view (by default 0).</li>
    <li>byteLength – the byte length of the view (by default till the end of buffer).</li>
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
alert(dataView.getUint8(0)); // 255

// now get 16-bit number at offset 0, it consists of 2 bytes, together interpreted as 65535
alert(dataView.getUint16(0)); // 65535 (biggest 16-bit unsigned int)

// get 32-bit number at offset 0
alert(dataView.getUint32(0)); // 4294967295 (biggest 32-bit unsigned int)

dataView.setUint32(0, 0); // set 4-byte number to zero, thus setting all bytes to 0
```

  </div>
  </div>
</details>

---
