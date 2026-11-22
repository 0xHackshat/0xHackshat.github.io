document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
     CUSTOM CURSOR (desktop only)
  ========================================================= */
  const cursorDot = document.getElementById("cursor-dot");
  if (cursorDot) {
    window.addEventListener("mousemove", (e) => {
      cursorDot.style.left = e.clientX + "px";
      cursorDot.style.top = e.clientY + "px";
    });

    function updateInteractiveElements() {
      document
        .querySelectorAll("a, button, .project-card, input, textarea")
        .forEach((el) => {
          el.addEventListener("mouseenter", () =>
            cursorDot.classList.add("hovered")
          );
          el.addEventListener("mouseleave", () =>
            cursorDot.classList.remove("hovered")
          );
        });
    }
    updateInteractiveElements();
  }

  /* =========================================================
     HERO PARTICLE BACKGROUND (CodePen-style)
  ========================================================= */
  const heroCanvas = document.getElementById("hero-canvas");
  if (heroCanvas) {
    const ctx = heroCanvas.getContext("2d");
    let particles = [];
    const PARTICLE_COUNT = window.innerWidth < 768 ? 40 : 80;

    function resizeCanvas() {
      heroCanvas.width = heroCanvas.offsetWidth;
      heroCanvas.height = heroCanvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * heroCanvas.width;
        this.y = Math.random() * heroCanvas.height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= heroCanvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= heroCanvas.height) this.vy *= -1;
      }

      draw() {
        ctx.fillStyle = "rgba(88,166,255,0.8)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    }
    initParticles();

    function animateParticles() {
      ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  /* =========================================================
     HERO QUOTES
  ========================================================= */
  const quotes = [
    "Security doesn’t start with detection, it begins with design.",
    "There is no perfect security, only temporary security.",
    "Cybersecurity is a people problem wearing a technical costume.",
    "Hacking is not about breaking systems, it's about understanding them.",
  ];

  const quoteContainer = document.getElementById("quote-container");
  if (quoteContainer) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteContainer.textContent = randomQuote;
    quoteContainer.classList.add("opacity-100");

    setTimeout(() => {
      quoteContainer.classList.remove("opacity-100");
      quoteContainer.classList.add("opacity-0");
    }, 3500);
  }

  /* =========================================================
     SCROLL REVEAL
  ========================================================= */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(".reveal")
    .forEach((el) => revealObserver.observe(el));

  /* =========================================================
     PORTFOLIO DATA
  ========================================================= */
  const projects = [
  {
    id: 5,
    title: "Blockchain-Powered Vehicle Rental System",
    category: "project",
    description:
      "Developed a decentralized vehicle rental platform using blockchain technology to enable secure, transparent rental transactions, wallet-based authentication, and QR-code-based vehicle access.",
    tech: ["Blockchain", "Node.js", "React.js", "Redux", "RSA Cryptography", "Digital Signatures"],
    features: [
      "Peer-to-peer blockchain network with consensus mechanisms",
      "Proof of Work and Proof of Stake consensus concepts",
      "Cryptographic wallet with public/private key management",
      "Digitally signed and encrypted rental transactions",
      "QR-code-based vehicle booking and unlocking",
      "Security deposit and rental return workflow"
    ],
    snippet: {
      url: "https://github.com/0xHackshat/Write-Ups-Walkthroughs/blob/main/Project%20Writeups/Blockchain_Powered_Vehicle_Rentals.md"
    },
    link: "https://github.com/0xHackshat/Write-Ups-Walkthroughs/blob/main/Project%20Writeups/Blockchain_Powered_Vehicle_Rentals.md"
  },
  {
    id: 6,
    title: "Web Application SQL Injection Scanner",
    category: "project",
    description:
      "Developed a Python-based web application scanner that identifies HTML forms, extracts input parameters, and tests for potential SQL injection vulnerabilities through HTTP requests.",
    tech: ["Python", "Requests", "BeautifulSoup", "SQL Injection", "HTTP"],
    features: [
      "Discovers and extracts HTML forms from web pages",
      "Identifies form actions, methods, and input parameters",
      "Tests input fields using SQL injection test characters",
      "Supports GET and POST request methods",
      "Detects common database error messages in HTTP responses",
      "Explores integration with Nmap web application security scripts"
    ],
    snippet: {
      url: "https://github.com/0xHackshat/Write-Ups-Walkthroughs/blob/main/Project%20Writeups/Web_Application_SQL_Injection_Scanner.md"
    },
    link: "https://github.com/0xHackshat/Write-Ups-Walkthroughs/blob/main/Project%20Writeups/Web_Application_SQL_Injection_Scanner.md"
  },
  {
    id: 7,
    title: "Network Traffic Visualization Using Wireshark and Python",
    category: "project",
    description:
      "Developed a network traffic visualization tool that parses Wireshark packet captures, extracts source and destination IP addresses, maps their geographical locations, and generates interactive network paths in Google Earth.",
    tech: ["Python", "Wireshark", "dpkt", "GeoLiteCity", "Google Earth", "KML"],
    features: [
      "Reads and parses PCAP network traffic captures",
      "Extracts source and destination IP addresses",
      "Maps IP addresses to geographical coordinates",
      "Generates KML files for Google Earth visualization",
      "Visualizes geographical connections between network endpoints"
    ],
    snippet: {
      url: "https://github.com/0xHackshat/Write-Ups-Walkthroughs/blob/main/Project%20Writeups/Wireshark_Python_Network_Traffic_Visualization.md"
    },
    link: "https://github.com/0xHackshat/Write-Ups-Walkthroughs/blob/main/Project%20Writeups/Wireshark_Python_Network_Traffic_Visualization.md"
  },
  {
    id: 0,
    title: "Pathfinder – Reconnaissance URL Inventory Engine",
    category: "project",
    description:
      "Developed a Linux-first CLI tool that transforms raw reconnaissance URLs into a structured endpoint inventory, helping security researchers organize, normalize, deduplicate, and analyze discovered application endpoints.",
    tech: ["Python", "SQLite", "CLI", "URL Parsing", "Reconnaissance"],
    features: [
      "Imports URLs from files and standard input",
      "Normalizes URLs and removes duplicate endpoints",
      "Extracts query parameter names",
      "Organizes endpoints into a structured hierarchy",
      "Stores reconnaissance data in SQLite",
      "Provides endpoint inventory statistics",
      "Supports data collection from tools like gau, waybackurls, and katana"
    ],
    snippet: {
      url: "https://github.com/0xHackshat/Write-Ups-Walkthroughs/blob/main/Project%20Writeups/Introducing_Pathfinder_Recon_URL_Organizer.md"
    },
    link: "https://github.com/0xHackshat/Write-Ups-Walkthroughs/blob/main/Project%20Writeups/Introducing_Pathfinder_Recon_URL_Organizer.md"
  },
  {
    id: 8,
    title: "Axios NPM Supply Chain Attack – Recreation and PoC",
    category: "project",
    description:
      "Recreated the behavior of an npm supply chain attack in a controlled lab by simulating a compromised dependency that executes a postinstall script during package installation and transmits basic system information to a remote listener.",
    tech: ["Node.js", "npm", "JavaScript", "Python", "Supply Chain Security"],
    features: [
      "Created a malicious dependency with an automated postinstall script",
      "Developed a normal-looking npm package that imports the dependency",
      "Simulated automatic code execution during npm installation",
      "Collected basic host information from the victim environment",
      "Implemented a Python HTTP server to receive transmitted data",
      "Recreated the attack workflow using controlled lab packages"
    ],
    snippet: {
      url: "https://github.com/0xHackshat/Write-Ups-Walkthroughs/blob/main/Project%20Writeups/Axios_NPM_Compromise_Recreation_PoC.md"
    },
    link: "https://github.com/0xHackshat/Write-Ups-Walkthroughs/blob/main/Project%20Writeups/Axios_NPM_Compromise_Recreation_PoC.md"
  },
  {
    id: 1,
    title: "Frozen Query – HTTP QUERY Shared Cache Exploitation",
    category: "ctf",
    description:
      "Solved a GlacierCTF 2026 web challenge by exploiting shared-cache authorization confusion and inconsistent request decompression between an edge WAF and the application request decoder to retrieve a restricted summit bulletin.",
    tech: ["HTTP QUERY", "Python", "Gzip", "Web Security", "Cache Poisoning", "WAF Bypass"],
    features: [
      "Analyzed edge proxy and backend authorization mechanisms",
      "Identified an authorization-independent shared cache key",
      "Analyzed time-based cache windows used by the internal auditor",
      "Bypassed WAF inspection using double-gzip request encoding",
      "Automated cache interaction using Python and Requests",
      "Retrieved the restricted bulletin through a successful cache HIT"
    ],
    snippet: {
      url: "https://github.com/0xHackshat/Write-Ups-Walkthroughs/blob/main/Glacier_CTF_2026/Frozen_Query_CTF_Writeup.md"
    },
    link: "https://github.com/0xHackshat/Write-Ups-Walkthroughs"
  },
  {
    id: 2,
    title: "Team-Check – Server-Side Template Injection (SSTI)",
    category: "ctf",
    description:
      "Exploited a Jinja2 Server-Side Template Injection vulnerability in a Flask application by bypassing an ineffective template delimiter filter, achieving server-side code execution and retrieving the challenge flag.",
    tech: ["Python", "Flask", "Jinja2", "SSTI", "Web Exploitation", "RCE"],
    features: [
      "Reviewed Flask application source code to identify the SSTI vulnerability",
      "Identified an ineffective filter blocking only Jinja2 expression delimiters",
      "Bypassed the filter using Jinja2 statement delimiters",
      "Confirmed template execution using an arithmetic proof of concept",
      "Exploited the template context to access Python built-ins",
      "Achieved local and remote file read through command execution"
    ],
    snippet: {
      url: "https://github.com/0xHackshat/Write-Ups-Walkthroughs/blob/main/Glacier_CTF_2026/Team_Check_SSTI_Writeup.md"
    },
    link: "https://github.com/0xHackshat/Write-Ups-Walkthroughs"
  },
  {
    id: 3,
    title: "Solar System Overview – WHY CTF 2025",
    category: "ctf",
    description:
      "Solved a web exploitation challenge by identifying an API endpoint that directly executed user-controlled SQL queries, allowing database enumeration and extraction of sensitive information.",
    tech: ["SQL Injection", "API Security", "MySQL", "Web Exploitation", "Database Enumeration"],
    features: [
      "Analyzed frontend JavaScript to identify the exposed SQL query endpoint",
      "Identified arbitrary SQL execution through the API query parameter",
      "Enumerated database information and available tables",
      "Extracted database column information using information_schema",
      "Retrieved the challenge flag from the abandoned_planets table"
    ],
    snippet: {
      url: "https://github.com/0xHackshat/Write-Ups-Walkthroughs/blob/main/WHY_CTF_2025/WHY_CTF_2025_Solar_System_Overview.md"
    },
    link: "https://github.com/0xHackshat/Write-Ups-Walkthroughs/blob/main/WHY_CTF_2025/WHY_CTF_2025_Solar_System_Overview.md"
  },
  {
    id: 4,
    title: "MD2PDF – SSRF via HTML Injection",
    category: "thm",
    description:
      "Completed a TryHackMe web exploitation challenge by identifying HTML injection in a Markdown-to-PDF conversion service and exploiting server-side resource fetching to access an internally restricted admin panel.",
    tech: ["SSRF", "HTML Injection", "Nmap", "Gobuster", "PDF Generation", "Web Exploitation"],
    features: [
      "Performed service enumeration using Nmap",
      "Discovered hidden application endpoints using Gobuster",
      "Identified a localhost-restricted administrative interface",
      "Investigated the Markdown-to-PDF conversion functionality",
      "Confirmed HTML injection through PDF rendering",
      "Exploited server-side resource fetching using iframe and image elements",
      "Accessed the internal admin panel and retrieved the challenge flag"
    ],
    snippet: {
      url: "https://github.com/0xHackshat/Write-Ups-Walkthroughs/blob/main/Try%20Hack%20Me%20Writeups/MD2PDF_SSRF%20via%20HTML%20Injection_walkthrough.md"
    },
    link: "https://github.com/0xHackshat/Write-Ups-Walkthroughs/blob/main/Try%20Hack%20Me%20Writeups/MD2PDF_SSRF%20via%20HTML%20Injection_walkthrough.md"
  }
];

  const portfolioGrid = document.getElementById("portfolio-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  function renderProjects(filter) {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = "";

    const filtered =
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter);

    filtered.forEach((p) => {
      portfolioGrid.innerHTML += `
        <div class="project-card rounded-lg p-6" data-id="${p.id}">
          <h3 class="text-xl font-bold text-accent mb-2">${p.title}</h3>
          <p class="text-secondary mb-4">${p.description}</p>
          <div class="flex flex-wrap gap-2">
            ${p.tech
              .map(
                (t) =>
                  `<span class="bg-gray-700 text-xs px-2 py-1 rounded">${t}</span>`
              )
              .join("")}
          </div>
        </div>`;
    });
  }

  renderProjects("all");
  filterBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    })
  );

  /* =========================================================
     PROJECT MODAL
  ========================================================= */
  const modalOverlay = document.getElementById("project-modal-overlay");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalBody = document.querySelector("#project-modal .modal-body");
  const modalTabs = document.querySelectorAll("#project-modal .modal-tab");
  let activeProject = null;

  function getProjectById(id) {
    return projects.find((p) => p.id === id) || null;
  }

  function getSnippetUrl(project) {
    if (!project) return "";
    if (project.snippet && typeof project.snippet === "object") {
      return project.snippet.url || "";
    }
    if (typeof project.snippet === "string") {
      const raw = project.snippet.trim();
      if (/^https?:\/\//i.test(raw)) return raw;
    }
    return "";
  }

  function toEmbeddableUrl(rawUrl) {
    try {
      const url = new URL(rawUrl);
      const host = url.hostname.replace(/^www\./, "").toLowerCase();

      if (host === "youtube.com" || host === "m.youtube.com") {
        const videoId = url.searchParams.get("v");
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;
      }

      if (host === "youtu.be") {
        const videoId = url.pathname.replace("/", "");
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;
      }

      return rawUrl;
    } catch {
      return rawUrl;
    }
  }

  function getHost(rawUrl) {
    try {
      return new URL(rawUrl).hostname.replace(/^www\./, "").toLowerCase();
    } catch {
      return "";
    }
  }

  function shouldUseLinkCard(rawUrl) {
    const host = getHost(rawUrl);
    const blockedHosts = [
      "medium.com",
      "linkedin.com",
      "gist.github.com",
      "towardsdatascience.com",
    ];
    return blockedHosts.some(
      (h) => host === h || host.endsWith(`.${h}`)
    );
  }

  // Convert GitHub's browser URL (/blob/<branch>/<path>) into raw file content.
  // raw.githubusercontent.com supports cross-origin fetches for public repositories.
  function toGitHubRawUrl(rawUrl) {
    try {
      const url = new URL(rawUrl);
      if (url.hostname.toLowerCase() !== "github.com") return "";
      const match = url.pathname.match(/^\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)$/);
      if (!match) return "";
      const [, owner, repo, branch, filePath] = match;
      return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`;
    } catch {
      return "";
    }
  }

  function renderSnippetError(originalUrl, message) {
    if (!modalBody) return;
    modalBody.innerHTML = `
      <h3 class="text-xl font-bold text-accent mb-3">Snippet unavailable</h3>
      <p class="text-secondary mb-3">${message}</p>
      <a href="${originalUrl}" target="_blank" rel="noopener noreferrer" class="text-accent underline break-all">Open source on GitHub</a>
    `;
  }

  async function renderGitHubSnippet(project, originalUrl) {
    const rawUrl = toGitHubRawUrl(originalUrl);
    if (!rawUrl) {
      renderSnippetError(originalUrl, "This GitHub URL is not a supported file URL. Use a URL containing /blob/<branch>/<file-path>.");
      return;
    }

    modalBody.innerHTML = `
      <h3 class="text-xl font-bold text-accent mb-3">GitHub Write-up</h3>
      <p class="text-secondary">Loading Markdown from GitHub...</p>
    `;

    try {
      const response = await fetch(rawUrl, { headers: { Accept: "text/plain" } });
      if (!response.ok) throw new Error(`GitHub returned HTTP ${response.status}`);
      const markdown = await response.text();

      // Avoid injecting remote HTML directly. Markdown is rendered only when both
      // Marked and DOMPurify are available; otherwise show escaped source text.
      let content;
      if (window.marked && window.DOMPurify) {
        const parsed = window.marked.parse(markdown);
        content = window.DOMPurify.sanitize(parsed);
      } else {
        const escaped = markdown.replace(/[&<>"']/g, (char) => ({
          "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        })[char]);
        content = `<pre style="white-space:pre-wrap;overflow-wrap:anywhere;">${escaped}</pre>`;
      }

      if (!modalBody) return;
      modalBody.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <h3 class="text-xl font-bold text-accent">${project.title}</h3>
          <a href="${originalUrl}" target="_blank" rel="noopener noreferrer" class="text-accent underline">View on GitHub</a>
        </div>
        <article class="github-markdown rounded-lg border border-gray-700 bg-[#0d1117] p-4">${content}</article>
      `;
      if (window.hljs) {
        modalBody.querySelectorAll("pre code").forEach((block) => window.hljs.highlightElement(block));
      }
    } catch (error) {
      renderSnippetError(originalUrl, `Could not retrieve the raw Markdown. ${error.message}`);
    }
  }

  function renderLinkCard(url, projectTitle) {
    const host = getHost(url) || "external-link";
    return `
      <h3 class="text-xl font-bold text-accent mb-3">External Snippet</h3>
      <div class="rounded-lg border border-gray-700 bg-[#0d1117] p-4">
        <p class="text-primary font-semibold mb-1">${projectTitle}</p>
        <p class="text-secondary mb-3">Direct embedding is blocked by ${host}. Open safely in a new tab.</p>
        <p class="text-xs text-secondary mb-3">${host}</p>
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="inline-block text-accent underline break-all">Open Snippet URL</a>
      </div>
    `;
  }

  function renderModalTab(project, tab) {
    if (!modalBody || !project) return;

    if (tab === "description") {
      modalBody.innerHTML = `
        <h3 class="text-2xl font-bold text-accent mb-3">${project.title}</h3>
        <p class="text-secondary leading-relaxed">${project.description}</p>
      `;
      return;
    }

    if (tab === "features") {
      modalBody.innerHTML = `
        <h3 class="text-xl font-bold text-accent mb-3">Stack & Links</h3>
        <ul class="list-disc pl-6 mb-4 text-secondary">
          ${(project.tech || []).map((t) => `<li>${t}</li>`).join("")}
        </ul>
        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="text-accent underline">Open Project Link</a>
      `;
      return;
    }

    const snippetUrl = getSnippetUrl(project);
    if (snippetUrl) {
      if (getHost(snippetUrl) === "github.com") {
        renderGitHubSnippet(project, snippetUrl);
        return;
      }

      if (shouldUseLinkCard(snippetUrl)) {
        modalBody.innerHTML = renderLinkCard(snippetUrl, project.title);
        return;
      }

      const embedUrl = toEmbeddableUrl(snippetUrl);
      modalBody.innerHTML = `
        <h3 class="text-xl font-bold text-accent mb-3">Embedded Snippet</h3>
        <div style="position:relative;width:100%;padding-top:56.25%;border:1px solid #30363d;border-radius:8px;overflow:hidden;background:#0d1117;">
          <iframe
            src="${embedUrl}"
            title="Project snippet embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style="position:absolute;inset:0;width:100%;height:100%;border:0;"
          ></iframe>
        </div>
        <p class="text-secondary mt-3">If the site blocks embedding, open it directly:</p>
        <a href="${snippetUrl}" target="_blank" rel="noopener noreferrer" class="text-accent underline break-all">${snippetUrl}</a>
      `;
      return;
    }

    if (typeof project.snippet === "string" && project.snippet.trim()) {
      modalBody.innerHTML = `
        <h3 class="text-xl font-bold text-accent mb-3">Snippet</h3>
        <div class="rounded-md border border-gray-700 p-3">${project.snippet}</div>
      `;
      return;
    }

    modalBody.innerHTML = `
      <h3 class="text-xl font-bold text-accent mb-3">Snippet</h3>
      <p class="text-secondary">No snippet URL configured for this project yet.</p>
    `;
  }

  function setActiveModalTab(tab) {
    modalTabs.forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.tab === tab)
    );
    if (activeProject) renderModalTab(activeProject, tab);
  }

  function openProjectModal(project) {
    if (!modalOverlay || !project) return;
    activeProject = project;
    modalOverlay.classList.add("active");
    setActiveModalTab("description");
  }

  function closeProjectModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("active");
    activeProject = null;
  }

  if (portfolioGrid) {
    portfolioGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".project-card");
      if (!card) return;
      const id = Number(card.dataset.id);
      const project = getProjectById(id);
      openProjectModal(project);
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeProjectModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeProjectModal();
    });
  }

  modalTabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!activeProject) return;
      setActiveModalTab(btn.dataset.tab);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay?.classList.contains("active")) {
      closeProjectModal();
    }
  });

  /* =========================================================
     EXPERIENCE TIMELINE
  ========================================================= */
  const experiences = [
    {
      date: "Jan 2025 - Present",
      role: "Cyber Security Analyst",
      company: "TCS - GE Vernova ARC, Bengaluru, India",
      description: "Managed enterprise vulnerability management, running security tools across on-prem and cloud servers, and automated end-to-end vulnerability identification & reporting, reducing response time to 60%. Implemented a passive reconnaissance framework & automating 90% of manual checks using Shell scripts to identify known CVEs, CPEs & exploits for software products. Facilitated & monitored application security scans (SAST, DAST, AVA, VAPT), for efficient of risk tracking. Developed Splunk queries for endpoint detection, identifying and flagging unauthorized and suspicious activities."
    },
    {
      date: "July 2022 - Dec 2024",
      role: "Data Analysis & Migration Consultant",
      company: "TCS - GE Vernova, Mumbai, India",
      "description": "Built & optimized ETL data pipelines to migrate data between ERP systems using SQL & ETL Tools. Analyzed complex data, and delivered actionable insights for data accuracy and streamlined workflows."
    },
    {
      date: "Mar 2021 - May 2021",
      role: "IT and Network Operations Intern",
      company: "ALOK Industries LTD, Vapi, Gujarat",
      "description": "Implemented & configured servers, leveraging Networking tools to enhance network management efficiency."
    },
  ];

  const expContainer = document.querySelector("#experience .relative");
  if (expContainer) {
    experiences.forEach((e) => {
      expContainer.innerHTML += `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <p class="text-sm text-secondary">${e.date}</p>
          <h3 class="text-xl font-bold text-accent">${e.role}</h3>
          <p class="font-semibold">${e.company}</p>
          <p>${e.description}</p>
        </div>`;
    });
  }

  /* =========================================================
     SKILLS RADAR CHART
  ========================================================= */
  const skillsRadarCanvas = document.getElementById("skillsRadar");
  if (skillsRadarCanvas && typeof Chart !== "undefined") {
    if (window.skillsRadarChart) {
      window.skillsRadarChart.destroy();
    }

    const skillLabels = [
      "Penetration Testing",
      "Security tools & Automation",
      "Threat Modeling & Code Review",
      "AWS Cloud",
      "Linux & Networking",
      "Python & Bash Scripting",
      "AI Red Teaming"
    ];
    const skillValues = [65, 75, 35, 45, 35, 80, 15];
    const sectorColors = [
      "rgba(88, 166, 255, 0.26)",
      "rgba(57, 211, 83, 0.24)",
      "rgba(255, 184, 77, 0.24)",
      "rgba(255, 123, 114, 0.24)",
      "rgba(165, 180, 252, 0.24)",
      "rgba(56, 189, 248, 0.24)",
      "rgba(56, 149, 235, 0.24)",
    ];
    const LABEL_FONT_SIZE = 20;

    const radarDecorPlugin = {
      id: "radarDecorPlugin",
      beforeDatasetsDraw(chart) {
        const r = chart.scales.r;
        if (!r) return;
        const { ctx } = chart;
        const n = skillLabels.length;
        const step = (Math.PI * 2) / n;
        const start = -Math.PI / 2;

        ctx.save();
        for (let i = 0; i < n; i++) {
          const centerAngle = start + i * step;
          const a0 = centerAngle - step / 2;
          const a1 = centerAngle + step / 2;
          ctx.beginPath();
          ctx.moveTo(r.xCenter, r.yCenter);
          ctx.arc(r.xCenter, r.yCenter, r.drawingArea, a0, a1);
          ctx.closePath();
          ctx.fillStyle = sectorColors[i];
          ctx.fill();
        }
        ctx.restore();
      },
      afterDraw(chart) {
        const r = chart.scales.r;
        if (!r) return;
        const { ctx } = chart;
        const n = skillLabels.length;
        const step = (Math.PI * 2) / n;
        const start = -Math.PI / 2;
        const isSmallScreen = chart.width < 560;
        const fontSize = isSmallScreen ? 9 : LABEL_FONT_SIZE;
        const lineHeight = fontSize + 2;
        const maxLineWidth = isSmallScreen ? 84 : 130;
        const edgePadding = 8;

        function wrapLabel(text) {
          const words = String(text).split(" ");
          if (words.length <= 1) return [String(text)];

          const lines = [];
          let current = words[0];

          for (let i = 1; i < words.length; i++) {
            const test = `${current} ${words[i]}`;
            if (ctx.measureText(test).width <= maxLineWidth) {
              current = test;
            } else {
              lines.push(current);
              current = words[i];
            }
          }

          lines.push(current);
          return lines;
        }

        ctx.save();
        ctx.globalCompositeOperation = "source-over";
        ctx.font = `600 ${fontSize}px 'Fira Code', monospace`;
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.shadowColor = "rgba(13, 17, 23, 0.9)";
        ctx.shadowBlur = 4;
        for (let i = 0; i < n; i++) {
          const angle = start + i * step;
          const labelRadius = r.drawingArea * 0.9;
          const rawX = r.xCenter + Math.cos(angle) * labelRadius;
          const rawY = r.yCenter + Math.sin(angle) * labelRadius;
          const lines = wrapLabel(skillLabels[i]);
          const widestLine = Math.max(
            ...lines.map((line) => ctx.measureText(line).width),
            0
          );
          const clampedX = Math.min(
            chart.width - widestLine / 2 - edgePadding,
            Math.max(widestLine / 2 + edgePadding, rawX)
          );
          const blockHeight = (lines.length - 1) * lineHeight;
          const startY = Math.min(
            chart.height - fontSize - edgePadding - blockHeight,
            Math.max(fontSize + edgePadding, rawY - blockHeight / 2)
          );

          ctx.fillStyle = "rgba(201, 209, 217, 0.78)";
          lines.forEach((line, idx) => {
            ctx.fillText(line, clampedX, startY + idx * lineHeight);
          });
        }
        ctx.restore();
      },
    };

    const radarCtx = skillsRadarCanvas.getContext("2d");
    window.skillsRadarChart = new Chart(radarCtx, {
      type: "radar",
      data: {
        labels: skillLabels,
        datasets: [
          {
            label: "Skill Level",
            data: skillValues,
            borderColor: "#8fd1ff",
            backgroundColor: "rgba(88, 166, 255, 0.36)",
            pointBackgroundColor: "#39d353",
            pointBorderColor: "#d0f5dd",
            pointHoverBackgroundColor: "#ffffff",
            pointHoverBorderColor: "#58a6ff",
            pointRadius: 4,
            pointHoverRadius: 6,
            borderWidth: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: { top: 18, right: 20, bottom: 18, left: 20 },
        },
        plugins: {
          legend: { display: false },
        },
        scales: {
          r: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20,
              color: "rgba(139, 148, 158, 0.65)",
              backdropColor: "transparent",
              showLabelBackdrop: false,
              z: 10,
              font: { size: 9 },
            },
            pointLabels: {
              display: false,
            },
            grid: { color: "rgba(48, 54, 61, 0.75)" },
            angleLines: { color: "rgba(48, 54, 61, 0.65)" },
          },
        },
      },
      plugins: [radarDecorPlugin],
    });
  }

  /* =========================================================
     MOBILE MENU
  ========================================================= */
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () =>
      mobileMenu.classList.toggle("hidden")
    );
  }
  /* =========================================================
     HERO TERMINAL FORM (scoped)
  ========================================================= */
  const heroTerminalForm = document.getElementById("hero-terminal-form");
  if (heroTerminalForm) {
    heroTerminalForm.addEventListener("submit", (e) => e.preventDefault());
  }

  const heroMessage = document.getElementById("hero-message");
  if (heroMessage) {
    const resizeHeroMessage = () => {
      heroMessage.style.height = "auto";
      heroMessage.style.height = heroMessage.scrollHeight + "px";
    };

    heroMessage.addEventListener("input", resizeHeroMessage);
    resizeHeroMessage();
  }

  /* =========================================================
     CONTACT FORM (GitHub Pages friendly)
  ========================================================= */
  const contactForm = document.getElementById("contact-form");
  const contactStatus = document.getElementById("contact-form-status");
  if (contactForm && contactStatus) {
    const submitBtn = contactForm.querySelector("button[type='submit']");
    const formEndpoint = (contactForm.dataset.formEndpoint || "").trim();
    const fallbackEmail = (contactForm.dataset.contactEmail || "").trim();

    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (!contactForm.reportValidity()) return;

      if (!formEndpoint || formEndpoint.includes("REPLACE_WITH_YOUR_FORM_ID")) {
        contactStatus.innerHTML = fallbackEmail
          ? `Form endpoint not configured yet. For now, email me directly at <a class="text-accent underline" href="mailto:${fallbackEmail}">${fallbackEmail}</a>.`
          : "Form endpoint is not configured. Add your Formspree endpoint in the contact form data-form-endpoint attribute.";
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      contactStatus.textContent = "Sending message...";

      try {
        const formData = new FormData(contactForm);
        const res = await fetch(formEndpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });

        if (!res.ok) throw new Error("Failed to submit");

        contactForm.reset();
        contactStatus.textContent = "Message sent successfully. I will get back to you soon.";
      } catch {
        contactStatus.textContent = "Could not send your message right now. Please try again or use email.";
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  /* =========================================================
     HERO STATUS BAR
  ========================================================= */
  const netInfoEl = document.getElementById("ht-net-info");
  const procInfoEl = document.getElementById("ht-proc-info");
  const userIpEl = document.getElementById("ht-user-ip");
  const hostIpEl = document.getElementById("ht-host-ip");

  const setText = (el, value) => {
    if (el) el.textContent = value;
  };

  if (netInfoEl) {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      const type = connection.effectiveType || "unknown";
      const downlink = typeof connection.downlink === "number" ? `${connection.downlink}Mb/s` : "n/a";
      setText(netInfoEl, `NET: ${type.toUpperCase()} ${downlink}`);
    } else {
      setText(netInfoEl, "NET: ONLINE");
    }
  }

  if (procInfoEl) {
    const cores = navigator.hardwareConcurrency || "n/a";
    const mem = typeof navigator.deviceMemory === "number" ? `${navigator.deviceMemory}GB` : "n/a";
    setText(procInfoEl, `PROC: ${cores}C ${mem}`);
  }

  async function setClientIp() {
    if (!userIpEl) return;
    try {
      const res = await fetch("https://api.ipify.org?format=json", { cache: "no-store" });
      if (!res.ok) throw new Error("ipify request failed");
      const data = await res.json();
      setText(userIpEl, `CLIENT_IP: ${data.ip || "UNAVAILABLE"}`);
    } catch {
      setText(userIpEl, "CLIENT_IP: UNAVAILABLE");
    }
  }

  async function setHostIp() {
    if (!hostIpEl) return;
    try {
      const host = window.location.hostname;
      if (!host) {
        setText(hostIpEl, "HOST_IP: UNAVAILABLE");
        return;
      }

      const res = await fetch(
        `https://dns.google/resolve?name=${encodeURIComponent(host)}&type=A`,
        { cache: "no-store" }
      );
      if (!res.ok) throw new Error("dns lookup failed");
      const data = await res.json();
      const answers = Array.isArray(data.Answer) ? data.Answer : [];
      const record = answers.find((x) => x && typeof x.data === "string");
      setText(hostIpEl, `HOST_IP: ${record ? record.data : "DYNAMIC_EDGE"}`);
    } catch {
      setText(hostIpEl, "HOST_IP: DYNAMIC_EDGE");
    }
  }

  setClientIp();
  setHostIp();
});

