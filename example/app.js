import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import Style from '../src/react-style-comp';

import Spinner from './Spinner';

function MyComponent({ bgColor }) {
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

MyComponent.propTypes = {
    bgColor: PropTypes.string
};

MyComponent.defaultProps = {
    bgColor: 'inherit'
};


render(
    <div>
        <MyComponent bgColor="lightgrey" />

        <Spinner />

        <MyComponent bgColor="lightblue" />
    </div>
    ,
    document.getElementById('app')
);
