import axios from 'axios'
import api from './axiosConfig';

export const fetchJobs = async (url) =>{
    const response =  await api.get(url);
    return response.data;
}
    
