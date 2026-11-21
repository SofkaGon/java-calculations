// Shared navigation + footer for all pages.
// To add or rename a page, edit PAGES below – every page updates.
const PAGES = [
  { href: "index.html", label: "Introduction to Java" },
  { href: "learn.html", label: "Learn Java" },
  { href: "calculator.html", label: "Java Calculator" },
];

function currentPage() {
  const file = window.location.pathname.split("/").pop();
  return file === "" ? "index.html" : file; // "/" means index.html
}

function renderHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const links = PAGES.map((p) => {
    const current = p.href === currentPage() ? ' aria-current="page"' : "";
    return `<li><a href="${p.href}"${current}>${p.label}</a></li>`;
  }).join("");

  header.innerHTML = `
    <a class="skip-link" href="#main">Skip to main content</a>
    <p class="site-title">Java Learning Website</p>
    <nav aria-label="Main">
      <ul>${links}</ul>
    </nav>`;
}

function renderFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;
  footer.innerHTML = "<p>Java Learning Website</p>";
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});
