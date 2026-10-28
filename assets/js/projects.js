/* ==========================================================================
   PORTFOLIO CONTENT: edit this file to add, remove or reorder your work.
   --------------------------------------------------------------------------
   - Each item in `courses` and `docs` appears on the home page and gets its
     own case-study page at  project.html?id=<id>
   - Any field can be left out or set to "" and it simply won't appear.
   - Keep the commas between items. Copy a whole { ... } block to add one.

   FIELD GUIDE
   id           Unique, lowercase, no spaces (used in the page address).
   title        Name of the course or document.
   summary      One or two sentences: what it is.
   format       (courses) e.g. "Self-paced e-learning", "Software simulation".
   docType      (docs) e.g. "Quick reference guide", "User guide".
   length       e.g. "25 minutes" or "4 pages, PDF".
   audience     Who it was built for.
   role         What you did on the project.
   tools        List of tools, e.g. ["Articulate Storyline 360", "Camtasia"].

   challenge    The learning problem or need (shown as "The problem").
   overview     What the learner experiences.
   approach     List: your key design decisions.
   outline      List: lesson / module / section titles.
   deliverables List: what you handed over.
   results      List: outcomes. Use real numbers, survey results or quotes.

   image        A screenshot of the real course or document, e.g.
                "assets/img/onboarding.jpg" (1600 x 1000 px for courses,
                1275 x 1650 px for documents). Replaces the drawn preview.
   imageAlt     Short description of the screenshot for screen readers.
   caption      Optional caption shown under the preview on the home page.
   preview      Drawn preview style used when there's no image.
                Courses: "lesson", "scenario", "simulation" or "blended".
                Documents: "page" or "article".
   color        Preview background: "green", "blue", "sand" or "slate".

   link         Where the Launch / Open button goes. Can be a course folder
                in this site ("courses/onboarding/story.html"), a PDF in this
                site ("help-docs/lms-guide.pdf"), or any web address.
   linkLabel    Optional button text ("Launch course" / "Open document").
   embed        Optional. Shows the live course or PDF on the case-study
                page. Usually the same address as `link`.
   ========================================================================== */

