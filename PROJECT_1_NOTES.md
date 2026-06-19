# Project 1: TechPath A/L Technology Resource Hub

## Purpose

This is the first project in this workspace. It is a static, attractive, mobile-responsive website for Sri Lankan A/L Technology students.

The site is intended to share study resources such as:

- Past papers
- Textbooks
- Teachers' guides
- Model papers

Resources are managed through Google Drive links in `outputs/tech-study-hub/resources.js`.

## Current Website Location

Main site:

`outputs/tech-study-hub/index.html`

Main files:

- `outputs/tech-study-hub/index.html`
- `outputs/tech-study-hub/styles.css`
- `outputs/tech-study-hub/app.js`
- `outputs/tech-study-hub/resources.js`
- `outputs/tech-study-hub/README.md`

## Subjects Included

- Engineering Technology
- Science for Technology
- Information & Communication Technology
- Bio Systems Technology
- Agricultural Science

## Fundraising Access Idea

The website may later be used for a university event fundraising system where stickers are sold. Each sticker can have a unique QR code that opens the website with an access code.

Preferred low-cost access method:

1. Each sticker has a unique QR URL, for example:
   `https://yourwebsite.com/access.html?code=STK-001`
2. On first scan, the code is activated.
3. The browser stores an access token using cookies or localStorage.
4. The database marks the code as used.
5. Future access is allowed only from the browser with the matching token.
6. A simple 4-digit PIN can be added as a recovery method.

Recommended backend/database for this later:

- Firebase Hosting
- Firebase Firestore
- Firebase Authentication only if needed

WhatsApp API was discussed, but it may be too expensive. The cheaper direction is unique QR codes plus cookies/localStorage and optional PIN recovery.
