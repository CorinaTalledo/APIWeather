import Card from "./Card";

export default function ContainCard({ cities, cerrar }) {

  return <>

    {cities.map((city) => (
      <Card
        key={city.id}
        name={city.name}
        img={city.weather[0].icon}
        temp={city.main.temp}
        desc={city.weather[0].description}
        st={city.main.feels_like}
        humedad={city.main.humidity}
        lluvia={city.clouds.all}

        onClose={cerrar}
        id={city.id}
      />))}

  </>;
}
