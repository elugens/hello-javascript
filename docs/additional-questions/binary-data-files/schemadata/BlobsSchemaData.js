const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain what a Blob constructor is in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Blob() constructor returns a new Blob object. The blob's content consists of an optional string type (a MIME-type usually), plus blobParts - a sequence of other Blob objects, strings, and BufferSource. The blobParts is an array of Blob/BufferSource/String values. The options argument has two optional object parameters, including the type and endings. The Blob type, usually a MIME-type, e.g., text/html. The endings parameter is specific to how to interpret newline characters (\n) within the contents of the data is text. The default value, transparent, copies newline characters into the blob without changing them. To convert newlines to the host system's native convention, specify the value native. The arguments are similar to array.slice, negative numbers are allowed too.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to change data directly in a JavaScript Blob?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No Blob objects are immutable, we cannot change data directly in a Blob, but we can slice parts of a Blob, create new Blob objects from them, mix them into a new Blob, and so on. This behavior is like JavaScript strings: we cannot change a character in a string, but we can make a new corrected string.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you name a use case for a JavaScript Blob?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To display its contents, a Blob gets used as a URL for &#8249;a&#8250;, &#8249;img&#8250; or other tags. Thanks to type, we can also download/upload Blob objects, and the type naturally becomes Content-Type in network requests.',
      },
    },
    {
      '@type': 'Question',
      name: 'What method gets used to create an Object URL for a Blob?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The URL.createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter. The URL lifetime gets tied to the document in the window on which it gets created. The new object URL represents the specified File object or Blob object. Each time you call createObjectURL(), a new object URL gets created, even if you've already created one for the same object. This behavior has the potential of taking up unnecessary resources and should be released.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to release an Object URL when it is no longer required?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can use URL.revokeObjectURL(URL) to remove the reference from the internal mapping, thus allowing the Blob to get deleted (if there are no other references), and the memory freed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there an alternative to creating an Object URL other than URL.createObjectURL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An alternative to URL.createObjectURL is to convert a Blob into a base64-encoded string. That encoding represents binary data as a string of ultra-safe “readable” characters with ASCII-codes from 0 to 64. And what is more important – we can use this encoding in “data-urls”. A data URL has the form data:[&#8249;mediatype&#8250;][;base64], &#8249;data&#8250;. We can use such URLs everywhere, on par with “regular” URLs. To transform a Blob into base64, we can use the built-in FileReader object. Both ways of making a URL of a Blob are usable. But usually URL.createObjectURL(blob) is simpler and faster.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between creating an Object URL vs. converting a Blob into a base64-encoded string?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When creating an Object URL, we need to know the memory ramifications. Using URL.createObjectURL requires use to revoke it when it is no longer needed. However, a Blob conversion does not require revocation of the invoked conversion. If we are concerned about simplicity, speed, and stability, the URL.createObjectURL gets recommended.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does JavaScript provide a way to create a Blob of an image?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can create a Blob of an image, an image part, or even make a page screenshot. That is handy to upload it somewhere. We can use the HTML &#8249;canvas&#8250; element to handle image operations like drawing an image using canvas.drawImage.',
      },
    },
  ],
};

export default StructuredData;
