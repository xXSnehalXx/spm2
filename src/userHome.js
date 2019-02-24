/**
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableHighlight,
  Alert
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class UserHome extends Component {
    componentDidMount() {
    SplashScreen.hide()
 }
  render() {
    return (
      <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#CCCCCC"
          />
          <Text>I'm the MyComponent component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:Platform.OS=="ios"?22:0,
    backgroundColor:"#CCCCCC"
  },
});
