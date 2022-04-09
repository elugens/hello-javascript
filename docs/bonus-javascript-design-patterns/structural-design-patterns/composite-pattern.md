---
title: Composite Design Pattern
description: Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.
sidebar_position: 3
sidebar_label: Composite
---

**Structural: Composite Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the composite design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Structurally the Composite Pattern lets you compose objects into a tree-like structure giving us the ability to work with them as individual objects. This is also known as partitioning. The Composite pattern allows the creation of objects with properties that are primitive items or a collection of objects. Each item in the collection can hold other collections themselves, creating deeply nested structures.<br/>
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

</div><br />
  <div><strong className="codeExample">Code Example:</strong> ES2015+ Modern Implementation<br /><br />

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

### In what pattern category does the Composite pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Composite pattern belongs to the Structural design pattern category.
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
      <strong>Interview Response:</strong> Composite pattern is powerful as it allows us to treat an object as a composite. Since both single and composite objects share the same interface, it allows reusing objects without worrying about their compatibility.
    </div><br/>
    <div>
      <strong>Technical Response:</strong> The Composite Pattern describes a group of objects that can be treated in the same way a single instance of an object may be.<br/><br/>This allows us to treat both individual objects and compositions in a uniform manner, meaning that the same behavior will be applied regardless of whether we're working with one item or a thousand.<br/><br/>You can use this pattern if you want to develop a scalable application that uses plenty of objects. It is particularly helpful in situations where you are dealing with a tree-like hierarchy of objects. An example of this pattern being used is by your operating system to create directories and sub-directories. Libraries like React and Vue also use this pattern to build reusable interfaces.
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
      <strong>Interview Response:</strong>The participating objects in the Composite Pattern include the Component, Leaf, and Composite objects.
    </div>
    <br />
    <div></div>

- **Component** – The component declares the interface for the objects in the composition.
- **Leaf** – The leaf represents leaf objects in the composition. A leaf is defined as an object that has no children in this pattern.
- **Composite** – The Composite object represents branches or subtrees in the composition and maintains a collection of child components.

<br />
  </div>
</details>

---

### What are some of the benefits of using the composite pattern?

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

- You can work with complex tree structures more conveniently: use polymorphism and recursion to your advantage.
- Open/Closed Principle. You can introduce new element types into the app without breaking the existing code, which now works with the object tree.

<br />
  </div>
</details>

---

### What are some of the drawbacks of using the composite pattern?

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

It might be difficult to provide a common interface for classes whose functionality differs too much. In certain scenarios, you’d need to overgeneralize the component interface, making it harder to comprehend.

<br />
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
