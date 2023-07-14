---
title: Flyweight Design Pattern
description: Can you explain the flyweight design pattern? The Flyweight pattern gets classified as a Structural design pattern. JavaScript interview questions.
sidebar_position: 6
sidebar_label: Flyweight
keywords:
  - flyweight pattern
  - flyweight design pattern
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
  - flyweight pattern
  - flyweight design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/FlyweightSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Flyweight Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Flyweight Pattern**

<CloseAllAnswers />

---

### What is the Flyweight Design Pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div><strong>Interview Response:</strong> The Flyweight pattern is a structural design pattern that aims to use shared memory efficiently for complex objects. This pattern is used when there's a need to create a large number of similar objects, which may cause a significant memory footprint.
    </div><br/>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

<img src="/img/javascript-flyweight.jpg" /><br /><br />

**This pattern's objects are as follows:**

**Client** -- Example code: _Computer_

- calls into FlyweightFactory to obtain flyweight objects

**FlyweightFactory** -- In example code: _FlyweightFactory_

- creates and manages flyweight objects
- If a flyweight is required and one does not exist, it constructs one.
- stores newly created flyweights for future requests

**Flyweight** -- In example code: _Flyweight_

- preserves intrinsic data for use throughout the application

In JavaScript, the Flyweight pattern can be implemented using a shared factory that produces objects sharing common properties. Here is an example using a simple game scenario where there are a number of soldiers, each can belong to one of several different factions.

```javascript
class Soldier {
    constructor(name, faction, weapon) {
        this.name = name;
        this.faction = faction;
        this.weapon = weapon;
    }
}

class Faction {
    constructor(name) {
        this.name = name;
    }
}

class SoldierFactory {
    constructor() {
        this.factions = {};
    }

    createFaction(name) {
        let faction = this.factions[name];
        if (!faction) {
            faction = new Faction(name);
            this.factions[name] = faction;
        }
        return faction;
    }

    createSoldier(name, factionName, weapon) {
        const faction = this.createFaction(factionName);
        return new Soldier(name, faction, weapon);
    }
}

// Client code
const factory = new SoldierFactory();

const soldier1 = factory.createSoldier('John', 'Red', 'Sword');
const soldier2 = factory.createSoldier('Bob', 'Red', 'Bow');
const soldier3 = factory.createSoldier('Alex', 'Blue', 'Sword');

console.log(soldier1, soldier2, soldier3);
```

In this example, the `Faction` objects are the "flyweights". Even though there may be a large number of `Soldier` objects, there's only one `Faction` object for each distinct faction name. The `SoldierFactory` creates and manages the `Faction` objects, ensuring that they are shared appropriately.

The client code creates `Soldier` objects via the factory. If two soldiers belong to the same faction, they will share the same `Faction` object. This can save a significant amount of memory if there are a large number of soldiers and a small number of factions.

</div>
 </div>
</details>

---

### The Flyweight pattern belongs to which design pattern family?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Flyweight pattern belongs to the structural pattern family, which is concerned with the composition of classes and objects to form larger structures.
    </div>
  </div>
</details>

---

### What types of objects are involved in the Flyweight Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the Flyweight pattern, two types of objects are involved: the flyweight objects, which are shared among multiple contexts, and the context objects, which contain unique state.
    </div><br />
    <div><strong>Technical Response:</strong> The Client, FlyweightFactory, and Flyweight are all part of the Flyweight pattern.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

In the Flyweight pattern, there are generally two types of objects involved:

1. Flyweight objects: These are the shared objects that contain the common data. The aim is to use these objects to minimize memory use.

2. Context objects: These are the objects which, along with flyweight objects, represent the original system objects. These objects contain the extrinsic state, which is the information that varies between the system objects.

**Here's an example to illustrate this:**

