/**
 * Created by Clive on 31/05/2016.
 */
import React from 'react';

var Dimensions = React.createClass({
    render: function () {
        return (
            <div className="col s12 m6 l6">
                <div className="icon-block ">
                    <h2 className="center indigo-text text-lighten-1"><i
                        className="material-icons ">settings_overscan</i></h2>
                    <h5 className="center ">Decide on dimensions and quantity</h5>
                </div>
                <div className="row center-align">
                    <div className="input-field col s6 m6 l8 offset-l2">
                        <input type="number" id="width" name="width" placeholder="Width in metres"
                               className="validate"
                               required min="0" step="0.01"
                               value={this.props.width}
                               onChange={this.props.changeMeasurement}/>
                        <label for="width">Width in metres</label>
                    </div>
                    <div className="input-field col s6 m6 l8 offset-l2">
                        <input type="number" id="length" name="length" placeholder="Length in metres"
                               className="validate"
                               required min="0" step="0.01"
                               value={this.props.length}
                               onChange={this.props.changeMeasurement}/>
                        <label for="length">Length in metres</label>
                    </div>
                    <div className="input-field col s6 m6 l8 offset-l2">
                        <input type="number" id="height" name="height" placeholder="Height in metres"
                               className="validate"
                               required min="0" step="0.01"
                               value={this.props.height}
                               onChange={this.props.changeMeasurement}/>
                        <label for="height">Height in metres</label>
                    </div>
                    <div className="input-field col s6 m6 l8 offset-l2">
                        <input type="number" id="quantity" name="quantity" placeholder="Number of boxes"
                               className="validate"
                               value={this.props.quantity}
                               onChange={this.props.changeMeasurement}
                               required min="0" step="1"/>
                        <label for="quantity">Quantity</label>
                    </div>
                </div>
            </div>
        )
    }
});

export default Dimensions;