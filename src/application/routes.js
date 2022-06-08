import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom';
import Wellcome from '../pages/Wellcome'
import Spaceshiplist from '../pages/Spaceshiplist'
import Spaceshipdetail from '../pages/Spaceshipdetail'
import Menu from '../pages/Menu'
import Login from '../pages/Login'
import Registration from '../pages/Registration'

export default (props) => (
    
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element = {< Wellcome />} />
            <Route path="/spaceshiplist/" element = {<Spaceshiplist listaNaves={props.listaNaves} spaceShipsData={props.spaceShipsData} moreSpaceshipList={props.moreSpaceshipList} />} />
            <Route path="/spaceshiplist/:id" element = {<Spaceshipdetail spaceShip={props.spaceShip} spaceShipsData={props.spaceShipsData} />}  />
            <Route path="*" element = {<div>404</div>} />
            <Route path="/Login" element = {< Login />} />
            <Route path="/Registration" element = {< Registration />} />
        </Routes>
    </BrowserRouter>
)

