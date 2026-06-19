# TechPath static website

Open `index.html` in a browser or upload this folder to GitHub Pages, Netlify, Cloudflare Pages, or any static host.

Subject-specific pages use `subject.html`. Example:

`subject.html?subject=Bio%20Systems%20Technology`

## Add your Google Drive files

1. Open `resources.js`.
2. Copy an existing resource object.
3. Change its title, type, subject, year, medium, and `driveUrl`.
4. In Google Drive, set the file to **Anyone with the link can view** and paste its share link into `driveUrl`.

Supported `type` values are `Past Paper`, `Textbook`, `Teachers' Guide`, and `Model Paper`.

Supported `subject` values are `Engineering Technology`, `Science for Technology`, `Information & Communication Technology`, `Bio Systems Technology`, and `Agricultural Science`.

No backend or database is required. All searching and filtering happen in the browser.
