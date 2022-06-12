import React, { useEffect, useState } from 'react'
import { View, Text, Alert, Image, TouchableOpacity, Touchable } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import SizedBox from '../../components/sized-box';
import { IProduct } from '../../models/product';

import * as Services from '../../services';
import { RootState } from '../../state';
import { addProduct, updateProduct } from '../../state/store/basket';
import { saveHotdeals, saveProducts } from '../../state/store/products';
import { Colors, Metrics } from '../../styles';

import styles from './styles';

const DealsScreen = () => {
    const dispatch = useDispatch();

    const sizes = [320, 440, 560];
    const selectedTheme = useSelector((store: RootState) => store.theme.selected);
    const deals = useSelector((store: RootState) => store.product.hotDeals);
    const basket = useSelector((store: RootState) => store.basket.products);

    const products = useSelector((store: RootState) => store.product.products)
        .filter(x => deals.findIndex(y => y.productId.toString() == x.id.toString()) != -1);

    const getProducts = async () => {
        Services.getDeals()
            .then(res => {
                const data: any = res;
                dispatch(saveHotdeals(data));
            })
            .catch(err => {
                Alert.alert('Error', err);
            });
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
        <ScrollView style={{ backgroundColor: selectedTheme.background }} contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            <View>
                {products.map((item, index) => {
                    if (index % 2 == 0) {
                        const imageSize = sizes[Math.floor(Math.random() * 3)];
                        const s = item.image.split("/");
                        const imageUri = `${s[0]}//${s[2]}/${s[3]}/${imageSize}/${s[5]}/${s[6]}`;
                        return (
                            <TouchableOpacity key={"col-1-" + index.toString()} onPress={() => onPressProduct(item)}>
                                <SizedBox />
                                <Image style={{ ...styles.productImage, height: Metrics.verticalScale(imageSize) }} source={{ uri: imageUri }} />
                                <Text style={{ ...styles.name, color: selectedTheme.textPrimary }}>{item.name}</Text>
                                <Text style={{ ...styles.price, color: selectedTheme.textPrimary }}>${item.price}</Text>
                                <SizedBox />
                            </TouchableOpacity>
                        );
                    }
                    return null;
                })}
            </View>
            <View>
                {products.map((item, index) => {
                    if (index % 2 != 0) {
                        const imageSize = sizes[Math.floor(Math.random() * 3)];
                        const s = item.image.split("/");
                        const imageUri = `${s[0]}//${s[2]}/${s[3]}/${imageSize}/${s[5]}/${s[6]}`;
                        return (
                            <TouchableOpacity key={"col-2-" + index.toString()} onPress={() => onPressProduct(item)}>
                                <SizedBox />
                                <Image style={{ ...styles.productImage, height: Metrics.verticalScale(imageSize) }} source={{ uri: imageUri }} />
                                <Text style={{ ...styles.name, color: selectedTheme.textPrimary }}>{item.name}</Text>
                                <Text style={{ ...styles.price, color: selectedTheme.textPrimary }}>${item.price}</Text>
                                <SizedBox />
                            </TouchableOpacity>
                        );
                    }
                    return null;
                })}
            </View>

        </ScrollView>
    );
};

export default DealsScreen;