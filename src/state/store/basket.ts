import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBasket } from '../../models/basket';
import { IProduct } from '../../models/product';
import Snackbar from 'react-native-snackbar';
import { Colors } from '../../styles';

const initalBasket: IBasket[] = [];

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        products: initalBasket,
        amount: 0.0
    },
    reducers: {
        addProduct(state, action: PayloadAction<IBasket>) {
            let amount = 0.0;
            const list = state.products;
            list.push(action.payload);
            list.map((item, index) => {
                amount = amount + Number(item.product.price * item.count);
            });
            state.products = list;
            state.amount = amount;
            Snackbar.show({
                text: 'Product added',
                backgroundColor: Colors.success,
                duration: Snackbar.LENGTH_SHORT,
            });
        },
        updateProduct(state, action: PayloadAction<IBasket>) {
            let amount = 0.0;
            const list = state.products;
            const ind = state.products.findIndex(x => x.product.id == action.payload.product.id);
            list[ind] = action.payload;
            list.map((item, index) => {
                amount = amount + Number(item.product.price * item.count);
            });
            state.products = list;
            state.amount = amount;
        },
        removeProduct(state, action: PayloadAction<IBasket>) {
            let amount = 0.0;
            const list = state.products.filter(x => x.product.id != action.payload.product.id);
            list.map((item, index) => {
                amount = amount + Number(item.product.price * item.count);
            });
            state.products = list;
            state.amount = amount;
            Snackbar.show({
                text: 'Product removed',
                backgroundColor: Colors.red,
                duration: Snackbar.LENGTH_SHORT,
            });
        },
        clearBasket(state, action: PayloadAction) {
            state.products = [];
            state.amount = 0.0;
            Snackbar.show({
                text: 'Basket has been emptied.',
                backgroundColor: Colors.red,
                duration: Snackbar.LENGTH_SHORT,
            });
        },
    }
});

export const { addProduct, removeProduct, updateProduct, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;