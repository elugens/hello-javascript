import React from 'react';
import Link from '@docusaurus/Link';
import styles from './LinkDirectory.module.css';

export default function LinkDirectory() {
  return (
    <div className='container'>
      <div className={styles.linkDirectory}>
        <section>
          <h3 className='section_title'>
            <Link to='/docs/intro'>General JavaScript Questions</Link>
          </h3>
          <p className='section'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odit
            tenetur vel velit commodi, alias placeat dolor cum ipsam? Error
            ullam excepturi eligendi facere dolores porro numquam blanditiis
            voluptatum inventore.
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
                <Link to='/docs/the-javascript-language/introduction/javascript-code-editors'>
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
              <Link to=''>JavaScript Fundamentals Q&A</Link>
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
                <Link to=''>Variables</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Data types</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Interaction: alert, prompt, confirm</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Type Conversions</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Basic operators, maths</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Comparisons</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Conditional Branching</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>The "switch" Statement</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Functions</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Function expressions</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Arrow functions</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>JavaScript Specials</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Code Quality</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Debugging in the Browser</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Coding Style</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Comments</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Ninja code</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Automated testing with Mocha</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Polyfills and transpilers</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Objects the Basics</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Objects</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>References/Copying</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Garbage collection</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Object Methods</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>The "new" Operator</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Optional Chaining</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Symbol Type</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Object to Primitive Conversion</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Data Types</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Methods of Primitives</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Numbers</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Strings</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Arrays</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Array Methods</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Iterables</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Map and Set</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>WeakMap and WeakSet</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Keys / Values / Entries</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Destructuring Assignment</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Date and time</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>JSON Methods</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Advanced Working with Functions</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Recursion & Stack</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Rest Parameters / Spread Syntax</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Variable Scope / Closures</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Var Declaration</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Global Object</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Function object / NFE</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>The "new" Function Syntax</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Scheduling / Timing</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Call and Apply</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Function Binding</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Arrow Functions</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Object Properties Configuration</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Property Flags / Descriptors</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Property Getters & Setters</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Prototypes / Inheritance</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Prototypal Inheritance</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Function Prototypes</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Native Prototypes</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Prototype Methods</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Classes</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Basic Syntax</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Class Inheritance</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Static Props / Methods</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Private, Protected Props / Methods</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Extending Built-in Classes</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Class Checking: instanceof</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Mixins</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Error handling</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Error handling</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Custom Errors</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Promises, Async/Await</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Callbacks</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Promises Basic</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Promises chaining</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Error / Promises</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Promise API</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Promisification</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Microtask Queue</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Async/await</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Generators, Advanced Iteration</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Generators</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Async Iteration / Generators</Link>
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
                <Link to=''>Modules</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Export & Import</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Dynamic imports</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Miscellaneous</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Proxy and Reflect</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>String Evaluation</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Currying</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Reference Type</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>BigInt</Link>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h3 className='section_title'>
            <Link to=''>Browser: Document, Events, Interfaces Questions</Link>
          </h3>
          <p className='section'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odit
            tenetur vel velit commodi, alias placeat dolor cum ipsam? Error
            ullam excepturi eligendi facere dolores porro numquam blanditiis
            voluptatum inventore.
          </p>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Document</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Browser Environment Specs</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>DOM Tree</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Walking the DOM</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Searching the DOM</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Node Properties</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Attributes / Properties</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Modifying the Document</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Styles / Classes</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Element Size / Scrolling</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Window Sizes / Scrolling</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Coordinates</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Browser Events</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Browser Events</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Bubbling / Capturing</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Event Delegation</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Browser Default Actions</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Dispatching Custom Events</Link>
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
                <Link to=''>Mouse Events</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Moving the Mouse</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Drag'n'Drop Events</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Pointer Events</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Keyboard Events</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Scrolling Events</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Forms / Controls</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Form Properties / Methods</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Focusing - focus/blur</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Form Events</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Form Submit / Events</Link>
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
                <Link to=''>Page LifeCycle</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Scripts - Async/Defer</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Resource loading</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Miscellaneous</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Mutation Observer</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Selection and Range</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Event Loop</Link>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h3 className='section_title'>
            <Link to=''>Additional Questions</Link>
          </h3>
          <p className='section'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odit
            tenetur vel velit commodi, alias placeat dolor cum ipsam? Error
            ullam excepturi eligendi facere dolores porro numquam blanditiis
            voluptatum inventore.
          </p>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Frames / Windows</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Popups / Window Methods</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Cross-Window Communication</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Clickjacking Attacks</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Binary Data / Files</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>ArrayBuffer, Binary Arrays</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>TextDecoder / TextEncoder</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Blob Data</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>File / FileReader</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Network Requests</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Fetch Requests</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>FormData Object</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Fetch: Download Progress</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Fetch: Abort</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Fetch: Cross-Origin Requests</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Fetch API</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>URL Objects</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>XMLHttpRequest</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Resumable File Upload</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Long Polling</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>WebSocket</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Server Sent Events</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Storing data in the browser</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Cookies, document.cookie</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>LocalStorage / sessionStorage</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>IndexedDB</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Animation</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Bezier Curve</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>CSS-Animations</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>JavaScript Animations</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Web Components</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Orbital Height</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Custom Elements</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Shadow DOM</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Template Element</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Shadow DOM Slots</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Shadow DOM Styling</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Shadow DOM / Events</Link>
              </li>
            </ul>
          </div>
          <div className={styles.categoryTitle}>
            <h4>
              <Link to=''>Regular expressions</Link>
            </h4>
          </div>
          <div className='categories'>
            <ul className={styles.categoryItems}>
              <li className={styles.categorySubItem}>
                <Link to=''>Patterns and Flags</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Character Classes</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Unicode Regex</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Anchors</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Multiline Mode</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Word Boundary</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Escaping Special Characters</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Sets / Ranges</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Quantifiers</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Greedy / Lazy Quants</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Capturing Groups</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Backreferences</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Alternation</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Lookahead / Lookbehind</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Catastrophic Backtracking</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Sticky Flag</Link>
              </li>
              <li className={styles.categorySubItem}>
                <Link to=''>Regex / String Methods</Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
