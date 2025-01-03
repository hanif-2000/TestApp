import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro1 from './src/screens/Intro1';
import Intro2 from './src/screens/Intro2';
import Intro3 from './src/screens/Intro3';
import Intro4 from './src/screens/Intro4';
import Intro5 from './src/screens/Intro5';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro1" component={Intro1} />
        <Stack.Screen name="Intro2" component={Intro2} />
        <Stack.Screen name="Intro3" component={Intro3} />
        <Stack.Screen name="Intro4" component={Intro4} />
        <Stack.Screen name="Intro5" component={Intro5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
