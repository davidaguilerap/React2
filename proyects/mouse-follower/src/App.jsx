import { useEffect, useState } from 'react'
const FollowMouse = (()=>{
   const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0 , y: 0})
  useEffect(()=>{
    console.log('effect' ,{enabled})

    const handleMove = (event) =>{
      const {clientX,clientY} = event
      setPosition({x: clientX, y:clientY})
    }
    console.log(position)

    if (enabled){
      window.addEventListener('pointermove', handleMove);

    }
    //al finalizar hay q limpiar las suscripciones a eventos
    //ya que si no no dejaria de seguir el raton y se sobreescribirian una encima de otra
    //para ver las suscripciones usar getEventListeners(window)
    return () =>{//siempre se ejecuta justo antes de volver a activar el efecto
      window.removeEventListener('pointermove',handleMove) 
    }
  

  }, [enabled])

  useEffect(()=>{
    document.body.classList.toggle('no-cursor', enabled)
  return () =>{
    document.body.classList.remove('no-cursor')
  }

  }, [enabled])

  return (
    <>
        <div style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
        />


      
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} Seguir el puntero
      </button>
   </>
  )

})
function App() {
 


  return (
    <main>
        <FollowMouse></FollowMouse>
   </main>
  )
}

export default App
