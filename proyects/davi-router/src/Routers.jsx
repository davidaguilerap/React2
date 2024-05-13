import { useState,useEffect,Children } from "react"
import {EVENT} from './const.jsx'
//hay que hacer un install
import {match} from 'path-to-regexp'
import { getCurrentPath } from "./util.jsx"





export function Router({children,routes =[], defaultComponent:DefaultComponent = ()=>{null}}){
    const [currentPath,setCurrentPath] = useState(getCurrentPath)
    useEffect(()=>{
      const onLocationChange =()=>{
        setCurrentPath(getCurrentPath)
      }
      window.addEventListener(EVENT.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENT.POPSTATE, onLocationChange)
      return ()=>{
        window.removeEventListener(EVENT.PUSHSTATE,onLocationChange)
        window.removeEventListener(EVENT.POPSTATE,onLocationChange)
    }
    },[])
    let routeParams={}
    const routesFromChildren= Children.map(children,({props,type})=>{

      const {name} =type
     
      const isRoute= name === 'Route'
      if (!isRoute) return null
      return props
    
    })
    
    const routeToUse=routes.concat(routesFromChildren).filter(Boolean)
  
    const Page= routeToUse.find(({path})=> {
        if (path=== currentPath) return true
        //usamos path-to-regexp para detectar rutas dinamicas
        //decodeURIComponent metodo nativo que parsea lo que viene de la barra de direcciones
        const matchedUrl=match(path, {decode:decodeURIComponent})
        const matched = matchedUrl(currentPath)
        if (!matched) return false
        //guardamos los parametros de la url que son dinamicos
        routeParams =matched.params //query: 'javasript' // /search/javascript
        
        return true

        })?.Component
    
       
    return Page ? <Page routeParams={routeParams}></Page> : <DefaultComponent></DefaultComponent>
    }
    
  