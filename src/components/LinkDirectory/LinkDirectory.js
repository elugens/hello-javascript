import React from 'react';
import Link from '@docusaurus/Link';
import styles from './LinkDirectory.module.css';

export default function LinkDirectory() {
  return (
    <div className='container'>
      <div className={styles.linkDirectory}>
        <section>
          <h3 className={styles.sectionTitle}>
            <Link to='/docs/intro'>General JavaScript Questions</Link>
          </h3>
          <p className='section'>
            In this section, we cover everything from basic to advanced
            JavaScript questions that you may be asked during your next phone or
            technical interview. We will cover the basics of JavaScript in this
            section, but also concentrate on the advanced topics.
          </p>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/intro'>
                Introduction - JavaScript Questions & Answers
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-basics/basic-javascript-questions-answers'>
                  Basic JavaScript Questions
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-basics/manuals-and-descriptions'>
                  Manuals & Specifications
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-basics/code-editors'>
                  Code Editors
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-basics/developer-console'>
                  Developer Console
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/general-javascript-questions/javascript-fundamentals/the-script-tag'>
                JavaScript Fundamentals Q&A
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/the-script-tag'>
                  The "Script" Tag
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/code-structure'>
                  Code structure
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/code-structure'>
                  The modern mode, "use strict"
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/variables'>
                  Variables
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/data-types'>
                  Data types
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/browser-window-interactions'>
                  Interaction: alert, prompt, confirm
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/type-conversion'>
                  Type Conversions
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/basic-math-operators-in-javascript'>
                  Basic operators, maths
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/comparisons-operators'>
                  Comparisons
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/conditional-branching'>
                  Conditional Branching
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/logical-operators'>
                  Logical Operators
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/nullish-coalescing-operator'>
                  Nullish Coalescing Operator
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/while-for-loop'>
                  While & For Loops
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/the-switch-statement'>
                  The "switch" Statement
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/functions'>
                  Functions
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/function-expressions'>
                  Function expressions
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/arrow-functions'>
                  Arrow functions
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-fundamentals/javascript-specials'>
                  JavaScript Specials
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/general-javascript-questions/code-quality/debugging-javascript-in-chrome-browser'>
                Code Quality
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/code-quality/debugging-javascript-in-chrome-browser'>
                  Debugging in the Browser
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/code-quality/coding-style'>
                  Coding Style
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/code-quality/comments-in-javascript'>
                  Comments
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/code-quality/ninja-code'>
                  Ninja code
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/code-quality/automated-code-testing'>
                  Automated testing with Mocha
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/code-quality/polyfills-and-transpilers'>
                  Polyfills and transpilers
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/general-javascript-questions/objects-the-basics/objects'>
                Objects the Basics
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/objects-the-basics/objects'>
                  Objects
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/objects-the-basics/object-references-and-copying'>
                  References/Copying
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/objects-the-basics/garbage-collection'>
                  Garbage collection
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/objects-the-basics/object-methods'>
                  Object Methods
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/objects-the-basics/the-new-operator-constructors'>
                  The "new" Operator
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/objects-the-basics/optional-chaining'>
                  Optional Chaining
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/objects-the-basics/symbol-type'>
                  Symbol Type
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/objects-the-basics/object-to-primitive-conversion'>
                  Object to Primitive Conversion
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/general-javascript-questions/data-types/methods-of-primitives'>
                Data Types
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/data-types/methods-of-primitives'>
                  Methods of Primitives
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/data-types/numbers'>
                  Numbers
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/data-types/strings'>
                  Strings
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/data-types/arrays'>
                  Arrays
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/data-types/array-methods'>
                  Array Methods
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/data-types/iterables'>
                  Iterables
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/data-types/map-and-set'>
                  Map and Set
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/data-types/weakmap-and-weakset'>
                  WeakMap and WeakSet
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/data-types/object-keys-values-entries'>
                  Keys / Values / Entries
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/data-types/destructuring-assignment'>
                  Destructuring Assignment
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/data-types/dates-and-time'>
                  Date and time
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/data-types/json-methods-tojson'>
                  JSON Methods
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/general-javascript-questions/advanced-functions/recursion-and-stack'>
                Advanced Working with Functions
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/advanced-functions/recursion-and-stack'>
                  Recursion & Stack
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/advanced-functions/rest-parameters-and-spread-syntax'>
                  Rest Parameters / Spread Syntax
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/advanced-functions/variable-scope-closures'>
                  Variable Scope / Closures
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/advanced-functions/the-var-declaration'>
                  Var Declaration
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/advanced-functions/global-objects'>
                  Global Object
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/advanced-functions/function-object'>
                  Function object / NFE
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/advanced-functions/new-function-syntax'>
                  The "new" Function Syntax
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/advanced-functions/scheduling'>
                  Scheduling / Timing
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/advanced-functions/call-apply-decorators-forwarding'>
                  Call and Apply
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/advanced-functions/function-binding'>
                  Function Binding
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/advanced-functions/advanced-arrow-functions'>
                  Arrow Functions
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/general-javascript-questions/object-properties/property-flags-and-descriptors'>
                Object Properties Configuration
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/object-properties/property-flags-and-descriptors'>
                  Property Flags / Descriptors
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/object-properties/property-getters-and-setters'>
                  Property Getters & Setters
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/general-javascript-questions/prototypes-inheritance.md/prototypal-inheritance'>
                Prototypes / Inheritance
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/prototypes-inheritance.md/prototypal-inheritance'>
                  Prototypal Inheritance
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/prototypes-inheritance.md/function-prototype'>
                  Function Prototypes
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/prototypes-inheritance.md/native-prototypes'>
                  Native Prototypes
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/prototypes-inheritance.md/prototype-methods-objects-without-proto'>
                  Prototype Methods
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/general-javascript-questions/js-classes/class-basic-syntax'>
                Classes
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/js-classes/class-basic-syntax'>
                  Basic Syntax
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/js-classes/class-inheritance'>
                  Class Inheritance
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/js-classes/static-properties-methods'>
                  Static Props / Methods
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/js-classes/private-protected-properties-methods'>
                  Private, Protected Props / Methods
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/js-classes/extend-native-built-in-classes'>
                  Extending Built-in Classes
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/js-classes/instanceof-class-checking'>
                  Class Checking: instanceof
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/js-classes/javascript-mixins'>
                  Mixins
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/general-javascript-questions/error-handling/javascript-error-handling'>
                Error handling
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/error-handling/javascript-error-handling'>
                  Error handling
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/error-handling/custom-errors'>
                  Custom Errors
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/general-javascript-questions/promises-async-await/callbacks'>
                Promises, Async/Await
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/promises-async-await/callbacks'>
                  Callbacks
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/promises-async-await/promise-basics'>
                  Promises Basic
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/promises-async-await/promises-chaining'>
                  Promises chaining
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/promises-async-await/error-handling-with-promises'>
                  Error / Promises
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/promises-async-await/promise-api'>
                  Promise API
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/promises-async-await/promisify-promisification'>
                  Promisification
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/promises-async-await/microtasks'>
                  Microtask Queue
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/promises-async-await/async-await'>
                  Async/await
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/general-javascript-questions/generators-advance-interation/generators'>
                Generators, Advanced Iteration
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/generators-advance-interation/generators'>
                  Generators
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/generators-advance-interation/async-iterators-generators'>
                  Async Iteration / Generators
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Modules</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-modules/modules-the-basics'>
                  Modules
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-modules/export-import-modules'>
                  Export & Import
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/javascript-modules/dynamic-imports'>
                  Dynamic imports
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/general-javascript-questions/miscellaneous-js-questions/proxy-and-reflect'>
                Miscellaneous
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/miscellaneous-js-questions/proxy-and-reflect'>
                  Proxy and Reflect
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/miscellaneous-js-questions/eval-running-a-code-string'>
                  String Evaluation
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/miscellaneous-js-questions/currying'>
                  Currying
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/miscellaneous-js-questions/reference-types'>
                  Reference Type
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/general-javascript-questions/miscellaneous-js-questions/bigint'>
                  BigInt
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h3 className={styles.sectionTitle}>
            <Link to=''>Browser: Document, Events, Interfaces Questions</Link>
          </h3>
          <p className='section'>
            In this section, we will dive straight into the browser related
            JavaScript questions and answers that you may be asked during your
            next phone or technical engineering interview.
          </p>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/browser-related-questions/browser-document/browser-environment-specifications'>
                The Browser Document
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/browser-document/browser-environment-specifications'>
                  Browser Environment Specs
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/browser-document/dom-tree'>
                  DOM Tree
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/browser-document/walking-the-dom-tree'>
                  Walking the DOM
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/browser-document/searching-getelement-queryselector'>
                  Searching the DOM
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/browser-document/node-properties-type-tag-contents'>
                  Node Properties
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/browser-document/attributes-properties'>
                  Attributes / Properties
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/browser-document/modifying-the-document'>
                  Modifying the Document
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/browser-document/styles-classes'>
                  Styles / Classes
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/browser-document/element-size-scrolling'>
                  Element Size / Scrolling
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/browser-document/window-size-scrolling'>
                  Window Sizes / Scrolling
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/browser-document/window-coordinates'>
                  Coordinates
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/browser-related-questions/browser-events/browser-events-doc'>
                Browser Events
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/browser-events/browser-events-doc'>
                  Browser Events
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/browser-events/bubbling-capturing'>
                  Bubbling / Capturing
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/browser-events/event-delegation'>
                  Event Delegation
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/browser-events/browser-default-actions'>
                  Browser Default Actions
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/browser-events/dispatching-custom-events'>
                  Dispatching Custom Events
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>UI Events</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/ui-events/mouse-events'>
                  Mouse Events
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/ui-events/moving-the-mouse'>
                  Moving the Mouse
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/ui-events/drag-n-drop-with-mouse-events'>
                  Drag'n'Drop Events
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/ui-events/pointer-events'>
                  Pointer Events
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/ui-events/keyboard-keydown-keyup'>
                  Keyboard Events
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/ui-events/scroll-scolling-events'>
                  Scrolling Events
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/browser-related-questions/forms-controls/forms-properties-methods'>
                Forms / Controls
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/forms-controls/forms-properties-methods'>
                  Form Properties / Methods
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/forms-controls/focusing-focus-blur'>
                  Focusing - focus/blur
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/forms-controls/forms-events'>
                  Form Events
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/forms-controls/form-event-submit'>
                  Form Submit / Events
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Document / Resource Loading</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/document-resource-loading/page-documentcontentloaded-load-beforeunload-unload'>
                  Page LifeCycle
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/document-resource-loading/scripts-async-defer'>
                  Scripts - Async/Defer
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/document-resource-loading/resource-loading-onload-onerror'>
                  Resource loading
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/browser-related-questions/miscellaneous-browser-questions/mutation-observer'>
                Miscellaneous
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/miscellaneous-browser-questions/mutation-observer'>
                  Mutation Observer
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/miscellaneous-browser-questions/selection-and-range'>
                  Selection and Range
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/browser-related-questions/miscellaneous-browser-questions/event-loop-microtasks-macrotasks'>
                  Event Loop
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h3 className={styles.sectionTitle}>
            <Link to='/docs/additional-questions/frames-windows/popups-window-methods'>
              Additional Questions
            </Link>
          </h3>
          <p className='section'>
            In this section, we have some additional JavaScript questions and
            answers that may be asked during your next phone or technical
            engineering interview. There is no clear road map in this section,
            and you can choose in the order of your choosing.
          </p>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/additional-questions/frames-windows/popups-window-methods'>
                Frames / Windows
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/frames-windows/popups-window-methods'>
                  Popups / Window Methods
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/frames-windows/cross-window-communications'>
                  Cross-Window Communication
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/frames-windows/clickjacking-attack'>
                  Clickjacking Attacks
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/additional-questions/binary-data-files/arraybuffer-binary-arrays'>
                Binary Data / Files
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/binary-data-files/arraybuffer-binary-arrays'>
                  ArrayBuffer, Binary Arrays
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/binary-data-files/textdecoder-textencoder'>
                  TextDecoder / TextEncoder
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/binary-data-files/blobs'>
                  Blob Data
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/binary-data-files/file-filereader'>
                  File / FileReader
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/additional-questions/network-requests/fetch-requests'>
                Network Requests
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/network-requests/fetch-requests'>
                  Fetch Requests
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/network-requests/formdata'>
                  FormData Object
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/network-requests/fetch-download-progress'>
                  Fetch: Download Progress
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/network-requests/fetch-abort'>
                  Fetch: Abort
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/network-requests/fetch-cross-origin-request'>
                  Fetch: Cross-Origin Requests
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/network-requests/fetch-api'>
                  Fetch API
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/network-requests/url-objects'>
                  URL Objects
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/network-requests/xmlhttprequest'>
                  XMLHttpRequest
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/network-requests/resumable-file-uploads'>
                  Resumable File Upload
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/network-requests/long-polling'>
                  Long Polling
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/network-requests/websocket'>
                  WebSocket
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/network-requests/server-sent-events'>
                  Server Sent Events
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/additional-questions/storing-data-in-the-browser/cookies-document-cookie'>
                Storing data in the browser
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/storing-data-in-the-browser/cookies-document-cookie'>
                  Cookies, document.cookie
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/storing-data-in-the-browser/localstorage-sessionstorage'>
                  LocalStorage / sessionStorage
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/storing-data-in-the-browser/indexeddb'>
                  IndexedDB
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/additional-questions/js-animation/bezier-curve'>
                Animation
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/js-animation/bezier-curve'>
                  Bezier Curve
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/js-animation/css-animations'>
                  CSS-Animations
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/js-animation/javascript-animations'>
                  JavaScript Animations
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/additional-questions/web-components/web-components-doc'>
                Web Components
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/web-components/web-components-doc'>
                  Web Components
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/web-components/custom-elements'>
                  Custom Elements
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/web-components/shadow-dom'>
                  Shadow DOM
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/web-components/template-element'>
                  Template Element
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/web-components/shadow-dom-slots-composition'>
                  Shadow DOM Slots
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/web-components/shadow-dom-styling'>
                  Shadow DOM Styling
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/web-components/shadow-dom-and-events'>
                  Shadow DOM / Events
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to='/docs/additional-questions/regular-expressions/patterns-flags'>
                Regular expressions
              </Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/regular-expressions/patterns-flags'>
                  Patterns and Flags
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/regular-expressions/character-classes'>
                  Character Classes
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/regular-expressions/unicode-regex'>
                  Unicode Regex
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/regular-expressions/anchors'>
                  Anchors
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/regular-expressions/multiline-mode'>
                  Multiline Mode
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/regular-expressions/word-boundaries'>
                  Word Boundary
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/regular-expressions/escaping-special-characters'>
                  Escaping Special Characters
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/regular-expressions/sets-ranges'>
                  Sets / Ranges
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/regular-expressions/quantifiers-regex'>
                  Quantifiers
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/regular-expressions/greedy-lazy-quantifiers-regex'>
                  Greedy / Lazy Quants
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/regular-expressions/capturing-groups-in-regex'>
                  Capturing Groups
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/regular-expressions/backreferences-in-pattern'>
                  Backreferences
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/regular-expressions/alternation'>
                  Alternation
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/regular-expressions/lookahead-lookbehind'>
                  Lookahead / Lookbehind
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/regular-expressions/catastrophic-backtracking'>
                  Catastrophic Backtracking
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/regular-expressions/sticky-flag'>
                  Sticky Flag
                </Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to='/docs/additional-questions/regular-expressions/regexp-string-methods'>
                  Regex / String Methods
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
