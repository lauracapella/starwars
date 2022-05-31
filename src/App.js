
import React, {useEffect, useState} from 'react';
import Routes from "./application/routes";

import {Link} from 'react-router-dom'


 
export default function App() {
    const [spaceShipName, setSpaceShipName] = useState([]);
    const [detalleNave, setDetalleNave]= useState();

    const imgUrlBase = "https://starwars-visualguide.com/assets/img/starships/"
  
    useEffect( () => {
      fetch("https://swapi.dev/api/starships/?page1")
      .then(resp => resp.json())
      .then((resp) => {
        setSpaceShipName(resp.results)
      })
   
    }, []);  
    
    const mostrarNave = (index) => {
      setDetalleNave(index)
      console.log(detalleNave)
      console.log(spaceShipName[index].name)

    } 


    
    const listaNaves = spaceShipName.map(({ name , model }, index) => (
          <li key={ index }>  
          <Link to={`/spaceshiplist/${index}`}  >
          
              <h3>{ index } - { name }</h3>
              <h4>{ model }</h4><br/>
              {/*  <img src={imgUrlBase + index + '.jpg'} /> */}

           </Link>
            </li>
        ))

  

   return(
     <>
     <Routes listaNaves={listaNaves} mostrarNave={mostrarNave} spaceShipName={spaceShipName} ></Routes>

     </>
   )
}