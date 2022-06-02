
import React, { useEffect, useState } from 'react';
import Routes from "./application/routes";


export default function App() {

  const [spaceShipsData, setSpaceShipsData] = useState([]);



 const [currentStarship, setCurrentStarship] = useState({});

  const [detalleNave, setDetalleNave] = useState();
  const [count, setCount] = useState(1)

 

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/?page=" + count)
      .then(resp => resp.json())
      .then((resp) => {
        setSpaceShipsData(resp.results)
      })
  }, [count]);




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
        spaceShipsData={spaceShipsData}
     
        spaceShip={currentStarship} 
        moreSpaceshipList={moreSpaceshipList} >
      </Routes>
      
    </>
  )
}