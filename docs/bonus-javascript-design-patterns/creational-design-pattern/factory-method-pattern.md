---
title: Factory Method - Design Pattern
description: The factory pattern offers an interface for producing objects in a superclass while allowing subclasses to change the type of objects created.
sidebar_position: 1
sidebar_label: Factory Method
keywords:
  - factory method
  - factory design pattern
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
  - factory method
  - factory design pattern
  - design patterns
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/FactoryMethodSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Factor Method | JavaScript Interview Questions</title>
</head>

**Creational: Factory Pattern**

---

<AdSense />

---

<CloseAllAnswers />

### What is the Factory Pattern in JavaScript?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The factory design pattern is a programming pattern that provides a way to create objects without specifying their concrete classes. It uses a factory method to instantiate objects based on a set of rules or criteria.<br/>
    </div><br />
    <div>
      <strong>Technical Response:</strong> A Factory Method creates new objects as instructed by the client. One way to create new objects in JavaScript is by invoking a constructor function with the new operator. There are times when the client should not or does not know which of numerous candidates objects to instantiate. The Factory Method enables the client to delegate object creation while maintaining control over the type to be instantiated.<br/><br/>
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img src="/img/structure-factory-method.png" /><br /><br />

**The objects participating in this pattern are:**

**Creator** -- In example code: _Factory_

- the Factory object that creates new products
- implements factory method which returns newly created products

**AbstractProduct** -- _not used in JavaScript_

- declares an interface for products

**ConcreteProduct** -- In example code: _Employees_

- the manufactured product
- All products support the same interface (properties and methods)

<br />

:::note
Though the definition particularly mentions that an interface needs to be defined, we do not have interfaces in JavaScript. Therefore, we must implement it so that JavaScript translates into an interface.
:::

</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

In JavaScript, you can implement the Factory pattern like this.

```javascript
function CarMaker() {}

CarMaker.prototype.drive = function() {
    return `I am a ${this.type} and I can drive`;
}

// Static factory method
CarMaker.factory = function(type) {
    let constr = type,
        newCar;
    
    // Check if the constructor exists
    if(typeof CarMaker[constr] !== 'function') {
        throw {
            name: "Error",
            message: `${constr} does not exist`
        };
    }

    // At this point, the constructor is known to exist
    // Let's have it inherit the parent but only once
    if(typeof CarMaker[constr].prototype.drive !== 'function') {
        CarMaker[constr].prototype = new CarMaker();
    }

    // Create a new instance
    newCar = new CarMaker[constr]();
    
    return newCar;
}

// Define specific car makers
CarMaker.Compact = function() {
    this.type = 'Compact car';
};

CarMaker.Sedan = function() {
    this.type = 'Sedan car';
};

CarMaker.Suv = function() {
    this.type = 'SUV car';
};

// Usage:
let corolla = CarMaker.factory('Compact');
let camry = CarMaker.factory('Sedan');
let highlander = CarMaker.factory('Suv');

console.log(corolla.drive());  // I am a Compact car and I can drive
console.log(camry.drive());    // I am a Sedan car and I can drive
console.log(highlander.drive());// I am a SUV car and I can drive
```

In this example, the `CarMaker` factory has a `factory` method that creates a new object based on the `type` argument. Each type of car is a function constructor, and they all inherit from `CarMaker`.

  </div>
  </div>
</details>

---

### In what pattern category does the factory pattern belong?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The factory pattern belongs to the "Creational" design pattern category, which is used to create objects in a flexible and extensible manner.
    </div>
  </div>
</details>

---

### What is a factory method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of a factory method in JavaScript:

