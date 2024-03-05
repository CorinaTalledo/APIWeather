export default function Card({name, temp, st, humedad, lluvia, img, desc, onClose, id}) {

  return <>

    <h2>{name}</h2>

    <button onClick={() => onClose(id)}>X</button>

    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />

    <p>Temp: {temp}</p>
    <p>ST: {st}</p>
    <p>{desc}</p>
    <p>Humedad: {humedad}</p>
    <p>Lluvia: {lluvia}</p>

  </>;
}
