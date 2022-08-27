import React, { Component, Fragment, useRef, useEffect, useState } from 'react';
import '../bootstrap.min.css'
import logo from '../static/logo.svg'

const SVGLogo = ()=>{

    const imgStyle = {
        height:'110px',
        width:'110px',
        // marginRight: '20px'
    }
    
    const blockStyle = {
        backgroundColor: '#860037', 
        color: 'white', 
        paddingLeft: '5px', 
        display:'inline-block'
    }

    const titleStyle = {
        display:'inline-block',
        marginRight: '40px'
    }

    return (
        <div className="sidebar-header" style={blockStyle}>
                <img id="logo-img" src={logo} style={imgStyle} />
                <h2 style={titleStyle}>PyGoat</h2>
        </div>
    )
}

export {SVGLogo}