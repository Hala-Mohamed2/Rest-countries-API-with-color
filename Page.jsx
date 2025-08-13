import './Page.css';


const Page = ({countries }) => {

  return(
    <div className='page'>

      {countries.map((country , index) => (
        <div className="box">
        <img src={country.flags.svg} alt="" />
        <div className="col">
          <h3>{country.name.common}</h3>
          <h6>Population:<span>{country.population.toLocaleString()}</span></h6>
          <h6>Region:<span>{country.region}</span></h6>
          <h6>Capital:<span>{country.capital ? country.capital[0] : "N/A"}</span></h6>
        </div>
      </div>
      ))}
      
    </div>
  )
}



export default Page;