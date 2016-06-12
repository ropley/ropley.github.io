/**
 * Created by Clive on 07/06/2016.
 */
import React from 'react';

var Totaliser = React.createClass({
    render: function() {
        return (
            <div className="col l6 push-l3 m6 push-m3 s8 push-s2 center-align"><h2>Total cost: £{(this.props.totalCost)}</h2></div>
        )
    }
});

export default Totaliser;