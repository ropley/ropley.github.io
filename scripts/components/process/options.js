/**
 * Created by Clive on 01/06/2016.
 */
/**
 * Created by Clive on 31/05/2016.
 */
import React from 'react';
import {Input} from 'react-materialize';

var Options = React.createClass({
    render: function () {
        var checkedHandles = "", checkedReinforcement = "", disabledReinforcement = "", errorMsgClass = "row left-align red-text hide";
        (this.props.handles) ? checkedHandles = "checked" : checkedHandles = "";
        (this.props.reinforcement) ? checkedReinforcement = "checked" : checkedReinforcement = "";
        (this.props.disabled) ? (disabledReinforcement = true, errorMsgClass = errorMsgClass.replace("hide", "")) : disabledReinforcement = "";
        return (
            <div className="col s12 m6 l6">
                <div className="icon-block ">
                    <h2 className="center indigo-text text-lighten-1"><i
                        className="material-icons ">playlist_add</i></h2>
                    <h5 className="center">Pick your optional extras</h5>
                </div>
                <div className="row center-align">
                    <div className="col l12 push-l1">
                        <div className="row"><Input name="handles" type='checkbox' value='handles'
                                                    checked={checkedHandles} label='Handles - £0.10 per box'
                                                    onClick={this.props.changeMeasurement}/></div>
                        <div className="row"><Input name="reinforcement" type='checkbox' value='reinforcement'
                                                    checked={checkedReinforcement} disabled={disabledReinforcement}
                                                    label='Reinforced bottom - £0.05 per box'
                                                    onClick={this.props.changeMeasurement}/></div>
                        <div className={errorMsgClass}>Reinforcement is only available with grade A cardboard</div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Options


