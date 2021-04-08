import axios from "axios";
import React,{useState, useEffect}from "react";
import "./App.css";
import Astroimage from "./AstroImage"



function App() {
  const [nasa, setnasa]= useState([])

  useEffect(()=>{
    axios.get ("https://api.nasa.gov/planetary/apod?api_key=BrOQASHROQw2bdC1ioClX0SSWeUVDj7yGyhyTxNU")
    .then((result) => {
      setnasa(result.data)
        console.log(result)
    })
    .catch((error) => console.log(error));
  }, [])
  

return (
  <div className="App">
    <Astroimage data={nasa}/>
  </div>
);
}

export default App;
