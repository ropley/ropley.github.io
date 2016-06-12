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
import {Input} from 'react-materialize';
import Print from '../scripts/components/process/print';
import Options from '../scripts/components/process/options';
import Totaliser from '../scripts/components/process/totaliser';

// Tests to ensure calculations are correct - inputs via components, result via Totaliser
describe('Logic', () => {
    var pb = TestUtils.renderIntoDocument(<ProcessBody />);
    var iteration=0;
    // width, length, height, quantity, grade, quality, handles, reinforcement, expected result
    var parameters=['1','1','1','1','A','None',false,false,'1.20'];
    parameters.push('1','1','1','1','B','None',false,false,'0.60');
    parameters.push('0.2','0.2','0.2','1','C','None',false,false,'0.01');
    parameters.push('0.2','0.2','0.2','1','C','3',false,false,'0.06');
    parameters.push('0.2','0.2','0.2','1','C','2',false,false,'0.04');
    parameters.push('0.2','0.2','0.2','1','C','2',true,false,'0.14');
    parameters.push('0.2','0.2','0.2','1','A','2',true,true,'0.22');
    parameters.push('0.2','0.2','0.2','1','A','FBC',true,true,'0.19');
    parameters.push('0.2','0.2','0.2','250','A','FBC',true,true,'47.02');

    it('should deliver an accurate total cost', () => {
        for (var i=0; i<parameters.length-8; i=i+9) {
            iteration++;
            console.log("Running iteration: "+iteration);
            pb.state.width=parameters[i];
            pb.state.length=parameters[i+1];
            pb.state.height=parameters[i+2];
            pb.state.quantity=parameters[i+3];
            pb.state.grade=parameters[i+4];
            pb.state.quality=parameters[i+5];
            pb.state.handles=parameters[i+6];
            pb.state.reinforcement=parameters[i+7];

            pb.setState({
                width: pb.state.width,
                length: pb.state.length,
                height: pb.state.height,
                quantity: pb.state.quantity,
                grade: pb.state.grade,
                quality: pb.state.quality,
                handles: pb.state.handles,
                reinforcement: pb.state.reinforcement
            })

            pb.calculate();
            expect(pb.state.cost).toEqual(parameters[i+8]);
        }
    });
});