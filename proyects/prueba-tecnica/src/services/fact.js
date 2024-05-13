//esta direccion ofrece un fact solo con texto
const CAT_ENDPONT_RANDOM_FACT = `https://catfact.ninja/fact`
//modo con then mirar los set q es como estaba antes de separarlo de la funcion original
// export const getRandomeFact =() =>{
//     return fetch(CAT_ENDPONT_RANDOM_FACT)
//         .then(res =>{
//             if ( !res.ok) throw new Error('Error fetching fact')
//             return    res.json()})
//         .then(data => {
//             const {fact} = data
//             //setFact(fact)
//             console.log(fact)
//             })
//         .catch((err) =>{
//             //maneja error en la respuesta o en la peticion
//             //setError(err)
//             return err
//         }) 
// }

//relacilado con async awaits
export const getRandomeFact =async () =>{

    const res = await fetch(CAT_ENDPONT_RANDOM_FACT)
    if (!res.ok) throw new Error('Error fetching fact')
    const data = await res.json()
    // esto es desetructuracion lo que hace es sacar el fact que se encuentra delntro del data
    const  {fact}  = data
    //setFact(fact)
    return fact
      
}