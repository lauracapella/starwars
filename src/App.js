
import React, { useEffect, useState } from 'react';
import Routes from "./application/routes";
import ImageWithFallback from "./Fallbackimg"

import { Link } from 'react-router-dom'



export default function App() {
  const [spaceShipName, setSpaceShipName] = useState([]);
  const [detalleNave, setDetalleNave] = useState();
  const [count, setCount] = useState(1)

  const imgUrlBase = "https://starwars-visualguide.com/assets/img/starships/"

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/?page=" + count)
      .then(resp => resp.json())
      .then((resp) => {
        setSpaceShipName(resp.results)
      })
  }, [count]);

  const mostrarNave = (index) => {
    setDetalleNave(index)
    console.log(detalleNave)
    console.log(spaceShipName[index].name)
  }

  const listaNaves = spaceShipName.map((starship, index) => (
    <li key={index}>
      <Link to={`/spaceshiplist/${starship.id}`}  >
        <h3>{starship.name}</h3>
        <h4>{starship.model}</h4><br />
        <img src={imgUrlBase + starship.id + '.jpg'} />
      </Link>
    </li>
  ))

  const moreSpaceshipList = () => {
    if (count >= 1 && count <= 3) {
      setCount(count + 1)
    } else {
      setCount(1)
    }
  }

  return (
    <>
      <Routes 
        listaNaves={listaNaves} 
        mostrarNave={mostrarNave} 
        spaceShipName={spaceShipName} 
        moreSpaceshipList={moreSpaceshipList} >
      </Routes>
      <ImageWithFallback />
    </>
  )
}