```javascript
// The 'flyweight' object
class Color {
  constructor(name) {
    this.name = name;
  }
}

// The 'flyweight' factory
class ColorFactory {
  constructor() {
    this.colors = {};
  }

  create(name) {
    let color = this.colors[name];
    if (!color) {
      color = new Color(name);
      this.colors[name] = color;
    }
    return color;
  }
}

// The 'context' object
class Ball {
  constructor(colorName, radius, factory) {
    this.radius = radius;
    this.color = factory.create(colorName);  // Reference to a flyweight color object
  }

  draw() {
    console.log(`Drawing a ${this.color.name} ball with radius ${this.radius}`);
  }
}

// Client code
const factory = new ColorFactory();

const ball1 = new Ball('Red', 5, factory);
const ball2 = new Ball('Blue', 3, factory);
const ball3 = new Ball('Red', 7, factory); // reuses 'Red' color from the first ball

ball1.draw();
ball2.draw();
ball3.draw();
```

In this example, the `Color` objects are the flyweights, which are created and managed by the `ColorFactory`. The `Ball` objects are the context objects. Each `Ball` has a `radius` property, which is part of its unique (extrinsic) state, and a `color` property, which is a reference to a shared (intrinsic) `Color` object. The `ColorFactory` ensures that each unique color name is associated with exactly one `Color` object, saving memory when there are many `Ball` objects with the same color.

  </div>
  </div>
</details>

---

### When should the Flyweight Pattern be used?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Flyweight pattern should be used when there is a large number of objects with similar characteristics, and memory usage needs to be optimized by sharing common data.
    </div><br />
    <div>
      <strong>Technical Response:</strong> We should use this pattern when our application has many objects that consume the same data or when memory storage costs are high. JavaScript uses this pattern to distribute a list of immutable strings throughout the program.<br/><br/>
      This pattern most commonly gets found in network programs or word processors, and it can be used in internet browsers to prevent the same images from loading. The flyweight pattern enables image caching. As a result, only new images are loaded from the Web when a web page loads, while existing ones get extracted from the cache.
    </div>
  </div>
</details>

---

### What are some of the advantages of employing the Flyweight pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Advantages of using the Flyweight pattern in JavaScript include reduced memory usage, improved performance, and increased scalability and flexibility in managing large sets of similar objects.
    </div>
  </div>
</details>

---

### What are some of the disadvantages of employing the Flyweight pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> It can increase complexity by splitting state and may lead to more complicated and error-prone code.
    </div><br/>
    <div>
      <strong>Technical Response:</strong> Disadvantages of using the Flyweight pattern in JavaScript include increased complexity due to separation of intrinsic and extrinsic state, and reduced security due to shared state.<br/><br/> Drawbacks of the Flyweight Pattern.
    </div><br/>

- When certain context data needs to be regenerated each time a flyweight method gets called, you may be sacrificing RAM for CPU cycles.
- The code becomes noticeably more complex with the Flyweight Pattern.
- New colleagues get perplexed as to why an entity's state gets partitioned.

<br />
  </div>
</details>

---

### Are there any alternatives to using the Flyweight pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Yes, Object Pooling is an alternative to Flyweight. It involves reusing objects that are expensive to create, instead of always creating new ones, thereby reducing memory and computational overhead.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong> Here is a simple example of Object Pooling in JavaScript.<br /><br />

  <div></div>

```javascript
class ObjectPool {
  constructor() {
    this._pool = [];
  }

  acquire() {
    return this._pool.length > 0 ? this._pool.pop() : new ExpensiveObject();
  }

  release(obj) {
    this._pool.push(obj);
  }
}

class ExpensiveObject {
  constructor() {
    this.data = 'Expensive Data';
  }
}

// Client code
const pool = new ObjectPool();
const obj1 = pool.acquire();
const obj2 = pool.acquire();

pool.release(obj1);
const obj3 = pool.acquire(); // Reuses obj1, doesn't create a new object
```

In this example, `ObjectPool` manages a pool of `ExpensiveObject` instances. When an object is requested (`acquire`), it either returns an existing object from the pool, or creates a new one if the pool is empty. When an object is done being used (`release`), it's returned to the pool for future reuse. This can save time and memory if `ExpensiveObject` is costly to create.

  </div>
  </div>
</details>

---

### In what cases is the Flyweight Design Pattern most beneficial?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It's beneficial when dealing with a large number of objects which have common, repeated state that can be externalized.
  </div>
  </div>
</details>

---

