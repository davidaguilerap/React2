import { Link } from "../Links";


export function Page404(){
    return(
     <div>
        <div>
            <h1>Error 404</h1>
            <img src="https://midu.dev/images/this-is-fine-404.gif"></img>
        </div>
        <div>  
            <Link to='/'> Volver a la home</Link>
        </div>
    </div>   
    )
}