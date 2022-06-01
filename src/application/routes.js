import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom';
import Wellcome from '../pages/Wellcome'
import Spaceshiplist from '../pages/Spaceshiplist'
import Spaceshipdetail from '../pages/Spaceshipdetail'


export default (props) => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {< Wellcome />} />
            <Route path="/spaceshiplist/" element = {<Spaceshiplist listaNaves={props.listaNaves} mostrarNave={props.mostrarNave} spaceShipName={props.spaceShipName} moreSpaceshipList={props.moreSpaceshipList} />} />
            <Route path="/spaceshiplist/:id" element = {<Spaceshipdetail listaNaves={props.listaNaves} mostrarNave={props.mostrarNave} spaceShipName={props.spaceShipName} />}  />
            <Route path="*" element = {<div>404</div>} />
        </Routes>
    </BrowserRouter>
)