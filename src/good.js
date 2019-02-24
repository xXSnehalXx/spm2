import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SplashScreen from 'react-native-splash-screen';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});
const AppContainer = createAppContainer(AppNavigator);

export default class Clap extends React.Component {
    componentWillMount() {
        SplashScreen.hide()
     }
  render() {
    return <AppContainer />;
  }
}
