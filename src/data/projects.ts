import grit from "../assets/c377cdd31d9f35a7725e08a8229b80a8d86fbbae.png";
import rsa from "../assets/87ff3fb48729f4d511ccb9ba1316e6f981da3c95.png";
import medi from "../assets/3b96e6129e9cfb76e2bfab26d4cd2bcd8bda88df.png";
import spotify from "../assets/spotify-voice-assistant.png";
import number from "../assets/number-theory-rsa-tools.png";
import youtube from "../assets/youtube-summarizer.png";
import trivia from "../assets/trivia-night.png";

export type Category = "All work" | "Systems" | "AI & data" | "Web apps";
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  description: string;
  stack: string[];
  image?: string;
  repo?: string;
  liveUrl?: string;
  relatedUrl?: string;
  detail: string;
  outcome: string;
}
export const projects: Project[] = [
  {
    id: "eventhub",
    title: "EventHub",
    subtitle: "From architecture to release.",
    category: "Web apps",
    description:
      "A co-developed Flask ticketing demo with simulated checkout, inventory safeguards, purchase auditing, and restricted administrator workflows.",
    stack: ["Python", "Flask", "PostgreSQL", "Pytest", "Selenium"],
    detail:
      "Co-developed a modular ticketing demonstration with event discovery, currency conversion, simulated checkout, and inventory protection. Produced C4 architecture models, architectural decision records, test traceability, database migration checks, and release and rollback documentation. No real payments are collected or tickets issued.",
    outcome:
      "Recorded November 2026 verification: 72 passing local tests; GitHub Actions covered PostgreSQL concurrency and Selenium browser tests, with 87% application coverage.",
  },
  {
    id: "incollege",
    title: "InCollege",
    subtitle: "Build together. Verify every step.",
    category: "Systems",
    description:
      "A team-built COBOL student networking application with persistent profiles, connections, job listings, and application reports.",
    stack: ["COBOL", "GnuCOBOL", "Python", "Acceptance Testing", "Scrum"],
    detail:
      "Contributed across developer, Scrum Master, and tester roles on Team Alaska. Implemented network display and connection handling in Epic 5, and job-field validation and persistent job records in Epic 6. As Epic 7 Tester #1, set up and executed independent acceptance tests covering job browsing, duplicate applications, per-user reports, restart persistence, and invalid input. Isolated fixtures protect stored data; every acceptance run compares console output byte-for-byte with the output file.",
    outcome:
      "Recorded Epic 7 results: 42/42 acceptance cases across 49 executions; the team’s historical and integration regression suite recorded 143/143 cases across 294 runs.",
  },
  {
    id: "now-what",
    title: "now_what?",
    subtitle: "Your day. One clear next step.",
    category: "Web apps",
    description:
      "A local-first daily command center connecting tasks, habits, goals, calendar, and personal context through an explainable recommendation engine.",
    stack: ["React", "TypeScript", "Dexie", "IndexedDB", "Cloudflare", "PWA"],
    image: import.meta.env.BASE_URL + "projects/now-what/dashboard.jpg",
    repo: "now-what",
    liveUrl: "https://now-what-app.anwarnafisneo.workers.dev/",
    detail:
      "A local-first productivity PWA with deterministic, context-aware next-action recommendations and a debug panel to inspect suggestions. Tasks, habits, goals, calendar planning, daily reviews, and reminders persist through Dexie/IndexedDB. Offline service-worker caching, JSON import/export, cross-store integrity checks, and deterministic regression tests support reliability, with no server-side user-data collection.",
    outcome:
      "A working v1.2 beta: no account required, browser-local data, and a clear explanation behind the next action.",
  },
  {
    id: "stock-analysis",
    title: "Stock Analysis Visualizer",
    subtitle: "Market data, made readable.",
    category: "Systems",
    description:
      "A C# Windows Forms application for OHLC candlesticks and volume, with multi-CSV loading and responsive date-range refresh.",
    stack: ["C#", ".NET WinForms", "CSV", "Data Validation"],
    repo: "StockAnalysisProject",
    detail:
      "Built a Windows Forms application that binds Yahoo Finance CSV data directly to candlestick and volume chart series. Supports day, week, and month files, padded OHLC ranges, and indexed trading days to hide weekend and holiday gaps. A refresh pipeline updates the chart without reloading files, while parsing and validation checks handle malformed rows and missing values.",
    outcome:
      "Multiple datasets in separate windows, clearer trading-day charts, and refresh without reloading source files.",
  },
  {
    id: "gritvm",
    title: "GritVM",
    subtitle: "A virtual machine. A real learning experience.",
    category: "Systems",
    description:
      "A C++ virtual machine, brought to the browser. Write assembly, step through execution, and see memory come to life.",
    stack: ["C++", "WebAssembly", "React", "Monaco"],
    image: grit,
    repo: "GritVM_Interactive",
    detail:
      "Compiled a C++ virtual machine to WebAssembly and paired it with a React IDE and Monaco Editor. The interface exposes machine status and memory alongside the program, making execution easier to inspect.",
    outcome: "Browser-based execution with real-time memory visualization.",
  },
  {
    id: "rsa",
    title: "RSA Playground",
    subtitle: "Making cryptography tangible.",
    category: "Systems",
    description:
      "An educational cryptography platform connecting a native RSA engine to a full-stack web experience.",
    stack: ["C", "C#", "ASP.NET Core", "P/Invoke", "Docker"],
    image: rsa,
    repo: "RSACryptoFullStack",
    detail:
      "Implemented key-generation, encryption, and signing flows using big-integer operations and modular arithmetic. Wrapped the native library in an ASP.NET Core backend through C# P/Invoke, with structured JSON requests and robust error handling. Docker packages the native build toolchain and runtime; documented client calls make the educational API reproducible across environments.",
    outcome: "Profiled exponentiation strategies achieved 30% faster RSA operations than a baseline C# implementation.",
  },
  {
    id: "meditrends",
    title: "MediTrends",
    subtitle: "Finding signal in the conversation.",
    category: "AI & data",
    description:
      "Semantic search and NLP analytics across 28,000+ Reddit posts from 18 communities.",
    stack: ["Python", "Flask", "FAISS", "TensorFlow", "PyTorch", "Selenium"],
    image: medi,
    repo: "MediTrends",
    detail:
      "Built FAISS-powered semantic search with batching and NLP pipelines for clustering and trend detection. Flask search/trending endpoints and a responsive Tailwind UI expose volume, growth, and sentiment KPIs. Separate ingestion, embedding, indexing, and API layers keep data sources manageable. Query-set checks, edge cases, performance regressions, and Selenium integration tests support retrieval and UI reliability.",
    outcome: "Search over 28k+ posts across 18 communities, with 110 ms/query reported in project evaluation.",
  },
  {
    id: "spotify",
    title: "Spotify Voice Assistant",
    subtitle: "Less clicking. More listening.",
    category: "AI & data",
    description:
      "Hands-free music search, playback, and playlist control through speech recognition and the Spotify API.",
    stack: ["Python", "Speech", "Spotify API", "Flask"],
    image: spotify,
    repo: "spotify-voice-assistant",
    detail:
      "Connects speech recognition to Spotify Web API actions for music search, playback, and playlist control through a Flask-backed workflow.",
    outcome: "Voice-driven interaction with music playback and search.",
  },
  {
    id: "number-theory",
    title: "Number Theory & RSA Tools",
    subtitle: "The mathematics behind the message.",
    category: "Systems",
    description:
      "A practical toolkit for modular arithmetic, RSA key generation, and encryption workflows.",
    stack: ["Python", "RSA", "Number Theory", "CLI"],
    image: number,
    repo: "NumberTheory-RSA-Tools",
    detail:
      "Command-line utilities for number-theory operations and RSA workflows, including key generation, encryption, decryption, and modular arithmetic.",
    outcome: "A reusable set of mathematical and cryptographic utilities.",
  },
  {
    id: "youtube",
    title: "YouTube Summarizer",
    subtitle: "Long videos. Short takeaways.",
    category: "AI & data",
    description:
      "An NLP pipeline that turns video transcripts into concise, useful summaries.",
    stack: ["Python", "NLP", "YouTube API"],
    image: youtube,
    repo: "YoutubeSummarizer",
    detail:
      "Fetches YouTube transcripts and processes them through an NLP summarization pipeline to make long-form video content easier to digest.",
    outcome: "Concise summaries generated from video transcripts.",
  },
  {
    id: "trivia",
    title: "Trivia Night",
    subtitle: "A little competition. In real time.",
    category: "Web apps",
    description:
      "A multiplayer trivia experience with rooms, timed questions, and live scoreboards.",
    stack: ["React", "Node.js", "Socket.io"],
    image: trivia,
    repo: "TriviaNight",
    detail:
      "A real-time web game built around shared lobbies, timed questions, and scoreboards. React handles the interface while Node.js and Socket.io coordinate gameplay.",
    outcome: "Synchronized trivia gameplay for multiple participants.",
  },
];
