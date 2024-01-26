import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
      name:"cart",//name of the slice
      initialState:{
        items:[],
      },
      reducers :{
        //it provides the action for add , read , delete which function want to preform;
        add : (state,action)=>{
            state.items.push(action.payload);
        },
        removeItems : (state,action)=>{
            state.items.pop();
        },
        clearCart : (state)=>{
            state.items.length = 0;
        }
    }
})


export const {add,removeItems,clearCart} = cartSlice.actions;
export default cartSlice.reducer;