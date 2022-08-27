import React, { Component, Fragment, useRef, useEffect, useState } from 'react';
import {VerticalBarChart} from './vertical-bar-chart.jsx'
import * as d3 from 'd3'

const FunctionalChartSleeve = (props) => {
	const [data, setData] = useState()
    const ref = useRef();

    const margin  = props.format.margin,
        width = props.format.width,
        height = props.format.height,
        w = width - margin.right - margin.left,
        h = height - margin.top - margin.bottom;

    const title = props.format.title.split(' ').join('')

    const maxY = d3.max(props.data, (x) => x.value)
    const yPadding = maxY * .1
    
    const yScale = d3.scaleLinear().domain([0, maxY + yPadding]).range([h, 0])
    const xScale = d3.scaleBand().domain(props.data.map(x => x.title)).range([0, w]).padding(0.1)
 
    const click = () => {
        console.log('hello world')
        console.log(props.data)
		return setData(props.data.map(props.update))
	}


	return (
        <Fragment>
            <div id={'chart-frame'}>
                <svg style={{height: `${height}px`, width: `${width}px`, backgroundColor: `${props.format.backgroundColor}`}}>
                    <g ref={ref} data={props.data} id={`${title}__outside`}  transform={`translate(${margin.overall}, ${margin.overall})`}>
                        <VerticalBarChart data={props.data} format={props.format} title={title} selector={`#${title}__outside`} h={h} w={w} xS={xScale} yS={yScale} />
                    </g>
                    <text textAnchor='middle' x={w/2 + margin.top} y={margin.top/1.5} >{props.format.title}</text>
                    <text textAnchor='middle' x={-margin.bottom - h/2} y={margin.left / 2.5} transform='rotate(-90)'>{props.format.yLabel}</text>
                    <text textAnchor='middle' x={w/2 + margin.bottom} y={h+margin.bottom*1.7}>{props.format.xLabel}</text>
                </svg>
            </div>
            <div>
                <br></br>
                <button onClick={click} style={{width: `${width}px`, height: '25px', fontSize:'8pt', textAlign: 'center'}}>
                    Get New values
                </button>
            </div>
        </Fragment>
	)
}

export {FunctionalChartSleeve}