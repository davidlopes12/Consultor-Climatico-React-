/* eslint-disable react/prop-types */
import { SearchButton, SearchCity, SearchContainer } from './SearchStyles'

function Search({ city, setCity, SearchClimate }) {
  return (
    <SearchContainer>
      <SearchCity
        type="text"
        onChange={(e) => setCity(e.target.value)}
        placeholder='Digite uma cidade...'
        value={city}
      />
      <SearchButton onClick={SearchClimate}>Buscar</SearchButton>
    </SearchContainer>
  )
}

export default Search