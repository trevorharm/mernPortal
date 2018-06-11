import React from 'react';

const container = props =>
    <div className={'container${props.fluid ? "-fluid": ""}'}{...props} />;
export default container;