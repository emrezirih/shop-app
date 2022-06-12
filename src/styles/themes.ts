import { Colors } from ".";
import { ITheme } from "../models/theme";

export const lightTheme: ITheme = {
    name: 'light',
    barStyle: 'dark-content',
    background: Colors.white,
    textPrimary: Colors.black,
    textSecondary: Colors.gray4,
    iconPrimary: Colors.darkBlue,
    activeTab: Colors.darkBlue,
    inactiveTab: Colors.gray4,
};

export const darkTheme: ITheme = {
    name: 'dark',
    barStyle: 'light-content',
    background: Colors.black,
    textPrimary: Colors.white,
    textSecondary: Colors.gray4,
    iconPrimary: Colors.white,
    activeTab: Colors.white,
    inactiveTab: Colors.gray4,
};