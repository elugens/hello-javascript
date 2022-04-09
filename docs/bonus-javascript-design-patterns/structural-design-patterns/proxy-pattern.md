---
title: Proxy Design Pattern
description: Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.
sidebar_position: 7
sidebar_label: Proxy
---

**Structural: Proxy Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the proxy design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> As the name suggests, the Proxy Pattern provides a surrogate or placeholder for another object to control access, reduce cost, and reduce complexity. The proxy could interface to anything – a network connection, a large object in memory, a file, or some other resource that is expensive or impossible to duplicate.<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

<img src="/img/javascript-proxy.jpg" /><br /><br />

**The objects participating in this pattern are:**

**Client** -- In example code: _the run() function_

- calls Proxy to request an operation

**Proxy** -- In example code: _GeoProxy_

- provides an interface similar to the real object
- maintains a reference that lets the proxy access the real object
- handles requests and forwards these to the real object

**RealSubject** -- In example code: _GeoCoder_

- defines the real object for which service is requested

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
  <div><strong className="codeExample">Code Example #3:</strong> Modern ES2015+<br /><br />

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

### In what pattern category does the Proxy pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Proxy pattern belongs to the Structural design pattern category.
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
      <strong>Interview Response:</strong> The proxy pattern tries to reduce the workload on the target object. You can use it when dealing with heavy applications that perform a lot of network requests. Since delays could occur when responding to such requests, using a proxy pattern will allow the target object to not get overburdened with requests.<br/><br/>
      A real-life example is HTTP requests. These are expensive operations; hence, the proxy pattern helps in reducing the number of requests forwarded to the target.
    </div>

<br />
  </div>
</details>

---

### What are some of the benefits of using the Proxy pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits of the Proxy Pattern.
    </div>
    <br />
    <div></div>

- You can control the service object without clients knowing about it.
- You can manage the lifecycle of the service object when clients don’t care about it.
- The proxy works even if the service object isn’t ready or is not available.
- Open/Closed Principle. You can introduce new proxies without changing the service or clients

<br />
  </div>
</details>

---

### What are some of the drawbacks of using the Proxy pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Drawbacks of the Proxy Pattern.
    </div>
    <br />
    <div></div>

- The code may become more complicated since you need to introduce a lot of new classes.
- The response from the service might get delayed or disrupted.

<br />
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
