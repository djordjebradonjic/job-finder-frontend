import { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import FilterBar from "../components/FilterBar";
import { fetchJobs } from "../api/jobs";
import NavBar from "../components/NavBar";

function HomePage() {
  const [selectedSite, setSelectedSite] = useState("HelloWorld");

  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ title: "", location: "" });
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="p-4 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 max-w-5xl mx-auto px-8 py-6">
      <NavBar onSiteSelect={setSelectedSite}></NavBar>
      <h1 className="text-2xl font-bold mb-4 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
        All jobs{" "}
      </h1>
      {console.log("Jobs:", jobs)}
      {jobs.length === 0 ? (
        <p>No available jobs </p>
      ) : (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      )}
    </div>
  );
}

export default HomePage;
