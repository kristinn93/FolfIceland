import React from 'react';
import Root from './src';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import CourseList from './src/components/courseList';
import CourseDetails from './src/components/courseDetail';

export const Router = createRouter(() => ({
  list: () => CourseList,
  details: () => CourseDetails,
}));

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
        <NavigationProvider router={Router}>
          <StackNavigation initialRoute={Router.getRoute('list')} />
        </NavigationProvider>
      </ApolloProvider>
    );
  }
}
