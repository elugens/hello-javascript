---
title: Proxy Design Pattern
description: A proxy is a structural pattern that lets you provide a substitute for another object. The Proxy Pattern acts as a placeholder for another object.
sidebar_position: 7
sidebar_label: Proxy
keywords:
  - proxy pattern
  - proxy design pattern
  - design patterns
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - object
  - interview questions
  - interview answers
  - js
tags:
  - proxy pattern
  - proxy design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ProxySchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Proxy Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Proxy Pattern**

<CloseAllAnswers />

---

### What is the Proxy Design Pattern in JavaScript?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Proxy pattern is a structural pattern that allows an object to act as a placeholder for another object, controlling access and providing additional functionality such as caching and security.<br/>
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> The Proxy Pattern, as the name suggests, functions as a proxy or placeholder for another object to manage access, decrease cost, and simplify the code. The proxy could connect to almost anything – a network connection, a large object in memory, a file, or another resource that would have been expensive or impossible to recreate.<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

<img src="/img/javascript-proxy.jpg" /><br /><br />

**This pattern's objects are as follows:**

**Client** -- Example code: _the run() function_

- To request an operation, call proxy.

**Proxy** -- Example code: _GeoProxy_

- provides a user interface similar to the real object
- and maintains a reference to the real object that allows the proxy to access it.
- Responds to requests and forwards them to the actual object.

**RealSubject** -- Example code: _GeoCoder_

- specifies the actual object for which service is getting requested

<br/>

```js
function Flyweight(make, model, processor) {
  this.make = make;
  this.model = model;
  this.processor = processor;
}

let FlyWeightFactory = (function () {
  let flyweights = {};

  return {
    get: function (make, model, processor) {
      if (!flyweights[make + model]) {
        flyweights[make + model] = new Flyweight(make, model, processor);
      }
      return flyweights[make + model];
    },

    getCount: function () {
      let count = 0;
      for (let f in flyweights) count++;
      return count;
    },
  };
})();

function ComputerCollection() {
  let computers = {};
  let count = 0;

  return {
    add: function (make, model, processor, memory, tag) {
      computers[tag] = new Computer(make, model, processor, memory, tag);
      count++;
    },

    get: function (tag) {
      return computers[tag];
    },

    getCount: function () {
      return count;
    },
  };
}

let Computer = function (make, model, processor, memory, tag) {
  this.flyweight = FlyWeightFactory.get(make, model, processor);
  this.memory = memory;
  this.tag = tag;
  this.getMake = function () {
    return this.flyweight.make;
  };
  // ...
};

function run() {
  let computers = new ComputerCollection();

  computers.add('Dell', 'Studio XPS', 'Intel', '5G', 'Y755P');
  computers.add('Dell', 'Studio XPS', 'Intel', '6G', 'X997T');
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'U8U80');
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'NT777');
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', '0J88A');
  computers.add('HP', 'Envy', 'Intel', '4G', 'CNU883701');
  computers.add('HP', 'Envy', 'Intel', '2G', 'TXU003283');

  console.log('Computers: ' + computers.getCount());
  console.log('Flyweights: ' + FlyWeightFactory.getCount());
}

run();

/*

OUTPUT:

Computers: 7
Flyweights: 2

*/
```

</div><br />
  <div><strong className="codeExample">Code Example #2:</strong><br /><br />

<img src="/img/proxy-pattern.png" /><br /><br />

```js
/*  External API*/
var FlightListAPI = function () {
  //creation
};

FlightListAPI.prototype = {
  getFlight: function () {
    // get master list of flights
    console.log('Generating flight List');
  },

  searchFlight: function (flightDetails) {
    // search through the flight list based on criteria
    console.log('Searching for flight');
  },

  addFlight: function (flightData) {
    // add a new flight to the database
    console.log('Adding new flight to DB');
  },
};

// creating the proxy
var FlightListProxy = function () {
  // getting a reference to the original object
  this.flightList = new FlightListAPI();
};

FlightListProxy.prototype = {
  getFlight: function () {
    return this.flightList.getFlight();
  },

  searchFlight: function (flightDetails) {
    return this.flightList.searchFlight(flightDetails);
  },

  addFlight: function (flightData) {
    return this.flightList.addFlight(flightData);
  },
};

console.log('----------With Proxy----------');
const proxy = new FlightListProxy();
console.log(proxy.getFlight());
/*
 
OUTPUT
 
----------With Proxy----------
Generating flight List
 
 
*/
```

