const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What if the binary data is a string? For instance, we received a file with textual data',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If the binary data is a string, the built-in TextDecoder object allows to read the value into an actual JavaScript string, given the buffer and the encoding. We first need to create it by calling new TextDecoder([label], [options]).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the TextDecoder object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The built-in TextDecoder object allows us to read the value into an actual JavaScript string, given the buffer and the encoding. It has two arguments, including the label and the optional options.<br /><br />The label is the encoding, utf-8 by default, but big5, windows-1251, and many others are also supported.<br /><br />The options object includes two options fatal and ignoreBom. Fatal is a Boolean object. If true, throw an exception for invalid (non-decodable) characters; otherwise (default), replace them with character \uFFFD. If true, the ignoreBOM Boolean gets set; if true, ignore BOM (an optional byte-order Unicode mark), which is rarely required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the TextDecoder decode method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The `TextDecoder.prototype.decode()` method returns a DOMString containing the text, given in parameters, decoded with the specific method for that TextDecoder object. The decode method has two arguments, including the input and options. The input is the buffer or bufferSource to decode. The options or optional object holds a stream that is valid for decoding streams when the decoder is called repeatedly with incoming chunks of data. In that case, a multi-byte character may occasionally split between chunks. This option tells TextDecoder to memorize “unfinished” characters and decode them when the next chunk comes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the TextEncoder object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TextEncoder takes a stream of code points (a string) as input and emits a stream of UTF-8 bytes. It does the reverse of the TextDecoder and converts a string into bytes. The only encoding it supports is “utf-8”. The TextEncoder has two methods including encode(str) and encodeInto(str, destination) methods. The encode(str) method returns a Uint8Array from a string. The encodeInto(str, destination) encodes a string into a destination that must be Uint8Array.',
      },
    },
  ],
};

export default StructuredData;
