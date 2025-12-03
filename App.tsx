// React
import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen 
import MainScreen from './screens/MainScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator(); 

function App(): React.JSX.Element {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">

        {/* Main Screen */}
        <Stack.Screen 
          name='Main' 
          component={MainScreen} 
          options={{
            title: 'Currency Converter',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 35,
              fontWeight: 'condensedBold',
            }}}/>

            {/* About Screen */}
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
