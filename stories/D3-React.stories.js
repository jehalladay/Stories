import React, { Component, Fragment, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3'
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import {SimpleBarChart} from '../jsx/src/simple-bar-chart.jsx'

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

const D3Demo = FunctionalStoryWrapper(SimpleBarChart, {
	height: 150,
	width: 300,
	update: () => Math.random()*100,
	data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

})


export const demo = () => <Demo>hi again from the child</Demo>
export const BarGraph = () => <D3Demo />
export default {
	title: 'D3 and React',
	component: Button,
};
