import React from 'react';
import { StyleSheet,View} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import AppDrawerNavigator from './components/AppDrawerNavigation';
import WelcomeScreen from './screens/WelcomeScreen';

export default class  App extends React.Component{
  render(){
    return (
      <View>
        <AppContainer/>
        </View>
      )
  }
  }
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen:AppDrawerNavigator}
})
const AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});