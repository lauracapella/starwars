import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  const [spaceShipName, setSpaceShipName] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/?page1")
    .then(resp => resp.json())
    .then((resp) => {
      setSpaceShipName(resp.results)
    })
  }, []);

  return (
    <>
      
    <ul>
        {spaceShipName &&
          spaceShipName.map(({ name , model }) => (
            <li key={ name }>
              { name }<br />
              { model }
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
