/**
 * Created by Clive on 01/06/2016.
 */
/**
 * Created by Clive on 31/05/2016.
 */
import React from 'react';
import {Input} from 'react-materialize';

var Grade = React.createClass({
    render: function () {
        var checkedA = "", checkedB="", checkedC="", disabledC="", errorMsgClass="row left-align red-text hide";
        (this.props.grade == "C") ? checkedC = "checked" : (this.props.grade == "B") ? checkedB = "checked" : (this.props.grade == "A") ? checkedA = "checked" : checkedA = "";
        (this.props.disabled) ? ( disabledC = true, checkedC = false,
                                  errorMsgClass=errorMsgClass.replace("hide","")): disabledC = false;
        return (
            <div className="col s12 m6 l6">
                <div className="icon-block ">
                    <h2 className="center indigo-text text-lighten-1"><i className="material-icons ">assessment</i></h2>
                    <h5 className="center ">Choose your grade of cardboard</h5>
                </div>
                <div className="row center-align">
                    <div className="col l10 push-l1 s10 m10 push-m1">
                        <div className="row"><Input name='grade' type='radio' value='A'
                                                    checked={checkedA}
                                                    label='Grade A - £0.20 per sq m'
                                                    onClick={this.props.changeMeasurement}/></div>
                        <div className="row"><Input name='grade' type='radio' value='B'
                                                    checked={checkedB}
                                                    label='Grade B - £0.10 per sq m'
                                                    onClick={this.props.changeMeasurement}/></div>
                        <div className="row"><Input name='grade' type='radio' value='C'
                                                    checked={checkedC}
                                                    disabled={disabledC}
                                                    label='Grade C - £0.05 per sq m'
                                                    onClick={this.props.changeMeasurement}/><br/>
                        </div>
                        <div className={errorMsgClass}>Grade C cardboard is not available for boxes with areas exceeding 2 sq m</div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Grade
