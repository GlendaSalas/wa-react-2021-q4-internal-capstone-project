import * as styled from './Input.css.js';
import React from 'react';

const input = () => {
  return React.createElement(React.Fragment, null, React.createElement(styled.Input, null));
};

export { input as Input };
