import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/header/header.jsx';
import 'normalize.css';
import './public/style/base.scss';


// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
