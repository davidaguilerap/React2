/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
export function ListOfMovies({ movies }) {

    return (
        <ul className="movies">
        {
            // eslint-disable-next-line react/prop-types
            movies.filter(movie => movie.type =='movie').map(movie =>
            (
                
                <li className="movie" key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={movie.title} />
                </li>
            
            
            ))
        }

        
        </ul>
    )
}

export function NoMoviesResults(){

    return(
        <p>No se encontraron peliculas para esta busqueda</p>
    )
}

export function Movies({movies}){
    
    const hasMovies =movies?.length > 0

   return( hasMovies 
        ? (
           
          <ListOfMovies movies={movies}></ListOfMovies>
              
          ) :
          (
            <NoMoviesResults></NoMoviesResults>
          )
   )
}