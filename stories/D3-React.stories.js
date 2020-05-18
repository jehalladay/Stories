import React, { Component, Fragment, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3'
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import {SimpleBarChart} from '../jsx/simple-bar-chart2.jsx'
import {BarChart} from '../jsx/barchart-widget.jsx'
import {ReactClassExample} from '../jsx/react-class.jsx'
import {ReactFunctionExample} from '../jsx/react-function.jsx'
import {BarChartAxis} from '../jsx/barchart-axis.jsx'
import {BasicLineChart} from '../jsx/line-chart.jsx'



class Demo extends Component {
	render() {
		return (
			<div>
				<div>'hello world'</div>
				{this.props.children}
			</div>
		)
	}
}

function useRefOn(ReactComponent) {
	return function(props) {
		const ref = useRef();
		return (
			<ReactComponent ref={ref}>asdf</ReactComponent>
		);
	}


}

const FunctionalStoryWrapper = (component, config)=> { 
	return (props) => {
		return component({...props, ...config})
	}
}

const ClassStoryWrapper = (ClassComponent, config)=> {
	const conf = config; 
	return (props) => {
		const data = {...props, ...conf};
		return (<ClassComponent data={data} />)
	}
}

const D3Demo2 = ClassStoryWrapper(BarChart, {
	height: 150,
	width: 300,
	sleeveColor: '#323232',
	update: () => Math.random()*100,
	data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

})
const D3Demo = FunctionalStoryWrapper(SimpleBarChart, {
	height: 150,
	width: 300,
	update: () => Math.random()*100,
	data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

})

const BarChartWithAxis = FunctionalStoryWrapper(BarChartAxis, {
	data: [
        {title: 'Title1', value: 75},   {title: 'Title2', value: 78},
        {title: 'Title3', value: 92},   {title: 'Title4', value: 72},
        {title: 'Title5', value: 65},   {title: 'Title6', value: 52},
        {title: 'Title7', value: 45},   {title: 'Title8', value: 38},
        {title: 'Title9', value: 28},   {title: 'Title10', value: 13},
        {title: 'Title11', value: 45},   {title: 'Title12', value: 38},
        {title: 'Title13', value: 45},   {title: 'Titl14', value: 32},
        {title: 'Title15', value: 45},   {title: 'Title16', value: 36},
        {title: 'Title17', value: 45},   {title: 'Title18', value: 39},
	],
	format:{
		title: 'Bar Chart Title',
		height: 300,
		width: 1000,
		margin: {	  
			top: 60,  bottom: 60,
			left: 60, right: 60,
			overall: 60
		},
		yLabel: 'Y-Axis Label',
		xLabel: 'X-Axis Label',
		backgroundColor: "lightblue",
		barColor: '#b94b4f',
		textColor: '#dddddd'
	}
	
})


const LineChart = FunctionalStoryWrapper(BasicLineChart, {

})


export const demo = () => <Demo>hi again from the child</Demo>
export const ReactClassTemplate = () => <ReactClassExample />
export const ReactFunctionTemplate = () => <ReactFunctionExample />
export const AtomicBarGraph = () => <D3Demo />
export const FullBarGraph = () => <D3Demo2 />
export const SimpleLineChart = () => <LineChart />
export const BarGraphWithAxis = () => <BarChartWithAxis />
export default {
	title: 'D3 and React',
	component: Button,
};
