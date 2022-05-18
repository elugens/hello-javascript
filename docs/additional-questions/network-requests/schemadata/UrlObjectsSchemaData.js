const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the purpose of the built-in URL class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The built-in URL class offers a simple interface for constructing and interpreting URLs. There are no networking functions that need a specific URL object; strings suffice. So, theoretically, we don't need to utilize URLs. However, it might be helpful when constructing URLs dynamically. The URL() constructor provides a freshly generated URL object that represents the URL specified by the arguments, of which there are two: URL and base. A USVString or any other object with a stringifier indicating a relative URL, like an &#8249;a&#8250; element, represents the URL. If the URL is relative, the base must be specified and used as the base URL. If the URL is absolute, the base does not matter. The base is a string that represents the base URL to utilize when the URL is relative, and it defaults to undefined if not given.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can we pass URL objects to networking and other methods instead of a string?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can use a URL object in fetch or XMLHttpRequest, pretty much everywhere a URL string is needed. In general, a URL object may be supplied to any method instead of a string since most methods execute string conversions that convert a URL object into a string with the whole URL.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to parse data inside a URL string?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can access the parameters via the searchParams URL property. A property formatted URL string should include encoding to ensure proper parsing. URL string parameters should be encoded if they contain spaces, Non-Latin letters. URL.searchParams returns a URLSearchParams object that we can use to access the string data. For instance, if the URL of your page is https://example.com/?name=Jonathan%20Smith&age=18, you could parse out the name and age parameters using URL.searchParams.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the URLSearchParams.get() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The get() method of the URLSearchParams interface returns the first value (string) associated with the given search parameter. If the parameter is non-existent, the parameter returns null; otherwise, a string value.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which standard defines which characters are allowed in URLs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The RFC3986 standard determines which characters are allowed and not allowed in URLs. Non-Latin characters and spaces, for example, must be encoded and substituted with their UTF-8 codes, preceded by a percent sign, such as %20  (space can be encoded by + for historical reasons, but this is an exception). The good news is that URL objects take care of everything automatically. We input all arguments in their unencoded form and then transform the URL into a string.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between encodeURIComponent and encodeURI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main difference between encodeURIComponent and encodeURI is that encodeURI encodes only characters that encoder restricts in a URL. The encodeURIComponent encodes same characters, and, in addition to them, characters #, $, &, +, ,, /, :, ;, =, ? and @. We should note that encoding can be a bit touchy, and you should pay attention to any characters that encodeURI can misinterpret.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a difference between URL transformation and the encoding functions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, The URI specification controls the definition of Classes URL and URLSearchParams: RFC3986, while (encode*) functions are defined based on the obsolete version RFC2396. There are a few differences concerning IPv6 addresses, which are encoded differently, and this difference is because IPv6 URLs did not exist in RFC2396 (August 1998). Such cases are rare, (encode*) functions work well most of the time, but we should be aware of it.',
      },
    },
  ],
};

export default StructuredData;
