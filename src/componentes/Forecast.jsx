/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { ForecastContainer } from "./ForecastStyles";

function Forecast({ forecast }) {
  return (
    <ForecastContainer>
      <h4>Previsão para as próximas horas</h4>
      <ul>
        {forecast.map((el) => (
          // eslint-disable-next-line react/jsx-key
          <li key={el.dt}>
            <img
              src={`http://openweathermap.org/img/wn/${el.weather[0].icon}.png`}
              alt={el.weather[0].description}
            />
            {el.main.temp}ºC - {el.weather[0].description}
          </li>
        ))}
      </ul>
    </ForecastContainer>
  )
}

export default Forecast