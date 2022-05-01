import './App.css';
import {Routes,Route,Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";

function App() {
    return(
       <Routes>
        <Route path={'/'} element={<MainLayout/>}>




        </Route>


       </Routes>






    )
}

export default App;
