import React from 'react';
// import Root from './src';
import {AppRegistry} from 'react-native';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

import {StackNavigator} from 'react-navigation';

import CourseList from './src/components/courseList';
import CourseDetails from './src/components/courseDetail';

const Router = StackNavigator({
  list: {screen: CourseList},
  details: {screen: CourseDetails, path: 'details/:name'},
});

//TODO: Point the uri to the local ip address of your computer running the server
const networkInterface = createNetworkInterface({
  uri: 'http://192.168.1.8:3000/graphql',
});
const client = new ApolloClient({
  networkInterface,
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    );
  }
}
