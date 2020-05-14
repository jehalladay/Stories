import React, { Component, Fragment, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3'

const ReactFunctionExample = (props) => {
	const [data, setData] = useState([1, 2, 3, 4, 5])
    const ref = useRef();
    

	useEffect(() => {
        d3.select(ref.current).style('background-color', 'red')
	}, [data])

	return (
        <Fragment>
            
        <div ref={ref} style={{height: '80px', width: '80px'}}>
            A Ref inside a Div
        </div>
        </Fragment>
	)
}

export {ReactFunctionExample}