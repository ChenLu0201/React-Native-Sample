/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Greeting from './app/components/Greeting';
import JustifyContentBasics from './app/components/JustifyContentBasics';
import NewTextInput from './app/components/NewTextInput';
import ListScrollView from './app/components/ListScrollView';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class AwesomeProject extends Component {

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>
            Hello, Lane! {'\n'}
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <Image source={pic} style={{width: 96, height: 56, alignSelf:'center'}}/>
          <Greeting name="Jack"></Greeting>
          <NewTextInput></NewTextInput>
          <JustifyContentBasics></JustifyContentBasics>
          <ListScrollView></ListScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60,
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
