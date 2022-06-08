import { useState, useEffect} from "react";
import './App.css';
import Routes from "./application/routes";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  const [spaceShipsData, setSpaceShipsData] = useState([]);
  const [currentStarship, setCurrentStarship] = useState({});
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
    <div className="background_all">
               
      <Routes 
        spaceShipsData={spaceShipsData}
        spaceShip={currentStarship} 
        moreSpaceshipList={moreSpaceshipList} >
      </Routes>

    </div>
  )
}