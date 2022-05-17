const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Explain the function and syntax of the Window interface's open() method?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A pop-up window is one of the oldest methods to show an additional document to a user. The Window interface's open() method loads the specified resource into the new or existing browsing context (window, &#8249;iframe&#8250; or tab) with the specified name. If the name does not exist, a new browsing context opens in a new tab or a new window, and the specified resource is loaded. The open method takes three parameters: URL, windowName, and windowFeatures. The URL is a DOMString that specifies the location of the resource to be loaded. This element can be a path or URL to an HTML page, an image file, or any other resource that the browser supports. The windowName is a DOMString specifying the browsing context's name (window, &#8249;iframe&#8250; or tab) to load the specified resource; if the name does not indicate an existing context, a new window is created and gives the name specified by windowName. The windowFeatures parameter is a DOMString that contains a comma-separated list of window characteristics and their values in the form \"name=value\". These features include settings such as the window's default size and location, as well as whether or not the toolbar is shown. The string must not include any spaces. Both the windowName and windowFeatures options are optional.",
      },
    },
    {
      '@type': 'Question',
      name: 'When do browsers block pop-up events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most browsers block pop-ups if they get called outside of user-triggered event handlers like onclick. This way, users are somewhat protected from unwanted pop-ups, but the functionality is not disabled totally.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when a pop-up opens from onclick, but after setTimeout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The simple answer is that it depends on the browser. For instance, if an onclick event has a nested timeout and returns a window open after 3 seconds. The popup opens in Chrome but gets blocked in Firefox. If we decrease the delay, the pop-up works in Firefox (down to 2 seconds or less). The difference is that Firefox accepts timeouts of 2000ms or less, but beyond that, It eliminates the "trust," presuming that it is now "outside of the user action." As a result, the first one gets denied while the second is not.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is essential to remember while configuring Window.open features parameters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The configuration string for the new window. It contains settings delimited by a comma. There must be no spaces in parameters, for example: width=200,height=100.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you name some of the rules for omitted settings in the Window.open() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are several rules for omitted settings of the Window.open() method.<br /><br />\r\n  <ul>\r\n    <li>If there is no third argument or nothing in the open call, the default window parameters return.</li>\r\n    <li>If a string of params is present but specific yes/no features are missing, the missed features are believed to be null. So, if you supply params, make sure that all needed features explicitly set to yes.</li>\r\n    <li>If no left/top parameters are specified, the browser attempts to start a new window near the previous one that launched.</li>\r\n    <li>If no width/height is specified, the new window turns out to be the same size as the previous one.</li>\r\n  </ul>',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the origin policy when it comes to pop-up windows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Windows may freely access the content of each other only if they come from the same-origin (the same protocol://domain:port). Otherwise, it isn't possible for user safety concerns, for example, if the main window is from site.com and the pop-up is from gmail.com.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can the pop-up access the “opener” window and make modifications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A pop-up may access the (opener) window using window.opener reference and it is null for all windows except pop-ups. As a result, the relationship between the windows is bidirectional: the main window and the pop-up both refer to one other.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way we can close a pop-up window programmatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the close() method is available for any window, but most browsers ignore window.close() if the window does not get created with window.open(). So, it only works on a pop-up. If the window is closed, the closed attribute is true. This behavior is important for determining whether or not the pop-up (or the main window) is still active. A user can close it at any time, and our programming should take that into account. To check if a window is closed: win.closed.',
      },
    },
  ],
};

export default StructuredData;
