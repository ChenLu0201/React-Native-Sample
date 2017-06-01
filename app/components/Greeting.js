import React, { Component } from 'react';
import { Text } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text style={{textAlign:'center'}}>Hello {this.props.name}</Text>
    );
  }
}

export default Greeting;

