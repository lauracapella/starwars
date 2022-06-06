import { useState, useEffect} from "react";

import Routes from "./application/routes";
import Registration from "./pages/Registration";


export default function App() {

  const [spaceShipsData, setSpaceShipsData] = useState([]);
  const [currentStarship, setCurrentStarship] = useState({});
/*   const [detalleNave, setDetalleNave] = useState();*/  
  const [count, setCount] = useState(1)

 /*  const [username, setUsername] = useState("user1")
  const [password, setPassword] = useState("pass")
  const [user, setUser] = useState() */

 /*  const handleSubmit = async e => {
    e.preventDefault();
    const user ={username, password};
    const response = await axios.post('', user);
    setUser(response.data)
    localStorage.setItem('user', response.data);
    console.log(response.data)
    
  }; */

/*   const handleSubmit = () => {
    localStorage.setItem('Name', username);
    localStorage.setItem('Password', password);
 }; */

/*  if (user) {
  return <div>{user.name} is logged in</div>
} */
 
 
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
      
      
      

     {/*  <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={username}
        placeholder="enter a username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form> */}
      
    </>
  )
}