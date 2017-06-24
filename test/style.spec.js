import React from 'react';
import { render } from 'react-dom';
import { expect } from 'chai';
// import { mount } from 'enzyme';

import Style from '../';

describe('react-style-comp', () => {
    it('should apply local CSS rules', () => {
        const wrapper = mount(
            <div>
                <Style>{`
                    {
                        background-color: red;
                    }

                    p {
                        color: blue;
                    }
                `}</Style>
                <p>Test</p>
            </div>
        );

        expect(
            style(wrapper.getDOMNode(), 'background-color')
        ).to.equal('red');

        expect(
            style(wrapper.getDOMNode().querySelector('p'), 'color')
        ).to.equal('blue');
    });

    it('should not effect global CSS rules', () => {
        const wrapper = mount(
            <div>
                <div id="local">
                    <Style>{`
                        p {
                            color: blue;
                        }
                    `}</Style>
                    <p>local</p>
                </div>
                <div id="global">
                    <p>global</p>
                </div>
            </div>
        );

        expect(
            style(wrapper.getDOMNode().querySelector('#local p'), 'color')
        ).to.equal('blue');

        expect(
            style(wrapper.getDOMNode().querySelector('#global p'), 'color')
        ).to.equal('');
    });
});


function style(element, name) {
    return window.getComputedStyle(element).getPropertyValue(name);
}

function mount(comp) {
    const el = document.getElementById('test');
    render(comp, el);
    return {
        getDOMNode() {
            return el.firstChild;
        }
    };
}
