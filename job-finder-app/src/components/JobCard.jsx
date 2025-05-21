import React from 'react'

function JobCard({job}){

    return (
        
        <div className="border p-4 mb-2 rounded shadow">
          <h2 className="text-xl font-bold">{job.title}</h2>
          <p>{job.company}</p>
              <p>{job.location}</p>
              
       </div>
        
    );
};

export default JobCard