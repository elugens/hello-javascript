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
  <div><strong>Interview Response:</strong> `TextEncoder` is a global JavaScript object that allows you to encode a string of text into bytes using the UTF-8 encoding.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of how you might use `TextEncoder`.

```javascript
// Create a new TextEncoder
const encoder = new TextEncoder();

// The string to encode
const str = 'Hello, World!';

// Encode the string
const encoded = encoder.encode(str);

console.log(encoded);
```

When you run this code, you'll see an output that looks something like this:

```console
Uint8Array(13) [ 72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33 ]
```

This is a Uint8Array containing the UTF-8 encoded bytes of the string 'Hello, World!'. Each number in the array represents the UTF-8 code of the corresponding character in the string.

For example, the first number (72) is the UTF-8 code for 'H', the second number (101) is the code for 'e', and so on.

  </div>
  </div>
</details>

---

### What does TextDecoder do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `TextDecoder` is a global JavaScript object that allows you to decode byte sequences into strings. The most common usage is for decoding UTF-8 encoded text, but it can also handle other text encodings.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of how you might use `TextDecoder` to decode a Uint8Array of UTF-8 encoded bytes back into a string:

```javascript
// Create a new TextDecoder
const decoder = new TextDecoder();

// The encoded bytes
const encoded = new Uint8Array([ 72,101,108,108,111,44,32,74,97,118,97,83,99,114,105,112,116,33 ]);

// Decode the bytes
const str = decoder.decode(encoded);

console.log(str); // Output: "Hello, JavaScript!"
```

When you run this code, you'll see 'Hello, JavaScript!' logged to the console. This is because the `TextDecoder` is decoding the array of bytes back into the original string. Each number in the array corresponds to a Unicode character, and when put together in order, they form the string 'Hello, World!'.

  </div>
  </div>
</details>

---

### How does TextEncoder handle non-UTF-8 characters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `TextEncoder` object in JavaScript only supports UTF-8 encoding. This means that when a string contains a character that isn't valid UTF-8, `TextEncoder` converts that character into a sequence of bytes that represent the Unicode code point of the character in UTF-8.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Example using non-ASCII character<br /><br />

  <div></div>

```javascript
// Create a new TextEncoder
const encoder = new TextEncoder();

// The string to encode (contains the Unicode snowman character)
const str = 'Hello, ☃!';

// Encode the string
const encoded = encoder.encode(str);

console.log(encoded);
```

When you run this code, you'll see an output that looks something like this:

```console
Uint8Array(11) [ 72, 101, 108, 108, 111, 44, 32, 226, 152, 131, 33 ]
```

Here, the three bytes `226, 152, 131` represent the snowman character '☃' in UTF-8.

In short, any character can be encoded into UTF-8 by `TextEncoder`, regardless of whether it is a typical ASCII character or not. This includes characters from non-Latin scripts, emojis, special symbols, etc.

  </div>
  </div>
</details>

---

### In which scenarios would you use a TextEncoder?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> TextEncoder is used when you need to encode a string to bytes, like when you're dealing with binary data or working with APIs that require byte sequences.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example using `TextEncoder` with the Fetch API:

```javascript
// Create a new TextEncoder
const encoder = new TextEncoder();

// The data to send
const data = 'Hello, World!';

// Convert the data to binary
const binaryData = encoder.encode(data);

// Send the binary data using Fetch API
fetch('https://example.com/api', {
  method: 'POST',
  body: binaryData,
  headers: {
    'Content-Type': 'application/octet-stream'
  }
})
.then(response => response.text())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});
```

In this example, we are using `TextEncoder` to convert a string into a binary format before sending it to a server using the Fetch API. The server at '<https://example.com/api>' would then receive this binary data, convert it back into a string, and process it accordingly.

---

:::note
Please note that the server should be set up to expect and correctly handle binary data, and that the `'Content-Type': 'application/octet-stream'` header tells the server that we are sending binary data.
:::

  </div>
  </div>
</details>

---

