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
  image: string;
  repo: string;
  liveUrl?: string;
  relatedUrl?: string;
  detail: string;
  outcome: string;
}
export const projects: Project[] = [
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
      "A complete planning and execution workspace with deterministic recommendations, state-aware prioritization, local persistence, daily reviews, reminders, calendar import, and offline app-shell support.",
    outcome:
      "A working v1.2 beta: no account required, browser-local data, and a clear explanation behind the next action.",
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
    stack: ["C#", "ASP.NET Core", "React", "P/Invoke"],
    image: rsa,
    repo: "RSACryptoFullStack",
    detail:
      "An integrated RSA crypto engine with ASP.NET Core REST APIs and a React frontend. C# P/Invoke connects native operations to the application, with Docker packaging and automated testing.",
    outcome: "30% faster operations reported in the original project.",
  },
  {
    id: "meditrends",
    title: "MediTrends",
    subtitle: "Finding signal in the conversation.",
    category: "AI & data",
    description:
      "Semantic search and NLP analytics across 28,000+ Reddit posts from 18 communities.",
    stack: ["Python", "FAISS", "TensorFlow", "PyTorch"],
    image: medi,
    repo: "MediTrends",
    detail:
      "A Reddit analysis system that combines NLP workflows with FAISS vector search to explore trends across a large text corpus. The project connects data processing, text representations, and exploratory analytics.",
    outcome: "Search and analysis over 28k+ posts across 18 communities.",
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
