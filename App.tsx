import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator(); 

function App(): React.JSX.Element {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen 
          name='Main' 
          component={MainScreen} 
          options={{
            title: 'Currency Converter',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 'bold',
            }}}/>
          <Stack.Screen 
          name='About' 
          component={AboutScreen} 
          options={{title: 'About',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 'bold',
            }}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
