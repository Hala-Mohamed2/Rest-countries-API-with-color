import './Form.css';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';


const Form = ({setCountries , allCountries}) => {

  const handleChangeCountry =(region) =>{
    if(region === ""){
      setCountries(allCountries.slice(0,8))
    }else{
      const filtred = allCountries.filter((country) => country.region === region)
      setCountries(filtred.slice(0,8))
    }
  }


  const [search, setSearch] = useState("");

  const handleSearch = (e) =>{
    const value = e.target.value
    setSearch(value)
    const filtred = allCountries.filter((country) => country.name.common.toLowerCase().includes(value.toLowerCase()))
    setCountries(filtred.slice(0,8))
  }

  return(
    <div className="form">
      <form >
        <FaSearch />
        <input type="text" placeholder='Search for a country...' onChange={handleSearch} value={search}/>
      </form>
      <div className="select-war">
        <select defaultValue="" onChange={(e)=> handleChangeCountry(e.target.value)}> 
          <option disabled hidden value="">Filter by Region </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}



export default Form;