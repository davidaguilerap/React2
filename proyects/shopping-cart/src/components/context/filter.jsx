
import { createContext, useState } from "react";
//1creamos contexto, esta pararte es la que se va a consumir
export const FiltersContext = createContext()
//2creamos el proveedor lo que ponemos aqui es lo que dao provee al consumir lo de arriba

export function FiltersProvider ({children}){
    const [filters,setFilters] = useState(
            {
            category:'all',
            minPrice:0
            }
    )
    
    return(
        <FiltersContext.Provider value={
            {filters,setFilters}}>
            {children}
        </FiltersContext.Provider>
        )
}
//Como queremos en este caso podr acceder al filtro desde toda nuestra app
//iremos al main.jsx y envolveremos toda la aplicacion en el(ir para ver)