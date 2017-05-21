import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import postcss from 'postcss';
import prefixSelector from 'postcss-prefix-selector';
import shortid from 'shortid';


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
}


function encapsulate(css, uid) {
    return postcss()
        .use(prefixSelector({
            prefix: `.${uid}`
        }))
        .process(css)
        .css;
}
