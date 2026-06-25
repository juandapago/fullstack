import { useEffect, useState } from "react";
import countriesServer from './services/restcountries'

//Componente que contiene el elemento input del sistema
const Filter = ({value, onChange}) =>{
  return (
    <>
        find countrie: <input value={value} onChange={onChange}/>
    </>
  )
}
const ShowAllInformation = ({countrie}) => {
    return (
      <div>
        <h1>{countrie.name.common}</h1>
        <p>Capital: {countrie.capital}</p>
        <p>Area: {countrie.area}</p>
        <h2>Languages</h2>
        <ul>
          {Object.values(countrie.languages || {}).map(language => <li key={language}>{language}</li>)}
        </ul>
        <img src={countrie.flags.png}/>
      </div>
    )
}
const ListCountries = ({countriesToShow, filterCountrie, onShow}) => {
  if(countriesToShow.length > 10 && filterCountrie !== '') return <p>Too many matches, specify another filter</p>

  if(countriesToShow.length === 1) {
    return (
      <ShowAllInformation countrie={countriesToShow[0]}/>
    )
  }
  
  if(countriesToShow.length > 1 && countriesToShow.length <= 10){
    return(
      <ul>
        {countriesToShow.map(countrie => {
          return(
            <div key={countrie.cca3}>
              <li>{countrie.name.common}</li>
              <button onClick={() => onShow(countrie.name.common)}>show</button>
            </div>
          )
        })}
      </ul>
    )
  }
}

const App = () => {
  //Estados 
  const [filterCountrie, setFilterCountrie] = useState('')
  const [countries, setContries] = useState([])

  useEffect(()=>{
    countriesServer.getAllCountries().then(countrie => {
      setContries(countrie)
    })

  },[])

  //Gestiona el input cuando cambia su valor 
  const handleFilterCountrie = (event) => {
    setFilterCountrie(event.target.value)
  }
  
  const handleShowCountrie = (countrieName) => {
    setFilterCountrie(countrieName)
  }

  const countriesToShow = filterCountrie === '' ? countries: countries.filter(countrie =>
    countrie.name.common.toLowerCase().includes(filterCountrie.toLowerCase())
  )

  return(
    <div>
      <Filter 
      value={filterCountrie} 
      onChange={handleFilterCountrie}
      /> 
      <ListCountries
      countriesToShow = {countriesToShow} 
      filterCountrie = {filterCountrie}
      onShow ={handleShowCountrie}/>
    </div>
  )
}

export default App