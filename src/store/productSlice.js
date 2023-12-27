import { createSlice } from "@reduxjs/toolkit";
import Endpoints from "../api/Endpoints";

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR : 'error',
    LOADING : 'loading'
})

const productSlice = createSlice({
    name:'product',
    initialState: {
        data : [],
        status : STATUSES.IDLE,
    },

    reducers:{
        setProducts(state, action){
            state.data = action.payload
        },
        setStatus(state, action){
            state.status = action.payload
        },


    }
})

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;

//Thunk Function
export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getStatus){
        
        dispatch(setStatus(STATUSES.LOADING))

        try{
            const response = await fetch(Endpoints.PRODUCTS_URL);
            const data = await response.json();
            dispatch(setProducts(data))
            dispatch(setStatus(STATUSES.IDLE))

        } catch(error){
            console.log(error)
        dispatch(setStatus(STATUSES.ERROR))
        }
    }
} 