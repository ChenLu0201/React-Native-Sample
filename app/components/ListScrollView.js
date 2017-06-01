import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native'

const styles = {
  icon1: {
    width:56,
    height:24,
    alignSelf: 'flex-start'
  },
  icon2: {
    width:32,
    height:32,
    alignSelf: 'center'
  },
  icon3: {
    width:40,
    height:40,
    alignSelf: 'flex-end'
  },
  icon4: {
    width:40,
    height:48,
    alignSelf: 'flex-start'
  }
}

class ListScrollView extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize: 24}}>Scroll me plz</Text>
        <Image source={require('../images/react-icon-1.png')} style={styles.icon1}/>
        <Image source={require('../images/react-icon-1.png')} style={styles.icon1}/>
        <Image source={require('../images/react-icon-1.png')} style={styles.icon1}/>
        <Image source={require('../images/react-icon-1.png')} style={styles.icon1}/>
        <Image source={require('../images/react-icon-1.png')} style={styles.icon1}/>
        <Text style={{fontSize:32}}>If you like</Text>
        <Image source={require('../images/react-icon-2.png')} style={styles.icon2}/>
        <Image source={require('../images/react-icon-2.png')} style={styles.icon2}/>
        <Image source={require('../images/react-icon-2.png')} style={styles.icon2}/>
        <Image source={require('../images/react-icon-2.png')} style={styles.icon2}/>
        <Image source={require('../images/react-icon-2.png')} style={styles.icon2}/>
        <Text style={{fontSize:40}}>Scrolling down</Text>
        <Image source={require('../images/react-icon-3.png')} style={styles.icon3}/>
        <Image source={require('../images/react-icon-3.png')} style={styles.icon3}/>
        <Image source={require('../images/react-icon-3.png')} style={styles.icon3}/>
        <Image source={require('../images/react-icon-3.png')} style={styles.icon3}/>
        <Image source={require('../images/react-icon-3.png')} style={styles.icon3}/>
        <Text style={{fontSize:48}}>What's the best</Text>
        <Image source={require('../images/react-icon-4.png')} style={styles.icon4}/>
        <Image source={require('../images/react-icon-4.png')} style={styles.icon4}/>
        <Image source={require('../images/react-icon-4.png')} style={styles.icon4}/>
        <Image source={require('../images/react-icon-4.png')} style={styles.icon4}/>
        <Image source={require('../images/react-icon-4.png')} style={styles.icon4}/>
      </ScrollView>
    );
  }
}

export default ListScrollView;

