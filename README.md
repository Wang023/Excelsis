# Excelsis — Dental growth agency

A responsive Next.js 16 / React 19 / TypeScript website for an AI marketing agency specialising in dentistry. Uses the reference project's App Router, reusable section, and shared UI structure, with original agency-focused content and styling.

## Development

Use the existing `/workspace/Excelsis` checkout; this cloud task is already isolated and does not need a worktree.

```sh
npm ci
npm run dev -- --hostname 0.0.0.0
```

## Production and checks

```sh
npm run lint
npm run build
npm start -- --hostname 0.0.0.0
```

Includes home, services, approach, insights, three full articles, contact, privacy, and a custom 404. The mobile navigation, service links, and audit calls to action work without external services.

## Enquiry storage

`POST /api/enquiries` validates submissions and appends JSON records to `.data/enquiries.jsonl` (ignored by Git). Optionally set `ENQUIRY_DATA_DIR` to a private persistent directory outside the public web root. No submissions are exposed through a public GET endpoint. Server filesystem access is required to read the inbox. Back up and restrict access to this directory.

For a functional local test, start with `ENQUIRY_DATA_DIR=/tmp/excelsis-test-enquiries npm start`, submit the contact form, and verify a record appears in that directory. Use synthetic data only.

## Before public launch

- Connect the enquiry endpoint to the agency's actual CRM/email workflow. The UI currently explicitly states that submissions are saved locally and no appointment is booked.
- Configure persistent storage; local files are unsuitable for ephemeral/serverless deployments.
- Add verified legal identity, privacy contact, and retention period to the privacy policy.
- Add production anti-abuse/rate limiting at the hosting layer and confirm the host's backup and access controls.
- Confirm brand details and configure the deployment domain. No fabricated clients, performance statistics, or testimonials are included.

Typography uses Google Fonts with local system fallbacks. There are no analytics or advertising cookies configured.
