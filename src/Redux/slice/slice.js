import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    data: {
        amountOfAdults: 0,
        amountOfChildren: 0,
        amountOfChildrenFive: 0,
        typeOfRoom: '',
        amountOfNights: 0,
        insurance: false,
        total: 0,

        surname: '',
        name: '',
        nameOfFather: '',
        phone: '',
        date: ''
    },
};

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data[action.payload.type] = action.payload.value;
        },

        // setTest: (state, action) => {
        // state.posts = [...action.payload]; 
        // },

        // deletePostSlice: (state, action) => {
        //     state.posts = state.posts.filter((item) => item.id !== action.payload);
        // },
    }, 
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(getCompanyInfo.pending, (state) => {
    //       state.isLoading = true;
    //     })
    //     .addCase(getCompanyInfo.fulfilled, (state) => {
    //       state.isLoading = false;
    //     })
    //     .addCase(getCompanyInfo.rejected, (state) => {
    //       state.isLoading = false;
    //     })
    // }
})

export const { actions: testActions } = testSlice;
export const { reducer: testReducer } = testSlice;

// export default testSlice.reducer