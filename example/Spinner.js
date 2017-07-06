import React from 'react';

import Style from '../src/react-style-comp';

// A Complicated Example
export default function Spinner() {
    return (
        <div>
            <Style>{`
                {
                    font-size: 10px;
                    margin: 50px auto;
                    text-indent: -9999em;
                    width: 5rem;
                    height: 5rem;
                    border-radius: 50%;
                    background: #252525;
                    background: -moz-linear-gradient(left, #252525 10%, rgba(255, 255, 255, 0) 42%);
                    background: -o-linear-gradient(left, #252525 10%, rgba(255, 255, 255, 0) 42%);
                    background: -ms-linear-gradient(left, #252525 10%, rgba(255, 255, 255, 0) 42%);
                    background: linear-gradient(to right, #252525 10%, rgba(255, 255, 255, 0) 42%);
                    position: relative;
                    animation: spinner 1s infinite linear;
                    -ms-transform: translateZ(0);
                    transform: translateZ(0);
                }
                
                :before {
                    width: 50%;
                    height: 50%;
                    background: #252525;
                    border-radius: 100% 0 0 0;
                    position: absolute;
                    top: 0;
                    left: 0;
                    content: '';
                }
                
                :after {
                    background: #ffffff;
                    width: 75%;
                    height: 75%;
                    border-radius: 50%;
                    content: '';
                    margin: auto;
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                }
                
                @keyframes spinner {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</Style>
            Loading...
        </div>
    );
}