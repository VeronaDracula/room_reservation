import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import styles from './FormData.module.scss';

import { testActions } from "../../Redux/slice/slice";

import Input from '../Input/Input';
import InputPhone from '../InputPhone/InputPhone';
import InputDate from '../InputDate/InputDate';
import MainButton from '../MainButton/MainButton';
import BackButton from '../BackButton/BackButton';

function FormData(props) {

    const {
        status,
        showPriceForm,
        showFinalInfo
    } = props;

    const dispatch = useDispatch();

    const surname = useSelector((state) => state?.test?.data?.surname?.text || '');
    const errorSurname = useSelector((state) => state?.test?.data?.surname?.error || false);
    const name = useSelector((state) => state?.test?.data?.name?.text || '');
    const errorName = useSelector((state) => state?.test?.data?.name?.error || false);
    const nameOfFather = useSelector((state) => state?.test?.data?.nameOfFather || '');
    const phone = useSelector((state) => state?.test?.data?.phone?.text || '');
    const errorPhone = useSelector((state) => state?.test?.data?.phone?.error || false);
    const date = useSelector((state) => state?.test?.data?.date?.text || '');
    const errorDate = useSelector((state) => state?.test?.data?.date?.error || false);



    useEffect(() => {
        const today = new Date();
        dispatch(testActions.setData({ value: {error: false, text: JSON.stringify(subtractYears(today, 18))}, type: 'date' }));
    }, [])



    function subtractYears(date, years) {
        date.setFullYear(date.getFullYear() - years);
        return date;
    }

    const handlerSurname = (text) => {
        dispatch(testActions.setData({ value: {error: false, text: text}, type: 'surname' }));
    }

    const handlerName = (text) => {
        dispatch(testActions.setData({ value: {error: false, text: text}, type: 'name' }));
    }

    const handlerNameOfFather = (text) => {
        dispatch(testActions.setData({ value: text, type: 'nameOfFather' }));
    }

    const handlerPhone = (text) => {
        dispatch(testActions.setData({ value: {error: false, text: text}, type: 'phone' }));
    }

    const handlerDate = (text) => {
        dispatch(testActions.setData({ value: {error: false, text: JSON.stringify(text)}, type: 'date' }));
    }



    function next() {

        if (surname === '') {
            dispatch(testActions.setData({ value: {error: true, text: ''}, type: 'surname' }));
        }
        else if(name === '') {
            dispatch(testActions.setData({ value: {error: true, text: ''}, type: 'name' }));
        }
        else if(phone === '') {
            dispatch(testActions.setData({ value: {error: true, text: ''}, type: 'phone' }));
        }
        else if(date === '') {
            dispatch(testActions.setData({ value: {error: true, text: ''}, type: 'date' }));
        }

        else {
            showFinalInfo();
        }
    }




    return (
        <div className={`${styles.data} ${!status ? styles.inactive : ''}`}>

            <div className={styles.data__box}>
                <p className={styles.data__text}>Фамилия</p>
                <Input
                    changeHandler={handlerSurname}
                    errorStatus={errorSurname}
                    errorText={'Обязательное поле'}
                    valueInput={surname} />
            </div>

            <div className={styles.data__box}>
                <p className={styles.data__text}>Имя</p>
                <Input
                    changeHandler={handlerName}
                    errorStatus={errorName}
                    errorText={'Обязательное поле'}
                    valueInput={name} />
            </div>

            <div className={styles.data__box}>
                <p className={styles.data__text}>Отчество</p>
                <Input
                    changeHandler={handlerNameOfFather}
                    valueInput={nameOfFather} />
            </div>

            <div className={styles.data__box}>
                <p className={styles.data__text}>Номер телефона</p>
                <InputPhone
                    placeholder='+ 799912345-67'
                    changeHandler={handlerPhone}
                    valueInput={phone}
                    errorStatus={errorPhone}
                />
            </div>

            <div className={styles.data__box}>
                <p className={styles.data__text}>Дата рождения</p>
                <InputDate
                    changeHandler={handlerDate}
                    // valueInput={date}
                    errorStatus={errorDate}
                />
            </div>


            <div className={styles.data__btns}>
                <BackButton text='Назад к расчету стоимости' action={showPriceForm} />
                <MainButton text='Далее' action={next} />
            </div>

        </div>
    );
}

export default FormData;