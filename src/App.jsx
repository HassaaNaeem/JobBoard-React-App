import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import JobsPage from "./pages/JobsPage";
import RootLayout from "./layouts/RootLayout";
import SkeletonCard from "./components/SkeletonCard";
import JobDetails from "./pages/JobDetails";
import SavedJobs from "./pages/SavedJobs";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<JobsPage />} />
          <Route path="/job/:id" element={<JobDetails />}></Route>
          <Route path="/saved" element={<SavedJobs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}
