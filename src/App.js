import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarsPage, NotFoundPage} from "./pages";
import {SingleCarPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<Navigate to={"cars"}/>}/>
                <Route path='cars' element={<CarsPage/>}/>
                <Route path='cars/:carId' element={<SingleCarPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Route>


        </Routes>


    )
}

export default App;
