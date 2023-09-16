import { createAsyncThunk } from "@reduxjs/toolkit";
import { testActions } from "../slice/slice";


export const createOrder = createAsyncThunk(
    'test/createOrder',
    async( newData, ThunkApi) => {

        console.log(newData)
        try {

            const url = `http://localhost:3000`;


            const response = await fetch(url, {
                method: "POST",
                cache: "no-cache",
                credentials: "same-origin",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "Accept" : "application/json"
                },
                body: JSON.stringify(newData)
            });

            const data = await response.json();

            console.log(data)

            if (data.status === 'success') {


            } else {
                ThunkApi.rejectWithValue('Не создать заказ');
            }

            return data
        }
        catch (e) {
            console.log(e);
            return ThunkApi.rejectWithValue('Произошла непредвиденная ошибка');
        }
    }
)