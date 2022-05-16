const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do scripts load in an HTML document?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the browser loads HTML and comes across a &#8249;script&#8250;...&#8249;/script&#8250; tag, it cannot continue building the DOM. It must execute the script straight away. The same happens for external scripts &#8249;script src="..."&#8250;&#8249;/script&#8250;: the browser must wait for the script to download, execute the downloaded script, and only then can it process the rest of the page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Since HTML documents have to wait for scripts to run once they get reached. Can you name two issues that can lead to adverse outcomes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, there are two common issues related to script loading. Scripts cannot see DOM elements below them, so they cannot add handlers. If there is a bulky script at the top of the page, it “blocks the page”. Users cannot see the page content till it downloads and runs. There are some workarounds to that. For instance, we can put a script at the bottom of the page. Then it can see elements above it, and it doesn’t block the page content from showing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the two script attributes used to manage script loading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can use two script attributes to manage script loading in HTML documents. They include the defer and async attributes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the defer attribute affect the loading of a script?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The defer attribute tells the browser not to wait for the script. Instead, the browser does not continue to process the HTML and build DOM. The script loads “in the background”, and then runs when the DOM fully builds.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the benefits of using the script defer attribute?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are two significant benefits of using the script defer attribute. The scripts with defer never block the page and consistently execute when the DOM is ready (but before DOMContentLoaded event).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do deferred scripts keep their relative order, like regular scripts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, deferred scripts keep their relative order, just like regular scripts. Browsers scan the page for scripts and download them in parallel, to improve performance. But the defer attribute, besides telling the browser “not to block” the document, it ensures that the relative order of the deferred script is maintained. That may be important for cases when we need to load a JavaScript library and then a script that depends on it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the async attribute affect the loading of a script?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The async attribute is somewhat like defer. It also makes the script non-blocking. But it has significant differences in the behavior. The async attribute means that a script is entirely independent. In other words, async scripts load in the background and run when ready. The DOM and other scripts do not wait for them, and they do not wait for anything. A fully independent script that runs when loaded.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to use JavaScript to load a script dynamically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can create a script and append it to the document dynamically using JavaScript. The script starts loading as soon as it appends to the document.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do dynamic scripts behave asynchronously, deferred, or like a regular script?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By default, dynamic scripts operate asynchronously. They don\'t have to wait for anything; nothing has to wait for them. The script that loads first (in "load-first" sequence) executes first. Developers can alter this behavior by specifying “script.async=false”.  The Scripts would then run in the document\'s sequence, much like defer.',
      },
    },
  ],
};

export default StructuredData;
