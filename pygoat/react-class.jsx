import React, { Component, Fragment, useRef, useEffect, useState, createRef } from 'react';
import * as d3 from 'd3'

class ReactClassExample extends Component {
    constructor(props) {
        super(props)
        this.ref = createRef();
    }

    componentDidMount() {
        d3.select(this.ref.current).style('background-color', 'red')
    }

    render() {
        return (
            <div ref={this.ref} style={{height: '80px', width: '80px'}}>
                A Ref inside a Div
            </div>
        )
    }
}

export {ReactClassExample}