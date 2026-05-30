import Navbar from "./components/Navbar";
import JobsPage from "./pages/JobsPage";

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
