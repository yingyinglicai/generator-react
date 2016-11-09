/*eslint no-console:0 */
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import 'react-fastclick';

import 'normalize.css';
import './public/style/iconfont.css';
import './public/style/base.scss';

import First from './routes/page1/index';

console.log("index");


//定义路由对象
const rootRoute = {
  childRoutes: [
    {
      path: '/',
      component: First
    }
  ]
};

ReactDOM.render((
  <Router
    history={browserHistory}
    routes={rootRoute}
  />
), document.getElementById('app'));

