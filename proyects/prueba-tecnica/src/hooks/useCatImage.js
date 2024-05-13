// esto es lo q se llama un custom hook se combierte en una caja negra a usar
//no puede estar dentro de condicionales if, while, etc al igual que los otros como useEffect o useState
//tiene q empezar por use
import { useEffect, useState } from "react"
const CAT_PREFIX_URL ='https://cataas.com'

export function useCatImage({fact}){
    const [imgUrl,setimgUrl] =useState()
   

    useEffect(()=>{

        if (!fact) return
        const threeFirsttWords = fact.split(' ',3).join(' ')
        fetch(`https://cataas.com/cat/says/${threeFirsttWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const {url} = response
                console.log(url)
                setimgUrl(url)

            })
   
        //solo se ejecutara cuando el fact cambie
    },[fact])
    

    return {imgUrl : `${CAT_PREFIX_URL}${imgUrl}`}//estos return se usan para en caso de que queramos devolver varios parametros

}//{imgUrl https//..}