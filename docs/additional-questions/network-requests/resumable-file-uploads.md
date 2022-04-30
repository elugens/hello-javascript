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

### Is there a way to resume an upload after a lost connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There is no built-in option for such approach, but we have the components. Because if we anticipate large files, resumable uploads should include an upload progress indicator (if we may need to resume). We may use XMLHttpRequest instead of fetch because fetch does not allow us to track upload progress.
    </div>
  </div>
</details>

---
