# Ruirui Rachel Yang

Personal academic website: https://rachel-00.github.io/

A responsive, dependency-free static site hosted on GitHub Pages from the `main` branch. Content updated from the supplied academic CV in November 2026.

## Edit the site

- `index.html`: profile, education, publication, a compact list of research assistant appointments, and contact information.
- `style.css`: responsive layouts, colors, typography, and print styles.
- `script.js`: accessible mobile navigation and active section indicators.
- `assets/portrait.jpg`: portrait supplied by the site owner.
- `assets/Ruirui_Yang_CV.pdf`: public CV, with the phone number omitted.
- `assets/yang-2025-kidney-care.bib`: publication citation.

No build or package installation is required. Preview locally with `python3 -m http.server 8765`, then visit http://localhost:8765. Push changes to `main` to trigger the existing GitHub Pages deployment. `.nojekyll` ensures that files are served as static assets.

When updating the content, also update the footer date and `sitemap.xml`. Use relative asset paths. Keep publication authorship and research roles faithful to the CV; acknowledged contributions are not listed as authored publications.

The design uses local system fonts and does not load analytics, cookies, third-party scripts, or remote font services. The portrait and CV remain the property of Ruirui Rachel Yang.

Content is limited to facts in the supplied CV. There is no inferred research-interest statement. The palette uses red, navy, black, and white.

The homepage deliberately keeps temporary RA roles in a compact experience list. Full project descriptions, conference presentations, honors, teaching, and service are in the downloadable CV.
