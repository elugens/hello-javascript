---
title: TextDecoder / TextEncoder
sidebar_position: 2
---

# TextDecoder / TextEncoder

**Binary Data / Files: TextDecoder / TextEncoder**

<head>
  <title>TextDecoder / TextEncoder - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What if the binary data is a string? For instance, we received a file with textual data. How would we handle this using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the binary data is a string, the built-in TextDecoder object allows to read the value into an actual JavaScript string, given the buffer and the encoding. We first need to create it by calling new TextDecoder([label], [options]).
    </div><br />
    <strong>Creation Syntax: </strong> let decoder = new TextDecoder([label], [options])<br /><br />
  </div>
</details>

---

### Explain the function and syntax of the TextDecoder object.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The built-in TextDecoder object allows to read the value into an actual JavaScript string, given the buffer and the encoding. It has two arguments including the label and the optional options.<br /><br />The label is the encoding, utf-8 by default, but big5, windows-1251 and many other are also supported.<br /><br />The options object, includes two options including fatal and ignoreBom. Fatal is a Boolean object, if true then throw an exception for invalid (non-decodable) characters, otherwise (default) replace them with character \uFFFD. The ignoreBOM Boolean is set as, if true then ignore BOM (an optional byte-order Unicode mark), rarely needed.
</div><br />
  <div><strong className="codeExample">Creation Syntax:</strong> let decoder = new TextDecoder([label], [options])<br />

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let utf8decoder = new TextDecoder(); // default 'utf-8' or 'utf8'

// Creating our views to be decoded
let u8arr = new Uint8Array([240, 160, 174, 183]);
let i8arr = new Int8Array([-16, -96, -82, -73]);
let u16arr = new Uint16Array([41200, 47022]);
let i16arr = new Int16Array([-24336, -18514]);
let i32arr = new Int32Array([-1213292304]);
```

  </div>
  </div>
</details>

---

### Explain the function and syntax of the TextDecoder decode method.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The TextDecoder.prototype.decode() method returns a DOMString containing the text, given in parameters, decoded with the specific method for that TextDecoder object. The decode method has two arguments including the input and options. The input is the buffer or bufferSource to decode. The options or optional object holds a stream which is true for decoding streams when decoder is called repeatedly with incoming chunks of data. In that case a multi-byte character may occasionally split between chunks. This option tells TextDecoder to memorize “unfinished” characters and decode them when the next chunk comes.
    </div><br />
  <div><strong className="codeExample">Creation Syntax:</strong> let str = decoder.decode([input], [options]);<br />

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let uint8Array = new Uint8Array([72, 101, 108, 108, 111]);

alert(new TextDecoder().decode(uint8Array)); // alerts Hello

// We can decode a part of the buffer by creating a subarray view for it:

let uint8Array2 = new Uint8Array([0, 72, 101, 108, 108, 111, 0]);

// the string is in the middle
// create a new view over it, without copying anything
let binaryString = uint8Array2.subarray(1, -1);

alert(new TextDecoder().decode(binaryString)); // alerts Hello
```

  </div>
  </div>
</details>

---

### Explain the function and syntax of the TextEncoder object.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> TextEncoder takes a stream of code points (a string) as input and emits a stream of UTF-8 bytes. Basically, it does the reverse of the TextDecoder and converts a string into bytes. The only encoding it supports is “utf-8”. The TextEncoder has two methods including encode(str) and encodeInto(str, destination) methods. The encode(str) method returns a Uint8Array from a string. The encodeInto(str, destination) encodes a str into a destination that must be Uint8Array.
    </div><br />
  <div><strong className="codeExample">Creation Syntax:</strong> let encoder = new TextEncoder();<br />

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let encoder = new TextEncoder();

let uint8Array = encoder.encode('Hello');
alert(uint8Array); // 72,101,108,108,111
```

  </div>
  </div>
</details>

---
