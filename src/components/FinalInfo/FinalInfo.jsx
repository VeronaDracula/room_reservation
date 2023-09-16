import React, { useContext, useEffect, useState } from 'react';
// import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import styles from './FinalInfo.module.scss';

import MainButton from '../MainButton/MainButton';
import BackButton from '../BackButton/BackButton';

function FinalInfo(props) {

    const {
        status,
        showDataForm,
        showNotification
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
    const total = useSelector((state) => state?.test?.data?.total || 0);

    const [insurance, setInsurance] = useState('');


    useEffect(() => {
        activeInsurance();

    }, [insuranceStatus])


    function activeInsurance () {
        if(insuranceStatus === true) {
            setInsurance('Страховка включена');
        }
        else {
            setInsurance('');
        }
    }


    function next() {
        showNotification();

    }



    return (
        <div className={`${styles.finalInfo} ${!status ? styles.inactive : ''}`}>

            <h3 className={styles.finalInfo__main}>{surname} {name} {nameOfFather}</h3>
            <p className={styles.finalInfo__text}>+7 999 123 45-67</p>
            <p className={styles.finalInfo__text}>Номер «{typeOfRoom}» на {nights} ночей</p>
            <p className={styles.finalInfo__text}>{adults} взрослых, {children} ребенка от 5 до 12 лет и {childrenFive} ребенок младше 5 лет</p>
            <p className={styles.finalInfo__text}>{insurance}</p>
            <p className={`${styles.finalInfo__text} ${styles.last}`}>К оплате <span className={styles.finalInfo__textMain}>{total} ₽</span></p>


            <div className={styles.finalInfo__btns}>
                <BackButton text='Назад к данным покупателя' action={showDataForm} />
                <MainButton text='Оплатить' action={next} />
            </div>

        </div>
    );
}

export default FinalInfo;