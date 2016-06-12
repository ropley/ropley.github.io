/**
 * Created by Clive on 23/05/2016.
 */
import React from 'react';

var Navigation = React.createClass({
    render: function () {
        return (
            <header>
                <nav className="white" role="navigation">
                    <div className="nav-wrapper container">
                        <a id="logo-container" href="/"
                           className="brand-logo center indigo-text text-lighten-1">FantasticBoxCo</a>
                    </div>
                </nav>
            </header>
        )
    }
})

export default Navigation;
