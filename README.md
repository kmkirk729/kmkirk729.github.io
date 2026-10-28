# Karen Kirk: E-Learning Curriculum Portfolio

A simple, static portfolio site for showcasing e-learning courses and help documentation.
It runs on GitHub Pages with no build step: just HTML, CSS and a little JavaScript.

```
index.html              Home page (intro, courses, documentation, about, experience, contact)
project.html            Case-study page for every course and document (project.html?id=...)
recommendations.html    Recommendations page (linked in the menu)
assets/js/projects.js   ← Your courses and documents live here
assets/css/styles.css   Colors, fonts, layout
assets/js/main.js       Builds the project lists and case-study pages (no need to edit)
assets/img/             Favicon, portrait and screenshots
courses/                (create) Published course folders go here
help-docs/              (create) PDFs and other documents go here
.nojekyll               Tells GitHub Pages to serve files exactly as they are
```

---

## 1. Personalize the home page

Open `index.html` and search for `EDIT:`. You'll find:

- **Email address**: replace `your.name@example.com` in the Contact section.
- **Résumé**: save your résumé as `assets/Karen-Kirk-Resume.pdf` (or change the two links).
- **Portrait**: save a square photo as `assets/img/portrait.jpg` and swap the `KK` placeholder
  for the `<img>` line shown in the comment.
- **Tools list**: update it to match the tools you use.

Everything else (bio and experience) is plain text you can edit directly.

**Recommendations** live in `recommendations.html`. To add one, copy a whole
`<figure class="rec"> ... </figure>` block and edit the quote, name and title.
The layout alternates left and right automatically.

## 2. Add your courses and documents

Open `assets/js/projects.js`. Each `{ ... }` block is one entry on the home page and one
case-study page. The field guide at the top of the file explains every field.

- To add an item, copy a whole block (including its trailing comma) and edit it.
- To remove one, delete its block. To reorder, move blocks up or down.
- Fields left as `""` are simply hidden.
- Each case study is organized as **The problem → The learning experience → Design decisions
  → Outline → Deliverables → Outcomes**. Fill in whichever apply.
- The sample courses and documents are examples. Replace them with your real projects,
  and replace the sample **results** prompts with real outcomes
  (completion rates, survey scores, fewer support tickets, stakeholder quotes).

### Hosting a course on the site

**Articulate Storyline 360:** Publish → *Web* → Publish. Copy the whole output folder into
`courses/`, for example `courses/security-awareness/`. Then set:

```js
link:  "courses/security-awareness/story.html",
embed: "courses/security-awareness/story.html",
```

**Articulate Rise 360:** Export → *Web* → download and unzip into `courses/onboarding/`. Then set:

```js
link:  "courses/onboarding/index.html",
embed: "courses/onboarding/index.html",
```

**Hosted elsewhere** (Review 360, SCORM Cloud, YouTube, Vimeo, Google Drive): paste the
full web address into `link`. Leave `embed` empty unless the service allows embedding.

### Hosting a document

Put PDFs in `help-docs/` and set `link: "help-docs/lms-quick-reference.pdf"`. Add the same
path to `embed` to show the PDF in a preview window on desktop. (Phones usually show only the
first page of an embedded PDF, so the **Open document** button is always available too.)

### Screenshots (recommended)

Until you add a screenshot, each item shows a drawn preview of a course screen or document
page, built from its title and `outline`. Pick the style with `preview`
(`lesson`, `scenario`, `simulation`, `blended` for courses; `page`, `article` for documents)
and the background with `color` (`green`, `blue`, `sand`, `slate`).

Real screenshots are the strongest way to show your work. Save one to `assets/img/` and set
`image: "assets/img/your-file.jpg"` plus a short `imageAlt` description. Courses look best at
about 1600 × 1000 px. Documents look best as a portrait page image, about 1275 × 1650 px.

> **Before uploading:** GitHub Pages sites are public. Only publish courses and documents
> you have permission to share. Remove confidential company information, or rebuild a
> sample version of the project.

## 3. Publish on GitHub Pages

1. Sign in to [github.com](https://github.com) (or create a free account).
2. Click **New repository**.
   - Name it **`your-username.github.io`** for the address `https://your-username.github.io/`,
     or name it anything (e.g. `portfolio`) for `https://your-username.github.io/portfolio/`.
   - Set it to **Public** and click **Create repository**.
3. Click **uploading an existing file**, then drag in **the contents** of this folder
   (`index.html`, `project.html`, `assets`, etc., not the folder itself). Click **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment*, choose
   **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. After a minute or two, your site's address appears at the top of the Pages settings.
   Add that link to your résumé and LinkedIn.

**Hidden file note:** macOS hides files that start with a dot, so `.nojekyll` may not upload
by dragging. If it's missing from your repository, click **Add file → Create new file**, name it
`.nojekyll`, leave it empty, and commit. It keeps GitHub from altering published course files.

**Upload limits:** the browser uploader accepts up to 100 files at a time and 25 MB per file.
Published Storyline and Rise courses often contain hundreds of files, so for course folders the
free [GitHub Desktop](https://desktop.github.com) app is easier: clone the repository, copy the
course folder in, then *Commit* and *Push*. Desktop allows files up to 100 MB; for courses with
large videos, compress the video or host it on YouTube/Vimeo.

### Updating later

Edit files directly on GitHub (click a file, then the pencil icon), or upload replacements.
The live site updates within a minute or two of each commit.

## Preview on your computer

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. (Opening `index.html` by double-clicking also works for most
things, but embedded courses need a local server.)

## Customize the look

At the top of `assets/css/styles.css`:

- `--navy` is the button and link color, `--green` the secondary color, and `--highlight`
  the yellow highlighter used under the headline and on hover.
- `--paper` is the page background.
- `--tone-*` and `--mat-*` are the preview colors (`green`, `blue`, `sand`, `slate`).
- `--font-display` and `--font-text` set the fonts. The site uses Schibsted Grotesk,
  loaded from Google Fonts in each HTML file.

The site is light mode only.