```javascript
// Product interface
class Product {
  constructor(name) {
    this.name = name;
  }
  // ...
}

// Concrete products
class ConcreteProductA extends Product {
  // ...
}

class ConcreteProductB extends Product {
  // ...
}

// Factory
class Factory {
  createProduct(type) {
    switch (type) {
      case 'A':
        return new ConcreteProductA('Product A');
      case 'B':
        return new ConcreteProductB('Product B');
      default:
        throw new Error('Invalid product type.');
    }
  }
}

// Usage
const factory = new Factory();

const productA = factory.createProduct('A');
console.log(productA.name); // Output: Product A

const productB = factory.createProduct('B');
console.log(productB.name); // Output: Product B
```

In this example, the `Factory` class provides a `createProduct` method that takes a type parameter and returns a new instance of the appropriate `ConcreteProduct` based on the type provided. The factory encapsulates the creation logic, allowing the client code to create products without being aware of the specific implementation details.

  </div>
  </div>
</details>

---

### What is the primary goal of the factory method?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The primary goal of a Factory Method is to provide a common interface for creating objects, allowing subclasses or implementing objects to decide the exact type of object to be instantiated, promoting flexibility and loose coupling.
    </div>
  </div>
</details>

---

### What are the object participants in the factory pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The object participants in the factory pattern include the Creator, which defines the factory method, the ConcreteCreator, which implements the factory method, and the Product, which is the object being created.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

The Factory pattern involves several key participants:

1. The `Product` (Interface for creating objects)
2. The `ConcreteProduct` (Implements the `Product` interface)
3. The `Creator` (Declares the factory method, which returns an object of `Product` type)
4. The `ConcreteCreator` (Overrides the factory method to return an instance of a `ConcreteProduct`)

Here is an example in JavaScript:

```javascript
// Product
class Shape {
    constructor() { }
    draw() { }
}

// ConcreteProduct
class Circle extends Shape {
    constructor() {
        super();
    }

    draw() {
        console.log("Drawing a Circle");
    }
}

// ConcreteProduct
class Square extends Shape {
    constructor() {
        super();
    }

    draw() {
        console.log("Drawing a Square");
    }
}

// Creator
class ShapeFactory {
    constructor() { }
    
    createShape(type) {
        switch (type) {
            case 'circle':
                return new Circle();
            case 'square':
                return new Square();
            default:
                return null;
        }
    }
}

// Let's use our factory to create objects
const shapeFactory = new ShapeFactory();

let shape1 = shapeFactory.createShape('circle');
shape1.draw();  // "Drawing a Circle"

let shape2 = shapeFactory.createShape('square');
shape2.draw();  // "Drawing a Square"
```

In this example, `Shape` is the `Product` interface, `Circle` and `Square` are `ConcreteProduct` implementing the `Shape` interface. `ShapeFactory` is the `Creator` that contains the `createShape` factory method for creating objects of the `Shape` type. The factory method returns an instance of the required `ConcreteProduct` (Circle or Square), depending on the input parameter.

  </div>
  </div>
</details>

---

### Can you name a use case for the factory pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> A use case for the factory pattern is in any application where object creation needs to be decoupled from the calling code, allowing for greater flexibility and extensibility in the codebase. This can improve code maintainability and reduce duplication of code.
      </div>
      <br/>
    <div>
      <strong>Technical Response:</strong> Use Cases and Applicability of the Factory Pattern
      </div>

<div></div>

- You should use the Factory Method when you don’t know the exact types and dependencies of the objects your code should work within your application.

- When you want to give users of your library or framework the ability to extend its internal components, we use the Factory Method to meet this specification.

- The Factory Method may be used to save system resources by reusing existing objects rather than constructing them each time.

<br />

  </div>
</details>

---

### When should you use the Factory Pattern in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Factory Pattern in JavaScript should be used when the creation of an object is complex or should be separated from the main code for reasons of modularity and clarity.
  </div><br />
  <div><strong>Technical Details:</strong> This pattern is also useful when you need to create many objects of the same general type, but with different settings or behaviors. For example, consider a case where you're building a game and you have many types of enemies. Each enemy can have different attributes like health, speed, power, and attack type. Instead of creating each enemy manually, you could use a Factory to streamline the process.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
