// Java Calculator page.
// EDIT THE CONFIG BELOW. Everything marked TODO is a placeholder to replace.
//
// How updating works:
//  1. Publish a new GitHub Release (upload the .jar/.zip as a release asset).
//  2. In the release notes, include a line like:  SHA-256: <64 hex characters>
//  3. This page reads your releases from GitHub's public API and shows the
//     newest version, date, file size, download link, checksum and changelog.
//     No change to the website is needed.
// If the API can't be reached (or repo.owner is still a placeholder), the page
// shows the "fallback" values instead.

const CALCULATOR = {
  name: "Specific Calculator", // window title used in the application

  // TODO: your GitHub user name and repository that holds the Releases
  repo: { owner: "YOUR-GITHUB-USERNAME", name: "YOUR-REPOSITORY" },

  intro: "Specific Calculator is a desktop application written in Java with a JavaFX graphical interface. It collects 22 small calculators in one window: you pick a calculator from a drop-down list, fill in the fields that appear, and press Calculate.",
  purpose: "To put the ideas from the Learn Java lessons to work in a real program: every calculator is built from variables, conditions, loops and methods, and shows how the same Java code can sit behind a graphical interface.",

  // Names match the drop-down list in the application (Main.java).
  // Categories are shown in the order they first appear below.
  // Each calculator: category, name, description, inputs, output, notes[] (optional).
  calculators: [
    /* ---- Everyday maths ---- */
    {
      category: "Everyday maths",
      name: "Division Remainder",
      description: "Divides one whole number by another and shows both the whole-number result and what is left over.",
      inputs: "First number and second number (whole numbers).",
      output: "For example 17 and 5 give: The result of 17 / 5 is 3 and the remainder is 2.",
      notes: ["Dividing by zero is not calculated; the message \"Cannot divide by zero\" is shown instead."],
    },
    {
      category: "Everyday maths",
      name: "Multiplication Table",
      description: "Lists a number multiplied by 1 up to 10.",
      inputs: "One whole number.",
      output: "Ten lines such as 7 * 3 = 21.",
    },
    {
      category: "Everyday maths",
      name: "Factorial Calculator",
      description: "Multiplies all whole numbers from 1 up to n and shows each step.",
      inputs: "One whole number from 0 to 20.",
      output: "The multiplication steps and the result, for example 5 != 1 x 2 x 3 x 4 x 5 = 120.",
      notes: ["Numbers above 20 are refused because the result would be too large for a long.", "Negative numbers are refused: factorial is not defined for them."],
    },
    {
      category: "Everyday maths",
      name: "GCD",
      description: "Finds the greatest common divisor: the largest number that divides both inputs without a remainder, using the Euclidean algorithm.",
      inputs: "First number and second number (whole numbers), in any order.",
      output: "The GCD, for example 48 and 18 give 6.",
    },

    /* ---- Number analysis ---- */
    {
      category: "Number analysis",
      name: "Prime Check",
      description: "Tells you whether a number is prime and, if it is not, shows its smallest divisor.",
      inputs: "One whole number.",
      output: "For example: 91 is Not prime (smallest divisor: 7).",
      notes: ["Text that is not a whole number is reported as not a number.", "Numbers below 2 are reported as not prime."],
    },
    {
      category: "Number analysis",
      name: "Prime Factors",
      description: "Breaks a number into its prime factors, writes repeated factors as powers and counts how many divisors the number has.",
      inputs: "One whole number, 2 or greater.",
      output: "For example 12 gives: 12 = 2^2 x 3, Divisors:6, Not prime. A prime number is reported as Prime.",
      notes: ["Numbers below 2 are refused."],
    },
    {
      category: "Number analysis",
      name: "Digit Sum",
      description: "Adds up the digits of a number, then the digits of that sum, and so on until a single digit is left, showing each stage.",
      inputs: "One positive whole number.",
      output: "For example 38 gives: 8 -> 11, then 1 -> 2, then Final result: 2. Each line shows the running total as the digits are added.",
      notes: ["Zero and negative numbers are refused."],
    },
    {
      category: "Number analysis",
      name: "Reverse Number",
      description: "Writes the digits of a number in reverse order.",
      inputs: "One positive whole number.",
      output: "For example 1203 gives 3021.",
      notes: ["Zeros at the end disappear (120 gives 21) because the result is a number.", "Zero and negative numbers give 0."],
    },
    {
      category: "Number analysis",
      name: "Base Converter",
      description: "Converts a number written in one number system (base) into another.",
      inputs: "The number, its original base and the target base.",
      output: "The converted number, for example 1010 from base 2 to base 8 gives 12.",
      notes: ["Both bases must be from 2 to 9.", "Each digit of the input must be smaller than its original base; otherwise it reports Invalid digit for base.", "The result is built digit by digit using recursion."],
    },

    /* ---- Lists of numbers ---- */
    {
      category: "Lists of numbers",
      name: "Closest To Zero",
      description: "Finds the number in a list that is nearest to zero.",
      inputs: "At least 2 whole numbers separated by commas, for example -4, 3, 7, -3.",
      output: "For example the list above gives: Closest to zero: 3.",
      notes: ["If a negative and a positive number are equally close (such as -3 and 3), the positive one is chosen."],
    },
    {
      category: "Lists of numbers",
      name: "Position Largest Value",
      description: "Finds the biggest number in a list and where it is.",
      inputs: "Whole numbers separated by commas, for example 3, 9, 2.",
      output: "For example 3, 9, 2 gives: largest 9 at position 2.",
      notes: ["Positions start at 1.", "If the largest value appears more than once, the first position is reported."],
    },
    {
      category: "Lists of numbers",
      name: "Second Largest Distinct Value",
      description: "Finds the second biggest number that is different from the biggest.",
      inputs: "Whole numbers separated by commas.",
      output: "The value, or -1 if there are fewer than two numbers or no second distinct value.",
    },
    {
      category: "Lists of numbers",
      name: "Longest Increasing Run",
      description: "Finds the longest stretch of numbers in a row where each number is bigger than the one before.",
      inputs: "Whole numbers separated by commas.",
      output: "For example 1, 2, 3, 1, 2 gives: Longest increasing run: 3.",
    },
    {
      category: "Lists of numbers",
      name: "Longest Run Of Negative Numbers",
      description: "Finds the longest stretch of negative numbers that sit next to each other in the list.",
      inputs: "Whole numbers separated by commas.",
      output: "For example 4, -1, -2, -3, 5, -6 gives: Longest run of negative numbers: 3.",
    },
    {
      category: "Lists of numbers",
      name: "Largest Sum of Two Consecutive Numbers",
      description: "Looks at every pair of neighbouring numbers and finds the pair with the biggest sum.",
      inputs: "At least 2 whole numbers separated by commas.",
      output: "For example 1, 5, 4, 2 gives: max 9 from pair 5 + 4.",
    },
    {
      category: "Lists of numbers",
      name: "Maximum Input",
      description: "Counts the numbers you enter and finds the biggest one.",
      inputs: "Numbers separated by commas. Decimals are allowed.",
      output: "For example 2.5, 9, -1 gives: Numbers entered: 3 and Maximum: 9.00.",
    },

    /* ---- Geometry and travel ---- */
    {
      category: "Geometry and travel",
      name: "Coordinates",
      description: "Calculates the straight-line distance between two points on a grid using the distance formula.",
      inputs: "X1, Y1, X2 and Y2 (whole numbers): the coordinates of the two points.",
      output: "For example (0, 0) and (3, 4) give a distance of 5.0.",
    },
    {
      category: "Geometry and travel",
      name: "ETA",
      description: "Works out how long a trip takes from the speed and the distance, using time = distance / velocity.",
      inputs: "Velocity and distance (whole numbers).",
      output: "The time in seconds and milliseconds, for example velocity 4 and distance 10 give 2 seconds and 500 milliseconds.",
      notes: ["Velocity must be above 0 and distance cannot be negative; otherwise it reports Invalid input."],
    },

    /* ---- Money and dates ---- */
    {
      category: "Money and dates",
      name: "Bank Account",
      description: "Applies a list of deposits and withdrawals to a starting balance and summarises what happened.",
      inputs: "The initial balance, and the transactions separated by commas. Each transaction is a letter and an amount, for example D 200, W 50 (D = deposit, W = withdrawal).",
      output: "Final balance, lowest balance, number of deposits, number of successful withdrawals, number of rejected transactions and total fees.",
      notes: [
        "The first 3 successful withdrawals are free; every later successful withdrawal costs a 2.50 fee.",
        "A transaction is rejected if its amount is zero or negative, its letter is not a capital D or W, or a withdrawal plus fee would take the balance below zero.",
        "A rejected transaction does not change the balance.",
        "A transaction not written as a letter and an amount shows: Invalid transaction format. Use D 200 or W 50.",
      ],
    },
    {
      category: "Money and dates",
      name: "Loan Schedule",
      description: "Builds a month-by-month repayment table for a loan.",
      inputs: "Principal, annual interest rate (%) and monthly payment.",
      output: "One row per month (month, interest, balance with interest, payment, balance left), followed by the number of months, total interest and total paid.",
      notes: [
        "Interest is charged each month at the yearly rate divided by 12.",
        "If the payment does not even cover the first month's interest, the calculator says the loan will never be paid off.",
        "The last payment is smaller: it covers only what is still owed.",
      ],
    },
    {
      category: "Money and dates",
      name: "Best Trade",
      description: "Given a list of daily stock prices, finds the best day to buy and the best later day to sell for the biggest profit.",
      inputs: "At least 2 prices separated by commas. Decimals are allowed.",
      output: "For example 7, 1, 5, 3, 6, 4 gives: Profit: 5.00, Buy day: 2, Sell day: 5.",
      notes: ["Days are numbered from 1 in the order the prices are entered.", "You must sell after you buy. If prices only fall, the result is the smallest loss, shown as a negative profit."],
    },
    {
      category: "Money and dates",
      name: "Date Difference",
      description: "Counts the days between two dates and tells you which day of the week each one falls on.",
      inputs: "First day, month and year, then second day, month and year.",
      output: "Days between the dates, and the weekday of the first and second date.",
      notes: [
        "Years before 1900, impossible months and impossible days (such as 29 February in a non-leap year) are reported as Invalid date.",
        "If the second date is earlier than the first, it says so instead of calculating.",
        "Leap years follow the usual rule: divisible by 4, except century years unless they are divisible by 400.",
        "Weekdays are found with Zeller's congruence.",
      ],
    },
  ],

  // TODO: put screenshots in the images/ folder and list them here.
  screenshots: [
    // { src: "images/calculator-main.png", alt: "Main calculator window", caption: "Main window" },
  ],

  requirements: [
    "Java: JDK 25 (developed and tested with jdk-25 for Windows 64-bit)",
    "JavaFX: JavaFX SDK 25 (tested with openjfx-25.0.4, Windows 64-bit). JavaFX is not included in the download: get it yourself from the official OpenJFX site (links below)",
    "Operating system: Windows 64-bit. Other systems have not been tested",
    "Screen: the window opens at 550 x 450 pixels",
  ],

  // Official sources for the things the application needs but does not ship.
  getJava: [
    { label: "JDK 25 from Oracle (choose Java 25 on the page)", url: "https://www.oracle.com/java/technologies/downloads/" },
    { label: "JavaFX SDK 25 from the official OpenJFX site", url: "https://openjfx.io/" },
  ],

  install: [
    "Install JDK 25 and download the JavaFX 25 SDK from the official sources above. Unzip the JavaFX SDK to a folder of your choice.",
    "Download the calculator file from the official Releases page.",
    "Verify the SHA-256 checksum (see the Download section).",
    "Open Command Prompt in the folder that contains the downloaded file and run the start command below. Replace the JavaFX folder with the place where you unzipped it, and FILENAME.jar with the name of the downloaded file.",
  ],

  launchCommand: "java --module-path \"C:\\javafx-sdk-25.0.4\\lib\" --add-modules javafx.controls -jar FILENAME.jar",

  limits: [
    {
      heading: "Tested environment",
      items: [
        "Tested only on Windows 64-bit with JDK 25 and JavaFX 25.0.4. Other systems and versions may work but have not been tested.",
      ],
    },
    {
      heading: "Entering numbers",
      items: [
        "Most calculators accept whole numbers only. Maximum Input, Best Trade, Bank Account and Loan Schedule also accept decimals.",
        "Whole numbers must be between about -2.1 billion and 2.1 billion. Base Converter accepts larger whole numbers.",
        "A double comma (1,,2) or a comma at the start of a list gives: Invalid input. Please check your numbers. Spaces around commas are fine.",
        "Digit Sum, Reverse Number, Multiplication Table and Prime Check do not ignore spaces: type only the digits, with no space before or after.",
      ],
    },
    {
      heading: "Specific calculators",
      items: [
        "Second Largest Distinct Value: known issue. For some lists where the largest number appears more than once (for example 5, 3, 5 or 5, 5, 3) it answers -1 (no second value) even though a second largest exists.",
        "Prime Check: very large numbers can take a very long time, and the window stops responding until it finishes.",
        "Prime Factors: may also be slow for large numbers, especially large primes.",
        "Reverse Number: zeros at the end are dropped (120 gives 21). If the reversed number is too big for a whole number (for example reversing 1999999999) the answer is wrong. Zero and negative numbers give 0.",
        "Base Converter: bases 2 to 9 only. Negative numbers are not supported and give a meaningless result.",
        "Factorial Calculator: 0 to 20 only.",
        "Longest Increasing Run: numbers must be strictly bigger than the one before, so equal neighbours end a run. Longest Run Of Negative Numbers: zero does not count as negative.",
        "ETA: the result is always labelled in seconds, so enter velocity and distance in matching units (for example metres per second and metres). Milliseconds are cut off, not rounded.",
        "Bank Account: the transaction letter must be a capital D or W. Money is stored as ordinary decimal numbers and shown rounded to 2 places.",
        "Loan Schedule: the inputs are not range-checked, and a monthly payment only slightly above the monthly interest produces a very long table.",
        "Best Trade: allows one buy followed by one later sell. If prices only fall, the best trade shown is a loss (negative profit).",
        "Date Difference: dates from the year 1900 onwards only, using the Gregorian calendar, with no times of day.",
      ],
    },
  ],

  // These steps describe the interface in Main.java.
  usage: [
    "Open the Select calculator drop-down and choose one of the 22 calculators.",
    "Input fields appear for that calculator. Fill them in. Lists of numbers are separated by commas, for example 4, -1, 7.",
    "Press Calculate. The answer appears in the Result box.",
    "If a number cannot be read, the result box says: Invalid input. Please check your numbers.",
    "Choosing another calculator clears the fields and the previous result.",
  ],

  // Shown only when GitHub can't be reached.
  fallback: {
    version: "TODO",
    date: "TODO",
    fileName: "TODO",
    size: "TODO",
    sha256: "",
    changelog: [
      // { version: "1.0.0", date: "2026-01-01", notes: ["First release"] },
    ],
  },
};

