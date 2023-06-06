---
title: TextDecoder / TextEncoder
description: TextDecoder / TextEncoder is a built-in object that allows you to convert between UTF-8 and UTF-16. It is used in the browser to convert the text.
sidebar_position: 2
sidebar_label: TextDecoder / TextEncoder
keywords:
  - textdecoder
  - textencoder
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
  - textdecoder
  - textencoder
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/TextDecoderSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>TextDecoder / TextEncoder | HelloJavaScript.info</title>
</head>

**Binary Data / Files: TextDecoder / TextEncoder**

<CloseAllAnswers />

---

### What is TextEncoder in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> TextEncoder is a web API used to convert a JavaScript string into bytes using the UTF-8 encoding.
  </div><br />
  </div>
</details>

---

### What does TextDecoder do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> TextDecoder is a web API that decodes byte sequences into strings using a specific encoding scheme, commonly UTF-8.
  </div><br />
  </div>
</details>

---

### How does TextEncoder handle non-UTF-8 characters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> TextEncoder only supports UTF-8 encoding, so it replaces any non-UTF-8 characters with the UTF-8 "replacement character."
  </div><br />
  </div>
</details>

---

### In which scenarios would you use a TextEncoder?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> TextEncoder is used when you need to encode a string to bytes, like when you're dealing with binary data or working with APIs that require byte sequences.
  </div><br />
  </div>
</details>

---

### What does the TextEncoder 'encode' method do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'encode' method converts a JavaScript string into a Uint8Array of UTF-8 bytes.
  </div><br />
  </div>
</details>

---

### Why would you use a TextDecoder?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> TextDecoder is used when you need to convert a stream of binary data or a byte sequence back into a string, often when receiving data from a network.
  </div><br />
  </div>
</details>

---

### What is the purpose of TextDecoder's 'decode' method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'decode' method of TextDecoder converts a sequence of bytes into a string using a specified encoding scheme.
  </div><br />
  </div>
</details>

---

### Can TextEncoder handle Unicode symbols?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, TextEncoder can handle Unicode symbols because it uses UTF-8 encoding, which supports all Unicode characters.
  </div><br />
  </div>
</details>

---

### What happens if TextDecoder encounters an invalid byte sequence?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If TextDecoder encounters an invalid byte sequence, it replaces it with the Unicode replacement character unless the "fatal" option is set.
  </div><br />
  </div>
</details>

---

### Can you change the encoding scheme of TextEncoder?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, TextEncoder is locked to the UTF-8 encoding scheme and doesn't support other encodings.
  </div><br />
  </div>
</details>

---

### Can TextDecoder handle different text encodings?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, TextDecoder can handle different text encodings like UTF-16 and ISO-8859-2, but UTF-8 is the most commonly used.
  </div><br />
  </div>
</details>

---

### What does TextEncoder's 'encodeInto' method do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The encodeInto method of TextEncoder encodes a string into the provided destination buffer, returning the count of encoded and read code points.
  </div><br />
  </div>
</details>

---

### How does TextDecoder handle BOM (Byte Order Mark)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> TextDecoder automatically ignores the BOM (Byte Order Mark) if present, treating all subsequent bytes according to the encoding specified.
  </div><br />
  </div>
</details>

---

### What is the role of the 'fatal' option in TextDecoder?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'fatal' option in TextDecoder, when set to true, makes the decode operation throw an error if it encounters an invalid byte sequence.
  </div><br />
  </div>
</details>

---

### What is the 'stream' option in TextDecoder's decode method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'stream' option, when set to true, retains a portion of the input byte sequence that couldn't form a complete character, for use with next chunks.
  </div><br />
  </div>
</details>

---

### Can TextEncoder handle emoji or other complex Unicode characters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, TextEncoder can handle emojis and complex Unicode characters, as it encodes text into bytes using UTF-8.
  </div><br />
  </div>
</details>

---

### What does the TextEncoder's encoding property return?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The encoding property of a TextEncoder object returns the string "utf-8", signifying the encoding it uses.
  </div><br />
  </div>
</details>

---

### What is endianness?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Endianness refers to the order of bytes in a binary data representing a larger entity, like an integer. Big-endian stores most significant byte first, while little-endian stores least significant byte first.
  </div><br />
  </div>
</details>

---

### How does TextDecoder handle endianness for multi-byte encodings?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For encodings like UTF-16, TextDecoder automatically detects the byte order mark to decide the endianness. Without BOM (Byte Order Mark), it defaults to big-endian.
  </div><br />
  </div>
</details>

---

### What kind of output does TextEncoder produce?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> TextEncoder produces a Uint8Array, a typed array representing the byte sequence for the encoded string.
  </div><br />
  </div>
</details>

---

### Can TextDecoder handle streaming inputs?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, TextDecoder can handle streaming inputs through multiple calls to decode method with 'stream' option set to true.
  </div><br />
  </div>
</details>

---

### How would you convert binary string data into a JavaScript string, and what needs to be done prior to the conversion process?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the binary data is a string, the built-in TextDecoder object allows reading the value into an actual JavaScript string, given the buffer and the encoding. We first need to create it by calling new TextDecoder([label], [options]).
    </div><br />
    <strong>Creation Syntax: </strong> let decoder = new TextDecoder([label], [options])<br /><br />
  </div>
</details>

---

### Can you explain the function of the TextDecoder object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The TextDecoder object in JavaScript decodes byte sequences into strings using a specific encoding scheme, typically UTF-8, aiding in handling binary data.
</div><br />
  <div><strong>Technical Response:</strong> The built-in TextDecoder object allows to read the value into an actual JavaScript string, given the buffer and the encoding. It has two arguments, including the label and the optional options.<br /><br />The label is the encoding, utf-8 by default, but big5, windows-1251, and many others are also supported.<br /><br />The options object includes two options fatal and ignoreBom. Fatal is a Boolean object. If true, throw an exception for invalid (non-decodable) characters; otherwise (default), replace them with character \uFFFD. If true, the ignoreBOM Boolean gets set; if true, ignore BOM (an optional byte-order Unicode mark), which is rarely required.
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

### Can you explain the function of the TextDecoder decode method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The decode method of TextDecoder converts a sequence of bytes into a string using the specified text encoding, such as UTF-8.
    </div><br />
  <div><strong>Technical Response:</strong> The `TextDecoder.prototype.decode()` method returns a DOMString containing the text, given in parameters, decoded with the specific method for that TextDecoder object. The decode method has two arguments, including the input and options. The input is the buffer or bufferSource to decode. The options or optional object holds a stream that is valid for decoding streams when the decoder is called repeatedly with incoming chunks of data. In that case, a multi-byte character may occasionally split between chunks. This option tells TextDecoder to memorize “unfinished” characters and decode them when the next chunk comes.
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

### Can you explain the function of the TextEncoder object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The TextEncoder object in JavaScript converts a JavaScript string into a sequence of bytes using the UTF-8 encoding, aiding in handling binary data.
    </div><br />
  <div><strong>Technical Response:</strong> TextEncoder takes a stream of code points (a string) as input and emits a stream of UTF-8 bytes. It does the reverse of the TextDecoder and converts a string into bytes. The only encoding it supports is “utf-8”. The TextEncoder has two methods including encode(str) and encodeInto(str, destination) methods. The encode(str) method returns a Uint8Array from a string. The encodeInto(str, destination) encodes a string into a destination that must be Uint8Array.
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
