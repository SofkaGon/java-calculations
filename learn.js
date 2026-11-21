// Learn Java page logic. Lesson content lives in lessons.js.
// All text is inserted with textContent, so code samples can't break the page.

const STORAGE_KEY = "javaLearn.completed";

/* ---------- progress (localStorage) ---------- */
function loadCompleted() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCompleted(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    /* storage unavailable (private mode etc.): progress just won't persist */
  }
}

let completed = loadCompleted();
let currentId = null;
let searchTerm = "";

const isDone = (id) => completed.includes(id);

/* ---------- small DOM helper ---------- */
function el(tag, text, attrs) {
  const node = document.createElement(tag);
  if (text !== undefined && text !== null) node.textContent = text;
  if (attrs) Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
  return node;
}

/* ---------- sidebar ---------- */
function matches(lesson) {
  if (!searchTerm) return true;
  const haystack = [lesson.title, lesson.module, lesson.source, ...lesson.concepts]
    .join(" ")
    .toLowerCase();
  return haystack.includes(searchTerm);
}

function renderSidebar() {
  const nav = document.getElementById("lesson-list");
  nav.textContent = "";

  const modules = [...new Set(LESSONS.map((l) => l.module))];
  let shown = 0;

  modules.forEach((moduleName) => {
    const lessons = LESSONS.filter((l) => l.module === moduleName && matches(l));
    if (lessons.length === 0) return;

    nav.appendChild(el("h2", moduleName));
    const ul = el("ul");
    lessons.forEach((lesson) => {
      const li = el("li");
      const a = el("a", lesson.title, { href: "#" + lesson.id });
      if (lesson.id === currentId) a.setAttribute("aria-current", "true");
      li.appendChild(a);
      if (isDone(lesson.id)) li.appendChild(el("span", " ✓ (completed)"));
      ul.appendChild(li);
      shown++;
    });
    nav.appendChild(ul);
  });

  if (shown === 0) nav.appendChild(el("p", "No lessons match your search."));

  const total = LESSONS.length;
  const done = LESSONS.filter((l) => isDone(l.id)).length;
  document.getElementById("progress-text").textContent =
    `Progress: ${done} of ${total} lessons completed`;
  const finished = document.getElementById("all-done");
  if (finished) finished.hidden = done !== total;
  const bar = document.getElementById("progress-bar");
  bar.max = total;
  bar.value = done;
}

/* ---------- lesson view ---------- */
function section(parent, heading) {
  const s = el("section");
  s.appendChild(el("h3", heading));
  parent.appendChild(s);
  return s;
}

function renderLesson(lesson) {
  const view = document.getElementById("lesson-view");
  view.textContent = "";

  const index = LESSONS.indexOf(lesson);

  view.appendChild(el("p", `${lesson.module} · Lesson ${index + 1} of ${LESSONS.length}`));
  view.appendChild(el("h2", lesson.title));
  view.appendChild(el("p", "Source file: " + lesson.source));
  view.appendChild(el("p", "Concepts: " + lesson.concepts.join(", ")));
  view.appendChild(el("p", lesson.intro));

  // Code
  const codeSec = section(view, "The code");
  const pre = el("pre");
  pre.appendChild(el("code", lesson.code.trim()));
  pre.setAttribute("tabindex", "0"); // keyboard-scrollable
  codeSec.appendChild(pre);

  // How it works
  const howSec = section(view, "How it works");
  lesson.explain.forEach((p) => howSec.appendChild(el("p", p)));

  // Syntax breakdown
  if (lesson.breakdown && lesson.breakdown.length) {
    const synSec = section(view, "Syntax breakdown");
    const dl = el("dl");
    lesson.breakdown.forEach(([snippet, text]) => {
      const dt = el("dt");
      dt.appendChild(el("code", snippet));
      dl.appendChild(dt);
      dl.appendChild(el("dd", text));
    });
    synSec.appendChild(dl);
  }

  // Look closer (known quirks / bugs in the original code)
  if (lesson.lookCloser && lesson.lookCloser.length) {
    const lcSec = section(view, "Look closer");
    const ul = el("ul");
    lesson.lookCloser.forEach((t) => ul.appendChild(el("li", t)));
    lcSec.appendChild(ul);
  }

  // Practice
  const exSec = section(view, "Practice");
  exSec.appendChild(el("p", lesson.exercise));

  // Complete button
  const done = isDone(lesson.id);
  const btn = el("button", done ? "Mark as not completed" : "Mark as completed", {
    type: "button",
    "aria-pressed": String(done),
  });
  btn.addEventListener("click", () => toggleComplete(lesson.id));
  view.appendChild(btn);

  // Previous / next
  const pager = el("nav", null, { "aria-label": "Lesson navigation" });
  const prev = LESSONS[index - 1];
  const next = LESSONS[index + 1];
  // First lesson links back to the Introduction page; last lesson links on to the Calculator page.
  pager.appendChild(prev
    ? el("a", "← Previous: " + prev.title, { href: "#" + prev.id })
    : el("a", "← Back to Introduction to Java", { href: "index.html" }));
  pager.appendChild(next
    ? el("a", "Next: " + next.title + " →", { href: "#" + next.id })
    : el("a", "Next: Java Calculator →", { href: "calculator.html" }));
  view.appendChild(pager);

  document.title = lesson.title + " – Learn Java";
}

function toggleComplete(id) {
  completed = isDone(id) ? completed.filter((x) => x !== id) : [...completed, id];
  saveCompleted(completed);
  showLesson(id, false);
}

function showLesson(id, scroll = true) {
  const lesson = LESSONS.find((l) => l.id === id) || LESSONS[0];
  currentId = lesson.id;
  renderLesson(lesson);
  renderSidebar();
  if (scroll) document.getElementById("lesson-view").scrollIntoView();
}

/* ---------- start-up ---------- */
function firstUnfinished() {
  return (LESSONS.find((l) => !isDone(l.id)) || LESSONS[0]).id;
}

document.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash.slice(1);
  showLesson(hash || firstUnfinished(), false);

  window.addEventListener("hashchange", () => showLesson(window.location.hash.slice(1)));

  document.getElementById("lesson-search").addEventListener("input", (e) => {
    searchTerm = e.target.value.trim().toLowerCase();
    renderSidebar();
  });

  document.getElementById("reset-progress").addEventListener("click", () => {
    if (confirm("Clear all saved progress on this device?")) {
      completed = [];
      saveCompleted(completed);
      showLesson(currentId, false);
    }
  });
});
