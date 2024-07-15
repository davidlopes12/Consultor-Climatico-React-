import { useState, useEffect } from 'react';
import { ContainerClimate, Title } from './AppStyles';
import CurrentWeather from './componentes/CurrentWeather';
import Forecast from './componentes/Forecast';
import Search from './componentes/Search';

function App() {
  const [city, setCity] = useState('');
  const [climate, setClimate] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_API_KEY || '';

  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      try {
        setLoading(true);

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
        );
        const data = await response.json();

        setCity(data.name);
        setClimate(data);
      } catch (error) {
        console.log('Erro ao buscar clima:', error);
      } finally {
        setLoading(false);
      }
    });
  }, [apiKey]);
  
  const SearchClimate = async () => {
    try {
      setLoading(true);

      const responseClimate = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      const dataClimate = await responseClimate.json();
      setClimate(dataClimate);

      const responseForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      const dataForecast = await responseForecast.json();
      setForecast(dataForecast.list.slice(0, 5));
    } catch (error) {
      console.log('Erro ao buscar clima,', error);
    } finally {
      setLoading(false);
    }
  };

  console.log(climate);
  return (
    <ContainerClimate>
      <Title>Condições Climáticas</Title>
      <Search city={city} setCity={setCity} SearchClimate={SearchClimate} />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {climate && <CurrentWeather climate={climate} />}
          {forecast.length > 0 && <Forecast forecast={forecast} />}
        </>
      )}
    </ContainerClimate>
  );
}

export default App;

