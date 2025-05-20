import { useState , useEffect } from "react";
import axios from 'axios'
import JobCard  from "../components/JobCard";
import FilterBar from "../components/FilterBar";

function HomePage(){

    const [jobs, setJobs] = useState([])
    const [filters, setFilters] = useState({title : '', location:''})

    const fetchJobs = async () => {
        const response = await axios.get('http://localhost:8080/api/jobs');
        setJobs(response.data)
    }

    useEffect(()=>{
        fetchJobs()
    },[])

    const handleFavorite = (job) =>{
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        localStorage.setItem('favorites', JSON.stringify([...favorites, job]));
    }
    return (
        <div className="p-4">
         <h1 className="text-2xl mb-4">Job Finder</h1>
             <FilterBar filters={filters} setFilters={setFilters} onSearch={fetchJobs} />
         {jobs.map(job => (
            <JobCard key={job.id} job={job} onFavorite={handleFavorite} />
          ))}
        </div>
);

};

export default HomePage;