/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { ClimateInfo } from './CurrentWeatherStyles';

function CurrentWeather({ climate }) {
  return (
    <ClimateInfo>
      <h3>{climate.name}</h3>
      <img src={`http://openweathermap.org/img/wn/${climate.weather[0].icon}.png`} alt={climate.weather[0].description} />
      <p>{climate.main.temp}ºC</p>
      <p>{climate.weather[0].description}</p>
    </ClimateInfo>
  )
}

export default CurrentWeather