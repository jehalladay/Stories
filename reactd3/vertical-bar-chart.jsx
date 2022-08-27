import React, { Component, Fragment, useRef, useEffect, useState } from 'react';
import {Bar} from './bar.jsx'
import * as d3 from 'd3'

const VerticalBarChart = (props) => {
    
	useEffect(() => {        
        
            const chart = d3.select(props.selector)

            // check to see if axis have already been made and then deletes them if they exist
            const previous = document.querySelectorAll(`.${props.title}_Axis`)
            previous[0] && previous.forEach((x)=>x.parentNode.removeChild(x))

            // create axis
            const yAxis = chart.append('g').attr('class', `${props.title}_Axis`).call(d3.axisLeft(props.yS))
            const xAxis = chart.append('g').attr('class', `${props.title}_Axis`).attr('transform', `translate(0, ${props.h})`).call(d3.axisBottom(props.xS))
	}, [props])

	return (
        <Fragment>
            {props.data.map((x) =>
                <Bar fill={props.format.barColor} x={props.xS(x.title)} y={props.yS(x.value)} width={props.xS.bandwidth()} height={props.h - props.yS(x.value)} /> 
            )}
        </Fragment>
	)
}

export {VerticalBarChart}