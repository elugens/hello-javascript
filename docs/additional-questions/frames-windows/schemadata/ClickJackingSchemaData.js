const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain what is clickjacking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The “clickjacking” attack allows an evil page to click on a “victim site” on behalf of the visitor. Many sites were hacked this way, in the past, including Twitter, Facebook, Paypal, and other sites. They have all been fixed, of course.',
      },
    },
    {
      '@type': 'Question',
      name: 'Could you perhaps describe how a clickjacking attack gets carried out in detail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The idea is quite simple. A visitor gets lured to an evil page. It does not matter how. The page has a harmless-looking link on it (like “get rich now” or “click here, very funny”). The malicious website places a transparent &#8249;iframe&#8250; with src from facebook.com above the link, so that the "Like" button is directly above it. Typically, this implementation gets accomplished using a z-index, and the visitor clicks the button instead of the link.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you briefly explain two approaches to defending against a clickjacking attack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first or naive approach is a defensive measure employing a piece of JavaScript code that prevents the website from being opened in a frame (so-called "frame busting"). If the window discovers it is not at the top, it immediately rises to the top. This approach is not a solid defense because there are several methods to circumvent it. The second approach is using the sandbox attribute to block navigation. One of the things restricted by the sandbox attribute is navigation. A sandboxed iframe may not change top.location. So, we can add the iframe with sandbox="allow-scripts allow-forms". That would relax the restrictions, permitting scripts and forms. But we omit allow-top-navigation so that changing top.location is forbidden. The recommended approach uses X-Frame-Options: SAMEORIGIN on pages (or whole websites) that does not intentionally get viewed inside frames.',
      },
    },
  ],
};

export default StructuredData;
