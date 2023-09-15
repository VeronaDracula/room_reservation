import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import DatePicker from "react-datepicker";

import styles from './FormData.module.scss';
import "react-datepicker/dist/react-datepicker.css";

import { testActions } from "../../Redux/slice/slice";

import Input from '../Input/Input';
import InputPhone from '../InputPhone/InputPhone';
import MainButton from '../MainButton/MainButton';
import BackButton from '../BackButton/BackButton';

function FormData(props) {

    const {
        status,
        showPriceForm,
        showFinalInfo
    } = props;

    const dispatch = useDispatch();

    const surname = useSelector((state) => state?.test?.data?.surname || '');
    const name = useSelector((state) => state?.test?.data?.name || '');
    const nameOfFather = useSelector((state) => state?.test?.data?.nameOfFather || '');
    const phone = useSelector((state) => state?.test?.data?.phone || '');
    const date = useSelector((state) => state?.test?.data?.date || '');

    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {


    }, [])


    const handlerSurname = (text) => {
        dispatch(testActions.setData({ value: text, type: 'surname' }));
    }

    const handlerName = (text) => {
        dispatch(testActions.setData({ value: text, type: 'name' }));
    }

    const handlerNameOfFather = (text) => {
        dispatch(testActions.setData({ value: text, type: 'nameOfFather' }));
    }



    function next() {
        showFinalInfo();

        console.log(surname)
        console.log(name)
        console.log(nameOfFather)
    }




    return (
        <div className={`${styles.data} ${!status ? styles.inactive : ''}`}>

            <p className={styles.data__text}>Фамилия</p>
            <Input
                changeHandler={handlerSurname}
                // errorStartus={linkErrorStatus}
                valueInput={surname} />

            <p className={styles.data__text}>Имя</p>
            <Input
                changeHandler={handlerName}
                // errorStartus={linkErrorStatus}
                valueInput={name} />

            <p className={styles.data__text}>Отчество</p>
            <Input
                changeHandler={handlerNameOfFather}
                // errorStartus={linkErrorStatus}
                valueInput={nameOfFather} />

            <p className={styles.data__text}>Номер телефона</p>
            <InputPhone placeholder='+ 7 999 123 45-67' />

            <p className={styles.data__text}>Дата рождения</p>
            <DatePicker className={styles.data__calendar} selected={startDate} onChange={(date) => setStartDate(date)} dateFormat={'MM.dd.yyyy'} />




            <div className={styles.data__btns}>
                <BackButton text='Назад к расчету стоимости' action={showPriceForm} />
                <MainButton text='Далее' action={next} />
            </div>



        </div>
    );
}

export default FormData;