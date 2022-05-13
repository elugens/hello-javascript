const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do we find the width and height of the browser window?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To extact the window width and height, we can use the clientWidth/clientHeight of document.documentElement. Using this approach is the correct way to extract the width and height of the window, not window.innerWidth/innerHeight.',
      },
    },
    {
      '@type': 'Question',
      name: "Why shouldn't we use innerWidth/innerHeight to retrieve the window's width and height?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Browsers also support properties like window.innerWidth/innerHeight. They look like what we want, but they are not. If a scrollbar exists and takes up some space, clientWidth/clientHeight delivers the width/height without it (subtracts it). In other words, they return the width and height of the visible portion of the page that is accessible for content. The window.innerWidth/innerHeight properties include the scrollbar in their computation. Most of the time, we require the available window width. We should utilize documentElement.clientHeight/clientWidth to draw or place things within the scrollbar (if any).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a reason that we should always use `<!DOCTYPE HTML>` in our HTML, when using geometry properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When there is no &#8249;!DOCTYPE HTML&#8250; in HTML, top-level geometric properties may behave outside their intended behavior. Strange things are possible. We should alwaYs use !DOCTYPE HTML in modern web application development.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do we extract the entire width and height of the document, including the scrolled-out part?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Theoretically, because the root document element document.documentElement and it encloses all of the information, we could measure the total size of the document as document.documentElement.scrollWidth/scrollHeight. However, these attributes do not operate as intended on that element throughout the entire page. If there is no scroll in Chrome/Safari/Opera, documentElement.scrollHeight may be smaller than documentElement.clientHeight! Isn't it strange? To acquire the complete document height with confidence, we should take the greatest of these properties.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do we access the current scroll position top/left of the document?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "DOM elements' scrollLeft/scrollTop attributes contain the current scroll state. document.documentElement is used for document scrolling. Most browsers support scrollLeft/scrollTop, except older WebKit-based browsers like Safari (bug 5991), where we need to use document.body instead of document.documentElement. Fortunately, we don't have to remember these quirks because the scroll gets provided in the read-only special properties window.pageXOffset/pageYOffset.",
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if we try to scroll the document when the DOM does is not fully constructed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To scroll the page with JavaScript, the DOM must be fully constructed. For example, attempting to scroll the page with a script in the &#8249;head&#8250; fails because the DOM is not fully built. It is common to place these scripts at the bottom of the document or in a deferred script. The defer property instructs the browser not to wait for the script to complete. Instead, the browser continues processing the HTML and building the DOM. The script loads "in the background" and starts when the DOM fully builds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do we scroll the page using JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regular items can be scrolled by adjusting the scrollTop/scrollLeft values. We implement this for the page by using document.documentElement.scrollTop/scrollLeft (except in Safari, where we should use document.body.scrollTop/Left instead). Another option is to use the specific methods window.scrollBy(x,y) and window.scrollTo(x,y) (pageX,pageY). These approaches function in the same way for all browsers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the scrollBy method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The scrollBy(x,y) method scrolls the page related to its current location. ScrollBy(0,10), for example, scrolls the page 10px down. It uses two non-optional parameters, including the x and y coordinates. An additional parameter option, ScrollToOptions, accesses left, top, and behavior properties in a dictionary object.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the scrollTo method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The scrollTo(pageX,pageY) method scrolls the page to absolute coordinates, such that the top-left corner of the viewable area has coordinates (pageX, pageY) relative to the top-left corner of the document.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the scrollIntoView method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The call to elem. scrollIntoView(top) scrolls the page to reveal elem. There is just one boolean parameter. If top=true (that is the default), the page scrolls to make elem appear on the top of the window. The upper edge of the element aligns with the window top. If top=false, the page scrolls to make elem appear at the bottom. The bottom edge of the element aligns with the window bottom.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to forbid or freeze document scrolling in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It’s enough to set document.body.style.overflow = "hidden" to make the document un-scrollable. The page will "freeze" when it is currently scrolling. The same technique stops the scroll for additional components, not just for document.body. The disadvantage of this strategy is that the scrollbar vanishes, impacting the presentation of the document.',
      },
    },
  ],
};

export default StructuredData;
