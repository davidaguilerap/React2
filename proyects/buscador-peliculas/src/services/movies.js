const API_KEY='645239f'

export const searchMovies = async ({search}) => {
    //aqui vamos ausar async await pero podriamos hacerlo sin el

    if (search==='') return null
    try{
        const response= await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json= await response.json()
        const movies =json.Search
        return movies?.map(movie =>
            (
              {
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster,
                type: movie.Type,
              }
        
            ))

    }catch(e){
        throw new Error ('Error searching movies')

  
    }
}