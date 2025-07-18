function JobDetailsModel({ job, onClose }) {
  return (
    <div className="fixed inset-0  bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-lg w-[600px] relative shadow-lg border border-gray-300 dark:border-gray-600">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 dark:text-gray-300"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-2">{job.title}</h2>
        <p className="text-gray-700 dark:text-gray-300">{job.snippet}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          <strong>Salary:</strong> {job.salary || "Not provided"}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong>Updated:</strong> {job.updated}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong>Source:</strong> {job.source}
        </p>

        <div className="mt-4">
          <h3 className="font-semibold">Company Info</h3>
          <p>Name: {job.company?.name}</p>
          <p>
            Reviews:{" "}
            <a
              className="text-blue-500 dark:text-blue-400"
              href={job.company?.reviewLink}
              target="_blank"
              rel="noreferrer"
            >
              {job.company?.numberOfReviews} reviews
            </a>
          </p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">Job Details</h3>
          <p>Location: {job.details?.location}</p>
          <p>Seniority: {job.details?.seniority}</p>
          <p>Expiration Date: {job.details?.expirationDate}</p>
          <p>
            URL:{" "}
            <a
              className="text-blue-500 dark:text-blue-400"
              href={job.details?.url}
              target="_blank"
              rel="noreferrer"
            >
              More info
            </a>
          </p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {job.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-200 dark:bg-gray-700 dark:text-white px-2 py-1 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <a
          href={job.detailsLink}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-blue-600 dark:text-blue-400 underline"
        >
          View Details
        </a>
      </div>
    </div>
  );
}

export default JobDetailsModel;
