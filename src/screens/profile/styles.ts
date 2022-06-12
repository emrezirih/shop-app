import { StyleSheet } from "react-native";
import { Metrics, Typography } from "../../styles";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: Typography.EXTRA_BOLD,
        fontSize: Metrics.scale(28)
    },
});

export default styles;
