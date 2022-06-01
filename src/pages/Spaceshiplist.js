/* import {useParams} from 'react-router-dom' */
import ImageWithFallback from "../Fallbackimg"

export default function Spaceshiplist(props, index) {
/*  const params = useParams();
 */
    return (
      <>
        <ul>
          {props.listaNaves}
        </ul>
        <button onClick={props.moreSpaceshipList}>More spaceships ++ </button>
        <br />
        <ImageWithFallback/>

      </>
    );
  }