class Enemy {
  constructor(name, speed, health, power, attackType) {
    this.name = name;
    this.speed = speed;
    this.health = health;
    this.power = power;
    this.attackType = attackType;
  }

  attack() {
    return `${this.name} attacks with ${this.attackType}`;
  }

  defend(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `${this.name} is defeated`;
    }
    return `${this.name} has ${this.health} health remaining`;
  }
}

class EnemyFactory {
  createEnemy(type) {
    switch(type) {
      case 'warrior':
        return new Enemy('Warrior', 3, 100, 10, 'sword');
      case 'archer':
        return new Enemy('Archer', 5, 75, 7, 'bow');
      case 'mage':
        return new Enemy('Mage', 1, 50, 25, 'magic');
      default:
        throw new Error('Invalid enemy type');
    }
  }
}

const enemyFactory = new EnemyFactory();

const enemies = [
  enemyFactory.createEnemy('warrior'),
  enemyFactory.createEnemy('archer'),
  enemyFactory.createEnemy('mage')
];

enemies.forEach(enemy => {
  console.log(enemy.attack());
  console.log(enemy.defend(20));
});
```

In this example, we've abstracted the creation of different enemy types into a Factory. This way, the main code doesn't need to know the details about how to create each type of enemy. If we need to add more enemy types in the future, we can do so easily by modifying the factory, without touching the rest of the code.

  </div>
  </div>
</details>

---

### What are the benefits of using the Factory Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Factory Pattern promotes loose-coupling, code reusability, and enables the creation of similar objects without exposing the creation logic to the client.
    </div>
    <br />
    <div>
      <strong>Technical Details:</strong> Some benefits of using the factory pattern include decoupling object creation from the calling code, providing a flexible and extensible way to create objects, and improving code maintainability and reusability.<br/><br/>Benefits of the Factory Pattern.
    </div>
    <br />
    <div></div>

- You avoid a close relationship between the Creator and the concrete products.
- **Single Responsibility Principle (S.R.P.):** The principle of single responsibility. You can consolidate the product creation code into a single location in the program, making it easier to support.
- **Open/Closed Principle:** You can integrate new products into the system without busting the current client code.

<br />
  </div>
</details>

---

### What are some of the factory pattern's drawbacks?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
   <div>
      <strong>Interview Response:</strong> It can make the code more complex, obscure object types, and it can be overkill for simple object creation.
    </div>
    <div>
      <strong>Technical Response:</strong> Drawbacks of the Factory Pattern. The code may become more complicated as you introduce large numbers of new subclasses to implement the pattern. It can make the code more complex, obscure object types, and it can be overkill for simple object creation. The best-case scenario is incorporating the design into an existing creator class hierarchy.
    </div>
  </div>
</details>

---

### Can you name some alternatives to the factory pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Alternatives to using the factory pattern in JavaScript include using the constructor function directly, using a class with static methods, or using a dependency injection library.<br /><br />
    </div>

Here is a list of alternatives to the Factory Pattern:

1. Object literals
2. Constructor functions
3. Dependency injection
4. Abstract factory pattern
5. Builder pattern
6. Singleton pattern
7. Prototype pattern
8. Module pattern

These alternatives provide various ways to handle object creation and instantiation in JavaScript, each with its own benefits and use cases.

  </div>
</details>

---

### How is the Factory Pattern different from the Constructor Pattern in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Factory Pattern returns new objects without using the 'new' keyword unlike the Constructor Pattern which requires it.
  </div>
  <div><strong>Technical Response:</strong> The Factory Pattern uses a separate factory method to create objects, allowing subclasses or implementing objects to determine the type, while the Constructor Pattern directly creates objects using constructor functions or classes. The constructor in the pattern is instantiated using the "new" operator.
  </div>
  </div>
</details>

---

### Is the Factory Pattern the best pattern for creating a large number of identical objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, a Factory Pattern is not optimal for creating many identical objects; it's best used for creating similar but not identical objects. The Prototype Pattern is more suitable.
  </div>
  <div><strong>Technical Response:</strong> No, a Factory Pattern is not optimal for creating many identical objects; it's best used for creating similar but not identical objects. The Prototype Pattern is more suitable for creating a large number of identical objects because it allows objects to be cloned from a prototype, avoiding the overhead of repeated object construction in the Factory Pattern.
  </div>
  </div>
</details>

---

### How can the Factory Pattern help with encapsulation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It encapsulates the creation of objects, hiding the complexities of instantiation and making it easier to manage dependencies.
  </div>
  </div>
</details>

---

### What is a Simple Factory Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Simple Factory pattern is a simplified version of the Factory pattern. It doesn't use an interface for creating objects, instead, it uses a single method to create objects of different types.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of the Simple Factory pattern in JavaScript.

```javascript
class Car {
    constructor(model, doors, color) {
        this.model = model;
        this.doors = doors;
        this.color = color;
    }
}

