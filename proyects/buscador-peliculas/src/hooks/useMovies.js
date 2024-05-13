import { useRef, useState,useMemo,useCallback } from 'react'
// import whitResult from '../mocks/with_result.json'
// import whitoutResult from '../mocks/no_result.json'
import { searchMovies } from '../services/movies'

export function useMovies({search, sort}){
  
    
    const [movies,setMovies]= useState([])
    const [loading,setLoading] =useState(false)
    const [errorMovie,setErrorMovie] =useState(null)
    const previusSearch =useRef(search)
    //este Search hace referencia al json

    // const getMovies= async()=>{
    //   //con esto evitamos que se vuelva a buscar si ya fue buscado previmente
    //   if (search===previusSearch.current) return
    //   try{
    //     setLoading(true)
    //     setError(null)
    //     previusSearch.current=search
    //     const newMovies = await searchMovies({search})
    //     setMovies(newMovies)
        
    //   }catch(e){
    //     setError(e.messege)

    //   }finally{
    //     setLoading(false)

    //   }
      
    // } 


    //  si usamos el usememo con getMovies esto hace que la funcion se cree cuando el search cambie
    // es decir que no se ejecutara cuando ordenemos

      //  const getMovies= useMemo(()=>{
      //   return async()=>{
      //     //con esto evitamos que se vuelva a buscar si ya fue buscado previmente
      //     if (search===previusSearch.current) return
      //     try{
      //       setLoading(true)
      //       setError(null)
      //       previusSearch.current=search
      //       const newMovies = await searchMovies({search})
      //       setMovies(newMovies)
            
      //     }catch(e){
      //       setError(e.messege)
    
      //     }finally{
      //       setLoading(false)
    
      //     }
      //  }
      // },[search])


    // para poder hacer que la funcion solo se cree una vez debemos  pasar el search por parametros, y eliminarlo del los corchetes
    //recodar que en la llamada del main.jsx tenemos que pasarle el parametro
    //este tipo de practicas es buena en caso de que tengmaos un problema de rendimiento
    
      // const getMovies= useMemo(()=>{
      //   return async({search})=>{
      //     if (search===previusSearch.current) return
      //     try{
      //       setLoading(true)
      //       setErrorMovie(null)
      //       previusSearch.current=search
      //       const newMovies = await searchMovies({search})
      //       setMovies(newMovies)
            
      //     }catch(e){
      //       setErrorMovie(e.messege)
    
      //     }finally{
      //       setLoading(false)
    
      //     }
      //  }
      // },[])
    
    // ahora bien para simpliflicar lo que hemos hecho arriba, usaremos el useCallback
    //seria lo mismo que useMemo pero pensado para funciones, por lo que quedaria de la siguiente forma, mas simplificado

    const getMovies= useCallback( 
      async({search})=>{
        if (search===previusSearch.current) return
        try{
          setLoading(true)
          setErrorMovie(null)
          previusSearch.current=search
          const newMovies = await searchMovies({search})
          setMovies(newMovies)
          
        }catch(e){
          setErrorMovie(e.messege)
  
        }finally{
          setLoading(false)
  
        }
     },[]
     ) 


   
    //useMemo lo que hace es que las cosa que lo almacema se vuelve a ejecutar cuando cambia lo que hay entre los corchetes en
    //este caso solo se volvera a ejecutar cuando cambien el sort y el movies
    
    const sortedMovies =useMemo(()=>{//funcion anonima dentro del useMemo
      //con esto ordenamos las peliculas por titulo con el sort, lo que hace es comparar un obejto a con un objeto b
      console.log('MemoSortedMovies')
      return sort ? [...movies].sort((a,b)=>a.title.localeCompare(b.tittle)) : movies

    },[sort,movies])
    
    
      
    return {movies: sortedMovies, getMovies, loading, errorMovie}
  }