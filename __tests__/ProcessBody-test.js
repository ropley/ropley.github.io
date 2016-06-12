jest.unmock('../scripts/components/process/processbody');
jest.unmock('../scripts/components/process/dimensions');
jest.unmock('../scripts/components/process/grade');
jest.unmock('../scripts/components/process/print');
jest.unmock('../scripts/components/process/options');
jest.unmock('../scripts/components/process/totaliser');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ProcessBody from '../scripts/components/process/processbody';
import Dimensions from '../scripts/components/process/dimensions';
import Grade from '../scripts/components/process/grade';
import Print from '../scripts/components/process/print';
import Options from '../scripts/components/process/options';
import Totaliser from '../scripts/components/process/totaliser';

describe('ProcessBody', () => {
    it('should exist', () => {
        // Simple test that the processbody component actually renders
        const pb = TestUtils.renderIntoDocument(<ProcessBody />);
        expect(TestUtils.isCompositeComponent(pb)).toBeTruthy();
    });

    it('should render all child components', () => {
        // Simple test to ensure the child components render
        const pb = TestUtils.renderIntoDocument(<ProcessBody />);
        const dimensions = TestUtils.findRenderedComponentWithType(pb,Dimensions);
        const grade = TestUtils.findRenderedComponentWithType(pb,Grade);
        const print = TestUtils.findRenderedComponentWithType(pb,Print);
        const options = TestUtils.findRenderedComponentWithType(pb,Options);
        const totaliser = TestUtils.findRenderedComponentWithType(pb, Totaliser);
        expect(TestUtils.isCompositeComponent(dimensions)).toBeTruthy();
        expect(TestUtils.isCompositeComponent(grade)).toBeTruthy();
        expect(TestUtils.isCompositeComponent(print)).toBeTruthy();
        expect(TestUtils.isCompositeComponent(options)).toBeTruthy();
        expect(TestUtils.isCompositeComponent(totaliser)).toBeTruthy();
    });

    it('should have a child dimensions component with four validate fields', () => {
        // Test that Dimensions has 4 validated fields
        const pb = TestUtils.renderIntoDocument(<ProcessBody />);
        const dimensions = TestUtils.findRenderedComponentWithType(pb, Dimensions);
        const input_fields = TestUtils.scryRenderedDOMComponentsWithClass(dimensions, 'validate');
        expect(input_fields.length).toEqual(4);
    });

    it('should allow child components of Dimensions to accept input values, stored in parent state', () => {
        const pb = TestUtils.renderIntoDocument(<ProcessBody />);
        const dimensions = TestUtils.findRenderedComponentWithType(pb, Dimensions);
        const input_fields = TestUtils.scryRenderedDOMComponentsWithClass(dimensions, 'validate');
        input_fields[0].value='1';  // width
        TestUtils.Simulate.change(input_fields[0]);
        input_fields[1].value='2';  // length
        TestUtils.Simulate.change(input_fields[1]);
        input_fields[2].value='3';  // height
        TestUtils.Simulate.change(input_fields[2]);
        input_fields[3].value='4';  // quantity
        TestUtils.Simulate.change(input_fields[3]);
        expect(pb.state.width).toEqual('1');
        expect(pb.state.length).toEqual('2');
        expect(pb.state.height).toEqual('3');
        expect(pb.state.quantity).toEqual('4');
    });
});