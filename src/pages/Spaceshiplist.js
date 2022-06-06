/* import {useParams} from 'react-router-dom' */


import { Link } from 'react-router-dom'


export default function Spaceshiplist(props, index) {
/*  const params = useParams();
 */

const imgUrlBase = "https://starwars-visualguide.com/assets/img/starships/"


const listaNaves = props.spaceShipsData.map((starship, index) => (
  <li key={index}>
    <Link to={`/spaceshiplist/${index}`}  >
      <h3>{starship.name}</h3>
      <h4>{starship.model}</h4><br />
      <img src={imgUrlBase + index + '.jpg'} />
    </Link>
  </li>
))



    return (
      <>


        <ul>
          {listaNaves}
        </ul>
        <button onClick={props.moreSpaceshipList}>More spaceships ++ </button>
        <br />

      </>
    );
  }