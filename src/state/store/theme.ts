import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDeal } from '../../models/deal';
import { IProduct } from '../../models/product';
import { IProductTiming } from '../../models/product-timing';
import { ITheme } from '../../models/theme';
import { lightTheme } from '../../styles/themes';

const initialTheme: ITheme = lightTheme;

const themeSlice = createSlice({
    name: 'product',
    initialState: {
        selected: initialTheme
    },
    reducers: {
        changeTheme(state, action: PayloadAction<ITheme>) {
            state.selected = action.payload;
        }
    }
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;