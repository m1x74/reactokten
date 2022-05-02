import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarsPage} from "./pages/CarsPage";

function App() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<Navigate to={"cars"}/>}/>
                <Route path='cars' element={<CarsPage/>}/>

            </Route>


        </Routes>


    )
}

export default App;
