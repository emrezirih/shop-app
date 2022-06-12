import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';
import { RootState } from '../../state';

import styles from './styles';

const ProfileScreen = () => {

    const selectedTheme = useSelector((store: RootState) => store.theme.selected);
    return (
        <View style={{ ...styles.container, backgroundColor: selectedTheme.background }}>
            <Text style={{ ...styles.title, color: selectedTheme.textPrimary }}>Profile Screen</Text>
        </View>
    );
};

export default ProfileScreen;