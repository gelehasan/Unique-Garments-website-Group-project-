import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger"
import {RootReducer} from "../Reducers/RootReducer"
const middleLogger = [logger];


export const Store = configureStore({
    MiddleLogger: middleLogger,
    reducer: RootReducer
})