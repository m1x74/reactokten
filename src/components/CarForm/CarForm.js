import React, {useEffect} from 'react';
import {joiResolver} from "@hookform/resolvers/joi";

import {carsService} from "../../services";
import {useForm} from "react-hook-form";
import {carValidator} from "../../validators";

export const CarForm = ({setNewCar, carForUpdate, setCarForUpdate, setUpdatedCar}) => {
    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onChange"
    });
    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);

        }
    }, [carForUpdate])
    const mySubmit = async (car) => {
        try {
            if (carForUpdate) {
                const {data} = await carsService.updateById(carForUpdate.id, car);
                setUpdatedCar(data);
                setCarForUpdate(false);
            } else {
                const {data} = await carsService.postNew(car);
                setNewCar(data);

            }
            reset()
        } catch (e) {

        }


    }


    return (
        <form onSubmit={handleSubmit(mySubmit)}>
            <div><label>Model:<input type="text"{...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price:<input type="number"{...register('price', {valueAsNumber: true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>Year:<input type="number"{...register('year', {valueAsNumber: true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            <button>{carForUpdate ? 'Обновить' : 'Создать'}</button>
        </form>


    );
};

