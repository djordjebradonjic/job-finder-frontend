import { useState } from "react"
import JobCard from "../components/JobCard"

function HomePage(){

    const jobs = [ 
    {id:1,title: "Java develope", info:"New postion for java junior developer",
        date:"14.05.2025", company : "Microsoft", tag:"java"},
    {id:2,title: "Software engineer", info:"Experienced software engineer",
        date:"20.05.2025", company : "Luxoft", tag:"python"},
     {id:3,title: "React developer", info:"Medior web developer",
        date:"17.05.2025", company : "KMS", tag:"react"}
]

const [searchQuery,setSearchQuery] = useState("");

const handleSearch = ()=>{
    alert(searchQuery)
}

return (
    <div className="home-page">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Serach jobs..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="jobs-grid">
            {jobs.map((job) => (
                <JobCard job= {job} key={job.id}></JobCard>
            ))}
        </div>
    </div>
)

}

export default HomePage