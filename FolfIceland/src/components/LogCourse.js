import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
 } from 'react-native'
import Button from 'react-native-button'


export default class LogCourse extends Component<void, Props, void> {
  props: Props

  constructor() {
    super()
    this.state = {hole: 0, par: 0, color: 'none', location: null, error: null, success: false}
  }
  setLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const currPos = JSON.stringify(position)
      this.setState({location: currPos})
      this.setState({error: null})
    }, (err) => {
      this.setState({error: err})
    },
    {enableHighAccuracy: true, timeout: 1000, maximumAge: 500})
  }
  submitData() {
    this.setState({error: {
      message: '',
    }})

    if (this.state.hole <= 0 || !this.state.hole) {
      this.setState({error: {
        message: 'Fill out the hole bruh',
      }})
      return
    }
    if (this.state.color === 'basket' && this.state.par) {
      this.setState({error: {
        message: 'Dude.. a basket doesn\'t have a pair.. go play golf',
      }})
      return
    }
    if (this.state.location === null) {
      this.setState({error: {
        message: 'You need to get location to log',
      }})
    }
    const data = {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        course: this.props,
        location: this.state,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
    fetch('http://localhost:3000/log', data)
        .then(response => response.json())  // promise
        .then(() => {
          this.setState({hole: 0, par: 0, color: 'none', location: null})
          this.setState({success: true})
          setTimeout(() => {
            this.setState({success: false})
          }, 2000)
        })
        .catch((error) => {
          const myError = {message: 'Failed to save data'}
          this.setState({error: myError})
          this.setState({success: false})
        })
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

        <Button
          onPress={() => this.setState({color: 'red'})}
        >
          Red
        </Button>

        <Button
          onPress={() => this.setState({color: 'white'})}
        >
          White
        </Button>

        <Button
          onPress={() => this.setState({color: 'blue'})}
        >
          Blue
        </Button>

        <Button
          onPress={() => this.setState({color: 'basket'})}
        >
          Basket
        </Button>

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
        {this.state.success &&
          <Text style={styles.greenColor}>Your log was successfull !</Text>
        }
        {this.state.location &&
          <View style={styles.info}>
            <Text>Location accuracy: {JSON.parse(this.state.location).coords.accuracy}</Text>
            <Text>Hole: {this.state.hole}</Text>
            <Text>Par: {this.state.par}</Text>
            <Text>Color: {this.state.color}</Text>
          </View>
        }
        {this.state.error !== null &&
          <Text style={styles.redColor}>{this.state.error.message}</Text>
        }
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
  info: {
    backgroundColor: '#e6f3f7',
  },
  redColor: {
    color: 'red',
  },
  greenColor: {
    color: 'green',
  },
})
