import { useParams } from "react-router";
import { JOBS } from "../data/jobs";

function JobDetails() {
  let { id } = useParams();
  const job = JOBS[id - 1];

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

export default JobDetails;
