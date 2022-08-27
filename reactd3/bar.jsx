import React from 'react';

const Bar = (props) => <rect fill={props.fill} x={props.x} y={props.y} width={props.width} height={props.height} style={{shapeRendering: 'crispEdges'}}></rect>

export {Bar}