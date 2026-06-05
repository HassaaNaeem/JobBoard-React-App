import { Link } from "react-router";
import EmptyState from "../components/EmptyState";
import { useSavedJobs } from "../context/SavedJobsContext";
import { JOBS } from "../data/jobs";
import useJobs from "../hooks/useJobs";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";

function SavedJobs() {
  const { savedIds, unsave } = useSavedJobs();
  // const saved = JOBS.filter((job) => savedIds.includes(job.id)); // was not in saving order
  const { isLoading, data } = useJobs();
  const savedJobs = data?.filter((job) => savedIds.includes(job.id));

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Saved Jobs</h1>
        <p className="text-sm text-gray-400 mt-1">
          {isLoading
            ? "Loading Positions..."
            : `${savedJobs?.length} positions saved`}
        </p>
      </div>

      <ul className="space-y-3">
        {savedJobs?.map((job) => (
          <Link to={`../job/${job.id}`}>
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
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        unsave(job.id);
                      }}
                    >
                      <span className="shrink-0 text-xs text-gray-400 hover:text-red-400 transition-colors px-2 py-1 rounded-lg hover:bg-red-50 cursor-pointer">
                        ♥ Unsave
                      </span>
                    </button>
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
                <span className="text-xs text-gray-400">
                  {" "}
                  {formatDistanceToNow(new Date(job.postedAt), {
                    addSuffix: true,
                  })}
                </span>
                <span className="text-xs font-medium text-gray-700">
                  {job.salary}
                </span>
              </div>
            </li>
          </Link>
        ))}
      </ul>

      {savedIds.length == 0 && <EmptyState />}
    </div>
  );
}

export default SavedJobs;
