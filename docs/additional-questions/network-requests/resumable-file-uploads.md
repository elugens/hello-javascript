---
title: Resumable File Uploads
sidebar_position: 9
---

# Resumable File Uploads

**Network Requests: Resumable File Uploads**

<head>
  <title>Resumable File Uploads - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Is there a way to resume an upload after lost upload connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There is no built-in option for that, but we have the pieces to implement it. Resumable uploads should come with upload progress indication, as we expect big files (if we may need to resume). So, as fetch does not allow to track upload progress, we can use XMLHttpRequest.
    </div>
  </div>
</details>

---
