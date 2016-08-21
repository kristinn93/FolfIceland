import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
 } from 'react-native'
import Button from 'react-native-button'


export default class LogCourse extends Component<void, Props, void> {
  props: Props

  constructor() {
    super()
    this.state = {hole: 0, par: 0, color: 'none', location: {}}
  }
  setLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const currPos = JSON.stringify(position)
      this.setState({location: currPos})
    })
  }
  submitData() {
    console.log(this.state)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hole#</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          keyboardType={'numeric'}
          maxLength={1}
          onChangeText={(text) => this.setState({hole: text})}
        />
        <Text>Par</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          maxLength={1}
          keyboardType={'numeric'}
          onChangeText={(text) => this.setState({par: text})}
        />

        <TouchableHighlight
          onPress={() => this.setState({color: 'red'})}
        >
          <Text>Red</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => this.setState({color: 'white'})}
        >
          <Text>White</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => this.setState({color: 'blue'})}
        >
          <Text>Blue</Text>
        </TouchableHighlight>

        <Button
          onPress={() => this.setLocation()}
        >
          Get current location
        </Button>

        <Button
          onPress={() => this.submitData()}
        >
          Submit
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
})
