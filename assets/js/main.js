/* ==========================================================================
   Site behaviour. Builds the course and documentation lists on the home page
   and the case-study pages (project.html?id=...) from assets/js/projects.js.
   You shouldn't need to edit this file; edit projects.js instead.
   ========================================================================== */

(() => {
  "use strict";

  const data = window.PORTFOLIO || {};
  const courses = data.courses || [];
  const docs = data.docs || [];
  const owner = data.owner || "";

  const TONES = ["green", "blue", "sand", "slate"];
  const COURSE_PREVIEWS = ["lesson", "scenario", "simulation", "blended"];
  const DOC_PREVIEWS = ["page", "article"];
  const CAPTIONS = {
    lesson: "Lesson view",
    scenario: "Branching scenario",
    simulation: "Guided practice, Try mode",
    blended: "Program overview",
    page: "First page",
    article: "Article view",
  };

  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const list = (items, render) => (items || []).map(render).join("");
  const projectUrl = (item) => `project.html?id=${encodeURIComponent(item.id)}`;
  const toneClass = (item) => `tone-${TONES.includes(item.color) ? item.color : "green"}`;
  const at = (items, i, fallback = "") => esc((items || [])[i] || fallback);
  const meta = (item, kind) =>
    [kind === "course" ? item.format : item.docType, item.length].filter(Boolean).map(esc).join(" · ");

  const previewType = (item, kind) => {
    const allowed = kind === "doc" ? DOC_PREVIEWS : COURSE_PREVIEWS;
    return allowed.includes(item.preview) ? item.preview : allowed[0];
  };

  const caption = (item, kind) => {
    if (item.caption) return item.caption;
    const tool = (item.tools || [])[0];
    if (item.image) return tool || "";
    return [tool, CAPTIONS[previewType(item, kind)]].filter(Boolean).join(", ");
  };

  /* ---------- Drawn previews (used until a real screenshot is added) ---------- */

  const CURSOR =
    '<svg class="ui-cursor" viewBox="0 0 24 24"><path d="M5 3l14 8-6.5 1.5L9.5 19z" fill="#15233b" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg>';

  const screens = {
    lesson(item) {
      const outline = (item.outline || []).slice(0, 5);
      const current = Math.min(2, Math.max(outline.length - 1, 0));
      const percent = outline.length ? Math.round((current / outline.length) * 100) : 40;
      const lessons = list(outline, (title, i) => {
        const state = i < current ? "is-done" : i === current ? "is-current" : "";
        return `<li class="${state}"><span>${esc(title)}</span></li>`;
      });
      return `
        <div class="ui ui--lesson">
          <div class="ui-side">
            <p class="ui-course">${esc(item.title)}</p>
            <div class="ui-progress"><span style="width:${percent}%"></span></div>
            <p class="ui-small">${percent}% complete</p>
            <ol class="ui-lessons">${lessons}</ol>
          </div>
          <div class="ui-main">
            <p class="ui-small">Lesson ${current + 1}${outline.length ? ` of ${outline.length}` : ""}</p>
            <p class="ui-h">${at(outline, current, "Lesson title")}</p>
            <span class="bar w90"></span><span class="bar w80"></span><span class="bar w55"></span>
            <div class="ui-tiles"><span><i></i><i></i></span><span><i></i><i></i></span><span><i></i><i></i></span></div>
            <span class="ui-btn">Continue</span>
          </div>
        </div>`;
    },

    scenario(item) {
      const steps = Math.max((item.outline || []).length, 3);
      const dots = Array.from({ length: steps }, (_, i) => `<i class="${i < 1 ? "on" : ""}"></i>`).join("");
      return `
        <div class="ui ui--scenario">
          <div class="ui-bar"><span class="ui-course">${esc(item.title)}</span><span class="ui-steps">${dots}</span></div>
          <div class="ui-stage">
            <div class="ui-scene">
              <span class="ui-person"></span>
              <div class="ui-bubble">
                <p class="ui-small ui-strong">${at(item.outline, 0, "Scenario 1")}</p>
                <span class="bar w95"></span><span class="bar w75"></span>
              </div>
            </div>
            <div class="ui-question">
              <p class="ui-h ui-h--sm">What would you do?</p>
              <div class="ui-choice"><span class="ui-radio"></span><span class="bar w70"></span></div>
              <div class="ui-choice is-picked"><span class="ui-radio"></span><span class="bar w55"></span></div>
              <div class="ui-choice"><span class="ui-radio"></span><span class="bar w65"></span></div>
              <span class="ui-btn">Submit</span>
            </div>
          </div>
        </div>`;
    },

    simulation(item) {
      const nav = list((item.outline || []).slice(0, 4), (t, i) => `<span class="${i === 1 ? "on" : ""}">${esc(t)}</span>`);
      const row = (width, target) => `
        <div class="ui-row${target ? " is-target" : ""}">
          <span class="bar ${width}"></span><span class="ui-tag"></span>
          <span class="ui-mini-btn">Enroll${target ? `<span class="ui-hint">Click <b>Enroll</b> to register for this course.</span>${CURSOR}` : ""}</span>
        </div>`;
      return `
        <div class="ui ui--sim">
          <div class="ui-modes"><span>Watch</span><span class="on">Try</span><span>Do</span></div>
          <div class="ui-app">
            <div class="ui-appbar"><span class="ui-logo"></span><span class="ui-small ui-strong">Learning Portal</span><span class="ui-search"></span><span class="ui-avatar"></span></div>
            <div class="ui-appbody">
              <div class="ui-nav">${nav}</div>
              <div class="ui-table">
                <p class="ui-h ui-h--sm">Course catalog</p>
                ${row("w45")}${row("w35")}${row("w45", true)}${row("w35")}
              </div>
            </div>
          </div>
        </div>`;
    },

    blended(item) {
      const outline = item.outline || [];
      const online = outline.slice(0, Math.max(outline.length - 1, 1));
      const checks = list(online, (t, i) => `<li class="${i === online.length - 1 ? "is-open" : ""}">${esc(t)}</li>`);
      return `
        <div class="ui ui--agenda">
          <div class="ui-bar"><span class="ui-course">${esc(item.title)}</span><span class="ui-small">2 parts</span></div>
          <div class="ui-split">
            <div class="ui-part">
              <p class="ui-small">Part 1 · Self-paced</p>
              <p class="ui-h ui-h--sm">Online primer</p>
              <ul class="ui-checks">${checks}</ul>
            </div>
            <div class="ui-part">
              <p class="ui-small">Part 2 · Live session</p>
              <p class="ui-h ui-h--sm">${at(outline, outline.length - 1, "Live workshop")}</p>
              <div class="ui-call"><span class="is-speaking"></span><span></span><span></span><span></span><span></span><span></span></div>
              <div class="ui-tools"><i></i><i></i><i></i><b>Launch poll</b></div>
            </div>
          </div>
        </div>`;
    },

    page(item) {
      const steps = (item.outline || []).slice(0, 3);
      const items = list(steps, (t, i) => `
        <li>
          <span class="pg-num">${i + 1}</span>
          <div><p class="pg-step">${esc(t)}</p><span class="bar w80"></span>${i < 2 ? '<div class="pg-shot"></div>' : ""}</div>
        </li>`);
      return `
        <div class="ui ui--page">
          <div class="pg-head"><span class="pg-mark"></span><span class="ui-small">${esc(item.docType || "Guide")}</span></div>
          <p class="pg-title">${esc(item.title)}</p>
          <span class="bar w90"></span><span class="bar w70"></span>
          <ol class="pg-steps">${items}</ol>
          <div class="pg-foot"><span class="ui-small">${esc(owner)}</span><span class="ui-small">1</span></div>
        </div>`;
    },

    article(item) {
      const outline = item.outline || [];
      return `
        <div class="ui ui--article">
          <div class="ar-top"><span class="ui-strong">Help Center</span><span class="ar-search">Search articles</span></div>
          <div class="ar-body">
            <p class="ui-small ar-crumb">Getting started ›</p>
            <p class="pg-title">${at(outline, 0, "How-to article")}</p>
            <span class="bar w95"></span><span class="bar w80"></span>
            <div class="ar-step"><span class="pg-num">1</span><span class="bar w70"></span></div>
            <div class="pg-shot"></div>
            <div class="ar-step"><span class="pg-num">2</span><span class="bar w60"></span></div>
            <div class="ar-related">
              <p class="ui-small ui-strong">Related articles</p>
              ${list(outline.slice(1, 3), (t) => `<span>${esc(t)}</span>`)}
            </div>
            <div class="ar-helpful">Was this helpful? <b>Yes</b><b>No</b></div>
          </div>
        </div>`;
    },
  };

  function preview(item, kind) {
    const isDoc = kind === "doc";
    const inner = item.image
      ? `<img src="${esc(item.image)}" alt="${esc(item.imageAlt || `Screenshot of ${item.title}`)}" loading="lazy">`
      : screens[previewType(item, kind)](item);
    return `
      <div class="mat ${toneClass(item)}">
        <div class="shot${isDoc ? " shot--doc" : ""}"${item.image ? "" : ' aria-hidden="true"'}>${inner}</div>
      </div>`;
  }

  /* ---------- Home page ---------- */

  function courseEntry(item, i) {
    const url = projectUrl(item);
    const brief = [
      item.challenge && `<div><dt>The problem</dt><dd>${esc(item.challenge)}</dd></div>`,
      item.deliverables?.length && `<div><dt>Deliverables</dt><dd>${esc(item.deliverables.join(", "))}</dd></div>`,
    ]
      .filter(Boolean)
      .join("");
    return `
      <article class="work">
        <a class="work-media" href="${url}" tabindex="-1" aria-hidden="true">
          ${preview(item, "course")}
          <span class="media-caption">${esc(caption(item, "course"))}</span>
        </a>
        <div class="work-text">
          <p class="work-meta"><span class="work-num">${String(i + 1).padStart(2, "0")}</span>${meta(item, "course")}</p>
          <h3><a href="${url}">${esc(item.title)}</a></h3>
          ${item.summary ? `<p class="work-summary">${esc(item.summary)}</p>` : ""}
          ${brief ? `<dl class="brief">${brief}</dl>` : ""}
          <a class="arrow-link" href="${url}">Read the case study <span aria-hidden="true">→</span></a>
        </div>
      </article>`;
  }

  function docEntry(item) {
    const url = projectUrl(item);
    return `
      <li class="doc">
        <a class="doc-media" href="${url}" tabindex="-1" aria-hidden="true">${preview(item, "doc")}</a>
        <div>
          <p class="work-meta">${meta(item, "doc")}</p>
          <h3><a href="${url}">${esc(item.title)}</a></h3>
          ${item.summary ? `<p class="work-summary">${esc(item.summary)}</p>` : ""}
          ${item.audience ? `<p class="doc-audience"><strong>Written for:</strong> ${esc(item.audience)}</p>` : ""}
          <a class="arrow-link" href="${url}">View the document <span aria-hidden="true">→</span></a>
        </div>
      </li>`;
  }

  function renderHome() {
    const courseList = document.getElementById("course-list");
    const docList = document.getElementById("doc-list");

    if (courseList) {
      courseList.innerHTML = courses.length
        ? list(courses, courseEntry)
        : '<p class="empty">Courses will appear here once they\'re added to assets/js/projects.js.</p>';
    }
    if (docList) {
      docList.innerHTML = docs.length
        ? list(docs, docEntry)
        : '<li class="empty">Documents will appear here once they\'re added to assets/js/projects.js.</li>';
    }

    const counts = { courses: courses.length, docs: docs.length };
    document.querySelectorAll("[data-count]").forEach((el) => {
      const n = counts[el.dataset.count];
      el.textContent = n ? String(n).padStart(2, "0") : "";
    });
  }

  /* ---------- Case-study page ---------- */

  function renderProject() {
    const root = document.getElementById("project");
    if (!root) return;

    const id = new URLSearchParams(window.location.search).get("id");
    const all = [
      ...courses.map((item) => ({ item, kind: "course" })),
      ...docs.map((item) => ({ item, kind: "doc" })),
    ];
    const index = all.findIndex((entry) => entry.item.id === id);

    if (index === -1) {
      root.innerHTML = `
        <section class="case-hero container">
          <h1>That project couldn't be found.</h1>
          <p class="lede" style="margin-top:1.25rem">It may have been renamed or removed.</p>
          <div class="actions"><a class="btn" href="index.html#courses">Back to the portfolio</a></div>
        </section>`;
      return;
    }

    const { item, kind } = all[index];
    const isCourse = kind === "course";

    document.title = owner ? `${item.title} | ${owner}` : item.title;
    const description = document.querySelector('meta[name="description"]');
    if (description && item.summary) description.setAttribute("content", item.summary);

    const launchText = item.linkLabel || (isCourse ? "Launch course" : "Open document");
    const launch = item.link
      ? `<a class="btn" href="${esc(item.link)}" target="_blank" rel="noopener">${esc(launchText)} <span aria-hidden="true">↗</span></a>`
      : `<span class="btn" aria-disabled="true">${isCourse ? "Course link coming soon" : "Document link coming soon"}</span>`;

    const media = item.embed
      ? `<div class="mat ${toneClass(item)}"><iframe src="${esc(item.embed)}" title="${esc(item.title)}" loading="lazy" allow="fullscreen; autoplay" allowfullscreen${isCourse ? "" : ' class="is-doc"'}></iframe></div>`
      : preview(item, kind);

    const facts = [
      ["Audience", item.audience],
      [isCourse ? "Format" : "Document type", isCourse ? item.format : item.docType],
      [isCourse ? "Duration" : "Length", item.length],
      ["My role", item.role],
      ["Tools", (item.tools || []).join(", ")],
    ]
      .filter(([, value]) => value)
      .map(([label, value]) => `<div><dt>${label}</dt><dd>${esc(value)}</dd></div>`)
      .join("");

    const row = (heading, body) => (body ? `<div class="case-row"><h2>${heading}</h2><div>${body}</div></div>` : "");
    const para = (text) => (text ? `<p>${esc(text)}</p>` : "");
    const items = (values, cls) => (values?.length ? `<ol class="${cls}">${list(values, (v) => `<li>${esc(v)}</li>`)}</ol>` : "");
    const dashes = (values) => (values?.length ? `<ul class="dash-list">${list(values, (v) => `<li>${esc(v)}</li>`)}</ul>` : "");

    const body = [
      row("The problem", para(item.challenge)),
      row(isCourse ? "The learning experience" : "What it covers", para(item.overview)),
      row("Design decisions", items(item.approach, "steps")),
      row(isCourse ? "Course outline" : "Contents", items(item.outline, "outline-list")),
      row("Deliverables", dashes(item.deliverables)),
      row("Outcomes", dashes(item.results)),
    ].join("");

    let pager = "";
    if (all.length > 1) {
      const next = all[(index + 1) % all.length];
      const prev = all[(index - 1 + all.length) % all.length];
      const link = (entry, label, cls) =>
        `<a class="${cls}" href="${projectUrl(entry.item)}"><span>${label}</span><strong>${esc(entry.item.title)}</strong></a>`;
      pager = `
        <nav class="container case-pager" aria-label="More work">
          ${all.length > 2 ? link(prev, "← Previous", "is-prev") : ""}
          ${link(next, "Next →", "is-next")}
        </nav>`;
    }

    root.innerHTML = `
      <section class="case-hero container">
        <a class="back-link" href="index.html#${isCourse ? "courses" : "documentation"}">← All ${isCourse ? "courses" : "documentation"}</a>
        <p class="case-type">${isCourse ? "E-learning course" : "Help documentation"}</p>
        <h1>${esc(item.title)}</h1>
        <div class="case-intro grid-12">
          ${item.summary ? `<p class="lede">${esc(item.summary)}</p>` : ""}
          <div class="actions">${launch}</div>
        </div>
        ${facts ? `<dl class="case-facts">${facts}</dl>` : ""}
      </section>

      <div class="container case-media">${media}</div>

      <section class="container case-body" aria-label="Case study">${body}</section>

      ${pager}`;
  }

  /* ---------- Shared ---------- */

  function setupNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    const setOpen = (open) => {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    };
    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  function init() {
    renderHome();
    renderProject();
    setupNav();
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
