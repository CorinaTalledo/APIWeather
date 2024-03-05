
import { useState } from "react";

export default function SearchBar({ onSearch }) {

const [nameCity, setNameCity] = useState("")  /* Creando el estado al input */

  const handleInput = (e) =>{
    setNameCity(e.target.value)
  }

  const handleClick = (e) =>{
    e.preventDefault();
    onSearch(nameCity);
  }

  return <div>

    <form action="" onSubmit={(e) => handleClick(e)}>
      <input type="text" onChange={(e) => handleInput(e)}/>
      <button type="submit">Buscar 🔍</button>
    </form>

  </div>;
}
