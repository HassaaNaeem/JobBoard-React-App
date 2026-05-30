const JOBS = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    company: "Stripe",
    logo: "S",
    location: "San Francisco, CA",
    type: "Full-time",
    category: "Software Development",
    salary: "$140k – $180k",
    postedAt: "2024-01-15",
    tags: ["React", "TypeScript", "GraphQL"],
    saved: false,
    description:
      "We are looking for a Senior Frontend Engineer to join our team.\n\n## Responsibilities\n- Build high-performance React applications\n- Collaborate with designers\n- Mentor junior engineers\n\n## Requirements\n- 5+ years React experience\n- Strong TypeScript skills",
    requirements: ["5+ years React", "TypeScript", "GraphQL", "Jest"],
    applyUrl: "#",
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "Linear",
    logo: "L",
    location: "Remote",
    type: "Remote",
    category: "Software Development",
    salary: "$120k – $160k",
    postedAt: "2024-01-14",
    tags: ["Node.js", "React", "PostgreSQL"],
    saved: true,
    description:
      "Linear is hiring a Full Stack Developer.\n\n## Responsibilities\n- Build product features end-to-end\n- Optimize API performance\n\n## Requirements\n- 3+ years full stack\n- Node.js and React",
    requirements: ["3+ years full stack", "Node.js", "React", "PostgreSQL"],
    applyUrl: "#",
  },
  {
    id: "3",
    title: "React Native Engineer",
    company: "Notion",
    logo: "N",
    location: "New York, NY",
    type: "Full-time",
    category: "Mobile Development",
    salary: "$130k – $170k",
    postedAt: "2024-01-13",
    tags: ["React Native", "iOS", "Android"],
    saved: false,
    description:
      "Join Notion's mobile team.\n\n## Responsibilities\n- Build React Native features\n- Improve performance\n\n## Requirements\n- 3+ years React Native\n- iOS and Android knowledge",
    requirements: ["3+ years React Native", "iOS/Android", "CI/CD"],
    applyUrl: "#",
  },
  {
    id: "4",
    title: "Backend Engineer",
    company: "Vercel",
    logo: "V",
    location: "Remote",
    type: "Remote",
    category: "Software Development",
    salary: "$150k – $190k",
    postedAt: "2024-01-12",
    tags: ["Go", "Rust", "AWS"],
    saved: true,
    description:
      "Vercel infrastructure team is hiring.\n\n## Responsibilities\n- Build distributed systems\n- Improve build pipelines\n\n## Requirements\n- Go or Rust experience\n- Distributed systems background",
    requirements: ["Go or Rust", "Distributed systems", "AWS/GCP"],
    applyUrl: "#",
  },
  {
    id: "5",
    title: "UI/UX Designer",
    company: "Figma",
    logo: "F",
    location: "San Francisco, CA",
    type: "Full-time",
    category: "Design",
    salary: "$130k – $165k",
    postedAt: "2024-01-11",
    tags: ["Figma", "Prototyping", "Design Systems"],
    saved: false,
    description:
      "Figma is hiring a product designer.\n\n## Responsibilities\n- Design new features\n- Evolve design system\n\n## Requirements\n- 4+ years product design\n- Expert Figma skills",
    requirements: ["4+ years design", "Figma expert", "Design systems"],
    applyUrl: "#",
  },
];

const JOB_TYPES = ["All", "Full-time", "Remote", "Part-time", "Contract"];
const CATEGORIES = [
  "All",
  "Software Development",
  "Mobile Development",
  "Design",
  "DevOps",
];

// ─── NAVBAR ───────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center">
            <span className="text-white text-xs font-bold">J</span>
          </div>
          <span className="text-sm font-semibold text-gray-900">JobBoard</span>
        </div>

        <nav className="flex items-center gap-1">
          {/* active link style: text-gray-900 font-medium bg-gray-50 */}
          {/* inactive link style: text-gray-500 hover:text-gray-900 hover:bg-gray-50 */}
          <span className="text-sm px-3 py-1.5 rounded-lg text-gray-900 font-medium bg-gray-50">
            Jobs
          </span>
          <span className="relative text-sm px-3 py-1.5 rounded-lg text-gray-500">
            Saved
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gray-900 text-white text-[10px] flex items-center justify-center font-medium">
              2
            </span>
          </span>
        </nav>
      </div>
    </header>
  );
}

