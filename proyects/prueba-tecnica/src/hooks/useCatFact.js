import { useEffect, useState } from "react"
import { getRandomeFact } from "../services/fact"

export function useCatFact(){
    const [fact,setFact] = useState()
    const [factError,setError] =useState()
    const refreshFact =() =>{
        getRandomeFact().then(setFact)
                        .catch(setError)

    }

    useEffect(refreshFact,[]) 

    return {fact, refreshFact,factError}
} 