import {Link} from '../Links.jsx'
const i18n={
  es:{
    title:'Sobre nosotros',
    button:'Ir a la home',
    description: 'Buenas, me llamo David y estoy creando un clon de React Route'
  },
  en:{
    title:'About us',
    button:'Ir a la home',
    description: 'Hi mi name is David and i am creating a clone of React Router'
  }
}
const usei18n=(lang)=>{
  return i18n[lang] || i18n.en
}

export default function AboutPage({routeParams}){
    console.log(routeParams)
    const ui18n=usei18n(routeParams.lang ?? 'es')
    return(
    <div>
      <h1>{ui18n.title}</h1>
        <div>
        <img src='https://media.licdn.com/dms/image/C4E03AQGOU63CBodzow/profile-displayphoto-shrink_800_800/0/1624446838360?e=1706140800&v=beta&t=fsg37-kJPu1gxwKCw6FvK3xhYO_T35mfP78pcV5w7XI'></img>
        <p>{ui18n.description}</p>
      </div>
      <Link to='/'>{ui18n.button}</Link>
  
    </div>
    )
  }