class CarFactory {
    createCar(type) {
        switch(type) {
            case 'sedan':
                return new Car('Sedan', 4, 'black');
            case 'coupe':
                return new Car('Coupe', 2, 'red');
            case 'suv':
                return new Car('SUV', 5, 'blue');
            default:
                return null;
        }
    }
}

// Usage
const carFactory = new CarFactory();

const sedan = carFactory.createCar('sedan');
console.log(sedan); // Car { model: 'Sedan', doors: 4, color: 'black' }

const coupe = carFactory.createCar('coupe');
console.log(coupe); // Car { model: 'Coupe', doors: 2, color: 'red' }

const suv = carFactory.createCar('suv');
console.log(suv); // Car { model: 'SUV', doors: 5, color: 'blue' }
```

In this example, the `CarFactory` class has a `createCar` method that creates a new `Car` object based on the `type` argument. The `Car` class, which is the object being created by the factory, takes `model`, `doors`, and `color` as arguments to its constructor. This is a simpler implementation than a full Factory pattern, but it achieves a similar result: it provides a way to delegate the creation of objects to a specific method, which can be modified to change the creation behavior.

  </div>
  </div>
</details>

---

### Can you name a real-world example where the Factory Pattern is useful?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Factory Pattern is often used when setting up database connections. For instance, you might have different types of databases (MySQL, PostgreSQL, MongoDB) in your application, and you want to create a specific database connection depending on the environment (development, test, production), or depending on user's selection at runtime.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example using Node.js...

```javascript
class DbConnection {
    constructor() {}

    connect() {
        throw new Error("This method must be overwritten!");
    }

    disconnect() {
        throw new Error("This method must be overwritten!");
    }
}

class MySqlConnection extends DbConnection {
    constructor() {
        super();
    }

    connect() {
        console.log("Connecting to MySQL...");
        // Here you would have code that sets up a connection to MySQL
    }

    disconnect() {
        console.log("Disconnecting from MySQL...");
        // Code to disconnect from MySQL
    }
}

class PostgresConnection extends DbConnection {
    constructor() {
        super();
    }

    connect() {
        console.log("Connecting to PostgreSQL...");
        // Here you would have code that sets up a connection to PostgreSQL
    }

    disconnect() {
        console.log("Disconnecting from PostgreSQL...");
        // Code to disconnect from PostgreSQL
    }
}

class DbConnectionFactory {
    createDbConnection(type) {
        switch(type) {
            case 'mysql':
                return new MySqlConnection();
            case 'postgresql':
                return new PostgresConnection();
            default:
                throw new Error(`Database type ${type} not supported.`);
        }
    }
}

// Usage
const factory = new DbConnectionFactory();

const dbConnection = factory.createDbConnection('mysql'); // Depending on the environment or user selection, you might choose 'postgresql'
dbConnection.connect(); // Connecting to MySQL...

