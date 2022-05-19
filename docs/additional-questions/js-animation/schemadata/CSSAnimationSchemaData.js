const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do we use CSS animation in web development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CSS animations make it possible to do simple animations without JavaScript. JavaScript can be used to control CSS animations and make them even better with little code. The general idea is that when you can use CSS versus JavaScript, you should because it reduces the load on the browser.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you briefly define the idea around CSS transitions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "CSS transitions are a basic concept. We explain a property's modifications and how they should be animated. The browser paints the animation whenever the property changes, and we have to alter the property, and the browser transitions smoothly.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are the four properties used to describe CSS transitions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are 4 properties to describe CSS transitions, including transition-property, transition-duration, transition-timing-function, and transition-delay.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to utilize the transition property to animate many CSS properties at the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can transition multiple CSS properties, like font size and color.',
      },
    },
    {
      '@type': 'Question',
      name: 'Could you perhaps explain how to utilize the CSS transition property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The transition-property CSS property sets the CSS properties to which a transition effect should be applied. In transition-property, we write a list of properties to animate, for instance, left, margin-left, height, color, or we could write all, which means “animate all properties”. We should note that some properties cannot be animated. However, most of the generally used properties are MDN animatable.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the CSS transition-duration property set?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The transition-duration CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning no animation occurs.<br /><br />You may specify multiple durations; each duration gets applied to the related property specified by the transition-property property, which acts as a master list. If fewer durations get specified than in the master list, the user agent repeats the list of durations. If there are more durations in the list, the list truncates to the correct size. In both cases, the CSS declaration stays valid.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the CSS transition-delay property do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The transition-delay CSS property specifies the duration to wait before starting a property's transition effect when its value changes.",
      },
    },
    {
      '@type': 'Question',
      name: 'What does the CSS transition-timing-function CSS property do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The transition-timing-function CSS property specifies how a transition effect impacts the computed intermediate values for CSS properties. The timing function specifies how the animation process progresses throughout its timeline. Will it begin slowly and then pick up speed, or vice versa? At first glance, it looks to be the most challenging property. However, it becomes relatively simple if we dedicate some effort to it. The transition-timing-function attribute takes one of two values: a Bezier curve or steps.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the cubic-bezier() CSS function do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The cubic-bezier() function defines a Cubic Bezier curve. A Cubic Bezier curve gets defined by P0, P1, P2, and P3 points. P0 and P3 are the curve's start and end, and, in CSS, these points are fixed as the coordinates are ratios. P0 is (0, 0) and represents the initial time and the initial state, and P3 is (1, 1) and represents the final time and the final state. We use the cubic-bezier() function with the animation-timing-function and transition-timing-function properties.",
      },
    },
    {
      '@type': 'Question',
      name: 'What makes the built-in curves different from the cubic-bezier() function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main difference between the CSS built-in curves and the cubic-bezier() function is that the function can make the animation exceed its range. The control points on the curve can have any y coordinates: even negative or huge ones. Then the Bezier curve would also extend exceptionally low or high, making the animation go beyond its normal range.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the timing function CSS steps() function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The steps() function allows you to specify intervals for the timing function. It takes one or two parameters, separated by a comma: a positive integer and an optional start or end value. If we do not include a second parameter, it defaults to end.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the CSS transitionend event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The transitionend event fires when a CSS transition reaches completion. If a transition gets removed before completion, the transition-property deletes, or the display attribute changes to none, the event is not triggered.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you describe what CSS keyframes are and how we utilize them in web development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The @keyframes CSS at-rule controls the intermediate steps in a CSS animation sequence by defining styles for keyframes (or waypoints) along the animation sequence. This process gives more control over the intermediate steps of the animation sequence than transitions.',
      },
    },
  ],
};

export default StructuredData;
