
 import {useParams} from 'react-router-dom'



export default function Spaceshipdetail(props){

 const {id} = useParams();
 console.log("props en detalle!!: ", props)

 const selectStarship = props.spaceShipsData[id];

console.log("selectStarship!!!: ", selectStarship)

return(
    <>
    
        {selectStarship.name}<br />
        <img src={"https://starwars-visualguide.com/assets/img/starships/" + id + '.jpg'} /> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo eget dui consequat consectetur. Nullam at ornare sem. Etiam non enim non eros fermentum iaculis a a ante. Integer maximus semper ex. Etiam sed posuere tortor. Proin eget velit libero. Sed interdum magna eu massa rhoncus elementum. Nam quis imperdiet lorem. Vestibulum dignissim mollis elit a fermentum. Quisque ligula purus, molestie ut ligula ornare, rhoncus feugiat elit.</p>
        Model: {selectStarship.model} <br />
        Manufacturer: {selectStarship.manufacturer}<br />
        Class: {selectStarship.starship_class} <br />
        Passengers: {selectStarship.passengers} <br />
        Max. Atmosphering: {selectStarship.max_atmosphering_speed} <br />
        Lenght: {selectStarship.length} <br />
        Hyperdrive Rating: {selectStarship.hyperdrive_rating} <br />
        Crew: {selectStarship.edited} <br />
        Edited: {selectStarship.crew} <br />
        Created: {selectStarship.created} <br />
        Cost in Credits: {selectStarship.cost_in_credits} <br />
        Consumables: {selectStarship.consumables} <br />
        Cargo Capacity: {selectStarship.cargo_capacity} <br />
        MGLT: {selectStarship.MGLT}
    </>

)
}