### What does the TextEncoder 'encode' method do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'encode' method of the TextEncoder object converts a JavaScript string into a Uint8Array containing the text's UTF-8 encoded binary representation, facilitating operations on binary data.
  </div>
  </div>
</details>

---

### Why would you use a TextDecoder?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> TextDecoder is used when you need to convert a stream of binary data or a byte sequence back into a string, often when receiving data from a network.
  </div>
  </div>
</details>

---

### What is the purpose of TextDecoder's 'decode' method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'decode' method of the TextDecoder object in JavaScript converts encoded binary data, typically in a Uint8Array or ArrayBuffer, into a string using the specified text encoding.
  </div>
  </div>
</details>

---

### Can TextEncoder handle Unicode symbols?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, TextEncoder in JavaScript can handle Unicode symbols. It encodes input string into a Uint8Array of UTF-8 encoded bytes, a Unicode-compatible encoding.
  </div>
  </div>
</details>

---

### What happens if TextDecoder encounters an invalid byte sequence?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If TextDecoder encounters an invalid byte sequence, it replaces it with the Unicode replacement character unless the "fatal" option is set to true, which will throw an error.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Create a new TextDecoder
const decoder = new TextDecoder();

// An invalid byte sequence
const invalidBytes = new Uint8Array([0xC3, 0x28]);

// Decode the bytes
const str = decoder.decode(invalidBytes);

console.log(str); // Outputs: �
```

In this example, `[0xC3, 0x28]` is not a valid sequence of bytes for the UTF-8 encoding. When you attempt to decode this sequence, `TextDecoder` inserts the replacement character (�) to indicate that it encountered an invalid sequence.

  </div>
  </div>
</details>

---

### Can you change the encoding scheme of TextEncoder?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, TextEncoder is locked to the UTF-8 encoding scheme and does not allow for changing the encoding scheme.
  </div>
  </div>
</details>

---

### Can TextDecoder handle different text encodings?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the TextDecoder object in JavaScript can handle various text encoding schemes, such as windows-1252, UTF-8, UTF-16, and ISO-8859-2. The desired encoding is specified when creating the TextDecoder instance.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example using the 'windows-1252' encoding:

```javascript
// Create a new TextDecoder for 'windows-1252'
const decoder = new TextDecoder('windows-1252');

// Encoded bytes for the string 'Hello, World!' in 'windows-1252'
const encoded = new Uint8Array([ 72,101,108,108,111,44,32,74,97,118,97,83,99,114,105,112,116,33 ]);

// Decode the bytes
const str = decoder.decode(encoded);

console.log(str); // Outputs: Hello, JavaScript!
```

In this example, we create a new `TextDecoder` for the 'windows-1252' encoding, then use it to decode a Uint8Array of encoded bytes.

---

:::note
Please note that while `TextEncoder` only supports UTF-8 encoding, `TextDecoder` supports several encodings. However, not all text encodings are supported in every environment. Be sure to check the documentation and test your code in your target environments.
:::

Also, it's important to note that the 'windows-1252' encoding is not supported in Internet Explorer. Other text encodings might have similar limitations.

  </div>
  </div>
</details>

---

### What does TextEncoder's 'encodeInto' method do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `**encodeInto**` method of the `TextEncoder` object takes a source string and a destination Uint8Array, and encodes the string into the array. It returns a dictionary indicating the number of units read and the number of units written.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Create a new TextEncoder
const encoder = new TextEncoder();

// The string to encode
const source = 'Hello, JvaaScript!';

// Create a destination Uint8Array
const dest = new Uint8Array(source.length * 2); // allocate more space than needed

// Encode the string into the array
const { read, written } = encoder.encodeInto(source, dest);

console.log(`Read ${read} characters from source string`); // "Read 18 characters from source string"
console.log(`Wrote ${written} bytes to destination array`); // "Wrote 18 bytes to destination array"
console.log(dest);
```

In this example, the `encodeInto` method is used to encode the string 'Hello, World!' into a Uint8Array. The method returns a dictionary with the number of characters read from the source string and the number of bytes written to the destination array.

