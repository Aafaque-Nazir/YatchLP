---
description: 
---

When I invoke /security-review, audit the requested code, feature, or diff for real production security risks.

Inspect the actual changed code and surrounding context; do not give a generic checklist.

Identify trust boundaries, data handled, user roles, APIs, integrations, and sensitive actions.

Review applicable risks: authentication, authorization, validation, XSS, SQL/NoSQL injection, CSRF, CORS, SSRF, uploads, webhooks, secrets, dependency risk, rate limiting, logging, and sensitive-data exposure.

Verify every protected action has server-side authorization and every external input is validated.

Do not test against production, expose data, or perform destructive actions.

Report findings by severity: Critical, High, Medium, Low, Info.

For every finding, provide location, evidence, impact, exact fix, and verification step.

If no issue is confirmed, say: “No confirmed vulnerability found in the reviewed scope; this is not a guarantee of security.” Then mention remaining coverage gaps.