import { useEffect, useState } from "react"
import './App.css' 

import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"
import { Otro } from "./components/Otro"



//const CAT_ENDPOINT_IMAGE_URL=`https://cataas.com/cat/says/${threeFirsttWords}?size=50&color=red&json=true`




export function App () {
    
    //aqui llamamos al custom hook
    const {fact,refreshFact,factError}=useCatFact()
    
    const {imgUrl} = useCatImage({fact})
    
    //para recuperar cita al cargar la pagina
    // a los useEffect se le puede pasar una funcion, sustituyendola por la anonima

    
    // useEffect(()=>{
    //     //se puede hacer asi esperando la respuesta y luego pasando la ejecucion de lafuncion y la respuesta q recoge
    //     getRandomeFact().then((newFact)=>{setFact(newFact)})
    //                     .catch((err)=>{setError(err)})
    // },[]) 


    //para cargar la imagen cuando tenga una cita nueva

    const handleClick = async () =>{
       refreshFact()
        
    }
    //si añadimos en el retunr <Otro></Otro> veremos que pone otra imagen con el componente que hemos creado

    return(

        <main>
        <h1>App de gatitos</h1>
        <button onClick={handleClick}>Refresca la pantalla</button>
        {//renderizado condicional
        }
        <section>
         
        {fact && <p>{fact}</p>}
        
        {factError && <p>{factError}</p> }
        {imgUrl && <img src={imgUrl} alt={`imagen extraida de las tres primeras palabras de ${fact}`} ></img>} 
        {
            //he puesto Otro como ejemplo de que se puede sacar logica a un componente
        }
        
        </section>
        

       
        </main>
    )
}