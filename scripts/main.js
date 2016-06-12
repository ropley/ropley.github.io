var React = require('react');
var ReactDOM = require('react-dom');

import NotFound from './components/page-structure/notfound';
import HomePageLoggedOut from './components/page-structure/home';

ReactDOM.render(<HomePageLoggedOut/>, document.querySelector('#main'));

