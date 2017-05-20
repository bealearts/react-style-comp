import React from 'react';
import { render } from 'react-dom';

import Style from '../src/react-style-component';


function MyComponent() {
	return (
		<div>
            <Style>{`
                p {
                    color: red;
                }
            `}</Style>

			<p>Hello Component!</p>
		</div>
	);
}


render(
    <div>
        <MyComponent/>

        <p>Hello World!</p>
    </div>
    ,
    document.getElementById('app')
);
