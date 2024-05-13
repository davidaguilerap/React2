
import './App.css'
import { useCallback, useEffect, useRef, useState } from 'react'  //permite crear una referencia mutable que persiste durante toda la vida del componente y no se vulve a renderizar (como si hace use state y con eso se reinicia todo)
import {useMovies} from './hooks/useMovies.js'
import {Movies} from './components/Movies'
import debounce from 'just-debounce-it' // para hacer esto primero pnpm install just-debounce-it -E
//import withoutResults from '../mocks/no_result.json'
export function useSearch(){

  const [search,setSearch]= useState('')
  const [error,setError]=useState(null)
  
  const isFirstInput=useRef(true)

  useEffect(()=>{
    //validacion con effect
    if (isFirstInput.current){
      //esto es una condicion que evalua si query viene vacio y pone un true
      //en caso q no se cumpla la condicion pone un false en isFirstInput.current
      isFirstInput.current = search === ''
      return
    }

    if (search.startsWith(' ')) return
    if (search===''){
      setError('No se puede buscar peliculas vacias')
      return
    }
    if (search.length < 3){
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    if (search.match(/^d+$/)){
      setError('No se pueden buscar peliculas con un número')
      return
    }
    setError(null)

  },[search])
  return {search,setSearch,error}
}



function App() {

  
 
  //usamos esto para suar el UseRef para ello tendriamos que usar tb el input con el ref
  // const inputRef = useRef()
  // const handleSubmit=(event)=>{
  //   event.preventDefault()
  //   const inputEl = inputRef.current //el current es propio javascript para acceder 
  //   // const value =inputEl.value
  //   console.log(value)
  // }

  //voy a indicar aqui otra forma de de tomar los datos del form sin usar el ref 
  //esta toma de datos es una forma de hacerlo que se llama no controlada ya que react no es quien controla esto
  // const handleSubmit = (event)=>{
  //   event.preventDefault()
  //   //con esto lo que obtenemos es un objeto con todas las entradas del formulario
  //   // const fields= Object.fromEntries(new window.FormData(event.target))
  //   // console.log(fields)
  //   //en este caso como solo queremos el campo query lo desestructuramos de esta forma para conseguirlo
  //   const {query}= Object.fromEntries(new window.FormData(event.target))
  //   console.log(query)
  //   //podemos controlar aqui lo que queramos como un error
  //   // if (query === ''){
  //   //   setError('No se busca nada')
  //   // }
      
    
  // }

  ///vamos a usar la forma controlada con react que permite hacer validaciones de mejor forma, pero que tambien es mucho mas lento ya que
  //cada vez que escribimos

  const {search,setSearch,error}=useSearch()
  const [sort, setSort]= useState(false)
  const {movies,getMovies, loading,errorMovie} = useMovies({search,sort})
  //para llamar al debounce usamos el usecallback para que no se rehega cada vez que escribimos
  //de este modo solo ejecuta una debounce y se actualiza cuando pasamos el search
  const debounceGetMovies = useCallback(
    debounce(search =>{//debounce ejecuta esto manteniendo una espera de 300 milisegundos
      getMovies({search})
      },300
  ),[]
  )

  const handleChange = (event)=>{
    const newSearch=event.target.value
    setSearch(newSearch)
    //añadimos esto para hacer que cada vez que pulsemos una tecla haga una busqueda
    //getMovies({search:newSearch})// con esto tenemos un problema y es q siempre va a hacer una llamada a la api y puedo hacer que una llamada de las que hagamos
    // termine despues de la ultima y los resultados no sean correntos
    debounceGetMovies(newSearch)



    //se puede hacer aqui la validacion o con un efecto
    //el problema de hacerlo aqui es que el evento es asincrono por lo que llegaria tarde si tomamos query,
    //para tomar el bueno deberiamos hacer algo como
    //para que funcione bien deberiamos no tomar el query en si sino hacer esto
    // const newquery = event.target.value
    //de esta forma en vez de usar el query como en el effect usamos este newquery
    // if (newquery===''){
    //   setError('No se puede buscar peliculas vacias')
    //   return
    // }
    // if (newquery.length < 3){
    //   setError('La busqueda debe tener al menos 3 caracteres')
    //   return
    // }

    // if (newquery.match(/^d+$/)){
    //   setError('No se pueden buscar peliculas con un número')
    //   return
    // }

  }

  const handleSubmit =(event)=>{
    event.preventDefault()
    // aqui añadimos el search al poner para q se pase el parametro en useMovies
    getMovies({search})

  }

  const handleSort =()=>{
    setSort(!sort)
  }

  useEffect(()=>{
    console.log('nuevo get movies')
  },[getMovies])
  
  useEffect(()=>{
    console.log(errorMovie)
  },[errorMovie])

  return (
    <div className='page'>
    <header>
      <h1>Buscador de peliculas</h1>
      <form className='form' onSubmit={handleSubmit}>
        {/* <input ref={inputRef} placeholder='Avengers, StarWars, The Matrix ...'> */}
        {/* <input name='query' placeholder='Avengers, StarWars, The Matrix ...'> este se unsa para tomar las valores sin react propiamente */}
        
        <input onChange={handleChange} value={search} name='search' placeholder='Avengers, StarWars, The Matrix ...'>
        </input>
        <input type='checkbox' onChange={handleSort} checked={sort}></input>
        <button type='submit'>Buscar</button>
      </form>
      {error && <p className='error' style={{color:'red'}}>{error}</p>}
    </header>
    <main>
  
      {
        loading ? <p> Cargando...</p> : <Movies movies={movies}></Movies>
      }
        
        
      
    </main>
    </div>
  )
}

export default App
