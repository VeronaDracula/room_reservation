import { configureStore } from '@reduxjs/toolkit';

import {testReducer} from './Redux/slice/slice';


export const store = configureStore({
    reducer: {
        test: testReducer,
    },
})