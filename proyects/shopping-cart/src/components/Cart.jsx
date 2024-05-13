import './Cart.css'
import { useId } from "react";
import { ClearCartIcon, CartIcon } from "./Icons";
import { useCart } from './hooks/useCart';
import { Products } from './Products';


export function Cart () {
    const CartCheckBoxid = useId()
    const {cart,clearCart,addToCart} = useCart()

    function CartItem({thumbnail,price,title,quantity,addToCart}){
        return(
            
            <li>
                <img src={thumbnail}
                alt={title}>
                </img>
                <div>
                    <strong>{title}</strong>- ${price}
                </div>
            
            <footer>
                 <small>
                    Qty:{quantity}
                </small>
                <button onClick={addToCart}> +</button>
            </footer>
            </li>

        )
    }


    return(
        <>
        
        <label className="cart-button" htmlFor={CartCheckBoxid} >
            <CartIcon></CartIcon>
        </label>
        <input id={CartCheckBoxid} type="checkbox" hidden></input>
        <aside className='cart'>
            <ul>
                {cart.map((item)=>{
                    
                    return(<CartItem key={item.id}
                        thumbnail={item.thumbnail} price={item.price} title={item.title} quantity={item.quantity} addToCart={()=>{
                            addToCart(item)}}
                    ></CartItem>)
                })}
            </ul>
            <button onClick={()=>{clearCart()}}>
                <ClearCartIcon></ClearCartIcon>
            </button>
        </aside>
        </>
    )
}