import { Link } from 'react-router-dom'


export default function Spaceshiplist(props, index) {

const imgUrlBase = "https://starwars-visualguide.com/assets/img/starships/"
const listaNaves = props.spaceShipsData.map((starship, index) => (
   
  <div className='spaceship_names p2' key={index}>
    <Link to={`/spaceshiplist/${index}`}  >
      <h3>{starship.name}</h3>
      <h4>{starship.model}</h4><br />
      {/* <img src={imgUrlBase + index + '.jpg'} /> */}
    </Link>
  </div>
))

    return (
      <>
        <div className="lista-naves-wrap">
        <div className="d-flex flex-row flex-wrap lista_naves">
          {listaNaves}
        <button className='boton_mas' onClick={props.moreSpaceshipList}> See more spaceships >> </button>
        </div>
        </div>
        <br />
      </>
    );
  }