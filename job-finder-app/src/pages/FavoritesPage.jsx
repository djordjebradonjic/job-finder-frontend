import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import JobDetailsModel from "../components/JobDetailsModal";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Favorite Jobs</h1>
      {favorites.length === 0 ? (
        <p>You have no favorite jobs yet.</p>
      ) : (
        favorites.map((job) => (
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
        <JobDetailsModel job={selectedJob} onClose={closeModal} />
      )}
    </div>
  );
}

export default FavoritesPage;
