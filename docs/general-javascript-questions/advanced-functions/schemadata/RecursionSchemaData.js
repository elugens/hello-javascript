const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is recursion in JavaScript programming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recursion is a programming pattern when work needs to naturally split into several more straightforward tasks of the same type. Or when a task gets simplified into an easy action plus a simpler variant of the same task. When a function solves a task, it can call many other functions. A partial example is when a function calls itself, known as recursion.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between recursion and iterative approaches in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'he difference between recursion and iteration is that recursion is simply a function call. The function is being called by itself until a specific condition gets met, while iteration is when a loop gets repeatedly executed until a specific condition gets met. A recursive solution is usually shorter than an iterative one.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the maximum (acceptable) number of recursive calls by JavaScript engines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The JavaScript engine limits the maximum recursion depth. We can rely on it being 10000; some engines allow more, but 100000 is likely to be beyond most of them. Automatic optimizations help alleviate this ("tail calls optimizations"), but they are not yet supported everywhere and work only in simple cases. That limits the application of recursion, but it remains very widely used. There are many tasks where the recursive way of thinking makes the code more straightforward.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does recursion work in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "To adequately explain how recursion works in JavaScript. First, we need to explain the execution context and its relationship to the stack. The execution context of a running function stores information about its execution process. The execution context is an internal data structure that contains information about a function's execution, such as where the control flow is currently, the current variables, the value of \u201Cthis\u201D, and a few other internal details. Each function call connects with a single execution context.<br /><br />\r\n  <strong>The following occurs when a function makes a nested call:</strong><br /><br />\r\n  <ul>\r\n    <li>The current function gets paused.</li>\r\n    <li>The execution context gets remembered in a special data structure called the execution context stack.</li>\r\n    <li>The nested call executes.</li>\r\n    <li>After it ends, the old execution context gets retrieved from the stack, and the outer function resumes from where it stopped.</li>\r\n  </ul>",
      },
    },
    {
      '@type': 'Question',
      name: 'What characteristics do the three tree traversal methods have in common? (Inorder, Preorder, and Postorder)',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Left subtree always gets visited before the right subtree.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Backtracking and Recursion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recursion refers to the process of repeatedly calling the same function. The typical example of a recursive function is the factorial process. It would help if you always had a condition that makes recursion stop (base case). Backtracking is when the algorithm makes an opportunistic decision*, which may be wrong. If the decision was wrong, the backtracking algorithm restores the state before the decision. It builds candidates for the solution and abandons those who cannot fulfill the conditions. A typical example of a task to solve would be the Eight Queens Puzzle. Backtracking is also commonly used within Neuronal Networks. Many times, backtracking does not get implemented recursively. If backtracking uses recursion, it is called Recursive Backtracking.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the definition of a recursive data structure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A recursive data structure is a structure that replicates itself in parts. Some examples of recursive data structures are objects, HTML, and XML.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a linked list in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A linked list is a linear data structure like an array. Unlike arrays, the elements do not get stored in a particular memory location or index. Instead, each element gets its own object with a pointer or link to the next object in the list. Each element node has two components: stored data and a link to the next node. Any appropriate data type gets used to store the information. (Diagram below.) The entry point to a linked list is called the head. The head is a reference to the first node in the linked list. The last node on the list points to null. If a list is empty, the head is a null reference.',
      },
    },
    {
      '@type': 'Question',
      name: 'When traversing a linked list, which approach is better, recursion or iterative?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It varies; there are advantages to both ways that we must consider. We commonly use recursion because it is easier to build and more 'elegant' than iterative methods. Remember that anything done in recursion has an alternative iterative approach, but we should use caution with our approach because there is usually a performance penalty with recursion. However, depending on the situation at hand, that performance disadvantage may be negligible — in which case, recursion makes sense. With recursion, you also have the extra benefit of making your code more understandable to other programmers, which is always a plus.",
      },
    },
  ],
};

export default StructuredData;
