import { useReducer } from "react";
import { createContext,useState } from "react";
import {cartReducer,cartInitialState} from '../reducers/cart.jsx'

export const CartContext=createContext()
//usando reducer


export function CartProvider ({children}){

    const [state,dispatch]=useReducer(cartReducer,cartInitialState)

    const addToCart=(product)=>{
        
            dispatch({
                type: 'ADD_TO_CART',
                payload: product
            })
        
    }

    const removeFrom=(product)=>{
         
         dispatch({
             type: 'REMOVE_FROM_CART',
             payload: product
         })
    }
    const clearCart =()=>{
        dispatch({type: 'CLEAR_CART'})}
       



    // todo esto se cambia por el reduce

    //const [cart,setCart]=useState([])

    // const addToCart= (product)=>{
    //     //mira que el producto no este ya en el carro
    //     const productInCartIndex= cart.findIndex(item => item.id === product.id)

    //     if (productInCartIndex >= 0 ){
    //         //una forma de hacerlo es con el structureClone que hace una copia profunda del objeto
    //         const newCart= structuredClone(cart)
    //         newCart[productInCartIndex].quantity +=1
    //         return setCart(newCart)
    //     }
    //     //producto no esta en el carrito

    //     setCart(prevState =>(
    //         [...prevState,
    //         {
    //             ...product,
    //             quantity:1
    //         }
    //     ]
    //     ))
    // }

    // const removeFrom = (products) =>{
    //     //lo de pevState es propio de los set
    //     setCart(prevState => prevState.filter(item => item.id !== products.id ))
    // }

    // const clearCart = ()=>{
    //     setCart([])
    // }

    return(
        <CartContext.Provider value={{
            cart :state,
            addToCart,
            clearCart,
            removeFrom
        }}>
            {children}

        </CartContext.Provider>
    )

}