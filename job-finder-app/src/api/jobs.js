import axios from 'axios'
import api from './axiosConfig';


export const fetchJobs = async (url) => {
    const token = localStorage.getItem('jwtToken');

  const response = await api.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};