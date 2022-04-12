---
title: Defining a Pattern
description: Pattern-ity Testing, Proto-Patterns & The Rule Of Three
sidebar_position: 3
sidebar_label: Defining a Pattern
---

<!-- check word doc notes and updates -->

**Introduction: Defining a Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is a proto-pattern in terms of design patterns?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> A pattern that has not yet passed "pattern"-ity tests is called a proto-pattern. Proto-patterns result from the work of someone that created a specific solution that is worthy of sharing but may not have yet had the opportunity to be qualified due to its newness.
    </div>
  </div>
</details>

---

### What is a description or snippet of a proto-pattern known to be?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> A brief description or snippet of a pattern is known as patlet.
    </div>    
  </div>
</details>

---

### How do we determine if a design pattern is worth using?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Estimating a good design pattern:
    </div>
    <div></div>

- **Solves a particular problem:** Patterns are not created to capture principles or strategies; they need to capture solutions. This approach is one of the essential components of a good design pattern.

- **The solution to this problem cannot be obvious:** We can find that problem-solving often attempts to derive from well-known principles. The best design patterns usually provide solutions to issues indirectly - this is considered a necessary approach for the most challenging problems related to design.

- **The concepts must be proven solutions to a problem:** Design patterns require proof that they function as described, and without this, we should not entertain its use.

- **It must describe a relationship:** In some cases, a pattern may represent a module type. Although an implementation may appear this way, the official description of the design must describe much deeper system structures and mechanisms that explain its relationship to code.

<br />
  </div>
</details>

---

### What is "The Rule of Three" concerning design patterns?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> One of the additional requirements for a pattern to be valid is that they display some recurring phenomenon. We often qualify this approach in three key areas, known as the rule of three.<br/><br/>To show recurrence, one must demonstrate:
    </div>
    <div></div>

1. **Fitness of purpose:** How is the pattern proven to be successful?

1. **Usefulness:** Why is the pattern considered good?

1. **Applicability:** Is the design worthy of being a pattern because it pliable? How we implement, the design pattern must be detailed. When reviewing or defining a design pattern, it is essential to keep the above in mind.

<br />
     </div>
   </details>

---

### Describe the process used to author a new design pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The process used to create a new design pattern include documentation of your intent, motivation, structural representation, and code examples.<br/><br/>
    </div>
    <div>
      <strong>Technical Response:</strong> The process used to create a new design pattern includes documentation of your intent, motivation, structural representation, and code examples. Intent covers the problems and solutions and describes what the design does. The motivation explains the problem in detail and how the pattern will solve the problem. The structure covers a diagram of classes and objects that maps each part of the pattern and how they are related. A code example must be provided to give a clear representation of the design.
    </div>     
  </div>
</details>

---
