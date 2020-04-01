import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './src/components/home/Home';
import RandomFood from './src/components/randomFood/RandomFood';
import Favourites from './src/components/favourites/Favourites';
import Settings from './src/components/settings/Settings';
import ContactUs from './src/components/contactUs/ContactUs';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';

            switch (route.name) {
              case 'Home':
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                break;
              case 'RandomFood':
                iconName = focused ? 'food' : 'food';
                break;
              case 'Favourites':
                iconName = focused ? 'favorite' : 'favorite-border';
                break;
              case 'Settings':
                iconName = focused ? 'ios-list-box' : 'ios-list';
                break;
              case 'ContactUs':
                iconName = focused ? 'questioncircle' : 'questioncircleo';
                break;
              default:

            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="RandomFood" component={RandomFood} />
        <Tab.Screen name="Favourites" component={Favourites} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="ContactUs" component={ContactUs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
