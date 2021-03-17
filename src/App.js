import React, { useState, useEffect } from "react";
import axios from 'axios';
import Photo from './photo'
import "./App.css";

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=NBcGHZZgey82OChKxtEQgJ6UFP6ps8VeXWXKycec')
    .then(response => {
      setData(response)
      console.log(response.data.url)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Photo data={data}/>
    </div>
  );
}

export default App;
