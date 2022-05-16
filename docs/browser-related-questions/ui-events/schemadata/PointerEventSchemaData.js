const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are pointer events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pointer events are a modern way to handle input from various pointing devices, such as a mouse, a pen/stylus, and a touchscreen. For every mouse&#8249;event&#8250;, a pointer&#8249;event&#8250; plays a similar role.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you replacing `mouse<event>` with `pointer<event>` in modern applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can replace mouse&#8249;event&#8250; events in our code with pointer&#8249;event&#8250; events and expect everything to operate perfectly with the mouse. Touch device support will also "magically" increase. However, in some places in CSS, we may need to include \'touch-action:none\'.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the three types of pointer-device types?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The three types of pointer-device types include the string mouse, pen, and touch. They must be of a string type.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when a user touches a touchscreen in one place, then puts another finger somewhere else on it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is considered a multi-touch event with several steps involved. Here is what happens when a user touches a touchscreen in one place, then puts another finger somewhere else on it. At the first finger touch: pointerdown with isPrimary=true and some pointerId. For the second finger and more fingers (assuming the first one is still touching): pointerdown with isPrimary=false and a different pointerId for every finger. Note: The pointerId gets allocated to each contacting finger rather than the whole device. When we use five fingers to touch the screen simultaneously, we can extract five pointerdown events with unique coordinates and pointerId. The events linked with the first finger have isPrimary=true at all times.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain why the pointercancel event fires?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The pointercancel event fires when there is an ongoing pointer interaction, then something happens that causes it to abort so that no more pointer-events generate. There are several reasons this behavior may manifest itself, including the pointer device hardware was physically disabled, and the device orientation changed (tablet rotated). The browser decided to handle the interaction independently, considering it a mouse gesture, zoom-and-pan action,  or anything related to user interaction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the setPointerCapture() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Developers can use the setPointerCapture() method of the Element interface to designate a specific element as the capture target of future pointer events. Subsequent events for the pointer get targeted at the capture element until capture releases via Element.releasePointerCapture(). Pointer capture allows events for a particular pointer event (PointerEvent) to be re-targeted to a particular element instead of the normal (or hit test) target at a pointer's location. We may use this approach to ensure that an element continues to receive pointer events even if the pointer device's contact moves away from the element (such as by scrolling or panning).",
      },
    },
  ],
};

export default StructuredData;
