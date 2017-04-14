import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
//SCREENS
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';
//REDUX
import { Provider } from 'react-redux';
import store from './store';



// ROUTES
// =====================================
const ReviewNavigator = StackNavigator({
  review: { 
    screen: ReviewScreen,
  },
  settings:    { 
    screen: SettingsScreen 
  },
});

const AppNavigator = TabNavigator({
  map: { 
    screen: MapScreen,
  },
  deck:    { 
    screen: DeckScreen 
  },
  review:    { 
    screen: ReviewNavigator 
  },
});

const MainNavigator = TabNavigator({
  welcome: { 
    screen: WelcomeScreen,
  },
  auth:    { 
    screen: AuthScreen 
  },
  main:    { 
    screen: AppNavigator 
  },
}, {
  lazyLoad: true,
  navigationOptions: {
    tabBar: { visible: false }
  }
});


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
