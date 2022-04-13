import {carsService} from "../../services";

export const Car = ({car, setCarForUpdate, setDeletedCar}) => {
    const {id, model, price, year} = car;
    const deleteCar = async () => {
        await carsService.deleteById(id)
        setDeletedCar(id)
    }
    return (
        <div>
            <div>Id:{id}</div>
            <div>Model:{model}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <button onClick={() => setCarForUpdate(car)}>UPDATE CAR</button>
            <button>DELETE CAR{() => deleteCar()}</button>
            <hr/>
        </div>
    )
}
