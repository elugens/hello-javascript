---
title: Defining a Pattern
description: Pattern-ity Testing, Proto-Patterns & The Rule Of Three - A pattern that has not yet passed "pattern"-ity tests is called a proto-pattern.
sidebar_position: 3
sidebar_label: Defining a Pattern
keywords:
  - defining a pattern
  - proto patterns
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
  - defining a pattern
  - proto patterns
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/DefiningPatternSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Defining a Pattern in JavaScript | HelloJavaScript.info</title>
</head>

<!-- check word doc notes and updates -->

**Introduction: Defining a Pattern**

<CloseAllAnswers />

---

### What is a pattern language in design patterns?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A pattern language is a method of describing good design practices within a field of expertise. It provides a common vocabulary, allowing for the efficient communication of complex design scenarios and solutions, facilitating reusable design practices.
  </div>
  </div>
</details>

---

### Can you explain what a micro pattern is?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A micro pattern is a type of design pattern that is much smaller and simpler. It deals with a specific local issue in the code, rather than broader architectural problems. It's often a quick, reusable solution to a common coding task.
  </div>
  </div>
</details>

---

### How can we evaluate the effectiveness of a design pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The effectiveness of a design pattern can be evaluated by how well it solves the recurring problem, improves code maintainability, readability, and scalability, and fits within the overall application architecture without adding unnecessary complexity.
  </div>
  </div>
</details>

---

### Can you explain the concept of "Pattern Mining"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Pattern Mining refers to the process of discovering or identifying useful and recurring patterns, structures, or behaviors in existing software code. It helps in recognizing and abstracting solutions that can be reused in future development.
  </div>
  </div>
</details>

---

### Describe the steps to evolve a proto-pattern into a mature design pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Evolving a proto-pattern involves rigorous validation through repeated successful use in various contexts, refining the solution, documenting it thoroughly, and peer reviews.
  </div>
  </div>
</details>

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
    <br/>
    <div>
      <strong>Technical Response:</strong> A proto-pattern in JavaScript design patterns refers to a pattern that is still in the process of being defined and refined. It may not have a well-established implementation or a widely accepted name.<br/><br/>One example of a proto-pattern is the "null object" pattern, which suggests using a null object to handle situations where a null value is expected.
    </div>
  </div>
</details>

---

### What do you name a description or fragment of a proto-pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The description or fragment of a proto-pattern is typically referred to as a "pattern-let" or “patlet”.
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> A description or fragment of a proto-pattern is sometimes referred to as a "patternlet" or "patlet". A patternlet is a smaller, less well-defined version of a design pattern that is still in the process of being defined and refined.<br/>One example of a patternlet is the "parameter object" patternlet, which involves passing a single object as a parameter instead of multiple individual parameters.
    </div>
  </div>
</details>

---

### How can we know if a design pattern is worth utilizing?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The worth of a design pattern is determined by whether it effectively solves a recurring problem, improves code readability, maintainability, and fits within the overall application architecture without unnecessarily complicating the code.
    </div>
    <div>
    <br/>
      <strong>Technical Response:</strong> Estimating a good design pattern.
    </div>
    <div></div>

- **Solves a particular problem:** Patterns are not designed to capture concepts or methods; instead, they are designed to capture solutions. This method is a necessary component of a successful design pattern.

- **There is no clear answer to this problem:** Problem-solving frequently seeks to deduce from well-known concepts. The best design patterns frequently give indirect answers to challenges – this approach is an essential strategy for the most challenging design problems.

- **The concepts must be proven solutions to a problem:** Design patterns require proof that they function as described, and without this, we should not entertain their use.

- **It must describe or express a relationship:** A pattern may represent a module type in some circumstances. While an implementation may appear this way, the formal design description must specify far deeper system structures and processes that explain how it connects to our code.

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
      <strong>Interview Response:</strong> "The Rule of Three" in software engineering suggests that a design pattern should be considered when a similar code structure or solution is being repeated three times or more, indicating a recurring problem.
<br/><br/>
    </div>
    <div>
      <strong>Technical Response:</strong> One of the additional requirements for a pattern to be valid is that they display some recurring phenomenon. We often qualify this approach in three key areas, known as the rule of three.<br/><br/>To show recurrence, one must demonstrate:
    </div>
    <div></div>

1. **Fitness of purpose:** How is the pattern proven to be successful?

1. **Usefulness:** Why is the pattern considered good?

1. **Applicability:** Is the design worthy of being a pattern because it pliable? How we implement, the design pattern must be detailed. When reviewing or defining a design pattern, it is essential to keep the above in mind.

<br />
     </div>
   </details>

---

### Can you describe the process used to author a new design pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Creating a new design pattern involves identifying a recurring problem, designing a generic solution, validating its effectiveness across multiple scenarios, documenting the pattern comprehensively, and refining it based on real-world usage feedback.<br/><br/>
    </div>
    <div>
      <strong>Technical Response:</strong> The process used to create a new design pattern includes documentation of your intent, motivation, structural representation, and code examples. Intent covers the problems and solutions and describes what the design does. The motivation explains the problem in detail and how the pattern solves the problem. The structure includes a class and object diagram that depicts each aspect of the pattern and how they are connected. The author provides a code example to represent the design.
    </div>
  </div>
</details>

---
