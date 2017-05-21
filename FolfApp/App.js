import React from 'react';
// import Root from './src';
import { AppRegistry } from 'react-native';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

import { StackNavigator, TabNavigator } from 'react-navigation';

import CourseList from './src/components/courseList';
import CourseDetails from './src/components/courseDetails';
import QuickPlay from './src/components/quick';

import MapView from './src/components/play/map';
import DirectionView from './src/components/play/direction';
import ScoreView from './src/components/play/score';

const PlayingRouter = TabNavigator(
  {
    Map: { screen: MapView },
    Direction: { screen: DirectionView },
    Score: { screen: ScoreView },
  },
  { initalRoute: 'Map' }
);

const Router = StackNavigator({
  list: { screen: CourseList },
  details: { screen: CourseDetails, path: 'details/:name' },
  play: { screen: PlayingRouter },
});

const HomeScreen = TabNavigator(
  {
    home: { screen: Router },
    quick: { screen: QuickPlay, name: 'Quick Play' },
  },
  { initalRoute: 'home' }
);

//TODO: Point the uri to the local ip address of your computer running the server
const networkInterface = createNetworkInterface({
  uri: 'http://192.168.1.12:3000/graphql',
});
const client = new ApolloClient({
  networkInterface,
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <HomeScreen />
      </ApolloProvider>
    );
  }
}
