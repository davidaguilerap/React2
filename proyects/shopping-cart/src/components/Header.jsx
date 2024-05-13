import {Filters} from './Filters.jsx'

// export function Header({changeFilters}){
export function Header(){
    return(
        <header>
            <h1>Rect Shop</h1>
            {/* hemos pasado changefilters entero que contiene setfilter */}
            {/* <Filters onChange={changeFilters}></Filters> */}
            <Filters></Filters>
        </header>
    )
}