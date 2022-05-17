const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain what is the same-origin policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two URLs are said to have the “same-origin” if they have the same protocol, domain, and port. The “Same Origin” (same site) policy limits access of windows and frames to each other. The idea is that if a user has two pages open: one from john-smith.com and another one is gmail.com, then they would not want a script from john-smith.com to read our mail from gmail.com. So, the “Same Origin” policy aims to protect users from information theft.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the rules for origin policy for an iframe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The same rules that apply pop-up windows apply for iframes regarding origin policies. When we access something within the embedded window, the browser checks to see if the iframe has the base origin; if not, access gets prohibited (writing to location is an exception, it still gets permitted).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between iframe.onload vs. iframe.contentWindow.onload?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The iframe.onload event (on the &#8249;iframe&#8250; element) is nearly identical to iframe.contentWindow.onload (on the embedded window object). It is triggered when the embedded window has loaded all of its resources. However, we can't access iframe.contentWindow.onload for an iframe from another origin; thus, we should use iframe.onload instead.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do subdomains operate in the context of the same-origin policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two URLs with distinct domains must have different origins. However, suppose multiple windows share the same second-level domain, such as jane.site.com, pam.site.com, and site.com (their common 2nd level domain is site.com). In that case, we can instruct the browser to ignore the difference and treat them as coming from the "same-origin" for cross-window communication. Execute the code in each window and assign the base domain to the subdomains to make it work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any pitfalls when an iframe attempts to access its document?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, there is a problem when an iframe arrives from the exact base origin, and we may access its page. It has nothing to do with cross-origin issues, but it is crucial to understand. An iframe has a document as soon as it gets created. But that document is not the same as the one that gets loaded into it! As a result, if we act on the document right away. We should not operate with the document of an unloaded iframe since it is incorrect. If we add event handlers to it, they get ignored.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to detect the moment when the document gets loaded into an iframe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, when iframe.onload triggers. But it only triggers when the whole iframe with all resources is loaded. We can try to catch the moment earlier using checks in a setInterval method.',
      },
    },
    {
      '@type': 'Question',
      name: 'What approach should you use to access the window object for an iframe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A window object for &#8249;iframe&#8250; can also be obtained from the “named” collection window.frames. There are two options: by number or by name. In terms of figures: window.frames[0] – the window object for the first frame of the document. The window object for the frame with the name="iframeName" property is known as window.frames.iframeName.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the purpose of the “sandbox” iframe attribute?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The sandbox property enables the exclusion of particular operations within an &#8249;iframe&#8250; to prevent it from running untrusted code. It "sandboxes" the iframe by treating it as though it came from somewhere else and applying extra constraints. For &#8249;iframe sandbox src="..."&#8250;, a "default set" of limitations is imposed. However, We can loosen restrictions, though, if we specify a space-separated list of limitations that we should not enforce as an attribute value, such as this: &#8249;iframe sandbox="allow-forms allow-popups"&#8250;. In other words, an empty "sandbox" property imposes the most robust restrictions imaginable, but we may specify a space-delimited list of those we want to remove.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the postMessage interface message does?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The postMessage interface allows windows to communicate with one another regardless of origin. So, it is a way around the “Same Origin” policy. It allows a window from john-smith.com to talk to gmail.com and exchange information, but only if they both agree and call corresponding JavaScript functions. That makes it safe for users. The interface has two parts or arguments.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the postMessage method interact with an iframe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The window that wants to send a message calls postMessage method of the receiving window. In other words, if we want to send the message to win, we should call win.postMessage(data, targetOrigin). The data argument is the data we are attempting to send. It can be any object; the data gets cloned using the “structured serialization algorithm”. IE supports only strings, so we should JSON.stringify complex objects to support that browser. The targetOrigin specifies the origin for the target window so that only a window from the given origin gets the message.',
      },
    },
    {
      '@type': 'Question',
      name: 'How would you receive a message from a postMessage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The target window should have a handler on the message event to receive a message. It is triggered when the postMessage method gets invoked (and targetOrigin check is successful). The event object has unique properties, including the data, origin, and source properties. The data property holds the data from the postMessage, and the origin property holds the value of the originating document. The source is the reference to the sender window. We can immediately source.postMessage(...) back if we want.',
      },
    },
  ],
};

export default StructuredData;
