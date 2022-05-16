const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is the event loop defined in the JavaScript engine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In computer science, the event loop is a programming construct or design pattern that waits for and dispatches events or messages in a program. The event loop concept is quite simple. There is an endless loop where the JavaScript engine waits for tasks, executes them, and then sleeps, waiting for more tasks. The general algorithm of the engine includes simple steps. Where there are tasks execute theme, starting with the oldest task first. Then, sleep until a new task appears, then go to one. That is a formalization of what we see when browsing a page. The JavaScript engine does nothing most of the time, and it only runs if a script/handler/event activates.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are the tasks from the queue processed or handled?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The event loop handles tasks in the queue in the order they are received. When the browser engine completely processes the script, it handles the mousemove event, followed by the setTimeout handler, and so on.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best method to avoid difficulties caused by CPU-intensive tasks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can avoid problems by splitting the big task into pieces or chunks. The goal is to split your tasks into smaller chunks to reduce the load on the engine. We should note that the engine is limited to the number of tasks it can process within a given time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Microtask in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Microtasks come solely from our code. Promises usually create them: an execution of .then/catch/finally handler becomes a microtask. Microtasks are used \u201Cunder the cover\u201D of await, as it is another form of promise handling. There is also a special function `queueMicrotask(func)` that queues func for execution in the microtask queue.<br/> Immediately after every macro task, the engine executes all tasks from the microtask queue before running any other macro tasks or rendering or anything else. All microtasks complete before any other event handling, rendering, or macrotask.',
      },
    },
  ],
};

export default StructuredData;
