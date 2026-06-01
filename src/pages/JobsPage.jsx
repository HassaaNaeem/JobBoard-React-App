import { Link } from "react-router";
import Filterbar from "../components/Filterbar";
import JobCard from "../components/JobCard";
import SkeletonCard from "../components/SkeletonCard";
import { CATEGORIES, JOB_TYPES, JOBS } from "../data/jobs";
import { useSavedJobs } from "../context/SavedJobsContext";

function JobsPage() {
  const { jobType, activeJobCategory } = useSavedJobs();
  const filteredJobs =
    jobType == "All" && activeJobCategory == "All"
      ? JOBS
      : JOBS.filter(
          (job) => job.type == jobType && job.category == activeJobCategory,
        );
  // const filteredJobs =
  //   jobType == "All"
  //     ? activeJobCategory == "All"
  //       ? JOBS
  //       : JOBS.filter((job) => job.category == activeJobCategory)
  //     : JOBS.filter((job) => job.type == jobType);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Remote Jobs</h1>
        <p className="text-sm text-gray-400 mt-1">
          {JOBS.length} positions available
        </p>
      </div>

      <Filterbar />

      {/* Job cards */}
      <ul className="space-y-3">
        {filteredJobs.map((job) => (
          <Link to={`job/${job.id}`}>
            <JobCard key={job.id} job={job} />
          </Link>
        ))}
      </ul>

      {/* Skeleton — show when loading */}
      <SkeletonCard />

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

export default JobsPage;
