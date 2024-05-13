
import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import {products as initialProducts} from '../src/mocks/products.json'
import { IS_DEVELOPMENT } from './config'
import  {useFilters}  from './components/hooks/useFilters.jsx'
import { Cart } from "./components/Cart.jsx"
import { CartProvider } from "./components/context/cart"



function App() {
  //const [products]=useState(initialProducts)
 const {filterProducts} =useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      {/* ponemos que el header tiene la propiedad changefilter y pasamos todo el setFilter */}
      {/* <Header changeFilters={setFilters}></Header> */}
      {/* procedemos a quitar el prop drilling o taladrado de props seguir la traza del header y products para ver lo que hemos cambiado*/}
      <Header></Header>
      <Cart></Cart>
      {/* <Products products={filteredProducts}></Products> */}
      <Products products={filteredProducts}></Products>
      {IS_DEVELOPMENT && <Footer></Footer>}
  
   </CartProvider>
  )
}

export default App
