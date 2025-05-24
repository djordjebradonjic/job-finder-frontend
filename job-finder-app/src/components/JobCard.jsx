import React from "react";
import { FaHeart } from "react-icons/fa";

function JobCard({ job, onClick, favorites, setFavorites }) {
  const isFavorite = favorites.some((f) => f.id === job.id);

  const toggleFavorite = () => {
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter((f) => f.id !== job.id);
      setFavorites(updatedFavorites);
    } else {
      updatedFavorites = [...favorites, job];
      setFavorites(updatedFavorites);
    }
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); //to prevent deleting favorites after refreshing page
  };
  return (
    <div
      onClick={onClick}
      className="bg-white relative rounded-2xl shadow-md p-6 mb-4 hover:shadow-lg transition-shadow duration-300"
    >
      <div
        className="absolute top-4 right-4 cursor-pointer text-xl"
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite();
        }}
      >
        {isFavorite ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaHeart className="text-gray-400 hover:text-red-500 transition-colors" />
        )}
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{job.title}</h2>
      <p className="text-gray-600 mb-1">
        <span className="font-medium text-gray-700">Company:</span>{" "}
        {job.company.name}
      </p>
      <p className="text-gray-600">
        <span className="font-medium text-gray-700">Location:</span>{" "}
        {job.details.location}
      </p>
      <p className="text-gray-600">
        <span className="font-medium text-gray-700">Date:</span>{" "}
        {job.expirationDate}
      </p>
    </div>
  );
}

export default JobCard;
