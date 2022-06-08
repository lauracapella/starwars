
 import {useParams} from 'react-router-dom'



export default function Spaceshipdetail(props){

 const {id} = useParams();
 console.log("props en detalle!!: ", props)

 const selectStarship = props.spaceShipsData[id];

console.log("selectStarship!!!: ", selectStarship)

return(
    <div className='detail_wrap'>
    
        <h1>{selectStarship.name}</h1><br />
        <img src={"https://starwars-visualguide.com/assets/img/starships/" + id + '.jpg'} /> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo eget dui consequat consectetur. Nullam at ornare sem. Etiam non enim non eros fermentum iaculis a a ante. Integer maximus semper ex. Etiam sed posuere tortor. Proin eget velit libero. Sed interdum magna eu massa rhoncus elementum. Nam quis imperdiet lorem. Vestibulum dignissim mollis elit a fermentum. Quisque ligula purus, molestie ut ligula ornare, rhoncus feugiat elit.</p>
        Model: {selectStarship.model} <br />
        <hr></hr>
        Manufacturer: {selectStarship.manufacturer}<br />
        <hr></hr>
        Class: {selectStarship.starship_class} <br />
        <hr></hr>
        Passengers: {selectStarship.passengers} <br />
        <hr></hr>
        Max. Atmosphering: {selectStarship.max_atmosphering_speed} <br />
        <hr></hr>
        Lenght: {selectStarship.length} <br />
        <hr></hr>
        Hyperdrive Rating: {selectStarship.hyperdrive_rating} <br />
        <hr></hr>
        Crew: {selectStarship.edited} <br />
        <hr></hr>
        Edited: {selectStarship.crew} <br />
        <hr></hr>
        Created: {selectStarship.created} <br />
        <hr></hr>
        Cost in Credits: {selectStarship.cost_in_credits} <br />
        <hr></hr>
        Consumables: {selectStarship.consumables} <br />
        <hr></hr>
        Cargo Capacity: {selectStarship.cargo_capacity} <br />
        <hr></hr>
        MGLT: {selectStarship.MGLT}
        <hr></hr>
    </div>

)
}