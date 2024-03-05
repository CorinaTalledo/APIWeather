import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


/*
PROPS: Son objetos que sirven para pasar info de un componente al otro.

En el componente padre:
- Dentro de la etiqueta del componente al que se lo vamos a pasar, hay que poner:
  - Una "key": por ejemplo "nombre"
  - Un "valor": por ejemplo "Corina"
  - Se puede agregar la cantidad de props que sean necesarias.
  
- Si el valor de la key NO es un string como por ejemplo es un numero, buleano o array de objetos, etc., hay que poner ese valor entre llaves ya que sino react lo va a tomar como si fuera un string.


En el componente hijo:
- Dentro de los parentesis de la funcion (al lado del nombre del componente):
  - Ahi se pone el nombre con el que se va a identificar adentro de ese componente, seria como el nombre del objeto, por ejemplo "persona" y entre llaves.
  - Igualmente, la mejor practica es poner entre parentesis los nombres de los keys.
  - Luego, en la etiqueta html que vayamos a usar dentro del objeto, para usar lo que esta adentro del objeto, hay que poner entre llaves el nombre de la key o sea lo que acabamos de escribir entre llaves adentro del parentesis del nombre de la funcion.

En este caso, si estas key y values se pudieran poner como un objeto seria:
persona{
  nombre: Corina
  apellido: Talledo
}

----------------------------

COMO RECORRER UN ARRAY: Usamos el metodo MAP para un array (por ejemplo una base de datos que tenemos)
1. Abrir llaves ya que es de js.
2. Metodo map es:  
  - (nombreDelArray).map(nombreDelArray => nombreDelComponente)
  - {personas.map((persona) => <Card />)}
  - Lo que estamos diciendo es que necesitamos mapear el array de personas y que por cada persona me retorne (por eso la flecha) el componente Card (que es donde estaria la estructura o maqueta).
  - Dentro de la etiqueta del componente, es donde vamos a poner las keys y values de las props. De esa manera le estamos diciendo que cuando cree cada card, utilice directamente esos valores del objeto sin necesidad de que tengamos que escribir cada cosa.
  - Si o si, uno de esas props tiene que ser una key ya que sino va a salir un error. Puede utilizarse el crypto.randomUUID() para que se genere automaticamente o puede ser "i" para que muestre el indice del array

------------------------------------------------

FUNCIONES EN REACT: La declaracion de la funcion se hace por afuera del return mientras que la ejecucion, se pide por adentro del return y de la etiqueta que corresponda.

- AFUERA DEL RETURN: 
  - Se escribe el codigo de lo que queres que la funcion haga
  - Ejemplo: 
      function saludar(){
        console.log("Hola")
      }

- ADENTRO DEL RETURN Y EN LA ETIQUETA QUE QUEREMOS QUE EJECUTE ESA FUNCION: 
  - <button onClick={saludar} />
  - No hay que poner los () dentro del componente ya que sino se va a ejecutar sin que se haga el click inicial.
  - Si para que funcione, necesita algo, como un id por ejemplo, dentro de las llaves del onclick se crea una funcion flecha >> onclick={() => saludar(id)}. En este caso, la funcion flecha le dice que espere al click y cuando se ejecuta busca el id.


- La funcion se puede poner tanto en el componente hijo como en el componente padre pero va a depender de si se quiere reutilizar esa funcion. Por ejemplo, una funcion que cierra una ventana o elimina un dato, etc. posiblemente se vaya a utilizar en mas de un componente. En ese caso conviene ponerlo en app.

- Las preguntas de guia serian:
  - En donde necesito la info?
  - Cuantos componentes la van a necesitar?
  

-------------------------------------------

HOOKS: Son funciones que agregan funcionalidades interesantes a los componentes

1) USE STATE: Crea un ESTADO que se podra modificar luego
    - Para poder usarlo en el componente hay que importarlo >> import {useState} from "react".
    
    - Como creo un estado: 
      - const [estado, modificadorDelEstado] = useState(valorDeInicioDelEstado)
      - Lo que le estoy diciendo es: Creame un estado y guardalo y PRESTA ATENCION para que cuando se modifique ese estado, lo pueda ver. El modificador ACTUALIZA el estado.

      - Ej: const [count, setCount] = useState(1)

            function sumar(){
              setCount(count + 1)
            }

        - Llamamos al modificador (setCount) que es el que esta prestando atencion por si se modifica algo en el estado (count) y entre parentesis le indicamos qué y cómo se va a modificar (count + 1)

        - Aca lo que estamos diciendo es guardame el estado de count que inicialmente va a ser 1. Luego en la funcion sumar agarramos al modificador y le decimos che vos, actualizate haciendo lo siguiente: count +1.

        - Entonces cada vez que se apriete el boton que suma, y actualiza el estado para que lo podamos ver.


    - COMO AGREGAR VALORES A UN ARRAY CON USE STATE:
      - Creo el useState para que se guarde la informacion
      - Adentro de la funcion y del setPersonas vamos a crear un array que adentro contenga UNA COPIA del array original (con el spread operator), y luego le sumamos lo que querramos sumar.

        - Ej: const [personas, setPersonas] = useState ([
            {
              nombre = "Coco"
              id = 1
            },
            {
              nombre = "Guille"
              id = 2
            },
            {
              nombre = "Sol"
              id = 3
            }
          ])

            function nuevaPersona(){
              setPersonas([...personas], {nombre = "Jime", id: crypto.randomUUID()})
            }


    - COMO ELIMINAR VALORES DE UN ARRAY: Usamos filter

        function eliminarPersona(){
              setPersonas(personas.filter((persona) => persona.id !== idPersona))
            }
        
        Aca le estamos diciendo filtrame el array original (personas). Lo que va a hacer es buscar el id de cada persona y ver que NO coincida con el id que estamos pasando (idPersona). 
        
        De esa manera, filter nos va a crear un nuevo array en el que esten todas las personas cuyo id NO HAYA coincidido con el id que pasamos, por ende, se va a haber "eliminado" el que SI coincide.

    
    - COMO CREAR UNA NUEVA KEY CON VALOR ADENTRO DE UN OBJETO (suelto):
      
      const [persona, setPersona] = useState({
        nombre: "Guille",
        edad: 31
      })
      
      function agregarDato(){
        setPersona(...persona, profesion: "Programador")
      }
      

    - COMO CAPTURAR EL EVENTO DE ESCRITURA EN UN INPUT: Como hicimos en el tp de memes que el input estaba vacio y debia reflejarse en una p o h2, que sea.


      - AFUERA DEL RETURN:
      
          const [valorInput, setvalorInput] = useState("")  -----------> El valor empieza vacio
          
          function handleInput(e){
            setvalorInput(e.target.value)  ---------> esto capta el valor de cada evento, o sea cada letrita que se escribe
          }


      - ADENTRO DEL RETURN: 

          <h1>{valorInput}</h1> ----------> Estamos queriendo mostrar en el h1 lo que diga el input en ese momento

          <input onChange={handleInput} />  ------------> onChange es el nombre del evento y llama a handleInput que es la funcion responsable de capturar cada evento, o sea cada letrita. Hay dos maneras de llamar a la funcion con el uso de la E:
            1. Pasando el evento (e) solo en la funcion y en el onClick/onChange solo pasar el nombre de la funcion ya que entiende que se usa la e.

            2. Pasando el evento (e) en la funcion y en la funcion flecha (en todos lados) >> Si bien esta es mas simple, puede llegar a ser confuso cuando necesitemos otro dato. onChange={() => nombreFuncion()}

*/


