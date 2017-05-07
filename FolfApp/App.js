import React from 'react';
import Root from './src';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

//TODO: Point the uri to the local ip address of your computer running the server
const networkInterface = createNetworkInterface({
  uri: 'http://192.168.1.20:3000/graphql',
});
const client = new ApolloClient({
  networkInterface,
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    );
  }
}
