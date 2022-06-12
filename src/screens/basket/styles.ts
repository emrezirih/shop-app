import { StyleSheet } from "react-native";
import { Colors, Metrics, Typography } from "../../styles";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    product: {
        paddingHorizontal: Metrics.moderateScale(18),
        marginVertical: Metrics.moderateScale(8),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productLeft: {
        flexDirection: 'row'
    },
    image: {
        height: Metrics.verticalScale(100),
        width: Metrics.verticalScale(100),
        borderRadius: 12
    },
    name: {
        width: Metrics.moderateScale(180),
        fontFamily: Typography.SEMIBOLD,
        fontSize: Metrics.scale(16)
    },
    price: {
        fontFamily: Typography.SEMIBOLD,
        fontSize: Metrics.scale(16),
        color: Colors.gray4
    },
    productRight: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    countBtn: {
        height: Metrics.verticalScale(30),
        width: Metrics.verticalScale(30),
        borderRadius: 12,
        backgroundColor: Colors.darkBlue,
        alignItems: 'center',
        justifyContent: 'center'
    },
    countIcon: {
        fontSize: Metrics.scale(28),
        color: Colors.darkBlue,
        textAlign: 'center'
    },
    pageHeader: {
        paddingHorizontal: Metrics.moderateScale(18),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    title: {
        fontFamily: Typography.EXTRA_BOLD,
        fontSize: Metrics.scale(28)
    },
    amount: {
        fontFamily: Typography.REGULAR,
        color: Colors.gray4,
        fontSize: Metrics.scale(24)
    },
    clearText: {
        fontFamily: Typography.SEMIBOLD,
        fontSize: Metrics.scale(16),
        textDecorationLine: 'underline',
        color: Colors.red
    },

});

export default styles;
