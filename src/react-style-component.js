import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';


export default class Style extends PureComponent {
    constructor() {
        super();
        this.uuid = 'bob';
    }


    componentDidMount() {
        const parentNode = findDOMNode(this).parentNode;
        if (parentNode) {
            parentNode.classList.add(this.uuid);
        }
    }


    render() {
        const children = this.props.children;
        const css = makeUnique(children, this.uuid);

        return <style>{css}</style>;
    }
}



function makeUnique(css, uuid) {
    const lines = css.split('\n');
    const decorated = lines.map(line => {
        if (line.indexOf('{') !== -1) {
            return `.${uuid} ${line.trim()}`;
        } else {
            return line;
        }
    });

    return decorated.join('\n');
}
