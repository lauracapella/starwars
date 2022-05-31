/* import {useParams} from 'react-router-dom' */



export default function Spaceshiplist(props, index) {
/*  const params = useParams();
 */
    return (
      <>
        <ul>
          {props.listaNaves}
        </ul>

      </>
    );
  }