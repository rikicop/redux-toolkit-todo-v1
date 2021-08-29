import {configureStore} from '@reduxjs/toolkit';
/* todoReducer es un nombre inventado aqui mismo 
podria haber sido todoHello*/
import todoReducer from './todoSlice'

export default configureStore({
    reducer:{
        todos: todoReducer,
    },
});