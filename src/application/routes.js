import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Wellcome from '../pages/Wellcome'
import Spaceshiplist from '../pages/Spaceshiplist'

export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {< Wellcome />} />
            <Route path="/spaceshiplist/" element = {<Spaceshiplist/>} />
            <Route path="*" element = {<div>404</div>} />
        </Routes>
    </BrowserRouter>
)