const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why should you consider the scrollbar when assessing content width?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If the scrollbar is 16px wide, then only 300 - 16 = 284px remains, and we should consider it. Some browsers (not all) reserve the space for it by taking it from the content. Our content may look off or overlap if we do not account for the scrollbar width. The width may vary between devices and browsers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the offsetParent is concerning an HTML element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The HTMLElement.offsetParent read-only property references the element that is the closest (nearest in the containment hierarchy) positioned ancestor element. If there is no positioned ancestor element, the nearest ancestor td, th, or table gets returned, or the body if there are no ancestor table elements either. Properties offsetLeft/offsetTop provide x/y coordinates relative to offsetParent upper-left corner. There are several occasions when offsetParent is null including for not shown elements (display:none or not in the document), &#8249;body&#8250; and &#8249;html&#8250;, and elements with `position:fixed`.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the offsetWidth is about in an HTML element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The HTMLElement.offsetWidth read-only property returns the layout width of an element as an integer. Typically, offsetWidth gets measured in pixels of the element\'s CSS width, including any borders, padding, and vertical scrollbars (if rendered). It does not include the width of pseudo-elements such as ::before or ::after. If the element is hidden (for example, by setting style.display on the element or one of its ancestors to "none"), 0 gets returned. offsetWidth and height reflect the total size of the element itself, including the borders.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the offsetHeight is concerning an HTML element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The HTMLElement.offsetHeight read-only property returns the height of an element, including vertical padding and borders, as an integer. Typically, offsetHeight gets measured in pixels of the element\'s CSS height, including any borders, padding, and horizontal scrollbars (if rendered). It does not include the height of pseudo-elements such as, ::before or ::after. The measurement includes total linear content height for the document body object instead of the element\'s CSS height. Floated elements extending below other linear content get ignored. If the element is hidden (for example, by setting style.display on the element or one of its ancestors to "none"), 0 returns. offsetWidth and height reflect the total size of the element itself, including the borders.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do geometry properties work on elements when they are zero or null?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Geometry properties only get calculated for visible items. All geometry properties are zero if an element (or any of its predecessors) has display:none or isn't in the document (or null for offsetParent). For example, if we built an element but haven't yet added it to the page, offsetParent is null and offsetWidth, and offsetHeight is 0; or if it (or its predecessor) has display:none. We may determine whether an element gets hidden by examining whether the offsetWidth and offsetHeight are null and returning true in check.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the clientTop is concerning an HTML element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inside the element, we have the borders, the width of the top border of an element in pixels. It is a read-only, integer property of the element. All that lies between the two locations (offsetTop and client area top) is the element\'s border. This outcome is because the offsetTop indicates the top of the border (not the margin). At the same time, the client area starts immediately below the border (client area includes padding.) Therefore, the clientTop value will always equal the integer portion of the .getComputedStyle() value for "border-top-width". (Actually might be Math.round(parseFloat()).) For example, if the computed "border-top-width" is zero, then clientTop is zero. These properties are not border width/height, but relative coordinates of the inner side from the outer side.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the clientLeft is concerning an HTML element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The limits are the width of an element's left boundary in pixels contained within the element. It contains the width of the vertical scrollbar if the element's text orientation is right–to–left, and an overflow occurs, resulting in the display of a left vertical scrollbar. ClientLeft does not contain the left margin or padding, and it is a read-only attribute.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the clientWidth is concerning an HTML element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Element.clientWidth property is zero for inline elements and elements with no CSS; otherwise, it's the inner width of an element in pixels. It includes padding but excludes borders, margins, and vertical scrollbars (if present). When clientWidth is applied to the root element (the &#8249;html&#8250; element), (or on &#8249;body&#8250; if the document is in quirks mode), the width of the viewport (excluding any scrollbar) is returned.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the clientHeight is concerning an HTML element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Element.clientHeight read-only property is zero for elements with no CSS or inline layout boxes; otherwise, it's the inner height of an element in pixels. It includes padding but excludes borders, margins, and horizontal scrollbars (if present). clientHeight can be calculated as: CSS height + CSS padding - height of horizontal scrollbar (if present). When clientHeight is applied to the root element (the &#8249;html&#8250; element), (or on &#8249;body&#8250; if the document is in quirks mode), it returns the viewport's height (excluding any scrollbars).",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the scrollWidth is concerning an HTML element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Element.scrollWidth read-only property measures the width of an element's content, including content not visible on the screen due to overflow. The scrollWidth value equals the minimum width the element would require to fit all the content in the viewport without using a horizontal scrollbar.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the scrollLeft is concerning an HTML element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Element.scrollLeft property gets or sets the number of pixels where an element's content scrolls from its left edge. If the element's direction is RTL (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position (at the start of the scrolled content) and then increasingly negative as you scroll towards the end of the content. On systems using display scaling, scrollLeft may give you a decimal value.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the scrollTop is concerning an HTML element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Element.scrollTop property gets or sets the number of pixels where an element's content scrolls vertically. An element's scrollTop value measures the distance from its top to its topmost visible content. When an element's content does not generate a vertical scrollbar, its scrollTop value is 0. When scrollTop gets used on the root element (the &#8249;html&#8250; element), the scrollY of the window returns.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why should we use geometry properties versus the width/height from CSS using getComputedStyle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First, CSS width/height depends on another property: box-sizing that defines “what is” CSS width and height. A change in box-sizing for CSS purposes may break such JavaScript. Second, CSS width/height may get set to auto. From the CSS standpoint, width:auto is perfectly normal, but we need an exact size in pixels in JavaScript that we can use in calculations. So, in this case, CSS width is useless. And there is one more reason: a scrollbar. Sometimes the code that works fine without a scrollbar becomes buggy because a scrollbar takes the space from the content in some browsers. So, the actual width available for the content is less than the CSS width. And clientWidth/clientHeight take that into account. Another issue is browser inconsistencies with returned values. Some browsers like Firefox do not account for the scrollbar in their calculations for the width of an element.',
      },
    },
  ],
};

export default StructuredData;
