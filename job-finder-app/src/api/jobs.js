import axios from 'axios'

const BASE_URL = 'http://localhost:8080/web-scraper/infoStud' 

export const getAllJobs = async () =>{
    const response =  await axios.get(BASE_URL);
    return response.data;
}
    
