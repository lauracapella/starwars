
import {useParams} from 'react-router-dom'

export default function Spaceshiplist(props) {
  const params = useParams();
  console.log(params)

  
    return (
      <>
        <ul>           
              {props.lb}
        </ul>
      </>
    );
  }