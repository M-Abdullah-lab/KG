# Website Editing Guide — Kashaf Gafoor Portfolio

This guide shows you how to update your own website: your name, skills, jobs, projects, certificates, photo and links. You do **not** need to know how websites are built. You only need to find some words and replace them.

At the end, you will also learn how to put your website online for free with **GitHub** (where your files are kept) and **Vercel** (what puts them online).

---

## Table of Contents

1. [Before You Start — 5 Golden Rules](#before-you-start--5-golden-rules)
2. [Section A — Understanding the Website Folder](#section-a--understanding-the-website-folder)
3. [Section B — How to Edit Personal Information](#section-b--how-to-edit-personal-information)
4. [Section C — How to Update Cybersecurity and Agentic AI Skills](#section-c--how-to-update-cybersecurity-and-agentic-ai-skills)
5. [Section D — How to Update Experience and Internships](#section-d--how-to-update-experience-and-internships)
6. [Section E — How to Add, Edit, and Remove Projects](#section-e--how-to-add-edit-and-remove-projects)
7. [Section F — How to Update Certifications](#section-f--how-to-update-certifications)
8. [Section G — How to Change Profile Picture and Other Images](#section-g--how-to-change-profile-picture-and-other-images)
9. [Section H — How to Update Social Media and Contact Links](#section-h--how-to-update-social-media-and-contact-links)
10. [Section I — How to Preview Changes](#section-i--how-to-preview-changes)
11. [Part 2 — Put Your Website on GitHub (From Zero)](#part-2--put-your-website-on-github-from-zero)
12. [Part 3 — Put Your Website Online with Vercel (From Zero)](#part-3--put-your-website-online-with-vercel-from-zero)
13. [Before Publishing Your Website (Final Checklist)](#before-publishing-your-website)
14. [What You Can Do Yourself vs. What Needs a Web Developer](#what-you-can-do-yourself-vs-what-needs-a-web-developer)

---

## Before You Start — 5 Golden Rules

1. **Make a backup first.** Before you edit, copy the whole website folder and paste it somewhere safe (for example, your Desktop). Name the copy `Website BACKUP`. If something goes wrong, you can go back to it.
2. **Only change words that people see on the page.** Do not delete or change symbols like `<`, `>`, `"`, `/`, `=`, or words like `class="..."`. Think of them as the frame around a picture. You change the picture (your words), not the frame.
3. **Change one thing at a time**, save, and check the website in your browser (see [Section I](#section-i--how-to-preview-changes)). If something looks broken, you know exactly what caused it.
4. **Use the search tool.** Every instruction tells you what to search for. Press **Ctrl + F** (Windows) or **Cmd + F** (Mac) in your text editor and type the search words.
5. **Look for the green notes inside the file.** We added notes to `index.html` that start with `<!--` and end with `-->`. They say things like `START: Your name` or `JOB START`. Visitors never see them. They are signposts for you. **Please don't delete them.**

### Which program should I use to edit?

Use a simple text editor. **Do not use Microsoft Word or Google Docs**, because they damage the file.

| Your computer | Recommended free program |
|---|---|
| Windows | **Notepad** (already installed), or **Visual Studio Code** (free, from https://code.visualstudio.com/) |
| Mac | **Visual Studio Code** (free, from https://code.visualstudio.com/). Avoid TextEdit, because it can change the file format. |

**How to open `index.html` for editing:** right-click `index.html` → **Open with** → choose **Notepad** or **Visual Studio Code**.
(If you simply double-click it, it opens in your web browser instead. That is for *viewing*, not editing.)

**How to save:** press **Ctrl + S** (Windows) or **Cmd + S** (Mac).

---

## Section A — Understanding the Website Folder

Your website folder contains these items:

| File / Folder | What it is used for | Should you edit it? |
|---|---|---|
| `index.html` | **All your website text and links**: name, introduction, skills, jobs, projects, education, certificates, email and LinkedIn. | ✅ **Yes, this is the main file you edit.** |
| `assets/images/` | The folder for your **profile picture**. It is empty right now. | ✅ Yes, you put your photo here. |
| `assets/icons/favicon.svg` | The tiny "KG" icon shown on the browser tab. | ❌ No (ask a developer). |
| `css/style.css` | The look of the website: colours, fonts, spacing and layout. | ❌ **No, don't edit.** |
| `js/script.js` | The moving parts: animations, the light/dark switch, the mobile menu and the "Copy" email button. **It contains none of your personal text.** | ❌ **No, don't edit.** |
| `README.md` | A short technical note left by the developer. | Not needed. |
| `Profile.pdf` | Your LinkedIn profile export that the website text was taken from. **The website does not use it.** | ❌ Don't edit. **Don't upload it online** (it contains your phone number). |
| `WEBSITE-EDITING-GUIDE.md` | This guide. | Optional. |

**In short:** for text and links, open **`index.html`**. For your photo, use the **`assets/images/`** folder. Leave everything else alone.

### Two things that change by themselves

- **The year in the footer** (`© 2026 Kashaf Gafoor`) updates by itself every year. You never need to change it.
- **The 4 big numbers in the About section** (Top 20%, 50+, 90%+, 15+) count up with an animation. The animation reads the number from a hidden spot, so you must change each number in **two places** (explained in [Section B, item 6](#6-professional-summary-the-4-highlight-numbers)).

---

## Section B — How to Edit Personal Information

All of these are in **`index.html`**.

### How to read the examples

Each example shows a **BEFORE** line (what is in the file now) and an **AFTER** line (the same line with new words). Only the words change. Everything else stays exactly the same.

---

### 1. Your name

Your name appears in **several places**. Search for `Kashaf` and you will find all of them.

| Where it appears on the website | Search for | What to change |
|---|---|---|
| Big name at the top (hero) | `hero__word` | First name on one line, last name on the next |
| Top menu bar (left) | `nav__name` (first result) | `Kashaf Gafoor` |
| Footer (bottom) | `nav__name` (second result) | `Kashaf Gafoor` |
| Copyright line | `All rights reserved` | `Kashaf Gafoor` |
| Browser tab title | `<title>` | `Kashaf Gafoor` |
| Google / link preview text | `og:title` and `name="description"` | `Kashaf Gafoor` |
| Photo description (for blind visitors) | `Portrait of` | `Kashaf Gafoor` |
| Menu "back to top" label | `back to top` | `Kashaf Gafoor` |

**Example: the big name at the top**

BEFORE:
```
<span class="hero__line"><span class="hero__word" style="--d:1">Kashaf</span></span>
<span class="hero__line"><span class="hero__word hero__word--italic" style="--d:2">Gafoor</span></span>
```
AFTER (example):
```
<span class="hero__line"><span class="hero__word" style="--d:1">Kashaf</span></span>
<span class="hero__line"><span class="hero__word hero__word--italic" style="--d:2">Noor</span></span>
```
Only the word between `>` and `</span>` changed. The second word is shown in *italic*.

**Your initials "KG"** appear as `K<i>G</i>`. To change them, replace only the letters, for example `K<i>N</i>`. Keep `<i>` and `</i>`. They appear in the top menu, the footer, and the photo placeholder (search `portrait__monogram`). The small browser-tab icon also shows "KG", but changing it is a developer job.

---

### 2. Professional title

This is the small line above your name: **"Cybersecurity × Agentic AI"**.

- **Search for:** `START: Your professional title`
- **Change:** only the words `Cybersecurity` and `Agentic AI`.

BEFORE:
```
Cybersecurity <span class="x" aria-hidden="true">×</span><span class="sr-only">and</span> Agentic AI
```
AFTER (example):
```
Ethical Hacking <span class="x" aria-hidden="true">×</span><span class="sr-only">and</span> Agentic AI
```

The same phrase also appears in:
- the mobile menu footer: search `nav__menu-foot`
- the browser tab title: search `<title>`

**Your current role and city** appear just below the introduction:
- **Search for:** `Currently: Ethical Hacking Intern at Nexus Defenders`
- On the next line: `Faisalabad, Punjab, Pakistan`

---

### 3. Hero introduction

This is the short paragraph under your name.

- **Search for:** `START: Your short introduction`

BEFORE:
```
Ethical hacking intern working across penetration testing, vulnerability
assessment and network defense, and co-developer of
<strong>ThreatIQ</strong>, an Agentic&nbsp;AI platform for cyber incident investigation.
```
AFTER (example):
```
Cybersecurity analyst working across penetration testing and network defense,
and co-developer of <strong>ThreatIQ</strong>, an Agentic&nbsp;AI platform for cyber incident investigation.
```

Tips:
- Words between `<strong>` and `</strong>` appear **bold**.
- `&nbsp;` is a "sticky space" that keeps "Agentic AI" on one line. You can replace it with a normal space if you like.
- You can break the text across several lines in the file. The website joins them into one paragraph.

---

### 4. Professional tagline

**"Elegance in Design. Intelligence in Defense."** appears in **3 places**:

| Where | Search for |
|---|---|
| Under your name | `hero__tagline` |
| Footer | `footer__tag` |
| Link preview text (when shared on WhatsApp or LinkedIn) | `og:description` |

BEFORE (under your name):
```
Elegance in Design.<br> <em>Intelligence in Defense.</em>
```
AFTER (example):
```
Secure by Design.<br> <em>Smart in Defense.</em>
```
`<br>` starts a new line. Words between `<em>` and `</em>` appear in *italic*.

---

### 5. About Me section

- **Search for:** `START: About Me text`
- It ends at: `END: About Me text`

Inside you will find:

| Part | Recognizable text | What to change |
|---|---|---|
| Heading | `A defender <em>who builds.</em>` (just above the START note) | The words. The part in `<em>` is italic. |
| Paragraph 1 | `I'm a cybersecurity student working in two areas` | The whole sentence |
| Paragraph 2 | `I'm currently an Ethical Hacking Intern at Nexus Defenders` | The whole sentence |
| Quote | `A dedicated, fast learner committed to securing digital assets.` | The quote text (keep the curly quote marks if you like) |
| Quick facts | `Based in`, `Currently`, `Building`, `Education` | The answer between `<dd>` and `</dd>` |

Highlighted words: in Paragraph 1, some words sit between `<span class="hl">` and `</span>`. They appear highlighted. Keep that frame and change only the words inside it.

**Example: a quick fact**

BEFORE:
```
<div><dt>Currently</dt><dd>Ethical Hacking Intern · Nexus Defenders</dd></div>
```
AFTER (example):
```
<div><dt>Currently</dt><dd>Security Analyst · Example Company</dd></div>
```

---

### 6. Professional summary (the 4 highlight numbers)

These are the four big numbers below "About": **Top 20%**, **50+**, **90%+**, **15+**.

- **Search for:** `START: The 4 numbers`

⚠️ **Important:** each number is written **twice** on its line. Change **both**.

BEFORE:
```
<span class="metric__value"><span data-count="50">50</span>+</span>
<span class="metric__label">Hours of hands-on TryHackMe learning</span>
```
AFTER (example, if you now have 120 hours):
```
<span class="metric__value"><span data-count="120">120</span>+</span>
<span class="metric__label">Hours of hands-on TryHackMe learning</span>
```

- The `+` or `%+` after the number is the symbol shown next to it. You can change or delete it.
- The description is between `<span class="metric__label">` and `</span>`.
- Keep exactly 4 numbers. Adding or removing one can affect the layout (developer job).

---

### 7. Education

- **Search for:** `START: EDUCATION`
- It ends at: `END: education`

There are two schools now: **NAVTTC** and **KIPS Education System**. Each school is one block:

```
<li class="edu reveal">
  <p class="edu__years mono"><time datetime="2023-06">Jun 2023</time> – <time datetime="2025-08">Aug 2025</time></p>
  <div>
    <h3 class="edu__school">KIPS Education System</h3>
    <p class="edu__degree">Intermediate, FSc</p>
  </div>
</li>
```

| To change | Edit this |
|---|---|
| School name | Between `<h3 class="edu__school">` and `</h3>` |
| Degree | Between `<p class="edu__degree">` and `</p>` |
| Dates you see | `Jun 2023` and `Aug 2025` |
| Hidden dates (for search engines) | `datetime="2023-06"` → year-month, e.g. `2025-08` means Aug 2025 |
| A course you are still studying | Replace the end date with the word `Present`, e.g. `<time datetime="2025-09">Sep 2025</time> – Present` |

**To add a school:** copy the whole block from `<li class="edu reveal">` down to its matching `</li>`. Paste it directly above or below another school block, still inside the `START` and `END` notes, then change the words. The newest school should usually be on top.

**To remove a school:** delete its whole block from `<li class="edu reveal">` to its matching `</li>`.

Also update the **Education quick fact** in the About section (search `<dt>Education</dt>`).

---

### 8. Email address

Your email `kashafgafoor@gmail.com` appears in **8 places**. The easiest method is **Find & Replace**:

1. Press **Ctrl + H** (Windows Notepad or VS Code) or **Cmd + Option + F** (VS Code on Mac).
2. In "Find" type: `kashafgafoor@gmail.com`
3. In "Replace" type your new email, e.g. `kashaf.newmail@gmail.com`
4. Click **Replace All**.
5. Save.

This updates all the email buttons, the email shown on the page and the **Copy** button at once.

---

### 9. Contact information

- **Search for:** `START: CONTACT SECTION`

| Part | Recognizable text |
|---|---|
| Heading | `Let's secure what's next <em>and make it intelligent.</em>` |
| Message | `I'm open to opportunities in ethical hacking` |
| Email (shown 3 times on 2 lines) | `contact__address` and `data-copy=` |
| Email button | `Start a conversation` |
| LinkedIn button | `Connect on LinkedIn` |
| Location | `contact__loc`, which shows `Faisalabad, Punjab, Pakistan` |

**Phone number:** your phone number is deliberately **not** on the website, to protect you from spam. If you want it added, ask a web developer, because a new line with a button would need styling.

---

## Section C — How to Update Cybersecurity and Agentic AI Skills

Skills are in the **"Expertise"** section of `index.html`. There are two cards: **Cybersecurity** and **Agentic AI**. Each card has two lists:

| List | Search for | Looks like |
|---|---|---|
| Cybersecurity skills | `START: Your CYBERSECURITY skills` | `<li>Penetration Testing</li>` |
| Cybersecurity tools ("Toolkit") | `Cybersecurity tools ("Toolkit")` | `<li class="chip">Wireshark</li>` |
| Agentic AI skills | `START: Your AGENTIC AI skills` | `<li>Retrieval-Augmented Generation (RAG)</li>` |
| AI tools ("Stack") | `AI tools ("Stack")` | `<li class="chip chip--ai">Python</li>` |

### Add a new skill

1. Find a skill line in the right list, e.g. `<li>Vulnerability Assessment</li>`
2. Copy the **whole line**.
3. Paste it on a new line directly below.
4. Change only the words between `>` and `</li>`.

BEFORE:
```
<li>Penetration Testing</li>
<li>Vulnerability Assessment</li>
<li>Network Defense</li>
```
AFTER (example: adding "Web Application Testing"):
```
<li>Penetration Testing</li>
<li>Vulnerability Assessment</li>
<li>Web Application Testing</li>
<li>Network Defense</li>
```

### Remove an outdated skill

Delete the **whole line** from `<li>` to `</li>`. Don't leave a half line behind.

### Update penetration testing / vulnerability assessment skills

These appear in several places. Use **Ctrl + F** for `Penetration Testing` and `Vulnerability Assessment`:

- Cybersecurity skills list (Expertise)
- Floating labels around your photo (search `float-tag`)
- The keyword row under the top section (search `class="strip"`)
- The Nexus Defenders job tags (Experience)
- The browser/Google description (search `name="description"`)

### Add or update Agentic AI, RAG and automation skills

- **Agentic AI skills list:** search `START: Your AGENTIC AI skills`. It currently has *Agentic AI Development, Retrieval-Augmented Generation (RAG), AI Automations, Autonomous Workflows, Product Requirements (PRD)*.
- **AI tools:** search `AI tools ("Stack")`. It currently has *Python, Streamlit, Groq API*.
  To add one, copy a line like `<li class="chip chip--ai">Python</li>` and change only `Python`.
- **4 workflow steps:** search `The 4 numbered workflow steps`. They read *Evidence → Retrieve → Assess → Respond*. Change only the word after `</span>`, e.g. `<li><span class="mono">02</span>Retrieve</li>`.
- **RAG and automations also appear in:**
  - floating label `RAG · Agentic AI` (search `float-tag--ai`)
  - keyword row `RAG` and `Automations` (search `class="ai"`)
  - About quick fact `Agentic AI · RAG · Automations` (search `<dt>Building</dt>`)

### Keep the format

- In the **Toolkit** list, use `<li class="chip">...</li>`.
- In the **AI Stack** list, use `<li class="chip chip--ai">...</li>`. The `chip--ai` part gives it the AI colour.
- **Copying an existing line from the same list** is always the safest way to keep the right style.

---

## Section D — How to Update Experience and Internships

- **File:** `index.html`
- **Search for:** `START: WORK EXPERIENCE & INTERNSHIPS`
- It ends at: `END: work experience`

There are three jobs now, newest first. Each job is between a **JOB START** note and a **JOB END** note:

| Job | Start note | End note |
|---|---|---|
| Co-Developer & PRD Writer, ThreatIQ | `JOB START: ThreatIQ (Co-Developer)` | `JOB END: ThreatIQ` |
| Ethical Hacking Intern, Nexus Defenders | `JOB START: Nexus Defenders` | `JOB END: Nexus Defenders` |
| IT Support Intern, Self Learning | `JOB START: Self Learning` | `JOB END: Self Learning` |

### What's inside one job

```
<!-- JOB START: Nexus Defenders (Ethical Hacking Intern) -->
<li class="tl-item reveal">
  <span class="tl-item__dot" aria-hidden="true"></span>
  <article class="tl-card">
    <p class="tl-card__meta mono"><time datetime="2026-07">Jul 2026</time> – <time datetime="2026-11">Nov 2026</time> · 5 mos · Remote</p>
    <h3 class="tl-card__role">Ethical Hacking Intern</h3>
    <p class="tl-card__org">Nexus Defenders</p>
    <p class="tl-card__desc">
      Ethical hacking internship centred on network security, ...
    </p>
    <ul class="chips">
      <li class="chip">Network Security</li><li class="chip">Vulnerability Assessment</li>
      <li class="chip">Penetration Testing</li><li class="chip">Threat Mitigation</li>
    </ul>
  </article>
</li>
<!-- JOB END: Nexus Defenders -->
```

| To change | Where |
|---|---|
| **Job title** | Between `<h3 class="tl-card__role">` and `</h3>` |
| **Organization name** | Between `<p class="tl-card__org">` and `</p>` |
| **Dates** | `Jul 2026`, `Nov 2026`, and the hidden `datetime="2026-07"` (year-month) |
| **Duration and place** | `· 5 mos · Remote` |
| **Description** | The sentences between `<p class="tl-card__desc">` and `</p>` |
| **Tags** | Each `<li class="chip">...</li>`. Copy one to add, delete one to remove. |

**Special notes:**
- In the ThreatIQ job, the organization line is `ThreatIQ <span>· Hackathon Project</span>`. The part inside `<span>` is shown in a softer colour.
- The Self Learning job uses **bullet points** instead of a paragraph: each `<li>...</li>` inside `<ul class="tl-card__list">` is one bullet.
- For a job you are still doing, write `Present` instead of an end date (see the Self Learning job).
- The **"Currently"** text in the top section and in the About quick facts must be updated by hand when your job changes (see [Section B, item 2](#2-professional-title)).
- The `&amp;` in `Co-Developer &amp; PRD Writer` is how the file writes the **&** sign. To show "&", type `&amp;`.

### Before-and-after example: updating the internship

BEFORE:
```
<p class="tl-card__meta mono"><time datetime="2026-07">Jul 2026</time> – <time datetime="2026-11">Nov 2026</time> · 5 mos · Remote</p>
<h3 class="tl-card__role">Ethical Hacking Intern</h3>
<p class="tl-card__org">Nexus Defenders</p>
```
AFTER (example: the internship was extended):
```
<p class="tl-card__meta mono"><time datetime="2026-07">Jul 2026</time> – <time datetime="2027-01">Jan 2027</time> · 7 mos · Remote</p>
<h3 class="tl-card__role">Senior Ethical Hacking Intern</h3>
<p class="tl-card__org">Nexus Defenders</p>
```

### Add another internship

1. Find `JOB START: Nexus Defenders (Ethical Hacking Intern)`.
2. Select **everything** from that `JOB START` line down to and including `JOB END: Nexus Defenders`.
3. Copy it (Ctrl + C).
4. Click at the start of the `JOB START` line of the job that should come **after** the new one. (Newest goes on top. To put the new job first, click at the start of `JOB START: ThreatIQ`.)
5. Paste (Ctrl + V).
6. In the pasted copy, change the job title, organization, dates, description and tags.
7. Rename the notes too, e.g. `JOB START: New Company` and `JOB END: New Company`, so you can find it later.
8. Save and check in the browser.

⚠️ Always paste **between** two jobs, never in the middle of one. Do not delete the line containing `timeline__progress` near the top of the list.

### Remove an old experience entry

Select everything from its `JOB START` line down to and including its `JOB END` line, then press Delete. Save and check.

---

## Section E — How to Add, Edit, and Remove Projects

- **File:** `index.html`
- **Search for:** `04</span> Projects`

There are **two kinds** of project cards:

### 1. The big featured project: ThreatIQ

- **Search for:** `START: FEATURED PROJECT`
- It ends at: `END: featured project`

| To change | Where |
|---|---|
| Category line | `Featured · Agentic AI × Incident Response · Hackathon` |
| **Title** | Between `<h3 class="feature__title" id="proj-threatiq">` and `</h3>` |
| **Description** | Between `<p class="feature__desc">` and `</p>` |
| Role / Timeline / Owned | The words between `<dd>` and `</dd>` |
| **Technologies** | Each `<li class="chip">...</li>` (or `chip chip--ai` for AI items) |
| **The link** | The line starting `<a class="text-link" href="mailto:...` |

The "screen" picture on the left of this card is a drawing made by the website (it says "Illustrative visual"). It is not a photo. **Don't edit those ~20 lines.**

**Adding a GitHub or live link to ThreatIQ.** Right now the button says **"Request a walkthrough"** and opens an email. When you have a real link:

BEFORE:
```
<a class="text-link" href="mailto:kashafgafoor@gmail.com?subject=ThreatIQ%20%E2%80%94%20walkthrough%20request">
  Request a walkthrough
```
AFTER (example GitHub link):
```
<a class="text-link" href="https://github.com/your-username/threatiq" target="_blank" rel="noopener noreferrer">
  View on GitHub
```
- Replace everything between the quotes after `href=` with the full link (it must start with `https://`).
- Add ` target="_blank" rel="noopener noreferrer"` exactly as shown, so the link opens in a new tab.
- Change the visible words (`Request a walkthrough` → `View on GitHub` or `View live project`).
- Leave the `<svg ...>` arrow line under it as it is.

### 2. The smaller project cards

- **Search for:** `START: OTHER PROJECTS`
- It ends at: `END: other projects`

Current projects:

| Project | Start note | End note |
|---|---|---|
| Network Basics Lab | `PROJECT START: Network Basics Lab` | `PROJECT END: Network Basics Lab` |
| Windows Troubleshooting | `PROJECT START: Windows Troubleshooting` | `PROJECT END: Windows Troubleshooting` |

Each card has:

| To change | Where |
|---|---|
| Category | Between `<p class="project__cat mono">` and `</p>` |
| **Title** | Between `<h3 class="project__title" ...>` and `</h3>` |
| **Description** | Between `<p class="project__desc">` and `</p>` |
| **Technologies** | Each `<li class="chip">...</li>` |

The picture area at the top of these two cards (the command-prompt text and the "resolved" list) is also a drawing made by the website. You may change its words, but you don't have to.

### Add another project (use the ready-made template)

There is a ready-made, hidden template at the bottom of the project list. Search for `TEMPLATE — duplicate to add a project`. It looks like this:

```
<!-- TEMPLATE — duplicate to add a project:
<article class="project reveal" aria-labelledby="proj-ID">
  <div class="project__visual" aria-hidden="true"></div>
  <p class="project__cat mono">Category</p>
  <h3 class="project__title" id="proj-ID">Project title</h3>
  <p class="project__desc">Short description.</p>
  <ul class="chips"><li class="chip">Tech</li></ul>
  <a class="text-link" href="https://github.com/..." target="_blank" rel="noopener noreferrer">View on GitHub</a>
</article>
-->
```

Steps:
1. Copy **only** the lines from `<article class="project reveal" ...>` to `</article>`. **Don't** copy the first line (`<!-- TEMPLATE ...`) or the last line (`-->`).
2. Paste them on a new line **just above** the `<!-- TEMPLATE` line.
3. Fill it in:
   - `proj-ID` appears **twice**. Replace both with the same short one-word name with no spaces, e.g. `proj-phishing`. Every project needs a different name.
   - `Category` → e.g. `Security · Lab`
   - `Project title` → your project name
   - `Short description.` → one or two sentences
   - `<li class="chip">Tech</li>` → copy this piece once per technology
   - `https://github.com/...` → your real GitHub link. If you have **no link**, delete the whole `<a class="text-link" ...>View on GitHub</a>` line. For a live website, use its link and change `View on GitHub` to `View live project`.
4. Optionally add notes around it: `<!-- PROJECT START: My Project -->` before it and `<!-- PROJECT END: My Project -->` after it.
5. Save and check.

New projects get a plain, softly glowing green box at the top instead of a drawing. That is expected.

### Remove a project

Delete everything from its `PROJECT START` line down to and including its `PROJECT END` line. Save and check.

---

## Section F — How to Update Certifications

- **File:** `index.html`
- **Search for:** `START: CERTIFICATIONS`
- It ends at: `END: certifications`

Current entries:

| Entry | Start note | End note |
|---|---|---|
| TryHackMe, Complete Beginner Path | `CERTIFICATE START: TryHackMe` | `CERTIFICATE END: TryHackMe` |
| DigiSkills, Cybersecurity | `CERTIFICATE START: DigiSkills` | `CERTIFICATE END: DigiSkills` |

One entry looks like this:
```
<article class="cert reveal">
  <div class="cert__seal" aria-hidden="true">
    <svg ...>...</svg>                          ← small badge drawing, don't edit
  </div>
  <div class="cert__body">
    <p class="cert__issuer mono">TryHackMe</p>
    <h3 class="cert__name">Complete Beginner Path</h3>
    <p class="cert__detail">Ranked in the top 20%, with 50+ hours of hands-on learning.</p>
  </div>
  <span class="cert__tag mono">Learning path</span>
</article>
```

| To change | Where |
|---|---|
| **Certification name** | Between `<h3 class="cert__name">` and `</h3>` |
| **Issuing organization** | Between `<p class="cert__issuer mono">` and `</p>` |
| **Date** | Add it after the organization with a dot: `TryHackMe · Mar 2027` |
| Description | Between `<p class="cert__detail">` and `</p>` |
| Small label on the right | Between `<span class="cert__tag mono">` and `</span>` (e.g. `Certificate`, `Training`) |

The organization name is automatically shown in CAPITAL LETTERS. That is part of the design, not a mistake.

### Add a verification link

Add this line directly **below** the `cert__detail` line (inside the same `cert__body`):
```
<a class="text-link" href="https://your-verification-link" target="_blank" rel="noopener noreferrer">Verify credential</a>
```
Replace `https://your-verification-link` with the real link from the certificate website.

### Add another certification

1. Select everything from `CERTIFICATE START: DigiSkills` down to and including `CERTIFICATE END: DigiSkills`.
2. Copy it, then paste it on a new line **directly after** `CERTIFICATE END: DigiSkills`.
3. In the copy: change the issuer (plus date), name, detail and label. Add a verification link if you have one (see above).
4. Rename the notes, e.g. `CERTIFICATE START: CompTIA Security+` and `CERTIFICATE END: CompTIA Security+`.

Copy a real entry like this rather than the hidden template (search `TEMPLATE — add a formal certification`). The template has a `…` where the badge drawing should be, so its badge would appear empty.

**Optional:** the text under the heading says *"Formal credentials will be added here as they're earned."* (search `Structured learning completed so far`). Update it once you have formal certificates.

### Remove an outdated certification

Delete from its `CERTIFICATE START` line to its `CERTIFICATE END` line.

---

## Section G — How to Change Profile Picture and Other Images

### Where the picture goes

| Question | Answer |
|---|---|
| Which picture name does the website look for? | **`portrait.jpg`** |
| Which folder? | **`assets/images/`** (inside your website folder) |
| Is there a picture there now? | **No.** The folder is empty, so the website shows a "KG" placeholder with circles. This is on purpose. |
| Do I need to edit any file? | **No**, if you name your photo exactly `portrait.jpg`. |

### Steps (easiest way: no editing needed)

1. Choose a clear, professional photo of yourself.
2. Make sure the file is **JPG** (the name ends in `.jpg` or `.jpeg`). Most phone photos are JPG.
3. **Rename** the photo to exactly: `portrait.jpg`
   - all small letters (`Portrait.JPG` will **not** work online)
   - no spaces, no extra words
   - Windows tip: turn on file extensions to see the real ending. In File Explorer, click **View → Show → File name extensions**. This avoids a file accidentally named `portrait.jpg.jpg`.
4. Put the file into the `assets/images/` folder.
5. Open `index.html` in your browser (see [Section I](#section-i--how-to-preview-changes)) and refresh. Your photo should replace the placeholder.

**To replace it later:** delete the old `portrait.jpg` and put the new one in, using the same name.

### If your photo is PNG or WEBP (or has a different name)

The website works with **.jpg, .jpeg, .png and .webp**. If your file is not named `portrait.jpg`:

1. Put it in `assets/images/`, e.g. `assets/images/kashaf.png`
2. In `index.html`, search for `START: PROFILE PICTURE`
3. On the line below, change only the name inside `src="..."`:

BEFORE:
```
<img class="portrait__img" src="assets/images/portrait.jpg" alt="Portrait of Kashaf Gafoor" ...>
```
AFTER:
```
<img class="portrait__img" src="assets/images/kashaf.png" alt="Portrait of Kashaf Gafoor" ...>
```

### Recommended photo size

| Setting | Recommendation |
|---|---|
| Shape | **Tall (portrait)**, about **4 wide : 5 tall** |
| Size | About **1000 × 1250 pixels** (at least 640 × 800) |
| File size | **Under 300 KB** (keeps the site fast) |
| Framing | Face near the top-middle. The website trims the edges automatically to fit the frame and keeps the upper part visible. |

**To make the file smaller:** use a free website such as https://squoosh.app/ (drag in the photo, choose "MozJPEG", lower the quality to about 75, then download).

### Other images

- **Projects and certifications have no photos.** Their pictures (the "ThreatIQ screen", the command prompt, the badges) are drawings made by the website itself. You don't need to supply any images for them.
- Adding real screenshots to project cards would need design changes, so ask a web developer.
- **Browser tab icon** (`assets/icons/favicon.svg`, the "KG" mark): ask a developer to change it.

---

## Section H — How to Update Social Media and Contact Links

### Visible text vs. the actual link

Every button or link has **two parts**:

```
<a class="..." href="https://www.linkedin.com/in/kashaf-noor-lab" ...>  Connect on LinkedIn  </a>
                   └──────────── where it GOES ───────────┘          └─ what people SEE ─┘
```

- **Where it goes:** the address inside the quotes after `href=`. Change this to send people somewhere else.
- **What people see:** the words before `</a>`. Change this to change the button's wording.

Changing one does **not** change the other.

### LinkedIn

Your LinkedIn link is `https://www.linkedin.com/in/kashaf-noor-lab`. It appears in **3 places**: the top section, the Contact button and the footer icon.

Use **Find & Replace** (Ctrl + H):
- Find: `https://www.linkedin.com/in/kashaf-noor-lab`
- Replace: your correct LinkedIn link
- Click **Replace All**, then save.

⚠️ **Please check this link now.** Your LinkedIn PDF (`Profile.pdf`) lists the address as `linkedin.com/in/kashaf-noorlab` (without the second dash), but the website uses `kashaf-noor-lab`. Open your LinkedIn profile, copy the address from the browser's address bar, and use that.

### Email

See [Section B, item 8](#8-email-address). Use Find & Replace for `kashafgafoor@gmail.com`.

Email links start with `mailto:`. Keep `mailto:` and change only the address after it. Some email links also contain `?subject=...`. That pre-fills the email subject line, so you can leave it.

### GitHub (not on the website yet)

There is a hidden, ready-made GitHub line in the top section. Search for `GitHub: not listed on the LinkedIn profile`. You will see:

```
<!-- GitHub: not listed on the LinkedIn profile. Add when available:
<li><a class="social-link" href="https://github.com/USERNAME" target="_blank" rel="noopener noreferrer">GitHub</a></li>
-->
```

**The safest way to add GitHub** so it matches the LinkedIn and Email buttons:

1. Find the LinkedIn item just above it. It starts with `<li>` followed by `<a class="social-link" href="https://www.linkedin.com/...`, and ends with `</li>` after `<span>LinkedIn</span></a>`.
2. Copy that whole `<li> ... </li>` block (5 lines).
3. Paste it directly **below** the Email block's `</li>`, but **above** the `<!-- GitHub:` line.
4. In the pasted copy:
   - change the link to `https://github.com/your-username`
   - change `aria-label="LinkedIn profile (opens in a new tab)"` to `aria-label="GitHub profile (opens in a new tab)"`
   - change `<span>LinkedIn</span>` to `<span>GitHub</span>`
5. Save and check. The button will show the LinkedIn logo. Replacing it with the GitHub logo is a small job for a developer.

Adding GitHub to the footer icons also needs a GitHub logo, so ask a developer.

### Other social media (Twitter/X, Instagram, Medium, etc.)

Use the same method as GitHub above: copy the LinkedIn block, then change the link, label and word. The icon stays as the LinkedIn logo until a developer adds the right logo.

### Project links and contact buttons

- Project links: see [Section E](#section-e--how-to-add-edit-and-remove-projects).
- Contact buttons: search `EDIT HERE: Contact buttons`.
- Top buttons **"View My Work"** and **"Contact Me"** jump to sections on the same page (`#projects`, `#contact`). You can change their words, but don't change `href="#projects"` or `href="#contact"`.

---

## Section I — How to Preview Changes

### 1. Open the project folder

Open **File Explorer** (Windows) or **Finder** (Mac) and go to your website folder (the one containing `index.html`, `css`, `js` and `assets`).

### 2. Find `index.html`

It may appear as just `index` with a browser icon.

### 3. Open it in a browser

- **Double-click** `index.html`. It opens in your default browser.
- Or right-click → **Open with** → **Google Chrome** / **Firefox** / **Microsoft Edge** / **Safari**.

The address bar will show something like `file:///C:/Users/.../index.html`. That means you are viewing the copy **on your computer**.

### 4. Refresh after editing

1. Edit `index.html` in your text editor and **save** (Ctrl + S).
2. Go to the browser tab and press **F5** (Windows) or **Cmd + R** (Mac).
3. If you don't see your change, press **Ctrl + Shift + R** (Windows) or **Cmd + Shift + R** (Mac) for a "hard refresh".

### 5. Check images and links

- [ ] Your photo shows instead of the "KG" placeholder.
- [ ] Click **LinkedIn**: your profile opens in a new tab.
- [ ] Click **Email**: your email app opens with your address.
- [ ] Click **Copy** next to your email, then paste somewhere: it shows the right address.
- [ ] Click every project and certificate link.
- [ ] Click the menu items (About, Expertise, ...): the page scrolls to each section.
- [ ] Click the sun/moon button: check the page in both light and dark mode.
- [ ] Make the browser window narrow (or open the page on your phone after publishing) to check the mobile view.

### 6. Common mistakes and how to spot them

| What you see | Likely cause | Fix |
|---|---|---|
| Strange symbols like `</p>` or `">` showing on the page | A `<`, `>` or `"` was deleted or added by accident | Undo (Ctrl + Z) or compare with your backup |
| A whole section disappeared or the layout looks broken below a point | Part of a block was deleted (missing `</li>`, `</article>`, `</div>`), or a `<!--` note lost its `-->` | Undo, or copy that section back from your backup |
| A section is missing entirely | A `<!--` was typed without a closing `-->`, which hides everything after it | Find the stray `<!--` and remove it |
| Photo not showing (still "KG") | Wrong file name (`Portrait.JPG`, `portrait.jpg.jpg`), wrong folder, or not a JPG | Check the name and folder (see [Section G](#section-g--how-to-change-profile-picture-and-other-images)) |
| Number shows the old value | Only one of the two numbers was changed | Change both (see [Section B, item 6](#6-professional-summary-the-4-highlight-numbers)) |
| Link goes to the wrong place | Only the visible text was changed, not the `href="..."` | See [Section H](#visible-text-vs-the-actual-link) |
| Link gives an error | Missing `https://` at the start | Add `https://` |

**Golden fix:** if you can't find the problem, copy `index.html` from your backup folder back into the website folder and redo your change slowly.

### ⚠️ Important

Changes on your computer **do not** change the online website. Visitors only see the new version after you upload the changed files to GitHub (see [Part 2, Step 4](#step-4-update-the-website-later)). Vercel then updates the online website automatically.

---

# Part 2 — Put Your Website on GitHub (From Zero)

**What is GitHub?** A free website that safely stores your website files online. Think of it as Google Drive for websites. Vercel (Part 3) will take your files from GitHub and turn them into a public website.

**Do GitHub first, then Vercel.**

## Step 1: Create a GitHub account

1. Open **https://github.com/** in your browser.
2. Click **Sign up** (top right).
3. Enter your **email address**, a **password**, and a **username**.
   - Your username becomes part of your GitHub links, so choose something professional, e.g. `kashafgafoor`.
4. Complete the puzzle to prove you're human, then click **Create account**.
5. **Verify your email:** GitHub sends a code to your inbox. Open the email and type the code into GitHub. (Check your Spam folder if it doesn't arrive.)
6. GitHub may ask a few questions about how you will use it. You can answer or click **Skip**.
7. **To log in later:** go to https://github.com/, click **Sign in**, and enter your username (or email) and password.

## Step 2: Create a repository

**What is a repository?** A **folder on GitHub** for one project. You'll make one for your website. People often call it a "repo".

1. After logging in, click the **+** in the top-right corner → **New repository**.
2. **Repository name:** use something short with no spaces, e.g. `kashaf-portfolio`.
   - Tip: this name often becomes part of your free website address, e.g. `kashaf-portfolio.vercel.app`.
3. **Description** (optional): `My personal portfolio website`.
4. **Public or Private?**
   - **Private** (recommended): only you can see the files. Your website will still be public on Vercel.
   - **Public**: anyone can see the files. That's also fine, since the site has no secrets.
5. **Leave everything else off.** Don't add a README, `.gitignore` or license, because your folder already has what it needs.
6. Click **Create repository**.

## Step 3: Upload the website

### Prepare your files first

Before uploading, check your website folder:

- [ ] `index.html` is there (directly in the folder, not inside another folder).
- [ ] The `css`, `js` and `assets` folders are there.
- [ ] Your photo `portrait.jpg` is inside `assets/images/`. **GitHub cannot upload empty folders.** If the photo isn't there yet, the `images` folder won't upload. That's fine: the website will show the "KG" placeholder until you upload your photo later.
- [ ] **Don't upload `Profile.pdf`.** It contains your phone number and the website doesn't use it. Move it out of the website folder before uploading (for example, to your Documents folder).

### Upload

1. On your new, empty repository page, find the link that says **"uploading an existing file"** and click it.
   (If you don't see it, click **Add file → Upload files**.)
2. Open your website folder in File Explorer or Finder.
3. **Open the folder** so you can see `index.html`, `css`, `js`, `assets`, etc.
4. Select **everything inside** the folder (Ctrl + A or Cmd + A).
5. **Drag** the selected items into the GitHub page (the box that says "Drag files here").
   - ✅ Drag the **contents** of the folder.
   - ❌ Don't drag the outer folder itself. That would put `index.html` inside a sub-folder, and the website would show a 404 error.
6. Wait until all files are listed (`index.html`, `css/style.css`, `js/script.js`, `assets/icons/favicon.svg`, `assets/images/portrait.jpg`, ...).

### Save the upload (a "commit")

**What is a commit?** It's like pressing "Save" with a short note. GitHub remembers each commit, so you can always see what changed and when, and go back if needed.

7. Scroll down to **"Commit changes"**.
8. In the first box, type a short note, e.g. `Upload my portfolio website`.
9. Make sure **"Commit directly to the main branch"** is selected.
10. Click **Commit changes**.

### Check it worked

Your repository page should now show:
```
assets/
css/
js/
README.md
WEBSITE-EDITING-GUIDE.md
index.html
```
✅ `index.html` must appear **in this first list**, not inside another folder.

**If dragging doesn't work** (e.g. some older browsers won't accept folders):
- Use **Google Chrome** or **Microsoft Edge**. They support dragging folders.
- Or upload in parts: first drag `index.html`, then use **Add file → Upload files** again for each folder. Your website has only a few files, so the upload limit won't be a problem.
- Or install **GitHub Desktop** (https://desktop.github.com/), a free app with buttons instead of typing.

## Step 4: Update the website later

You can change files **directly on GitHub** or **upload new versions**. After every change, Vercel updates the online website by itself in about a minute.

### A) Edit text directly on GitHub (no upload needed)

1. Open your repository on https://github.com/
2. Click **`index.html`**.
3. Click the **pencil icon ✏️** (top right of the file, "Edit this file").
4. Press **Ctrl + F** to find the text you want to change (use the search words from Sections B–H).
5. Make the change.
6. Click the green **Commit changes...** button, type a short note (e.g. `Update internship dates`), and click **Commit changes**.

### B) Replace `index.html` with the version from your computer

If you edited on your computer and checked it in your browser:

1. Open your repository → **Add file → Upload files**.
2. Drag your updated `index.html` into the box. A file with the **same name** replaces the old one.
3. Type a commit note → **Commit changes**.

### C) Upload or replace your profile picture

1. Open your repository. Click the **`assets`** folder.
2. If an `images` folder exists, click it. Then click **Add file → Upload files** and drag in `portrait.jpg`. The same name replaces the old photo.
3. **If there is no `images` folder yet** (because it was empty when you first uploaded): go back to the main repository page, open your computer's website folder, and drag the **`assets`** folder (containing `images/portrait.jpg`) into **Add file → Upload files**. GitHub will create `assets/images/portrait.jpg`.
4. Commit the change.
5. Check that the path is exactly `assets/images/portrait.jpg` (small letters).

### How the online website gets updated

```
You commit a change on GitHub  →  Vercel notices  →  Vercel rebuilds the site  →  Live website updated (≈ 1 minute)
```

---

# Part 3 — Put Your Website Online with Vercel (From Zero)

**What is Vercel?** A free service that takes the files from your GitHub repository and shows them as a real website with a public address, like `kashaf-portfolio.vercel.app`.

Complete Part 2 (GitHub) first.

## Step 1: Create a Vercel account

1. Open **https://vercel.com/**
2. Click **Sign Up**.
3. Choose the **Hobby** plan (free, for personal projects) and type your name.
4. Click **Continue with GitHub**.
5. A GitHub page opens asking you to **Authorize Vercel**. Click **Authorize**.

**What does "authorize" or "permissions" mean?** You're giving Vercel permission to **read your GitHub repositories**, so it can fetch your website files and notice when you change them. Vercel does not get your GitHub password, and you can remove this permission any time in GitHub → **Settings → Applications**.

## Step 2: Import the GitHub repository

1. After signing in, you're on the **Vercel Dashboard** (your home page on Vercel).
2. Click **Add New...** → **Project**.
3. Under **"Import Git Repository"**, you'll see a list of your GitHub repositories.
   - **If your repository isn't listed**, click **"Adjust GitHub App Permissions"** (or **"Install"**). A GitHub page opens. Choose **Only select repositories**, pick `kashaf-portfolio`, and click **Save** or **Install**. Return to Vercel. Your repository now appears.
4. Next to **`kashaf-portfolio`** (or the name you chose), click **Import**.
   - Make sure it's the right repository name before clicking.

## Step 3: Configure the project

Your website is a simple website made of ready-to-use files. **It needs no building, no installing and no special settings.** On the "Configure Project" screen:

| Setting | What to choose | Why |
|---|---|---|
| **Project Name** | Leave as is, or type `kashaf-portfolio` | This becomes your web address: `project-name.vercel.app` |
| **Framework Preset** | **Other** | Your site doesn't use any framework. Vercel usually picks "Other" by itself. |
| **Root Directory** | **`./`** (leave the default) | `index.html` is at the top level of your repository |
| **Build Command** | Leave **empty** (don't switch "Override" on) | Nothing needs to be built |
| **Output Directory** | Leave **empty / default** (don't switch "Override" on) | The files are served exactly as they are |
| **Install Command** | Leave **empty** (don't switch "Override" on) | Nothing needs to be installed |
| **Environment Variables** | Leave empty | Not needed |

In short: **don't change anything except confirming "Other"**.

## Step 4: Deploy the website

1. Click **Deploy**.
2. Wait. You'll see a progress screen. For this website it usually takes **less than a minute**.
3. When it's finished you'll see **"Congratulations!"** with a small preview of your website.
4. Click **Continue to Dashboard**.
5. Under **Domains**, you'll see your public website address, e.g. **`kashaf-portfolio.vercel.app`**. Click it to open your live website.
6. **Share this address** on your CV and LinkedIn.

### Verify everything works

- [ ] Website opens without an error.
- [ ] Colours and fonts look the same as on your computer.
- [ ] Your photo appears (if you uploaded it).
- [ ] LinkedIn and Email buttons work.
- [ ] Menu links scroll to the right sections.
- [ ] Open the address on your **phone** too.

## Step 5: Update the live website

You never need to touch Vercel again for normal updates:

1. **Edit** the website (on your computer, or directly on GitHub).
2. **Upload or commit** the change to GitHub (see [Part 2, Step 4](#step-4-update-the-website-later)).
3. **Vercel notices** the new commit automatically.
4. **Vercel publishes** the new version automatically (about 1 minute).
5. **Refresh** your live website. It now shows the latest version.

To watch it happen: Vercel Dashboard → your project → **Deployments**. The newest one will say **Building**, then **Ready**.

## Step 6: Common problems

| Problem | Likely cause | How to fix |
|---|---|---|
| **Website shows "404: NOT FOUND"** | `index.html` isn't at the top level of the repository (it's inside a sub-folder) | On GitHub, open your repository. If you see a folder (e.g. `Web 4/`) instead of `index.html`, you dragged the outer folder. **Easiest fix:** create a new repository, upload the folder's *contents* (Part 2, Step 3), and import that one in Vercel. **Or:** in Vercel → Project → **Settings → Build and Deployment → Root Directory**, choose that sub-folder, save, then redeploy (Deployments → ⋯ → **Redeploy**). |
| **Website has no colours/styles (plain text only)** | The `css` folder or `css/style.css` wasn't uploaded, or was renamed | Check GitHub has `css/style.css` exactly (small letters). Upload it if missing. |
| **Menu, dark-mode button or animations don't work** | `js/script.js` is missing | Check GitHub has `js/script.js`. Upload if missing. |
| **Profile picture missing** (still "KG" placeholder) | Photo not uploaded, wrong folder, or wrong name. **Online, `Portrait.JPG` and `portrait.jpg` are different names**, even if it worked on your computer. | On GitHub, check the photo is at exactly `assets/images/portrait.jpg`. If the name differs, upload it again with the correct name. |
| **Website shows the old version** | (1) The change wasn't committed on GitHub; (2) Vercel is still working; (3) your browser remembers the old page | (1) Check the file on GitHub shows your change. (2) Check Vercel → Deployments says **Ready**. (3) Hard refresh: **Ctrl + Shift + R** / **Cmd + Shift + R**, or open in a private window. |
| **Wrong repository imported** | You clicked Import on a different repository | Vercel → that project → **Settings → General** → scroll down → **Delete Project**. Then repeat [Step 2](#step-2-import-the-github-repository) with the correct repository. |
| **`index.html` in the wrong folder** | See "404" above | Same fix as the 404 row |
| **Deployment failed** (red "Error") | Usually a setting was changed by mistake (e.g. a Build Command was typed in), or a framework was selected | Vercel → Project → **Settings → Build and Deployment**: set Framework Preset to **Other**, switch **off** all "Override" switches, save, then **Redeploy**. Click the failed deployment to read the error message. |
| **Repository doesn't appear in Vercel** | Vercel wasn't given access to it | In Vercel's Import screen, click **Adjust GitHub App Permissions** and select the repository |
| **Page is broken after an edit** | A mistake in `index.html` | Open `index.html` on GitHub → click **History** → open the last good version → copy its content into the file and commit. Or upload your backup `index.html`. |

---

## Before Publishing Your Website

Go through this list before sharing your website address:

- [ ] **Personal information checked:** name, professional title, introduction, tagline, About Me, quick facts, location
- [ ] **Highlight numbers updated:** both copies of each number changed
- [ ] **Skills reviewed:** cybersecurity skills, toolkit, Agentic AI skills, AI stack
- [ ] **Professional experience updated:** job titles, organizations, dates, descriptions, and the "Currently" line at the top
- [ ] **Education checked**
- [ ] **Projects updated:** titles, descriptions, tags and links
- [ ] **Certifications checked:** names, issuers, dates and verification links
- [ ] **Profile picture replaced:** `assets/images/portrait.jpg`, small letters, under 300 KB
- [ ] **Social links tested:** the LinkedIn link opens *your* profile (check `kashaf-noor-lab` vs `kashaf-noorlab`)
- [ ] **Email link tested:** Email buttons open your email app with the correct address, and the "Copy" button copies it
- [ ] **Website previewed** on your computer, in light and dark mode
- [ ] **`Profile.pdf` NOT uploaded** (it contains your phone number)
- [ ] **Files uploaded to GitHub:** `index.html` visible at the top level
- [ ] **Website deployed on Vercel:** deployment shows "Ready"
- [ ] **Live website tested** on a computer **and** a phone

---

## What You Can Do Yourself vs. What Needs a Web Developer

### ✅ Safe to do yourself

- Change any **text**: name, title, introduction, About Me, skills, jobs, projects, education, certifications, contact text
- Change **links**: LinkedIn, email, GitHub and project links
- **Add or remove** skills, tags, jobs, projects, schools and certifications by copying or deleting whole blocks
- Replace your **profile picture**
- Upload changes to **GitHub** and let **Vercel** update the site

### 🛠️ Ask a web developer for

- Changing **colours, fonts, spacing or layout** (`css/style.css`)
- Changing **animations**, the menu, or the light/dark switch (`js/script.js`)
- Adding a **new section** (e.g. "Publications" or "Blog")
- Adding **GitHub, Instagram or other logos** (icons) for new social links
- Adding **screenshots or images** to project or certificate cards
- Changing the number of **highlight numbers** (more or fewer than 4)
- Changing the **browser-tab icon** (`assets/icons/favicon.svg`)
- Adding a **phone number** or a **contact form**
- Connecting a **custom domain** (e.g. `www.kashafgafoor.com`)
- Anything that looks broken and that restoring your backup doesn't fix

---

*Tip: keep this guide in your website folder. It's safe to upload it to GitHub too, since visitors never see it.*
