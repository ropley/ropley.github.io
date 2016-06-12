/**
 * Created by Clive on 23/05/2016.
 */
import React from 'react';

var Footer = React.createClass({
    render: function () {
        return (
            <footer className="page-footer indigo lighten-1">
                <div className="container">
                    <div className="row">
                        <div className="col l4 s12">
                            <h5 className="white-text">About us</h5>
                            <p className="grey-text text-lighten-4">FantasticBoxCo - if it's not boxed, it's not Fantastic</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        Made by <span className="brown-text text-lighten-3"
                                   href="#">Clive Harris</span>
                    </div>
                </div>
            </footer>
        )
    }
})

export default Footer;



