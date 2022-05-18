const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What purpose do localStorage and sessionStorage serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In simple terms, Web storage objects localStorage and sessionStorage allow us to save key/value pairs in the browser.',
      },
    },
    {
      '@type': 'Question',
      name: 'What exactly is the distinction between localStorage and sessionStorage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no difference between them except for the intended "non-persistence" of sessionStorage. The data stored in localStorage persists until explicitly deleted. Changes made are saved and available for all current and future visits to the site. For sessionStorage, changes are only available per tab. Changes made are saved and available for the current page in that tab until it is closed. Once it is closed, the stored data deletes.',
      },
    },
    {
      '@type': 'Question',
      name: 'We already have cookies. Why do we need additional storage objects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unlike cookies, web storage objects do not transfer to the host with each connection. Because of that, we can archive much more data. Most browsers allow at least two megabytes of data (or more) and have settings to configure that. Also, unlike cookies, the server cannot manipulate storage objects via HTTP headers. We can do everything in JavaScript. The data storage is bound to the origin (domain/protocol/port triplet). Different protocols or subdomains infer different storage objects; they cannot access data from each other.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you name the six methods used in localStorage/sessionStorage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, both storage objects (localStorage/sessionStorage) have the same methods and properties, including setItem, getItem, removeItem, clear, key, and length. As you can see, it is like a Map collection (setItem/getItem/removeItem) and allows access by index with key(index).',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the JavaScript localStorage object function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main feature of localStorage is sharing data between tabs. The data does not expire, and it remains after the browser restarts or the OS reboots. If we want to add new data to the localStorage we can use the setItem method, and if we want to parse it into the browser, we use the getItem method. We must be on the same origin (domain/port/protocol), but the URL path can be different. The localStorage archive gets shared between all windows with the same origin, so if we set the data in one window, the change becomes visible in another one. We can also use a plain object way of getting/setting keys.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is using Object-like access on localStorage a wise idea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technically, you can use object-like access on localStorage, but this approach does not meet the JavaScript recommendations. If the key is user-generated, it can be anything, like length or toString, or another built-in method of localStorage. In that case, getItem/setItem works fine, while object-like access fails. A storage event triggers when we modify the data, and that event does not happen for object-like access.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should we iterate through the localStorage object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is one notable thing about localStorage objects. They are not iterable on their own—one way to look at them is as an array. Local Storage objects have a length, so we can iterate over them using the key method. Another way is to use “for key in” (for in loop) localStorage loop, just as we do with regular objects. It iterates over keys and outputs a few built-in fields that we do not need. So, we need to filter fields from the prototype with hasOwnProperty check. Or get their “own” keys with Object.keys and then loop over them if needed. The latter works, because Object.keys only return the keys that belong to the object, ignoring the prototype.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the type of the key and value of storage objects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The key and value must be strings for storage objects. If they were of any other type, like a number or an object, it automatically converts to a string. We can also use JSON to store objects, and it is also possible to stringify the whole storage object, e.g., for debugging purposes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you briefly explain how the JavaScript sessionStorage object functions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use the sessionStorage object much less and less often than localStorage. The properties and methods are the same, but it is much more limited. Some of sessionStorages limitations include that it only exists if the tab remains open, and once it is closed, we have no more access to the session. One notable thing about session storage is it gets shared between iframes in the same tab. That object data also serves a page refresh, but not the closing or reopening of the URL in a new tab. That is because sessionStorage is bound not only to the origin but also to the browser tab. For that reason, Developers use sessionStorage sparingly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do storage events behave when we update the data in localStorage and sessionStorage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The storage event triggers when the data updates in localStorage or sessionStorage. The important thing is that the event triggers on all window objects where the storage is accessible, except the one that caused it. It is like a waterfall effect. Imagine you have two windows with the same site in each. localStorage gets shared between them. If both windows are listening for window.onstorage, each one will react to updates in the other one.',
      },
    },
  ],
};

export default StructuredData;
