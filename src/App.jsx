import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import JobsPage from "./pages/JobsPage";
import RootLayout from "./layouts/RootLayout";
import SkeletonCard from "./components/SkeletonCard";
import JobDetails from "./pages/JobDetails";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<JobsPage />} />
          <Route path="/job/:id" element={<JobDetails />}></Route>
        </Route>
      </Routes>
    </>
  );
}