### How does the Flyweight Pattern reduce memory usage?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It reduces memory by sharing common data among objects instead of each object storing identical data.
  </div>
  </div>
</details>

---

### What are the two states in a Flyweight pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the Flyweight pattern, there are two states: intrinsic and extrinsic. Intrinsic state is shared and stored in the flyweight object, while extrinsic state is unique and must be passed in by the client.
  </div>
  </div>
</details>

---

### How does Flyweight handle intrinsic and extrinsic states?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Intrinsic states are shared and stored inside the Flyweight; extrinsic states are stored or computed by client objects.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

The Flyweight pattern separates intrinsic and extrinsic states.

- Intrinsic state is stored in the Flyweight objects, shared across multiple context objects.
- Extrinsic state is stored outside of the Flyweight and typically within the context objects.

**Here's an example of how this might be handled:**

```javascript
class TreeType {
    constructor(name, color) {
        this.name = name; // intrinsic state
        this.color = color; // intrinsic state
    }

    display(age, x, y) { // extrinsic state passed as arguments
        console.log(`Displaying a ${age}-year-old ${this.name} tree of color ${this.color} at (${x}, ${y})`);
    }
}

class TreeTypeFactory {
    constructor() {
        this.treeTypes = {};
    }

    getTreeType(name, color) {
        let type = this.treeTypes[name + color];
        if (!type) {
            type = new TreeType(name, color);
            this.treeTypes[name + color] = type;
        }
        return type;
    }
}

class Tree {
    constructor(x, y, age, treeType) {
        this.x = x; // extrinsic state
        this.y = y; // extrinsic state
        this.age = age; // extrinsic state
        this.treeType = treeType; // reference to a flyweight treeType object
    }

    display() {
        this.treeType.display(this.age, this.x, this.y);
    }
}

// Client code
const factory = new TreeTypeFactory();
const appleTreeType = factory.getTreeType('Apple', 'Green');
const orangeTreeType = factory.getTreeType('Orange', 'Orange');

const tree1 = new Tree(1, 2, 10, appleTreeType);
const tree2 = new Tree(2, 4, 7, orangeTreeType);
const tree3 = new Tree(3, 6, 12, appleTreeType); // reuses appleTreeType from tree1

tree1.display();
tree2.display();
tree3.display();
```

In this example, `TreeType` objects are the flyweights with intrinsic states (name and color). Each `Tree` object maintains its own extrinsic state (x, y, and age) and references a shared `TreeType`. The `TreeTypeFactory` ensures each unique combination of name and color has exactly one `TreeType` object.

  </div>
  </div>
</details>

---

### What's a Flyweight Factory and its role in the Flyweight Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A Flyweight Factory in JavaScript manages the creation and sharing of Flyweight objects. Its role is to prevent duplicate Flyweight objects, thus conserving memory and improving performance.
  </div>
  </div>
</details>

---

### Does the Flyweight Pattern affect performance? How?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it can improve memory usage and potentially improve performance but might increase complexity due to separating intrinsic and extrinsic states.
  </div>
  </div>
</details>

---

### How does the Flyweight Pattern affect scalability?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It increases scalability by reducing memory usage when dealing with a large number of objects.
  </div><br/>
  <div><strong>Technical Response:</strong> The Flyweight Pattern significantly improves scalability in JavaScript applications, especially in cases where large numbers of objects need to be created. By sharing common parts of object state among multiple objects instead of each object storing its state independently, the Flyweight Pattern reduces memory consumption. This makes it possible for the application to handle a larger number of objects within the same memory constraints, enhancing its ability to scale. However, it's worth noting that the Flyweight Pattern is most effective when there's a high degree of shared state among objects. If objects don't have much shared state, the memory savings will be less and the overhead of managing the shared state may even result in poorer performance. Therefore, it's important to evaluate whether the Flyweight Pattern is suitable for a given situation.
  </div>
  </div>
</details>

---

### What is a real-world example of the Flyweight Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It's often used in game development, where many similar objects, like trees or NPCs, share common properties.
  </div>
  </div>
</details>

---

### What are the downsides of the Flyweight Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It can increase complexity by splitting state and may lead to more complicated and error-prone code.
  </div>
  </div>
</details>

---
