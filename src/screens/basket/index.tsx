import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import SizedBox from '../../components/sized-box';
import { RootState } from '../../state';
import { Colors, Metrics } from '../../styles';

import styles from './styles';
import { clearBasket, removeProduct, updateProduct } from '../../state/store/basket';

const BasketScreen = () => {

    const dispatch = useDispatch();

    const selectedTheme = useSelector((store: RootState) => store.theme.selected);
    const products = useSelector((store: RootState) => store.basket.products);
    const totalAmount = useSelector((store: RootState) => store.basket.amount);

    const emptyBasket = () => {
        return (
            <View style={styles.container}>
                <Text style={{ ...styles.title, color: selectedTheme.textPrimary }}>Basket is empty</Text>
            </View>
        );
    }

    const renderProduct = ({ item, index }: any) => {
        return (
            <View style={styles.product}>
                <View style={styles.productLeft}>
                    <Image style={styles.image} source={{ uri: item.product.image }} />
                    <SizedBox width={Metrics.moderateScale(12)} />
                    <View>
                        <Text style={{ ...styles.name, color: selectedTheme.textPrimary }}>{item.product.name}</Text>
                        <Text style={{ ...styles.price, color: selectedTheme.textSecondary }}>${item.product.price}</Text>
                    </View>
                </View>
                <View style={styles.productRight}>
                    <TouchableOpacity onPress={() => {
                        item.count == 1 ? dispatch(removeProduct({ product: item.product, count: 0 })) :
                            dispatch(updateProduct({ product: item.product, count: item.count - 1 }))
                    }} >
                        <Icon style={styles.countIcon} name='remove-circle' />
                    </TouchableOpacity>
                    <SizedBox />
                    <Text style={{ ...styles.price, color: selectedTheme.textSecondary }}>{item.count}</Text>
                    <SizedBox />
                    <TouchableOpacity onPress={() => dispatch(updateProduct({ product: item.product, count: item.count + 1 }))} >
                        <Icon style={styles.countIcon} name='add-circle' />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: selectedTheme.background }}>
            {products.length <= 0 && emptyBasket()}
            {products.length > 0 &&
                <>
                    <SizedBox />
                    <View style={styles.pageHeader}>
                        <View>
                            <Text style={{ ...styles.title, color: selectedTheme.textPrimary }}>Total</Text>
                            <Text style={{ ...styles.amount, color: selectedTheme.textSecondary }}>${totalAmount}</Text>
                        </View>
                        <TouchableOpacity onPress={() => dispatch(clearBasket())}>
                            <Text style={styles.clearText}>Clear</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={products}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderProduct}
                    />
                </>
            }
        </View>
    );

};

export default BasketScreen;