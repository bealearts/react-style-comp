# react-style-component

Locally scoped CSS for [React](https://facebook.github.io/react/) components

# Usage
```js
import React from 'react';
import Style from 'react-style-component';

export default function MyComponent() {
	return (
		<div>
            <Style>{`
                p {
                    color: red;
                }
            `}</Style>

			<p>Hello World!</p>
		</div>
	);
}
```

# Install
```shell
npm install react-style-component --save
```
