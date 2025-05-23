import axios from 'axios'

export const fetchJobs = async (url) =>{
    const response =  await axios.get( url);
    return response.data;
}
    
