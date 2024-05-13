import { useCatImage } from "../hooks/useCatImage"

export function Otro () {
    //ejemplo para poder sacar un componente

    const {imgUrl} = useCatImage({fact :'Randome fact'})
    

    return(
        <div>

        { imgUrl && <img src={imgUrl}></img> }
        </div>

       
    )
}