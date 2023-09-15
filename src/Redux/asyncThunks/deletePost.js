import { createAsyncThunk } from "@reduxjs/toolkit";
import { testActions } from "../slice/slice";
import { getObjectTest } from "../helpers/getObjectTest";

import { useSelector } from 'react-redux';
import { getTestsList } from '../selectors/selector';

export const deletePost = createAsyncThunk(
    'test/deletePost',
    async(postId, ThunkApi) => {
        try {

            const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

            // const body = JSON.stringify({'post_id': postId});

            const response = await fetch(url);

            const data = await response.json();



            // console.log(data.slice(0, 10))
            if (data.length !== 0) {

                // const postsList = useSelector(getTestsList);
                // const testList = {...data};
                // console.log(newTestList)
                ThunkApi.dispatch(testActions.deletePostSlice(data.id));
            } else {
                ThunkApi.rejectWithValue('Не удалено');
            }
        }
        catch (e) {
            console.log(e);
            return ThunkApi.rejectWithValue('Произошла непредвиденная ошибка');
        }
    }
)