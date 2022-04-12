import {Cars} from "./components/Cars/Cars";
import {CarForm} from "./components/CarForm/CarForm";
import {useEffect, useState} from "react";


function App() {

    const[newCar,setNewCar] = useState(null);
    const [updatedCar,setUpdatedCar]=useState(null)
    const [carForUpdate,setCarForUpdate]=useState(null);


return(
    <div>
        <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate} setUpdatedCar={setUpdatedCar} setCarForUpdate={setCarForUpdate}/>
        <hr/>
        <Cars newCar={newCar} setCarForUpdate={setCarForUpdate} updatedCar={updatedCar}/>
    </div>
)
}

export default App;
