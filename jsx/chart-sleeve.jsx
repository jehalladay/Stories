import React, { Component, Fragment, useRef, useEffect, useState } from 'react';
// import * as d3 from 'd3'

class ChartSleeve extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div id='chart-sleeve' style={{height: this.props.height, width: this.props.width, backgroundColor: this.props.sleeveColor, paddingLeft: Math.floor(this.props.width/18), paddingRight: Math.floor(this.props.width/18), paddingBottom: Math.floor(this.props.height/9), paddingTop: Math.floor(this.props.height/9), textAlign:'center', borderRadius: '2px'}}>
                {this.props.children}
            </div>
        )
    }
}


export {ChartSleeve}