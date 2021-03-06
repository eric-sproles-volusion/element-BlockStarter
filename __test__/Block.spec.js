import React from 'react';
import { StyleSheet, css, StyleSheetTestUtils } from 'aphrodite';
import { ElementPropTypes } from '@volusion/element-proptypes';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { block as Block } from '../src/';
import { defaultConfig } from '../src/configs';

describe('The Block', () => {
    StyleSheetTestUtils.suppressStyleInjection();

    it('renders without errors', () => {
        mount(<Block />);
    });

    describe('when there is no custom data', () => {
        it('should render the block with the default content', () => {
            const wrapper = shallow(<Block />);
            expect(wrapper.text()).toBe(defaultConfig.text);
        });
    });

    describe('when given custom data', () => {
        it('should render the block using the custom data', () => {
            const customText = 'Custom Block Text';
            const blockConfig = { text: customText };

            const wrapper = shallow(<Block {...blockConfig} />);

            expect(wrapper.text()).toBe(customText);
        });
    });
});
