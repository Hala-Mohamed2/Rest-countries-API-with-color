import './Header.css';
import { FaMoon } from "react-icons/fa6";
import { useState , useEffect } from 'react';


const Header = () => {

  const [mode, setMode] = useState(localStorage.getItem("currentMode") ?? "dark")

  useEffect(() => {
    if(mode === "dark"){
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }else{
      document.body.classList.add("dark")
      document.body.classList.remove("light")
    }
  }, [mode])


  return(
    <div className='header'>
      <h2>Where in the world?</h2>
      <div className="head" onClick={()=> {
        localStorage.setItem(("currentMode"), mode === "dark" ? "light" : "dark")
        setMode(localStorage.getItem("currentMode"))
      }}>
        <FaMoon />
        <span>Dark Mode</span>
      </div>
    </div>
  )
}



export default Header;