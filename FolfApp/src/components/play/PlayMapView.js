import React from 'react';
import {View, Text} from 'react-native';
import {gql, graphql} from 'react-apollo';
import {
  comp as PlayMapViewRe,
} from '../../../lib/js/src/components/play/playMapView';

class PlayMapView extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name,
  });

  render() {
    console.log(this.props.navigation.state.params);
    return <PlayMapViewRe />;
  }
}

export default graphql(
  gql`
  query Courses($name: String!,
    $redSelected: Boolean!,
    $whiteSelected: Boolean!,
    $blueSelected: Boolean!){
  course(name: $name) {
    name
    par {
      red @include(if: $redSelected)
      white @include(if: $whiteSelected)
      blue @include(if: $blueSelected)
    }
    baskets {
      teePads {
        red @include(if: $redSelected) {
          par
          location {
            lat
            long
          }
        }
        white @include(if: $whiteSelected){
          par
          location {
            lat
            long
          }
        }
        blue @include(if: $blueSelected){
          par
          location {
            lat
            long
          }
        }
      }
    }
  }
}
`,
  {
    options: ownProps => ({
      variables: {
        name: ownProps.navigation.state.params.name,
        redSelected: ownProps.navigation.state.params.selectedColor === 'red',
        whiteSelected: ownProps.navigation.state.params.selectedColor ===
          'white',
        blueSelected: ownProps.navigation.state.params.selectedColor === 'blue',
      },
    }),
  }
)(PlayMapView);
