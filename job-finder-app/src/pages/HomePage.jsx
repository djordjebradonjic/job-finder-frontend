import { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import FilterBar from "../components/FilterBar";
import { fetchJobs } from "../api/jobs";
import JobNavBar from "../components/JobNavbar";
import JobDetailsModel from "../components/JobDetailsModal";

function HomePage() {
  const [selectedSite, setSelectedSite] = useState("HelloWorld");

  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ title: "", location: "" });
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeNavBarItem, setActiveNavBarItem] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const jobsPerPage = 5;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  useEffect(() => {
    if (jobs.length > 0) {
      setTotalPages(Math.ceil(jobs.length / jobsPerPage));
    }
  }, [jobs, jobsPerPage]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    const fetchBySource = async (source) => {
      try {
        setLoading(true);
        const data = await fetchJobs(
          "http://localhost:8080/api/jobs/fetchBySource/" + source
        );
        setJobs(data);
      } catch (error) {
        console.error("Fetching data error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBySource(selectedSite);
  }, [selectedSite]);

  if (loading) return <p>Loading jobs...</p>;

  function openModal(job) {
    setSelectedJob(job);
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
    setSelectedJob(null);
  }
  const handleSiteSelect = (value) => {
    setSelectedSite(value);
    setActiveNavBarItem(value);
  };

  return (
    <div className="p-4 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 max-w-5xl mx-auto px-8 py-6">
      <JobNavBar
        activeNavBarItem={activeNavBarItem}
        onSiteSelect={handleSiteSelect}
      ></JobNavBar>
      <h1 className="text-2xl font-bold mb-4 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
        All jobs{" "}
      </h1>
      {console.log("Jobs:", jobs)}
      {currentJobs.length === 0 ? (
        <p>No available jobs </p>
      ) : (
        currentJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            favorites={favorites}
            setFavorites={setFavorites}
            onClick={() => openModal(job)}
          />
        ))
      )}
      {isModalOpen && (
        <JobDetailsModel
          job={selectedJob}
          onClose={closeModal}
        ></JobDetailsModel>
      )}
      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-3 py-1">{currentPage}</span>
        <button
          onClick={() =>
            setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HomePage;
