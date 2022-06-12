import { StyleSheet } from "react-native";
import { Colors, Metrics, Typography } from "../../styles";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white
    },
    productImage: {
        height: Metrics.verticalScale(180),
        width: Metrics.windowWidth * 0.9,
        alignSelf: 'center',        
        margin: Metrics.verticalScale(8),
        borderRadius: 12,
        
    },
    productInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Metrics.verticalScale(12),
    },
    name: {
        fontFamily: Typography.REGULAR,
        fontSize: Metrics.scale(14),
    },
    price: {
        fontFamily: Typography.BOLD,
        fontSize: Metrics.scale(14),
    }
});

export default styles;
