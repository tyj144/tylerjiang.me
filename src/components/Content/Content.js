import React from 'react';

const Content = (props) => 
    <div
        style={{
            padding: '1em'
        }}
        className="Content">
        {props.children}
    </div>;

export default Content;
