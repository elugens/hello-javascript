---
title: Composite Design Pattern
description: The composite is a structural pattern that composes objects into trees and then works with these structures as if they were individual objects.
sidebar_position: 3
sidebar_label: Composite
---

**Structural: Composite Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Could you please explain the composite design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Composite Pattern, structurally, allows you to compose objects into a tree-like structure, allowing us to work with them as individual objects. Partitioning is another term for this. The Composite pattern enables the creation of objects with primitive items or a collection of object properties. Each item in the group can hold other collections, allowing for deeply nested structures.<br/>
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
//Component
class Employee {
  constructor(name, position, progress) {
    this.name = name;
    this.position = position;
    this.progress = progress;
  }
  getProgress() {}
}

//Leaf subclass
class Developers extends Employee {
  constructor(name, position, progress) {
    super(name, position, progress);
  }
  getProgress() {
    return this.progress;
  }
}

//Leaf subclass
class FreeLanceDev extends Employee {
  constructor(name, position, progress) {
    super(name, position, progress);
  }
  getProgress() {
    return this.progress();
  }
}

//Composite subclass
class DevTeamLead extends Employee {
  constructor(name, position) {
    super(name, position);
    this.teamMembers = [];
  }
  addMember(employee) {
    this.teamMembers.push(employee);
  }

  removeMember(employee) {
    for (var i = 0; i < this.teamMembers.length; i++) {
      if (this.teamMembers[i] == employee) {
        this.teamMembers.splice(i, 1);
      }
    }
    return this.teamMembers;
  }

  getProgress() {
    for (var i = 0; i < this.teamMembers.length; i++) {
      console.log(this.teamMembers[i].getProgress());
    }
  }

  showTeam() {
    for (var i = 0; i < this.teamMembers.length; i++) {
      console.log(this.teamMembers[i].name);
    }
  }
}

function run() {
  const seniorDev = new Developers('Rachel', 'Senior Developer', '60%');
  const juniorDev = new Developers('Joey', 'Junior Developer', '50%');
  const teamLead = new DevTeamLead('Regina', 'Dev Team Lead', '90%');
  teamLead.addMember(seniorDev);
  teamLead.addMember(juniorDev);
  console.log('Team members list:');
  teamLead.showTeam();
  console.log('Get Team members progress:');
  teamLead.getProgress();
  console.log('Removing Rachel from team:');
  teamLead.removeMember(seniorDev);
  console.log('Updated team members list:');
  teamLead.showTeam();
  const freelanceDev = new Developers('Ross', 'Free Lancer', '80%');
  console.log("Get freelance developer's progress:");
  console.log(freelanceDev.getProgress());
}

run();

/*
output:

Team members list:
Rachel
Joey
Get Team members progress:
60%
50%
Removing Rachel from team:
Updated team members list:
Joey
Get freelance developer's progress:
80%

 */
```

</div>
 </div>

</details>

---

### The Composite pattern belongs to which design pattern family?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Composite pattern is a type of Structural design pattern.
    </div>
  </div>
</details>

---

### Can you specify a use case for the Composite Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Composite pattern is powerful as it allows us to treat an object as a composite. Since both single and composite objects share the same interface, it enables reusing objects without worrying about their compatibility.
    </div><br/>
    <div>
      <strong>Technical Response:</strong> The Composite Pattern describes a collection of objects treated in the same way that a single instance of an object can.<br/><br/>This approach allows us to treat individual objects and compositions uniformly, which means the same behavior is applied when working with one or a thousand items.<br/><br/>We use this pattern to create a scalable application with many objects, and it is useful when dealing with an object hierarchy that resembles a tree. Your operating system, for example, uses this pattern to create directories and sub-directories. Some libraries also use composite patterns such as React and Vue to create reusable interfaces.
    </div>

  </div>
</details>

---

### What objects participate in the Composite Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The participating objects in the Composite Pattern include the Component, Leaf, and Composite objects.
    </div>
    <br />
    <div></div>

- **Component** – The component declares the interface for the objects in the composition.
- **Leaf** – The leaf represents leaf objects in the composition, and a leaf gets defined as an object with no children in this pattern.
- **Composite** – The Composite object represents branches of subtrees in the composition and maintains a collection of child components.

<br />
  </div>
</details>

---

### What are some of the advantages of employing the composite pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits of the Composite Pattern
    </div>
    <br />
    <div></div>

- Using polymorphism and recursion, you can more efficiently work with complex tree structures.
- The Open/Closed Principle You can add new element types to the app without breaking the existing code, which is now compatible with the object tree.

<br />
  </div>
</details>

---

### What are some of the disadvantages of employing the composite pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Drawbacks of the Composite Pattern
    </div>
    <br />
    <div></div>

- It might be challenging to provide a standard interface for classes whose functionality differs too much. You would need to overgeneralize the component interface in specific scenarios, making it harder to comprehend.

<br />
  </div>
</details>

---