/* ---------- helpers ---------- */
// Returns a harmless detached element if an id is missing from the HTML,
// so one missing element can't stop the rest of the page from working.
function byId(id) {
  const node = document.getElementById(id);
  if (node) return node;
  console.warn(`calculator.html is missing an element with id="${id}"`);
  return document.createElement("div");
}

function el(tag, text, attrs) {
  const node = document.createElement(tag);
  if (text !== undefined && text !== null) node.textContent = text;
  if (attrs) Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
  return node;
}

function clear(id) {
  const node = byId(id);
  node.textContent = "";
  return node;
}

function formatSize(bytes) {
  if (bytes >= 1048576) return (bytes / 1048576).toFixed(2) + " MB";
  if (bytes >= 1024) return Math.round(bytes / 1024) + " KB";
  return bytes + " bytes";
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

const repoIsConfigured = () => !CALCULATOR.repo.owner.startsWith("YOUR-");
const repoUrl = () => `https://github.com/${CALCULATOR.repo.owner}/${CALCULATOR.repo.name}`;

/* ---------- calculators list (grouped, searchable) ---------- */
function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function matchesCalc(calc, term) {
  if (!term) return true;
  return [calc.name, calc.category, calc.description, calc.inputs, calc.output]
    .join(" ")
    .toLowerCase()
    .includes(term);
}

function renderFeatures(filter) {
  const box = clear("feature-list");
  const term = filter.trim().toLowerCase();
  const categories = [...new Set(CALCULATOR.calculators.map((c) => c.category))];
  let shown = 0;

  categories.forEach((category) => {
    const items = CALCULATOR.calculators.filter(
      (c) => c.category === category && matchesCalc(c, term)
    );
    if (items.length === 0) return;

    box.appendChild(el("h3", category));
    items.forEach((calc) => {
      const article = el("article", null, { id: slug(calc.name) });
      article.appendChild(el("h4", calc.name));
      article.appendChild(el("p", calc.description));

      const dl = el("dl");
      [["Input", calc.inputs], ["Output", calc.output]].forEach(([label, value]) => {
        if (!value) return;
        dl.appendChild(el("dt", label));
        dl.appendChild(el("dd", value));
      });
      article.appendChild(dl);

      if (calc.notes && calc.notes.length) {
        const ul = el("ul");
        calc.notes.forEach((n) => ul.appendChild(el("li", n)));
        article.appendChild(ul);
      }
      box.appendChild(article);
      shown++;
    });
  });

  if (shown === 0) box.appendChild(el("p", "No calculators match your search."));

  byId("feature-count").textContent =
    `Showing ${shown} of ${CALCULATOR.calculators.length} calculators in ${categories.length} categories.`;
}

/* ---------- static sections ---------- */
function renderStatic() {
  byId("app-name").textContent = CALCULATOR.name;
  document.title = CALCULATOR.name;
  byId("app-intro").textContent = CALCULATOR.intro;
  byId("app-purpose").textContent = CALCULATOR.purpose;

  renderFeatures("");

  const shots = clear("screenshot-list");
  if (CALCULATOR.screenshots.length === 0) {
    shots.appendChild(el("p", "Screenshots will be added soon."));
  }
  CALCULATOR.screenshots.forEach((s) => {
    const fig = el("figure");
    fig.appendChild(el("img", null, { src: s.src, alt: s.alt, loading: "lazy" }));
    if (s.caption) fig.appendChild(el("figcaption", s.caption));
    shots.appendChild(fig);
  });

  const req = clear("requirements-list");
  CALCULATOR.requirements.forEach((r) => req.appendChild(el("li", r)));

  const use = clear("usage-list");
  CALCULATOR.usage.forEach((step) => use.appendChild(el("li", step)));

  const gj = clear("get-java-list");
  CALCULATOR.getJava.forEach((l) => {
    const li = el("li");
    li.appendChild(el("a", l.label, { href: l.url, rel: "noopener" }));
    gj.appendChild(li);
  });

  byId("launch-command").textContent = CALCULATOR.launchCommand;

  const lim = clear("limits-list");
  CALCULATOR.limits.forEach((group) => {
    lim.appendChild(el("h3", group.heading));
    const ul = el("ul");
    group.items.forEach((t) => ul.appendChild(el("li", t)));
    lim.appendChild(ul);
  });

  const inst = clear("install-list");
  CALCULATOR.install.forEach((step) => inst.appendChild(el("li", step)));

  // Link to the Releases page. Until repo.owner / repo.name are set above, the
  // link stays inactive (no href) instead of pointing back at this page.
  const link = byId("releases-link");
  if (repoIsConfigured()) {
    link.href = repoUrl() + "/releases";
  } else {
    link.removeAttribute("href");
    link.after(" (repository not set yet)");
  }
}

/* ---------- release info ---------- */
function renderRelease(info) {
  const dl = clear("release-info");
  const rows = [
    ["Version", info.version],
    ["Release date", info.date],
    ["File", info.fileName],
    ["File size", info.size],
    ["SHA-256", info.sha256 || "Not published for this release"],
  ];
  rows.forEach(([label, value]) => {
    dl.appendChild(el("dt", label));
    const dd = el("dd");
    dd.appendChild(label === "SHA-256" ? el("code", value) : document.createTextNode(value));
    dl.appendChild(dd);
  });

  const area = clear("download-link-area");
  if (info.url) {
    area.appendChild(el("a", `Download ${info.fileName} (version ${info.version})`, { href: info.url }));
  } else {
    area.textContent = "The download link will appear once the first release is published.";
  }
}

function renderChangelog(entries) {
  const box = clear("changelog-list");
  if (entries.length === 0) {
    box.appendChild(el("p", "No release notes yet."));
    return;
  }
  entries.forEach((e) => {
    box.appendChild(el("h3", e.date ? `Version ${e.version} (${e.date})` : `Version ${e.version}`));
    if (e.text) {
      box.appendChild(el("pre", e.text));
    } else {
      const ul = el("ul");
      e.notes.forEach((n) => ul.appendChild(el("li", n)));
      box.appendChild(ul);
    }
  });
}

function useFallback(message) {
  const f = CALCULATOR.fallback;
  byId("release-status").textContent = message;
  renderRelease({ ...f, url: "" });
  renderChangelog(f.changelog);
}

async function loadReleases() {
  const status = byId("release-status");

  if (!repoIsConfigured()) {
    useFallback("Release information is not connected yet (repository not set).");
    return;
  }

  try {
    const res = await fetch(
      `https://api.github.com/repos/${CALCULATOR.repo.owner}/${CALCULATOR.repo.name}/releases`,
      { headers: { Accept: "application/vnd.github+json" } }
    );
    if (!res.ok) throw new Error("HTTP " + res.status);

    const releases = (await res.json()).filter((r) => !r.draft && !r.prerelease);
    if (releases.length === 0) {
      useFallback("No releases have been published yet.");
      return;
    }

    const latest = releases[0];
    const asset =
      latest.assets.find((a) => /\.(jar|zip|exe|msi|dmg)$/i.test(a.name)) || latest.assets[0];
    const sumMatch = (latest.body || "").match(/\b[a-f0-9]{64}\b/i);

    status.textContent = "Latest release:";
    renderRelease({
      version: latest.tag_name,
      date: formatDate(latest.published_at),
      fileName: asset ? asset.name : "No file attached",
      size: asset ? formatSize(asset.size) : "n/a",
      sha256: sumMatch ? sumMatch[0].toLowerCase() : "",
      url: asset ? asset.browser_download_url : "",
    });

    renderChangelog(
      releases.map((r) => ({
        version: r.tag_name,
        date: formatDate(r.published_at),
        text: (r.body || "No notes.").trim(),
      }))
    );
  } catch (err) {
    useFallback("Could not load live release information. Showing saved details; check the Releases page for the newest version.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Attach the search first, so it keeps working even if something below fails.
  const search = byId("feature-search");
  ["input", "search"].forEach((evt) =>
    search.addEventListener(evt, (e) => renderFeatures(e.target.value))
  );

  renderStatic();
  loadReleases();
});
