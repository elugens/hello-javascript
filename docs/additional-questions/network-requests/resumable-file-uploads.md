---
title: Resumable File Uploads
description: Resumable File Uploads is used to upload large files in chunks. We may use XMLHttpRequest instead of fetch. Frontend Developer JavaScript Interview Questions
sidebar_position: 9
sidebar_label: Resumable File Uploads
keywords:
  - resumable file uploads
  - upload large files
  - xmlhttprequest
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - object
  - interview questions
  - interview answers
  - js
tags:
  - resumable file uploads
  - upload large files
  - xmlhttprequest
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ResumableSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Function Object NFE | JavaScript Frontend Phone Interview</title>
</head>

**Network Requests: Resumable File Uploads**

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
