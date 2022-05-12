const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you briefly explain the behavior of the (try..catch) error handling process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The try...catch construct has two main blocks: try, and then catch<br /><br />\r\n  <strong>Steps:</strong><br /><br />\r\n  <ol>\r\n    <li>First, the code in try &#123;...&#125; executes.</li>\r\n    <li>If there were no errors, then catch(err) is ignored: the execution reaches the end of try and goes on, skipping catch.</li>\r\n    <li>If an error occurs, the try execution stops, and control flows to the beginning of catch(err). The err variable (we can use any name for it) contains an error object with details about what happened.</li>\r\n  </ol>',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain how the JavaScript engine works with the (try..catch) block?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most striking aspect of the interface with the JavaScript engine is that the try..catch statement only works for runtime failures. The code must be runnable for \'try..catch\' to work. In other words, it should be legitimate JavaScript. It does not work if the code in the "try..catch" block incorrectly gets written. The JavaScript engine examines the code before running it. The errors that occur during the reading phase are called "parse-time" errors, and they are unrecoverable (from inside that code). This behavior is due to the engine\'s inability to comprehend the code. As a result, try...catch can only handle failures in "valid" code. Such mistakes commonly get referred to as "runtime errors" or "exceptions" in some instances.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the (try..catch) block work synchronously or asynchronously?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The JavaScript try..catch method operates synchronously when running. If an exception occurs in "scheduled" code, such as setTimeout, try..catch does not catch it. After the engine has exited the try..catch construct, the function gets called. To catch an exception within a scheduled function, try..catch must be present.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the JavaScript error object work inside the try..catch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JavaScript generates an object containing its details when an error occurs. The object then gets passed as an argument to catch. The error object has two significant fields for all built-in errors: the name and message properties. Like an undefined variable, err.name reflects the name of the error and produces a ReferenceError. The err.message returns a textual message reflecting the error details. In addition to the name and message properties, other non-standard properties are available in most environments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the stack error object property does?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The error object stack property returns a string with information about the sequence of nested calls that led to the error within the current call stack. It is commonly used for JavaScript debugging purposes and helps resolve issues within the code.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the throw operator do in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The throw operator/statement throws a user-defined exception in simple terms. The current function terminates, and control hands off to the first catch block on the call stack.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean to rethrow an error in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no special "rethrow" keyword in JavaScript. You throw() the error you caught, which maintains the original stack trace recorded by the error as you "pass it back up" the call stack.<br /><br />\r\n  <strong>More specifically, the "rethrowing" approach gets described as follows:</strong><br /><br />\r\n  <ol>\r\n    <li>All errors get caught.</li>\r\n    <li>We examine the error object err in the catch(err)#123;...&#125; block.</li>\r\n    <li>We throw err if we don\u2019t know how to handle it.</li>\r\n  </ol>',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the try..catch..finally function in JavaScript error handling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, the try..catch..finally statement works in an ordered fashion. The first try block is where code execution happens. The catch statement executes if an exception gets thrown in the try block. The finally statement block contains all of the code executed after the try and catch statements resolve. If the try block executes without errors, the finally block gets executed. If the try statement results in an error, it passes the error to the catch block, and then and only then does the finally statement run.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are variables localized inside the (try..catch..finally) blocks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, as with everything in curly brackets (&#123;...&#125;), variables are localized to the “try..catch..finally” blocks individually. If a variable gets declared with one of the blocks, it is only accessible within that block.',
      },
    },
    {
      '@type': 'Question',
      name: 'Errors can happen in any part of the JavaScript environment, including the global space. Is there a way to handle errors in the global window environment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can use the global handler (global catch) window.onerror that is part of the Web API. The onerror property of the GlobalEventHandlers mixin is an EventHandler that processes error events. Error events fire at various targets for different kinds of errors, such as runtime errors or when a resource (such as an img or script tags) fails to load. Installing a global error event handler is useful for the automated collection of error reports.',
      },
    },
  ],
};

export default StructuredData;
