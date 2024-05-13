/* eslint-disable react/prop-types */
export function SearchPage({routeParams}){
 //aqui podemos hacer un fetch routeParams.query para que recuperede una api
 
 return(<>
    <h1>Buscador</h1> 
    <h2>Has buscado {routeParams.query}</h2>
 </>)
}