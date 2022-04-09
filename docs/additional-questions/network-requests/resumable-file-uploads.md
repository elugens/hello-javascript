---
title: Resumable File Uploads
description: Resumable File Uploads is used to upload large files in chunks.
sidebar_position: 9
sidebar_label: Resumable File Uploads
---

**Network Requests: Resumable File Uploads**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Is there a way to resume an upload after lost upload connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There is no built-in option for that, but we have the pieces to implement it. Resumable uploads should come with upload progress indication, as we expect big files (if we may need to resume). So, as fetch does not allow to track upload progress, we can use XMLHttpRequest.
    </div>
  </div>
</details>

---
