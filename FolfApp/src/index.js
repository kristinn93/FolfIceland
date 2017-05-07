import React from 'react';
import { comp as Root } from '../lib/js/src/root.js';

import { gql, graphql } from 'react-apollo';

class App extends React.Component {
  render() {
    console.log(this.props.data);
    return <Root message="Hello world" />;
  }
}

export default graphql(gql`
  query {folf {courses {name}}}
`)(App);
