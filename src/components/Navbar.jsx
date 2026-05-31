import { Link, NavLink } from "react-router";
import { useSavedJobs } from "../context/SavedJobsContext";

function Navbar() {
  const { savedIds } = useSavedJobs();
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm px-3 py-1.5 rounded-lg ${isActive ? "text-gray-900 font-medium bg-gray-50" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"}`
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to="/saved"
            className={({ isActive }) =>
              `relative text-sm px-3 py-1.5 rounded-lg ${isActive ? "text-gray-900 font-medium bg-gray-50" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"}`
            }
          >
            Saved
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gray-900 text-white text-[10px] flex items-center justify-center font-medium">
              {savedIds.length}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