// Somewhere later in your code when you're done with the connection
dbConnection.disconnect(); // Disconnecting from MySQL...
```

In this example, the `DbConnectionFactory` class serves as a Factory for creating different types of `DbConnection` instances. The specific type of `DbConnection` that gets instantiated depends on the string that's passed into the `createDbConnection` method. This can easily be extended to support other types of databases as well, you would just need to create a new class for that database type and add another case in the `switch` statement.

  </div>
  </div>
</details>

---

### How does the Factory Pattern contribute to the SOLID principles?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It adheres to the Dependency Inversion Principle, as higher-level modules are not dependent on lower-level modules, promoting code flexibility.
  </div>
  </div>
</details>

---

### What is the difference between a Factory Method and the Factory Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Factory Pattern is a broader concept that includes multiple factory methods to create objects, while the Factory Method is a specific implementation of this pattern, focusing on a single method.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here are simple code examples for both patterns in JavaScript:

1. Factory Method:

```javascript
class PizzaFactory {
    createPizza(type) { // createPizza is a Factory Method
        if (type === 'cheese') {
            return new CheesePizza();
        } else if (type === 'pepperoni') {
            return new PepperoniPizza();
        }
    }
}

```

In this example, `createPizza` is a Factory Method. It creates different types of Pizza objects based on the input `type`.

2. Factory Pattern:

```javascript
class PizzaFactory {
    static createCheesePizza() {
        return new CheesePizza();
    }
    
    static createPepperoniPizza() {
        return new PepperoniPizza();
    }
}

```

In this Factory Pattern example, we have a `PizzaFactory` class with two static methods: `createCheesePizza` and `createPepperoniPizza`. Each of these methods creates a specific type of Pizza object.

  </div>
  </div>
</details>

---

### What is the modern approach used in the factory pattern, Classes or Functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In modern JavaScript, developers often utilize classes and factory functions to implement the Factory pattern.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

The examples below will demonstrate both approaches.

**Factory Function Approach:**

```javascript
const carFactory = (type) => {
  switch(type) {
    case 'Compact':
      return {
        doors: 4,
        drive: () => 'Vroom, I have 4 doors'
      };
    case 'Convertible':
      return {
        doors: 2,
        drive: () => 'Vroom, I have 2 doors'
      };
    case 'SUV':
      return {
        doors: 24,
        drive: () => 'Vroom, I have 24 doors'
      };
    default:
      throw new Error('Invalid car type');
  }
};

const corolla = carFactory('Compact');
console.log(corolla.drive()); // "Vroom, I have 4 doors"
```

**Class Approach:**

```javascript
class Car {
  constructor(doors) {
    this.doors = doors;
  }

  drive() {
    return `Vroom, I have ${this.doors} doors`;
  }
}

class CompactCar extends Car {
  constructor() {
    super(4);
  }
}

class ConvertibleCar extends Car {
  constructor() {
    super(2);
  }
}

class SUVCars extends Car {
  constructor() {
    super(24);
  }
}

class CarFactory {
  createCar(type) {
    switch(type) {
      case 'Compact':
        return new CompactCar();
      case 'Convertible':
        return new ConvertibleCar();
      case 'SUV':
        return new SUVCars();
      default:
        throw new Error('Invalid car type');
    }
  }
}

const carFactory = new CarFactory();
const corolla = carFactory.createCar('Compact');
console.log(corolla.drive()); // "Vroom, I have 4 doors"
```

In this example, we first define a base `Car` class and then subclasses for specific types of cars. Then we define a `CarFactory` class that creates an instance of the appropriate subclass based on the given type.

Both these approaches can be used in modern JavaScript to implement the Factory pattern. The class approach is more structured and can be more suitable if there are many types of cars, or if the logic to construct a car is complex. On the other hand, the factory function approach is more flexible and less verbose for simpler cases.

  </div>
  </div>
</details>

---
