// import data from "./data.js"; >> Ya no nos sirve porque vamos a buscar la info en la api
import ContainCard from "./components/ContainCard.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";

function App() {

  const [cities, setCities] = useState([]) /* Cambiamos a data (daots hardcodeados) por un array vacio porque la informacion va a venir de una api (con mas datos)*/

  const search = (nameCity) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&units=metric&lang=es&appid=1c1e50556f458e5b79aec0ba2e35de1e`)  /* Va a buscar toda la info a la api en formato http con el cual NO podemos trabajar */

      .then(r => r.json())  /* Llega la rta y la traducimos a json para poder leerla */
      .then((cityApi) => {    /* Empezamos a trabajar con la info ya "traducida" */
        if(cityApi.main !== undefined){  /* Le estoy preguntando a la api si la ciudad existe. Si es distinto a undefined, entonces la ciudad existe */

          setCities([...cities, cityApi]); /* Si existe el nombre de la ciudad en la api, hace esto */
        } else {
          alert("Ciudad no encontrada"); /* Si no existe tira un alert */
        }
      });
  };


  const onClose = (id) =>{
    console.log(cities.filter((city) => city.id !== id));
    setCities(cities.filter((city) => city.id !== id))
  }


  return (
    <div>
      <Nav onSearch={search}/>

      <ContainCard cities={cities} cerrar={onClose} />  
    </div>
  );
}

export default App;


/*

- Cerrar es una prop entonces solo llamamos a la funcion. Sin flecha porque eso va en el evento (onClick) 

- En vez de pasar cities={data}, como data ahora entra inicialmente por el estado, lo que le queremos pasar al contain card es el nombre del estado que contiene la data (ya que se puede modificar).

- setCities([...cities, ciudadEjemplo]) >> Al nuevo estado hay que decirle QUE TIPO DE DATO va a ser. Cities ya es un array de objetos, y ciudadEjemplo va a ser parte de ese array. Entonces hay que englobar ambos con corchetes (pues porque es array). Cuando se elimina algo (filter), no hay que ponerlo porque filter ya devuelve un array.

*/
