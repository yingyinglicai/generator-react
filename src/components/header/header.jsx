import './header.scss';
import React from 'react';

let a = require('./imgs/index.mp4');


class HeaderComponent extends React.Component {
  render() {
    return (
      <div className='header'>
        <video data-autoplay='true' data-controls='true' src={a}></video>
        <span>
          我是header组件
        </span>
      </div>
    );
  }
}
HeaderComponent.defaultProps = {};

export default HeaderComponent;

