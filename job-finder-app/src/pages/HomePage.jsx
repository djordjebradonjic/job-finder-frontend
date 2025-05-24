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
      {jobs.length === 0 ? (
        <p>No available jobs </p>
      ) : (
        jobs.map((job) => (
          <JobCard key={job.id} job={job} onClick={() => openModal(job)} />
        ))
      )}
      {isModalOpen && (
        <JobDetailsModel
          job={selectedJob}
          onClose={closeModal}
        ></JobDetailsModel>
      )}
    </div>
  );
}

export default HomePage;
