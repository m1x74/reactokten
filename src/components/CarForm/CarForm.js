import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {carActions} from "../../redux";
import styles from './Module.css';

export const CarForm = () => {
    const {handleSubmit,reset,register,setValue}=useForm();
    const {formErrors,carForUpdate}=useSelector(state=>state.cars);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
        if (carForUpdate){
            const {model,price,year}=carForUpdate;
            setValue('model',model);
            setValue('price',price);
            setValue('year',year);
        }
    },[carForUpdate])

    const submit=async (newCar)=>{
        if (carForUpdate){
            await dispatch(carActions.updateById({id:carForUpdate.id,car:newCar}))
        }else {
            await dispatch(carActions.createAsync({car:newCar}))
        }

        navigate('/cars');
        reset()
    }





    return (
        <form className={'flex'} onSubmit={handleSubmit(submit)}>
            <div><label>Model:<input type="text"{...register('model')}/></label></div>
            {formErrors.model&&<span>{formErrors.model[0]}</span>}
            <div><label>Year:<input type="text"{...register('year')}/></label></div>
            {formErrors.year&&<span>{formErrors.year[0]}</span>}
            <div><label>Price:<input type="text"{...register('price')}/></label></div>
            {formErrors.price&&<span>{formErrors.price[0]}</span>}
            <button>SEND</button>
        </form>
    );
};

