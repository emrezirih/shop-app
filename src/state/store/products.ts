import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDeal } from '../../models/deal';
import { IProduct } from '../../models/product';
import { IProductTiming } from '../../models/product-timing';

const initialProducts: IProduct[] = [];
const initialTimings: IProductTiming[] = [];
const initialHotdeals: IDeal[] = [];

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: initialProducts,
        timings: initialTimings,
        hotDeals: initialHotdeals,
    },
    reducers: {
        saveProducts(state, action: PayloadAction<IProduct[]>) {            
            state.products = action.payload;
        },
        saveTimings(state, action: PayloadAction<IProductTiming[]>) {
            state.timings = action.payload;
        },
        saveHotdeals(state, action: PayloadAction<IDeal[]>) {            
            state.hotDeals = action.payload;
        },
    }
});

export const { saveProducts, saveTimings, saveHotdeals } = productSlice.actions;
export default productSlice.reducer;