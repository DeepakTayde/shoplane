// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cartItems.filter((item) => item.id !== action.payload);
      state.cartItems = removeItem;
    },
        emptyCart: (state)=>{
         state.cartItems = []
    },

  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  emptyCart,
} = cartSlice.actions;





// // src/features/cart/cartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     cartItems: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       state.cartItems.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
//       return state.cartItems.filter((item) => item.productId !== action.payload);
//     },
//     emptyCart(state){
//         return state = []
//     },
//   },
// });

// export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
// export const selectCartItems = (state) => state.cart.cartItems;

// export default cartSlice.reducer;




// // import { createSlice } from "@reduxjs/toolkit";



// // const cartSlice = createSlice({
// //     name:'cart',
// //     initialState: [],
// //     reducers:{
// //         addToCart(state, action){
// //             state.push(action.payload)
// //         },

// //         removeFromCart(state, action){
// //             return state.filter(item=>item.id!==action.payload)
// //         },
// //         emptyCart(state){
// //             return state = []
// //         },
// //     }
// // })

// // export const {addToCart, removeFromCart, emptyCart} = cartSlice.actions;
// // export default cartSlice.reducer;