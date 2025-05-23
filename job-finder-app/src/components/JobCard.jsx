import React from "react";

function JobCard({ job }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-4 hover:shadow-lg transition-shadow duration-300">
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
