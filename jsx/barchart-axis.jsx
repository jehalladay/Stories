import React, { Component, Fragment, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3'


// #31465a
// #b94b4f

const BarChartAxis = (props) => {
	// const [data, setData] = useState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    const ref = useRef();
	const [data, setData] = useState(props.data)
      console.log('props: ', props)
    const margin  = props.format.margin,
    width = props.format.width,
    height = props.format.height,
    w = width - margin.right - margin.left,
    h = height - margin.top - margin.bottom;
    

	useEffect(() => {
        const svg = d3.select(ref.current).style('background-color', props.format.backgroundColor)
        const chart = svg.append('g').attr('transform', `translate(${margin.overall}, ${margin.overall})`)
        const titleLabel = svg.append('text').attr('text-anchor', 'middle')
            .attr('x', w/2 + margin.top).attr('y', margin.top/1.5).text(props.format.title)


        const yScale = d3.scaleLinear().domain([0, 100]).range([h, 0])
        const yAxis = chart.append('g').call(d3.axisLeft(yScale))
        const yLabel = svg.append('text').attr('text-anchor', 'middle')
            .attr('x', -margin.bottom - h/2).attr('y', margin.left / 2.4 )
            .attr('transform', 'rotate(-90)').text(props.format.yLabel)
        
        const xScale = d3.scaleBand().domain(data.map(d=>d.title)).range([0, w]).padding(0.2)
        const xAxis = chart.append('g').attr('transform', `translate(0, ${h})`).call(d3.axisBottom(xScale))
        const xLabel = svg.append('text').attr('text-anchor', 'middle').text(props.format.xLabel)
            .attr('x', w/2 + margin.bottom).attr('y', h+margin.bottom*1.7)


        const bars = chart.selectAll('rect').data(data).enter().append('rect')
            .attr('x', (d)=>xScale(d.title)).attr('y', (d)=>yScale(d.value))
            .attr('width', xScale.bandwidth()).attr('height', (d)=>h - yScale(d.value))


	}, [data])

	return (
        <Fragment>
            <div id={'chart-frame'}>
                <svg ref={ref} style={{height: `${height}px`, width: `${width}px`}}>
                    A Ref inside a Div
                </svg>
            </div>
        </Fragment>
	)
}

export {BarChartAxis}