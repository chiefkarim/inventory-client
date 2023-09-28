import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {total:0,
  items:[]},
  reducers: {
    itemAdded: (state, action) => {
      state.items = [
        ...state.items,
        {
          name: action.payload.name,
          id: action.payload.id,
          price: action.payload.price,
          quantity: action.payload.quantity,
          src:action.payload.src
        },
      ];
      state.total = state.items.reduce(
        (total, item) => {return item.price * item.quantity + total}
      ,0);
    },
    itemRemoved: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.total = state.items.reduce(
        (total, item) => {return item.price * item.quantity + total}
      ,0); 
    },itemQuantityIncreased:(state,action)=>{
      state.items = state.items.map(item=>{
        if(item.id ==action.payload.id && action.payload.stock > 1+item.quantity ){
          return {...item,quantity : 1+item.quantity}
        }})
        state.total = state.items.reduce(
          (total, item) => {return item.price * item.quantity + total}
        ,0)
    },itemQuantityDecreased:(state,action)=>{
      state.items = state.items.map(item=>{
        if(item.id == action.payload.id  ){
          return {...item,quantity : item.quantity - 1}
        }
      })
        state.total = state.items.reduce(
          (total, item) => {return item?.price * item?.quantity + total}
        ,0)
    }

  },
});
export const { itemRemoved, itemAdded ,itemQuantityIncreased,itemQuantityDecreased} = cartSlice.actions;
export default cartSlice.reducer;
