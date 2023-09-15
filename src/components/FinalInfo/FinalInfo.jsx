import React, { useContext, useEffect, useState } from 'react';
// import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import styles from './FinalInfo.module.scss';

import MainButton from '../MainButton/MainButton';
import BackButton from '../BackButton/BackButton';

function FinalInfo(props) {

    const {
        status,
        showDataForm
    } = props;



    const adults = useSelector((state) => state?.test?.data?.amountOfAdults || '');
    const children = useSelector((state) => state?.test?.data?.amountOfChildren || '');
    const childrenFive = useSelector((state) => state?.test?.data?.amountOfChildrenFive || '');
    const nights = useSelector((state) => state?.test?.data?.amountOfNights || '');
    const insuranceStatus = useSelector((state) => state?.test?.data?.insurance || false);
    const typeOfRoom = useSelector((state) => state?.test?.data?.typeOfRoom || false);

    const surname = useSelector((state) => state?.test?.data?.surname || '');
    const name = useSelector((state) => state?.test?.data?.name || '');
    const nameOfFather = useSelector((state) => state?.test?.data?.nameOfFather || '');
    const phone = useSelector((state) => state?.test?.data?.phone || '');
    const date = useSelector((state) => state?.test?.data?.date || '');


    useEffect(() => {


    }, [])



    function next() {

    }



    return (
        <div className={`${styles.finalInfo} ${!status ? styles.inactive : ''}`}>

            <h3 className={styles.finalInfo__main}>Иванов Иван Иванович</h3>
            <p className={styles.finalInfo__text}>+7 999 123 45-67</p>
            <p className={styles.finalInfo__text}>+7 999 123 45-67</p>
            <p className={styles.finalInfo__text}>+7 999 123 45-67</p>
            <p className={styles.finalInfo__text}>+7 999 123 45-67</p>



            <div className={styles.finalInfo__btns}>
                <BackButton text='Назад к расчету стоимости' action={showDataForm} />
                <MainButton text='Далее' action={next} />
            </div>

        </div>
    );
}

export default FinalInfo;