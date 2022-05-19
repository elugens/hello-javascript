---
title: JavaScript the Interpreted Language?
description: An interpreter is a program that executes program instructions without the need for the code to be pre-compiled into a machine-readable format.
image: /img/why-is-javascript-called-an-interpreted-language-question-of-the-day.png
authors: [elugens]
tags: [interpreted, programming languages]
keywords: [javascript, interpreted, jit, programming languages]
---

<!-- <head>
  <title>Why is JavaScript called an Interpreted Language</title>
</head> -->

[![Why is JavaScript called an Interpreted Language](/img/why-is-javascript-called-an-interpreted-language-question-of-the-day.png)](/blog/2022/05/4/why-is-javascript-called-an-interpreted-language)

<!--truncate-->

## Why is JavaScript called an Interpreted Language?

JavaScript is well-known among frontend developers for its diverse array of features and benefits. As a result, this website aims to list and describe each component of this scripting language (Yes, it is a scripting language with programming-like abilities).

So, in this post, we'll look at why JavaScript is an interpreted, Just-In-Time compiled language and what that implies.

### What exactly is a compilation of code?

Code compilation converts the source code into machine-readable binary code before execution. Most modern programming languages use this model to ship application packages for execution on the end user's machine. Compiled code enhances application performance because the compiler optimizes the code for the end user's platform.

However, due to changes in their underlying CPU instruction sets, each program needs a different compilation method for different platforms under this model. You may have noticed that whenever you want to install an application on your machine, you must look for an installable specific to your operating system, hardware, and so on.

### What exactly is an interpreter?

An interpreter is a program that executes program instructions without the need for the code to be pre-compiled into a machine-readable format.

**The interpretation approach can take one of the following paths:**

- parse the source code and execute the behavior
- Transform the code into its intermediate optimized representation and run it.
- Selecting pre-compiled byte code (from a compiler) and the appropriate interpreter.

Because the code gets interpreted in real-time, the execution can begin immediately. It does not need to be explicitly built for any platform, instruction, or delivery experience, making it a great delivery experience for programmers.

Also, Since the code/script does not get compiled, the interpreted code does not need to be optimized before execution.

### JavaScript is an interpreted language, a JIT-compiled language

As previously stated, compilation guarantees that the produced code is optimized for quicker execution, whereas the interpreter helps ensure that code execution may occur instantly, resulting in a snappier startup.

As a result, JavaScript engines were created by combining the best of both methodologies and developing the Just In Time (JIT) Compilation paradigm. Although JavaScript is both a compiled and an interpreted language, the actual implementation varies depending on the engine (Browser or Node-Like).

**The following are some of the most popular engines:**

- V8: The most popular. Allows the use of Node.js, Chrome, and other chromium-based browsers.
- Spider Monkey - Allows FireFox and its fork implementations to function.
- JavaScript Core - Allows Safari and other Web Kit-based browsers to run JavaScript.

**Some of the essential processes in executing JavaScript:**

- The code is processed to create an intermediary format, such as AST (Abstract Syntax Trees), which should get optimized.
- The interpreter converts the intermediate format into machine-readable code to start the execution as soon as possible.
- The resulting code's execution continually gets watched, and each code unit with the potential for optimization is passed through the compilation stage to generate optimized code.
- Once created, the optimized code gets executed using the interpreter-generated code.

As a result, the performance gradually improves.

At the end of the day, if you get asked whether JavaScript is an interpreted or compiled language. Especially during a frontend developer interview or in the work environment. Just respond with **INTERPRETED** because this is the proper response. You can elaborate on the specifics with a detailed analogy of what you have learned about the JavaScript Interpreter.
