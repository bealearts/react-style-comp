# react-style-comp [![Build Status](https://travis-ci.org/bealearts/react-style-comp.png?branch=master)](https://travis-ci.org/bealearts/react-style-comp) [![npm version](https://badge.fury.io/js/react-style-comp.svg)](http://badge.fury.io/js/react-style-comp) [![Dependency Status](https://david-dm.org/bealearts/react-style-comp.png)](https://david-dm.org/bealearts/react-style-comp)

Locally scoped CSS for [React](https://facebook.github.io/react/) components

> Following "Make everything a component", turn your CSS into a component and gain the advantages of a familiar syntax with componentized style reuse.
 * Inline CSS syntax
 * Locally scoped styles with element nesting supported
 * Dynamic CSS properties with ES6 [template literals](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals)
 * Package styles as a component for reuse
 * No build tool or pre-processor needed

# Usage
```js
import React from 'react';
import Style from 'react-style-comp';

export default function MyComponent({ bgColor = 'inherit' }) {
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

            <p>Hello World!</p>
        </div>
    );
}
```

# Install
```shell
npm install react-style-comp --save
```

# How does it work?
Each `Style` component outputs an HTML `style` element with the CSS selectors prefixed with a unique class name. This class name is also added to the parent element of the `Style` component.

The usage example above, might produce the following DOM output.
```html
<div class="uid-H1MaV06lZ">
    style>
        .uid-H1MaV06lZ {
            border: 2px solid blue;
        }
        
        .uid-H1MaV06lZ p {
            color: red;
            background-color: inhert;
        }
    </style>

    <p>Hello World!</p>
</div>
```

# Test
```shell
npm install
npm test
```
