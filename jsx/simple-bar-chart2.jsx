import React, { Component, Fragment, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3'

const SimpleBarChart = (props) => {
	const width = props.width, height = props.height;
	const [data, setData] = useState(props.data)
    const chartArea = useRef();
    

	useEffect(() => {
		
		const padding = 20;

		// // create x axis
        // const xScale = d3.scaleLinear().domain([0, width]).range([padding, width - padding]);
		// const xAxis = d3.axisBottom(xScale).ticks(data.length);
		// const xAxisElement = d3.select(chartArea.current).append('g')
		// .attr('class', 'axis')
		// .attr('transform', `translate(0, ${height-padding})`)
		// .call(xAxis)
		
		
		// // create y axis
        // const yScale = d3.scaleLinear().domain([0, d3.max(data, (d)=>d)]).range([padding, height - padding]);
        // const yAxis = d3.axisLeft(yScale).scale(yScale).ticks(5);
		// const yAxisElement = d3.select(chartArea.current).append('g')
		// 	.attr('class', 'axis')
		// 	.attr('transform', `translate(${padding}, 0)`)
		// 	.call(yAxis)
		
		// create the bars
		const bars = d3.select(chartArea.current)
			.selectAll('rect')  .data(data)
			.join(
				enter => enter.append('rect') 
					.attr('fill', d=>`rgb(0, 0, ${Math.floor(d*3)})`)
					.attr('height', d=>d)     
					.attr('width', (d, i, a) => (width/a.length)-3)
					.attr('y', d=>height-d)   
					.attr('x', (d, i, a)=>i*(width/a.length))
                    .attr('class', 'new'),
                    
                update => update.attr('fill', d=>`rgb(0, 0, ${Math.floor(d*3)})`)
                    .attr('y', d=>height-d) .attr('height', d=>d)
                    .attr('id', (d)=>d)     .attr('class', 'updates'),

				exit => exit.remove()
            );
		
		// create the floating labels above each bar
        const label = d3.select(chartArea.current)
            .selectAll('text')  .data(data)
            .join(
                enter=>enter.append('text')     .text((d)=>Math.floor(d))
                    .attr('y', d=>height-d-5)   .attr('x', (d, i, a)=>i*(width/a.length)),
                    
                update=>update.attr('y', d=>height-d-5)
                    .text((d)=>Math.floor(d)),

                exit=>exit.remove()
            );

            
	}, [data])

	const click = () => {
		console.log('hello world')
		return setData(data.map(props.update))
	}

	return (
		<Fragment >
            <div ref={chartArea}>

            </div>
			<svg ref = {chartArea} style={{height: height, width: width,paddingLeft: '3px', backgroundColor: 'white', borderRadius:'2px'}}>

			</svg>
			<br></br>
			<button onClick={click} style={{width: `${4*width/5}px`, height: '15px', fontSize:'8pt', textAlign: 'center'}}>
				Get New values
			</button>
		</Fragment>
	)
}

export {SimpleBarChart}