import {useEffect, useState} from "react";

import {carsService} from "../../services";
import {Car} from "../Car/Car";
import styles from './casr.module.css'

export const Cars = ({newCar, setCarForUpdate,updatedCar}) => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data))
    }, [newCar,updatedCar])

    useEffect(() => {
        if (newCar) {
            setCars([...cars, newCar])
        }
    }, [newCar])

    useEffect(()=>{
        if (updatedCar){
            const car = cars.find(car => car.id === updatedCar.id);
            Object.assign(car,updatedCar);
            setCars([...cars])
        }
    },[updatedCar])
    return (
        <div className={styles.carsdiv}>
            {
                cars.map((car) => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}/>)
            }
        </div>

    )
}