import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
    name : 'cart',
    initialState : localStorage.getItem('cart')
})



export default configureStore({
    reducer: { 
        cart : cart.reducer,
    }
}) 