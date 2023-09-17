import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {
        amountOfAdults: 1,
        amountOfChildren: 0,
        amountOfChildrenFive: 0,
        typeOfRoom: 'Эконом',
        typePrice: 1800,
        amountOfNights: 1,
        insurance: false,
        total: 1800,

        surname: {error: false, text: ''},
        name: {error: false, text: ''},
        nameOfFather: '',
        phone: {error: false, text: ''},
        date: {error: false, text: ''}
    },
};

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setData: (state, action) => {
            if(action.payload.type === 'removeDataClose') {
                state.data = initialState.data;
            }
            else {
                state.data[action.payload.type] = action.payload.value;
            }
        },
    }
})

export const { actions: testActions } = testSlice;
export const { reducer: testReducer } = testSlice;
