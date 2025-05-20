import React from 'react'

function JobCard({job,onFavorite}){

    return (
        
        <div className="border p-4 mb-2 rounded shadow">
          <h2 className="text-xl font-bold">{job.title}</h2>
          <p>{job.company}</p>
              <p>{job.location}</p>
              <button onClick={() => onFavorite(job)}>Add to Favorites</button>
       </div>
        
    );
};

export default JobCard