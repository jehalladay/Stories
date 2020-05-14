import React, { Component, Fragment, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3'
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import {SimpleBarChart} from '../jsx/src/simple-bar-chart2.jsx'
import {BarChart} from '../jsx/src/barchart-widget.jsx'
import {ReactClassExample} from '../jsx/src/react-class.jsx'
import {ReactFunctionExample} from '../jsx/src/react-function.jsx'

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


export const demo = () => <Demo>hi again from the child</Demo>
export const ReactClassTemplate = () => <ReactClassExample />
export const ReactFunctionTemplate = () => <ReactFunctionExample />
export const AtomicBarGraph = () => <D3Demo />
export const FullBarGraph = () => <D3Demo2 />
export default {
	title: 'D3 and React',
	component: Button,
};
