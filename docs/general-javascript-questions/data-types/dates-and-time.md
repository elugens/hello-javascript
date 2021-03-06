---
title: Date and Time
description: JavaScript dates and times are represented by the Date object. Date objects
  represent a single moment in time in a platform-independent format. Interview
  Answer
sidebar_position: 11
sidebar_label: Date and Time
keywords:
  - javascript dates
  - javascript time
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - date object
  - interview questions
  - interview answers
  - js
tags:
  - date object
  - javascript dates
  - interview answers
  - interview questions
lastmod: 2022-05-01T22:21:11.156Z
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/DateTimeSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Date and Time | JavaScript Frontend Phone Interview Answers</title>
</head>

**Data Types: Date and Time**

<CloseAllAnswers />

### Define what the Date object is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.</div><br />
  <div><strong>Technical Response:</strong> JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC. These date and time objects are not the same as the UNIX epoch (the number of seconds elapsed since midnight on January 1, 1970, UTC), the principal base value for computer-recorded date and time values. It's essential to keep in mind that while the time value at the heart of a Date object is UTC, the primary methods to fetch the date and time or its components all work in the local (i.e., host system) time zone and offset.
  </div>
  </div>
</details>

---

### How do you create a new Date object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can create a new Date object by calling new Date() in our variable assignment.</div><br />
  <div><strong>Technical Response:</strong> JavaScript Date object creation is relatively straightforward. A call to the Date object gets done by calling (new Date()). That returns the unformatted Date object when invoked in your code.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let now = new Date();
alert(now); // shows current date/time
```

  </div>
  </div>
</details>

---

### What is an integer number representing the number of milliseconds that have passed since the beginning of 1970 called?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A "timestamp" in JavaScript represents the number of milliseconds that have transpired since January 1, 1970.</div><br />
  <div><strong>Technical Response:</strong> An integer number representing the number of milliseconds since 1970 is called a timestamp. It is a lightweight numeric representation of a date. We can always create a date from a timestamp using the new Date(timestamp) and convert the existing Date object to a timestamp using the date.getTime() method. You should be aware that dates before 01.01.1970 have a negative timestamp.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert(Dec31_1969);
```

  </div>
  </div>
</details>

---

### Can you use a date string format to create dates in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, if there is a single argument, and it is a string, it is parsed automatically. The algorithm is the same as Date.parse (returns a timestamp) used to parse date strings.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> new Date(???datestring???);<br /><br />

  <div></div>

```js
let date = new Date('2017-01-26');
alert(date);
// The time is not set, so it's assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in
// So the result could be
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// or
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)
```

  </div>
  </div>
</details>

---

### What is the difference between Date.parse() and Date(datestring)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main difference between Date.parse(), and Date(datestring) is Date.parse() returns milliseconds, and Date(datestring) does not. It returns the actual UTC date string requested.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let date = Date.parse('01-02-2021'); // get timestamp returns 1609574400000
let date2 = new Date(1609574400000); // using timestamp

console.log(date); // returns 1609574400000
console.log(date2); // returns 2021-01-02T08:00:00.000Z
```

  </div>
  </div>
</details>

---

### What is the difference between the getYear() and getFullYear() methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The getFullYear() method returns the year of the specified date according to local time, and getYear() method is deprecated. We should not use it.</div><br />
  <div><strong>Technical Response:</strong> The getFullYear() method returns the year of the specified date according to local time. The getYear() method is deprecated, and you should not use it but instead follow the current MDN recommendations (It does not work well with date years after 2000).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let date = new Date();
let year = date.getFullYear();
console.log(year); // returns 2021
```

  </div>
  </div>
</details>

---

