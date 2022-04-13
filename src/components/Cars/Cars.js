import {useEffect, useState} from "react";

import {carsService} from "../../services";
import {Car} from "../Car/Car";
import styles from './casr.module.css'

export const Cars = ({newCar, setCarForUpdate, updatedCar}) => {
    const [cars, setCars] = useState([]);
    const [deletedCar, setDeletedCar] = useState(null);

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data))
    }, [newCar, updatedCar, deletedCar])

    useEffect(() => {
        if (newCar) {
            setCars(prevState => [...prevState, newCar])
        }
        if (deletedCar) {
            setCars(cars.filter(car => car.id !== deletedCar))
        }
    }, [newCar, deletedCar])

    useEffect(() => {
        if (updatedCar) {
            const car = cars.find(car => car.id === updatedCar.id);
            Object.assign(car, updatedCar);
            setCars([...cars])
        }
    }, [updatedCar])


    return (
        <div className={styles.carsdiv}>
            {
                cars.map((car) => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}
                                       setDeletedCar={setDeletedCar}/>)
            }
        </div>

    )
}