const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is fetch the preferred way to send a network request via the browser?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beyond the Fetch getting built on the Promise Object. Fetch is easy to implement compared to other methods used to send a network request, like Ajax. The WebSocket object is more appropriate than fetch if you also want to interact (bi-directional) with the server. Fetch offers a great simplicity to load content on a page in other cases. Fetch also has many fetch options, including referrer, referrerPolicy, mode, and other options.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do the referrer and referrerPolicy fetch options do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The referrer and referrerPolicy options govern how the fetch options object sets the HTTP Referrer header. Usually, that header is set automatically and contains the URL of the page that made the request. In most scenarios, it is not essential; sometimes, it makes sense to remove or shorten it for security purposes. The referrer option allows us to set any Referrer (within the current origin) or remove it and the referrerPolicy option sets general rules for the referrer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the referrerPolicy fetch option limited to use with Fetch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, the referrer-policy described in the specification is not just for fetch, but more global. It is possible to set the default policy for the whole page using the Referrer-Policy HTTP header, or per-link, with &#8249;a rel="noreferrer"&#8250;.',
      },
    },
    {
      '@type': 'Question',
      name: 'Could you please clarify the fetch mode option?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The mode option is a safeguard that prevents occasional cross-origin requests. It has three parameters, including cors, same-origin, and no-cors. The cors parameter is the default state which allows cross-origin requests. The same-origin parameter only allows requests from the origin. When the same-origin sets, all cross-origin requests are forbidden. The no-cors parameter only allows safe cross-origin requests. The mode option may be helpful when the URL for fetch comes from a 3rd-party, and we want a “power off switch” to limit cross-origin capabilities.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the Fetch credential option do during a network request?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The credentials option specifies whether fetch should send cookies and HTTP-Authorization headers with the request. It has three parameters, including same-origin, include, and omit. The same-origin parameter is the default setting used only to send user credentials if the URL is on the same origin as the calling script. The include parameter gets used if we always want to send user credentials, even for cross-origin calls. (We should note that include requires Accept-Control-Allow-Credentials from the cross-origin server for JavaScript to access the response.). The omit parameter gets used when we do not want to send or receive cookies. This behavior is like XHR’s withCredentials flag, but with three available values instead of two.',
      },
    },
    {
      '@type': 'Question',
      name: "What is the fetch cache option's role in HTTP-caching?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By default, fetch requests make use of standard HTTP-caching. It respects the Expires and Cache-Control headers, sends If-Modified-Since, and other options. Just like the behavior of a regular HTTP-request. The cache option allows us to ignore HTTP-cache or fine-tune its usage.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can we change the default behavior a HTTP-redirect using fetch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Normally, fetch transparently follows HTTP-redirects such as 301, 302, but there are more in the specification. The fetch redirect option allows us to tweak or modify the HTTP-behavior. Redirect\'s contains three redirect modification parameters: follow, error, and manual. The default value for the “follow” option transparently follows HTTP-redirects. In the case of an HTTP-redirect, the error argument returns an error, and the manual argument allows us to process HTTP-redirects manually. In the event of a redirect, we receive a specific response object containing the response. type="opaqueredirect" and zeroed/empty status and most other properties.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the fetch integrity option work or behave?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The integrity option allows to check if the response matches the known-ahead checksum. The specification's supported hash functions are SHA-256, SHA-384, and SHA-512. There might be others, depending on the browser. For example, we are downloading a file, and we know that is SHA-256 checksum is “abcdef” (an actual checksum is more extended, of course). Fetch calculates SHA-256 on its own and compares it with our string. In case of a mismatch, an error triggers.",
      },
    },
  ],
};

export default StructuredData;
