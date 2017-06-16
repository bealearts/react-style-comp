import React from 'react';
import { render } from 'react-dom';

import Style from '../src/react-style-comp';


function MyComponent({ bgColor = 'inherit' }) {
    return (
        <div>
            <Style>{`
                {
                    border: 2px solid blue;
                }

                p {
                    color: red;
                    background-color: ${bgColor};
                }
            `}</Style>

            <p>Hello Component!</p>
        </div>
    );
}


render(
    <div>
        <MyComponent bgColor='lightgrey'/>

        <p>Hello World!</p>

        <MyComponent bgColor='lightblue'/>
    </div>
    ,
    document.getElementById('app')
);
