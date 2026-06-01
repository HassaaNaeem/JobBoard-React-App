import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <p className="text-7xl font-bold text-gray-300 mb-3">404</p>
      <p className="text-sm font-medium text-gray-700 mb-1">Page not found</p>
      <p className="text-xs text-gray-400 mb-6">
        The page you're looking for doesn't exist
      </p>
      <Link
        to={"/"}
        className="text-xs px-4 py-2 bg-gray-900 text-white rounded-lg cursor-pointer"
      >
        Back to jobs
      </Link>
    </div>
  );
}
export default NotFound;
