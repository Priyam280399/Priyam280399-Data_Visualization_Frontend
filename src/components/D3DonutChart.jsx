
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3DonutChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const grouped = d3.rollups(data, v => v.length, d => d.topic)
      .filter(([topic]) => topic)
      .slice(0, 10); // Top 10 topics

    const width = 400, height = 400, radius = Math.min(width, height) / 2;
    const color = d3.scaleOrdinal(d3.schemeSet2);
    const pie = d3.pie().value(d => d[1]);
    const arc = d3.arc().innerRadius(100).outerRadius(radius);

    const g = svg.attr('width', width).attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Tooltip
    const tooltip = d3.select('body')
      .append('div')
      .attr('class', 'tooltip-donut')
      .style('position', 'absolute')
      .style('padding', '6px 10px')
      .style('background', '#333')
      .style('color', '#fff')
      .style('border-radius', '4px')
      .style('pointer-events', 'none')
      .style('opacity', 0);

    g.selectAll('path')
      .data(pie(grouped))
      .join('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data[0]))
      .on('mouseover', (event, d) => {
        tooltip.transition().duration(200).style('opacity', 0.9);
        tooltip.html(`<strong>${d.data[0]}</strong>: ${d.data[1]}`);
      })
      .on('mousemove', (event) => {
        tooltip
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', () => {
        tooltip.transition().duration(300).style('opacity', 0);
      });

    return () => tooltip.remove(); // Clean up tooltip on unmount
  }, [data]);

  return <svg ref={ref}></svg>;
};

export default D3DonutChart;
