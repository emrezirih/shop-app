import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './tab-navigator';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from '../components/menu';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <Menu {...props} />}                            
                screenOptions={{
                    drawerPosition:'right',
                    headerShown: false,
                }}>
                <Stack.Screen name="main" component={TabNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;