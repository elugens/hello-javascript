---
title: Clickjacking Attacks
description: Clickjacking Attacks is the process of a malicious site trying to trick a user into clicking on a link that is on another site.
sidebar_position: 3
sidebar_label: Clickjacking Attacks
---

**Frames / Windows: Clickjacking Attacks**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain what is clickjacking?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The “clickjacking” attack allows an evil page to click on a “victim site” on behalf of the visitor. Many sites were hacked this way, in the past, including Twitter, Facebook, Paypal, and other sites. They have all been fixed, of course.
    </div>
  </div>
</details>

---

a

### Could you perhaps describe how a clickjacking attack gets carried out in detail?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The idea is quite simple. A visitor gets lured to an evil page. It does not matter how. The page has a harmless-looking link on it (like “get rich now” or “click here, very funny”). The malicious website places a transparent &#8249;iframe&#8250; with src from facebook.com above the link, so that the "Like" button is directly above it. Typically, this implementation gets accomplished using a z-index, and the visitor clicks the button instead of the link.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<style>
  iframe {
    /* iframe from the victim site */
    width: 400px;
    height: 100px;
    position: absolute;
    top: 0;
    left: -20px;
    opacity: 0.5; /* in real opacity:0 */
    z-index: 1;
  }
</style>

<div>Click to get rich now:</div>

<!-- The url from the victim site -->
<iframe src="/clickjacking/facebook.html"></iframe>

<button>Click here!</button>

<div>...And you're cool (I'm a cool hacker actually)!</div>
```

  </div>
  </div>
</details>

---

### Can you briefly explain two approaches to defending against a clickjacking attack?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The first or naive approach is a defensive measure employing a piece of JavaScript code that prevents the website from being opened in a frame (so-called "frame busting"). If the window discovers it is not at the top, it immediately rises to the top. This approach is not a solid defense because there are several methods to circumvent it. The second approach is using the sandbox attribute to block navigation. One of the things restricted by the sandbox attribute is navigation. A sandboxed iframe may not change top.location. So, we can add the iframe with sandbox="allow-scripts allow-forms". That would relax the restrictions, permitting scripts and forms. But we omit allow-top-navigation so that changing top.location is forbidden. The recommended approach uses X-Frame-Options: SAMEORIGIN on pages (or whole websites) that does not intentionally get viewed inside frames.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong> Frame Busting (Novice Approach: not recommended)<br /><br />

  <div></div>

```js
if (top != window) {
  top.location = window.location;
}
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Sandbox Attribute (Testing Approach: should not be used in production)
<br /><br />

  <div></div>

```js
<iframe sandbox='allow-scripts allow-forms' src='facebook.html'></iframe>
```

  </div>
  </div>
</details>

---