The `encodeInto` method is more efficient than `encode` if you're encoding multiple strings into the same array, because it doesn't create a new array with each call. However, you need to manage the destination array yourself and ensure that it has enough space for the encoded string.

  </div>
  </div>
</details>

---

### How does TextDecoder handle BOM (Byte Order Mark)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, `TextDecoder` automatically removes the Byte Order Mark (BOM) if it's present at the beginning of the data. It then decodes the rest of the data as per the given encoding.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Create a new TextDecoder
const decoder = new TextDecoder('utf-8');

// The encoded bytes with BOM (0xEF, 0xBB, 0xBF for UTF-8)
const bytesWithBOM = new Uint8Array([0xEF, 0xBB, 0xBF, 72, 101, 108, 108, 111]);

// Decode the bytes
const str = decoder.decode(bytesWithBOM);

console.log(str); // Outputs: Hello
```

In this example, the `Uint8Array` begins with the bytes `0xEF, 0xBB, 0xBF`, which is the UTF-8 BOM. When we use `TextDecoder` to decode these bytes, it automatically recognizes and removes the BOM, and the output string does not contain any extra characters.

This behavior can be overridden by passing the option `{ ignoreBOM: true }` to the `TextDecoder` constructor. In that case, the BOM will not be automatically removed.

```javascript
// Create a new TextDecoder with ignoreBOM option
const decoder = new TextDecoder('utf-8', { ignoreBOM: true });

// The encoded bytes with BOM (0xEF, 0xBB, 0xBF for UTF-8)
const bytesWithBOM = new Uint8Array([0xEF, 0xBB, 0xBF, 72, 101, 108, 108, 111]);

// Decode the bytes
const str = decoder.decode(bytesWithBOM);

console.log(str); // Outputs: ﻿Hello
```

Here, the output string begins with a special invisible character, which represents the BOM.

  </div>
  </div>
</details>

---

### Can TextEncoder handle emoji or other complex Unicode characters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, TextEncoder can handle emojis and complex Unicode characters, as it encodes text into bytes using UTF-8.
  </div>
  </div>
</details>

---

### What is the role of the 'fatal' option in TextDecoder?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'fatal' option in TextDecoder, when set to true, makes the decode operation throw an error if it encounters an invalid byte sequence.
  </div><br />
  <div><strong>Technical Details:</strong> The 'fatal' option of `TextDecoder` determines how the decoder should handle invalid byte sequences. If 'fatal' is set to `true`, the decoder will throw an error when encountering an invalid byte sequence. If 'fatal' is set to `false` or not specified, the decoder will insert the Unicode replacement character (U+FFFD) in place of the invalid sequence.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Create a new TextDecoder with 'fatal' option set to true
const decoder = new TextDecoder('utf-8', { fatal: true });

// An invalid byte sequence
const invalidBytes = new Uint8Array([0xC3, 0x28]);

try {
  // Attempt to decode the bytes
  const str = decoder.decode(invalidBytes);

  console.log(str);
} catch (error) {
  console.error('Error:', error); // Outputs: Error: TypeError: The encoded data was not valid
}
```

In this example, `TextDecoder` is set to throw an error when encountering an invalid byte sequence. The `decode` method tries to decode the `invalidBytes` array, but this array contains an invalid UTF-8 sequence, so `TextDecoder` throws an error, which is caught and logged to the console. If the 'fatal' option had been set to `false` or not specified, `TextDecoder` would have inserted the replacement character (�) and no error would have been thrown.

  </div>
  </div>
</details>

---

### What is the 'stream' option in TextDecoder's decode method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'stream' option, when set to true, retains a portion of the input byte sequence that couldn't form a complete character, for use with next chunks.
  </div><br />
  <div><strong>Technical Response:</strong> The `stream` option in `TextDecoder`'s `decode` method is used when the input is a stream of bytes that could be split across multiple chunks. If `stream` is set to `true`, `decode` does not reset the decoder's internal state after decoding, allowing it to handle input that is split across multiple calls.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Create a new TextDecoder
