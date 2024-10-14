import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
    name : 'cart',
    initialState : localStorage.getItem('cart')
})


// export let {changeName} =  user.actions


export default configureStore({
    reducer: { 
        cart : cart.reducer,
    }
}) 