import './Footer.css' 
import  {useFilters}  from './hooks/useFilters.jsx'
import  {useCart}  from './hooks/useCart.jsx'

export function Footer () {
    const {filters} =useFilters()
    const {cart} =useCart()
    return(
        <footer className='footer'>
            {/* {JSON.stringify(filters, null,2)}
            {JSON.stringify(cart, null,2)} */}

            {/* <h4>Prueba</h4>
            <span>David Aguilera</span>
            <h5>Carro de compra useContext, 
                useId, useReduce</h5> */}
        </footer>
    )
}