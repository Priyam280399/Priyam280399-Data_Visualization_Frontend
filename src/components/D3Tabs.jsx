
import React, { useState } from 'react';
import LineChart from './D3LineChart';
import DonutChart from './D3DonutChart';
import ScatterPlot from './D3ScatterPlot';

const D3Tabs = ({ data }) => {
  const [tab, setTab] = useState('line');
  return (
    <div>
      <div className="tabs">
        <button onClick={() => setTab('line')}>Intensity vs Year</button>
        <button onClick={() => setTab('donut')}>Topics</button>
        <button onClick={() => setTab('scatter')}>Relevance vs Likelihood</button>
      </div>
      {tab === 'line' && <LineChart data={data} />}
      {tab === 'donut' && <DonutChart data={data} />}
      {tab === 'scatter' && <ScatterPlot data={data} />}
    </div>
  );
};

export default D3Tabs;
