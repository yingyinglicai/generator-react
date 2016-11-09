import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './public/style/iconfont.css';
import './public/style/base.scss';

import First from './routes/page1/index';

console.log("index");

ReactDOM.render(<First />, document.getElementById('app'));
