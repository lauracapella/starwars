
 import {useParams} from 'react-router-dom'

export default function Spaceshipdetail(props){

 const {id} = useParams();
 console.log(props.spaceShipName)
 const nameDetail = props.spaceShipName[id].name;
 const modelDetail = props.spaceShipName[id].model;
 const manufacturerDetail = props.spaceShipName[id].manufacturer;
 const starship_classDetail = props.spaceShipName[id].starship_class;
 const passengersDetail = props.spaceShipName[id].passengers;
 const max_atmosphering_speedDetail = props.spaceShipName[id].max_atmosphering_speed;
 const lengthDetail = props.spaceShipName[id].length;
 const hyperdrive_ratinghDetail = props.spaceShipName[id].hyperdrive_rating;
 const editedDetail = props.spaceShipName[id].edited;
 const crewDetail = props.spaceShipName[id].crew;
 const createdDetail = props.spaceShipName[id].created;
 const cost_in_creditsDetail = props.spaceShipName[id].cost_in_credits;
 const consumablesDetail = props.spaceShipName[id].consumables;
 const cargo_capacityDetail = props.spaceShipName[id].cargo_capacity;
 const MGLTDetail = props.spaceShipName[id].MGLT;

return(
    <>
        <a onClick={props.mostrarNave(id)}>soy child button</a><br/>

        {nameDetail}<br/>
        <img src={"https://starwars-visualguide.com/assets/img/starships/" + id + '.jpg'} /> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo eget dui consequat consectetur. Nullam at ornare sem. Etiam non enim non eros fermentum iaculis a a ante. Integer maximus semper ex. Etiam sed posuere tortor. Proin eget velit libero. Sed interdum magna eu massa rhoncus elementum. Nam quis imperdiet lorem. Vestibulum dignissim mollis elit a fermentum. Quisque ligula purus, molestie ut ligula ornare, rhoncus feugiat elit.</p>
        Model: {modelDetail}<br/>
        Manufacturer: {manufacturerDetail}<br/>
        Class: {starship_classDetail}<br/>
        Passengers: {passengersDetail}<br/>
        Max. Atmosphering: {max_atmosphering_speedDetail}<br/>
        Lenght: {lengthDetail}<br/>
        Hyperdrive Rating: {hyperdrive_ratinghDetail}<br/>
        Crew: {crewDetail}<br/>
        Edited: {editedDetail}<br/>
        Created: {createdDetail}<br/>
        Cost in Credits: {cost_in_creditsDetail}<br/>
        Consumables: {consumablesDetail}<br/>
        Cargo Capacity: {cargo_capacityDetail}<br/>
        MGLT: {MGLTDetail}<br/>
    </>
)
}