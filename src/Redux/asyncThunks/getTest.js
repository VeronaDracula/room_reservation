import { createAsyncThunk } from "@reduxjs/toolkit";
import { testActions } from "../slice/slice";
import { getObjectTest } from "../helpers/getObjectTest";

export const getTest = createAsyncThunk(
    'test/getTest',
    async(_,ThunkApi) => {
        try {

            const url = 'https://jsonplaceholder.typicode.com/posts';

            const response = await fetch(url);

            const data = await response.json();

            // console.log(data.slice(0, 10))
            if (data.length !== 0) {
                // const testList = {...data};
                // const newTestList = getObjectTest(testList);
                ThunkApi.dispatch(testActions.setTest(data.slice(0, 10)));
            } else {
                ThunkApi.rejectWithValue('Не найдено');
            }
        }
        catch (e) {
            console.log(e);
            return ThunkApi.rejectWithValue('Произошла непредвиденная ошибка');
        }
    }
)