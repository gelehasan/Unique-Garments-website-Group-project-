import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger"
import {RootReducer} from "../Reducers/RootReducer"
import { persistStore, persistReducer } from 'redux-persist';
import  storage  from 'redux-persist/lib/storage';


const middleLogger = [logger];

const persistConfigiration= {
    key:"root",
    storage,
    blacklist:["user"]
}
const persistedReducer = persistReducer(persistConfigiration, RootReducer)
export const Store = configureStore({
    middleware: middleLogger,
    reducer: persistedReducer
})

export const persistedStore = persistStore(Store)