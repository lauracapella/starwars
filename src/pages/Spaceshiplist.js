import React, {useEffect, useState} from 'react';

export default function Spaceshiplist() {

    const [spaceShipName, setSpaceShipName] = useState([]);
    const imgUrlBase = "https://starwars-visualguide.com/assets/img/starships/"
  
    useEffect( () => {
      fetch("https://swapi.dev/api/starships/?page1")
      .then(resp => resp.json())
      .then((resp) => {
        setSpaceShipName(resp.results)
      })
   
    }, []);
   //console.log(spaceShipName)
  
    return (
      <>
      <ul>
          {spaceShipName &&
            spaceShipName.map(({ name , model }, index) => (
              <li key={ index }>
                <h3>{ index } - { name }</h3>
                <h4>{ model }</h4><br/>
                <img src={imgUrlBase + index + '.jpg'} />
              </li>
            ))}
        </ul>
      </>
    );
  }