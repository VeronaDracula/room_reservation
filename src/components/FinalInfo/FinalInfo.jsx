import React, { useContext, useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './FinalInfo.module.scss';

import { testActions } from "../../Redux/slice/slice";
// import {createOrder} from '../../Redux/asyncThunks/createOrder';

import MainButton from '../MainButton/MainButton';
import BackButton from '../BackButton/BackButton';

function FinalInfo(props) {

    const {
        status,
        showDataForm,
        showNotification
    } = props;

    const dispatch = useDispatch();

    const today = new Date();

    const adults = useSelector((state) => state?.test?.data?.amountOfAdults || '');
    const children = useSelector((state) => state?.test?.data?.amountOfChildren || '');
    const childrenFive = useSelector((state) => state?.test?.data?.amountOfChildrenFive || '');
    const nights = useSelector((state) => state?.test?.data?.amountOfNights || '');
    const insuranceStatus = useSelector((state) => state?.test?.data?.insurance || false);
    const typeOfRoom = useSelector((state) => state?.test?.data?.typeOfRoom || false);

    const surname = useSelector((state) => state?.test?.data?.surname?.text || '');
    const name = useSelector((state) => state?.test?.data?.name?.text || '');
    const nameOfFather = useSelector((state) => state?.test?.data?.nameOfFather || '');
    const phone = useSelector((state) => state?.test?.data?.phone?.text || '');
    const date = localStorage.getItem('date');
    const total = useSelector((state) => state?.test?.data?.total || 0);


    const [insurance, setInsurance] = useState('');


    useEffect(() => {
        activeInsurance();

    }, [insuranceStatus])

    function declOfNum(number, words) {
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
    }

    function activeInsurance () {
        if(insuranceStatus === true) {
            setInsurance('Страховка включена');
        }
        else {
            setInsurance('');
        }
    }

    function subtractYears(date, years) {
        date.setFullYear(date.getFullYear() - years);
        return date;
    }




    const getData = () => new Promise(resolve => {
        setTimeout(() => resolve( JSON.stringify( {
            'adults': adults,
            'children': children,
            'childrenFive': childrenFive,
            'nights': nights,
            'insuranceStatus': insuranceStatus,
            'typeOfRoom': typeOfRoom,
            'surname': surname,
            'name': name,
            'nameOfFather': nameOfFather,
            'phone': phone,
            'date': date,
            'total': total,
        }) ), 2000)
    })



    function createOrder ()  {

        getData().then(data => {
            dispatch(testActions.setData({ value: '', type: 'removeDataClose' }));
            localStorage.setItem('date', JSON.stringify(subtractYears(today, 18)));
            showNotification();
        })
    }




return (
        <div className={`${styles.finalInfo} ${!status ? styles.inactive : ''}`}>

            <h3 className={styles.finalInfo__main}>{surname} {name} {nameOfFather}</h3>
            <p className={styles.finalInfo__text}>{phone}</p>
            <p className={styles.finalInfo__text}>Номер «{typeOfRoom}» на {nights} {declOfNum(nights, ['ночь', 'ночи', 'ночей'])}</p>
            <p className={styles.finalInfo__text}>
               {adults} {declOfNum(adults, ['взрослый', 'взрослых', 'взрослых'])}
                <span className={`${children > 0 ? '' : styles.inactive}`}>, {children} {declOfNum(adults, ['ребенок', 'ребенка', 'детей'])} от 5 до 12 лет</span>
                <span className={`${children > 0 ? '' : styles.inactive}`}>
                    и {childrenFive} {declOfNum(adults, ['ребенок', 'ребенка', 'детей'])} младше 5 лет</span>
            </p>
            <p className={styles.finalInfo__text}>{insurance}</p>
            <p className={`${styles.finalInfo__text} ${styles.last}`}>
                К оплате <span className={styles.finalInfo__textMain}>{total} ₽</span>
            </p>


            <div className={styles.finalInfo__btns}>
                <BackButton text='Назад к данным покупателя' action={showDataForm} />
                <MainButton text='Оплатить' action={createOrder} />
            </div>

        </div>
    );
}

export default FinalInfo;