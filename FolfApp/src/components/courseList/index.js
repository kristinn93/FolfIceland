import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';

import { gql, graphql } from 'react-apollo';

class CourseList extends React.Component {
  static navigationOptions = {
    title: 'Course List',
  };
  render() {
    console.log(this.props.data);
    return (
      <ScrollView>
        <View
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        >
          {this.props.data.loading && <Text>Loading ⏳</Text>}
          {!this.props.data.loading &&
            this.props.data.folf &&
            this.props.data.folf.courses.map(item => {
              return (
                <Button
                  key={item.name}
                  onPress={() =>
                    this.props.navigation.navigate('details', {
                      name: item.name,
                    })}
                  title={item.name}
                />
              );
            })}
          <Button
            onPress={() => this.props.navigation.navigate('details')}
            title="details view"
          />
        </View>
      </ScrollView>
    );
  }
}

export default graphql(gql`
  query {folf {courses {name}}}
`)(CourseList);
