Prueba técnica para Juniors y Trainees de React en Live Coding.
APIs:

Facts Random: https://catfact.ninja/fact

Imagen random: https://cataas.com/cat/says/hello

    Recupera un hecho aleatorio de gatos de la primera API

    Recuperar la primera palabra del hecho

    Muestra una imagen de un gato con la primera palabra.


    ---endpoint para usar
      `https://cataas.com/cat/says/hello?size=50&color=red&json=true`
      --usaremos la variable para cambiar la palabra de la imagen
         `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`




primeramente crearemos un proyecto reac desde un de java porque en la prueba quieren ver como
creas el punto de entrada

para ello npm create vite@latest y lo crearemos con javascript en vez de react.

luego instalaremos el plugin de react con 

    npm install @vitejs/plugin-react -E

seguidamente instalaremos las dependencias reac y react dom

    npm install react react-dom -E

despues debes crear el vite.config.js ir al que he creado y ver lo que hay que poner

seguidamente tendremos que ir al main.js que es el que se llama en el index y escribir esto

    import { createRoot } from 'react-dom/client'

    const root = createRoot(document.getElementById('app'))

    root.render(<h1>Hola mundo</h1>)

si intentamos echar a andar la aplicacion con npm run dev no andara porq no puede echar a andar un .js
el plugin de vite no esta preparado para ello, pero simplemente tendremos q renombrar el main.js a main.jsx
que es como lo vamos a ver ahora mismo porq el programa deberia estar funcionando.

Recueda que en el index.html tambien tenemos q cambiarlo

instalar el linter npm install standard -D
en el archivo package.json escribir lo siguiente

  "eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }

crearemos la carpeta src y dentro de ella App.jsx


