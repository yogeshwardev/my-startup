# Keep a record of enquiries

The website stores nothing itself. Pick ONE option, paste its URL into `formEndpoint` in `src/config.mjs`, run `npm run build`, then upload `public/` (or push to git).

## Option A — Google Sheet (free, you own the data)
1. Create a new Google Sheet named "Benzo enquiries".
2. Extensions → Apps Script. Delete the sample code and paste in `docs/apps-script.gs`.
3. Deploy → New deployment → type **Web app**. Execute as: **Me**. Who has access: **Anyone**. Click Deploy and approve the permissions.
4. Copy the Web app URL (it starts with `https://script.google.com/macros/s/`).
5. Put it in `formEndpoint`.
Each enquiry becomes a row in the sheet and an email to you. Note: the page cannot read the script's reply, so it always shows "sent" — test it once yourself and check the sheet.

## Option B — Formspree (free tier, easiest)
1. Sign up at formspree.io and create a form with your email.
2. Copy the form URL (`https://formspree.io/f/xxxxxxxx`).
3. Put it in `formEndpoint`. Enquiries are emailed to you and kept in Formspree's dashboard.

Either way, the Privacy Policy already says enquiry details are passed to a form service and kept in your records.
