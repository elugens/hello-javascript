const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is requestAnimationFrame better than setInterval or setTimeout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The requestAnimationFrame delivers higher-quality animation by avoiding flicker and shear that might occur when using setTimeout or setInterval and reducing or eliminating frame skips. The setInterval and setTimeout methods might result in CPU overloads and excessive or overlapping redraws.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the requestAnimationFrame method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The window.requestAnimationFrame() method informs the browser that you want to run animations and asks the browser to invoke a given function to update an animation before the next repaint. The method accepts a callback as an input, executed before the repaint. When you're ready to refresh your animation onscreen, call this function. We may cancel the animation by contacting the request-id in the cancellation using the cancelAnimationFrame.",
      },
    },
    {
      '@type': 'Question',
      name: 'When should we use JavaScript vs. CSS for animations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For animations that CSS cannot handle well, or those that need tight control, JavaScript is our best option. We should implement JavaScript animations via requestAnimationFrame. The requestAnimationFrame built-in method allows us to set up a callback function to run when the browser is preparing a repaint. Usually, that is very soon, but the exact time depends on the browser.',
      },
    },
  ],
};

export default StructuredData;
