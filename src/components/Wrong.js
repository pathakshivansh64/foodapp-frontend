import React, { createContext, useReducer } from 'react'
import Card from './Card';

const CartStateContext=createContext();
const CartDispatchContext=createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,img:action.img}]
    }
}


export const CartProvider=({childern})=>{

    const [state,dispatch]=useReducer(reducer,[]);

    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
             {childern}
            </CartStateContext.Provider>  
        </CartDispatchContext.Provider>
    )

}

export {CartDispatchContext,CartStateContext};
