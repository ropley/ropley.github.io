/**
 * Created by Clive on 31/05/2016.
 */
import React from 'react';

var IndexBanner = React.createClass({
    componentDidMount: function () {
        $('.parallax').parallax();
        $(".button-collapse").sideNav();
    },
    render: function () {
        return (
                <div id="index-banner" className="parallax-container valign-wrapper">
                    <div className="section no-pad-bot ">
                        <div className="container ">
                            <div className="row">
                                <br/>
                                <div className="col s12 m6 l6 hero">
                                    <div className="card-panel transparent z-depth-0 left hero ">
                                    <span className="indigo-text text-lighten-1"><h1
                                        className="hero left">FantasticBoxCo</h1>
                                    <br/>
                                    <p className="black-text">If it's not boxed, it's not <span className="indigo-text text-lighten-1">Fantastic</span></p>
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="parallax "><img src="../css/images/box1.jpg"
                                                    alt="If it's not boxed, it's not Fantastic"/>
                    </div>
                </div>
        )
    }
});

export default IndexBanner;