### Can you explain the function and syntax of the date object getMonth() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To get the month and specify the date we want. First, we must create a new date with a variable assignment and the "new" date object. You can access the month with the variable.getMonth() method. The return value will be a number between the 0-11 index.</div><br />
  <div><strong>Technical Response:</strong> The getMonth() method returns the month on the specified date according to local time as a zero-based value (zero indicates the year's first month). It returns an integer number, between 0 and 11, representing the month on the given date according to local time. 0 corresponds to January, 1 to February, and more.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> dateObj.getMonth();<br /><br />

  <div></div>

```js
let Xmas95 = new Date('December 25, 1995 23:15:30');
let month = Xmas95.getMonth();

console.log(month); // 11
```

  </div>
  </div>
</details>

---

### Can you please explain the function and syntax of the date object getDate() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The getDate() method returns the day of the month for the specified date according to local time. An integer number between 1 and 31 represents the day of the month for the given date.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> dateObj.getDate();<br /><br />

  <div></div>

```js
let Xmas95 = new Date('December 25, 1995 23:15:30');
let day = Xmas95.getDate();

console.log(day); // 25
```

  </div>
  </div>
</details>

---

### Can you explain the function and syntax of the date object getDay() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The getDay() method returns the day of the week for the specified date according to local time, where 0 represents Sunday.</div><br />
  <div><strong>Technical Response:</strong> The getDay() method returns the day of the week for the specified date according to local time, where 0 represents Sunday. For the day of the month, see Date.prototype.getDate(). An integer number, between 0 and 6, corresponds to the week's day for the given date, according to local time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and following days in order.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> dateObj.getDay();<br /><br />

  <div></div>

```js
let Xmas95 = new Date('December 25, 1995 23:15:30');
let weekday = Xmas95.getDay();

console.log(weekday); // 1
```

  </div>
  </div>
</details>

---

### What is UTC, regarding date time, and are there any methods to process UTC in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> UTC is an acronym for Universal Time Coordinated. The approach to extract the desired information is straightforward. We simply add UTC for any of the UTC methods such as getUTCFullYear(), getUTCMonth(), and getUTCDay(). Two special methods do not have a UTC-variant: getTime and getTimezoneOffset.</div><br />
  <div><strong>Technical Response:</strong> UTC is an acronym for Universal Time Coordinated, established in 1972. This time was called Greenwich Mean Time (GMT) but now referred to as Coordinated Universal Time or Universal Time Coordinated (UTC). In JavaScript, there are also their UTC-counterparts, that return day, month, year and so on for the time zone UTC+0: getUTCFullYear(), getUTCMonth(), getUTCDay(). Just insert the "UTC" right after "get". Besides the given methods, two special ones do not have a UTC-variant, including getTime and getTimezoneOffset.
  </div>
  </div>
</details>

---

### Is there a way to set dates and times in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there are several methods, including setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds, and setTime.</div><br />
  <div><strong>Technical Response:</strong> Yes, there are several methods, including setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds, and setTime. setTime sets the completed date in milliseconds based on the JavaScript initialized date of 01/01/1970 UTC. Every one of them except setTime() has a UTC-variant for use.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let today = new Date();

today.setHours(0);
alert(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
alert(today); // still today, now 00:00:00 sharp.
```

  </div>
  </div>
</details>

---

### Data commonly has out-of-range date information. How does JavaScript handle dates that are formatted incorrectly?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Date object includes an auto-correction feature that tackles incorrectly formed dates. We can enter values out of range, and it will auto-adjust. The Date object also keeps track of the number of days within a single date to provide accurate future or past date results.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // ...is 1st Feb 2013!

// Another example
let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

alert(date); // 1 Mar 2016
```

  </div>
  </div>
</details>

---

### What happens when a Date object converts to a number?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When a Date object converts to a number, it becomes the timestamp same as date.getTime().
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Date to number conversion using the unary operator
let date = new Date();
alert(+date); // returns the number of milliseconds, same as date.getTime()

// Time Measurement: Speed Test
let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

alert(`The loop took ${end - start} ms`);
```

:::note

The critical side effect: JavaScript can subtract date numbers; the result is their difference in milliseconds. That can be used for time measurements and equip an application with more powerful time-related features.

:::

  </div>
  </div>
</details>

---

### Can you explain the function and syntax of the Date.now() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The static Date.now() method returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.</div><br />
  <div><strong>Technical Response:</strong> We don't need the Date object if we just want to measure time. Date.now() is a special method that returns the current timestamp, and it has the same semantic value as new Date(). getTime() returns a Time object without creating an intermediary Date object. As a result, it is speedier and puts less strain on waste collection. It's primarily done for convenience or when we need the necessary performance, such as in JavaScript games or other specialized applications.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Date.now();<br /><br />

  <div></div>

```js
let start = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done

alert(`The loop took ${end - start} ms`); // subtract numbers, not dates
```

  </div>
  </div>
</details>

---

### Can you please explain the function and syntax of the Date.parse() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The parse() method parses a date string and returns the number of milliseconds between the date string and midnight of January 1, 1970.</div><br />
  <div><strong>Technical Response:</strong> Date.parse(str) parses a string in the specified format and returns the timestamp (number of milliseconds since January 1, 1970, UTC+0). If the format is invalid, NaN is returned. The string format should be (YYYY-MM-DDTHH:mm:ss.sssZ). The breakdown of the format is YYYY-MM-DD as the date year-month-day. The character "T" is used as the delimiter. HH:mm:ss.sss is the time relative to hours, minutes, seconds, and milliseconds. The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z would mean UTC+0.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Date.parse();<br /><br />

  <div></div>

```js
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert(ms); // 1327611110417  (timestamp)

// We can instantly create a new Date object from the timestamp

let date = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));

alert(date);
```

  </div>
  </div>
</details>

---