</div><br />
  <div><strong className="codeExample">Code Example #3:</strong><br /><br />

```js
class GetCapital {
  getMycapital(country) {
    if (country === 'Pakistan') {
      return 'Islamabad';
    } else if (country === 'India') {
      return 'New Delhi';
    } else if (country === 'Canada') {
      return 'Ottawa';
    } else if (country === 'Egypt') {
      return 'Cairo';
    } else {
      return '';
    }
  }
}

class ProxyGetCapital {
  constructor() {
    this.capital = new GetCapital();
    this.cache = {};
  }

  getMycapital(country) {
    if (!this.cache[country]) {
      var value = this.capital.getMycapital(country);
      this.cache[country] = value;
      return `${value}--Returning From GetCaptial`;
    } else {
      return `${this.cache[country]}--Returning from Cache`;
    }
  }
}

var capital = new ProxyGetCapital();
console.log(capital.getMycapital('Pakistan'));
console.log(capital.getMycapital('India'));
console.log(capital.getMycapital('Canada'));
console.log(capital.getMycapital('Egypt'));
console.log(capital.getMycapital('Egypt'));
console.log(capital.getMycapital('Egypt'));
console.log(capital.getMycapital('Pakistan'));
console.log(capital.getMycapital('Pakistan'));
console.log(capital.getMycapital('Canada'));

/*

OUTPUT:

Islamabad--Returning From GetCaptial
New Delhi--Returning From GetCaptial
Ottawa--Returning From GetCaptial
Cairo--Returning From GetCaptial
Cairo--Returning from Cache
Cairo--Returning from Cache
Islamabad--Returning from Cache
Islamabad--Returning from Cache
Ottawa--Returning from Cache

*/
```

</div>
 </div>

</details>

---

### What is the main purpose of the Proxy Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Its purpose is to create a surrogate or stand-in for another object to control its access or simplify its interface.
  </div>
  </div>
</details>

---

### The Proxy pattern belongs to which design pattern family?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Proxy pattern belongs to the structural pattern family, which is concerned with the composition of classes and objects to form larger structures.
    </div>
  </div>
</details>

---

### What is a good use case for the Proxy Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> A good use case for the Proxy pattern in JavaScript is providing controlled access to sensitive objects, caching expensive operations, or implementing remote services.<br/>
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> The proxy pattern attempts to lighten the load on the target object. It is useful when dealing with large applications that make many network requests. Because delays may occur when responding to such requests, using a proxy pattern prevents the target object from becoming overburdened with requests.<br/><br/>
      HTTP requests are a real-world example. Because these are costly operations, the proxy pattern aids in reducing the number of requests forwarded to the target.<br/>
    </div>

<br />
  </div>
</details>

---

### What are some of the advantages of employing the Proxy pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Advantages of using the Proxy pattern in JavaScript include increased security, improved performance, and greater flexibility in controlling access to objects and their methods.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Benefits of the Proxy Pattern.
    </div>
    <br />
    <div></div>

- You have control over the service object without the client being aware of it.
- You can control the lifecycle of the service object even if your clients do not care.
- The proxy functions even if the service object is not ready or unavailable.
- Open/Closed Principle. Users can add new proxies without interrupting the service or clients.

<br />
  </div>
</details>

---

### What are some of the disadvantages of employing the Proxy pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Disadvantages of using the Proxy pattern in JavaScript include increased complexity due to the use of additional objects, and potential performance overhead when using remote proxies.
    </div>
    <br />
    <div>
      <strong>TechnicalResponse:</strong> Drawbacks of the Proxy Pattern.
    </div>
    <br />
    <div></div>

- Because you'll be introducing many new classes, the code may become more complicated.
- The service's response time may be delayed or hindered.

<br />
  </div>
</details>

---

### Are there any alternatives to using the Proxy Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Yes, there are alternative patterns to the Proxy pattern in JavaScript, including the Decorator pattern, the Adapter pattern, and the Facade pattern.
    </div>
    <br />
  </div>
</details>

---

### How does the Proxy Pattern provide additional security?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By controlling access to the object, proxies can enforce permissions, validation, or other security measures.
  </div>
  </div>
</details>

---

### How can the Proxy Pattern simplify complex interfaces?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By providing a simpler interface to interact with complex underlying objects, easing usage and reducing potential errors.
  </div>
  </div>
</details>

---

### Why would you use the Proxy Pattern over direct interaction?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using proxies can add control, simplify interfaces, manage resource-intensive operations, and separate concerns, improving code maintainability.
  </div>
  </div>
</details>

---
