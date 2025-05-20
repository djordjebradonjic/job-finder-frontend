import { useEffect } from "react";
import { useState } from "react";

function Favorites(){

    const [favorites, setFavorites] = useState([]);

    useEffect(()=>{
        const favs = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(favs);
    },[])
    return(
        <div className="p-4">
          <h1 className="text-2xl mb-4">Favorite Jobs</h1>
          {favorites.map(job => (
            <JobCard key={job.id} job={job} onFavorite={() => {}} />
          ))}
        </div>
      );

}

export default Favorites