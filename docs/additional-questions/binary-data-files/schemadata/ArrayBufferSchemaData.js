const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are some of the situations when we would encounter binary data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When working with files in web development, we frequently encounter binary data (create, upload, download). Image processing is another everyday use, and all of this is achievable with JavaScript. Binary operations are fast and easy to implement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you name a few of the binary classes used in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, several binary classes exist, including ArrayBuffer, Uint8Array, DataView, Blob, and File.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is contiguous memory?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Consecutive blocks of memory allocated to user processes are called contiguous memory. For example, if a user process needs some x bytes of contiguous memory, then all the x bytes reside in one place in the memory that gets defined by a range of memory addresses: 0x0000 to 0x00FF.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function of the ArrayBuffer object in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The primary binary object is ArrayBuffer, a fixed-length contiguous memory area (blocks of memory). It is an array of bytes, often referred to as a "byte array" in other languages. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object representing the buffer in a specific format and use that to read and write the contents of the buffer. The ArrayBuffer() constructor creates a new ArrayBuffer of the given length in bytes. You can also process array buffer with pre-filled data. ArrayBuffer is the main object, the root of everything.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does ArrayBuffer have anything in common with a regular Array?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "ArrayBuffer has nothing in common with a regular JavaScript Array. It has a fixed length; we cannot increase or decrease it. It takes precisely that much space in the memory. Another \u201Cview\u201D object is needed, not buffer[index]. ArrayBuffer is a memory area to access individual bytes. What gets stored in it? It has no clue\u2014it's just a raw sequence of bytes.",
      },
    },
    {
      '@type': 'Question',
      name: 'What steps are necessary to manipulate an ArrayBuffer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To manipulate an ArrayBuffer, we need to use a view object. A view object does not store anything on its own. The "view object" interprets the bytes stored in the ArrayBuffer. For example. Uint8Array treats each byte in ArrayBuffer as a separate number, with possible values from 0 to 255 (a byte is 8-bit so it can hold only that much). Such value is called an “8-bit unsigned integer”. So, the binary data in an ArrayBuffer of 16 bytes can interpret as 16 “tiny numbers”, or 8 larger (2 bytes each), or 4 even bigger (4 bytes each), or 2 floating-point values with high precision (8 bytes each). ArrayBuffer is the primary object, the root of everything, the raw binary data.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Uint stand for in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uint stands for unsigned integer in JavaScript.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a common term used for Uint16Array or Int8Array views?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The common term for all these views (Uint8Array, Uint32Array) is TypedArray. They share the same set of methods and properties. We should note that there is no constructor called TypedArray, and it’s just a standard “umbrella” term to represent one of the views over ArrayBuffer: Int8Array, Uint8Array, and others.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a TypedArray have anything in common with a regular Array?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, typed arrays behave like regular arrays. They also have indexes that are iterable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do typed array constructors behave or function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typed array constructor (be it Int8Array or Float64Array, it does not matter) behaves differently depending on argument types. There are five argument variants that we can use to manipulate typed arrays, and they include a buffer, object, typedArray, length, or an empty argument. If there is no argument, then it creates a zero-length typed array.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can we create a TypedArray directly, without mentioning ArrayBuffer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can create a TypedArray directly, without mentioning ArrayBuffer. But a view cannot exist without an underlying ArrayBuffer, so JavaScript creates it automatically regardless of the argument type. Properties like buffer and byteLength get used for accessing the ArrayBuffer. The array.buffer property references ArrayBuffer, and the array.length property is the length of the ArrayBuffer. So, we can always move from one view to another.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if we attempt to write an out-of-bounds value into a typed array?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If we attempt to write an out-of-bounds value into a typed array. The error does not exist. But extra bits are cut-off. For example, if we try to put 256 into Uint8Array. In binary form, 256 is 100000000 (9 bits), but Uint8Array only provides 8 bits per value, which makes the available range from 0 to 255. Only the rightmost (less significant) 8 bits get stored for bigger numbers, and the rest cut off. So, it results in zero. For 257, the binary form is 100000001 (9 bits), and the rightmost 8 get stored so that we get 1 in the array. Uint8ClampedArray is unique in this aspect, and its behavior is different. It saves 255 for any number greater than 255 and 0 for any negative number. That behavior is helpful for image processing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do typed arrays have methods like regular Arrays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With a few significant exceptions, TypedArray provides standard Array methods. We can iterate, map, slice, find, and reduce, among other things. There are certain restrictions, such as the lack of splice and concat procedures. We can\'t "delete" a value and merely assign a zero since typed arrays are views on a buffer that get fixed, contiguous blocks of memory.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the TypedArray subarray method function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The subarray() method returns a new TypedArray on the same ArrayBuffer store and with the same element types as for this TypedArray object. The “begin offset” is inclusive, and the end offset is exclusive. We may use these methods to duplicate typed arrays, mix them, construct new arrays from existing ones, and execute other actions on them.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the definition of a DataView?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A DataView is a unique super-flexible \u201Cuntyped\u201D view over ArrayBuffer. It allows access to the data on any offset in any format.<br /><br />For typed arrays, the constructor dictates what the format is. The whole array is supposed to be uniform. The i-th number is arr[i]. With DataView we access the data with methods like .getUint8(i) or .getUint16(i). We choose the format at method call time instead of the construction time. DataView is great when we store mixed-format data in the same buffer. For example, when we store a sequence of pairs (16-bit integer, 32-bit float), DataView allows us to access them easily.',
      },
    },
  ],
};

export default StructuredData;
