import React from 'react';
import { comp as Root } from '../lib/js/src/root.js';

export default class App extends React.Component {
  render() {
    return <Root message="Hello world" />;
  }
}
