
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    const filtered = data.filter(d => d.start_year && d.intensity);
    const years = filtered.map(d => +d.start_year).filter(Boolean);
    const x = d3.scaleLinear().domain(d3.extent(years)).range([margin.left, width - margin.right]);
    const y = d3.scaleLinear()
      .domain([0, d3.max(filtered, d => +d.intensity || 0)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const line = d3.line()
      .x(d => x(+d.start_year || 0))
      .y(d => y(+d.intensity || 0));

    svg.append('g')
      .call(d3.axisLeft(y))
      .attr('transform', `translate(${margin.left},0)`);

    svg.append('g')
      .call(d3.axisBottom(x))
      .attr('transform', `translate(0,${height - margin.bottom})`);

    svg.append('path')
      .datum(filtered)
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('stroke-width', 1.5)
      .attr('d', line);
  }, [data]);

  return <svg ref={ref} width={500} height={300}></svg>;
};

export default LineChart;
