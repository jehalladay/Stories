import React, { Component, Fragment, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3'

const PieChart = (props) => {
	const [data, setData] = useState(props.data)
    const ref = useRef();
    
    const pieData = d3.pie()(data)

	useEffect(() => {
        d3.select(ref.current).style('background-color', 'lightblue')
	}, [data])

	return (
        <Fragment>
            
        <svg ref={ref} style={{height: props.format.height, width: props.format.width}}>
            <g transform={`translate(${props.format.width / 2}, ${props.format.height / 2})`}>
                <Slice pieData={pieData} />
            </g>
            A Ref inside a Div
        </svg>
        </Fragment>
	)
}

const Slice = (props) => {
    const pieData = props.pieData
    
    const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(100)

    const colorRange = d3.interpolateRgb('#702080', '#ffddff')

    return pieData.map((x, i) => {
        const sliceColor = colorRange(i / (pieData.length - 1));

        return <path d={arc(x)} fill={sliceColor}/>
    })
}

export {PieChart}