import React, { useEffect } from 'react'
import { View, Text, Alert, Image } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import SizedBox from '../../components/sized-box';
import { IProduct } from '../../models/product';

import * as Services from '../../services';
import { RootState } from '../../state';
import { addProduct, updateProduct } from '../../state/store/basket';
import { saveProducts } from '../../state/store/products';

import styles from './styles';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const selectedTheme = useSelector((store: RootState) => store.theme.selected);
    const products = useSelector((store: RootState) => store.product.products);
    const basket = useSelector((store: RootState) => store.basket.products);

    const getProducts = async () => {
        Services.getProducts()
            .then(res => {
                const data: any = res;
                dispatch(saveProducts(data));
            })
            .catch(err => {
                Alert.alert('Error', err);
            });
    };

    const renderProduct = ({ item, index }: any) => {
        return (
            <TouchableOpacity onPress={() => onPressProduct(item)}>
                <SizedBox />
                <Image style={styles.productImage} source={{ uri: item.image }} />
                <View style={styles.productInfo}>
                    <Text style={{ ...styles.name, color: selectedTheme.textPrimary }}>{item.name}</Text>
                    <Text style={{ ...styles.price, color: selectedTheme.textPrimary }}>${item.price}</Text>
                </View>
                <SizedBox />
            </TouchableOpacity >
        );
    };

    const onPressProduct = (product: IProduct) => {
        const added = basket.find(x => x.product.id == product.id);
        if (added) {
            dispatch(updateProduct({ product: product, count: added.count + 1 }));
        }
        else {
            dispatch(addProduct({ product: product, count: 1 }));
        }
    }

    useEffect(() => {
        getProducts();
    }, []);



    return (
        <View style={{ ...styles.container, backgroundColor: selectedTheme.background }}>
            <FlatList
                data={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderProduct}
            />
        </View>
    );
};

export default HomeScreen