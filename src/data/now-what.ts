export const nowWhatUrl = "https://now-what-app.anwarnafisneo.workers.dev/";
export const nowWhatRepo = "https://github.com/NafisAnwar/now-what";
export const nowWhatVersion = "v1.2 beta";
export const nowWhatScreens = [
  {
    id: "dashboard",
    label: "Dashboard",
    title: "One clear next step.",
    description:
      "The recommendation deck brings tasks, habits, calendar commitments, and your current state into one view. A primary action, alternatives, and a plain-language explanation keep the decision visible.",
    image: "dashboard.jpg",
  },
  {
    id: "tasks",
    label: "Tasks",
    title: "Give your work context.",
    description:
      "Capture priority, category, due date and time, duration, energy requirements, notes, and a linked goal. Track pending, completed, skipped, and missed work with carry-over history.",
    image: "tasks.jpg",
  },
  {
    id: "habits",
    label: "Habits & goals",
    title: "Small actions. Longer horizons.",
    description:
      "Build boolean, quantity, time, or count-based habits with targets and time windows. Link habits and tasks to goals spanning a week, month, semester, year, or an ongoing pursuit.",
    image: "habits.jpg",
  },
  {
    id: "calendar",
    label: "Calendar",
    title: "Plan around real commitments.",
    description:
      "Create calendar blocks or import .ics files. Inspect all-day and multi-day events, avoid duplicate imports, and convert a calendar block into a task. Active commitments feed into recommendations.",
    image: "calendar.jpg",
  },
  {
    id: "profile",
    label: "Personalization",
    title: "A system that meets you where you are.",
    description:
      "Choose your needs, priority mode, and low-energy preference. State check-ins capture mood and energy, while focus capacity and available time help shape a practical next action.",
    image: "profile.jpg",
  },
  {
    id: "data",
    label: "Your data",
    title: "Local by design. Yours to keep.",
    description:
      "Records live in a profile-specific IndexedDB database. Export a JSON backup, validate and restore it, inspect all 12 stores, and check for broken references or invalid records.",
    image: "data.jpg",
  },
];

export const nowWhatFeatures = [
  {
    title: "Explainable recommendation deck",
    text: "Deterministic candidate generation and scoring produce a primary recommendation and alternatives. A library of 54 micro-action templates covers setup, execution, recovery, creative work, review, and maintenance. Accept, dismiss, regenerate, or promote an alternative. Persisted cooldowns prevent repetitive suggestions across refreshes.",
  },
  {
    title: "Priority that respects commitments",
    text: "Active calendar blocks and critical overdue work take hard precedence. Near deadlines and expiring habit windows can also override softer preferences. Urgency, available time, energy fit, daily focus, and personal needs refine the remaining ranking.",
  },
  {
    title: "Tasks with meaningful context",
    text: "Four priority levels, due dates and times, custom categories, positive duration estimates, low/medium/high task energy, goal links, notes, completion state, missed counts, and carry-over history. Repeat settings are recorded as metadata.",
  },
  {
    title: "Flexible habits & connected goals",
    text: "Daily, weekly, or custom habits support boolean, quantity, time, and count completions, targets, units, time windows, and minimum versions. Goals connect tasks and habits across multiple time horizons and can be active, paused, or complete.",
  },
  {
    title: "Daily planning & calendar",
    text: "Set a primary focus and select tasks and habits for today. Add manual calendar blocks, import .ics events, handle all-day and multi-day spans, deduplicate imports, and convert blocks to tasks transactionally.",
  },
  {
    title: "Needs profile & state check-ins",
    text: "Personalize school/work, habit consistency, health/energy, life admin, and creative priorities. Choose deadline, critical, easy-start, daily-focus, or energy-match modes. Configure low-energy preferences, check-in intervals, and quiet hours.",
  },
  {
    title: "Quick Log & lifestyle signals",
    text: "Record water, meals, exercise, focus, mood, energy, rest, distraction, and notes. Factual activity feeds the dashboard and recommendation context. Duration and completion-type validation prevent misleading logs.",
  },
  {
    title: "Daily review & carry-over",
    text: "Review meaningful activity, revisit an incomplete previous day, and carry unfinished work to the appropriate date. Timeline brings recorded activity into a chronological feed.",
  },
  {
    title: "Reminders with context",
    text: "Create manual reminders and inspect scheduled, dismissed, opened, or completed items. The in-app tray can navigate to targets or complete supported actions. Task and habit completion cancels related scheduled reminders.",
  },
  {
    title: "Local persistence & recovery",
    text: "Dexie manages 12 profile-scoped IndexedDB stores. JSON export/import validates backup structure and preserves the active local profile identity. Schema compatibility paths and integrity checks support safer restore and maintenance.",
  },
  {
    title: "Installable offline app shell",
    text: "A manifest and service worker support PWA installation where available. The app shell can reopen offline after an initial online visit, with network-first navigation, cached assets, and scoped cache cleanup.",
  },
  {
    title: "Guide, shortcuts & engine inspection",
    text: "A first-run guide and always-available tutorial explain the workflows. Keyboard shortcuts open task, habit, goal, and Quick Log controls. A debug panel exposes context, candidates, scoring, and cooldown behavior.",
  },
];

export const nowWhatArchitecture = [
  {
    title: "Interface",
    text: "React 19 + TypeScript, Vite, Tailwind CSS, Radix primitives, Wouter routing, and Motion interactions.",
  },
  {
    title: "Decision layer",
    text: "Separate context building, candidate generation, recommendation scoring, micro-actions, and daily-plan modules. Rule-based and deterministic, without an LLM dependency.",
  },
  {
    title: "Data layer",
    text: "Dexie + IndexedDB, profile selection before rendering, schema migrations, atomic completion writes, transactional links, backup validation, and integrity diagnostics.",
  },
  {
    title: "Delivery",
    text: "Cloudflare Workers Static Assets with SPA fallback, a PWA manifest, offline shell caching, and scoped service-worker cache management.",
  },
];
export const nowWhatStores = [
  "Tasks",
  "Habits",
  "Goals",
  "Calendar blocks",
  "Activity logs",
  "Daily plans",
  "Suggestions",
  "Daily reviews",
  "Weekly reviews",
  "Settings",
  "Reminders",
  "Needs profiles",
];
export const nowWhatShortcuts = [
  ["T", "New task"],
  ["H", "New habit"],
  ["G", "New goal"],
  ["L", "Quick Log"],
  ["N", "Regenerate suggestion"],
  ["Shift + N", "Engine debug panel"],
];
export const nowWhatLimits = [
  "Browser-local records do not automatically synchronize across devices. Export a backup before clearing storage or changing browsers.",
  "Browser notifications are evaluated while the app is running. Remote push notifications are not implemented.",
  "Task recurrence is metadata only; future task instances are not automatically created.",
  "ICS import does not expand recurring events or fully support VTIMEZONE and complex timezone definitions.",
  "PWA installation depends on browser support, and offline access requires an initial online load.",
];
