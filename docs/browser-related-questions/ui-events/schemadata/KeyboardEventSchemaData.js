const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When should you use keyboard events during user interaction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When we wish to manage keyboard operations, we should utilize keyboard events (virtual keyboard also counts). For example, when there is a response to arrow keys Up and Down or hotkeys (including combinations of keys).',
      },
    },
    {
      '@type': 'Question',
      name: 'What do the event.code and event.key properties do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The key property (event.key) of the event object allows us to extract the character, while the code property (event.code) of the event object allows us to extract the “physical key code”.<br/>For example, the same key Z can be suppressed with or without Shift. This behavior results in two distinct characters: lowercase z and uppercase Z.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it essential to consider case when dealing with event codes for key actions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the case is critical, and all event codes must utilize the Pascal case to obtain the correct return value; otherwise, they fail. Please avoid misspellings: it is KeyZ, not keyZ. The check-like event.code=="keyZ" won\'t function since the initial letter of "Key" needs capitalization.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when a key does not have a letter-based character?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shift, F1, and other special keys. Event.key is roughly equivalent to event.code for such keys. Please keep in mind that event.code defines which key gets pushed. For example, most keyboards include two Shift keys: one on the left and one on the right. The event.code informs us which one was pushed, whereas the event.key determines the "meaning" of the key: what it is (a "Shift").',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when we suppress a key for more than a second?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If we suppress a key over an extended period of time, it begins to "auto-repeat": the keydown triggers repeatedly, and when the key is released, we eventually receive keyup. As a result, having numerous keydowns and a single keyup is rather usual. The event object\'s event.repeat attribute equates to true for events triggered by auto-repeat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you prevent the default actions on OS-based special keys using the preventDefault method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No, except for OS-based special keys, preventing the default action on keydown cancels most of them. On Windows, for example, Alt+F4 dismisses the current browser window. And there is no way to halt it by disabling JavaScript's default action. Any activity outside of the browser's scope, such as shutting the browser window, is not captured by the browser, classifying it as an OS-level event.",
      },
    },
  ],
};

export default StructuredData;
