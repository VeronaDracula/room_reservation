import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";

import styles from './Notification.module.scss';

import MainButton from '../MainButton/MainButton';

import { testActions } from "../../Redux/slice/slice";

function Notification(props) {

    const {
        status,
        showPriceForm
    } = props;

    const dispatch = useDispatch();




    function next() {
        dispatch(testActions.setData({ value: '', type: 'removeDataClose' }));
        showPriceForm();
    }


    return (
        <div className={`${styles.notification} ${!status ? styles.inactive : ''}`}>

            <div className={styles.notification__img}></div>

            <p className={styles.notification__text}>Заказ успешно оплачен.</p>

            <MainButton className={styles.notification__btn} text='Забронировать еще' action={next} />
        </div>
    );
}

export default Notification;