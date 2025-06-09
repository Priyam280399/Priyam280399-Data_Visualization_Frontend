
import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';
import D3Tabs from  "../components/D3Tabs";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchData(filters).then(setData);
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Data Visualization Dashboard</h1>
      <div className="filters">
        <input name="end_year" placeholder="End Year" onChange={handleFilterChange} />
        <input name="topic" placeholder="Topic" onChange={handleFilterChange} />
        <input name="sector" placeholder="Sector" onChange={handleFilterChange} />
        <input name="region" placeholder="Region" onChange={handleFilterChange} />
        <input name="pestle" placeholder="PEST" onChange={handleFilterChange} />
        <input name="source" placeholder="Source" onChange={handleFilterChange} />
        <input name="swot" placeholder="SWOT" onChange={handleFilterChange} />
        <input name="country" placeholder="Country" onChange={handleFilterChange} />
        <input name="city" placeholder="City" onChange={handleFilterChange} />
      </div>
      <D3Tabs data={data} />
    </div>
  );
};

export default Dashboard;
