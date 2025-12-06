# Nihad Portfolio

A static, single-page portfolio inspired by the reference site. Everything is plain HTML/CSS/JS—no build tools required.

## Structure
- `index.html` — page content and section order.
- `styles.css` — colors, spacing, and layout rules.
- `script.js` — small enhancements (sticky header glow and mobile nav toggle).

## Editing content
1. Open `index.html` and update the text inside each section (hero, About, Skills, Projects, Experience, Contact).
2. For project cards, edit the `<article class="card project">` blocks in the Projects section.
3. Update social/contact links in the footer and the email address in the Contact form.

## Styling tweaks
- Adjust color tokens at the top of `styles.css` (e.g., `--bg`, `--accent`).
- Modify spacing with the `--max-width`, padding on `.section`, or grid column sizes in `.skills`/`.projects`.

## Running locally
Open `index.html` in your browser directly, or serve the folder with a simple server:

```bash
python3 -m http.server 3000
```

Then visit `http://localhost:3000`.
