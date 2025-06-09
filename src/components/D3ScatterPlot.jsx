import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3ScatterPlot = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 800, height = 400;
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const filtered = data.filter(d => d.relevance && d.likelihood);

    const x = d3.scaleLinear()
      .domain([0, d3.max(filtered, d => d.relevance)])
      .range([margin.left, width - margin.right]);
    const y = d3.scaleLinear()
      .domain([0, d3.max(filtered, d => d.likelihood)])
      .range([height - margin.bottom, margin.top]);
    const r = d3.scaleSqrt()
      .domain([0, d3.max(filtered, d => d.intensity)])
      .range([3, 15]);

    svg.attr('width', width).attr('height', height);
    svg.append('g')
      .selectAll('circle')
      .data(filtered)
      .join('circle')
      .attr('cx', d => x(d.relevance))
      .attr('cy', d => y(d.likelihood))
      .attr('r', d => r(d.intensity))
      .attr('fill', 'steelblue')
      .attr('opacity', 0.6)
      .append('title')
      .text(d => `Topic: ${d.topic}\nIntensity: ${d.intensity}`);

    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default D3ScatterPlot;
