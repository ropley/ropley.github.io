/**
 * Created by Clive on 01/06/2016.
 */
/**
 * Created by Clive on 31/05/2016.
 */
import React from 'react';
import {Input} from 'react-materialize';

var Print = React.createClass({
    render: function () {
        var checked3="", checked2="", checkedBW="", checkedNone="", checkedFBC="";
        (this.props.quality == "3") ? checked3="checked" : (this.props.quality=="2") ? checked2="checked" :
            (this.props.quality =="BW") ? checkedBW = "checked" : (this.props.quality=="None") ? checkedNone="checked" :
                checkedFBC="checked";
        return (
            <div className="col s12 m6 l6">
                <div className="icon-block ">
                    <h2 className="center indigo-text text-lighten-1"><i
                        className="material-icons ">print</i></h2>
                    <h5 className="center">Select your desired print quality</h5>
                </div>
                <div className="row center-align">
                    <div className="col l12 push-l1">
                        <div className="row"><Input name='quality' type='radio' value='3'
                                                    checked={checked3} label='3 colour printing - £0.20 per sq m' onClick={this.props.changeMeasurement}/></div>
                        <div className="row"><Input name='quality' type='radio' value='2'
                                                    checked={checked2} label='2 colour printing - £0.10 per sq m' onClick={this.props.changeMeasurement}/></div>
                        <div className="row"><Input name='quality' type='radio' value='BW'
                                                    checked={checkedBW} label='Black and white - £0.05 per sq m' onClick={this.props.changeMeasurement}/></div>
                        <div className="row"><Input name='quality' type='radio' value='None'
                                                    checked={checkedNone} label='No printing - £0.00 per sq m' onClick={this.props.changeMeasurement}/></div>
                        <div className="row"><Input name='quality' type='radio' value='FBC'
                                                    checked={checkedFBC} label='FantasticBoxCo branding - 5% discount' onClick={this.props.changeMeasurement}/></div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Print

