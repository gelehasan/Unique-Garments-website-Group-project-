import { configureStore } from '@reduxjs/toolkit'
import {RootReducer} from "../Reducers/RootReducer"
import { persistStore, persistReducer } from 'redux-persist';
import  storage  from 'redux-persist/lib/storage';
import logger from "redux-logger"


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