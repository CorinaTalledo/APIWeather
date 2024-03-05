export const Cairns = JSON.parse(
  `{
    "coord":{
      "lon":145.7667,
      "lat":-16.9167
    },
    "weather":[
      {
        "id":804,
        "main":"Clouds",
        "description": "nubes",
        "icon":"04n"
      }
    ],
    "base":"stations",
    "main":
      {
      "temp":22.63,
      "feels_like":22.93,
      "temp_min":21.15,
      "temp_max":22.97,
      "pressure":1014,
      "humidity":76
    },
    "visibility":10000,
    "wind":{
      "speed":2.57,
      "deg":160
    },
    "clouds":{
      "all":100
    },
    "dt":1698607759,
    "sys":{
      "type":1,
      "id":9490,
      "country":"AU",
      "sunrise":1698608409,
      "sunset":1698654056
    },
    "timezone":36000,
    "id":2172797,
    "name":"Cairns",
    "cod":200
  }`
);

export const Londres = JSON.parse(
  `{"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":804,"main":"Clouds","description":"nubes","icon":"04n"}],"base":"stations","main":{"temp":9.97,"feels_like":7.32,"temp_min":8.58,"temp_max":11.19,"pressure":992,"humidity":90},"visibility":10000,"wind":{"speed":5.66,"deg":200},"clouds":{"all":98},"dt":1698607510,"sys":{"type":2,"id":2006068,"country":"GB","sunrise":1698562071,"sunset":1698597626},"timezone":0,"id":2643743,"name":"London","cod":200}`
);

export const Denver = JSON.parse(
  `{"coord":{"lon":-104.9847,"lat":39.7392},"weather":[{"id":804,"main":"Clouds","description":"nubes","icon":"04d"}],"base":"stations","main":{"temp":-3.41,"feels_like":-5.35,"temp_min":-5.52,"temp_max":-1.2,"pressure":1032,"humidity":73},"visibility":10000,"wind":{"speed":1.34,"deg":10,"gust":3.58},"clouds":{"all":99},"dt":1698607828,"sys":{"type":2,"id":2004334,"country":"US","sunrise":1698585893,"sunset":1698624134},"timezone":-21600,"id":5419384,"name":"Denver","cod":200}`
);

var cities = [Londres, Cairns, Denver];

export default cities;
