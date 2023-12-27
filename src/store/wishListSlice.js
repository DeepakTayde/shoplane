import { createSlice } from "@reduxjs/toolkit";



const wishListSlice = createSlice({
    name:'wishList',
    initialState: [],
    reducers:{
        addToWishList(state, action){
            state.push(action.payload)
        },

        removeFromWishList(state, action){
            return state.filter(item=>item.id!==action.payload)
        },
        emptyWishList(state){
            return state = []
        },
    }
})

export const {addToWishList, removeFromWishList, emptyWishList} = wishListSlice.actions;
export default wishListSlice.reducer;