import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import postcss from 'postcss';
import shortid from 'shortid';

// Use ES5 version
import prefixSelector from '../dist/node_modules/postcss-prefix-selector';

export default class Style extends PureComponent {
    constructor() {
        super();
        this.uid = `uid-${shortid.generate()}`;
    }


    componentDidMount() {
        const parentNode = findDOMNode(this).parentNode;
        if (parentNode) {
            parentNode.classList.add(this.uid);
        }
    }


    render() {
        const children = this.props.children;
        const css = encapsulate(children, this.uid);

        return <style>{css}</style>;
    }
}

Style.propTypes = {
    children: PropTypes.string.isRequired
};


function encapsulate(css, uid) {
    return postcss()
        .use(prefixSelector({
            prefix: `.${uid}`,
            exclude: ['@-webkit-keyframes'],
            transform
        }))
        .process(css)
        .css;
}


function transform(prefix, selector, prefixedSelector) {
    if (selector[0] === ':') {
        return prefix + selector;
    }
    
    return prefixedSelector;
}