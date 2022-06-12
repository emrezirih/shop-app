export interface ITheme {
    name: string
    barStyle: 'default' | 'dark-content' | 'light-content';
    background: string,
    textPrimary: string,
    textSecondary: string,
    iconPrimary: string,
    activeTab: string,
    inactiveTab: string,
}