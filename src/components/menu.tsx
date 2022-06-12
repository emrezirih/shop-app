import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors, Metrics } from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state';
import { changeTheme } from '../state/store/theme';
import { darkTheme, lightTheme } from '../styles/themes';

interface MenuProps {

}

const Menu: React.FC<MenuProps> = ({ }) => {

    const dispatch = useDispatch();
    const selectedTheme = useSelector((store: RootState) => store.theme.selected);

    const onPress = () => {
        dispatch(changeTheme(selectedTheme.name == 'light' ? darkTheme : lightTheme));
    }

    return (
        <View style={{ ...styles.container, backgroundColor: selectedTheme.background }}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Icon name='moon' size={50} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth:1,
        borderColor: Colors.gray4
    },
    button: {
        height: Metrics.verticalScale(100),
        width: Metrics.verticalScale(100),
        borderRadius: 100,
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Menu;
