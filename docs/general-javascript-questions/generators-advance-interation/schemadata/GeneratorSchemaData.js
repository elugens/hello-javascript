const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the distinction between a generator and a regular function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regular functions return only one value (or nothing). Generators can return (“yield”) multiple values, one after another, on-demand. They work great with iterables, allowing to create data-streams with ease. We need a special syntax construct to create a generator: function*, the so-called “generator function”. Generator functions behave differently from regular ones. When such a function gets called, it does not run its code. Instead, it returns a unique object, called “generator object”, to manage the execution.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function of the generator “next” method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The next() method returns an object with two properties, “done” and value. The done property returns false if a value exists; otherwise, true if the value returns undefined.',
      },
    },
    {
      '@type': 'Question',
      name: 'What generator function creation syntax is acceptable in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'wo syntaxes are used to create generators, including the pre-fixed (function*f(…)) and post-fixed ( function*f(…) ) function generator implementations. Both syntaxes are correct, but usually, the first syntax is preferred, as the star * denotes that it’s a generator function, it describes the kind, not the name, so it should stick with the function keyword.',
      },
    },
    {
      '@type': 'Question',
      name: 'What differentiates a generator from an iterator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While custom iterators are a useful tool, their creation requires careful programming due to the need to maintain their internal state explicitly. Generator functions provide a powerful alternative, and they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. We use the function* syntax to create a new Generator function.',
      },
    },
    {
      '@type': 'Question',
      name: 'If you attempt to use the return keyword to return a value at the end of a generator. What happens when you iterate over the values with a for…of loop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Since the generator has the done property with a false value for each value, excluding the last value of done equaling true. When you attempt to return a value instead of yielding one, the last value does not return because done is set to true. It’s because for..of iteration ignores the last value, when done: true.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are function generators iterable in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generator functions do not initially execute their code when called. Instead, they return a particular type of iterator, called a Generator. The function can be called as many times as desired and returns a new Generator each time. Each generator iterates once.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the power of the yield keyword in JavaScript generator functions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generators are both powerful and flexible because yield is multi-functional. It not only returns the result outward but can pass a value inside the generator when we call generator.next(arg) with an argument, and that argument becomes the result of yield.',
      },
    },
  ],
};

export default StructuredData;