const decoder = new TextDecoder('utf-8');

// A UTF-8 sequence split into two chunks
const chunk1 = new Uint8Array([0xF0, 0x9F]); // First two bytes of the 4-byte UTF-8 sequence for the 😃 emoji
const chunk2 = new Uint8Array([0x98, 0x83]); // Last two bytes of the 4-byte UTF-8 sequence for the 😃 emoji

// Decode the chunks
const str1 = decoder.decode(chunk1, { stream: true }); // No output, because the sequence is incomplete
const str2 = decoder.decode(chunk2); // Outputs: 😃

console.log(str1 + str2); // Outputs: 😃
```

In this example, the input is a UTF-8 sequence for the 😃 emoji that has been split across two chunks. The first `decode` call decodes the first chunk, but since the sequence is incomplete, it doesn't output anything. However, because the `stream` option is set to `true`, `decode` does not reset the decoder's internal state. When the second `decode` call decodes the second chunk, it completes the sequence and outputs the 😃 emoji. If `stream` had been set to `false` or not specified, the `decode` method would have treated each chunk as a separate sequence and would have failed to correctly decode the emoji.

  </div>
  </div>
</details>

---

### What does the TextEncoder's encoding property return?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The encoding property of the TextEncoder object returns a string that represents the encoding method used by the encoder. Since TextEncoder only supports UTF-8, this property always returns 'utf-8'.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Create a new TextEncoder
const encoder = new TextEncoder();

// Output the encoding used by the encoder
console.log(encoder.encoding); // Outputs: utf-8
```

In this example, we create a new `TextEncoder` and then log the value of its `encoding` property to the console. The output is 'utf-8', which indicates that the encoder uses the UTF-8 encoding method.

  </div>
  </div>
</details>

---

### What is endianness?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Endianness refers to the order of bytes in a binary data representing a larger entity, like an integer. Big-endian stores most significant byte first, while little-endian stores least significant byte first.
  </div>
  </div>
</details>

---

### How does TextDecoder handle endianness for multi-byte encodings?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For encodings like UTF-16, TextDecoder automatically detects the byte order mark to decide the endianness. Without BOM (Byte Order Mark), it defaults to big-endian.
  </div>
  </div>
</details>

---

### What kind of output does TextEncoder produce?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> TextEncoder produces a Uint8Array, a typed array representing the byte sequence for the encoded string.
  </div>
  </div>
</details>

---

### Can TextDecoder handle streaming inputs?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, TextDecoder can handle streaming inputs through multiple calls to decode method with 'stream' option set to true. When this option is set to true, decode does not reset the decoder's internal state after decoding, allowing it to handle input that is split across multiple calls.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Create a new TextDecoder
const decoder = new TextDecoder('utf-8');

// A UTF-8 sequence split into two chunks
const chunk1 = new Uint8Array([0xF0, 0x9F]); // First two bytes of the 4-byte UTF-8 sequence for the 😃 emoji
const chunk2 = new Uint8Array([0x98, 0x83]); // Last two bytes of the 4-byte UTF-8 sequence for the 😃 emoji

// Decode the chunks
const str1 = decoder.decode(chunk1, { stream: true }); // No output, because the sequence is incomplete
const str2 = decoder.decode(chunk2); // Outputs: 😃

console.log(str1 + str2); // Outputs: 😃
```

  </div>
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

console.log(new TextDecoder().decode(uint8Array)); // logs Hello

// We can decode a part of the buffer by creating a subarray view for it:

let uint8Array2 = new Uint8Array([0, 72, 101, 108, 108, 111, 0]);

// the string is in the middle
// create a new view over it, without copying anything
let binaryString = uint8Array2.subarray(1, -1);

console.log(new TextDecoder().decode(binaryString)); // console.logs Hello
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
console.log(uint8Array); // 72,101,108,108,111
```

  </div>
  </div>
</details>

---
