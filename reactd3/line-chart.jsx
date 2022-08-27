import React, { Component, Fragment, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3'
import { axisBottom, scaleLinear, axisRight, axisLeft } from 'd3';

const BasicLineChart = (props) => {
	const [data, setData] = useState([25, 30, 45, 60, 20, 60, 75])
    const ref = useRef();
    

	useEffect(() => {
        // d3.select(ref.current).style('background-color', 'red')

        const svg = d3.select(ref.current)
            .style('background-color', '#eeeeee')
            .style('overflow', 'visible')
            .style('margin-left', '20px');

        const xScale = scaleLinear()
            .domain([0, data.length - 1])
            .range([0, 300])
            
        const yScale = scaleLinear()
            .domain([0, 75])
            .range([150, 0])

        const xAxis = axisBottom(xScale);
        const yAxis = axisLeft(yScale)

        svg.select('.x-axis').style('transform', 'translateY(150px)').call(xAxis)
        svg.select('.y-axis')
        // .style('transform', 'translateY(150px)')
        .call(yAxis)
        


        const line = d3.line()
            .x((d, i) => xScale(i))
            .y(yScale)
            .curve(d3.curveCardinal)

        const linePath = svg.selectAll('line-path')
            .data([data])
            .join('path')
            .attr('class', 'line-path')
            .attr('d', (d) => line(d))
            .attr('fill', 'none')
            .attr('stroke', 'blue')


	}, [data])

	return (
        <Fragment>
            
            <svg ref={ref} >
                <g className='y-axis'/>
                <g className='x-axis'/>
            </svg>

        </Fragment>
	)
}

export {BasicLineChart}