window.PORTFOLIO = {
  owner: "Karen Kirk",

  /* ------------------------------------------------------------------------
     E-LEARNING COURSES (3–4 recommended)
     ------------------------------------------------------------------------ */
  courses: [
    {
      id: "new-hire-onboarding",
      title: "Welcome Aboard: New Hire Onboarding",
      summary:
        "A self-paced onboarding journey that introduces new employees to company culture, key policies, and the tools they'll use in their first 30 days.",
      format: "Self-paced e-learning",
      length: "40 minutes",
      audience: "New employees in their first 30 days",
      role: "Instructional designer & developer",
      tools: ["Articulate Rise 360", "Storyline 360", "LMS"],
      challenge:
        "Onboarding content lived in many places and changed often. New employees felt overwhelmed, and managers were repeating the same explanations with every new hire.",
      overview:
        "New hires used to get a large volume of information in their first week through slide decks, emails, and back-to-back meetings. This course brings the essentials together into one welcoming, well-organized experience that learners can complete at their own pace and revisit anytime.",
      approach: [
        "Interviewed HR, managers, and recent hires to identify what new employees truly need in their first 30 days.",
        "Organized content into short, scannable lessons: culture and values, key policies, systems access, and who to ask for help.",
        "Added knowledge checks and a first-week checklist so learners can apply what they learn right away.",
        "Published to the LMS with completion tracking and a simple update process for HR.",
      ],
      outline: [
        "Welcome to the team",
        "Our mission & values",
        "Policies you need to know",
        "Getting set up: systems & tools",
        "Your first-week checklist",
      ],
      deliverables: [
        "40-minute Rise 360 course",
        "First-week checklist (PDF)",
        "Knowledge checks",
        "SCORM package with completion tracking",
      ],
      results: [
        "Add a measurable outcome here, e.g. completion rate within the first two weeks.",
        "Add learner or manager feedback here, e.g. highlights from the post-course survey.",
      ],
      image: "",
      imageAlt: "",
      caption: "",
      preview: "lesson",
      color: "green",
      link: "",
      embed: "",
    },
    {
      id: "security-awareness",
      title: "Protecting Client Data: Security Awareness",
      summary:
        "Scenario-based training that helps employees recognize phishing, protect sensitive information, and make smart security decisions every day.",
      format: "Scenario-based e-learning",
      length: "25 minutes",
      audience: "All employees (annual requirement)",
      role: "Instructional designer & developer",
      tools: ["Articulate Storyline 360", "SCORM / LMS"],
      challenge:
        "Annual compliance training was often treated as a checkbox. The goal was to make security practices memorable and directly relevant to employees' everyday work.",
      overview:
        "Learners step into realistic workplace situations, such as a suspicious email, an unlocked screen, or an unexpected request for client information, and choose how to respond.",
      approach: [
        "Partnered with IT and compliance experts to identify the highest-risk behaviors.",
        "Designed branching scenarios with realistic consequences and immediate feedback.",
        "Replaced long policy text with short, focused interactions and a downloadable job aid.",
        "Built a scored assessment that reports completion and results to the LMS.",
      ],
      outline: [
        "The suspicious email",
        "The unlocked screen",
        "The urgent request",
        "Final assessment",
      ],
      deliverables: [
        "Branching scenario course in Storyline 360",
        "Security quick-tips job aid",
        "Scored assessment reporting to the LMS",
      ],
      results: [
        "Add a measurable outcome here, e.g. assessment pass rate or phishing-test results.",
        "Add a stakeholder quote or learner comment here.",
      ],
      image: "",
      imageAlt: "",
      caption: "",
      preview: "scenario",
      color: "blue",
      link: "",
      embed: "",
    },
    {
      id: "lms-navigation",
      title: "Navigating the Learning Portal",
      summary:
        "A watch-try-do software simulation that teaches employees to find, enroll in, and complete training in the LMS.",
      format: "Software simulation",
      length: "15 minutes",
      audience: "Employees new to the LMS",
      role: "Instructional designer & developer",
      tools: ["Articulate Storyline 360", "Camtasia"],
      challenge:
        "Many employees were unsure how to use the LMS, which led to missed deadlines on required training and a steady stream of how-to questions.",
      overview:
        "Employees learn the core tasks in the company's learning management system (logging in, searching the catalog, enrolling, and tracking completions) through short demonstrations followed by hands-on practice.",
      approach: [
        "Watch: short narrated demonstrations of each core task.",
        "Try: guided practice with on-screen hints in a simulated environment.",
        "Do: an unguided check where learners complete each task on their own.",
        "Paired the course with a printable quick reference guide for on-the-job support.",
      ],
      outline: ["Logging in", "Finding a course", "Enrolling", "Tracking progress"],
      deliverables: [
        "15-minute watch-try-do simulation",
        "Narrated demo videos",
        "Printable quick reference guide",
      ],
      results: [
        "Add a measurable outcome here, e.g. fewer LMS help requests.",
        "Add a measurable outcome here, e.g. on-time completion of required training.",
      ],
      image: "",
      imageAlt: "",
      caption: "",
      preview: "simulation",
      color: "sand",
      link: "",
      embed: "",
    },
    {
      id: "virtual-facilitation",
      title: "Facilitating Engaging Virtual Training",
      summary:
        "A blended program that prepares managers and internal trainers to lead interactive, well-run virtual sessions.",
      format: "Blended learning",
      length: "45 min e-learning + 90 min live session",
      audience: "Managers & internal trainers",
      role: "Instructional designer & facilitator",
      tools: ["Articulate Rise 360", "Microsoft Teams"],
      challenge:
        "As training moved online, many presenters were simply reading slides over video calls. Sessions felt passive, and participation dropped.",
      overview:
        "Combines a self-paced primer on virtual facilitation best practices with a live practice workshop where participants rehearse techniques and receive feedback.",
      approach: [
        "Built a short self-paced module covering platform features, session structure, and engagement techniques.",
        "Designed a live workshop where participants practice polls, breakout rooms, and discussion prompts.",
        "Created a facilitator guide and session-planning template for ongoing use.",
        "Gathered participant feedback after each cohort to refine the program.",
      ],
      outline: [
        "Before the session",
        "Platform essentials",
        "Engagement techniques",
        "Live practice workshop",
      ],
      deliverables: [
        "Self-paced Rise 360 primer",
        "90-minute live workshop design",
        "Facilitator guide",
        "Session-planning template",
      ],
      results: [
        "Add a measurable outcome here, e.g. improved session evaluation scores.",
        "Add a quote from a participant or stakeholder here.",
      ],
      image: "",
      imageAlt: "",
      caption: "",
      preview: "blended",
      color: "slate",
      link: "",
      embed: "",
    },
  ],

  /* ------------------------------------------------------------------------
     HELP DOCUMENTATION (2–3 recommended)
     ------------------------------------------------------------------------ */
  docs: [
    {
      id: "lms-admin-quick-reference",
      title: "LMS Administrator Quick Reference Guide",
      summary:
        "A task-based job aid that helps training coordinators complete common LMS administration tasks quickly and consistently.",
      docType: "Quick reference guide",
      length: "4 pages, PDF",
      audience: "LMS administrators & training coordinators",
      role: "Writer & designer",
      tools: ["Microsoft Word", "Snagit", "Adobe Acrobat"],
      challenge:
        "Administrative steps were passed along informally, which led to inconsistent setups and repeated questions whenever the system was updated.",
      overview:
        "Covers the tasks admins perform most often (adding users, assigning courses, running completion reports, and resolving enrollment issues) in a format designed to be kept open beside the system.",
      approach: [
        "Organized by task rather than by menu, so admins can find answers in seconds.",
        "Wrote numbered, single-action steps paired with annotated screenshots.",
        "Added a common-issues section based on real support questions.",
        "Used consistent templates and styles so the guide is easy to keep current.",
      ],
      outline: [
        "Add a new user",
        "Assign a course",
        "Run a completion report",
        "Fix an enrollment issue",
      ],
      deliverables: [
        "4-page PDF job aid",
        "Annotated screenshots",
        "Common-issues troubleshooting table",
      ],
      results: [
        "Add an outcome here, e.g. fewer support requests or faster onboarding for new admins.",
      ],
      image: "",
      imageAlt: "",
      caption: "",
      preview: "page",
      color: "sand",
      link: "",
      embed: "",
    },
    {
      id: "website-management-guide",
      title: "Website Content Management Guide",
      summary:
        "A user guide that equipped seven school webmasters to confidently maintain their sites after a district-wide redesign.",
      docType: "User guide",
      length: "18 pages, PDF",
      audience: "School webmasters (non-technical staff)",
      role: "Author, trainer & site administrator",
      tools: ["Content management system", "Microsoft Word"],
      challenge:
        "Each school relied on a staff member with little web experience to keep its site current. They needed a reliable reference they could use long after the initial training sessions ended.",
      overview:
        "Created to support the full redesign of seven school websites and one district website, this guide walks non-technical staff through editing pages, adding images and documents, updating calendars, and following district style standards.",
      approach: [
        "Paired hands-on training sessions with a written guide that follows the same sequence.",
        "Wrote in plain language, with a screenshot for each step and tips for avoiding common mistakes.",
        "Included content and style standards to keep all eight sites consistent.",
        "Kept the guide current as the platform and district needs evolved.",
      ],
      outline: [
        "Logging in to the editor",
        "Editing a page",
        "Adding images & documents",
        "Updating the calendar",
        "Style standards",
      ],
      deliverables: [
        "18-page user guide",
        "Hands-on training for seven webmasters",
        "Content & style standards",
      ],
      results: [
        "Seven webmasters trained to maintain their school sites independently.",
        "Add another outcome here, e.g. how long the guide stayed in use.",
      ],
      image: "",
      imageAlt: "",
      caption: "",
      preview: "page",
      color: "green",
      link: "",
      embed: "",
    },
    {
      id: "customer-help-center",
      title: "Customer Help Center Articles",
      summary:
        "Getting-started and how-to articles that help software customers find answers on their own, anytime.",
      docType: "Online help articles",
      length: "12 articles, web",
      audience: "External software customers",
      role: "Writer & content designer",
      tools: ["Knowledge base", "Snagit", "Camtasia"],
      challenge:
        "Customers were contacting support for answers to routine questions, and the existing documentation was long and difficult to scan.",
      overview:
        "A collection of short, searchable help articles covering account setup, core features, and frequently asked questions, written for customers with a wide range of technical experience.",
      approach: [
        "Reviewed support tickets to identify the most frequent customer questions.",
        "Wrote short, scannable articles with descriptive titles that match how customers search.",
        "Added screenshots and short video clips for multi-step tasks.",
        "Linked related articles together to guide customers to their next step.",
      ],
      outline: [
        "Setting up your account",
        "Navigating the dashboard",
        "Managing notifications",
        "Frequently asked questions",
      ],
      deliverables: [
        "12 help articles",
        "Annotated screenshots & short videos",
        "Linked article structure",
      ],
      results: [
        "Add an outcome here, e.g. a reduction in routine support tickets.",
      ],
      image: "",
      imageAlt: "",
      caption: "",
      preview: "article",
      color: "blue",
      link: "",
      embed: "",
    },
  ],
};
