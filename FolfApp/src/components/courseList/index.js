import React from 'react';
import { Text, View, Button } from 'react-native';

import { gql, graphql } from 'react-apollo';

class CourseList extends React.Component {
  static navigationOptions = {
    title: 'Course List',
  };
  render() {
    console.log(this.props.data);
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>
          CourseList
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('details')}
          title="details view"
        />
      </View>
    );
  }
}

export default graphql(gql`
  query {folf {courses {name}}}
`)(CourseList);
