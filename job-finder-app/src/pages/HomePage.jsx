import { useState , useEffect } from "react";
import JobCard  from "../components/JobCard";
import FilterBar from "../components/FilterBar";
import {getAllJobs} from "../api/jobs"

function HomePage(){

    const [jobs, setJobs] = useState([]);
    const [filters, setFilters] = useState({title : '', location:''});
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const fetchJobs = async ()=> {
            try {
               const data =  await getAllJobs();
               setJobs(data);
            } catch (error) {
                console.error("Fetching data error:", error);
            }finally{
                setLoading(false);
            }
        };
     
        fetchJobs()
    },[]);

 

    if(loading) return <p>Loading jobs...</p>;

    return (
        <div className="p-4 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 max-w-5xl mx-auto px-8 py-6">
             <h1 className="text-2xl font-bold mb-4 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">All jobs </h1>
             {jobs.length === 0 ? (
             <p>No available jobs </p>
               ) : (
             jobs.map(job => (
            <JobCard key={job.id} job={job}  />
              )))
            }   
        </div>
           
    );

};

export default HomePage;