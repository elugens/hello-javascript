---
title: Resumable file uploads
sidebar_position: 9
---

# Resumable file uploads

**Network requests: Resumable file upload**

### Is there a way to resume an upload after lost upload connection?

**Interview Answer:** There is no built-in option for that, but we have the pieces to implement it. Resumable uploads should come with upload progress indication, as we expect big files (if we may need to resume). So, as fetch does not allow to track upload progress, we can use XMLHttpRequest.

Source: <https://javascript.info/resume-upload>
