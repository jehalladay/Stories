import React, { Component, Fragment, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3'
import {SimpleBarChart} from './simple-bar-chart.jsx'
import {ChartSleeve} from './chart-sleeve.jsx'

class BarChart extends Component {
    constructor(props) {
        super(props)
        this.click = this.click.bind(this)
    }

    click(){
        console.log(this.props)
    }

    render() {
        const {height, width, update, data, sleeveColor} = this.props.data,
                innerHeight = height*.9,
                innerWidth  = width *.9;

        return (
            <ChartSleeve height={height} width={width} sleeveColor={sleeveColor}>
                <SimpleBarChart height={innerHeight} width={innerWidth} update={update} data={data}/>
            </ChartSleeve>
        )
    }
}


export {BarChart}