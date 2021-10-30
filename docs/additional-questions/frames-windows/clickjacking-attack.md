---
title: Clickjacking Attacks

sidebar_position: 3
---

# The clickjacking attack

**Frames and Windows: The clickjacking attack**

### Can you explain, what is clickjacking?

**Interview Answer:** The “clickjacking” attack allows an evil page to click on a “victim site” on behalf of the visitor. Many sites were hacked this way, in the past, including Twitter, Facebook, Paypal and other sites. They have all been fixed, of course.

Source: <https://javascript.info/cross-window-communication#postmessage>

### Can you briefly explain, how a clickjacking attack is implemented?

**Interview Answer:** The idea is quite simple. A visitor is lured to an evil page. It does not matter how. The page has a harmless-looking link on it (like “get rich now” or “click here, very funny”). Over that link the evil page positions a transparent `<iframe>` with src from facebook.com, in such a way that the “Like” button is right above that link. Usually that is done with z-index. In attempting to click the link, the visitor in fact clicks the button.

Code Example:

```html
<style>

  iframe { 
      /* iframe from the victim site */

      width: 400px;

      height: 100px;

      position: absolute;

      top:0; left:-20px;

      opacity: 0.5; 
      /* in real opacity:0 */

      z-index: 1;

  }
</style>

<div>Click to get rich now:</div>

<!-- The url from the victim site -->

<iframe src="/clickjacking/facebook.html"></iframe>

<button>Click here!</button>

<div>...And you're cool (I'm a cool hacker actually)!</div>
```

Source: <https://javascript.info/clickjacking#the-idea>

### Can you briefly explain, two approaches to defending against a clickjacking attack?

**Interview Answer:** The first or novice approach is the oldest defence usng a bit of JavaScript which forbids opening the page in a frame (so-called “framebusting”). Basically, if the window finds out that it’s not on top, then it automatically makes itself the top. This not a reliable defence, because there are many ways to hack around it. The second approach is using the sandbox attribute to block navigation. One of the things restricted by the sandbox attribute is navigation. A sandboxed iframe may not change top.location. So, we can add the iframe with sandbox="allow-scripts allow-forms". That would relax the restrictions, permitting scripts and forms. But we omit allow-top-navigation so that changing top.location is forbidden. The recommended approach is to use X-Frame-Options: SAMEORIGIN on pages (or whole websites) which are not intended to be viewed inside frames.

Code Example: Frame Busting (Novice Approach: not recommended)

```js
if (top != window) {
  top.location = window.location;
}
```

Code Example: Sandbox Attribute (Testing Approach: should not be used in production)

```html
<iframe sandbox="allow-scripts allow-forms" src="facebook.html"></iframe>
```

Source: <https://javascript.info/clickjacking#sandbox-attribute>
