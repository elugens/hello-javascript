const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Define what the Date object is in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC. These date and time objects are not the same as the UNIX epoch (the number of seconds elapsed since midnight on January 1, 1970, UTC), the principal base value for computer-recorded date and time values. It's essential to keep in mind that while the time value at the heart of a Date object is UTC, the primary methods to fetch the date and time or its components all work in the local (i.e., host system) time zone and offset.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you create a new Date object in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JavaScript Date object creation is relatively straightforward. A call to the Date object gets done by calling (new Date()). That returns the unformatted Date object when invoked in your code.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an integer number representing the number of milliseconds that have passed since the beginning of 1970 called?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An integer number representing the number of milliseconds since 1970 is called a timestamp. It is a lightweight numeric representation of a date. We can always create a date from a timestamp using the new Date(timestamp) and convert the existing Date object to a timestamp using the date.getTime() method. You should be aware that dates before 01.01.1970 have a negative timestamp.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you use a date string format to create dates in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if there is a single argument, and it is a string, it is parsed automatically. The algorithm is the same as Date.parse (returns a timestamp) used to parse date strings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Date.parse() and Date(datestring)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main difference between Date.parse(), and Date(datestring) is Date.parse() returns milliseconds, and Date(datestring) does not. It returns the actual UTC date string requested.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the getYear() and getFullYear() methods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The getFullYear() method returns the year of the specified date according to local time. The getYear() method is deprecated, and you should not use it but instead follow the current MDN recommendations (It does not work well with date years after 2000).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the date object getMonth() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The getMonth() method returns the month on the specified date according to local time as a zero-based value (zero indicates the year's first month). It returns an integer number, between 0 and 11, representing the month on the given date according to local time. 0 corresponds to January, 1 to February, and more.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you please explain the function and syntax of the date object getDate() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The getDate() method returns the day of the month for the specified date according to local time. An integer number between 1 and 31 represents the day of the month for the given date.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the date object getDay() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The getDay() method returns the day of the week for the specified date according to local time, where 0 represents Sunday. For the day of the month, see Date.prototype.getDate(). An integer number, between 0 and 6, corresponds to the week's day for the given date, according to local time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and following days in order.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is UTC, regarding date time, and are there any methods to process UTC in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UTC is an acronym for Universal Time Coordinated, established in 1972. This time was called Greenwich Mean Time (GMT) but now referred to as Coordinated Universal Time or Universal Time Coordinated (UTC). In JavaScript, there are also their UTC-counterparts, that return day, month, year and so on for the time zone UTC+0: getUTCFullYear(), getUTCMonth(), getUTCDay(). Just insert the "UTC" right after "get". Besides the given methods, two special ones do not have a UTC-variant, including getTime and getTimezoneOffset.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to set dates and times in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, there are several methods, including setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds, and setTime. setTime sets the completed date in milliseconds based on the JavaScript initialized date of 01/01/1970 UTC. Every one of them except setTime() has a UTC-variant for use.',
      },
    },
    {
      '@type': 'Question',
      name: 'Data commonly has out-of-range date information. How does JavaScript handle dates that are formatted incorrectly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Date object includes an auto-correction feature that tackles incorrectly formed dates. We can enter values out of range, and it will auto-adjust. The Date object also keeps track of the number of days within a single date to provide accurate future or past date results.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when a Date object converts to a number?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a Date object converts to a number, it becomes the timestamp same as date.getTime(). The critical side effect: JavaScript can subtract date numbers; the result is their difference in milliseconds. That can be used for time measurements and equip an application with more powerful time-related features.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the Date.now() method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We don't need the Date object if we just want to measure time. Date.now() is a special method that returns the current timestamp, and it has the same semantic value as new Date(). getTime() returns a Time object without creating an intermediary Date object. As a result, it is speedier and puts less strain on waste collection. It's primarily done for convenience or when we need the necessary performance, such as in JavaScript games or other specialized applications.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you please explain the function and syntax of the Date.parse() method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Date.parse(str) parses a string in the specified format and returns the timestamp (number of milliseconds since January 1, 1970, UTC+0). If the format is invalid, NaN is returned. The string format should be (YYYY-MM-DDTHH:mm:ss.sssZ). The breakdown of the format is YYYY-MM-DD as the date year-month-day. The character "T" is used as the delimiter. HH:mm:ss.sss is the time relative to hours, minutes, seconds, and milliseconds. The optional \'Z\' part denotes the time zone in the format +-hh:mm. A single letter Z would mean UTC+0.',
      },
    },
  ],
};

export default StructuredData;
