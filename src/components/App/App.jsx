import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import styles from './App.module.scss';

// import { getTest } from '../../Redux/asyncThunks/getTest';
// import { deletePost } from '../../Redux/asyncThunks/deletePost';
// import { getTestsList } from '../../Redux/selectors/selector';

import { testReducer } from '../../Redux/slice/slice';

import Loader from '../../Loader'

import Content from '../Content/Content';


function App() {

  const [isLoader, setIsLoader] = useState(false);

  const dispatch = useDispatch();

  // const initialReducers = {
  //   'test': testReducer,
  // }


  useEffect(() => {
    //   const fetchTest = async () => {
    //     setIsLoader(true);
    //     try {
    //         dispatch(getTest());

    //     } catch (error) {
    //         console.log('error\n', error);
    //     } finally {
    //       setIsLoader(false);
    //     }
    // };

    // fetchTest();

    // return () => {
    //     // setError('');
    //     // setIsLoading(false);
    // }

  }, [])


  // const removePost = async (id) => {
  //   setIsLoader(true);
  //   try {
  //       dispatch(deletePost(id));

  //   } catch (error) {
  //       console.log('error\n', error);
  //   } finally {
  //     setIsLoader(false);
  //   }
  // }







  return (
    <div className={styles.app}>

      <Content />


    </div>
  );
}

export default App;
