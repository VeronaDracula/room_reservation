import React, { useContext, useEffect, useState } from 'react';
// import { useDispatch } from "react-redux";
// import { useSelector } from 'react-redux';

import styles from './Content.module.scss';

// import { getTest } from '../../Redux/asyncThunks/getTest';
// import { deletePost } from '../../Redux/asyncThunks/deletePost';
// import { getTestsList } from '../../Redux/selectors/selector';  FinalInfo

import Loader from '../../Loader';
import FormPrice from '../FormPrice/FormPrice';
import FormData from '../FormData/FormData';
import FinalInfo from '../FinalInfo/FinalInfo';




function Content() {

    const [isLoader, setIsLoader] = useState(false);

    const [priceForm, setPriceForm] = useState(true);
    const [dataForm, setDataForm] = useState(false);
    const [finalInfo, setFinalInfo] = useState(false);

    const [title, setTitle] = useState('Расчет стоимости');

    //   const postsList = useSelector(getTestsList);
    // console.log(postsList)

    //   const dispatch = useDispatch();

    function showPriceForm() {
        setPriceForm(true);
        setDataForm(false);
        setFinalInfo(false);

        setTitle('Расчет стоимости');
    }

    function showDataForm() {
        setDataForm(true);
        setPriceForm(false);
        setFinalInfo(false);

        setTitle('data');
    }

    function showFinalInfo() {
        setFinalInfo(true);
        setDataForm(false);
        setPriceForm(false);

        setTitle('info');
    }


    useEffect(() => {


    }, [])








    return (
        <div className={styles.content}>
            <h1 className={styles.content__title}>Бронирование номера</h1>
            <p className={styles.content__subtitle}>{title}</p>

            <FormPrice status={priceForm} showDataForm={showDataForm} />
            <FormData status={dataForm} showPriceForm={showPriceForm} showFinalInfo={showFinalInfo} />
            <FinalInfo status={finalInfo} showDataForm={showDataForm} />


        </div>
    );
}

export default Content;
