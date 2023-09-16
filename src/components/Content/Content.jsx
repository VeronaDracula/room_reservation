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
import Notification from '../Notification/Notification';



function Content() {

    const [isLoader, setIsLoader] = useState(false);

    const [priceForm, setPriceForm] = useState(true);
    const [dataForm, setDataForm] = useState(false);
    const [finalInfo, setFinalInfo] = useState(false);
    const [notification, setNotification] = useState(false);

    const [titles, setTitles] = useState(true);
    const [title, setTitle] = useState('Расчет стоимости');

    //   const postsList = useSelector(getTestsList);
    // console.log(postsList)

    //   const dispatch = useDispatch();

    function showPriceForm() {
        setPriceForm(true);
        setDataForm(false);
        setFinalInfo(false);
        setNotification(false);

        setTitle('Расчет стоимости');
        setTitles(true);
    }

    function showDataForm() {
        setDataForm(true);
        setPriceForm(false);
        setFinalInfo(false);
        setNotification(false);

        setTitle('Данные покупателя');
    }

    function showFinalInfo() {
        setFinalInfo(true);
        setDataForm(false);
        setPriceForm(false);
        setNotification(false);

        setTitle('Подтверждение заказа');
    }

    function showNotification() {
        setFinalInfo(false);
        setDataForm(false);
        setPriceForm(false);
        setNotification(true);

        setTitles(false);
    }


    useEffect(() => {


    }, [])



    return (
        <div className={`${styles.content} ${titles ? '' : styles.notification}`}>
            <h1 className={styles.content__title}>Бронирование номера</h1>
            <p className={styles.content__subtitle}>{title}</p>

            <FormPrice status={priceForm} showDataForm={showDataForm} />
            <FormData status={dataForm} showPriceForm={showPriceForm} showFinalInfo={showFinalInfo} />
            <FinalInfo status={finalInfo} showDataForm={showDataForm} showNotification={showNotification}/>
            <Notification status={notification} showPriceForm={showPriceForm}/>
        </div>
    );
}

export default Content;
