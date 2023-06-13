import {configureStore, combineReducers} from '@reduxjs/toolkit'
import postlistSlice from './postlistSlice'


const rootReducer = combineReducers({
    posts: postlistSlice
})


export const store = configureStore({
    reducer: rootReducer
})