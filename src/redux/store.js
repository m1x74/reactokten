import {combineReducers, configureStore} from "@reduxjs/toolkit";
import catsReducer from './slices/cats.slices';
import dogsReducer from './slices/dogs.slices'

const rootReducers = combineReducers({
    cats: catsReducer,
    dogs: dogsReducer
})

export const store = configureStore({
    reducer: rootReducers
})