// ─── JOBS PAGE ────────────────────────────────────────────────────────────
function JobsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Remote Jobs</h1>
        <p className="text-sm text-gray-400 mt-1">
          {JOBS.length} positions available
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
          ⌕
        </span>
        <input
          type="text"
          placeholder="Search by title, company, or skill…"
          className="w-full pl-8 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl outline-none placeholder-gray-300"
        />
      </div>

      {/* Type pills */}
      <div className="flex gap-2 flex-wrap mb-3">
        {JOB_TYPES.map((type) => (
          <span
            key={type}
            className={`text-xs px-3 py-1.5 rounded-full border cursor-pointer ${
              type === "All"
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-500 border-gray-200"
            }`}
          >
            {type}
          </span>
        ))}
      </div>

      {/* Category pills */}
      <div className="flex gap-2 flex-wrap mb-8">
        {CATEGORIES.map((cat) => (
          <span
            key={cat}
            className={`text-xs px-3 py-1.5 rounded-full border cursor-pointer ${
              cat === "All"
                ? "bg-gray-100 text-gray-900 border-gray-300 font-medium"
                : "bg-white text-gray-400 border-gray-100"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Job cards */}
      <ul className="space-y-3">
        {JOBS.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </ul>

      {/* Skeleton — show when loading */}
      <ul className="space-y-3 hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <li
            key={i}
            className="bg-white rounded-2xl border border-gray-100 p-5 animate-pulse"
          >
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-gray-100 shrink-0" />
              <div className="flex-1 space-y-2.5">
                <div className="h-4 bg-gray-100 rounded w-1/3" />
                <div className="h-3 bg-gray-100 rounded w-1/4" />
                <div className="flex gap-1.5 mt-2">
                  <div className="h-5 w-16 bg-gray-100 rounded-full" />
                  <div className="h-5 w-12 bg-gray-100 rounded-full" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Empty state — show when filtered list is empty */}
      <div className="hidden flex-col items-center justify-center py-20 text-center">
        <p className="text-3xl mb-3">🔍</p>
        <p className="text-sm font-medium text-gray-700 mb-1">No jobs found</p>
        <p className="text-xs text-gray-400">
          Try adjusting your search or filters
        </p>
      </div>

      {/* Error state — show when fetch fails */}
      <div className="hidden flex-col items-center justify-center py-20 text-center">
        <p className="text-3xl mb-3">⚠️</p>
        <p className="text-sm font-medium text-gray-700 mb-1">
          Something went wrong
        </p>
        <p className="text-xs text-gray-400 mb-4">Could not load jobs</p>
        <button className="text-xs px-4 py-2 bg-gray-900 text-white rounded-lg">
          Try again
        </button>
      </div>
    </div>
  );
}

// ─── JOB CARD ─────────────────────────────────────────────────────────────
function JobCard({ job }) {
  return (
    <li className="group bg-white rounded-2xl border border-gray-100 p-5 cursor-pointer hover:border-gray-200 hover:shadow-sm transition-all">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600 shrink-0">
          {job.logo}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                {job.title}
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                {job.company} · {job.location}
              </p>
            </div>
            {/* saved: text-gray-900, unsaved: text-gray-200 */}
            <span
              className={`text-base ${job.saved ? "text-gray-900" : "text-gray-200"}`}
            >
              {job.saved ? "♥" : "♡"}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-3">
            <span
              className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                job.type === "Remote"
                  ? "bg-green-50 text-green-700"
                  : "bg-blue-50 text-blue-700"
              }`}
            >
              {job.type}
            </span>
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-full bg-gray-50 text-gray-500 border border-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
        <span className="text-xs text-gray-400">{job.postedAt}</span>
        <span className="text-xs font-medium text-gray-700">{job.salary}</span>
      </div>
    </li>
  );
}

// ─── JOB DETAIL PAGE ─────────────────────────────────────────────────────
function JobDetailPage() {
  const job = JOBS[0];

  return (
    <div>
      <span className="flex items-center gap-1.5 text-sm text-gray-400 mb-6 cursor-pointer hover:text-gray-900 transition-colors w-fit">
        ← Back to jobs
      </span>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-5">
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-lg font-semibold text-gray-600 shrink-0">
                {job.logo}
              </div>
              <div className="flex-1">
                <h1 className="text-lg font-semibold text-gray-900">
                  {job.title}
                </h1>
                <p className="text-sm text-gray-500 mt-0.5">
                  {job.company} · {job.location}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      job.type === "Remote"
                        ? "bg-green-50 text-green-700"
                        : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    {job.type}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100">
                    {job.category}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">
              About this role
            </h2>
            {/* TODO: replace with ReactMarkdown + remark-gfm */}
            <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              {job.description}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">
              Requirements
            </h2>
            <ul className="space-y-2.5">
              {job.requirements.map((req) => (
                <li
                  key={req}
                  className="flex items-center gap-2.5 text-sm text-gray-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 border border-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-2.5">
            <a
              href={job.applyUrl}
              className="flex items-center justify-center w-full py-2.5 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Apply now
            </a>
            {/* saved state: bg-gray-50 border-gray-200 text-gray-900 font-medium */}
            {/* unsaved state: border-gray-200 text-gray-500 */}
            <span className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border text-sm border-gray-200 text-gray-500 cursor-pointer">
              ♡ Save job
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <h3 className="text-xs font-semibold text-gray-900 mb-4">
              Job details
            </h3>
            <div className="space-y-3.5">
              {[
                { label: "Salary", value: job.salary },
                { label: "Type", value: job.type },
                { label: "Location", value: job.location },
                { label: "Posted", value: job.postedAt },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wide">
                    {label}
                  </p>
                  <p className="text-sm text-gray-800 mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <h3 className="text-xs font-semibold text-gray-900 mb-3">
              About the company
            </h3>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600">
                {job.logo}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {job.company}
                </p>
                <p className="text-xs text-gray-400">{job.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SAVED JOBS PAGE ─────────────────────────────────────────────────────
function SavedJobsPage() {
  const saved = JOBS.filter((j) => j.saved);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Saved Jobs</h1>
        <p className="text-sm text-gray-400 mt-1">
          {saved.length} positions saved
        </p>
      </div>

      <ul className="space-y-3">
        {saved.map((job) => (
          <li
            key={job.id}
            className="group bg-white rounded-2xl border border-gray-100 p-5 cursor-pointer hover:border-gray-200 hover:shadow-sm transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600 shrink-0">
                {job.logo}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-sm font-semibold text-gray-900">
                      {job.title}
                    </h2>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-gray-400 hover:text-red-400 transition-colors px-2 py-1 rounded-lg hover:bg-red-50 cursor-pointer">
                    ♥ Unsave
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                      job.type === "Remote"
                        ? "bg-green-50 text-green-700"
                        : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    {job.type}
                  </span>
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-gray-50 text-gray-500 border border-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
              <span className="text-xs text-gray-400">{job.postedAt}</span>
              <span className="text-xs font-medium text-gray-700">
                {job.salary}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Empty state — show when saved list is empty */}
      <div className="hidden flex-col items-center justify-center py-24 text-center">
        <p className="text-3xl mb-4">♡</p>
        <p className="text-sm font-medium text-gray-700 mb-1">
          No saved jobs yet
        </p>
        <p className="text-xs text-gray-400 mb-6">
          Jobs you save will appear here
        </p>
        <span className="text-xs px-4 py-2 bg-gray-900 text-white rounded-lg cursor-pointer">
          Browse jobs
        </span>
      </div>
    </div>
  );
}

// ─── 404 PAGE ─────────────────────────────────────────────────────────────
function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <p className="text-7xl font-bold text-gray-100 mb-3">404</p>
      <p className="text-sm font-medium text-gray-700 mb-1">Page not found</p>
      <p className="text-xs text-gray-400 mb-6">
        The page you're looking for doesn't exist
      </p>
      <span className="text-xs px-4 py-2 bg-gray-900 text-white rounded-lg cursor-pointer">
        Back to jobs
      </span>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-8">
        <JobsPage />
      </main>
    </div>
  );
}
