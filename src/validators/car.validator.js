import React from 'react';
import Joi from "joi";

export const carValidator = Joi.object({
    model: Joi.string().regex(/^[a-zA-ZА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Тільки букви мін 1 символ максимум 20'
    }),
    price: Joi.number().min(1).max(1000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
})