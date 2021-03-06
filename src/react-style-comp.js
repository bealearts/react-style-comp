import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import postcss from 'postcss';
import shortid from 'shortid';
import prefixKeyframes from 'postcss-prefixer-keyframes';
import prefixSelector from 'postcss-prefix-selector';


export default class Style extends PureComponent {
    constructor() {
        super();
        this.uid = `uid-${shortid.generate()}`;
    }


    componentDidMount() {
        const parentNode = this.node.parentNode;
        if (parentNode) {
            parentNode.classList.add(this.uid);
        }
    }


    render() {
        const children = this.props.children;
        const css = encapsulate(children, this.uid);

        return <style ref={(node) => { this.node = node; }}>{css}</style>;
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
        .use(prefixKeyframes({
            prefix: `${uid}-`
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
