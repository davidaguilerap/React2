import './Filters.css'
import {useId} from 'react'
import { useFilters } from './hooks/useFilters'

// export function Filters({onChange}){
export function Filters(){
    // al quitar el setMinPrice esto carece de sentido
    //const [minPrice,setMinPrice]= useState(0)
    const minPriceFilterId=useId()
    const categoryFilterId=useId()
    const {filters,setFilters} = useFilters()

    const handleChangePrice= (event) =>{
        //tomar el rpecio de aqui daara lugar a errores por lo que lo traeremos del contexto usefilters
        //asi que comentamos esto del return  indicamos filters.minprice
        //setMinPrice(event.target.value)


        //lo que hacemos aqui es que la funcion onchage que contiene el setFilter
        //hacemos una copia de lo que contiene y sustituimos el parametro por por el valor actual
        //ahora bien esto no esta bien por que tenemos dos fuentes de la verdad
        // onChange(prevState=>({
        //     ...prevState,
        //     minPrice :event.target.value

        // }))

        setFilters(prevState=>({
            ...prevState,
            minPrice :event.target.value

        }))
    }

    const handleCategory = 
   (event)=>{
    
    //el problema de esto igual que el anterior es que estamos pasando la funcion nativa de react
    // a un componente hijo
        
    //esta funcion flecha lo que hace es que lo que envuelve entre parentesis es lo que devuelve
    //equivale al return, omite enteramente el cuerpo
        // onChange(prevState=>({
        //     ...prevState,
        //     category :event.target.value

        // }))
        setFilters(prevState=>({
            ...prevState,
            category :event.target.value

        }))

    }
    return(
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>PRecio a partir de:</label>
                <input type="range" 
                        id={minPriceFilterId}
                        min='0'
                        max='1000'
                        onChange={handleChangePrice}  
                        value={filters.minPrice}
                        >
                          
                </input>
                <span>${filters.minPrice}</span>

                
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                    <select id={categoryFilterId} onChange={handleCategory}>
                        <option value='all'>Todas</option>
                        <option value='laptops'>Portátiles</option>
                        <option value='smartphone'>Móviles</option>

                    </select>

               
            </div>
        </section>
    )

}