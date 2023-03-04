import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../meta/cartItems'
const initialState = {
    cartItems: cartItems,
    amount: 5,
    total: 0,
    isLoading: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        }
    }
})

export const {clearCart} = cartSlice.actions;
export default cartSlice.reducer;