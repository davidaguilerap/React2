import {EVENT} from './const.jsx'

export function navigate(href){
    //hace que no se recarge la pagina sino solo la url
  
    window.history.pushState({},'',href)
    //crear un evento personalizado para avisar q cambia la url
    const navigationEvent = new Event(EVENT.PUSHSTATE)
    //despacha el evento para que se pueda escuchar
    window.dispatchEvent(navigationEvent)
  }

  // eslint-disable-next-line react/prop-types
  export function Link({target,to, ...props}) {
    const handleClick=(event)=>{

        const isMainEvent =event.button === 0 //toma los clicks de la izquierda
        const isModifiedEvent = event.metaKey || event.altKey || event.crtlKey || event.shiftKey
        const isManageableEvent= target === undefined || target=== '_self' //controla el target=blank


        if(isMainEvent && isManageableEvent && !isModifiedEvent){
          event.preventDefault()
          navigate(to)
        }
    }
    //...props hace que se pasen todas las demas props que puedan contener
    return <a onClick={handleClick} href={to} target={target} {...props}/>
  }