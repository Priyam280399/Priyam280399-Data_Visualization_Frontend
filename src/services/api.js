import axios from 'axios';

const API_BASE = 'http://localhost:5000';
export const fetchData = async (filters = {}) => {
  const params = new URLSearchParams(filters);
  const res = await axios.get(`${API_BASE}/api/data?${params}`);
  return res.data;
};
