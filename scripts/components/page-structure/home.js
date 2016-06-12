/**
 * Created by Clive on 23/05/2016.
 */
/*
 Homepage
 */

import React from 'react';
import Navigation from './navigation';
import IndexBanner from './indexbanner';
import ProcessBody from '../process/processbody';
import Footer from './footer';

var HomePageLoggedOut = React.createClass({
    render: function () {
        return (
            <div>
                <Navigation/>
                <main>
                    <IndexBanner/>
                    <ProcessBody/>
                </main>
                <Footer/>
            </div>
        )
    }
});

export default HomePageLoggedOut;
