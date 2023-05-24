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

### Can you define what the Date object is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Date object is a built-in object in JavaScript that represents a specific point in time and provides methods for working with dates and times.
</div><br />
  <div><strong>Technical Response:</strong> JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC. These date and time objects are not the same as the UNIX epoch (the number of seconds elapsed since midnight on January 1, 1970, UTC), the principal base value for computer-recorded date and time values. It's essential to keep in mind that while the time value at the heart of a Date object is UTC, the primary methods to fetch the date and time or its components all work in the local (i.e., host system) time zone and offset.
  </div>
  </div>
</details>

---

### What is the purpose of the Date object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Date object is used to work with dates and times in JavaScript, allowing developers to create, manipulate, and format date and time values.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let date = new Date();
console.log(date); // Logs the current date and time
```

  </div>
  </div>
</details>

---

### How can you get the current date and time in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The current date and time can be obtained in JavaScript using the built-in Date object's constructor without any arguments.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let date = new Date();
console.log(date); // Logs the current date and time
```

  </div>
  </div>
</details>

---

### Does JavaScript have a time object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript has a Date object, which includes both date and time functionality, but it does not have a separate "time object".<br /><br />
  </div>
  </div>
</details>

---

### How do you create a new Date object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A new Date object is created in JavaScript using the built-in Date constructor with optional arguments for the year, month, day, hour, minute, second, and millisecond.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let currentDate = new Date();
console.log(currentDate); // Logs the current date and time
```

  </div>
  </div>
</details>

---

### What is an integer number representing the number of milliseconds that have passed since the beginning of 1970 called?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> he integer number representing the number of milliseconds since the beginning of 1970 is called Unix Time or Epoch Time.</div><br />
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

<strong>Syntax: </strong> new Date(“datestring”);<br /><br />

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
  <div><strong>Interview Response:</strong> The getYear() method returns the year minus 1900, while getFullYear() returns the four-digit year. The getYear() method is deprecated and should not be used.</div><br />
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

### Can you explain the function of the date object getMonth() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The getMonth() method of the Date object in JavaScript returns the numeric month (0-11) of a date, where 0 equals January and 1 equals February, and so on.</div><br />
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

### Can you please explain the function of the date object getDate() method?

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

### How does the object getDay() method function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The getDay() method of the Date object in JavaScript returns the numeric value of the day of the week (0-6) for a given Date object, where Sunday is 0 and Saturday is 6.</div><br />
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

### What does UTC stand for in programming?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In programming, UTC stands for Coordinated Universal Time, which is a time standard that provides a consistent, global time reference and is used as a basis for local time zones.<br /><br />
  </div>
  </div>
</details>

---

### What is UTC, regarding date time, and are there any methods to process UTC in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the context of date and time, UTC stands for Coordinated Universal Time, and JavaScript provides several methods for working with UTC, including getUTCDate(), getUTCDay(), getUTCMonth(), and getUTCHours().</div><br />
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
  <div><strong>Interview Response:</strong> JavaScript handles out-of-range dates by adjusting them to be within the appropriate range of valid dates.
</div><br />
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
  <div><strong>Interview Response:</strong> When a Date object is converted to a timestamp, it returns the number of milliseconds since January 1, 1970, 00:00:00 UTC. This is called the Unix Epoch.
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

### How does the Date.now() method function in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Date.now() method in JavaScript returns the current timestamp value in milliseconds since January 1, 1970 (UTC) without creating a new Date object.</div><br />
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

### Can you explain the function of the Date.parse() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Date.parse() method in JavaScript parses a string representation of a date and returns its corresponding timestamp value.</div><br />
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

### What is the Unix Epoch time, and how can you convert a Unix timestamp to a JavaScript Date object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Unix Epoch time is the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC. You can convert a Unix timestamp to a JavaScript Date object by multiplying the timestamp by 1000 and passing the result to the new Date() constructor.
<br /><br />
  </div>
  </div>
</details>

---

### What is the difference between UTC and local time in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> UTC is a standard time zone used globally, whereas local time is the time zone of the user's computer. UTC does not take into account daylight saving time, while local time does. In JavaScript, the methods for working with UTC and local time are different.
<br /><br />
  </div>
  </div>
</details>

---

### How can you format a date to specific in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can format a date in JavaScript using various methods of the Date object, such as toLocaleDateString() and toLocaleTimeString(). You can also use third-party libraries such as Moment.js for more advanced formatting options.<br /><br />
  </div>
  </div>
</details>

---

### How can you calculate the difference between two dates in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can calculate the difference between two dates in JavaScript by subtracting the two dates and converting the result into the desired units. (e.g., milliseconds, seconds, days).</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let date1 = new Date('2023-05-23');
let date2 = new Date('2023-05-30');

// Get the difference in milliseconds and convert it to days
let diffDays = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24); 

console.log(diffDays); // Outputs 7
```

  </div>
  </div>
</details>

---

### How can you add or subtract time from a Date object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To add/subtract time, create a new Date object, then use setTime() method, adding/subtracting milliseconds to/from the original date's getTime() value.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let date = new Date(); 
date.setTime(date.getTime() + (3*60*60*1000)); // adds 3 hours

let date = new Date(); 
date.setTime(date.getTime() - (30*60*1000)); // subtracts 30 minutes
```

  </div>
  </div>
</details>

---

### Can we use the getTime() method to add or subtract from the Date Object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, `getTime()` returns milliseconds since Unix Epoch, which you can add to or subtract from, then use `setTime()` to modify the Date object.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let date = new Date(); 
date.setTime(date.getTime() + (3*60*60*1000)); // adds 3 hours
```

  </div>
  </div>
</details>

---

### What is the maximum and minimum date that can be represented in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The maximum date that can be represented in JavaScript is approximately 285,616 years in the future (8640000000000000 milliseconds after January 1, 1970). The minimum date is approximately 271,821 years BCE (8640000000000000 milliseconds before January 1, 1970).<br /><br /> In days, JavaScript can represent dates from -100,000,000 days to 100,000,000 days relative to January 1, 1970 UTC, about 273,790 BCE to 273,790 CE.<br /><br />
  </div>
  </div>
</details>

---
