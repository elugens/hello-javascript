const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the three crucial events in the lifecycle of an HTML page?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The lifecycle of an HTML page has three critical events, including the DOMContentLoaded, load, and beforeunload/unload. DOMContentLoaded occurs when the browser fully loads HTML, and the DOM tree completely builds, but external resources like pictures &#8249;img&#8250; and stylesheets may not yet have loaded. The load is not only HTML is loaded but also all the external resources: images, styles, and others. The beforeunload/unload state happens when the user is leaving the page.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are the DOMContentLoaded, load, beforeunload/unload events useful?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each HTML lifecycle event is helpful in its way. The DOMContentLoaded event is when the DOM is ready, so the handler can lookup DOM nodes and initialize the interface. The load event is when external resources are loaded, so styles are applied and image sizes are known. The beforeunload event occurs when the user is leaving, we can check if the user saved the changes and ask them whether they want to leave. The unload event occurs when the user has almost left, but we still can initiate some operations, such as sending out statistics.',
      },
    },
    {
      '@type': 'Question',
      name: 'On what object does the DOMContentLoaded event occur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The DOMContentLoaded event happens on the document object, and we must use addEventListener to catch it. We should note a few peculiarities when we try to solicit information before the page is completely loaded, like image sizes, and the DOM loads first and then images and styles.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when the browser processes a document and comes across a `<script>` tag?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the browser is processing an HTML page and encounters a &#8249;script&#8250; tag, it must execute it before continuing to create the DOM. This measure is a precaution since scripts may seek to change the DOM and even document.write into it, forcing DOMContentLoaded to wait. As a result, DOMContentLoaded occurs after such scripts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any exceptions to script blocking of the DOMContentLoaded event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, there are two exceptions to the rule. Scripts with the async attribute do not block DOMContentLoaded event. Scripts generate dynamically with the `document.createElement('script')` method and then added to the webpage; don’t block this event.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do external style sheets influence or affect the DOM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'External style sheets do not affect DOM, so DOMContentLoaded does not wait for them. But there is a pitfall. If we have a script after the style, that script must wait until the stylesheet loads. This behavior happens because the script may need coordinates and other style-dependent properties of elements. Naturally, it must wait for styles to load. As DOMContentLoaded waits for scripts, it now waits for styles before them.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the built-in browser autofill interact with the DOMContentLoaded event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Firefox, Chrome, and Opera autofill forms on DOMContentLoaded. For instance, if the page has a form with login and password, and the browser remembered the values, then on DOMContentLoaded it may try to autofill them (if approved by the user). So if long-loading scripts postpone DOMContentLoaded, then autofill also awaits until the DOMContentLoaded event.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain how the load event behaves via the onload property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The load event on the window object triggers when the whole page is loaded, including styles, images, and other resources. This event is available via the onload property.',
      },
    },
    {
      '@type': 'Question',
      name: 'What event is triggered when a user leaves the browser page?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a visitor leaves the page, the unload event triggers on the window.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a reason we should avoid using unload and beforeunload in conjunction with Navigator.sendBeacon method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In many situations, especially on mobile devices, the browser does not fire the unload, beforeunload, or pagehide events. For example, these events do not fire in the following situations. The user loads the page and interacts with it. When they complete, they switch to a different app instead of closing the tab. Later, they close the browser app using the phone's app manager. Additionally, the unload event is incompatible with modern browsers' back/forward cache (bfcache). Using the unload event in conjunction with the sendBeacon method is not recommended.",
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if we set the DOMContentLoaded handler after the document is loaded?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Naturally, it never runs because the page has already loaded.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to find the document loading state?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can check the loading state by invoking the `document.readyState` property. The `document.readyState` property describes the loading state of the document. When the value of this property changes, a readystatechange event fires on the document object.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the three possible values of the readyState?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The readyState can be one of three possible values, including the loading, interactive, and complete states. The “loading state” is relative to the page still loading. The “interactive state” is when the document has finished loading and parses, but sub-resources such as scripts, images, stylesheets, and frames are still loading. The “complete state” happens when the document and sub-resources have finished loading, and the state indicates that the load event is about to fire.',
      },
    },
  ],
};

export default StructuredData;
