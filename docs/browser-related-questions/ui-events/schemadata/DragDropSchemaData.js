const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When a drag occurs, which event fires when the mouse moves over an element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The dragover event is triggered as the mouse moves over an element when a drag occurs. The operation during an event is frequently the same as the dragenter event. The dragenter event occurs when a draggable element enters a drop target. A dragleave event occurs when the valid drop target is left. Dragstart gets dispatched whenever a user begins to drag an element.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you make content inside the browser draggable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HTML5 includes a drag-and-drop feature. Setting the draggable property of an element to true makes it draggable.',
      },
    },
    {
      '@type': 'Question',
      name: 'What occurs when a drag action on an element begins?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are three factors to remember when a drag event begins: <em>the main points.</em><br/><br/>\r\n  <ul>\r\n  <li><strong>Drag Data:</strong> The data type gets sent while dragging occurs.</li>\r\n  <li><strong>Drag Feedback:</strong> This image shows alongside the mouse pointer during a drag action.</li>\r\n  <li><strong>Drag Effect:</strong> This describes the drag that occurs on an element. There are three categories, which are listed below.</li>\r\n  <li><strong>Copy:</strong> The data dragged gets copied from its current position to the drop destination if this effect is enabled.</li>\r\n  <li><strong>Move:</strong> This effect indicates that the dragged data is relocating from its original location to the drop destination.</li>\r\n  <li><strong>Link:</strong> This effect suggests that a link or relationship between the source and drop sites gets established.</li>\r\n  </ul>',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you list a few JavaScript drag-and-drop events associated with a callback method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Seven possible drag and drop events can be programmatically associated with a callback method. They include drag, dragstart, dragenter, dragover, dragleave, drop, and dragend.<br/><br/>\r\n  <ul>\r\n  <li><strong>drag:</strong> The drag event triggers every hundred milliseconds as a user drags an object or text selection.</li>\r\n  <li><strong>dragstart:</strong> When a drag starts, it fires on an element.</li>\r\n  <li><strong>dragenter:</strong> this event is triggered when the mouse enters an element while dragging.</li>\r\n  <li><strong>dragover:</strong> When a drag occurs, this event is triggered when the mouse moves over an element.</li>\r\n  <li><strong>dragleave:</strong> This event is triggered when the mouse departs an element while it gets dragged.</li>\r\n  <li><strong>drop:</strong> After the drag operation, the drop event fires on the element where the drop occurred.</li>\r\n  <li><strong>dragend:</strong> When the drag operation finishes, whether it was successful, the drag source receives the dragend event.</li>\r\n  </ul>',
      },
    },
    {
      '@type': 'Question',
      name: 'What exactly is the dataTransfer property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The dataTransfer object contains the data transmitted in a drag action. The dragstart event sets dataTransfer, which is read/handled in the drop event.',
      },
    },
  ],
};

export default StructuredData;
