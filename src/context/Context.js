import { createContext, useReducer,useContext } from "react";
import { cartReducer, productReducer } from "./Reducers";
import data from "../components/Layout/data";
const Cart = createContext();

const Context=({children})=>{

  const [state,dispatch]=useReducer(cartReducer,{
    Data: data.productItems,
    cart:[]
  });

  const [productState, productDispatch] = useReducer(productReducer, {

    searchQuery: "",
  });

  return <Cart.Provider value={{state, dispatch, productState, productDispatch}}>{children}</Cart.Provider>
}

export default Context;

export const CartState=()=>{
  return useContext(Cart);
}
