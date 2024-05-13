Crea una aplicacion para buscar peliculas

        API a usar

        https://www.omdbapi.com
        api key: 645239f

        Requerimientos

        Necesita motrar un input para buscar la pelicla y un boton para buscar
        Lista las peliculas encontradas y muestra el titulo año y poster
        muestra peliculas en un grid responsive
        hacer fetching de los datos

        Primera iteracion

        Evista quese haga la misma busqueda dos veces seguidas
        Que la busqueda se automarice al escribir
        Evita que se haga la busqueda continuamente al escribir(debounce)




ahora despues del enunciado vamos a usar water.css

navegamos a https://watercss.kognise.dev/ y en el link https://cdn.jsdelivr.net/npm/water.css@2/out/water.css

navegamos hasta la pagina copiamos y lo ponemos en el index.css del proyecto lo que te dara un estilo minimo

he pedido una apikey de la pai, accedemos a la web y vemos como se usa en el search de forma q ve que para buscar resultados seria de la siguiente forma con nuestra api key


https://www.omdbapi.com/?apikey=645239f&s=Matrix

ponemos la s para buscar junto con nuestra api key
esto no devuelve un jsn que guardaremos en una carpeta mosk de forma que podamos darle estilos sin hacer el fetch

//importante--comentario
una cosa que esta bien hacerla es mapear los datos que te llegna de la bbdd para no estar usando por asi decirlo el contrato de la api
ya que si en algun momento se cambia la api, tendrias q cambiar en muchos sitios



UseMemo - almacena algo y lo mantiene, solo lo vuelve a rehacer cuando cambia lo que le especifiquemos en los corchetes
UseCallback- es lo mismo que useMemo pero para funciones
debounce - da una espera para la ejecucion de una determinada cosa para instalar uno podemos usar el de just angus npm install just-debounce-it o 
pnpm install just-debounce-it -E (para instalarlo de esta forma tendremos que tener pnp instalado, npm install -g pnpm) 



