import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: [],
      input: 0,
      submit: 'Submit Basket #1',
      submitDisabled: false,
    };
  }

  generateSubmitString(number) {
    return `Submit Basket #${number + 1}`;
  }

  addScore() {
    console.log(this.state.input);
    if (this.state.input !== 0 && this.state.input !== ':') {
      const newScore = {
        throws: this.state.input,
        basket: this.state.score.length + 1,
      };
      const newArray = [...this.state.score];
      newArray.push(newScore);
      console.log('New array is ', newArray);
      this.setState({
        score: newArray,
        submit: this.generateSubmitString(newArray.length),
        input: 0,
      });
    } else {
      this.setState({ submit: 'Please enter a number', submitDisabled: true });
    }
  }

  render() {
    return (
      <View style={{ margin: 20 }}>
        <TextInput
          onChangeText={number =>
            this.setState({ input: number, submitDisabled: false })}
          style={{ backgroundColor: '#ededed', height: 60, marginBottom: 10 }}
          keyboardType="numeric"
        />
        <View style={{ backgroundColor: '#00b200' }}>
          <Button
            onPress={() => this.addScore()}
            disabled={this.state.submitDisabled}
            title={this.state.submit}
            color="#FFFFFF"
          />
        </View>

      </View>
    );
  }
}
