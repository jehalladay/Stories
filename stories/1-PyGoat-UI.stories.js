import React, { Component, Fragment, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3'
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import {ReactClassExample} from '../pygoat/react-class.jsx'
import {ReactFunctionExample} from '../pygoat/react-function.jsx'
import {SVGLogo} from '../pygoat/logo.jsx'

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

export const demo = () => <Demo>hi again from the child</Demo>
export const ReactClassTemplate = () => <ReactClassExample />
export const ReactFunctionTemplate = () => <ReactFunctionExample />
export const PyGoatLogo = () => <SVGLogo />
export default {
	title: 'PyGoat UI Components',
};
