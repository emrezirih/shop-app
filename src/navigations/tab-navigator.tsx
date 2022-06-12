import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import HomeScreen from '../screens/home';
import DealsScreen from '../screens/deals';
import BasketScreen from '../screens/basket';
import ProfileScreen from '../screens/profile';

import { Colors, Metrics, Typography } from '../styles';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import { RootState } from '../state';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    const navigation = useNavigation();
    const selectedTheme = useSelector((store: RootState) => store.theme.selected);

    const renderTabIcons = (route: string, focused: boolean) => {
        switch (route) {
            case "Home": return focused ? <Icon name='home' color={selectedTheme.iconPrimary} size={30} /> : <Icon name='home' color={selectedTheme.inactiveTab} size={30} />
            case "Deals": return focused ? <Icon name='label' color={selectedTheme.iconPrimary} size={27} /> : <Icon name='label' color={selectedTheme.inactiveTab} size={27} />
            case "Basket": return focused ? <Icon name='basket' color={selectedTheme.iconPrimary} size={25} /> : <Icon name='basket' color={selectedTheme.inactiveTab} size={25} />
            case "Profile": return focused ? <Icon name='account' color={selectedTheme.iconPrimary} size={30} /> : <Icon name='account' color={selectedTheme.inactiveTab} size={30} />
        }
    }

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => renderTabIcons(route.name, focused),
                tabBarStyle: { backgroundColor: selectedTheme.background },
                tabBarShowLabel: true,
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    backgroundColor: selectedTheme.background,
                },
                headerTitleAlign: 'left',
                headerTitleStyle: { fontFamily: Typography.EXTRA_BOLD, fontSize: Metrics.scale(18), color: selectedTheme.textPrimary },
                headerRight: () => <Icon onPress={() => navigation.dispatch(DrawerActions.openDrawer())} name="menu" size={30} style={{ right: Metrics.moderateScale(12), color: selectedTheme.iconPrimary }} />
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Deals" component={DealsScreen} />
            <Tab.Screen name="Basket" component={BasketScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigator;